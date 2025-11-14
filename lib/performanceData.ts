export interface DeploymentHistory {
  id: string;
  version: string;
  environment: 'Production' | 'Staging' | 'Development';
  status: 'Success' | 'Failed' | 'In Progress';
  deployedBy: string;
  date: string;
}

export const performanceMetrics = {
  uptime: {
    percentage: '99.98%',
    status: 'Operational' as const,
    last30Days: [
      100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 99.2, 100,
      100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100
    ]
  },
  responseTime: {
    average: '287ms',
    fastest: '142ms',
    slowest: '523ms'
  },
  errorRate: {
    percentage: '0.02%',
    errors4xx: 12,
    errors5xx: 3
  }
};

export const deploymentHistory: DeploymentHistory[] = [
  {
    id: '1',
    version: 'v2.4.1',
    environment: 'Production',
    status: 'Success',
    deployedBy: 'Alex Turner',
    date: '2 hours ago'
  },
  {
    id: '2',
    version: 'v2.5.0-beta',
    environment: 'Staging',
    status: 'Success',
    deployedBy: 'Alex Turner',
    date: '5 hours ago'
  },
  {
    id: '3',
    version: 'v2.4.0',
    environment: 'Production',
    status: 'Success',
    deployedBy: 'Sarah Chen',
    date: '3 days ago'
  },
  {
    id: '4',
    version: 'v2.3.8',
    environment: 'Production',
    status: 'Failed',
    deployedBy: 'Mike Johnson',
    date: '1 week ago'
  },
  {
    id: '5',
    version: 'v2.3.7',
    environment: 'Production',
    status: 'Success',
    deployedBy: 'Sarah Chen',
    date: '2 weeks ago'
  }
];

// Mock data for charts
export const pageLoadTimeData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Page Load Time (ms)',
      data: [245, 289, 312, 267, 291, 278, 256],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4
    }
  ]
};

export const visitorTrafficData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Visitors',
      data: [1240, 1580, 1890, 2100, 1950, 2340, 2180],
      borderColor: 'rgb(34, 197, 94)',
      backgroundColor: 'rgba(34, 197, 94, 0.1)',
      tension: 0.4
    }
  ]
};
