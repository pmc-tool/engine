export interface HostingPlan {
  id: string;
  name: string;
  price: number;
  billing: string;
  badge?: string;
  bandwidth: string;
  storage: string;
  environments: string;
  ssl: boolean;
  support: string;
  analytics?: boolean;
  cdn?: boolean;
  features: string[];
  description: string;
}

export const hostingPlans: HostingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Plan',
    price: 5,
    billing: 'month',
    bandwidth: '10GB',
    storage: '5GB',
    environments: 'Production only',
    ssl: true,
    support: 'Basic Support',
    features: [
      '10GB Monthly Bandwidth',
      '5GB Storage',
      'Production Environment',
      'Free SSL Certificate',
      'Basic Email Support'
    ],
    description: 'Perfect for small projects and personal sites'
  },
  {
    id: 'pro',
    name: 'Pro Plan',
    price: 25,
    billing: 'month',
    badge: 'Recommended',
    bandwidth: '50GB',
    storage: '20GB',
    environments: 'Production + Staging',
    ssl: true,
    support: 'Priority Support',
    analytics: true,
    features: [
      '50GB Monthly Bandwidth',
      '20GB Storage',
      'Production + Staging Environments',
      'Free SSL Certificate',
      'Priority Email & Chat Support',
      'Advanced Analytics Dashboard'
    ],
    description: 'Ideal for business websites and growing projects'
  },
  {
    id: 'scale',
    name: 'Scale Plan',
    price: 49,
    billing: 'month',
    bandwidth: '200GB',
    storage: '100GB',
    environments: 'Production + Staging',
    ssl: true,
    support: '24/7 Premium Support',
    analytics: true,
    cdn: true,
    features: [
      '200GB Monthly Bandwidth',
      '100GB Storage',
      'Production + Staging Environments',
      'Free SSL Certificate',
      '24/7 Premium Support',
      'Advanced Analytics Dashboard',
      'Global CDN Integration'
    ],
    description: 'For high-traffic sites and enterprise applications'
  }
];

export const wizardSteps = [
  {
    number: 1,
    title: 'Theme',
    description: 'Choose your theme'
  },
  {
    number: 2,
    title: 'Hosting',
    description: 'Select hosting & domain'
  },
  {
    number: 3,
    title: 'Customize',
    description: 'AI or manual setup'
  },
  {
    number: 4,
    title: 'Launch',
    description: 'Review and deploy'
  }
];
