
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { authManager, User } from '../lib/auth';
import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = authManager.subscribe((currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    await authManager.logout();
  };

  const switchToRegister = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const switchToLogin = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl flex items-center justify-center group-hover:from-amber-600 group-hover:to-yellow-600 transition-all">
                <i className="ri-code-s-slash-line text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold text-white" style={{fontFamily: "Pacifico, serif"}}>
                Code Arena
              </span>
              {/* Indian art element */}
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse ml-2"></div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium cursor-pointer">
                Features
              </Link>
              <Link href="#how-it-works" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium cursor-pointer">
                How It Works
              </Link>
              <Link href="#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium cursor-pointer">
                Pricing
              </Link>
              <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium cursor-pointer">
                Community
              </Link>
              <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium cursor-pointer">
                Docs
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{user.name.charAt(0)}</span>
                    </div>
                    <span className="text-white font-medium">{user.name}</span>
                  </div>
                  <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors font-medium cursor-pointer">
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-gray-300 hover:text-white transition-colors font-medium cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => setIsLoginModalOpen(true)}
                    className="text-gray-300 hover:text-white transition-colors font-medium cursor-pointer"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setIsRegisterModalOpen(true)}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer"
                  >
                    Start Free
                  </button>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`}></i>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-6 pb-6 border-t border-slate-800">
              <nav className="flex flex-col space-y-4 mt-6">
                <Link href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium cursor-pointer">
                  Features
                </Link>
                <Link href="#how-it-works" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium cursor-pointer">
                  How It Works
                </Link>
                <Link href="#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium cursor-pointer">
                  Pricing
                </Link>
                <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium cursor-pointer">
                  Community
                </Link>
                <Link href="#" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium cursor-pointer">
                  Docs
                </Link>
                <div className="flex flex-col space-y-3 pt-4 border-t border-slate-800">
                  {user ? (
                    <>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">{user.name.charAt(0)}</span>
                        </div>
                        <span className="text-white font-medium">{user.name}</span>
                      </div>
                      <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors font-medium cursor-pointer">
                        Dashboard
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="text-gray-300 hover:text-white transition-colors font-medium cursor-pointer text-left"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => setIsLoginModalOpen(true)}
                        className="text-gray-300 hover:text-white transition-colors font-medium cursor-pointer text-left"
                      >
                        Sign In
                      </button>
                      <button
                        onClick={() => setIsRegisterModalOpen(true)}
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all whitespace-nowrap cursor-pointer"
                      >
                        Start Free
                      </button>
                    </>
                  )}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Auth Modals */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSwitchToRegister={switchToRegister}
      />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        onSwitchToLogin={switchToLogin}
      />
    </>
  );
}
