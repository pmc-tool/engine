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
  faShieldHalved,
  faLock,
  faCheckCircle,
  faCircle,
  faToggleOn,
  faToggleOff,
  faFireFlameCurved,
  faBug,
  faKey,
  faUserShield,
  faExclamationTriangle,
  faCircleCheck,
  faRotate,
  faClock,
  faGlobe,
  faShieldAlt,
  faFileShield,
  faCircleXmark,
  faBan,
  faChartLine,
  faEllipsisVertical,
  faMagnifyingGlass,
  faDownload,
  faCalendarDays,
  faLocationDot,
  faDesktop,
  faArrowRight,
  faBook,
  faHeadset,
  faBolt,
  faSpinner,
  faCloud,
  faServer,
  faCodeBranch
} from '@fortawesome/free-solid-svg-icons';

export default function SecurityPage() {
  const params = useParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sslEnabled, setSslEnabled] = useState(true);
  const [firewallEnabled, setFirewallEnabled] = useState(true);
  const [ddosProtection, setDdosProtection] = useState(true);
  const [autoScanEnabled, setAutoScanEnabled] = useState(true);
  const [isScanning, setIsScanning] = useState(false);

  const site = mockSites.find(s => s.id === params.id) || mockSites[0];

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      alert('Security scan completed! No issues found.');
    }, 3000);
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
          <section className="relative px-4 md:px-8 pt-8 pb-6 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 w-64 h-64 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-full mb-4">
                    <FontAwesomeIcon icon={faShieldHalved} className="text-green-600" />
                    <span className="text-sm font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      Advanced Protection
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-display font-bold mb-3 bg-gradient-to-r from-slate-900 via-green-900 to-blue-900 bg-clip-text text-transparent">
                    Security Center
                  </h1>
                  <p className="text-lg text-slate-600 max-w-2xl">Manage SSL certificates, firewall rules, malware protection, and security monitoring</p>
                </div>
                <div className="hidden md:flex gap-3">
                  <button className="px-5 py-3 bg-white border-2 border-slate-300 text-slate-700 rounded-xl text-sm font-semibold hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                    <FontAwesomeIcon icon={faDownload} />
                    Export Report
                  </button>
                  <button
                    onClick={handleScan}
                    disabled={isScanning}
                    className="px-5 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl text-sm font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FontAwesomeIcon icon={isScanning ? faSpinner : faRotate} className={isScanning ? 'animate-spin' : ''} />
                    {isScanning ? 'Scanning...' : 'Run Scan'}
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Tab Navigation */}
              <TabNavigation />

              {/* Security Status Banner */}
              <div className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-8 md:p-10 text-white mb-8 mt-6 overflow-hidden group shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <FontAwesomeIcon icon={faShieldHalved} className="text-4xl" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-display font-bold mb-2">Security Status: Excellent</h2>
                      <p className="text-green-100 text-lg">All security features are active. Your site is well protected.</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center md:items-end">
                    <div className="text-6xl font-bold mb-2 text-white drop-shadow-lg">A+</div>
                    <div className="text-sm text-green-100 font-semibold">Security Score</div>
                  </div>
                </div>
              </div>

            {/* Security Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faShieldHalved} className="text-white text-xl" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">1,247</div>
                <div className="text-sm text-slate-600">Threats Blocked</div>
                <div className="text-xs text-slate-500 mt-1">Last 30 days</div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faBug} className="text-white text-xl" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">120</div>
                <div className="text-sm text-slate-600">Malware Scans</div>
                <div className="text-xs text-slate-500 mt-1">All clean</div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faLock} className="text-white text-xl" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">Valid</div>
                <div className="text-sm text-slate-600">SSL Certificate</div>
                <div className="text-xs text-slate-500 mt-1">89 days remaining</div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-white text-xl" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">0</div>
                <div className="text-sm text-slate-600">Vulnerabilities</div>
                <div className="text-xs text-slate-500 mt-1">No issues found</div>
              </div>
            </div>

            {/* Security Features Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* SSL Certificate Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-6 shadow-lg">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <FontAwesomeIcon icon={faLock} className="text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-slate-900">SSL/TLS Certificate</h2>
                    </div>
                    <p className="text-sm text-slate-600">Automatic HTTPS encryption</p>
                  </div>
                  <button
                    onClick={() => setSslEnabled(!sslEnabled)}
                    className="flex items-center gap-2"
                  >
                    <span className="text-sm font-medium text-slate-700">
                      {sslEnabled ? 'Enabled' : 'Disabled'}
                    </span>
                    <FontAwesomeIcon
                      icon={sslEnabled ? faToggleOn : faToggleOff}
                      className={`text-3xl ${sslEnabled ? 'text-green-600' : 'text-slate-400'}`}
                    />
                  </button>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-900">Certificate Status</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold">Active</span>
                    </div>
                    <div className="text-xs text-slate-600">Valid & Auto-renewing</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-slate-50 rounded-xl">
                      <div className="text-xs text-slate-600 mb-1">Valid Until</div>
                      <div className="text-sm font-bold text-slate-900">March 15, 2025</div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl">
                      <div className="text-xs text-slate-600 mb-1">Encryption</div>
                      <div className="text-sm font-bold text-slate-900">TLS 1.3</div>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 flex items-start gap-2">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-blue-600 mt-0.5" />
                  <div className="text-xs text-slate-700">Certificates auto-renew 30 days before expiration</div>
                </div>
              </div>

              {/* Firewall Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-6 shadow-lg">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center">
                        <FontAwesomeIcon icon={faFireFlameCurved} className="text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-slate-900">Web Firewall</h2>
                    </div>
                    <p className="text-sm text-slate-600">Protection against attacks</p>
                  </div>
                  <button
                    onClick={() => setFirewallEnabled(!firewallEnabled)}
                    className="flex items-center gap-2"
                  >
                    <span className="text-sm font-medium text-slate-700">
                      {firewallEnabled ? 'Enabled' : 'Disabled'}
                    </span>
                    <FontAwesomeIcon
                      icon={firewallEnabled ? faToggleOn : faToggleOff}
                      className={`text-3xl ${firewallEnabled ? 'text-blue-600' : 'text-slate-400'}`}
                    />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 bg-slate-50 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-slate-600">SQL Injection</span>
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 text-sm" />
                    </div>
                    <div className="text-sm font-bold text-slate-900">124 blocked</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-slate-600">XSS Protection</span>
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 text-sm" />
                    </div>
                    <div className="text-sm font-bold text-slate-900">89 blocked</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-slate-600">CSRF</span>
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 text-sm" />
                    </div>
                    <div className="text-sm font-bold text-slate-900">23 blocked</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-slate-600">Bad Bots</span>
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 text-sm" />
                    </div>
                    <div className="text-sm font-bold text-slate-900">1,011 blocked</div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-xs font-medium hover:bg-slate-50 transition-colors">
                    Configure Rules
                  </button>
                  <button className="flex-1 px-3 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-xs font-medium hover:bg-slate-50 transition-colors">
                    View Blocked IPs
                  </button>
                </div>
              </div>
            </div>

            {/* DDoS & Malware Protection Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* DDoS Protection */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-6 shadow-lg">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                        <FontAwesomeIcon icon={faShieldHalved} className="text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-slate-900">DDoS Protection</h2>
                    </div>
                    <p className="text-sm text-slate-600">Multi-layer attack mitigation</p>
                  </div>
                  <button
                    onClick={() => setDdosProtection(!ddosProtection)}
                    className="flex items-center gap-2"
                  >
                    <span className="text-sm font-medium text-slate-700">
                      {ddosProtection ? 'Enabled' : 'Disabled'}
                    </span>
                    <FontAwesomeIcon
                      icon={ddosProtection ? faToggleOn : faToggleOff}
                      className={`text-3xl ${ddosProtection ? 'text-blue-600' : 'text-slate-400'}`}
                    />
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-900">Network Layer</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-bold">Layer 3/4</span>
                    </div>
                    <div className="text-xs text-slate-600">Protected against volumetric attacks</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-900">Application Layer</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-lg text-xs font-bold">Layer 7</span>
                    </div>
                    <div className="text-xs text-slate-600">Protected against HTTP floods</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-900">Rate Limiting</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold">Active</span>
                    </div>
                    <div className="text-xs text-slate-600">Automatic traffic throttling</div>
                  </div>
                </div>
              </div>

              {/* Malware Scanner */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-6 shadow-lg">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                        <FontAwesomeIcon icon={faBug} className="text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-slate-900">Malware Scanner</h2>
                    </div>
                    <p className="text-sm text-slate-600">Automated threat detection</p>
                  </div>
                  <button
                    onClick={() => setAutoScanEnabled(!autoScanEnabled)}
                    className="flex items-center gap-2"
                  >
                    <span className="text-sm font-medium text-slate-700">
                      {autoScanEnabled ? 'Auto' : 'Manual'}
                    </span>
                    <FontAwesomeIcon
                      icon={autoScanEnabled ? faToggleOn : faToggleOff}
                      className={`text-3xl ${autoScanEnabled ? 'text-green-600' : 'text-slate-400'}`}
                    />
                  </button>
                </div>

                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <FontAwesomeIcon icon={faCircleCheck} className="text-green-600 text-xl" />
                      <div>
                        <div className="text-sm font-bold text-green-900">Last Scan: Clean</div>
                        <div className="text-xs text-green-700">No threats detected</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-green-700 font-semibold">2 hours ago</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 bg-slate-50 rounded-xl text-center">
                    <div className="text-2xl font-bold text-slate-900">120</div>
                    <div className="text-xs text-slate-600 mt-1">Total Scans</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl text-center">
                    <div className="text-2xl font-bold text-green-600">0</div>
                    <div className="text-xs text-slate-600 mt-1">Threats Found</div>
                  </div>
                </div>

                <button
                  onClick={handleScan}
                  disabled={isScanning}
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl text-sm font-semibold hover:shadow-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <FontAwesomeIcon icon={isScanning ? faSpinner : faBug} className={isScanning ? 'animate-spin' : ''} />
                  {isScanning ? 'Scanning...' : 'Scan Now'}
                </button>
              </div>
            </div>

            {/* Security Logs */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-lg mb-6">
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center">
                      <FontAwesomeIcon icon={faClock} className="text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">Recent Security Events</h2>
                  </div>
                  <button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors">
                    View All Logs
                  </button>
                </div>
              </div>

              <div className="divide-y divide-slate-200">
                {/* Blocked Attack */}
                <div className="p-5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faBan} className="text-red-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded">BLOCKED</span>
                        <h3 className="font-semibold text-slate-900">SQL Injection Attempt Blocked</h3>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">Malicious SQL query detected and blocked by WAF</p>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faClock} />
                          <span>2 hours ago</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faLocationDot} />
                          <span>IP: 192.168.1.100</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faGlobe} />
                          <span>United States</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security Scan */}
                <div className="p-5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">SCAN</span>
                        <h3 className="font-semibold text-slate-900">Security Scan Completed</h3>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">Automatic daily security scan found no vulnerabilities</p>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faClock} />
                          <span>3 hours ago</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faFileShield} />
                          <span>1,247 files scanned</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SSL Renewal */}
                <div className="p-5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faLock} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">SSL</span>
                        <h3 className="font-semibold text-slate-900">SSL Certificate Auto-Renewed</h3>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">Certificate successfully renewed for mybusiness.com</p>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faClock} />
                          <span>1 day ago</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faCalendarDays} />
                          <span>Valid until Mar 15, 2025</span>
                        </span>
                      </div>
                    </div>
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
