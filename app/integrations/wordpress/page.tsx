'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faDownload,
  faArrowRight,
  faRotate,
  faCopy,
  faPlug,
  faCheck,
  faCheckCircle,
  faSync,
  faGear,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';
import Sidebar from '@/components/layout/Sidebar';
import TopHeader from '@/components/layout/TopHeader';
import MobileMenu from '@/components/layout/MobileMenu';
import { mockSites } from '@/lib/mockData';

export default function WordPressConnectPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);
  const [showApiSecret, setShowApiSecret] = useState(false);

  const connectedWordPressSites = mockSites.filter(site => site.siteType === 'WordPress');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopHeader
          title="WordPress Connect"
          onMenuToggle={() => setIsMobileMenuOpen(true)}
          showSiteSwitcher={false}
        />

        <main className="flex-1 overflow-y-auto bg-slate-50 p-4 md:p-8">
          {/* Back Button */}
          <div className="mb-6">
            <Link
              href="/integrations"
              className="inline-flex items-center text-stone-600 hover:text-stone-900 transition"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              <span className="text-sm font-medium">Back to Integrations</span>
            </Link>
          </div>

          {/* Hero Section */}
          <section className="mb-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-card p-8 md:p-12 text-white shadow-saas-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -ml-32 -mb-32"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-20 h-20 bg-white rounded-card flex items-center justify-center">
                    <FontAwesomeIcon icon={faWordpress} className="text-blue-600 text-4xl" />
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">WordPress Connect</h1>
                    <p className="text-blue-100 text-lg">Seamless WordPress Integration for PMC Engine</p>
                  </div>
                </div>
                <p className="text-white/90 text-lg max-w-3xl">
                  Connect your WordPress installation directly to PMC Engine for one-click deployments, automatic updates, plugin management, and real-time synchronization. Manage all your WordPress sites from one powerful dashboard.
                </p>
              </div>
            </div>
          </section>

          {/* WordPress Features */}
          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-stone-900 mb-6">WordPress Integration Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-stone-200 rounded-card p-6 shadow-saas">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faPlug} className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-lg font-display font-bold text-stone-900 mb-2">One-Click Deploy</h3>
                <p className="text-sm text-stone-600">Deploy WordPress sites instantly with a single click.</p>
              </div>

              <div className="bg-white border border-stone-200 rounded-card p-6 shadow-saas">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faSync} className="text-green-600 text-xl" />
                </div>
                <h3 className="text-lg font-display font-bold text-stone-900 mb-2">Auto Sync</h3>
                <p className="text-sm text-stone-600">Real-time synchronization of content and settings.</p>
              </div>

              <div className="bg-white border border-stone-200 rounded-card p-6 shadow-saas">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faGear} className="text-purple-600 text-xl" />
                </div>
                <h3 className="text-lg font-display font-bold text-stone-900 mb-2">Plugin Management</h3>
                <p className="text-sm text-stone-600">Install and update plugins remotely from PMC Engine.</p>
              </div>

              <div className="bg-white border border-stone-200 rounded-card p-6 shadow-saas">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-orange-600 text-xl" />
                </div>
                <h3 className="text-lg font-display font-bold text-stone-900 mb-2">Security Monitoring</h3>
                <p className="text-sm text-stone-600">24/7 security scanning and threat detection.</p>
              </div>
            </div>
          </section>

          {/* WordPress Setup Guide */}
          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-stone-900 mb-6">WordPress Integration Setup Guide</h2>
            <div className="bg-white border border-stone-200 rounded-card shadow-saas overflow-hidden">
              <div className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-50 rounded-card flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faWordpress} className="text-blue-600 text-3xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-stone-900 mb-2">Connect Your WordPress Site</h3>
                    <p className="text-stone-600">Follow these steps to securely connect your WordPress installation to PMC Engine for seamless management and deployment.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex items-start space-x-4 p-6 bg-stone-50 rounded-card border border-stone-200">
                    <div className="w-10 h-10 bg-pmc-red rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-display font-bold">1</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-display font-bold text-stone-900 mb-2">Install PMC Engine Plugin</h4>
                      <p className="text-sm text-stone-600 mb-4">Download and install the PMC Engine WordPress plugin from your WordPress admin dashboard or upload it manually.</p>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                        <button className="px-4 py-2 bg-pmc-red hover:bg-pmc-red-dark text-white text-sm font-medium rounded-lg transition">
                          <FontAwesomeIcon icon={faDownload} className="mr-2" />
                          Download Plugin
                        </button>
                        <a href="#" className="text-sm text-pmc-red hover:text-pmc-red-dark font-medium transition">
                          View Installation Guide
                          <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start space-x-4 p-6 bg-stone-50 rounded-card border border-stone-200">
                    <div className="w-10 h-10 bg-pmc-red rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-display font-bold">2</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-display font-bold text-stone-900 mb-2">Generate API Credentials</h4>
                      <p className="text-sm text-stone-600 mb-4">Create secure API credentials that will allow PMC Engine to communicate with your WordPress site.</p>
                      <div className="bg-white border border-stone-200 rounded-lg p-4 mb-4">
                        <div className="space-y-3">
                          <div>
                            <label className="text-xs font-semibold text-stone-700 mb-1 block">API Key</label>
                            <div className="flex items-center space-x-2">
                              <input
                                type={showApiKey ? 'text' : 'password'}
                                value="pmc_live_xxxxxxxxxxxxxxxxxxxxx"
                                readOnly
                                className="flex-1 px-3 py-2 bg-stone-50 border border-stone-200 rounded text-sm text-stone-900 font-mono"
                              />
                              <button
                                onClick={() => copyToClipboard('pmc_live_xxxxxxxxxxxxxxxxxxxxx')}
                                className="px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-medium rounded transition"
                                aria-label="Copy API key"
                              >
                                <FontAwesomeIcon icon={faCopy} />
                              </button>
                            </div>
                          </div>
                          <div>
                            <label className="text-xs font-semibold text-stone-700 mb-1 block">API Secret</label>
                            <div className="flex items-center space-x-2">
                              <input
                                type={showApiSecret ? 'text' : 'password'}
                                value="sk_live_xxxxxxxxxxxxxxxxxxxxx"
                                readOnly
                                className="flex-1 px-3 py-2 bg-stone-50 border border-stone-200 rounded text-sm text-stone-900 font-mono"
                              />
                              <button
                                onClick={() => copyToClipboard('sk_live_xxxxxxxxxxxxxxxxxxxxx')}
                                className="px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-medium rounded transition"
                                aria-label="Copy API secret"
                              >
                                <FontAwesomeIcon icon={faCopy} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-medium rounded-lg transition">
                        <FontAwesomeIcon icon={faRotate} className="mr-2" />
                        Regenerate Credentials
                      </button>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start space-x-4 p-6 bg-stone-50 rounded-card border border-stone-200">
                    <div className="w-10 h-10 bg-pmc-red rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-display font-bold">3</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-display font-bold text-stone-900 mb-2">Configure Plugin Settings</h4>
                      <p className="text-sm text-stone-600 mb-4">Enter your PMC Engine credentials in the WordPress plugin settings and configure connection options.</p>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center space-x-2 text-sm text-stone-600">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
                          <span>Enable automatic synchronization</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-stone-600">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
                          <span>Configure backup schedule</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-stone-600">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
                          <span>Set deployment preferences</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-start space-x-4 p-6 bg-stone-50 rounded-card border border-stone-200">
                    <div className="w-10 h-10 bg-pmc-red rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-display font-bold">4</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-display font-bold text-stone-900 mb-2">Test Connection</h4>
                      <p className="text-sm text-stone-600 mb-4">Verify that PMC Engine can successfully communicate with your WordPress installation.</p>
                      <button className="px-6 py-3 bg-pmc-red hover:bg-pmc-red-dark text-white font-medium rounded-card transition shadow-saas">
                        <FontAwesomeIcon icon={faPlug} className="mr-2" />
                        Test Connection
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Connected WordPress Sites */}
          {connectedWordPressSites.length > 0 && (
            <section className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-display font-bold text-stone-900">Connected WordPress Sites</h2>
                <span className="text-sm text-stone-600">{connectedWordPressSites.length} site{connectedWordPressSites.length !== 1 ? 's' : ''} connected</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {connectedWordPressSites.map((site) => (
                  <div key={site.id} className="bg-white border border-stone-200 rounded-card shadow-saas overflow-hidden hover:shadow-saas-lg transition">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                            <FontAwesomeIcon icon={faWordpress} className="text-blue-600 text-2xl" />
                          </div>
                          <div>
                            <h3 className="text-lg font-display font-bold text-stone-900">{site.name}</h3>
                            <p className="text-xs text-stone-500">{site.domain}</p>
                          </div>
                        </div>
                        <span className={`px-2.5 py-1 text-xs font-semibold rounded-full flex items-center ${
                          site.status === 'live'
                            ? 'bg-green-50 text-green-700'
                            : site.status === 'deploying'
                            ? 'bg-yellow-50 text-yellow-700'
                            : 'bg-stone-100 text-stone-700'
                        }`}>
                          <FontAwesomeIcon
                            icon={faCircle}
                            className={`mr-1.5 text-xs ${
                              site.status === 'live'
                                ? 'text-green-500'
                                : site.status === 'deploying'
                                ? 'text-yellow-500'
                                : 'text-stone-400'
                            }`}
                          />
                          {site.status.charAt(0).toUpperCase() + site.status.slice(1)}
                        </span>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-stone-600">Plan</span>
                          <span className="text-stone-900 font-medium">{site.plan}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-stone-600">Last Updated</span>
                          <span className="text-stone-900 font-medium">{site.lastUpdated}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-stone-600">Visits</span>
                          <span className="text-stone-900 font-medium">{site.visits.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Link href={`/sites/${site.id}`} className="flex-1">
                          <button className="w-full px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-medium rounded-lg transition">
                            <FontAwesomeIcon icon={faGear} className="mr-2" />
                            Manage
                          </button>
                        </Link>
                        <button className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-medium rounded-lg transition" aria-label="Sync now">
                          <FontAwesomeIcon icon={faSync} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Integration Benefits */}
          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-stone-900 mb-6">Why Connect WordPress?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-stone-200 rounded-card p-6 shadow-saas">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-stone-900 mb-2">Centralized Management</h3>
                    <p className="text-sm text-stone-600">Manage all your WordPress sites from a single, powerful dashboard without logging into each site individually.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-stone-200 rounded-card p-6 shadow-saas">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-stone-900 mb-2">Automated Updates</h3>
                    <p className="text-sm text-stone-600">Keep WordPress core, themes, and plugins up to date automatically with scheduled update management.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-stone-200 rounded-card p-6 shadow-saas">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-stone-900 mb-2">Enhanced Security</h3>
                    <p className="text-sm text-stone-600">Real-time security monitoring, malware scanning, and automatic threat mitigation to keep your sites safe.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-stone-200 rounded-card p-6 shadow-saas">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} className="text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-stone-900 mb-2">Performance Optimization</h3>
                    <p className="text-sm text-stone-600">Automatic caching, CDN integration, and performance monitoring to ensure lightning-fast page loads.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-stone-200 rounded-card p-6 shadow-saas">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-stone-900 mb-2">Automated Backups</h3>
                    <p className="text-sm text-stone-600">Daily automated backups with one-click restore functionality to protect your content and data.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-stone-200 rounded-card p-6 shadow-saas">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faCheck} className="text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-stone-900 mb-2">Content Migration</h3>
                    <p className="text-sm text-stone-600">Seamlessly migrate content between WordPress sites or import from other platforms with ease.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Need Help Section */}
          <section className="mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-card p-8">
              <div className="text-center max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={faWordpress} className="text-white text-2xl" />
                </div>
                <h2 className="text-2xl font-display font-bold text-stone-900 mb-3">Need Help Connecting WordPress?</h2>
                <p className="text-stone-700 mb-6">
                  Our support team is here to help you get your WordPress site connected. Check out our documentation or contact support for assistance.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <Link href="/support">
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-card transition shadow-saas">
                      Contact Support
                    </button>
                  </Link>
                  <a href="#" className="px-6 py-3 bg-white hover:bg-stone-50 text-blue-600 font-medium rounded-card transition border border-blue-200">
                    View Documentation
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
