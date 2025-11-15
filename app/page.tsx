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
  faArrowUpRightFromSquare,
  faCode
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faWordpress,
  faVuejs,
  faAngular
} from '@fortawesome/free-brands-svg-icons';
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
    tech: 'React',
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
    tech: 'WordPress',
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
    tech: 'Next.js',
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
    tech: 'Vue.js',
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
    tech: 'Angular',
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
    tech: 'Svelte',
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
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [statusFilter, setStatusFilter] = useState<'all' | 'live' | 'deploying'>('all');
  const [planFilter, setPlanFilter] = useState<'all' | 'Starter' | 'Pro' | 'Scale'>('all');

  const totalSites = siteData.length;
  const liveSites = siteData.filter(s => s.status === 'live').length;
  const connectsAvailable = 127;
  const totalVisitors = '1.2M';

  const filteredSites = siteData.filter((site) => {
    const matchesSearch = site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      site.customDomain.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || site.status === statusFilter;
    const matchesPlan = planFilter === 'all' || site.plan === planFilter;
    return matchesSearch && matchesStatus && matchesPlan;
  });

  const clearFilters = () => {
    setStatusFilter('all');
    setPlanFilter('all');
    setSearchTerm('');
  };

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

  const getTechIcon = (tech: string) => {
    const techConfig: { [key: string]: { icon: any; color: string } } = {
      'React': { icon: faReact, color: 'text-blue-500' },
      'WordPress': { icon: faWordpress, color: 'text-blue-600' },
      'Next.js': { icon: faCode, color: 'text-slate-900' },
      'Vue.js': { icon: faVuejs, color: 'text-green-600' },
      'Angular': { icon: faAngular, color: 'text-red-600' },
      'Svelte': { icon: faCode, color: 'text-orange-600' }
    };
    const config = techConfig[tech] || { icon: faCode, color: 'text-slate-600' };
    return (
      <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded flex items-center whitespace-nowrap">
        <FontAwesomeIcon icon={config.icon} className={`mr-1 ${config.color}`} />
        {tech}
      </span>
    );
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
                className="px-6 py-3 bg-slate-900 hover:bg-slate-700 text-white font-medium rounded-lg flex items-center space-x-2 transition-all"
              >
                <FontAwesomeIcon icon={faPlus} />
                <span>New Site</span>
              </Link>
            </div>

            {/* Filters */}
            <div className="mb-6 bg-white rounded-xl border border-slate-200 p-5">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center space-x-3 flex-1 w-full md:w-auto">
                  <div className="relative flex-1 md:w-96">
                    <input
                      type="text"
                      placeholder="Search sites..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-slate-400 transition-all bg-white"
                    />
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    {searchTerm && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-1 rounded">
                          {filteredSites.length} found
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                      className={`px-4 py-2.5 border rounded-lg transition-all flex items-center gap-2 font-medium ${
                        statusFilter !== 'all' || planFilter !== 'all'
                          ? 'border-slate-900 bg-slate-900 text-white'
                          : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <FontAwesomeIcon icon={faFilter} className="text-sm" />
                      <span className="hidden sm:inline">Filter</span>
                      {(statusFilter !== 'all' || planFilter !== 'all') && (
                        <span className="flex items-center justify-center w-5 h-5 bg-white text-slate-900 text-xs font-bold rounded-full">
                          {[statusFilter !== 'all' ? 1 : 0, planFilter !== 'all' ? 1 : 0].reduce((a, b) => a + b)}
                        </span>
                      )}
                    </button>

                    {/* Filter Dropdown */}
                    {showFilterDropdown && (
                      <>
                        <div
                          className="fixed inset-0 z-30 bg-black/10"
                          onClick={() => setShowFilterDropdown(false)}
                        />
                        <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl border border-slate-200 shadow-xl z-40 overflow-hidden">
                          <div className="px-5 py-4 bg-slate-50 border-b border-slate-200">
                            <div className="flex items-center justify-between">
                              <h3 className="font-bold text-slate-900">Filters</h3>
                              <button
                                onClick={clearFilters}
                                className="text-xs text-slate-600 hover:text-slate-900 font-medium px-2 py-1 rounded transition-all"
                              >
                                Clear all
                              </button>
                            </div>
                          </div>

                          <div className="p-5 space-y-5">
                            {/* Status Filter */}
                            <div>
                              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 block">
                                Status
                              </label>
                              <div className="space-y-2">
                                {[
                                  { value: 'all', label: 'All Sites', icon: faGlobe },
                                  { value: 'live', label: 'Live', icon: faCircleCheck },
                                  { value: 'deploying', label: 'Deploying', icon: faBolt }
                                ].map((status) => (
                                  <button
                                    key={status.value}
                                    onClick={() => setStatusFilter(status.value as any)}
                                    className={`w-full px-3 py-2 rounded-lg text-left text-sm font-medium transition-all flex items-center gap-2 ${
                                      statusFilter === status.value
                                        ? 'bg-slate-900 text-white'
                                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                                    }`}
                                  >
                                    <FontAwesomeIcon icon={status.icon} className="text-sm" />
                                    {status.label}
                                    {statusFilter === status.value && (
                                      <FontAwesomeIcon icon={faCircleCheck} className="ml-auto text-sm" />
                                    )}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Plan Filter */}
                            <div>
                              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 block">
                                Plan
                              </label>
                              <div className="space-y-2">
                                {[
                                  { value: 'all', label: 'All Plans', icon: faLayerGroup },
                                  { value: 'Starter', label: 'Starter', icon: faGlobe },
                                  { value: 'Pro', label: 'Pro', icon: faBolt },
                                  { value: 'Scale', label: 'Scale', icon: faChartLine }
                                ].map((plan) => (
                                  <button
                                    key={plan.value}
                                    onClick={() => setPlanFilter(plan.value as any)}
                                    className={`w-full px-3 py-2 rounded-lg text-left text-sm font-medium transition-all flex items-center gap-2 ${
                                      planFilter === plan.value
                                        ? 'bg-slate-900 text-white'
                                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                                    }`}
                                  >
                                    <FontAwesomeIcon icon={plan.icon} className="text-sm" />
                                    {plan.label}
                                    {planFilter === plan.value && (
                                      <FontAwesomeIcon icon={faCircleCheck} className="ml-auto text-sm" />
                                    )}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="px-5 py-4 bg-slate-50 border-t border-slate-200">
                            <button
                              onClick={() => setShowFilterDropdown(false)}
                              className="w-full px-4 py-2.5 bg-slate-900 hover:bg-slate-700 text-white rounded-lg font-medium transition-all"
                            >
                              Apply Filters
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-2 rounded-md transition-all font-medium flex items-center gap-2 text-xs ${
                      viewMode === 'grid'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <FontAwesomeIcon icon={faGrip} className="text-sm" />
                    <span className="hidden sm:inline">Grid</span>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-3 py-2 rounded-md transition-all font-medium flex items-center gap-2 text-xs ${
                      viewMode === 'list'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <FontAwesomeIcon icon={faList} className="text-sm" />
                    <span className="hidden sm:inline">List</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Overview */}
            <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Total Sites */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faGlobe} className="text-slate-600 text-lg" />
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                    ↑ +12%
                  </span>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{totalSites}</div>
                <div className="text-sm text-slate-600">Total Sites</div>
              </div>

              {/* Live Sites */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faCircleCheck} className="text-emerald-600 text-lg" />
                  </div>
                  <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                    98% Uptime
                  </span>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{liveSites}</div>
                <div className="text-sm text-slate-600">Live Sites</div>
              </div>

              {/* Connects Available */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faBolt} className="text-slate-600 text-lg" />
                  </div>
                  <span className="text-xs font-semibold text-orange-700 bg-orange-50 px-2.5 py-1 rounded-full">
                    ↓ -8%
                  </span>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{connectsAvailable}</div>
                <div className="text-sm text-slate-600">Connects Available</div>
              </div>

              {/* Total Visitors */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md hover:border-slate-300 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faChartLine} className="text-slate-600 text-lg" />
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                    ↑ +24%
                  </span>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{totalVisitors}</div>
                <div className="text-sm text-slate-600">Total Visitors</div>
              </div>
            </div>

            {/* Sites Grid/List */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
              {filteredSites.map((site, index) => (
                <article
                  key={site.id}
                  className={`bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all group ${viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''}`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Site Thumbnail */}
                  <div className={`relative bg-slate-700 overflow-hidden ${viewMode === 'grid' ? 'h-48' : 'h-48 sm:h-auto sm:w-48 lg:w-64 flex-shrink-0'}`}>
                    <Image
                      src={site.image}
                      alt={site.name}
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className={`absolute flex space-x-2 ${viewMode === 'grid' ? 'top-3 right-3' : 'top-3 left-3'}`}>
                      {getStatusBadge(site.status)}
                      {getPlanBadge(site.plan)}
                    </div>
                  </div>

                  {/* Site Info */}
                  <div className={`p-5 flex-1 ${viewMode === 'list' ? 'flex flex-col justify-between' : ''}`}>
                    {/* Header Section */}
                    <div className={`${viewMode === 'list' ? 'mb-3' : 'mb-3'}`}>
                      <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-pmc-red transition-colors">{site.name}</h3>
                      <div className="flex items-center space-x-2 text-sm text-slate-600 mb-2">
                        <FontAwesomeIcon icon={faLink} className="text-xs" />
                        <span className="text-blue-600 hover:underline">{site.customDomain}</span>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-md whitespace-nowrap border border-slate-200">
                          {site.pmcDomain}
                        </span>
                        {getTechIcon(site.tech)}
                      </div>
                    </div>

                    {/* Progress Bars - Show in Both Views */}
                    <div className={`space-y-2.5 mb-4 ${viewMode === 'list' ? 'lg:grid lg:grid-cols-2 lg:gap-3 lg:space-y-0' : ''}`}>
                      <div>
                        <div className="flex items-center justify-between text-xs font-medium text-slate-700 mb-1.5">
                          <span className="flex items-center gap-1.5">
                            <FontAwesomeIcon icon={faArrowUpRightDots} className="text-slate-500" />
                            Bandwidth
                          </span>
                          <span className="font-semibold">
                            {site.bandwidth.used}<span className="text-slate-500"> / {site.bandwidth.total} GB</span>
                          </span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-slate-600 h-2 rounded-full transition-all"
                            style={{ width: `${site.bandwidth.percent}%` }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between text-xs font-medium text-slate-700 mb-1.5">
                          <span className="flex items-center gap-1.5">
                            <FontAwesomeIcon icon={faDatabase} className="text-slate-500" />
                            Storage
                          </span>
                          <span className="font-semibold">
                            {site.storage.used}<span className="text-slate-500"> / {site.storage.total} GB</span>
                          </span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-slate-600 h-2 rounded-full transition-all"
                            style={{ width: `${site.storage.percent}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Connects Info */}
                    <div className="bg-slate-50 rounded-lg p-3 mb-4 border border-slate-200">
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
                    <div className={`${viewMode === 'list' ? 'mt-auto' : ''}`}>
                      <div className={`grid ${viewMode === 'list' ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-2'} gap-2.5`}>
                        <Link
                          href={`/sites/${site.id}/overview`}
                          className="px-3 py-2.5 bg-slate-900 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all"
                        >
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm" />
                          <span className={`${viewMode === 'list' ? 'hidden lg:inline' : ''}`}>Open Manager</span>
                          <span className={`${viewMode === 'list' ? 'lg:hidden' : 'hidden'}`}>Open</span>
                        </Link>
                        <Link
                          href={`/sites/${site.id}/ai-assistant`}
                          className="px-3 py-2.5 bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all"
                        >
                          <FontAwesomeIcon icon={faWandMagicSparkles} className="text-sm" />
                          <span className={`${viewMode === 'list' ? 'hidden lg:inline' : ''}`}>AI Re-customize</span>
                          <span className={`${viewMode === 'list' ? 'lg:hidden' : 'hidden'}`}>AI</span>
                        </Link>
                        <Link
                          href={`/sites/${site.id}/content-editor`}
                          className="px-3 py-2.5 border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all"
                        >
                          <FontAwesomeIcon icon={faPencil} className="text-sm" />
                          <span className={`${viewMode === 'list' ? 'hidden lg:inline' : ''}`}>Edit Content</span>
                          <span className={`${viewMode === 'list' ? 'lg:hidden' : 'hidden'}`}>Edit</span>
                        </Link>
                        <Link
                          href={`/domains`}
                          className="px-3 py-2.5 border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all"
                        >
                          <FontAwesomeIcon icon={faGlobe} className="text-sm" />
                          <span className={`${viewMode === 'list' ? 'hidden lg:inline' : ''}`}>Manage Domain</span>
                          <span className={`${viewMode === 'list' ? 'lg:hidden' : 'hidden'}`}>Domain</span>
                        </Link>
                      </div>

                      {/* Footer - Only in Grid View */}
                      <div className={`mt-3 pt-3 border-t border-slate-200 flex items-center justify-between ${viewMode === 'list' ? 'hidden' : ''}`}>
                        <Link
                          href="/billing"
                          className="text-xs text-pmc-red hover:text-pmc-red-dark font-medium transition-colors"
                        >
                          Upgrade Plan
                        </Link>
                        <Link
                          href={`/sites/${site.id}/logs`}
                          className="text-xs text-slate-600 hover:text-pmc-red font-medium flex items-center space-x-1 transition-colors"
                        >
                          <FontAwesomeIcon icon={faFileLines} />
                          <span>View Logs</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Quick Actions */}
          <section className="mx-4 md:mx-6 lg:mx-8 mt-12 mb-8 bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Quick Actions</h2>
              <p className="text-slate-600">Get started with common tasks</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <Link
                href="/wizard/theme"
                className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-6 text-left transition-all block hover:shadow-md"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faPlus} className="text-slate-600 text-lg" />
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-1.5">Create New Site</h3>
                <p className="text-sm text-slate-600">Start a new project with AI wizard</p>
              </Link>

              <Link
                href="/billing"
                className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-6 text-left transition-all block hover:shadow-md"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faBolt} className="text-slate-600 text-lg" />
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-1.5">Buy Connects</h3>
                <p className="text-sm text-slate-600">Get more AI customization power</p>
              </Link>

              <Link
                href="/wizard/theme"
                className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-6 text-left transition-all block hover:shadow-md"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faLayerGroup} className="text-slate-600 text-lg" />
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-1.5">Browse Templates</h3>
                <p className="text-sm text-slate-600">Explore pre-built site templates</p>
              </Link>

              <Link
                href="/support"
                className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-6 text-left transition-all block hover:shadow-md"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faBook} className="text-slate-600 text-lg" />
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-1.5">Documentation</h3>
                <p className="text-sm text-slate-600">Learn how to use PMC Engine</p>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
