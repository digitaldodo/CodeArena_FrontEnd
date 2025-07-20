'use client';

import { useState, useEffect } from 'react';
import { authManager, User } from '../../lib/auth';
import { codeCollaborationManager, Project } from '../../lib/codeCollaboration';
import { videoCallManager } from '../../lib/videoCall';
import ProjectCard from './ProjectCard';
import CreateProjectModal from './CreateProjectModal';
import VideoCallInterface from './VideoCallInterface';

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'projects' | 'mentors' | 'analytics'>('projects');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = authManager.subscribe((currentUser) => {
      setUser(currentUser);
    });

    const loadDashboardData = async () => {
      try {
        setIsLoading(true);
        // Load user projects and other data
        const mockProjects: Project[] = [
          {
            id: '1',
            name: 'React E-commerce App',
            description: 'Building a modern e-commerce platform with React and Node.js',
            language: 'javascript',
            files: [],
            collaborators: [
              { id: 'user1', name: 'You', role: 'owner', isOnline: true },
              { id: 'user2', name: 'Sarah Chen', role: 'editor', isOnline: false, avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20Asian%20woman%20developer&width=50&height=50&seq=dash-avatar1&orientation=squarish' }
            ],
            isOwner: true,
            createdAt: '2024-01-20T10:00:00Z',
            updatedAt: '2024-01-22T15:30:00Z'
          },
          {
            id: '2',
            name: 'Python Data Analysis',
            description: 'Machine learning project for customer behavior analysis',
            language: 'python',
            files: [],
            collaborators: [
              { id: 'user1', name: 'You', role: 'editor', isOnline: true },
              { id: 'user3', name: 'Marcus Rodriguez', role: 'owner', isOnline: true, avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20Hispanic%20male%20data%20scientist&width=50&height=50&seq=dash-avatar2&orientation=squarish' }
            ],
            isOwner: false,
            createdAt: '2024-01-18T14:20:00Z',
            updatedAt: '2024-01-22T11:45:00Z'
          }
        ];
        setProjects(mockProjects);
      } catch (error) {
        console.error('Failed to load dashboard data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadDashboardData();
    return unsubscribe;
  }, []);

  const handleCreateProject = (projectData: any) => {
    codeCollaborationManager.createProject(projectData);
    setIsCreateModalOpen(false);
  };

  const handleStartVideoCall = async (participants: string[]) => {
    try {
      await videoCallManager.startCall(participants);
    } catch (error) {
      console.error('Failed to start video call:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <i className="ri-code-s-slash-line text-white text-2xl"></i>
          </div>
          <p className="text-gray-300">Loading your arena...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Welcome back, <span className="text-orange-400">{user.name}!</span>
            </h1>
            <p className="text-xl text-gray-300">Ready to build something amazing today?</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-6 lg:mt-0">
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl px-6 py-3 border border-slate-600">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300 font-medium">Plan: {user.plan.toUpperCase()}</span>
              </div>
            </div>
            
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-700 hover:to-amber-700 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer shadow-xl"
            >
              <i className="ri-add-line mr-2"></i>
              New Project
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-2 mb-8 border border-slate-600/50">
          <div className="flex space-x-2">
            {[
              { id: 'projects', label: 'Projects', icon: 'ri-folder-line' },
              { id: 'mentors', label: 'Mentors', icon: 'ri-user-star-line' },
              { id: 'analytics', label: 'Analytics', icon: 'ri-bar-chart-line' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <i className={tab.icon}></i>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="space-y-8">
          {activeTab === 'projects' && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">Your Projects</h2>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search projects..."
                      className="bg-slate-700 border border-slate-600 rounded-xl px-4 py-2 pl-10 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors text-sm"
                    />
                    <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  </div>
                  <button className="bg-slate-700 hover:bg-slate-600 text-gray-300 hover:text-white px-4 py-2 rounded-xl transition-colors cursor-pointer">
                    <i className="ri-filter-line"></i>
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onStartCall={handleStartVideoCall}
                  />
                ))}
                
                {/* Create New Project Card */}
                <button
                  onClick={() => setIsCreateModalOpen(true)}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-2 border-dashed border-slate-600 rounded-2xl p-8 hover:border-orange-400/50 transition-all group cursor-pointer min-h-[300px] flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-600/20 to-amber-600/20 rounded-2xl flex items-center justify-center mb-4 group-hover:from-orange-600/30 group-hover:to-amber-600/30 transition-all">
                    <i className="ri-add-line text-orange-400 text-3xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Create New Project</h3>
                  <p className="text-gray-400 text-center">Start a new coding adventure with your team</p>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'mentors' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Available Mentors</h2>
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <i className="ri-user-star-line text-white text-4xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Elite Mentor Network</h3>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Connect with industry experts and senior developers for personalized guidance, code reviews, and career advice.
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all whitespace-nowrap cursor-pointer">
                  Browse Mentors
                </button>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Coding Analytics</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { label: 'Total Projects', value: '12', icon: 'ri-folder-line', color: 'from-blue-500 to-cyan-500' },
                  { label: 'Code Sessions', value: '47', icon: 'ri-code-line', color: 'from-green-500 to-emerald-500' },
                  { label: 'Collaborators', value: '23', icon: 'ri-team-line', color: 'from-purple-500 to-pink-500' },
                  { label: 'Mentor Sessions', value: '8', icon: 'ri-graduation-cap-line', color: 'from-orange-500 to-red-500' }
                ].map((stat, index) => (
                  <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                        <i className={`${stat.icon} text-white text-xl`}></i>
                      </div>
                      <span className="text-2xl font-bold text-white">{stat.value}</span>
                    </div>
                    <p className="text-gray-300 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-6">Weekly Activity</h3>
                <div className="h-64 flex items-end justify-between space-x-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
                    const height = Math.random() * 200 + 50;
                    return (
                      <div key={day} className="flex flex-col items-center space-y-2 flex-1">
                        <div
                          className="bg-gradient-to-t from-orange-600 to-amber-400 rounded-t-lg w-full transition-all hover:from-orange-500 hover:to-amber-300"
                          style={{ height: `${height}px` }}
                        ></div>
                        <span className="text-gray-400 text-sm">{day}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Video Call Interface */}
      <VideoCallInterface />

      {/* Create Project Modal */}
      <CreateProjectModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreateProject}
      />
    </div>
  );
}