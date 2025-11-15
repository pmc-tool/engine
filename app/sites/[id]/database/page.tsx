'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import TopHeader from '@/components/layout/TopHeader';
import MobileMenu from '@/components/layout/MobileMenu';
import TabNavigation from '@/components/ui/TabNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDatabase,
  faDownload,
  faArrowsRotate,
  faTable,
  faCode,
  faListOl,
  faClock,
  faSearch,
  faChevronLeft,
  faChevronRight,
  faPlay,
  faEraser,
  faShieldHalved,
  faCheckCircle,
  faTriangleExclamation,
  faLightbulb,
  faCheck,
  faCopy,
  faChartLine,
  faLock
} from '@fortawesome/free-solid-svg-icons';
import { mockSites } from '@/lib/mockData';

interface TableInfo {
  name: string;
  rows: number;
  description: string;
  selected?: boolean;
}

const databaseTables: TableInfo[] = [
  { name: 'users', rows: 1247, description: 'User accounts and profiles', selected: true },
  { name: 'products', rows: 3842, description: 'Product catalog and inventory' },
  { name: 'orders', rows: 2156, description: 'Customer orders and transactions' },
  { name: 'categories', rows: 48, description: 'Product categories hierarchy' },
  { name: 'reviews', rows: 892, description: 'Customer product reviews' },
  { name: 'sessions', rows: 156, description: 'Active user sessions' },
  { name: 'payments', rows: 2089, description: 'Payment transactions' },
  { name: 'addresses', rows: 1534, description: 'Customer addresses' },
];

interface TableColumn {
  name: string;
  type: string;
  nullable: string;
  default: string;
}

const tableColumns: TableColumn[] = [
  { name: 'id', type: 'INT', nullable: 'NO', default: 'AUTO_INCREMENT' },
  { name: 'username', type: 'VARCHAR(50)', nullable: 'NO', default: 'NULL' },
  { name: 'email', type: 'VARCHAR(100)', nullable: 'NO', default: 'NULL' },
  { name: 'password_hash', type: 'VARCHAR(255)', nullable: 'NO', default: 'NULL' },
  { name: 'first_name', type: 'VARCHAR(50)', nullable: 'YES', default: 'NULL' },
  { name: 'last_name', type: 'VARCHAR(50)', nullable: 'YES', default: 'NULL' },
  { name: 'status', type: 'ENUM', nullable: 'NO', default: "'active'" },
  { name: 'created_at', type: 'TIMESTAMP', nullable: 'NO', default: 'CURRENT_TIMESTAMP' },
  { name: 'updated_at', type: 'TIMESTAMP', nullable: 'YES', default: 'NULL' },
];

interface TableDataRow {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  status: string;
  created_at: string;
}

const tableData: TableDataRow[] = [
  { id: 1, username: 'john_doe', email: 'john.doe@example.com', first_name: 'John', last_name: 'Doe', status: 'active', created_at: '2024-01-15 10:23:45' },
  { id: 2, username: 'sarah_smith', email: 'sarah.smith@example.com', first_name: 'Sarah', last_name: 'Smith', status: 'active', created_at: '2024-01-16 14:12:30' },
  { id: 3, username: 'mike_johnson', email: 'mike.j@example.com', first_name: 'Michael', last_name: 'Johnson', status: 'pending', created_at: '2024-01-17 09:45:12' },
  { id: 4, username: 'emma_wilson', email: 'emma.wilson@example.com', first_name: 'Emma', last_name: 'Wilson', status: 'active', created_at: '2024-01-18 11:20:58' },
  { id: 5, username: 'david_brown', email: 'd.brown@example.com', first_name: 'David', last_name: 'Brown', status: 'active', created_at: '2024-01-19 16:35:22' },
  { id: 6, username: 'lisa_davis', email: 'lisa.davis@example.com', first_name: 'Lisa', last_name: 'Davis', status: 'inactive', created_at: '2024-01-20 08:15:40' },
  { id: 7, username: 'robert_miller', email: 'r.miller@example.com', first_name: 'Robert', last_name: 'Miller', status: 'active', created_at: '2024-01-21 13:42:18' },
  { id: 8, username: 'jennifer_garcia', email: 'jennifer.g@example.com', first_name: 'Jennifer', last_name: 'Garcia', status: 'active', created_at: '2024-01-22 10:55:33' },
  { id: 9, username: 'william_rodriguez', email: 'will.rodriguez@example.com', first_name: 'William', last_name: 'Rodriguez', status: 'active', created_at: '2024-01-23 15:28:47' },
  { id: 10, username: 'mary_martinez', email: 'mary.martinez@example.com', first_name: 'Mary', last_name: 'Martinez', status: 'pending', created_at: '2024-01-24 12:10:25' },
];

