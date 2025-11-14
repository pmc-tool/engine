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
  faFolder
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
            <div className="bg-white border border-slate-200 rounded-pmc p-5 md:p-6 shadow-sm mb-6 md:mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                    <h2 className="font-heading text-2xl md:text-3xl font-semibold text-slate-900">
                      {site.name}
                    </h2>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        site.status === 'live'
                          ? 'bg-green-100 text-green-800'
                          : site.status === 'deploying'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                          site.status === 'live'
                            ? 'bg-green-600'
                            : site.status === 'deploying'
                            ? 'bg-blue-600 animate-pulse'
                            : 'bg-red-600'
                        }`}
                      ></span>
                      {site.status.charAt(0).toUpperCase() + site.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 mb-3">{site.domain}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-orange-100 text-orange-700 font-semibold px-2.5 py-1 rounded-full">
                      {site.siteType}
                    </span>
                    <span className="text-xs bg-purple-100 text-purple-700 font-semibold px-2.5 py-1 rounded-full">
                      {site.plan}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Link
                    href="/"
                    className="px-6 py-3 border border-slate-300 rounded-pmc text-slate-700 hover:bg-slate-100 font-medium text-sm transition-all text-center"
                  >
                    Back to Sites
                  </Link>
                  <a
                    href={`https://${site.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pmc-red hover:bg-pmc-red-dark text-white px-6 py-3 rounded-pmc font-medium text-sm transition-all shadow-sm flex items-center justify-center space-x-2"
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
              <div className="bg-white border border-slate-200 rounded-pmc p-5 md:p-6 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faEye} className="text-blue-600 text-lg md:text-xl" />
                  </div>
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    +12%
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-1">
                  {site.visits.toLocaleString()}
                </h3>
                <p className="text-sm text-slate-600">Total Visits</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-pmc p-5 md:p-6 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faServer} className="text-green-600 text-lg md:text-xl" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-1">
                  99.9%
                </h3>
                <p className="text-sm text-slate-600">Uptime</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-pmc p-5 md:p-6 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faDatabase} className="text-amber-600 text-lg md:text-xl" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-1">
                  2.4 GB
                </h3>
                <p className="text-sm text-slate-600">Storage Used</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-pmc p-5 md:p-6 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faChartLine} className="text-purple-600 text-lg md:text-xl" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-1">
                  1.2s
                </h3>
                <p className="text-sm text-slate-600">Avg Load Time</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <button className="bg-white border border-slate-200 rounded-pmc p-5 md:p-6 shadow-sm hover:shadow-md transition-all text-left">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faRocket} className="text-blue-600 text-lg md:text-xl" />
                </div>
                <h3 className="font-heading font-semibold text-slate-900 text-base md:text-lg mb-2">
                  Deploy Site
                </h3>
                <p className="text-sm text-slate-600">
                  Push changes to production
                </p>
              </button>

              <button className="bg-white border border-slate-200 rounded-pmc p-5 md:p-6 shadow-sm hover:shadow-md transition-all text-left">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faCode} className="text-green-600 text-lg md:text-xl" />
                </div>
                <h3 className="font-heading font-semibold text-slate-900 text-base md:text-lg mb-2">
                  Edit Code
                </h3>
                <p className="text-sm text-slate-600">
                  Access file manager & editor
                </p>
              </button>

              <button className="bg-white border border-slate-200 rounded-pmc p-5 md:p-6 shadow-sm hover:shadow-md transition-all text-left">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faGlobe} className="text-purple-600 text-lg md:text-xl" />
                </div>
                <h3 className="font-heading font-semibold text-slate-900 text-base md:text-lg mb-2">
                  Manage Domain
                </h3>
                <p className="text-sm text-slate-600">
                  Configure DNS & SSL
                </p>
              </button>

              <button className="bg-white border border-slate-200 rounded-pmc p-5 md:p-6 shadow-sm hover:shadow-md transition-all text-left">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faShieldHalved} className="text-amber-600 text-lg md:text-xl" />
                </div>
                <h3 className="font-heading font-semibold text-slate-900 text-base md:text-lg mb-2">
                  Security Scan
                </h3>
                <p className="text-sm text-slate-600">
                  Run vulnerability check
                </p>
              </button>
            </div>

            {/* Recent Activity */}
            <div className="bg-white border border-slate-200 rounded-pmc shadow-sm mt-6 md:mt-8">
              <div className="px-4 md:px-6 py-4 border-b border-slate-200 bg-slate-50">
                <h3 className="font-heading text-base md:text-lg font-semibold text-slate-900">
                  Recent Activity
                </h3>
              </div>
              <div className="divide-y divide-slate-200">
                <div className="p-4 md:p-6">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faRocket} className="text-green-600 text-sm md:text-base" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm md:text-base font-medium text-slate-900">
                        Deployment Successful
                      </p>
                      <p className="text-xs md:text-sm text-slate-600 mt-1">
                        Your site was deployed to production
                      </p>
                      <p className="text-xs text-slate-500 mt-1">2 hours ago</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faFolder} className="text-blue-600 text-sm md:text-base" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm md:text-base font-medium text-slate-900">
                        Files Updated
                      </p>
                      <p className="text-xs md:text-sm text-slate-600 mt-1">
                        3 files were modified in the uploads folder
                      </p>
                      <p className="text-xs text-slate-500 mt-1">5 hours ago</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faShieldHalved} className="text-purple-600 text-sm md:text-base" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm md:text-base font-medium text-slate-900">
                        Security Scan Completed
                      </p>
                      <p className="text-xs md:text-sm text-slate-600 mt-1">
                        No vulnerabilities detected
                      </p>
                      <p className="text-xs text-slate-500 mt-1">1 day ago</p>
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
