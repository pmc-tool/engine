export interface PageView {
  page: string;
  views: number;
  uniqueVisitors: number;
  avgTime: string;
  bounceRate: string;
}

export interface TrafficSource {
  source: string;
  visitors: number;
  percentage: number;
  color: string;
}

export interface TopCountry {
  country: string;
  code: string;
  visitors: number;
  percentage: number;
}

export const analyticsOverview = {
  totalVisitors: 12847,
  pageViews: 34521,
  avgSessionDuration: '3m 42s',
  bounceRate: '42.8%',
  growth: {
    visitors: '+12.5%',
    pageViews: '+8.3%',
    sessionDuration: '+5.2%',
    bounceRate: '-2.1%'
  }
};

export const topPages: PageView[] = [
  {
    page: '/home',
    views: 8945,
    uniqueVisitors: 6234,
    avgTime: '2m 34s',
    bounceRate: '38.2%'
  },
  {
    page: '/products',
    views: 5621,
    uniqueVisitors: 4102,
    avgTime: '4m 12s',
    bounceRate: '31.5%'
  },
  {
    page: '/about',
    views: 3412,
    uniqueVisitors: 2876,
    avgTime: '1m 48s',
    bounceRate: '52.3%'
  },
  {
    page: '/contact',
    views: 2134,
    uniqueVisitors: 1823,
    avgTime: '3m 05s',
    bounceRate: '44.7%'
  },
  {
    page: '/blog',
    views: 1876,
    uniqueVisitors: 1456,
    avgTime: '5m 23s',
    bounceRate: '28.9%'
  }
];

export const trafficSources: TrafficSource[] = [
  {
    source: 'Organic Search',
    visitors: 5634,
    percentage: 43.8,
    color: 'bg-blue-500'
  },
  {
    source: 'Direct',
    visitors: 3421,
    percentage: 26.6,
    color: 'bg-green-500'
  },
  {
    source: 'Social Media',
    visitors: 2145,
    percentage: 16.7,
    color: 'bg-purple-500'
  },
  {
    source: 'Referral',
    visitors: 1089,
    percentage: 8.5,
    color: 'bg-orange-500'
  },
  {
    source: 'Email',
    visitors: 558,
    percentage: 4.4,
    color: 'bg-pink-500'
  }
];

export const topCountries: TopCountry[] = [
  {
    country: 'United States',
    code: 'US',
    visitors: 5234,
    percentage: 40.7
  },
  {
    country: 'United Kingdom',
    code: 'GB',
    visitors: 2341,
    percentage: 18.2
  },
  {
    country: 'Canada',
    code: 'CA',
    visitors: 1523,
    percentage: 11.9
  },
  {
    country: 'Australia',
    code: 'AU',
    visitors: 1134,
    percentage: 8.8
  },
  {
    country: 'Germany',
    code: 'DE',
    visitors: 892,
    percentage: 6.9
  },
  {
    country: 'France',
    code: 'FR',
    visitors: 756,
    percentage: 5.9
  },
  {
    country: 'India',
    code: 'IN',
    visitors: 542,
    percentage: 4.2
  },
  {
    country: 'Brazil',
    code: 'BR',
    visitors: 425,
    percentage: 3.4
  }
];

export const weeklyVisitorsData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Visitors',
      data: [1842, 2134, 2456, 2789, 2543, 2967, 2312],
      borderColor: 'rgb(99, 102, 241)',
      backgroundColor: 'rgba(99, 102, 241, 0.1)',
      tension: 0.4
    }
  ]
};

export const deviceBreakdown = [
  { device: 'Desktop', percentage: 58.3, color: 'bg-blue-500' },
  { device: 'Mobile', percentage: 32.7, color: 'bg-green-500' },
  { device: 'Tablet', percentage: 9.0, color: 'bg-purple-500' }
];
