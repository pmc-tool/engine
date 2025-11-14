export interface ContentItem {
  id: string;
  title: string;
  type: 'page' | 'post';
  status: 'published' | 'draft' | 'scheduled';
  author: string;
  lastModified: string;
  views?: number;
}

export const mockContent: ContentItem[] = [
  {
    id: '1',
    title: 'Welcome to Your New Site',
    type: 'page',
    status: 'published',
    author: 'Admin',
    lastModified: '2 hours ago',
    views: 1247
  },
  {
    id: '2',
    title: 'About Us',
    type: 'page',
    status: 'published',
    author: 'Admin',
    lastModified: '1 day ago',
    views: 834
  },
  {
    id: '3',
    title: 'Contact Information',
    type: 'page',
    status: 'published',
    author: 'Admin',
    lastModified: '3 days ago',
    views: 542
  },
  {
    id: '4',
    title: 'Getting Started with Our Platform',
    type: 'post',
    status: 'published',
    author: 'John Smith',
    lastModified: '5 hours ago',
    views: 2341
  },
  {
    id: '5',
    title: '10 Tips for Better Website Design',
    type: 'post',
    status: 'published',
    author: 'Sarah Johnson',
    lastModified: '1 day ago',
    views: 1876
  },
  {
    id: '6',
    title: 'Upcoming Product Launch',
    type: 'post',
    status: 'scheduled',
    author: 'Marketing Team',
    lastModified: '3 hours ago'
  },
  {
    id: '7',
    title: 'Privacy Policy',
    type: 'page',
    status: 'draft',
    author: 'Legal',
    lastModified: '2 days ago'
  },
  {
    id: '8',
    title: 'How to Optimize Your Workflow',
    type: 'post',
    status: 'draft',
    author: 'John Smith',
    lastModified: '4 hours ago'
  },
  {
    id: '9',
    title: 'Customer Success Stories',
    type: 'post',
    status: 'published',
    author: 'Sarah Johnson',
    lastModified: '2 days ago',
    views: 1523
  },
  {
    id: '10',
    title: 'Services Overview',
    type: 'page',
    status: 'published',
    author: 'Admin',
    lastModified: '1 week ago',
    views: 987
  }
];

export const contentStats = {
  totalPages: 5,
  totalPosts: 5,
  published: 7,
  drafts: 2,
  scheduled: 1
};
