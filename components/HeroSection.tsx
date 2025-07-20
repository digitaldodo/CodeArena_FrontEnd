
'use client';

export default function HeroSection() {
  return (
    <section 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 50%, rgba(217, 119, 6, 0.85) 100%), url('https://readdy.ai/api/search-image?query=Futuristic%20coding%20arena%20with%20Indian%20artistic%20elements%2C%20traditional%20mandala%20patterns%20integrated%20with%20holographic%20screens%2C%20developers%20collaborating%20in%20high-tech%20environment%20with%20warm%20orange%20and%20saffron%20lighting%2C%20cyberpunk%20aesthetic%20mixed%20with%20Indian%20geometric%20patterns%2C%20floating%20code%20interfaces%20with%20traditional%20Indian%20motifs%2C%20glass%20surfaces%20reflecting%20both%20code%20and%20rangoli%20patterns%2C%20ultra-modern%20workspace%20with%20ambient%20saffron%20lighting%20and%20digital%20displays%20featuring%20paisley%20and%20lotus%20designs&width=1920&height=1080&seq=hero-indian-immersive&orientation=landscape')`
      }}
    >
      {/* Floating particles background with Indian colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-amber-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-yellow-500 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-amber-500 rounded-full animate-ping"></div>
      </div>

      {/* Traditional Indian pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-orange-400 rounded-full" style={{
          background: 'conic-gradient(from 0deg, transparent, rgba(251, 146, 60, 0.3), transparent)'
        }}></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-amber-400" style={{
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
        }}></div>
      </div>

      <div className="w-full px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-left">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-6 py-2 mb-8">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-orange-300 text-sm font-medium">🔥 25 Lakh+ Developers Already Coding Together</span>
              </div>
              
              <h1 className="text-7xl font-bold text-white mb-6 leading-tight">
                Enter the <br />
                <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                  Code Arena
                </span>
              </h1>
              <p className="text-2xl text-gray-200 mb-8 leading-relaxed">
                जहाँ elite developers मिलते हैं। Experience the future of collaborative coding with integrated HD video calls, real-time mentorship, and instant peer support. कभी अकेले struggle नहीं करना पड़ेगा।
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-10 py-5 rounded-xl font-bold hover:from-orange-700 hover:to-amber-700 transition-all transform hover:scale-105 text-lg whitespace-nowrap cursor-pointer shadow-2xl">
                  🚀 Arena शुरू करें
                </button>
                <button className="border-2 border-orange-400 text-orange-400 px-10 py-5 rounded-xl font-bold hover:bg-orange-400/10 transition-all text-lg whitespace-nowrap cursor-pointer backdrop-blur-sm">
                  ▶️ Epic Demo देखें
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">25L+</div>
                  <div className="text-gray-300 text-sm">Active Coders</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">50K+</div>
                  <div className="text-gray-300 text-sm">Daily Sessions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
                  <div className="text-gray-300 text-sm">Uptime</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-6 text-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="font-medium">Instant HD Video Calls</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="font-medium">Real-time Code Sync</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <span className="font-medium">Elite Mentor Network</span>
                </div>
              </div>
            </div>

            {/* Right visual elements */}
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl border border-orange-400/30 p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                    <span>Live Session</span>
                  </div>
                </div>
                
                <div className="space-y-4 text-sm font-mono">
                  <div className="text-gray-300">
                    <span className="text-orange-400">const</span> <span className="text-amber-400">collaborativeCode</span> = <span className="text-yellow-400">{`{`}</span>
                  </div>
                  <div className="text-gray-300 ml-4">
                    <span className="text-orange-300">videoCall</span>: <span className="text-amber-400">'HD Quality'</span>,
                  </div>
                  <div className="text-gray-300 ml-4">
                    <span className="text-orange-300">realTimeSync</span>: <span className="text-amber-400">true</span>,
                  </div>
                  <div className="text-gray-300 ml-4">
                    <span className="text-orange-300">mentorHelp</span>: <span className="text-amber-400">'Instant'</span>
                  </div>
                  <div className="text-gray-300">
                    <span className="text-yellow-400">{`}`}</span>;
                  </div>
                </div>

                <div className="mt-8 flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full border-2 border-slate-800"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full border-2 border-slate-800"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full border-2 border-slate-800"></div>
                  </div>
                  <div className="text-gray-300 text-sm">
                    <span className="text-orange-400">3 developers</span> coding together
                  </div>
                </div>
              </div>

              {/* Floating elements with Indian patterns */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 opacity-30 animate-bounce" style={{
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
              }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
}
