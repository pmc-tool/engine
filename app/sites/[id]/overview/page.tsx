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
            <div className="relative bg-gradient-to-br from-white via-slate-50 to-white border-2 border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 mb-6 md:mb-8 overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pmc-red/5 to-transparent rounded-full blur-3xl group-hover:from-pmc-red/10 transition-all"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl group-hover:from-blue-500/10 transition-all"></div>

              <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                      {site.name}
                    </h2>
                    <span
                      className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold shadow-lg ${
                        site.status === 'live'
                          ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-green-500/50'
                          : site.status === 'deploying'
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-blue-500/50'
                          : 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-red-500/50'
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
                    <span className="inline-flex items-center gap-1.5 text-xs bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-200 text-orange-700 font-bold px-3 py-1.5 rounded-full">
                      {site.siteType}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs bg-gradient-to-r from-purple-100 to-purple-50 border border-purple-200 text-purple-700 font-bold px-3 py-1.5 rounded-full">
                      {site.plan}
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1.5 text-xs bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200 text-blue-700 font-bold px-3 py-1.5 rounded-full">
                      <FontAwesomeIcon icon={faEye} className="text-[10px]" />
                      {site.visits.toLocaleString()} visits
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1.5 text-xs bg-gradient-to-r from-green-100 to-green-50 border border-green-200 text-green-700 font-bold px-3 py-1.5 rounded-full">
                      <FontAwesomeIcon icon={faServer} className="text-[10px]" />
                      99.9% uptime
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/"
                    className="px-6 py-3 border-2 border-slate-300 hover:border-slate-400 rounded-xl text-slate-700 hover:bg-slate-50 font-semibold text-sm transition-all text-center shadow-sm hover:shadow-md"
                  >
                    Back to Sites
                  </Link>
                  <a
                    href={`https://${site.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-pmc-red to-pmc-red-dark hover:from-pmc-red-dark hover:to-pmc-red text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-pmc-red/30 hover:shadow-xl hover:shadow-pmc-red/50 hover:scale-105 flex items-center justify-center gap-2"
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
              <div className="group relative bg-gradient-to-br from-blue-50 via-white to-blue-50/30 rounded-2xl border-2 border-blue-100 p-5 md:p-6 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-300 transition-all duration-300 hover:scale-105">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-2xl group-hover:from-blue-400/20 transition-all"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/40 group-hover:scale-110 transition-all">
                      <FontAwesomeIcon icon={faEye} className="text-white text-lg md:text-xl" />
                    </div>
                    <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-100 px-2.5 py-1.5 rounded-full">
                      <span>↑</span> +12%
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 mb-1">
                    {site.visits.toLocaleString()}
                  </h3>
                  <p className="text-sm font-medium text-slate-600">Total Visits</p>
                </div>
              </div>

              {/* Uptime Card */}
              <div className="group relative bg-gradient-to-br from-green-50 via-white to-green-50/30 rounded-2xl border-2 border-green-100 p-5 md:p-6 hover:shadow-xl hover:shadow-green-500/20 hover:border-green-300 transition-all duration-300 hover:scale-105">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/10 to-transparent rounded-full blur-2xl group-hover:from-green-400/20 transition-all"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:shadow-xl group-hover:shadow-green-500/40 group-hover:scale-110 transition-all">
                      <FontAwesomeIcon icon={faServer} className="text-white text-lg md:text-xl" />
                    </div>
                    <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-100 px-2.5 py-1.5 rounded-full">
                      <span>↑</span> +0.1%
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 mb-1">
                    99.9%
                  </h3>
                  <p className="text-sm font-medium text-slate-600">Uptime</p>
                </div>
              </div>

              {/* Storage Card */}
              <div className="group relative bg-gradient-to-br from-amber-50 via-white to-amber-50/30 rounded-2xl border-2 border-amber-100 p-5 md:p-6 hover:shadow-xl hover:shadow-amber-500/20 hover:border-amber-300 transition-all duration-300 hover:scale-105">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-transparent rounded-full blur-2xl group-hover:from-amber-400/20 transition-all"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:shadow-xl group-hover:shadow-amber-500/40 group-hover:scale-110 transition-all">
                      <FontAwesomeIcon icon={faDatabase} className="text-white text-lg md:text-xl" />
                    </div>
                    <span className="flex items-center gap-1 text-xs font-bold text-orange-600 bg-orange-100 px-2.5 py-1.5 rounded-full">
                      <span>↑</span> +8%
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 mb-1">
                    2.4 GB
                  </h3>
                  <p className="text-sm font-medium text-slate-600">Storage Used</p>
                  <div className="mt-3 w-full bg-gradient-to-r from-slate-100 to-slate-200 rounded-full h-2 overflow-hidden shadow-inner">
                    <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 h-2 rounded-full transition-all duration-700 group-hover:shadow-lg group-hover:shadow-amber-500/60 relative overflow-hidden" style={{ width: '48%' }}>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-1.5">48% of 5 GB</p>
                </div>
              </div>

              {/* Load Time Card */}
              <div className="group relative bg-gradient-to-br from-purple-50 via-white to-purple-50/30 rounded-2xl border-2 border-purple-100 p-5 md:p-6 hover:shadow-xl hover:shadow-purple-500/20 hover:border-purple-300 transition-all duration-300 hover:scale-105">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full blur-2xl group-hover:from-purple-400/20 transition-all"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-xl group-hover:shadow-purple-500/40 group-hover:scale-110 transition-all">
                      <FontAwesomeIcon icon={faChartLine} className="text-white text-lg md:text-xl" />
                    </div>
                    <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-100 px-2.5 py-1.5 rounded-full">
                      <span>↓</span> -5%
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 mb-1">
                    1.2s
                  </h3>
                  <p className="text-sm font-medium text-slate-600">Avg Load Time</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mb-6 md:mb-8">
              <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

                <div className="relative">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-6">Quick Actions</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    <Link href={`/sites/${params.id}/backups`} className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/30 hover:scale-105 transition-all duration-300 text-left">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/50 group-hover:shadow-xl group-hover:shadow-blue-500/60 group-hover:scale-110 transition-all">
                        <FontAwesomeIcon icon={faRocket} className="text-white text-xl" />
                      </div>
                      <h4 className="font-heading font-bold text-white text-lg mb-2">
                        Deploy Site
                      </h4>
                      <p className="text-sm text-slate-300">
                        Push changes to production
                      </p>
                    </Link>

                    <Link href={`/sites/${params.id}/files`} className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/30 hover:scale-105 transition-all duration-300 text-left">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-green-500/50 group-hover:shadow-xl group-hover:shadow-green-500/60 group-hover:scale-110 transition-all">
                        <FontAwesomeIcon icon={faCode} className="text-white text-xl" />
                      </div>
                      <h4 className="font-heading font-bold text-white text-lg mb-2">
                        Edit Code
                      </h4>
                      <p className="text-sm text-slate-300">
                        Access file manager & editor
                      </p>
                    </Link>

                    <Link href={`/sites/${params.id}/domain`} className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/30 hover:scale-105 transition-all duration-300 text-left">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-purple-500/50 group-hover:shadow-xl group-hover:shadow-purple-500/60 group-hover:scale-110 transition-all">
                        <FontAwesomeIcon icon={faGlobe} className="text-white text-xl" />
                      </div>
                      <h4 className="font-heading font-bold text-white text-lg mb-2">
                        Manage Domain
                      </h4>
                      <p className="text-sm text-slate-300">
                        Configure DNS & SSL
                      </p>
                    </Link>

                    <Link href={`/sites/${params.id}/security`} className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/30 hover:scale-105 transition-all duration-300 text-left">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-orange-500/50 group-hover:shadow-xl group-hover:shadow-orange-500/60 group-hover:scale-110 transition-all">
                        <FontAwesomeIcon icon={faShieldHalved} className="text-white text-xl" />
                      </div>
                      <h4 className="font-heading font-bold text-white text-lg mb-2">
                        Security Scan
                      </h4>
                      <p className="text-sm text-slate-300">
                        Run vulnerability check
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white border-2 border-slate-200 rounded-2xl shadow-lg overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-200 bg-gradient-to-r from-slate-50 via-white to-slate-50">
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
                <div className="p-5 md:p-6 hover:bg-slate-50 transition-colors group">
                  <div className="flex items-start space-x-4">
                    <div className="w-11 h-11 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/30 group-hover:shadow-xl group-hover:shadow-green-500/40 group-hover:scale-110 transition-all">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-white text-lg" />
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

                <div className="p-5 md:p-6 hover:bg-slate-50 transition-colors group">
                  <div className="flex items-start space-x-4">
                    <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/40 group-hover:scale-110 transition-all">
                      <FontAwesomeIcon icon={faFolder} className="text-white text-lg" />
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

                <div className="p-5 md:p-6 hover:bg-slate-50 transition-colors group">
                  <div className="flex items-start space-x-4">
                    <div className="w-11 h-11 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30 group-hover:shadow-xl group-hover:shadow-purple-500/40 group-hover:scale-110 transition-all">
                      <FontAwesomeIcon icon={faShieldHalved} className="text-white text-lg" />
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

                <div className="p-5 md:p-6 hover:bg-slate-50 transition-colors group">
                  <div className="flex items-start space-x-4">
                    <div className="w-11 h-11 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/30 group-hover:shadow-xl group-hover:shadow-amber-500/40 group-hover:scale-110 transition-all">
                      <FontAwesomeIcon icon={faDatabase} className="text-white text-lg" />
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

                <div className="p-5 md:p-6 hover:bg-slate-50 transition-colors group">
                  <div className="flex items-start space-x-4">
                    <div className="w-11 h-11 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/30 group-hover:shadow-xl group-hover:shadow-green-500/40 group-hover:scale-110 transition-all">
                      <FontAwesomeIcon icon={faGlobe} className="text-white text-lg" />
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
