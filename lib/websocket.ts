'use client';

export interface WebSocketMessage {
  type: string;
  payload: any;
  timestamp: number;
  userId?: string;
}

class WebSocketManager {
  private ws: WebSocket | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectInterval = 5000;
  private listeners: Map<string, ((data: any) => void)[]> = new Map();
  private isConnecting = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.connect();
    }
  }

  private connect() {
    if (this.isConnecting || this.ws?.readyState === WebSocket.OPEN) {
      return;
    }

    this.isConnecting = true;
    const wsUrl = process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:3001';
    
    try {
      this.ws = new WebSocket(wsUrl);
      
      this.ws.onopen = () => {
        console.log('WebSocket connected');
        this.isConnecting = false;
        this.reconnectAttempts = 0;
        
        const token = localStorage.getItem('auth_token');
        if (token) {
          this.send('auth', { token });
        }
      };

      this.ws.onmessage = (event) => {
        try {
          const message: WebSocketMessage = JSON.parse(event.data);
          this.handleMessage(message);
        } catch (error) {
          console.error('WebSocket message parse error:', error);
        }
      };

      this.ws.onclose = () => {
        console.log('WebSocket disconnected');
        this.isConnecting = false;
        this.ws = null;
        this.scheduleReconnect();
      };

      this.ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        this.isConnecting = false;
      };
    } catch (error) {
      console.error('WebSocket connection error:', error);
      this.isConnecting = false;
      this.scheduleReconnect();
    }
  }

  private scheduleReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      setTimeout(() => {
        this.reconnectAttempts++;
        this.connect();
      }, this.reconnectInterval);
    }
  }

  private handleMessage(message: WebSocketMessage) {
    const listeners = this.listeners.get(message.type) || [];
    listeners.forEach(listener => listener(message.payload));
  }

  send(type: string, payload: any) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      const message: WebSocketMessage = {
        type,
        payload,
        timestamp: Date.now()
      };
      this.ws.send(JSON.stringify(message));
    } else {
      console.warn('WebSocket not connected, message not sent:', type);
    }
  }

  subscribe(type: string, callback: (data: any) => void) {
    if (!this.listeners.has(type)) {
      this.listeners.set(type, []);
    }
    this.listeners.get(type)!.push(callback);

    return () => {
      const listeners = this.listeners.get(type);
      if (listeners) {
        const index = listeners.indexOf(callback);
        if (index > -1) {
          listeners.splice(index, 1);
        }
      }
    };
  }

  // Real-time code collaboration
  joinCodeSession(projectId: string, userId: string) {
    this.send('join_code_session', { projectId, userId });
  }

  leaveCodeSession(projectId: string, userId: string) {
    this.send('leave_code_session', { projectId, userId });
  }

  sendCodeChange(projectId: string, change: {
    file: string;
    operation: 'insert' | 'delete' | 'replace';
    position: { line: number; column: number };
    content: string;
  }) {
    this.send('code_change', { projectId, change });
  }

  sendCursorPosition(projectId: string, position: {
    file: string;
    line: number;
    column: number;
  }) {
    this.send('cursor_position', { projectId, position });
  }

  // Video call signaling
  initiateCall(callId: string, participants: string[]) {
    this.send('initiate_call', { callId, participants });
  }

  joinCall(callId: string) {
    this.send('join_call', { callId });
  }

  sendSignal(callId: string, signal: any, targetUserId: string) {
    this.send('webrtc_signal', { callId, signal, targetUserId });
  }

  // Chat messages
  sendChatMessage(roomId: string, message: string, type: 'text' | 'code' = 'text') {
    this.send('chat_message', { roomId, message, type });
  }

  // Presence updates
  updatePresence(status: 'online' | 'away' | 'busy' | 'offline') {
    this.send('presence_update', { status });
  }

  disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }
}

export const wsManager = new WebSocketManager();