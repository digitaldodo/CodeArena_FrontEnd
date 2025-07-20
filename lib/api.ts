'use client';

// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

// API Client with authentication
class ApiClient {
  private baseURL: string;
  private token: string | null = null;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;
  }

  setToken(token: string) {
    this.token = token;
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth_token', token);
    }
  }

  clearToken() {
    this.token = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token');
    }
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Authentication endpoints
  async login(email: string, password: string) {
    const response = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    
    if (response.token) {
      this.setToken(response.token);
    }
    
    return response;
  }

  async register(userData: {
    name: string;
    email: string;
    password: string;
    plan?: string;
  }) {
    const response = await this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    
    if (response.token) {
      this.setToken(response.token);
    }
    
    return response;
  }

  async logout() {
    await this.request('/auth/logout', { method: 'POST' });
    this.clearToken();
  }

  async forgotPassword(email: string) {
    return await this.request('/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  // User endpoints
  async getProfile() {
    return await this.request('/user/profile');
  }

  async updateProfile(userData: any) {
    return await this.request('/user/profile', {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }

  async upgradeSubscription(planId: string) {
    return await this.request('/user/upgrade', {
      method: 'POST',
      body: JSON.stringify({ planId }),
    });
  }

  // Video call endpoints
  async createVideoSession(participants: string[]) {
    return await this.request('/video/create-session', {
      method: 'POST',
      body: JSON.stringify({ participants }),
    });
  }

  async joinVideoSession(sessionId: string) {
    return await this.request(`/video/join/${sessionId}`, {
      method: 'POST',
    });
  }

  // Code collaboration endpoints
  async createProject(projectData: {
    name: string;
    description?: string;
    language: string;
    template?: string;
  }) {
    return await this.request('/projects', {
      method: 'POST',
      body: JSON.stringify(projectData),
    });
  }

  async getProjects() {
    return await this.request('/projects');
  }

  async getProject(projectId: string) {
    return await this.request(`/projects/${projectId}`);
  }

  async updateProject(projectId: string, projectData: any) {
    return await this.request(`/projects/${projectId}`, {
      method: 'PUT',
      body: JSON.stringify(projectData),
    });
  }

  async shareProject(projectId: string, userEmail: string, permissions: string) {
    return await this.request(`/projects/${projectId}/share`, {
      method: 'POST',
      body: JSON.stringify({ userEmail, permissions }),
    });
  }

  // Mentor endpoints
  async getMentors(filters?: {
    skills?: string[];
    rating?: number;
    availability?: string;
  }) {
    const queryParams = filters ? `?${new URLSearchParams(filters).toString()}` : '';
    return await this.request(`/mentors${queryParams}`);
  }

  async requestMentor(mentorId: string, message: string) {
    return await this.request('/mentors/request', {
      method: 'POST',
      body: JSON.stringify({ mentorId, message }),
    });
  }

  // Chat endpoints
  async getChatHistory(chatId: string) {
    return await this.request(`/chat/${chatId}/history`);
  }

  async sendMessage(chatId: string, message: string, type: 'text' | 'code' = 'text') {
    return await this.request(`/chat/${chatId}/message`, {
      method: 'POST',
      body: JSON.stringify({ message, type }),
    });
  }

  // Analytics endpoints
  async getAnalytics(timeRange: string = '7d') {
    return await this.request(`/analytics?range=${timeRange}`);
  }

  async getTeamAnalytics(teamId: string) {
    return await this.request(`/analytics/team/${teamId}`);
  }

  // Payment endpoints
  async createPaymentIntent(planId: string) {
    return await this.request('/payments/create-intent', {
      method: 'POST',
      body: JSON.stringify({ planId }),
    });
  }

  async confirmPayment(paymentIntentId: string) {
    return await this.request('/payments/confirm', {
      method: 'POST',
      body: JSON.stringify({ paymentIntentId }),
    });
  }
}

export const apiClient = new ApiClient(API_BASE_URL);