'use client';

import { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import TopHeader from '@/components/layout/TopHeader';
import MobileMenu from '@/components/layout/MobileMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldHalved,
  faServer,
  faBug,
  faClock,
  faCheckCircle,
  faExclamationTriangle,
  faCircleExclamation,
  faRotate,
  faDownload,
  faMagnifyingGlass,
  faVirus,
  faUnlock,
  faCode,
  faLightbulb,
  faClockRotateLeft,
  faUserShield,
  faArrowUp,
  faBell,
  faBook,
  faHeadset,
  faFileLines,
  faChevronDown,
  faChevronUp,
  faTimes,
  faWrench,
  faEye,
  faTrash,
  faFilter
} from '@fortawesome/free-solid-svg-icons';

interface SecurityIssue {
  id: string;
  site: string;
  type: 'Production' | 'Staging';
  status: 'clean' | 'warning' | 'issues' | 'scanning';
  lastScan: string;
  lastScanFull: string;
  critical: number;
  medium: number;
  low: number;
  scanType: 'Auto' | 'Manual';
  icon: string;
  bgColor: string;
  issues?: Array<{
    id: string;
    severity: 'critical' | 'medium' | 'low';
    category: string;
    file: string;
    description: string;
  }>;
}

const securityData: SecurityIssue[] = [
  {
    id: '1',
    site: 'mybusiness.pmc.app',
    type: 'Production',
    status: 'issues',
    lastScan: '5 minutes ago',
    lastScanFull: 'Dec 18, 2024 2:45 PM',
    critical: 3,
    medium: 2,
    low: 0,
    scanType: 'Auto',
    icon: '💼',
    bgColor: 'from-red-500 to-pink-500',
    issues: [
      { id: '1-1', severity: 'critical', category: 'Malware', file: '/wp-content/uploads/malware.php', description: 'Malicious PHP backdoor detected' },
      { id: '1-2', severity: 'critical', category: 'Malware', file: '/includes/exploit.js', description: 'JavaScript injection script found' },
      { id: '1-3', severity: 'critical', category: 'Vulnerable Files', file: '/old-admin/login.php', description: 'Outdated admin panel exposed' },
      { id: '1-4', severity: 'medium', category: 'Suspicious Code', file: '/themes/custom/functions.php', description: 'Obfuscated code detected' },
      { id: '1-5', severity: 'medium', category: 'Security Warning', file: '/.env', description: 'Environment file publicly accessible' }
    ]
  },
  {
    id: '2',
    site: 'portfolio.pmc.app',
    type: 'Production',
    status: 'warning',
    lastScan: '12 minutes ago',
    lastScanFull: 'Dec 18, 2024 2:38 PM',
    critical: 0,
    medium: 1,
    low: 3,
    scanType: 'Auto',
    icon: '🎨',
    bgColor: 'from-purple-500 to-indigo-500',
    issues: [
      { id: '2-1', severity: 'medium', category: 'Vulnerable Files', file: '/node_modules/old-package/', description: 'Outdated dependency with known vulnerabilities' },
      { id: '2-2', severity: 'low', category: 'Security Warning', file: '/config/database.js', description: 'Weak database password detected' },
      { id: '2-3', severity: 'low', category: 'Suspicious Code', file: '/api/debug.js', description: 'Debug endpoint left enabled in production' },
      { id: '2-4', severity: 'low', category: 'Security Warning', file: '/public/.htaccess', description: 'Directory listing enabled' }
    ]
  },
  {
    id: '3',
    site: 'shop.mybusiness.com',
    type: 'Production',
    status: 'clean',
    lastScan: '18 minutes ago',
    lastScanFull: 'Dec 18, 2024 2:32 PM',
    critical: 0,
    medium: 0,
    low: 0,
    scanType: 'Auto',
    icon: '🏪',
    bgColor: 'from-blue-500 to-cyan-500'
  },
  {
    id: '4',
    site: 'blog.mybusiness.com',
    type: 'Production',
    status: 'clean',
    lastScan: '25 minutes ago',
    lastScanFull: 'Dec 18, 2024 2:25 PM',
    critical: 0,
    medium: 0,
    low: 0,
    scanType: 'Auto',
    icon: '📰',
    bgColor: 'from-green-500 to-emerald-500'
  },
  {
    id: '5',
    site: 'startup.pmc.app',
    type: 'Staging',
    status: 'clean',
    lastScan: '1 hour ago',
    lastScanFull: 'Dec 18, 2024 1:50 PM',
    critical: 0,
    medium: 0,
    low: 0,
    scanType: 'Manual',
    icon: '🚀',
    bgColor: 'from-amber-500 to-orange-500'
  },
  {
    id: '6',
    site: 'analytics.mybusiness.com',
    type: 'Production',
    status: 'clean',
    lastScan: '2 hours ago',
    lastScanFull: 'Dec 18, 2024 12:50 PM',
    critical: 0,
    medium: 0,
    low: 0,
    scanType: 'Auto',
    icon: '📊',
    bgColor: 'from-teal-500 to-cyan-500'
  }
];

