
'use client';

export default function HowItWorksSection() {
  const steps = [
    {
      step: '01',
      title: 'Launch Your Arena',
      description: 'Enter our immersive coding environment with advanced IDE features, intelligent autocomplete, and instant project setup. Choose from 50+ programming languages and frameworks.',
      image: 'https://readdy.ai/api/search-image?query=Futuristic%20coding%20interface%20with%20holographic%20displays%2C%20multiple%20coding%20windows%2C%20advanced%20IDE%20with%20neon%20highlights%2C%20cyberpunk%20aesthetic%2C%20developer%20hands%20on%20keyboard%2C%20glowing%20screens%20with%20code%2C%20high-tech%20workspace%20setup&width=800&height=500&seq=step1-launch&orientation=landscape',
      features: ['50+ Languages', 'Smart Autocomplete', 'Instant Setup', 'Cloud Sync']
    },
    {
      step: '02',
      title: 'Connect with Elite Network',
      description: 'Access our network of 10K+ verified senior developers, mentors, and coding experts. Get instant help through HD video calls, screen sharing, and real-time collaboration.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20video%20call%20interface%20showing%20multiple%20developers%20collaborating%2C%20HD%20video%20quality%2C%20modern%20UI%20design%2C%20mentor%20helping%20student%20through%20screen%20sharing%2C%20high-tech%20collaboration%20setup%20with%20multiple%20screens&width=800&height=500&seq=step2-connect&orientation=landscape',
      features: ['10K+ Experts', 'HD Video Calls', 'Screen Sharing', 'Instant Help']
    },
    {
      step: '03',
      title: 'Code Together in Real-Time',
      description: 'Experience seamless collaboration with synchronized coding, live cursors, real-time chat, and advanced debugging tools. Build better software faster with your team.',
      image: 'https://readdy.ai/api/search-image?query=Multiple%20developers%20coding%20together%20on%20shared%20screen%2C%20real-time%20collaboration%20interface%2C%20synchronized%20code%20editing%2C%20live%20cursors%2C%20chat%20messages%2C%20team%20collaboration%20in%20modern%20workspace%2C%20futuristic%20coding%20environment&width=800&height=500&seq=step3-collaborate&orientation=landscape',
      features: ['Live Sync', 'Real-time Chat', 'Team Debugging', 'Version Control']
    }
  ];

  return (
    <section id="how-it-works" className="py-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_25%,rgba(168,85,247,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_75%,rgba(34,197,94,0.1)_0%,transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-cyan-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-3 mb-8">
            <span className="text-green-400 text-sm font-bold">⚡ LIGHTNING FAST PROCESS</span>
          </div>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-white via-green-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Master the Arena
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From zero to hero in three simple steps. Experience the most advanced collaborative coding platform ever created.
          </p>
        </div>

        <div className="space-y-32">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-16 w-px h-16 bg-gradient-to-b from-cyan-400 to-transparent"></div>
              )}
              
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
                {/* Content */}
                <div className="flex-1 space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-2xl">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4">
                    {step.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full"></div>
                        <span className="text-gray-200 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer shadow-xl">
                    Try This Step →
                  </button>
                </div>
                
                {/* Visual */}
                <div className="flex-1 relative">
                  <div className="relative group">
                    {/* Glowing border effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                    
                    <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700/50">
                      <img 
                        src={step.image}
                        alt={step.title}
                        className="w-full h-96 object-cover object-top rounded-xl shadow-2xl"
                      />
                      
                      {/* Overlay stats */}
                      <div className="absolute top-10 right-10 bg-black/80 backdrop-blur-xl rounded-xl p-4 border border-slate-600/50">
                        <div className="flex items-center space-x-2 text-green-400 text-sm font-bold">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span>LIVE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating achievement badges */}
                  <div className="absolute -top-8 -left-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-xl animate-bounce">
                    🏆 Pro Level
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-32 text-center">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-16 border border-slate-700/50 shadow-2xl">
            <h3 className="text-4xl font-bold text-white mb-6">Ready to Master All Steps?</h3>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Join thousands of developers who've transformed their coding experience. Start your journey in the Code Arena today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-5 rounded-xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 text-lg whitespace-nowrap cursor-pointer shadow-xl">
                🚀 Start Mastery Journey
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-12 py-5 rounded-xl font-bold hover:bg-cyan-400/10 transition-all text-lg whitespace-nowrap cursor-pointer backdrop-blur-sm">
                📖 View Full Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
