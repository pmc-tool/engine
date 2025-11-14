'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import TopHeader from '@/components/layout/TopHeader';
import MobileMenu from '@/components/layout/MobileMenu';
import { mockSites } from '@/lib/mockData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDatabase,
  faArrowRight,
  faCircle,
  faTable,
  faChartBar,
  faKey,
  faCog
} from '@fortawesome/free-solid-svg-icons';

export default function DatabasePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const dbFeatures = [
    { icon: faTable, color: 'blue', title: 'Table Management', desc: 'Create, edit, and manage database tables with an intuitive interface.' },
    { icon: faChartBar, color: 'green', title: 'Query Builder', desc: 'Visual query builder and SQL editor for database operations.' },
    { icon: faKey, color: 'purple', title: 'User Management', desc: 'Manage database users, permissions, and access control.' },
    { icon: faCog, color: 'orange', title: 'Optimization', desc: 'Database optimization tools for improved performance.' }
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopHeader
          title="Database Management"
          onMenuToggle={() => setIsMobileMenuOpen(true)}
          showSiteSwitcher={false}
        />

        <main className="flex-1 overflow-y-auto bg-slate-50">
          {/* Hero Section */}
          <section className="p-8 bg-gradient-to-br from-purple-600 to-pink-700 text-white">
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">Database Management</h1>
              <p className="text-lg text-white/90 mb-6">Manage your MySQL databases, run queries, and monitor database performance across all sites.</p>
            </div>
          </section>

          {/* Sites Database Overview */}
          <section className="px-8 py-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-1">Your Sites</h2>
                <p className="text-slate-600">Click on any site to manage databases and run queries</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockSites.map((site) => (
                <div
                  key={site.id}
                  onClick={() => router.push(`/sites/${site.id}/database`)}
                  className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                        <FontAwesomeIcon icon={faDatabase} className="text-purple-600 text-xl" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-slate-900">{site.name}</h3>
                        <p className="text-sm text-slate-500">{site.domain}</p>
                      </div>
                    </div>
                    <span className={`flex items-center space-x-1 px-2 py-1 rounded text-xs font-semibold ${
                      site.status === 'live' ? 'bg-green-100 text-green-700' :
                      site.status === 'deploying' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      <FontAwesomeIcon icon={faCircle} className="text-xs" />
                      <span className="capitalize">{site.status}</span>
                    </span>
                  </div>

                  <div className="space-y-3 mb-4 pt-4 border-t border-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Database Size</span>
                      <span className="text-sm font-semibold text-slate-900">156 MB</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Tables</span>
                      <span className="text-sm font-semibold text-slate-900">28 tables</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Database Type</span>
                      <span className="text-sm font-semibold text-slate-900">MySQL 8.0</span>
                    </div>
                  </div>

                  <button className="w-full px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition flex items-center justify-center space-x-2">
                    <span>Manage Database</span>
                    <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Database Features */}
          <section className="px-8 py-6">
            <div className="mb-6">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-1">Database Features</h2>
              <p className="text-slate-600">Powerful tools for database management and optimization</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dbFeatures.map((feature, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-lg p-6">
                  <div className={`w-12 h-12 bg-${feature.color}-50 rounded-lg flex items-center justify-center mb-4`}>
                    <FontAwesomeIcon icon={feature.icon} className={`text-${feature.color}-600 text-xl`} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Database Stats */}
          <section className="px-8 pb-8">
            <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Database Statistics</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FontAwesomeIcon icon={faDatabase} className="text-purple-600 text-2xl" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">{mockSites.length * 2}</div>
                  <div className="text-sm text-slate-600">Total Databases</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FontAwesomeIcon icon={faTable} className="text-blue-600 text-2xl" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">156</div>
                  <div className="text-sm text-slate-600">Total Tables</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FontAwesomeIcon icon={faChartBar} className="text-green-600 text-2xl" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">2.4 GB</div>
                  <div className="text-sm text-slate-600">Total Size</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FontAwesomeIcon icon={faKey} className="text-orange-600 text-2xl" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">18</div>
                  <div className="text-sm text-slate-600">DB Users</div>
                </div>
              </div>
            </div>
          </section>

          {/* Database Tools */}
          <section className="px-8 pb-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 text-white">
              <h2 className="text-2xl font-display font-bold mb-4">Database Tools</h2>
              <p className="text-white/90 mb-6">Access powerful database management tools and utilities</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition backdrop-blur-sm text-left">
                  <div className="font-bold mb-1">phpMyAdmin</div>
                  <div className="text-sm text-white/80">Web-based database administration</div>
                </button>
                <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition backdrop-blur-sm text-left">
                  <div className="font-bold mb-1">Database Backup</div>
                  <div className="text-sm text-white/80">Create manual database backups</div>
                </button>
                <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition backdrop-blur-sm text-left">
                  <div className="font-bold mb-1">Import/Export</div>
                  <div className="text-sm text-white/80">Import or export SQL files</div>
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
