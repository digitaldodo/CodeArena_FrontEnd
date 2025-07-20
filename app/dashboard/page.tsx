'use client';

import { useEffect, useState } from 'react';
import { authManager, User } from '../../lib/auth';
import Dashboard from '../../components/dashboard/Dashboard';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = authManager.subscribe((currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
      
      if (!currentUser) {
        router.push('/');
      }
    });

    return unsubscribe;
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <i className="ri-code-s-slash-line text-white text-2xl"></i>
          </div>
          <p className="text-gray-300">Loading your arena...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return <Dashboard />;
}