export default function SecurityPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [scanningStates, setScanningStates] = useState<Set<string>>(new Set());
  const [showDismissAlert, setShowDismissAlert] = useState(true);

  const totalSites = securityData.length;
  const cleanSites = securityData.filter(s => s.status === 'clean').length;
  const sitesWithIssues = securityData.filter(s => s.status === 'issues' || s.status === 'warning').length;

  const filteredData = securityData.filter((site) => {
    const matchesSearch = site.site.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' ||
      (statusFilter === 'clean' && site.status === 'clean') ||
      (statusFilter === 'issues' && (site.status === 'issues' || site.status === 'warning')) ||
      (statusFilter === 'scanning' && scanningStates.has(site.id));
    const matchesType = typeFilter === 'all' ||
      (typeFilter === 'production' && site.type === 'Production') ||
      (typeFilter === 'staging' && site.type === 'Staging');

    return matchesSearch && matchesStatus && matchesType;
  });

  const toggleRowExpansion = (siteId: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(siteId)) {
      newExpanded.delete(siteId);
    } else {
      newExpanded.add(siteId);
    }
    setExpandedRows(newExpanded);
  };

  const handleRescan = (siteId: string) => {
    const newScanning = new Set(scanningStates);
    newScanning.add(siteId);
    setScanningStates(newScanning);

    // Simulate scan completion after 3 seconds
    setTimeout(() => {
      const updatedScanning = new Set(scanningStates);
      updatedScanning.delete(siteId);
      setScanningStates(updatedScanning);
    }, 3000);
  };

  const handleScanAll = () => {
    const allIds = new Set(securityData.map(s => s.id));
    setScanningStates(allIds);

    setTimeout(() => {
      setScanningStates(new Set());
    }, 3000);
  };

  const getStatusBadge = (site: SecurityIssue) => {
    if (scanningStates.has(site.id)) {
      return (
        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium flex items-center gap-1.5 w-fit">
          <FontAwesomeIcon icon={faRotate} className="text-xs animate-spin" />
          Scanning...
        </span>
      );
    }

    if (site.status === 'clean') {
      return (
        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex items-center gap-1.5 w-fit">
          <FontAwesomeIcon icon={faCheckCircle} className="text-xs" />
          Clean
        </span>
      );
    } else if (site.status === 'warning') {
      return (
        <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium flex items-center gap-1.5 w-fit">
          <FontAwesomeIcon icon={faExclamationTriangle} className="text-xs" />
          Issues Found
        </span>
      );
    } else if (site.status === 'issues') {
      return (
        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium flex items-center gap-1.5 w-fit">
          <FontAwesomeIcon icon={faCircleExclamation} className="text-xs" />
          Critical Issues
        </span>
      );
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'low': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopHeader
          title="Security Center"
          subtitle="Monitor security status, malware scans, and threats across all your sites"
          onMenuToggle={() => setIsMobileMenuOpen(true)}
          showSiteSwitcher={false}
        />

        <main className="flex-1 overflow-y-auto bg-slate-50">
          {/* Critical Alert Banner */}
          {sitesWithIssues > 0 && showDismissAlert && (
            <section className="mx-4 md:mx-8 mt-6 md:mt-8 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-600 text-xl" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-red-900">{sitesWithIssues} Sites Require Attention</h3>
                    <span className="px-2 py-0.5 bg-red-600 text-white rounded-full text-xs font-medium">Critical</span>
                  </div>
                  <p className="text-sm text-red-800 mb-3">Security issues detected on {securityData.filter(s => s.status === 'issues').map(s => s.site).join(', ')}. Immediate action recommended.</p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        const firstIssue = securityData.find(s => s.status === 'issues');
                        if (firstIssue) {
                          setExpandedRows(new Set([firstIssue.id]));
                          document.querySelector(`#site-${firstIssue.id}`)?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => setShowDismissAlert(false)}
                      className="px-4 py-2 bg-white border border-red-300 text-red-700 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => setShowDismissAlert(false)}
                  className="text-red-400 hover:text-red-600 transition-colors"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            </section>
          )}

          {/* Stats Cards */}
          <section className="px-4 md:px-8 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <FontAwesomeIcon icon={faServer} className="text-blue-600 text-xl" />
                  </div>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-medium">Active</span>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{totalSites}</div>
                <div className="text-sm text-slate-600">Total Sites Monitored</div>
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <div className="text-xs text-slate-500">Last updated: 2 min ago</div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <FontAwesomeIcon icon={faShieldHalved} className="text-green-600 text-xl" />
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-medium">Secure</span>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{cleanSites}</div>
                <div className="text-sm text-slate-600">Clean Sites</div>
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-slate-200 rounded-full h-1.5">
                      <div className="bg-green-600 h-1.5 rounded-full transition-all" style={{ width: `${(cleanSites / totalSites) * 100}%` }}></div>
                    </div>
                    <span className="text-xs text-slate-600">{Math.round((cleanSites / totalSites) * 100)}%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-red-200 p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <FontAwesomeIcon icon={faBug} className="text-red-600 text-xl" />
                  </div>
                  <span className="px-2 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-medium">Alert</span>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{sitesWithIssues}</div>
                <div className="text-sm text-slate-600">Sites with Issues</div>
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <div className="text-xs text-red-600 font-medium">Requires immediate action</div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <FontAwesomeIcon icon={faClock} className="text-purple-600 text-xl" />
                  </div>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-lg text-xs font-medium">Auto</span>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">5m</div>
                <div className="text-sm text-slate-600">Last Global Scan</div>
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <div className="text-xs text-slate-500">Next scan: 55 min</div>
                </div>
              </div>
            </div>
          </section>

          {/* Sites Security Status Table */}
          <section className="px-4 md:px-8 pb-6">
            <div className="bg-white rounded-xl border border-slate-200">
              <div className="p-6 border-b border-slate-200">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900 mb-1">Sites Security Status</h2>
                    <p className="text-sm text-slate-600">Overview of security status across all monitored sites</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
                      <FontAwesomeIcon icon={faDownload} />
                      <span className="hidden sm:inline">Export</span>
                    </button>
                    <button
                      onClick={handleScanAll}
                      disabled={scanningStates.size > 0}
                      className="px-4 py-2 bg-pmc-red text-white rounded-lg text-sm font-medium hover:bg-pmc-red-dark transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <FontAwesomeIcon icon={faShieldHalved} className={scanningStates.size > 0 ? 'animate-spin' : ''} />
                      <span className="hidden sm:inline">{scanningStates.size > 0 ? 'Scanning...' : 'Scan All Sites'}</span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Search sites..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent"
                    />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faFilter} className="text-slate-400" />
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="px-4 py-2 border border-slate-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-pmc-red"
                    >
                      <option value="all">All Status</option>
                      <option value="clean">Clean</option>
                      <option value="issues">Issues Found</option>
                      <option value="scanning">Scanning</option>
                    </select>
                  </div>
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="px-4 py-2 border border-slate-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-pmc-red"
                  >
                    <option value="all">All Sites</option>
                    <option value="production">Production</option>
                    <option value="staging">Staging</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Site</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Last Scan</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Issues</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Actions</th>
                      <th className="px-6 py-4 text-center text-xs font-semibold text-slate-600 uppercase tracking-wider">Details</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {filteredData.map((site) => (
                      <>
                        <tr key={site.id} id={`site-${site.id}`} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 bg-gradient-to-br ${site.bgColor} rounded-lg flex items-center justify-center text-xl`}>
                                {site.icon}
                              </div>
                              <div>
                                <div className="font-medium text-slate-900">{site.site}</div>
                                <div className="text-xs text-slate-500">{site.type}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            {getStatusBadge(site)}
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-slate-900">{site.lastScan}</div>
                            <div className="text-xs text-slate-500">{site.lastScanFull}</div>
                          </td>
                          <td className="px-6 py-4">
                            {site.critical > 0 || site.medium > 0 || site.low > 0 ? (
                              <div className="flex flex-wrap items-center gap-2">
                                {site.critical > 0 && (
                                  <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-medium">{site.critical} Critical</span>
                                )}
                                {site.medium > 0 && (
                                  <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs font-medium">{site.medium} Medium</span>
                                )}
                                {site.low > 0 && (
                                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-medium">{site.low} Low</span>
                                )}
                              </div>
                            ) : (
                              <span className="text-sm text-slate-500">No issues</span>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => handleRescan(site.id)}
                                disabled={scanningStates.has(site.id)}
                                className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                title="Rescan"
                              >
                                <FontAwesomeIcon icon={faRotate} className={scanningStates.has(site.id) ? 'animate-spin' : ''} />
                              </button>
                              {site.status !== 'clean' && (
                                <button
                                  className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                                  title="Fix Issues"
                                >
                                  <FontAwesomeIcon icon={faWrench} />
                                </button>
                              )}
                              <button
                                className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                                title="View Report"
                              >
                                <FontAwesomeIcon icon={faEye} />
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center">
                            {site.issues && site.issues.length > 0 && (
                              <button
                                onClick={() => toggleRowExpansion(site.id)}
                                className="inline-flex items-center px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium hover:bg-slate-200 transition-colors"
                              >
                                <FontAwesomeIcon icon={expandedRows.has(site.id) ? faChevronUp : faChevronDown} className="mr-1" />
                                {expandedRows.has(site.id) ? 'Hide' : 'Show'} {site.issues.length} Issues
                              </button>
                            )}
                          </td>
                        </tr>
                        {/* Expanded Row with Issues */}
                        {expandedRows.has(site.id) && site.issues && (
                          <tr key={`${site.id}-details`}>
                            <td colSpan={6} className="px-6 py-4 bg-slate-50">
                              <div className="space-y-3">
                                <h4 className="text-sm font-semibold text-slate-900 mb-3">Security Issues Found:</h4>
                                {site.issues.map((issue) => (
                                  <div key={issue.id} className={`p-4 border rounded-lg ${getSeverityColor(issue.severity)}`}>
                                    <div className="flex items-start justify-between gap-4">
                                      <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                          <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${
                                            issue.severity === 'critical' ? 'bg-red-600 text-white' :
                                            issue.severity === 'medium' ? 'bg-orange-600 text-white' :
                                            'bg-yellow-600 text-white'
                                          }`}>
                                            {issue.severity}
                                          </span>
                                          <span className="text-sm font-semibold text-slate-900">{issue.category}</span>
                                        </div>
                                        <div className="text-sm text-slate-700 mb-2">{issue.description}</div>
                                        <div className="flex items-center gap-2 text-xs text-slate-600">
                                          <FontAwesomeIcon icon={faFileLines} />
                                          <code className="bg-white px-2 py-1 rounded border border-slate-200">{issue.file}</code>
                                        </div>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-medium hover:bg-blue-700 transition-colors">
                                          Fix Now
                                        </button>
                                        <button className="px-3 py-1.5 bg-white border border-slate-300 text-slate-700 rounded-lg text-xs font-medium hover:bg-slate-50 transition-colors">
                                          Ignore
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </td>
                          </tr>
                        )}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-slate-600">Showing {filteredData.length} of {totalSites} sites</div>
              </div>
            </div>
          </section>

          {/* Threat Categories */}
          <section className="px-4 md:px-8 pb-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-1">Threat Categories Overview</h2>
              <p className="text-sm text-slate-600">Types of security issues detected across all sites</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-5 border border-red-200 rounded-xl hover:shadow-md transition-all bg-white cursor-pointer hover:border-red-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faVirus} className="text-red-600" />
                  </div>
                  <span className="text-2xl font-bold text-red-600">3</span>
                </div>
                <div className="text-sm font-medium text-slate-900 mb-1">Malware Detected</div>
                <div className="text-xs text-slate-500">Critical priority</div>
              </div>

              <div className="p-5 border border-orange-200 rounded-xl hover:shadow-md transition-all bg-white cursor-pointer hover:border-orange-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faUnlock} className="text-orange-600" />
                  </div>
                  <span className="text-2xl font-bold text-orange-600">2</span>
                </div>
                <div className="text-sm font-medium text-slate-900 mb-1">Vulnerable Files</div>
                <div className="text-xs text-slate-500">Medium priority</div>
              </div>

              <div className="p-5 border border-yellow-200 rounded-xl hover:shadow-md transition-all bg-white cursor-pointer hover:border-yellow-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faCode} className="text-yellow-600" />
                  </div>
                  <span className="text-2xl font-bold text-yellow-600">4</span>
                </div>
                <div className="text-sm font-medium text-slate-900 mb-1">Suspicious Code</div>
                <div className="text-xs text-slate-500">Low priority</div>
              </div>

              <div className="p-5 border border-blue-200 rounded-xl hover:shadow-md transition-all bg-white cursor-pointer hover:border-blue-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faShieldHalved} className="text-blue-600" />
                  </div>
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <div className="text-sm font-medium text-slate-900 mb-1">Security Warnings</div>
                <div className="text-xs text-slate-500">Info level</div>
              </div>
            </div>
          </section>

          {/* Security Recommendations */}
          <section className="px-4 md:px-8 pb-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-1">Security Recommendations</h2>
              <p className="text-sm text-slate-600">Proactive steps to enhance your sites' security posture</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="p-5 border border-blue-200 rounded-lg bg-blue-50 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faLightbulb} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-slate-900">Enable Two-Factor Authentication</h3>
                      <span className="px-2 py-0.5 bg-blue-600 text-white rounded text-xs font-medium">Recommended</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">Add an extra layer of security to your account by enabling 2FA.</p>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      Enable 2FA
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-5 border border-green-200 rounded-lg bg-green-50 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faClockRotateLeft} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-slate-900">Schedule Regular Backups</h3>
                      <span className="px-2 py-0.5 bg-green-600 text-white rounded text-xs font-medium">Important</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">Ensure you have recent backups of all sites for quick recovery.</p>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                      Configure Backups
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-5 border border-purple-200 rounded-lg bg-purple-50 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faUserShield} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-slate-900">Review Developer Access</h3>
                      <span className="px-2 py-0.5 bg-purple-600 text-white rounded text-xs font-medium">Security</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">Regularly audit developer permissions and remove unnecessary access.</p>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                      Manage Access
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-5 border border-amber-200 rounded-lg bg-amber-50 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faArrowUp} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-slate-900">Keep Dependencies Updated</h3>
                      <span className="px-2 py-0.5 bg-amber-600 text-white rounded text-xs font-medium">Maintenance</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">Outdated dependencies can contain security vulnerabilities.</p>
                    <button className="px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors">
                      Check Updates
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Security Resources */}
          <section className="px-4 md:px-8 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faBook} className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Security Best Practices</h3>
                <p className="text-sm text-slate-600 mb-4">Learn how to protect your sites from common security threats.</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
                  Read Guide
                  <FontAwesomeIcon icon={faArrowUp} className="rotate-90" />
                </button>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200 p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faHeadset} className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Contact Security Team</h3>
                <p className="text-sm text-slate-600 mb-4">Need help with a security issue? Our expert team is here 24/7.</p>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors inline-flex items-center gap-2">
                  Get Support
                  <FontAwesomeIcon icon={faArrowUp} className="rotate-90" />
                </button>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faFileLines} className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Security Documentation</h3>
                <p className="text-sm text-slate-600 mb-4">Detailed documentation on scan results and resolution steps.</p>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors inline-flex items-center gap-2">
                  View Docs
                  <FontAwesomeIcon icon={faArrowUp} className="rotate-90" />
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
