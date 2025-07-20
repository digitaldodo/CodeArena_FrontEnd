'use client';

import { Project } from '../../lib/codeCollaboration';

interface ProjectCardProps {
  project: Project;
  onStartCall: (participants: string[]) => void;
}

export default function ProjectCard({ project, onStartCall }: ProjectCardProps) {
  const getLanguageIcon = (language: string) => {
    const icons = {
      javascript: 'ri-javascript-line',
      python: 'ri-code-line',
      react: 'ri-reactjs-line',
      typescript: 'ri-code-s-slash-line',
      html: 'ri-html5-line',
      css: 'ri-css3-line'
    };
    return icons[language as keyof typeof icons] || 'ri-code-line';
  };

  const getLanguageColor = (language: string) => {
    const colors = {
      javascript: 'from-yellow-500 to-orange-500',
      python: 'from-blue-500 to-green-500',
      react: 'from-cyan-500 to-blue-500',
      typescript: 'from-blue-600 to-indigo-500',
      html: 'from-orange-500 to-red-500',
      css: 'from-blue-500 to-purple-500'
    };
    return colors[language as keyof typeof colors] || 'from-gray-500 to-slate-500';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const onlineCollaborators = project.collaborators.filter(c => c.isOnline);

  return (
    <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all group shadow-xl">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 bg-gradient-to-r ${getLanguageColor(project.language)} rounded-xl flex items-center justify-center`}>
              <i className={`${getLanguageIcon(project.language)} text-white text-xl`}></i>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-400 text-sm">{project.language}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {project.isOwner && (
              <div className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full text-xs font-medium">
                Owner
              </div>
            )}
            <div className="relative group/menu">
              <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="ri-more-2-line"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-6 line-clamp-2">
          {project.description || 'No description available'}
        </p>

        {/* Collaborators */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="flex -space-x-2">
              {project.collaborators.slice(0, 3).map((collaborator, index) => (
                <div
                  key={collaborator.id}
                  className="relative"
                  title={collaborator.name}
                >
                  {collaborator.avatar ? (
                    <img
                      src={collaborator.avatar}
                      alt={collaborator.name}
                      className="w-8 h-8 rounded-full border-2 border-slate-800 object-cover object-top"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full border-2 border-slate-800 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {collaborator.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  {collaborator.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-slate-800"></div>
                  )}
                </div>
              ))}
              {project.collaborators.length > 3 && (
                <div className="w-8 h-8 bg-slate-700 rounded-full border-2 border-slate-800 flex items-center justify-center">
                  <span className="text-gray-300 text-xs font-bold">
                    +{project.collaborators.length - 3}
                  </span>
                </div>
              )}
            </div>
            <span className="text-gray-400 text-sm">
              {onlineCollaborators.length} online
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 mb-4">
          <button className="flex-1 bg-gradient-to-r from-orange-600 to-amber-600 text-white py-2 px-4 rounded-xl font-semibold hover:from-orange-700 hover:to-amber-700 transition-all whitespace-nowrap cursor-pointer text-sm">
            <i className="ri-code-line mr-2"></i>
            Open Project
          </button>
          
          {onlineCollaborators.length > 1 && (
            <button
              onClick={() => onStartCall(onlineCollaborators.map(c => c.id))}
              className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-xl transition-colors cursor-pointer"
              title="Start video call"
            >
              <i className="ri-video-line"></i>
            </button>
          )}
          
          <button className="bg-slate-700 hover:bg-slate-600 text-gray-300 hover:text-white p-2 rounded-xl transition-colors cursor-pointer" title="Share project">
            <i className="ri-share-line"></i>
          </button>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-slate-700">
          <span>Updated {formatDate(project.updatedAt)}</span>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <i className="ri-file-line"></i>
              <span>{project.files.length} files</span>
            </span>
            <span className="flex items-center space-x-1">
              <i className="ri-time-line"></i>
              <span>{formatDate(project.createdAt)}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}