export default function DatabaseManagerPage() {
  const params = useParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const site = mockSites.find(s => s.id === params.id) || mockSites[0];
  const [activeTab, setActiveTab] = useState<'tables' | 'query'>('tables');
  const [sqlQuery, setSqlQuery] = useState(`SELECT id, username, email, first_name, last_name, status, created_at
FROM users
WHERE status = 'active'
ORDER BY created_at DESC
LIMIT 25;`);

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'inactive': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopHeader
          title="Site Manager"
          onMenuToggle={() => setIsMobileMenuOpen(true)}
          showSearch={false}
          currentSiteId={params.id as string}
          showSiteSwitcher={true}
        />

        <main className="flex-1 overflow-y-auto bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/20">
          {/* Hero Section */}
          <section className="relative px-4 md:px-8 pt-6 pb-4 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full mb-3">
                    <FontAwesomeIcon icon={faDatabase} className="text-blue-600" />
                    <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      MySQL 8.0
                    </span>
                  </div>
                  <h1 className="text-2xl md:text-4xl font-display font-bold mb-2 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                    Database Manager
                  </h1>
                  <p className="text-sm md:text-base text-slate-600">View and manage your site's database tables and run safe queries</p>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <button className="px-3 md:px-4 py-2 bg-white border-2 border-slate-300 text-slate-700 rounded-xl text-xs md:text-sm font-semibold hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                    <FontAwesomeIcon icon={faDownload} />
                    <span className="hidden sm:inline">Export</span>
                  </button>
                  <button className="px-3 md:px-4 py-2 bg-white border-2 border-slate-300 text-slate-700 rounded-xl text-xs md:text-sm font-semibold hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                    <FontAwesomeIcon icon={faArrowsRotate} />
                    <span className="hidden sm:inline">Refresh</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Tab Navigation */}
              <TabNavigation />

              {/* Database Info Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 mt-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FontAwesomeIcon icon={faDatabase} className="text-white text-lg md:text-xl" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">284.7 MB</div>
                  <div className="text-xs md:text-sm text-slate-600">Database Size</div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FontAwesomeIcon icon={faTable} className="text-white text-lg md:text-xl" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">12</div>
                  <div className="text-xs md:text-sm text-slate-600">Total Tables</div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FontAwesomeIcon icon={faListOl} className="text-white text-lg md:text-xl" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">8,456</div>
                  <div className="text-xs md:text-sm text-slate-600">Total Records</div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FontAwesomeIcon icon={faClock} className="text-white text-lg md:text-xl" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">2h ago</div>
                  <div className="text-xs md:text-sm text-slate-600">Last Backup</div>
                </div>
              </div>

              {/* Database Tabs */}
              <section className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-lg overflow-hidden">
                <div className="border-b border-slate-200">
                  <nav className="flex space-x-4 md:space-x-8 px-4 md:px-6">
                    <button
                      onClick={() => setActiveTab('tables')}
                      className={`py-3 md:py-4 px-2 border-b-2 font-semibold text-xs md:text-sm flex items-center space-x-2 transition-all ${
                        activeTab === 'tables'
                          ? 'border-blue-600 text-blue-600'
                          : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
                      }`}
                    >
                      <FontAwesomeIcon icon={faTable} />
                      <span>Tables</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('query')}
                      className={`py-3 md:py-4 px-2 border-b-2 font-semibold text-xs md:text-sm flex items-center space-x-2 transition-all ${
                        activeTab === 'query'
                          ? 'border-blue-600 text-blue-600'
                          : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
                      }`}
                    >
                      <FontAwesomeIcon icon={faCode} />
                      <span>Query</span>
                    </button>
                  </nav>
                </div>

                {/* Tables Content */}
                {activeTab === 'tables' && (
                  <div className="p-4 md:p-6">
                    <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="relative flex-1 max-w-md">
                        <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Search tables..."
                          className="w-full pl-10 pr-4 py-2 md:py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs md:text-sm text-slate-600">{databaseTables.length} tables found</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                      {/* Tables List */}
                      <div className="lg:col-span-1 space-y-2">
                        {databaseTables.map((table) => (
                          <div
                            key={table.name}
                            className={`rounded-xl p-4 cursor-pointer transition-all ${
                              table.selected
                                ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 shadow-md'
                                : 'bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold text-slate-900 text-sm md:text-base">{table.name}</h3>
                              <span className={`px-2 py-1 text-xs font-semibold rounded-lg ${
                                table.selected ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-700'
                              }`}>
                                {table.rows.toLocaleString()}
                              </span>
                            </div>
                            <p className="text-xs text-slate-600">{table.description}</p>
                          </div>
                        ))}
                      </div>

                      {/* Table Details */}
                      <div className="lg:col-span-2 bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-xl border border-slate-200 p-4 md:p-6 shadow-md">
                        <div className="mb-4">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                            <div>
                              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1">users</h3>
                              <p className="text-xs md:text-sm text-slate-600">User accounts and profiles</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button className="px-3 py-2 bg-white border border-slate-300 hover:bg-slate-50 hover:shadow-md text-slate-700 text-xs font-semibold rounded-lg transition-all flex items-center gap-1">
                                <FontAwesomeIcon icon={faArrowsRotate} />
                                <span className="hidden sm:inline">Refresh</span>
                              </button>
                              <button className="px-3 py-2 bg-white border border-slate-300 hover:bg-slate-50 hover:shadow-md text-slate-700 text-xs font-semibold rounded-lg transition-all flex items-center gap-1">
                                <FontAwesomeIcon icon={faDownload} />
                                <span className="hidden sm:inline">Export</span>
                              </button>
                            </div>
                          </div>

                          {/* Table Schema */}
                          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mb-4 shadow-sm">
                            <div className="px-4 py-3 bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200">
                              <h4 className="text-sm font-bold text-slate-900">Table Schema</h4>
                            </div>
                            <div className="overflow-x-auto">
                              <table className="w-full text-xs md:text-sm">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                  <tr>
                                    <th className="px-3 md:px-4 py-3 text-left font-semibold text-slate-700">Column Name</th>
                                    <th className="px-3 md:px-4 py-3 text-left font-semibold text-slate-700">Type</th>
                                    <th className="px-3 md:px-4 py-3 text-left font-semibold text-slate-700">Nullable</th>
                                    <th className="px-3 md:px-4 py-3 text-left font-semibold text-slate-700">Default</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                  {tableColumns.map((col) => (
                                    <tr key={col.name} className="hover:bg-slate-50 transition-colors">
                                      <td className="px-3 md:px-4 py-3 font-semibold text-slate-900">{col.name}</td>
                                      <td className="px-3 md:px-4 py-3 text-slate-600">{col.type}</td>
                                      <td className="px-3 md:px-4 py-3 text-slate-600">{col.nullable}</td>
                                      <td className="px-3 md:px-4 py-3 text-slate-600 text-xs">{col.default}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>

                          {/* Table Data */}
                          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                            <div className="px-4 py-3 bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                              <h4 className="text-sm font-bold text-slate-900">Table Data (Read-Only)</h4>
                              <div className="flex items-center space-x-2">
                                <span className="text-xs text-gray-600">Showing 1-10 of 1,247 rows</span>
                                <div className="flex space-x-1">
                                  <button className="px-2 py-1 bg-white border border-gray-300 rounded text-xs text-gray-400 cursor-not-allowed">
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                  </button>
                                  <button className="px-2 py-1 bg-blue-600 text-white rounded text-xs font-medium">1</button>
                                  <button className="px-2 py-1 bg-white border border-gray-300 rounded text-xs hover:bg-gray-50">2</button>
                                  <button className="px-2 py-1 bg-white border border-gray-300 rounded text-xs hover:bg-gray-50">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                  <tr>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-700">id</th>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-700">username</th>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-700">email</th>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-700">first_name</th>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-700">last_name</th>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-700">status</th>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-700">created_at</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                  {tableData.map((row) => (
                                    <tr key={row.id} className="hover:bg-gray-50">
                                      <td className="px-4 py-3 text-gray-900">{row.id}</td>
                                      <td className="px-4 py-3 text-gray-900">{row.username}</td>
                                      <td className="px-4 py-3 text-gray-600">{row.email}</td>
                                      <td className="px-4 py-3 text-gray-600">{row.first_name}</td>
                                      <td className="px-4 py-3 text-gray-600">{row.last_name}</td>
                                      <td className="px-4 py-3">
                                        <span className={`px-2 py-1 text-xs font-medium rounded ${getStatusBadgeColor(row.status)}`}>
                                          {row.status}
                                        </span>
                                      </td>
                                      <td className="px-4 py-3 text-gray-600">{row.created_at}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Query Content */}
                {activeTab === 'query' && (
                  <div className="p-6">
                    <div className="mb-4">
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start space-x-3 mb-6">
                        <FontAwesomeIcon icon={faTriangleExclamation} className="text-yellow-600 mt-0.5" />
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-yellow-900 mb-1">Safe Query Mode</h4>
                          <p className="text-xs text-yellow-800">Only SELECT queries are allowed for safety. Write operations require explicit confirmation and are disabled by default.</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                          <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-900 mb-2">SQL Query</label>
                            <textarea
                              className="w-full h-64 px-4 py-3 border border-gray-300 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                              placeholder="Enter your SQL query here..."
                              value={sqlQuery}
                              onChange={(e) => setSqlQuery(e.target.value)}
                            />
                          </div>

                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-2">
                              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center space-x-2">
                                <FontAwesomeIcon icon={faPlay} />
                                <span>Run Query</span>
                              </button>
                              <button className="px-4 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg flex items-center space-x-2">
                                <FontAwesomeIcon icon={faEraser} />
                                <span>Clear</span>
                              </button>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button className="px-4 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg flex items-center space-x-2">
                                <FontAwesomeIcon icon={faDownload} />
                                <span>Export Results</span>
                              </button>
                            </div>
                          </div>

                          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                            <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
                              <h4 className="text-sm font-semibold text-gray-900">Query Results</h4>
                              <span className="text-xs text-gray-600">25 rows returned in 0.043s</span>
                            </div>
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                  <tr>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-700">id</th>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-700">username</th>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-700">email</th>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-700">first_name</th>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-700">last_name</th>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-700">status</th>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-700">created_at</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                  <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 text-gray-900">1247</td>
                                    <td className="px-4 py-3 text-gray-900">alex_turner</td>
                                    <td className="px-4 py-3 text-gray-600">alex.turner@example.com</td>
                                    <td className="px-4 py-3 text-gray-600">Alex</td>
                                    <td className="px-4 py-3 text-gray-600">Turner</td>
                                    <td className="px-4 py-3"><span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">active</span></td>
                                    <td className="px-4 py-3 text-gray-600">2024-03-15 18:42:33</td>
                                  </tr>
                                  <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 text-gray-900">1246</td>
                                    <td className="px-4 py-3 text-gray-900">jessica_lee</td>
                                    <td className="px-4 py-3 text-gray-600">jessica.lee@example.com</td>
                                    <td className="px-4 py-3 text-gray-600">Jessica</td>
                                    <td className="px-4 py-3 text-gray-600">Lee</td>
                                    <td className="px-4 py-3"><span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">active</span></td>
                                    <td className="px-4 py-3 text-gray-600">2024-03-15 17:28:19</td>
                                  </tr>
                                  <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 text-gray-900">1245</td>
                                    <td className="px-4 py-3 text-gray-900">chris_evans</td>
                                    <td className="px-4 py-3 text-gray-600">c.evans@example.com</td>
                                    <td className="px-4 py-3 text-gray-600">Christopher</td>
                                    <td className="px-4 py-3 text-gray-600">Evans</td>
                                    <td className="px-4 py-3"><span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">active</span></td>
                                    <td className="px-4 py-3 text-gray-600">2024-03-15 16:15:47</td>
                                  </tr>
                                  <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 text-gray-900">1244</td>
                                    <td className="px-4 py-3 text-gray-900">amanda_white</td>
                                    <td className="px-4 py-3 text-gray-600">amanda.w@example.com</td>
                                    <td className="px-4 py-3 text-gray-600">Amanda</td>
                                    <td className="px-4 py-3 text-gray-600">White</td>
                                    <td className="px-4 py-3"><span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">active</span></td>
                                    <td className="px-4 py-3 text-gray-600">2024-03-15 14:52:08</td>
                                  </tr>
                                  <tr className="hover:bg-gray-50">
                                    <td className="px-4 py-3 text-gray-900">1243</td>
                                    <td className="px-4 py-3 text-gray-900">kevin_harris</td>
                                    <td className="px-4 py-3 text-gray-600">kevin.harris@example.com</td>
                                    <td className="px-4 py-3 text-gray-600">Kevin</td>
                                    <td className="px-4 py-3 text-gray-600">Harris</td>
                                    <td className="px-4 py-3"><span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">active</span></td>
                                    <td className="px-4 py-3 text-gray-600">2024-03-15 13:38:22</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        <div className="lg:col-span-1">
                          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">Query Templates</h4>
                            <div className="space-y-2">
                              <button className="w-full text-left px-3 py-2 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded text-xs transition-colors">
                                <div className="font-medium text-gray-900 mb-1">Select All Users</div>
                                <div className="text-gray-600">SELECT * FROM users</div>
                              </button>
                              <button className="w-full text-left px-3 py-2 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded text-xs transition-colors">
                                <div className="font-medium text-gray-900 mb-1">Active Users Count</div>
                                <div className="text-gray-600">SELECT COUNT(*) FROM users WHERE status='active'</div>
                              </button>
                              <button className="w-full text-left px-3 py-2 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded text-xs transition-colors">
                                <div className="font-medium text-gray-900 mb-1">Recent Orders</div>
                                <div className="text-gray-600">SELECT * FROM orders ORDER BY created_at DESC LIMIT 50</div>
                              </button>
                              <button className="w-full text-left px-3 py-2 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded text-xs transition-colors">
                                <div className="font-medium text-gray-900 mb-1">Products by Category</div>
                                <div className="text-gray-600">SELECT p.*, c.name FROM products p JOIN categories c</div>
                              </button>
                              <button className="w-full text-left px-3 py-2 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded text-xs transition-colors">
                                <div className="font-medium text-gray-900 mb-1">User Registration Stats</div>
                                <div className="text-gray-600">SELECT DATE(created_at), COUNT(*) FROM users GROUP BY DATE(created_at)</div>
                              </button>
                            </div>
                          </div>

                          <div className="bg-blue-50 rounded-lg border border-blue-200 p-4">
                            <h4 className="text-sm font-semibold text-blue-900 mb-2 flex items-center">
                              <FontAwesomeIcon icon={faLightbulb} className="mr-2" />
                              Query Tips
                            </h4>
                            <ul className="space-y-2 text-xs text-blue-800">
                              <li className="flex items-start">
                                <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2 mt-0.5" />
                                <span>Use LIMIT to prevent large result sets</span>
                              </li>
                              <li className="flex items-start">
                                <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2 mt-0.5" />
                                <span>Add WHERE clauses for specific filtering</span>
                              </li>
                              <li className="flex items-start">
                                <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2 mt-0.5" />
                                <span>Use ORDER BY for sorted results</span>
                              </li>
                              <li className="flex items-start">
                                <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2 mt-0.5" />
                                <span>JOIN tables to combine related data</span>
                              </li>
                              <li className="flex items-start">
                                <FontAwesomeIcon icon={faCheck} className="text-blue-600 mr-2 mt-0.5" />
                                <span>Use COUNT, SUM, AVG for aggregations</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </section>

              {/* Query History */}
              <section className="mt-8">
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Recent Query History</h3>
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Clear History</button>
                  </div>
                  <div className="space-y-3">
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">Success</span>
                          <span className="text-xs text-gray-600">2 minutes ago</span>
                        </div>
                        <button className="text-gray-400 hover:text-blue-600">
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                      <code className="text-xs text-gray-700 font-mono block bg-gray-50 p-2 rounded">SELECT id, username, email FROM users WHERE status = 'active' ORDER BY created_at DESC LIMIT 25</code>
                      <div className="mt-2 text-xs text-gray-600">25 rows returned in 0.043s</div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">Success</span>
                          <span className="text-xs text-gray-600">15 minutes ago</span>
                        </div>
                        <button className="text-gray-400 hover:text-blue-600">
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                      <code className="text-xs text-gray-700 font-mono block bg-gray-50 p-2 rounded">SELECT COUNT(*) as total_orders, SUM(total_amount) as revenue FROM orders WHERE status = 'completed'</code>
                      <div className="mt-2 text-xs text-gray-600">1 row returned in 0.028s</div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">Success</span>
                          <span className="text-xs text-gray-600">1 hour ago</span>
                        </div>
                        <button className="text-gray-400 hover:text-blue-600">
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                      <code className="text-xs text-gray-700 font-mono block bg-gray-50 p-2 rounded">SELECT p.name, p.price, c.name as category FROM products p JOIN categories c ON p.category_id = c.id LIMIT 50</code>
                      <div className="mt-2 text-xs text-gray-600">50 rows returned in 0.067s</div>
                    </div>
                    <div className="border border-red-200 rounded-lg p-4 bg-red-50 cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded">Error</span>
                          <span className="text-xs text-gray-600">2 hours ago</span>
                        </div>
                        <button className="text-gray-400 hover:text-blue-600">
                          <FontAwesomeIcon icon={faCopy} />
                        </button>
                      </div>
                      <code className="text-xs text-gray-700 font-mono block bg-white p-2 rounded">DELETE FROM users WHERE id = 123</code>
                      <div className="mt-2 text-xs text-red-700 flex items-start">
                        <FontAwesomeIcon icon={faTriangleExclamation} className="mr-2 mt-0.5" />
                        <span>Query failed: DELETE operations are not allowed in safe mode</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Database Tools */}
              <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <FontAwesomeIcon icon={faShieldHalved} className="text-blue-600 text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Database Backup</h3>
                  <p className="text-sm text-gray-600 mb-4">Create a full backup of your database for disaster recovery</p>
                  <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg">
                    Create Backup
                  </button>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <FontAwesomeIcon icon={faDownload} className="text-green-600 text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Export Data</h3>
                  <p className="text-sm text-gray-600 mb-4">Export database tables to CSV, JSON, or SQL format</p>
                  <button className="w-full px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-lg">
                    Export Database
                  </button>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <FontAwesomeIcon icon={faChartLine} className="text-purple-600 text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimize Tables</h3>
                  <p className="text-sm text-gray-600 mb-4">Analyze and optimize database tables for better performance</p>
                  <button className="w-full px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-lg">
                    Run Optimization
                  </button>
                </div>
              </section>

              {/* Database Security */}
              <section className="mt-8 mb-8">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faLock} className="text-yellow-600 text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Database Security & Access Control</h3>
                      <p className="text-sm text-gray-700 mb-4">Your database is protected with multiple security layers. Only read operations are allowed through the web interface by default.</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg p-4 border border-yellow-200">
                          <div className="flex items-center space-x-2 mb-2">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
                            <span className="text-sm font-semibold text-gray-900">SSL Encrypted</span>
                          </div>
                          <p className="text-xs text-gray-600">All database connections use SSL/TLS encryption</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-yellow-200">
                          <div className="flex items-center space-x-2 mb-2">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
                            <span className="text-sm font-semibold text-gray-900">Read-Only Access</span>
                          </div>
                          <p className="text-xs text-gray-600">Web interface limited to SELECT queries only</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-yellow-200">
                          <div className="flex items-center space-x-2 mb-2">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
                            <span className="text-sm font-semibold text-gray-900">Auto Backups</span>
                          </div>
                          <p className="text-xs text-gray-600">Daily automated backups with 30-day retention</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
