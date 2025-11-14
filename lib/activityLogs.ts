import {
  faRocket,
  faFolder,
  faFileLines,
  faShieldHalved,
  faDatabase,
  faCog,
  faUser,
  faPlug,
  faCode,
  faPalette,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

export interface ActivityLog {
  id: string;
  type: 'deployment' | 'file' | 'content' | 'security' | 'database' | 'settings' | 'user' | 'plugin' | 'theme';
  icon: IconDefinition;
  iconColor: string;
  iconBg: string;
  title: string;
  description: string;
  timestamp: string;
  user?: string;
}

export const mockActivityLogs: ActivityLog[] = [
  {
    id: '1',
    type: 'deployment',
    icon: faRocket,
    iconColor: 'text-green-600',
    iconBg: 'bg-green-100',
    title: 'Site Deployed Successfully',
    description: 'Your site was deployed to production with the latest changes.',
    timestamp: '2 hours ago',
    user: 'Admin'
  },
  {
    id: '2',
    type: 'file',
    icon: faFolder,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
    title: 'Files Updated',
    description: '3 files were modified in the uploads folder: hero-banner.jpg, logo.png, background.svg',
    timestamp: '3 hours ago',
    user: 'John Smith'
  },
  {
    id: '3',
    type: 'content',
    icon: faFileLines,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
    title: 'New Post Published',
    description: 'Blog post "10 Tips for Better Website Design" was published.',
    timestamp: '5 hours ago',
    user: 'Sarah Johnson'
  },
  {
    id: '4',
    type: 'security',
    icon: faShieldHalved,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-100',
    title: 'Security Scan Completed',
    description: 'Automatic security scan completed. No vulnerabilities detected.',
    timestamp: '6 hours ago',
    user: 'System'
  },
  {
    id: '5',
    type: 'database',
    icon: faDatabase,
    iconColor: 'text-red-600',
    iconBg: 'bg-red-100',
    title: 'Database Backup Created',
    description: 'Scheduled database backup completed successfully. Size: 9.2 MB',
    timestamp: '8 hours ago',
    user: 'System'
  },
  {
    id: '6',
    type: 'settings',
    icon: faCog,
    iconColor: 'text-slate-600',
    iconBg: 'bg-slate-100',
    title: 'Settings Updated',
    description: 'Site title and tagline were updated in general settings.',
    timestamp: '1 day ago',
    user: 'Admin'
  },
  {
    id: '7',
    type: 'user',
    icon: faUser,
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-100',
    title: 'New User Added',
    description: 'User "Mike Wilson" was added with Editor role.',
    timestamp: '1 day ago',
    user: 'Admin'
  },
  {
    id: '8',
    type: 'plugin',
    icon: faPlug,
    iconColor: 'text-green-600',
    iconBg: 'bg-green-100',
    title: 'Plugin Updated',
    description: 'Contact Form 7 plugin updated from version 5.7.1 to 5.8.0',
    timestamp: '2 days ago',
    user: 'System'
  },
  {
    id: '9',
    type: 'theme',
    icon: faPalette,
    iconColor: 'text-pink-600',
    iconBg: 'bg-pink-100',
    title: 'Theme Customized',
    description: 'Theme colors and typography settings were modified.',
    timestamp: '2 days ago',
    user: 'Sarah Johnson'
  },
  {
    id: '10',
    type: 'content',
    icon: faFileLines,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
    title: 'Page Updated',
    description: 'About Us page content was updated with new team information.',
    timestamp: '3 days ago',
    user: 'John Smith'
  },
  {
    id: '11',
    type: 'deployment',
    icon: faRocket,
    iconColor: 'text-green-600',
    iconBg: 'bg-green-100',
    title: 'Staging Deployment',
    description: 'Changes deployed to staging environment for testing.',
    timestamp: '3 days ago',
    user: 'Admin'
  },
  {
    id: '12',
    type: 'security',
    icon: faShieldHalved,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-100',
    title: 'SSL Certificate Renewed',
    description: 'SSL certificate renewed successfully. Valid until: Jan 15, 2026',
    timestamp: '1 week ago',
    user: 'System'
  }
];

export const activityTypes = [
  { value: 'deployment', label: 'Deployments' },
  { value: 'file', label: 'File Changes' },
  { value: 'content', label: 'Content Updates' },
  { value: 'security', label: 'Security' },
  { value: 'database', label: 'Database' },
  { value: 'settings', label: 'Settings' },
  { value: 'user', label: 'Users' },
  { value: 'plugin', label: 'Plugins' },
  { value: 'theme', label: 'Themes' }
];
