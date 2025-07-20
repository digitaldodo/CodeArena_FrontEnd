'use client';

import { wsManager } from './websocket';

export interface CodeChange {
  id: string;
  file: string;
  operation: 'insert' | 'delete' | 'replace';
  position: { line: number; column: number };
  content: string;
  userId: string;
  timestamp: number;
}

export interface CursorPosition {
  userId: string;
  file: string;
  line: number;
  column: number;
  color: string;
}

export interface Project {
  id: string;
  name: string;
  description?: string;
  language: string;
  files: ProjectFile[];
  collaborators: Collaborator[];
  isOwner: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectFile {
  path: string;
  content: string;
  language: string;
  lastModified: number;
}

export interface Collaborator {
  id: string;
  name: string;
  avatar?: string;
  role: 'owner' | 'editor' | 'viewer';
  isOnline: boolean;
  cursor?: CursorPosition;
}

class CodeCollaborationManager {
  private currentProject: Project | null = null;
  private activeUsers: Map<string, Collaborator> = new Map();
  private changeHistory: CodeChange[] = [];
  private listeners: ((project: Project | null) => void)[] = [];
  private cursors: Map<string, CursorPosition> = new Map();

  constructor() {
    this.setupWebSocketListeners();
  }

  private setupWebSocketListeners() {
    wsManager.subscribe('code_change', this.handleCodeChange.bind(this));
    wsManager.subscribe('cursor_position', this.handleCursorPosition.bind(this));
    wsManager.subscribe('user_joined', this.handleUserJoined.bind(this));
    wsManager.subscribe('user_left', this.handleUserLeft.bind(this));
    wsManager.subscribe('project_updated', this.handleProjectUpdated.bind(this));
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.currentProject));
  }

  subscribe(listener: (project: Project | null) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  async createProject(projectData: {
    name: string;
    description?: string;
    language: string;
    template?: string;
  }): Promise<Project> {
    try {
      // Create initial file structure based on language/template
      const initialFiles = this.createInitialFiles(projectData.language, projectData.template);
      
      const project: Project = {
        id: `project_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        name: projectData.name,
        description: projectData.description,
        language: projectData.language,
        files: initialFiles,
        collaborators: [{
          id: 'current_user',
          name: 'You',
          role: 'owner',
          isOnline: true
        }],
        isOwner: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      this.currentProject = project;
      this.notifyListeners();
      
      return project;
    } catch (error) {
      console.error('Failed to create project:', error);
      throw error;
    }
  }

  private createInitialFiles(language: string, template?: string): ProjectFile[] {
    const templates = {
      javascript: [
        { path: 'index.js', content: 'console.log("Hello, Code Arena!");', language: 'javascript' },
        { path: 'package.json', content: JSON.stringify({
          name: 'code-arena-project',
          version: '1.0.0',
          main: 'index.js'
        }, null, 2), language: 'json' }
      ],
      python: [
        { path: 'main.py', content: 'print("Hello, Code Arena!")', language: 'python' },
        { path: 'requirements.txt', content: '', language: 'text' }
      ],
      react: [
        { path: 'App.jsx', content: `import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Code Arena!</h1>
    </div>
  );
}

export default App;`, language: 'jsx' },
        { path: 'index.js', content: `import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));`, language: 'javascript' }
      ]
    };

    return (templates[language as keyof typeof templates] || [
      { path: 'main.txt', content: 'Welcome to Code Arena!', language: 'text' }
    ]).map(file => ({
      ...file,
      lastModified: Date.now()
    }));
  }

  async joinProject(projectId: string): Promise<void> {
    try {
      wsManager.joinCodeSession(projectId, 'current_user');
      // In a real implementation, you would fetch project data from the server
      this.notifyListeners();
    } catch (error) {
      console.error('Failed to join project:', error);
      throw error;
    }
  }

  leaveProject(): void {
    if (this.currentProject) {
      wsManager.leaveCodeSession(this.currentProject.id, 'current_user');
      this.currentProject = null;
      this.activeUsers.clear();
      this.cursors.clear();
      this.notifyListeners();
    }
  }

  updateFileContent(filePath: string, content: string, position: { line: number; column: number }): void {
    if (!this.currentProject) return;

    const change: CodeChange = {
      id: `change_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      file: filePath,
      operation: 'replace',
      position,
      content,
      userId: 'current_user',
      timestamp: Date.now()
    };

    this.applyChange(change);
    wsManager.sendCodeChange(this.currentProject.id, change);
  }

  insertText(filePath: string, position: { line: number; column: number }, text: string): void {
    if (!this.currentProject) return;

    const change: CodeChange = {
      id: `change_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      file: filePath,
      operation: 'insert',
      position,
      content: text,
      userId: 'current_user',
      timestamp: Date.now()
    };

    this.applyChange(change);
    wsManager.sendCodeChange(this.currentProject.id, change);
  }

  deleteText(filePath: string, position: { line: number; column: number }, length: number): void {
    if (!this.currentProject) return;

    const change: CodeChange = {
      id: `change_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      file: filePath,
      operation: 'delete',
      position,
      content: length.toString(),
      userId: 'current_user',
      timestamp: Date.now()
    };

    this.applyChange(change);
    wsManager.sendCodeChange(this.currentProject.id, change);
  }

  updateCursorPosition(filePath: string, line: number, column: number): void {
    if (!this.currentProject) return;

    const position = { file: filePath, line, column };
    wsManager.sendCursorPosition(this.currentProject.id, position);
  }

  private applyChange(change: CodeChange): void {
    if (!this.currentProject) return;

    const fileIndex = this.currentProject.files.findIndex(f => f.path === change.file);
    if (fileIndex === -1) return;

    const file = this.currentProject.files[fileIndex];
    
    switch (change.operation) {
      case 'insert':
        file.content = this.insertTextAtPosition(file.content, change.position, change.content);
        break;
      case 'delete':
        file.content = this.deleteTextAtPosition(file.content, change.position, parseInt(change.content));
        break;
      case 'replace':
        file.content = change.content;
        break;
    }

    file.lastModified = change.timestamp;
    this.changeHistory.push(change);
    this.notifyListeners();
  }

  private insertTextAtPosition(content: string, position: { line: number; column: number }, text: string): string {
    const lines = content.split('\n');
    const line = lines[position.line] || '';
    const before = line.substring(0, position.column);
    const after = line.substring(position.column);
    lines[position.line] = before + text + after;
    return lines.join('\n');
  }

  private deleteTextAtPosition(content: string, position: { line: number; column: number }, length: number): string {
    const lines = content.split('\n');
    const line = lines[position.line] || '';
    const before = line.substring(0, position.column);
    const after = line.substring(position.column + length);
    lines[position.line] = before + after;
    return lines.join('\n');
  }

  private handleCodeChange(data: { projectId: string; change: CodeChange }) {
    if (this.currentProject?.id === data.projectId && data.change.userId !== 'current_user') {
      this.applyChange(data.change);
    }
  }

  private handleCursorPosition(data: { projectId: string; position: CursorPosition }) {
    if (this.currentProject?.id === data.projectId) {
      this.cursors.set(data.position.userId, data.position);
      this.notifyListeners();
    }
  }

  private handleUserJoined(data: { projectId: string; user: Collaborator }) {
    if (this.currentProject?.id === data.projectId) {
      this.activeUsers.set(data.user.id, data.user);
      
      if (this.currentProject) {
        const existingIndex = this.currentProject.collaborators.findIndex(c => c.id === data.user.id);
        if (existingIndex >= 0) {
          this.currentProject.collaborators[existingIndex] = { ...data.user, isOnline: true };
        } else {
          this.currentProject.collaborators.push({ ...data.user, isOnline: true });
        }
      }
      
      this.notifyListeners();
    }
  }

  private handleUserLeft(data: { projectId: string; userId: string }) {
    if (this.currentProject?.id === data.projectId) {
      this.activeUsers.delete(data.userId);
      this.cursors.delete(data.userId);
      
      if (this.currentProject) {
        const collaboratorIndex = this.currentProject.collaborators.findIndex(c => c.id === data.userId);
        if (collaboratorIndex >= 0) {
          this.currentProject.collaborators[collaboratorIndex].isOnline = false;
        }
      }
      
      this.notifyListeners();
    }
  }

  private handleProjectUpdated(data: { project: Project }) {
    if (this.currentProject?.id === data.project.id) {
      this.currentProject = { ...this.currentProject, ...data.project };
      this.notifyListeners();
    }
  }

  getCurrentProject(): Project | null {
    return this.currentProject;
  }

  getActiveCursors(): CursorPosition[] {
    return Array.from(this.cursors.values());
  }

  getChangeHistory(): CodeChange[] {
    return this.changeHistory;
  }

  async shareProject(userEmail: string, permissions: 'editor' | 'viewer'): Promise<void> {
    if (!this.currentProject) return;

    try {
      // In a real implementation, this would call the API
      console.log(`Sharing project ${this.currentProject.id} with ${userEmail} as ${permissions}`);
    } catch (error) {
      console.error('Failed to share project:', error);
      throw error;
    }
  }

  async saveProject(): Promise<void> {
    if (!this.currentProject) return;

    try {
      // In a real implementation, this would save to the server
      this.currentProject.updatedAt = new Date().toISOString();
      this.notifyListeners();
    } catch (error) {
      console.error('Failed to save project:', error);
      throw error;
    }
  }
}

export const codeCollaborationManager = new CodeCollaborationManager();