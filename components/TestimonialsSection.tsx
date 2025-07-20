
'use client';

export default function TestimonialsSection() {
  const featuredTestimonials = [
    {
      name: 'Sarah Chen',
      role: 'Senior Full-Stack Engineer at Meta',
      company: 'Meta',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20Asian%20woman%20software%20engineer%2C%20modern%20tech%20company%20background%2C%20premium%20LinkedIn%20style%20portrait%2C%20professional%20lighting%2C%20clean%20corporate%20aesthetic&width=150&height=150&seq=avatar-sarah&orientation=squarish',
      quote: 'Code Arena revolutionized our team\'s productivity. The real-time collaboration features are absolutely game-changing. We\'ve reduced debugging time by 70% and our code quality has never been better.',
      rating: 5,
      achievement: '10x Engineer',
      metrics: '70% faster debugging'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Tech Lead at Google',
      company: 'Google',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20Hispanic%20male%20tech%20lead%2C%20confident%20expression%2C%20modern%20Google%20office%20background%2C%20premium%20corporate%20portrait%20style%2C%20professional%20lighting&width=150&height=150&seq=avatar-marcus&orientation=squarish',
      quote: 'The HD video integration is flawless. Being able to mentor junior developers through live coding sessions has transformed our onboarding process. This platform is the future of collaborative development.',
      rating: 5,
      achievement: 'Tech Lead',
      metrics: '50% faster onboarding'
    }
  ];

  const regularTestimonials = [
    {
      name: 'Emily Watson',
      role: 'Senior DevOps Engineer',
      company: 'Netflix',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20blonde%20woman%20DevOps%20engineer%2C%20Netflix%20corporate%20style%2C%20confident%20professional%20look%2C%20modern%20tech%20background%2C%20premium%20portrait&width=100&height=100&seq=avatar-emily&orientation=squarish',
      quote: 'The seamless integration between video calls and code editing is mind-blowing. Our distributed team feels more connected than ever.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Principal Software Architect',
      company: 'Microsoft',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20Korean%20male%20software%20architect%2C%20Microsoft%20corporate%20environment%2C%20authoritative%20professional%20look%2C%20clean%20tech%20background%2C%20premium%20style&width=100&height=100&seq=avatar-david&orientation=squarish',
      quote: 'Code Arena\'s mentor network is incredible. Having access to industry experts for instant help has accelerated our team\'s learning curve exponentially.',
      rating: 5
    },
    {
      name: 'Priya Patel',
      role: 'Lead Frontend Developer',
      company: 'Airbnb',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20Indian%20woman%20frontend%20developer%2C%20Airbnb%20corporate%20style%2C%20warm%20professional%20smile%2C%20modern%20office%20background%2C%20premium%20portrait&width=100&height=100&seq=avatar-priya&orientation=squarish',
      quote: 'The real-time code synchronization is perfect. Multiple developers can work on the same file without any conflicts. It\'s magic!',
      rating: 5
    },
    {
      name: 'Alex Thompson',
      role: 'Senior Backend Engineer',
      company: 'Spotify',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20young%20Caucasian%20male%20backend%20engineer%2C%20Spotify%20modern%20office%20vibe%2C%20creative%20professional%20style%2C%20tech%20startup%20background%2C%20premium%20lighting&width=100&height=100&seq=avatar-alex&orientation=squarish',
      quote: 'The platform\'s performance is incredible. Zero latency in video calls and instant code updates. This is how coding should be done.',
      rating: 5
    },
    {
      name: 'Jessica Liu',
      role: 'Mobile App Developer',
      company: 'Uber',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20Asian%20woman%20mobile%20developer%2C%20Uber%20corporate%20aesthetic%2C%20confident%20tech%20professional%2C%20modern%20workplace%20background%2C%20premium%20portrait%20style&width=100&height=100&seq=avatar-jessica&orientation=squarish',
      quote: 'Code Arena has completely changed how we handle mobile development. Cross-platform debugging with live mentorship is a game-changer.',
      rating: 5
    },
    {
      name: 'Ryan O\'Connor',
      role: 'DevOps Specialist',
      company: 'AWS',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20Irish%20male%20DevOps%20specialist%2C%20AWS%20corporate%20environment%2C%20technical%20expert%20appearance%2C%20cloud%20technology%20background%2C%20professional%20lighting&width=100&height=100&seq=avatar-ryan&orientation=squarish',
      quote: 'The enterprise security features are top-notch. We can collaborate with confidence knowing our code is protected by bank-level encryption.',
      rating: 5
    }
  ];

  return (
    <section className="py-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(168,85,247,0.15)_0%,transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_50%,rgba(59,130,246,0.15)_0%,transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-6 py-3 mb-8">
            <span className="text-yellow-400 text-sm font-bold">⭐ ELITE TESTIMONIALS</span>
          </div>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-white via-yellow-400 to-orange-400 bg-clip-text text-transparent mb-6">
            Legends Speak
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Hear from industry titans who've mastered the Code Arena and transformed their development process forever.
          </p>
        </div>

        {/* Featured testimonials */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {featuredTestimonials.map((testimonial, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all"></div>
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl p-12 rounded-3xl border border-slate-700/50 hover:border-slate-600/50 transition-all shadow-2xl">
                <div className="flex items-start gap-6 mb-8">
                  <div className="relative">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-2xl object-cover object-top border-2 border-gradient-to-r from-cyan-400 to-purple-400"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      {testimonial.achievement}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-white mb-1">{testimonial.name}</h4>
                    <p className="text-lg text-gray-300 mb-2">{testimonial.role}</p>
                    <div className="flex items-center space-x-3">
                      <span className="text-cyan-400 font-semibold">{testimonial.company}</span>
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <i key={i} className="ri-star-fill text-yellow-400"></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <blockquote className="text-xl text-gray-200 leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-green-400/30">
                    <span className="text-green-400 font-bold text-sm">{testimonial.metrics}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <i className="ri-verified-badge-fill text-blue-400"></i>
                    <span className="text-sm">Verified User</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regular testimonials grid */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-12 mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">More Success Stories</h3>
            <p className="text-xl text-gray-300">Join thousands who've elevated their coding game</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularTestimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/30 hover:border-slate-500/50 transition-all group-hover:transform group-hover:scale-105 h-full">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-xl object-cover object-top mr-4 border border-slate-600"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm mb-1">{testimonial.role}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 text-sm font-semibold">{testimonial.company}</span>
                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <i key={i} className="ri-star-fill text-yellow-400 text-sm"></i>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-gray-300 leading-relaxed text-sm">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-16 text-center shadow-2xl">
          <h3 className="text-4xl font-bold text-white mb-12">Trusted by Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <div className="text-5xl font-bold text-white mb-2">2.5M+</div>
              <div className="text-indigo-100">Active Developers</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-indigo-100">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">99.9%</div>
              <div className="text-indigo-100">Uptime SLA</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-indigo-100">User Rating</div>
            </div>
          </div>
          <button className="mt-12 bg-white text-indigo-600 px-12 py-5 rounded-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 text-lg whitespace-nowrap cursor-pointer shadow-xl">
            🚀 Join the Elite
          </button>
        </div>
      </div>
    </section>
  );
}
