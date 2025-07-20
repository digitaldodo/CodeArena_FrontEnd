'use client';

import { useState } from 'react';

interface CreateProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (projectData: {
    name: string;
    description?: string;
    language: string;
    template?: string;
  }) => void;
}

export default function CreateProjectModal({ isOpen, onClose, onSubmit }: CreateProjectModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    language: 'javascript',
    template: 'blank'
  });

  const languages = [
    { id: 'javascript', name: 'JavaScript', icon: 'ri-javascript-line' },
    { id: 'typescript', name: 'TypeScript', icon: 'ri-code-s-slash-line' },
    { id: 'python', name: 'Python', icon: 'ri-code-line' },
    { id: 'react', name: 'React', icon: 'ri-reactjs-line' },
    { id: 'nodejs', name: 'Node.js', icon: 'ri-nodejs-line' },
    { id: 'html', name: 'HTML/CSS', icon: 'ri-html5-line' }
  ];

  const templates = [
    { id: 'blank', name: 'Blank Project', description: 'Start from scratch' },
    { id: 'starter', name: 'Starter Template', description: 'Basic project structure' },
    { id: 'fullstack', name: 'Full-stack App', description: 'Frontend + Backend setup' },
    { id: 'api', name: 'REST API', description: 'API server template' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', description: '', language: 'javascript', template: 'blank' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8 w-full max-w-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          <i className="ri-close-line text-xl"></i>
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <i className="ri-add-line text-white text-2xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Create New Project</h2>
          <p className="text-gray-300">Start building something amazing with your team</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Project Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors text-sm"
              placeholder="My Awesome Project"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
              Description (Optional)
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors text-sm resize-none"
              placeholder="Brief description of your project..."
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-4">
              Programming Language
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {languages.map((lang) => (
                <label
                  key={lang.id}
                  className={`relative cursor-pointer group ${
                    formData.language === lang.id ? 'ring-2 ring-orange-400' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="language"
                    value={lang.id}
                    checked={formData.language === lang.id}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <div className={`bg-slate-700 border-2 rounded-xl p-4 transition-all ${
                    formData.language === lang.id
                      ? 'border-orange-400 bg-orange-400/10'
                      : 'border-slate-600 hover:border-slate-500'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <i className={`${lang.icon} text-xl ${
                        formData.language === lang.id ? 'text-orange-400' : 'text-gray-400'
                      }`}></i>
                      <span className={`font-medium ${
                        formData.language === lang.id ? 'text-white' : 'text-gray-300'
                      }`}>
                        {lang.name}
                      </span>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-4">
              Project Template
            </label>
            <div className="space-y-3">
              {templates.map((template) => (
                <label
                  key={template.id}
                  className={`relative cursor-pointer group ${
                    formData.template === template.id ? 'ring-2 ring-orange-400' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="template"
                    value={template.id}
                    checked={formData.template === template.id}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <div className={`bg-slate-700 border-2 rounded-xl p-4 transition-all ${
                    formData.template === template.id
                      ? 'border-orange-400 bg-orange-400/10'
                      : 'border-slate-600 hover:border-slate-500'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className={`font-medium mb-1 ${
                          formData.template === template.id ? 'text-white' : 'text-gray-300'
                        }`}>
                          {template.name}
                        </h4>
                        <p className="text-gray-400 text-sm">{template.description}</p>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        formData.template === template.id
                          ? 'border-orange-400 bg-orange-400'
                          : 'border-gray-500'
                      }`}>
                        {formData.template === template.id && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="flex space-x-4 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-slate-700 text-gray-300 py-3 rounded-xl font-semibold hover:bg-slate-600 hover:text-white transition-all whitespace-nowrap cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-orange-600 to-amber-600 text-white py-3 rounded-xl font-semibold hover:from-orange-700 hover:to-amber-700 transition-all whitespace-nowrap cursor-pointer"
            >
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}