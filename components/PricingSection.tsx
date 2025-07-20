
'use client';

export default function PricingSection() {
  const plans = [
    {
      name: 'Arena Starter',
      price: 'मुफ्त',
      period: 'Forever',
      description: 'Individual developers और students के लिए perfect जो अपनी coding journey शुरू कर रहे हैं',
      features: [
        'Basic coding environment',
        '5 video calls per month',
        'Community chat access',
        'Basic project collaboration',
        'Standard code completion',
        'Public project hosting',
        'Email support'
      ],
      buttonText: 'मुफ्त शुरू करें',
      buttonStyle: 'border-2 border-slate-600 text-slate-300 hover:bg-slate-800',
      popular: false,
      gradient: 'from-slate-700 to-slate-800'
    },
    {
      name: 'Arena Pro',
      price: '₹200',
      period: 'per month',
      description: 'Professional developers के लिए जिन्हें advanced collaboration features चाहिए',
      features: [
        'Advanced IDE with premium themes',
        'Unlimited HD video calls',
        'Real-time code synchronization',
        'Private project repositories',
        'AI-powered code completion',
        'Advanced debugging tools',
        'Screen sharing & recording',
        'Priority mentor access',
        'Custom integrations',
        '24/7 chat support'
      ],
      buttonText: 'Pro बनें',
      buttonStyle: 'bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:from-orange-700 hover:to-amber-700',
      popular: true,
      gradient: 'from-orange-600 to-amber-600'
    },
    {
      name: 'Arena Enterprise',
      price: '₹500',
      period: 'per user/month',
      description: 'Teams और organizations के लिए जिन्हें enterprise-grade security और features चाहिए',
      features: [
        'Everything in Pro plan',
        'Team management dashboard',
        'Advanced security controls',
        'SSO integration',
        'Custom branding',
        'Dedicated mentor pool',
        'Advanced analytics',
        'API access',
        'Custom deployment options',
        'SLA guarantee',
        'Dedicated account manager',
        'On-site training'
      ],
      buttonText: 'Sales से बात करें',
      buttonStyle: 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600',
      popular: false,
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  const addOns = [
    {
      name: 'Premium Mentor Access',
      price: '₹100/month',
      description: 'Industry experts और senior developers से priority access पाएं',
      icon: 'ri-user-star-line'
    },
    {
      name: 'Advanced Analytics',
      price: '₹100/month',
      description: 'आपके coding patterns और team productivity की detailed insights',
      icon: 'ri-bar-chart-line'
    },
    {
      name: 'Custom Integrations',
      price: '₹200/month',
      description: 'अपने favorite tools और workflows के साथ connect करें',
      icon: 'ri-puzzle-line'
    }
  ];

  return (
    <section id="pricing" className="py-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background effects with Indian patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.1)_0%,transparent_50%)]"></div>
        {/* Traditional pattern overlays */}
        <div className="absolute top-20 right-20 w-32 h-32 opacity-10" style={{
          background: 'conic-gradient(from 45deg, transparent, rgba(251, 146, 60, 0.3), transparent, rgba(245, 158, 11, 0.3), transparent)'
        }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border border-amber-400/20 rotate-45 opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-6 py-3 mb-8">
            <span className="text-orange-400 text-sm font-bold">💎 TRANSPARENT PRICING</span>
          </div>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-white via-orange-400 to-amber-400 bg-clip-text text-transparent mb-6">
            अपना Arena चुनें
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Free tier से लेकर enterprise solutions तक। अपने coding challenges को dominate करने और full potential unlock करने के लिए perfect plan चुनें।
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div key={index} className={`relative group ${plan.popular ? 'lg:scale-110 lg:-mt-8' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-orange-400 to-amber-500 text-black px-6 py-2 rounded-full text-sm font-bold shadow-xl">
                    🏆 सबसे POPULAR
                  </div>
                </div>
              )}

              <div className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} opacity-10 rounded-3xl blur group-hover:opacity-20 transition-opacity`}></div>

              <div className={`relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl border ${plan.popular ? 'border-orange-400/50' : 'border-slate-700/50'} hover:border-slate-600/50 transition-all shadow-2xl h-full`}>
                <div className="p-10">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      {plan.period !== 'Forever' && (
                        <span className="text-gray-400 text-lg ml-2">{plan.period}</span>
                      )}
                    </div>
                    <p className="text-gray-300 leading-relaxed">{plan.description}</p>
                  </div>

                  <div className="space-y-4 mb-10">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <i className="ri-check-line text-white text-sm"></i>
                        </div>
                        <span className="text-gray-200">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-4 rounded-xl font-bold transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer shadow-xl ${plan.buttonStyle}`}>
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons section */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-12 mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">अपने Arena को Power-Up करें</h3>
            <p className="text-xl text-gray-300">Premium add-ons के साथ किसी भी plan को enhance करें</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/30 hover:border-slate-500/50 transition-all group-hover:transform group-hover:scale-105 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-yellow-500 group-hover:to-orange-500 transition-all">
                    <i className={`${addon.icon} text-white text-2xl`}></i>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{addon.name}</h4>
                  <div className="text-2xl font-bold text-orange-400 mb-4">{addon.price}</div>
                  <p className="text-gray-300 leading-relaxed mb-6">{addon.description}</p>
                  <button className="bg-gradient-to-r from-slate-600 to-slate-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-slate-500 hover:to-slate-600 transition-all whitespace-nowrap cursor-pointer">
                    Plan में Add करें
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-12">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4">अक्सर पूछे जाने वाले प्रश्न</h3>
            <p className="text-xl text-gray-300">Code Arena pricing के बारे में जो कुछ भी जानना चाहते हैं</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-3">क्या मैं कभी भी upgrade या downgrade कर सकता हूं?</h4>
                <p className="text-gray-300">हाँ! आप कभी भी अपना plan change कर सकते हैं। Upgrades तुरंत effect होते हैं, और downgrades अगले billing cycle में effect होते हैं।</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-3">क्या paid plans के लिए free trial है?</h4>
                <p className="text-gray-300">बिल्कुल! सभी paid plans के साथ 14-day free trial आता है। शुरू करने के लिए कोई credit card की जरूरत नहीं।</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-3">आप कौन से payment methods accept करते हैं?</h4>
                <p className="text-gray-300">हम सभी major credit cards, UPI, Net Banking, और enterprise customers के लिए wire transfers accept करते हैं।</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-3">क्या आप student discounts offer करते हैं?</h4>
                <p className="text-gray-300">हाँ! Students को valid student verification के साथ सभी paid plans पर 50% discount मिलता है।</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-3">क्या मैं कभी भी cancel कर सकता हूं?</h4>
                <p className="text-gray-300">बिल्कुल! आप कभी भी अपना subscription cancel कर सकते हैं। आपको अपने billing period के अंत तक access रहेगा।</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-3">क्या मेरा code secure है?</h4>
                <p className="text-gray-300">हाँ! हम bank-level encryption use करते हैं और SOC2 compliant हैं। आपका code हमेशा private और secure है।</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-16 shadow-2xl relative overflow-hidden">
            {/* Traditional pattern overlay */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-20" style={{
              background: 'conic-gradient(from 0deg, transparent, rgba(255, 255, 255, 0.3), transparent)'
            }}></div>
            <h3 className="text-4xl font-bold text-white mb-6">Arena को Dominate करने के लिए ready हैं?</h3>
            <p className="text-xl text-orange-100 mb-10 max-w-3xl mx-auto">
              Millions developers join करें जिन्होंने पहले से ही अपने coding experience को transform कर लिया है। आज ही अपना free trial शुरू करें और collaborative development के future को experience करें।
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-orange-600 px-12 py-5 rounded-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 text-lg whitespace-nowrap cursor-pointer shadow-xl">
                🚀 Free Trial शुरू करें
              </button>
              <button className="border-2 border-white text-white px-12 py-5 rounded-xl font-bold hover:bg-white/10 transition-all text-lg whitespace-nowrap cursor-pointer">
                💬 Sales से बात करें
              </button>
            </div>
            <p className="text-orange-200 mt-8 text-lg">
              ✅ कोई credit card की जरूरत नहीं • ⚡ 14-day free trial • 🔄 कभी भी cancel करें
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
