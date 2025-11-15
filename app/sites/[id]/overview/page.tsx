'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import TopHeader from '@/components/layout/TopHeader';
import MobileMenu from '@/components/layout/MobileMenu';
import TabNavigation from '@/components/ui/TabNavigation';
import { mockSites } from '@/lib/mockData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faEye,
  faServer,
  faDatabase,
  faGlobe,
  faChartLine,
  faRocket,
  faCode,
  faShieldHalved,
  faFolder,
  faCheckCircle,
  faClock,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function SiteOverviewPage() {
  const params = useParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Find the site from mock data
  const site = mockSites.find(s => s.id === params.id) || mockSites[0];

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

        <main className="flex-1 overflow-y-auto bg-slate-50">
          <section className="p-4 md:p-6 lg:p-8">
            {/* Site Header */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 hover:shadow-md hover:border-slate-300 transition-all mb-6 md:mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900">
                      {site.name}
                    </h2>
                    <span
                      className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold ${
                        site.status === 'live'
                          ? 'bg-green-500 text-white'
                          : site.status === 'deploying'
                          ? 'bg-blue-500 text-white'
                          : 'bg-red-500 text-white'
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full mr-2 bg-white ${
                          site.status === 'deploying' ? 'animate-pulse' : ''
                        }`}
                      ></span>
                      {site.status.charAt(0).toUpperCase() + site.status.slice(1)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <FontAwesomeIcon icon={faGlobe} className="text-slate-500" />
                    <a
                      href={`https://${site.domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base md:text-lg font-medium text-slate-700 hover:text-pmc-red transition-colors"
                    >
                      {site.domain}
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs bg-slate-100 border border-slate-200 text-slate-700 font-semibold px-3 py-1.5 rounded-full">
                      {site.siteType}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs bg-slate-100 border border-slate-200 text-slate-700 font-semibold px-3 py-1.5 rounded-full">
                      {site.plan}
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1.5 text-xs bg-slate-100 border border-slate-200 text-slate-700 font-semibold px-3 py-1.5 rounded-full">
                      <FontAwesomeIcon icon={faEye} className="text-[10px]" />
                      {site.visits.toLocaleString()} visits
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1.5 text-xs bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold px-3 py-1.5 rounded-full">
                      <FontAwesomeIcon icon={faServer} className="text-[10px]" />
                      99.9% uptime
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/"
                    className="px-6 py-3 border border-slate-300 hover:border-slate-400 rounded-lg text-slate-700 hover:bg-slate-50 font-semibold text-sm transition-all text-center"
                  >
                    Back to Sites
                  </Link>
                  <a
                    href={`https://${site.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pmc-red hover:bg-pmc-red-dark text-white px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    <span>Open Site</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <TabNavigation />

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
              {/* Total Visits Card */}
              <div className="bg-white rounded-xl border border-slate-200 p-5 md:p-6 hover:shadow-md hover:border-slate-300 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-100 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faEye} className="text-slate-600 text-lg md:text-xl" />
                  </div>
                  <span className="flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded-full">
                    ↑ +12%
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-1">
                  {site.visits.toLocaleString()}
                </h3>
                <p className="text-sm font-medium text-slate-600">Total Visits</p>
              </div>

              {/* Uptime Card */}
              <div className="bg-white rounded-xl border border-slate-200 p-5 md:p-6 hover:shadow-md hover:border-slate-300 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-50 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faServer} className="text-emerald-600 text-lg md:text-xl" />
                  </div>
                  <span className="flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded-full">
                    ↑ +0.1%
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-1">
                  99.9%
                </h3>
                <p className="text-sm font-medium text-slate-600">Uptime</p>
              </div>

              {/* Storage Card */}
              <div className="bg-white rounded-xl border border-slate-200 p-5 md:p-6 hover:shadow-md hover:border-slate-300 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-100 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faDatabase} className="text-slate-600 text-lg md:text-xl" />
                  </div>
                  <span className="flex items-center gap-1 text-xs font-semibold text-orange-700 bg-orange-50 px-2.5 py-1.5 rounded-full">
                    ↑ +8%
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-1">
                  2.4 GB
                </h3>
                <p className="text-sm font-medium text-slate-600">Storage Used</p>
                <div className="mt-3 w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-slate-600 h-2 rounded-full transition-all" style={{ width: '48%' }}></div>
                </div>
                <p className="text-xs text-slate-500 mt-1.5">48% of 5 GB</p>
              </div>

              {/* Load Time Card */}
              <div className="bg-white rounded-xl border border-slate-200 p-5 md:p-6 hover:shadow-md hover:border-slate-300 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-100 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faChartLine} className="text-slate-600 text-lg md:text-xl" />
                  </div>
                  <span className="flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded-full">
                    ↓ -5%
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-1">
                  1.2s
                </h3>
                <p className="text-sm font-medium text-slate-600">Avg Load Time</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mb-6 md:mb-8">
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-8 md:p-10">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-900 mb-6">Quick Actions</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  <Link href={`/sites/${params.id}/backups`} className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-6 hover:shadow-md transition-all text-left">
                    <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                      <FontAwesomeIcon icon={faRocket} className="text-slate-600 text-xl" />
                    </div>
                    <h4 className="font-heading font-bold text-slate-900 text-lg mb-2">
                      Deploy Site
                    </h4>
                    <p className="text-sm text-slate-600">
                      Push changes to production
                    </p>
                  </Link>

                  <Link href={`/sites/${params.id}/files`} className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-6 hover:shadow-md transition-all text-left">
                    <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                      <FontAwesomeIcon icon={faCode} className="text-slate-600 text-xl" />
                    </div>
                    <h4 className="font-heading font-bold text-slate-900 text-lg mb-2">
                      Edit Code
                    </h4>
                    <p className="text-sm text-slate-600">
                      Access file manager & editor
                    </p>
                  </Link>

                  <Link href={`/sites/${params.id}/domain`} className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-6 hover:shadow-md transition-all text-left">
                    <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                      <FontAwesomeIcon icon={faGlobe} className="text-slate-600 text-xl" />
                    </div>
                    <h4 className="font-heading font-bold text-slate-900 text-lg mb-2">
                      Manage Domain
                    </h4>
                    <p className="text-sm text-slate-600">
                      Configure DNS & SSL
                    </p>
                  </Link>

                  <Link href={`/sites/${params.id}/security`} className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-6 hover:shadow-md transition-all text-left">
                    <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                      <FontAwesomeIcon icon={faShieldHalved} className="text-slate-600 text-xl" />
                    </div>
                    <h4 className="font-heading font-bold text-slate-900 text-lg mb-2">
                      Security Scan
                    </h4>
                    <p className="text-sm text-slate-600">
                      Run vulnerability check
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-200 bg-slate-50">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-lg md:text-xl font-bold text-slate-900">
                    Recent Activity
                  </h3>
                  <Link href={`/sites/${params.id}/logs`} className="text-sm font-semibold text-pmc-red hover:text-pmc-red-dark transition-colors flex items-center gap-1.5">
                    View All
                    <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                  </Link>
                </div>
              </div>
              <div className="divide-y divide-slate-100">
                <div className="p-5 md:p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-11 h-11 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-600 text-lg" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <p className="text-base font-bold text-slate-900">
                          Deployment Successful
                        </p>
                        <span className="flex items-center gap-1 text-xs font-medium text-slate-500 whitespace-nowrap">
                          <FontAwesomeIcon icon={faClock} className="text-[10px]" />
                          2h ago
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">
                        Your site was successfully deployed to production
                      </p>
                      <span className="inline-flex items-center px-2.5 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                        Production
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5 md:p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faFolder} className="text-slate-600 text-lg" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <p className="text-base font-bold text-slate-900">
                          Files Updated
                        </p>
                        <span className="flex items-center gap-1 text-xs font-medium text-slate-500 whitespace-nowrap">
                          <FontAwesomeIcon icon={faClock} className="text-[10px]" />
                          5h ago
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">
                        3 files were modified in the uploads folder
                      </p>
                      <span className="inline-flex items-center px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                        Files Manager
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5 md:p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faShieldHalved} className="text-slate-600 text-lg" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <p className="text-base font-bold text-slate-900">
                          Security Scan Completed
                        </p>
                        <span className="flex items-center gap-1 text-xs font-medium text-slate-500 whitespace-nowrap">
                          <FontAwesomeIcon icon={faClock} className="text-[10px]" />
                          1d ago
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">
                        No vulnerabilities detected in latest scan
                      </p>
                      <span className="inline-flex items-center px-2.5 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded-full">
                        Security
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5 md:p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faDatabase} className="text-slate-600 text-lg" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <p className="text-base font-bold text-slate-900">
                          Database Backup Created
                        </p>
                        <span className="flex items-center gap-1 text-xs font-medium text-slate-500 whitespace-nowrap">
                          <FontAwesomeIcon icon={faClock} className="text-[10px]" />
                          2d ago
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">
                        Automatic daily backup completed successfully
                      </p>
                      <span className="inline-flex items-center px-2.5 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full">
                        Backups
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5 md:p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-11 h-11 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faGlobe} className="text-emerald-600 text-lg" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <p className="text-base font-bold text-slate-900">
                          SSL Certificate Renewed
                        </p>
                        <span className="flex items-center gap-1 text-xs font-medium text-slate-500 whitespace-nowrap">
                          <FontAwesomeIcon icon={faClock} className="text-[10px]" />
                          3d ago
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">
                        SSL certificate automatically renewed for 90 days
                      </p>
                      <span className="inline-flex items-center px-2.5 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                        Domain & SSL
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
