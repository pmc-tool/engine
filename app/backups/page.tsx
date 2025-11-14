'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import TopHeader from '@/components/layout/TopHeader';
import MobileMenu from '@/components/layout/MobileMenu';
import { mockSites } from '@/lib/mockData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClockRotateLeft,
  faShieldAlt,
  faDownload,
  faRotate,
  faArrowRight,
  faCircle,
  faCheckCircle,
  faDatabase,
  faServer
} from '@fortawesome/free-solid-svg-icons';

export default function BackupsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopHeader
          title="Backups & Redeploy"
          onMenuToggle={() => setIsMobileMenuOpen(true)}
          showSiteSwitcher={false}
        />

        <main className="flex-1 overflow-y-auto bg-slate-50">
          {/* Hero Section */}
          <section className="p-8 bg-gradient-to-br from-green-600 to-teal-700 text-white">
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">Backups & Restore</h1>
              <p className="text-lg text-white/90 mb-6">Protect your data with automated backups and one-click restore capabilities.</p>
            </div>
          </section>

          {/* Sites with Backup Status */}
          <section className="px-8 py-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-1">Your Sites</h2>
                <p className="text-slate-600">Click on any site to manage backups and restore points</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockSites.map((site) => (
                <div
                  key={site.id}
                  onClick={() => router.push(`/sites/${site.id}/backups`)}
                  className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                        <FontAwesomeIcon icon={faClockRotateLeft} className="text-green-600 text-xl" />
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
                      <span className="text-sm text-slate-600">Last Backup</span>
                      <span className="text-sm font-semibold text-slate-900">2 hours ago</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Backup Count</span>
                      <span className="text-sm font-semibold text-slate-900">15 backups</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Auto-Backup</span>
                      <span className="flex items-center text-sm font-semibold text-green-600">
                        <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
                        Active
                      </span>
                    </div>
                  </div>

                  <button className="w-full px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition flex items-center justify-center space-x-2">
                    <span>Manage Backups</span>
                    <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Backup Features */}
          <section className="px-8 py-6">
            <div className="mb-6">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-1">Backup Features</h2>
              <p className="text-slate-600">Comprehensive backup solutions for your peace of mind</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faClockRotateLeft} className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-lg font-display font-bold text-slate-900 mb-2">Automated Backups</h3>
                <p className="text-sm text-slate-600">Daily automatic backups of all your sites, files, and databases.</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faRotate} className="text-green-600 text-xl" />
                </div>
                <h3 className="text-lg font-display font-bold text-slate-900 mb-2">One-Click Restore</h3>
                <p className="text-sm text-slate-600">Restore your entire site or specific files with a single click.</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faDownload} className="text-purple-600 text-xl" />
                </div>
                <h3 className="text-lg font-display font-bold text-slate-900 mb-2">Download Backups</h3>
                <p className="text-sm text-slate-600">Download backup files to your local storage for safekeeping.</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faShieldAlt} className="text-orange-600 text-xl" />
                </div>
                <h3 className="text-lg font-display font-bold text-slate-900 mb-2">Secure Storage</h3>
                <p className="text-sm text-slate-600">Encrypted backup storage with redundancy and high availability.</p>
              </div>
            </div>
          </section>

          {/* Backup Stats */}
          <section className="px-8 pb-8">
            <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Backup Statistics</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FontAwesomeIcon icon={faDatabase} className="text-green-600 text-2xl" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">48</div>
                  <div className="text-sm text-slate-600">Total Backups</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FontAwesomeIcon icon={faServer} className="text-blue-600 text-2xl" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">156 GB</div>
                  <div className="text-sm text-slate-600">Backup Size</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 text-2xl" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">100%</div>
                  <div className="text-sm text-slate-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FontAwesomeIcon icon={faClockRotateLeft} className="text-orange-600 text-2xl" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">30 Days</div>
                  <div className="text-sm text-slate-600">Retention</div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
