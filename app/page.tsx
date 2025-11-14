'use client';

import { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import TopHeader from '@/components/layout/TopHeader';
import MobileMenu from '@/components/layout/MobileMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faSearch,
  faFilter,
  faGrip,
  faList,
  faGlobe,
  faCircleCheck,
  faBolt,
  faChartLine,
  faCircle,
  faLink,
  faLanguage,
  faArrowUpRightDots,
  faDatabase,
  faWandMagicSparkles,
  faPencil,
  faFileLines,
  faLayerGroup,
  faBook,
  faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

const siteData = [
  {
    id: '1',
    name: 'TechFlow Solutions',
    customDomain: 'techflow.com',
    pmcDomain: 'techflow.pmc.io',
    status: 'live',
    plan: 'Pro',
    language: 'EN',
    bandwidth: { used: 42.3, total: 100, percent: 42 },
    storage: { used: 1.8, total: 5, percent: 36 },
    connectsUsed: 42,
    lastAI: '3h ago',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/1810f59673-c805ddfb14900a813f82.png',
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    id: '2',
    name: 'StyleHub Fashion',
    customDomain: 'stylehub.store',
    pmcDomain: 'stylehub.pmc.io',
    status: 'live',
    plan: 'Scale',
    language: 'EN',
    bandwidth: { used: 78.5, total: 500, percent: 16 },
    storage: { used: 8.2, total: 50, percent: 16 },
    connectsUsed: 156,
    lastAI: '1h ago',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/5c8947d13d-00ff8dc144c9f6d033be.png',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    id: '3',
    name: 'Creative Minds Agency',
    customDomain: 'creativeminds.co',
    pmcDomain: 'creative.pmc.io',
    status: 'live',
    plan: 'Pro',
    language: 'EN',
    bandwidth: { used: 23.1, total: 100, percent: 23 },
    storage: { used: 2.4, total: 5, percent: 48 },
    connectsUsed: 67,
    lastAI: '12h ago',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/bc1afcfe3c-a6b9a67b2d42cdbdae65.png',
    gradient: 'from-rose-500 to-pink-600'
  },
  {
    id: '4',
    name: 'GreenEarth Foundation',
    customDomain: 'greenearth.org',
    pmcDomain: 'greenearth.pmc.io',
    status: 'deploying',
    plan: 'Starter',
    language: 'EN',
    bandwidth: { used: 5.2, total: 50, percent: 10 },
    storage: { used: 0.8, total: 2, percent: 40 },
    connectsUsed: 18,
    lastAI: '2d ago',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/bf96f32e4d-8ec15c7c27f13c7d1743.png',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    id: '5',
    name: 'Urban Eats Delivery',
    customDomain: 'urbaneats.app',
    pmcDomain: 'urbaneats.pmc.io',
    status: 'live',
    plan: 'Pro',
    language: 'EN',
    bandwidth: { used: 56.8, total: 100, percent: 57 },
    storage: { used: 3.2, total: 5, percent: 64 },
    connectsUsed: 89,
    lastAI: '5h ago',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/3482a26fee-c5a05eac45ee60fa7c6b.png',
    gradient: 'from-amber-500 to-orange-600'
  },
  {
    id: '6',
    name: 'LearnHub Academy',
    customDomain: 'learnhub.edu',
    pmcDomain: 'learnhub.pmc.io',
    status: 'live',
    plan: 'Scale',
    language: 'EN',
    bandwidth: { used: 124.6, total: 500, percent: 25 },
    storage: { used: 12.5, total: 50, percent: 25 },
    connectsUsed: 203,
    lastAI: '30m ago',
    image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/a4cbc78bf8-b03f5c746ed1e5f9f5e9.png',
    gradient: 'from-indigo-500 to-purple-600'
  }
];

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const totalSites = siteData.length;
  const liveSites = siteData.filter(s => s.status === 'live').length;
  const connectsAvailable = 127;
  const totalVisitors = '1.2M';

  const filteredSites = siteData.filter((site) =>
    site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    site.customDomain.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    if (status === 'live') {
      return (
        <span className="px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full flex items-center">
          <FontAwesomeIcon icon={faCircle} className="text-[8px] mr-1" />
          Live
        </span>
      );
    } else if (status === 'deploying') {
      return (
        <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full flex items-center">
          <FontAwesomeIcon icon={faCircle} className="text-[8px] mr-1" />
          Deploying
        </span>
      );
    }
  };

  const getPlanBadge = (plan: string) => {
    const colors: { [key: string]: string } = {
      'Starter': 'bg-gray-600',
      'Pro': 'bg-purple-600',
      'Scale': 'bg-indigo-600'
    };
    return <span className={`px-2 py-1 ${colors[plan] || 'bg-gray-600'} text-white text-xs font-medium rounded-full`}>{plan}</span>;
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopHeader
          title="My Sites"
          subtitle="Manage and monitor all your PMC Engine powered websites"
          onMenuToggle={() => setIsMobileMenuOpen(true)}
          showSiteSwitcher={false}
        />

        <main className="flex-1 overflow-y-auto bg-slate-50">
          {/* Header */}
          <section className="p-4 md:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">My Sites</h1>
                <p className="text-slate-600">Manage and monitor all your PMC Engine powered websites</p>
              </div>
              <Link
                href="/wizard/theme"
                className="px-6 py-3 bg-gradient-to-r from-pmc-red to-pink-600 hover:from-pmc-red-dark hover:to-pink-700 text-white font-medium rounded-lg shadow-lg shadow-pmc-red/30 flex items-center space-x-2 transition-all"
              >
                <FontAwesomeIcon icon={faPlus} />
                <span>New Site</span>
              </Link>
            </div>

            {/* Filters */}
            <div className="mb-6 bg-white rounded-xl border border-slate-200 p-4">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center space-x-3 flex-1 w-full md:w-auto">
                  <div className="relative flex-1 md:w-96">
                    <input
                      type="text"
                      placeholder="Search sites..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent"
                    />
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                  </div>
                  <button className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition flex items-center space-x-2">
                    <FontAwesomeIcon icon={faFilter} />
                    <span className="hidden sm:inline">Filter</span>
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition ${
                      viewMode === 'grid' ? 'bg-pmc-red text-white' : 'text-slate-400 hover:bg-slate-100'
                    }`}
                  >
                    <FontAwesomeIcon icon={faGrip} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition ${
                      viewMode === 'list' ? 'bg-pmc-red text-white' : 'text-slate-400 hover:bg-slate-100'
                    }`}
                  >
                    <FontAwesomeIcon icon={faList} />
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Overview */}
            <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faGlobe} className="text-blue-600 text-xl" />
                  </div>
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">+12%</span>
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{totalSites}</div>
                <div className="text-sm text-slate-600">Total Sites</div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-green-600 text-xl" />
                  </div>
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">98%</span>
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{liveSites}</div>
                <div className="text-sm text-slate-600">Live Sites</div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faBolt} className="text-purple-600 text-xl" />
                  </div>
                  <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded">-8%</span>
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{connectsAvailable}</div>
                <div className="text-sm text-slate-600">Connects Available</div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faChartLine} className="text-orange-600 text-xl" />
                  </div>
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">+24%</span>
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{totalVisitors}</div>
                <div className="text-sm text-slate-600">Total Visitors</div>
              </div>
            </div>

            {/* Sites Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSites.map((site) => (
                <article key={site.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Site Thumbnail */}
                  <div className={`relative h-48 bg-gradient-to-br ${site.gradient} overflow-hidden`}>
                    <Image
                      src={site.image}
                      alt={site.name}
                      fill
                      className="object-cover opacity-90"
                    />
                    <div className="absolute top-3 right-3 flex space-x-2">
                      {getStatusBadge(site.status)}
                      {getPlanBadge(site.plan)}
                    </div>
                  </div>

                  {/* Site Info */}
                  <div className="p-5">
                    <div className="mb-3">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{site.name}</h3>
                      <div className="flex items-center space-x-2 text-sm text-slate-600">
                        <FontAwesomeIcon icon={faLink} className="text-xs" />
                        <span className="text-blue-600">{site.customDomain}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                      <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded">
                        {site.pmcDomain}
                      </span>
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded flex items-center">
                        <FontAwesomeIcon icon={faLanguage} className="mr-1" />
                        {site.language}
                      </span>
                    </div>

                    {/* Progress Bars */}
                    <div className="space-y-3 mb-4">
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                          <span className="flex items-center">
                            <FontAwesomeIcon icon={faArrowUpRightDots} className="mr-1" />
                            Bandwidth
                          </span>
                          <span className="font-medium">{site.bandwidth.used} GB / {site.bandwidth.total} GB</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-1.5">
                          <div
                            className="bg-blue-600 h-1.5 rounded-full transition-all"
                            style={{ width: `${site.bandwidth.percent}%` }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                          <span className="flex items-center">
                            <FontAwesomeIcon icon={faDatabase} className="mr-1" />
                            Storage
                          </span>
                          <span className="font-medium">{site.storage.used} GB / {site.storage.total} GB</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-1.5">
                          <div
                            className="bg-green-600 h-1.5 rounded-full transition-all"
                            style={{ width: `${site.storage.percent}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Connects Info */}
                    <div className="bg-slate-50 rounded-lg p-3 mb-4">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-600">
                          Connects used: <span className="font-bold text-slate-900">{site.connectsUsed}</span>
                        </span>
                        <span className="text-slate-500">
                          Last AI: <span className="font-medium text-slate-700">{site.lastAI}</span>
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <Link
                        href={`/sites/${site.id}/overview`}
                        className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg flex items-center justify-center space-x-1"
                      >
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        <span>Open Manager</span>
                      </Link>
                      <Link
                        href={`/sites/${site.id}/ai-assistant`}
                        className="px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium rounded-lg flex items-center justify-center space-x-1"
                      >
                        <FontAwesomeIcon icon={faWandMagicSparkles} />
                        <span>AI Re-customize</span>
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={`/sites/${site.id}/content-editor`}
                        className="px-3 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-lg flex items-center justify-center space-x-1"
                      >
                        <FontAwesomeIcon icon={faPencil} />
                        <span>Edit Content</span>
                      </Link>
                      <Link
                        href={`/domains`}
                        className="px-3 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-lg flex items-center justify-center space-x-1"
                      >
                        <FontAwesomeIcon icon={faGlobe} />
                        <span>Manage Domain</span>
                      </Link>
                    </div>

                    {/* Footer */}
                    <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between">
                      <Link
                        href="/billing"
                        className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Upgrade Plan
                      </Link>
                      <Link
                        href={`/sites/${site.id}/logs`}
                        className="text-xs text-slate-600 hover:text-slate-700 font-medium flex items-center space-x-1"
                      >
                        <FontAwesomeIcon icon={faFileLines} />
                        <span>View Logs</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Quick Actions */}
          <section className="mx-4 md:mx-6 lg:mx-8 mt-12 mb-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100 p-6 md:p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Quick Actions</h2>
              <p className="text-slate-600">Get started with common tasks</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/wizard/theme"
                className="bg-white hover:bg-slate-50 border border-slate-200 rounded-xl p-6 text-left transition-all block"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faPlus} className="text-blue-600 text-xl" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Create New Site</h3>
                <p className="text-sm text-slate-600">Start a new project with AI wizard</p>
              </Link>

              <Link
                href="/billing"
                className="bg-white hover:bg-slate-50 border border-slate-200 rounded-xl p-6 text-left transition-all block"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faBolt} className="text-purple-600 text-xl" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Buy Connects</h3>
                <p className="text-sm text-slate-600">Get more AI customization power</p>
              </Link>

              <Link
                href="/wizard/theme"
                className="bg-white hover:bg-slate-50 border border-slate-200 rounded-xl p-6 text-left transition-all block"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faLayerGroup} className="text-green-600 text-xl" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Browse Templates</h3>
                <p className="text-sm text-slate-600">Explore pre-built site templates</p>
              </Link>

              <Link
                href="/support"
                className="bg-white hover:bg-slate-50 border border-slate-200 rounded-xl p-6 text-left transition-all block"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faBook} className="text-orange-600 text-xl" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Documentation</h3>
                <p className="text-sm text-slate-600">Learn how to use PMC Engine</p>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
