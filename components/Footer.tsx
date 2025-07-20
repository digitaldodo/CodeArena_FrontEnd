
'use client';

import Link from 'next/link';

export default function Footer() {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'API Documentation', href: '#' },
        { name: 'Integrations', href: '#' },
        { name: 'Status Page', href: '#' },
        { name: 'Changelog', href: '#' }
      ]
    },
    {
      title: 'Community',
      links: [
        { name: 'Discord Server', href: '#' },
        { name: 'GitHub Discussions', href: '#' },
        { name: 'Developer Forum', href: '#' },
        { name: 'Code Challenges', href: '#' },
        { name: 'Mentor Network', href: '#' },
        { name: 'Student Program', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'Tutorials', href: '#' },
        { name: 'Best Practices', href: '#' },
        { name: 'Video Guides', href: '#' },
        { name: 'Templates', href: '#' },
        { name: 'Code Examples', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press Kit', href: '#' },
        { name: 'Contact Sales', href: '#' },
        { name: 'Partner Program', href: '#' },
        { name: 'Enterprise', href: '#' }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-white py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.1)_0%,transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Brand section */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-8 group">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:from-cyan-500 group-hover:to-blue-500 transition-all">
                <i className="ri-code-s-slash-line text-white text-2xl"></i>
              </div>
              <span className="text-3xl font-bold text-white" style={{fontFamily: "Pacifico, serif"}}>
                Code Arena
              </span>
            </Link>
            <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
              The premier collaborative coding platform where elite developers connect, learn, and build the future together. Experience coding like never before.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl flex items-center justify-center hover:from-indigo-600 hover:to-purple-600 transition-all cursor-pointer group">
                <i className="ri-twitter-x-line text-gray-400 group-hover:text-white transition-colors"></i>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl flex items-center justify-center hover:from-indigo-600 hover:to-purple-600 transition-all cursor-pointer group">
                <i className="ri-github-line text-gray-400 group-hover:text-white transition-colors"></i>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl flex items-center justify-center hover:from-indigo-600 hover:to-purple-600 transition-all cursor-pointer group">
                <i className="ri-linkedin-line text-gray-400 group-hover:text-white transition-colors"></i>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl flex items-center justify-center hover:from-indigo-600 hover:to-purple-600 transition-all cursor-pointer group">
                <i className="ri-discord-line text-gray-400 group-hover:text-white transition-colors"></i>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl flex items-center justify-center hover:from-indigo-600 hover:to-purple-600 transition-all cursor-pointer group">
                <i className="ri-youtube-line text-gray-400 group-hover:text-white transition-colors"></i>
              </div>
            </div>

            {/* Newsletter signup */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30">
              <h4 className="text-xl font-bold text-white mb-3">Stay in the Loop</h4>
              <p className="text-gray-300 mb-4">Get the latest updates, features, and developer insights.</p>
              <div className="flex gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all whitespace-nowrap cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">2.5M+</div>
              <div className="text-gray-300">Active Developers</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">50K+</div>
              <div className="text-gray-300">Daily Sessions</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">10K+</div>
              <div className="text-gray-300">Expert Mentors</div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime SLA</div>
            </div>
          </div>
        </div>

        {/* Links section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold text-white mb-6 text-lg">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Awards & Recognition */}
        <div className="bg-gradient-to-r from-slate-800/30 to-slate-700/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 mb-16">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold text-white mb-4">Awards & Recognition</h4>
            <p className="text-gray-300">Trusted by industry leaders and recognized by top tech publications</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-2">🏆</div>
              <div className="text-sm text-gray-300">Product Hunt #1</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-2">⭐</div>
              <div className="text-sm text-gray-300">4.9/5 Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400 mb-2">🚀</div>
              <div className="text-sm text-gray-300">TechCrunch Featured</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-2">💎</div>
              <div className="text-sm text-gray-300">YC Alumni</div>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Code Arena. All rights reserved. Built with ❤️ for developers worldwide.
          </p>
          <div className="flex flex-wrap gap-8 text-sm">
            <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
              Cookie Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
              Security
            </Link>
            <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
