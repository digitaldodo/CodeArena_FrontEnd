'use client';

import { apiClient } from './api';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  plan: 'free' | 'pro' | 'enterprise';
  isVerified: boolean;
  createdAt: string;
  preferences: {
    theme: 'dark' | 'light';
    language: string;
    notifications: boolean;
  };
}

class AuthManager {
  private user: User | null = null;
  private listeners: ((user: User | null) => void)[] = [];

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeAuth();
    }
  }

  private async initializeAuth() {
    const token = localStorage.getItem('auth_token');
    if (token) {
      try {
        const userData = await apiClient.getProfile();
        this.user = userData;
        this.notifyListeners();
      } catch (error) {
        this.logout();
      }
    }
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.user));
  }

  subscribe(listener: (user: User | null) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  getCurrentUser(): User | null {
    return this.user;
  }

  async login(email: string, password: string): Promise<User> {
    try {
      const response = await apiClient.login(email, password);
      this.user = response.user;
      this.notifyListeners();
      return this.user;
    } catch (error) {
      throw new Error('Login failed. Please check your credentials.');
    }
  }

  async register(userData: {
    name: string;
    email: string;
    password: string;
    plan?: string;
  }): Promise<User> {
    try {
      const response = await apiClient.register(userData);
      this.user = response.user;
      this.notifyListeners();
      return this.user;
    } catch (error) {
      throw new Error('Registration failed. Please try again.');
    }
  }

  async logout(): Promise<void> {
    try {
      await apiClient.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      this.user = null;
      apiClient.clearToken();
      this.notifyListeners();
    }
  }

  async updateProfile(updates: Partial<User>): Promise<User> {
    try {
      const response = await apiClient.updateProfile(updates);
      this.user = { ...this.user, ...response };
      this.notifyListeners();
      return this.user!;
    } catch (error) {
      throw new Error('Profile update failed.');
    }
  }

  async upgradeSubscription(planId: string): Promise<void> {
    try {
      await apiClient.upgradeSubscription(planId);
      if (this.user) {
        this.user.plan = planId as 'free' | 'pro' | 'enterprise';
        this.notifyListeners();
      }
    } catch (error) {
      throw new Error('Subscription upgrade failed.');
    }
  }

  isAuthenticated(): boolean {
    return this.user !== null;
  }

  hasPermission(permission: string): boolean {
    if (!this.user) return false;
    
    const permissions = {
      free: ['basic_features'],
      pro: ['basic_features', 'advanced_features', 'video_calls'],
      enterprise: ['basic_features', 'advanced_features', 'video_calls', 'team_features', 'analytics']
    };

    return permissions[this.user.plan]?.includes(permission) || false;
  }
}

export const authManager = new AuthManager();