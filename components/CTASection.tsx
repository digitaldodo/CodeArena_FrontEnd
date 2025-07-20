
'use client';

export default function CTASection() {
  return (
    <section 
      className="py-0 relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 50%, rgba(99, 102, 241, 0.85) 100%), url('https://readdy.ai/api/search-image?query=Epic%20futuristic%20coding%20arena%20with%20holographic%20interfaces%2C%20multiple%20developers%20collaborating%20in%20high-tech%20environment%2C%20cyberpunk%20aesthetic%20with%20neon%20lights%2C%20glass%20surfaces%2C%20floating%20code%20displays%2C%20dramatic%20lighting%2C%20ultra-modern%20workspace%20with%20ambient%20blue%20and%20purple%20glow&width=1920&height=800&seq=cta-arena&orientation=landscape')`
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-1 h-1 bg-violet-400 rounded-full animate-ping"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-8 py-4 mb-12">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-4 animate-pulse"></div>
            <span className="text-green-300 font-bold text-lg">🔥 LIMITED TIME: 50% OFF FIRST MONTH</span>
          </div>

          {/* Main heading */}
          <h2 className="text-7xl font-bold text-white mb-8 leading-tight">
            Your Coding <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Evolution
            </span> Starts Now
          </h2>
          
          <p className="text-2xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto">
            Stop coding alone. Join the elite community of 2.5 million developers who've revolutionized their development process. Experience the future of collaborative coding today.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
              <div className="text-3xl font-bold text-cyan-400 mb-2">2.5M+</div>
              <div className="text-gray-300 text-sm">Active Developers</div>
            </div>
            <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
              <div className="text-3xl font-bold text-green-400 mb-2">50K+</div>
              <div className="text-gray-300 text-sm">Daily Sessions</div>
            </div>
            <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
              <div className="text-3xl font-bold text-purple-400 mb-2">10K+</div>
              <div className="text-gray-300 text-sm">Expert Mentors</div>
            </div>
            <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
              <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Uptime SLA</div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-16 py-6 rounded-2xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 text-xl whitespace-nowrap cursor-pointer shadow-2xl">
              🚀 Enter Arena Now
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-16 py-6 rounded-2xl font-bold hover:bg-cyan-400/10 transition-all text-xl whitespace-nowrap cursor-pointer backdrop-blur-sm">
              🎥 Watch Epic Demo
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-12 text-gray-300 mb-12">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <i className="ri-check-line text-white text-sm"></i>
              </div>
              <span className="font-medium text-lg">14-Day Free Trial</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <i className="ri-check-line text-white text-sm"></i>
              </div>
              <span className="font-medium text-lg">No Credit Card Required</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                <i className="ri-check-line text-white text-sm"></i>
              </div>
              <span className="font-medium text-lg">Cancel Anytime</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                <i className="ri-check-line text-white text-sm"></i>
              </div>
              <span className="font-medium text-lg">Enterprise Security</span>
            </div>
          </div>

          {/* Social proof */}
          <div className="bg-gradient-to-br from-black/40 to-slate-900/40 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50 max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-left">
                <div className="text-2xl font-bold text-white mb-4">Join Industry Leaders</div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Trusted by developers at Google, Meta, Microsoft, Netflix, and 500+ other leading tech companies worldwide.
                </p>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-center space-x-8">
                  <div className="flex -space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-800 flex items-center justify-center text-white font-bold">G</div>
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full border-4 border-slate-800 flex items-center justify-center text-white font-bold">M</div>
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full border-4 border-slate-800 flex items-center justify-center text-white font-bold">N</div>
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-800 flex items-center justify-center text-white font-bold">+</div>
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-cyan-400">500+</div>
                    <div className="text-gray-300 text-sm">Companies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
}
