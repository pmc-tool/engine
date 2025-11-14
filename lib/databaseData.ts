export interface DatabaseTable {
  name: string;
  rows: number;
  size: string;
  engine: string;
  lastUpdated: string;
}

export const mockDatabaseTables: DatabaseTable[] = [
  {
    name: 'wp_posts',
    rows: 247,
    size: '2.4 MB',
    engine: 'InnoDB',
    lastUpdated: '2 hours ago'
  },
  {
    name: 'wp_users',
    rows: 12,
    size: '16 KB',
    engine: 'InnoDB',
    lastUpdated: '1 day ago'
  },
  {
    name: 'wp_comments',
    rows: 1453,
    size: '1.2 MB',
    engine: 'InnoDB',
    lastUpdated: '3 hours ago'
  },
  {
    name: 'wp_options',
    rows: 342,
    size: '384 KB',
    engine: 'InnoDB',
    lastUpdated: '1 hour ago'
  },
  {
    name: 'wp_postmeta',
    rows: 2847,
    size: '4.8 MB',
    engine: 'InnoDB',
    lastUpdated: '2 hours ago'
  },
  {
    name: 'wp_terms',
    rows: 45,
    size: '32 KB',
    engine: 'InnoDB',
    lastUpdated: '2 days ago'
  },
  {
    name: 'wp_term_taxonomy',
    rows: 45,
    size: '28 KB',
    engine: 'InnoDB',
    lastUpdated: '2 days ago'
  },
  {
    name: 'wp_term_relationships',
    rows: 289,
    size: '64 KB',
    engine: 'InnoDB',
    lastUpdated: '2 hours ago'
  }
];

export const databaseStats = {
  totalSize: '9.2 MB',
  totalTables: 8,
  totalRows: 5280,
  lastBackup: '6 hours ago'
};
