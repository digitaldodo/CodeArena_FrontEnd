
'use client';

export default function FeaturesSection() {
  const mainFeatures = [
    {
      icon: 'ri-video-line',
      title: 'Ultra HD Video Arena',
      description: 'Crystal-clear 4K video calls का experience करें zero latency के साथ। Screens share करें, face-to-face collaborate करें, और lasting connections बनाएं।',
      gradient: 'from-orange-500 to-amber-500',
      stats: '5 लाख+ calls daily'
    },
    {
      icon: 'ri-chat-3-line',
      title: 'Lightning Chat System',
      description: 'Advanced real-time messaging with code syntax highlighting, file sharing, और instant notifications।',
      gradient: 'from-amber-500 to-yellow-500',
      stats: '20 लाख+ messages/day'
    },
    {
      icon: 'ri-code-s-slash-line',
      title: 'Synchronized Code Flow',
      description: 'Code को alive आते देखें जब multiple developers simultaneously edit करते हैं। Real-time cursors, live updates, version control।',
      gradient: 'from-yellow-500 to-orange-500',
      stats: '50K+ projects active'
    }
  ];

  const additionalFeatures = [
    {
      icon: 'ri-team-line',
      title: 'Elite Team Workspace',
      description: 'Role-based permissions, team analytics, और productivity insights के साथ advanced project management।'
    },
    {
      icon: 'ri-bug-line',
      title: 'AI-Powered Debugging',
      description: 'Smart error detection with instant mentor connection। 10K+ verified senior developers से help पाएं।'
    },
    {
      icon: 'ri-graduation-cap-line',
      title: 'Immersive Learning Hub',
      description: 'Interactive coding challenges, live workshops, और expert mentors के साथ personalized learning paths।'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Enterprise Security',
      description: 'Bank-level encryption, SOC2 compliance, और enterprise teams के लिए advanced access controls।'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Performance Boosters',
      description: 'Advanced caching, CDN optimization, और lightning-fast performance के लिए intelligent load balancing।'
    },
    {
      icon: 'ri-brain-line',
      title: 'Smart Code Intelligence',
      description: 'AI-powered code completion, refactoring suggestions, और automated documentation generation।'
    }
  ];

  return (
    <section id="features" className="py-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background patterns with Indian motifs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl"></div>
        {/* Traditional pattern elements */}
        <div className="absolute top-32 right-32 w-24 h-24 border-2 border-orange-400/30" style={{
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
        }}></div>
        <div className="absolute bottom-32 left-32 w-32 h-32 border border-amber-400/20 rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-6 py-3 mb-8">
            <span className="text-orange-400 text-sm font-bold">🏆 PREMIUM FEATURES</span>
          </div>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-white via-orange-400 to-amber-400 bg-clip-text text-transparent mb-6">
            Code Arena की महारत
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Elite developers के लिए design किया गया ultimate coding environment experience करें। हर feature maximum productivity और seamless collaboration के लिए crafted।
          </p>
        </div>
        
        {/* Main features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r opacity-20 rounded-2xl blur group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl p-10 rounded-2xl border border-slate-700/50 hover:border-orange-400/50 transition-all group-hover:transform group-hover:scale-105 shadow-2xl">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  {feature.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 font-semibold text-sm">{feature.stats}</span>
                  <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center group-hover:bg-slate-600 transition-colors">
                    <i className="ri-arrow-right-line text-orange-400"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional features grid */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-12 relative overflow-hidden">
          {/* Traditional pattern overlay */}
          <div className="absolute top-0 right-0 w-40 h-40 opacity-5" style={{
            background: 'conic-gradient(from 45deg, transparent, rgba(251, 146, 60, 0.5), transparent, rgba(245, 158, 11, 0.5), transparent)'
          }}></div>
          
          <div className="text-center mb-16 relative z-10">
            <h3 className="text-4xl font-bold text-white mb-4">Advanced Arsenal</h3>
            <p className="text-xl text-gray-300">Serious developers के लिए professional-grade tools</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-slate-600/30 hover:border-orange-400/50 transition-all group-hover:transform group-hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-6 group-hover:from-yellow-500 group-hover:to-orange-500 transition-all">
                    <i className={`${feature.icon} text-white text-xl`}></i>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-12 shadow-2xl relative overflow-hidden">
            {/* Traditional mandala-inspired pattern */}
            <div className="absolute top-0 left-0 w-32 h-32 opacity-20" style={{
              background: 'radial-gradient(circle, transparent 30%, rgba(255, 255, 255, 0.3) 31%, rgba(255, 255, 255, 0.3) 35%, transparent 36%)'
            }}></div>
            <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Arena को Dominate करने के लिए ready हैं?</h3>
            <p className="text-xl text-orange-100 mb-8 relative z-10">Elite community of developers join करें जिन्होंने अपने coding experience को revolutionize कर दिया है</p>
            <button className="bg-white text-orange-600 px-12 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 text-lg whitespace-nowrap cursor-pointer shadow-xl relative z-10">
              🚀 अभी Arena में Enter करें
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
