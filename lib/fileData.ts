export interface FileItem {
  id: string;
  name: string;
  type: 'folder' | 'image' | 'video' | 'audio' | 'pdf' | 'doc' | 'excel' | 'code' | 'file';
  size?: string;
  modified: string;
  path: string;
}

export const mockFiles: FileItem[] = [
  {
    id: '1',
    name: 'uploads',
    type: 'folder',
    modified: '2 hours ago',
    path: '/uploads'
  },
  {
    id: '2',
    name: 'themes',
    type: 'folder',
    modified: '1 day ago',
    path: '/themes'
  },
  {
    id: '3',
    name: 'plugins',
    type: 'folder',
    modified: '3 days ago',
    path: '/plugins'
  },
  {
    id: '4',
    name: 'hero-banner.jpg',
    type: 'image',
    size: '2.4 MB',
    modified: '2 hours ago',
    path: '/uploads/hero-banner.jpg'
  },
  {
    id: '5',
    name: 'product-catalog.pdf',
    type: 'pdf',
    size: '1.8 MB',
    modified: '5 hours ago',
    path: '/uploads/product-catalog.pdf'
  },
  {
    id: '6',
    name: 'intro-video.mp4',
    type: 'video',
    size: '15.2 MB',
    modified: '1 day ago',
    path: '/uploads/intro-video.mp4'
  },
  {
    id: '7',
    name: 'background-music.mp3',
    type: 'audio',
    size: '4.5 MB',
    modified: '2 days ago',
    path: '/uploads/background-music.mp3'
  },
  {
    id: '8',
    name: 'custom-styles.css',
    type: 'code',
    size: '12 KB',
    modified: '3 hours ago',
    path: '/themes/custom-styles.css'
  },
  {
    id: '9',
    name: 'config.json',
    type: 'code',
    size: '3 KB',
    modified: '1 day ago',
    path: '/config.json'
  },
  {
    id: '10',
    name: 'terms-of-service.doc',
    type: 'doc',
    size: '245 KB',
    modified: '1 week ago',
    path: '/uploads/terms-of-service.doc'
  }
];

export const storageUsage = {
  used: 2.4,
  total: 20,
  percentage: 12
};
