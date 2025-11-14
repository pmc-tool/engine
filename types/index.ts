// Site types
export interface Site {
  id: string;
  name: string;
  domain: string;
  status: 'live' | 'deploying' | 'paused' | 'error';
  plan: string;
  siteType: string;
  visits: number;
  lastUpdated: string;
  hasSSL: boolean;
  thumbnail?: string;
}

// Notification types
export interface Notification {
  id: string;
  type: 'deployment' | 'domain' | 'security' | 'billing' | 'general';
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  icon: {
    type: 'success' | 'error' | 'warning' | 'info';
    color: string;
  };
}

// Theme types
export interface Theme {
  id: string;
  name: string;
  category: string;
  thumbnail: string;
  isPremium: boolean;
  industries: string[];
}

// Domain types
export interface Domain {
  id: string;
  name: string;
  status: 'active' | 'pending' | 'expired';
  expiryDate: string;
  sslStatus: 'active' | 'pending' | 'none';
}

// User types
export interface User {
  name: string;
  email: string;
  avatar: string;
}
