'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlug,
  faCheckCircle,
  faBriefcase,
  faChartLine,
  faClockRotateLeft,
  faPlus,
  faSearch,
  faGear,
  faSync,
  faArrowUpRightFromSquare,
  faBolt,
  faShieldHalved,
  faLink,
  faCheck,
  faDownload,
  faArrowRight,
  faRotate,
  faCopy,
  faBook,
  faKey,
  faCloud,
  faList,
  faLightbulb,
  faPaperPlane,
  faCode,
  faBookOpen,
  faCirclePlay,
  faUsers,
  faPuzzlePiece,
  faEnvelope,
  faFileLines,
  faChartSimple,
  faTable,
} from '@fortawesome/free-solid-svg-icons';
import {
  faWordpress,
  faGoogle,
  faCloudflare,
  faMailchimp,
  faStripe,
  faSlack,
  faGithub,
  faHubspot,
  faShopify,
  faIntercom,
  faSalesforce,
  faDiscord,
  faTrello,
} from '@fortawesome/free-brands-svg-icons';
import Sidebar from '@/components/layout/Sidebar';
import TopHeader from '@/components/layout/TopHeader';
import MobileMenu from '@/components/layout/MobileMenu';

export default function IntegrationsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  // Define integrations with category metadata
  const integrations = [
    {
      name: 'Mailchimp',
      slug: 'mailchimp',
      category: 'Marketing',
      categoryType: 'business',
      icon: faMailchimp,
      iconBg: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      description: 'Email marketing and automation platform for subscriber management.',
    },
    {
      name: 'Stripe',
      slug: 'stripe',
      category: 'Payments',
      categoryType: 'business',
      icon: faStripe,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      description: 'Accept payments, manage subscriptions, and handle transactions securely.',
    },
    {
      name: 'Slack',
      slug: 'slack',
      category: 'Communication',
      categoryType: 'business',
      icon: faSlack,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      description: 'Get deployment notifications and site alerts directly in Slack channels.',
    },
    {
      name: 'Zapier',
      slug: 'zapier',
      category: 'Automation',
      categoryType: 'business',
      icon: faBolt,
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-600',
      description: 'Automate workflows by connecting PMC Engine with 5000+ apps.',
    },
    {
      name: 'GitHub',
      slug: 'github',
      category: 'Development',
      categoryType: 'business',
      icon: faGithub,
      iconBg: 'bg-stone-900',
      iconColor: 'text-white',
      description: 'Deploy from GitHub repositories with automatic CI/CD workflows.',
    },
    {
      name: 'HubSpot',
      slug: 'hubspot',
      category: 'CRM',
      categoryType: 'business',
      icon: faHubspot,
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-600',
      description: 'Sync contacts, track leads, and manage customer relationships.',
    },
    {
      name: 'Shopify',
      slug: 'shopify',
      category: 'E-Commerce',
      categoryType: 'business',
      icon: faShopify,
      iconBg: 'bg-green-50',
      iconColor: 'text-green-600',
      description: 'Connect your Shopify store for seamless product management.',
    },
    {
      name: 'Intercom',
      slug: 'intercom',
      category: 'Support',
      categoryType: 'business',
      icon: faIntercom,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      description: 'Add live chat and customer messaging to your sites.',
    },
    {
      name: 'Airtable',
      slug: 'airtable',
      category: 'Database',
      categoryType: 'business',
      icon: faTable,
      iconBg: 'bg-red-50',
      iconColor: 'text-red-600',
      description: 'Use Airtable as a flexible database for your content management.',
    },
    {
      name: 'SendGrid',
      slug: 'sendgrid',
      category: 'Email',
      categoryType: 'business',
      icon: faEnvelope,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      description: 'Reliable email delivery service for transactional and marketing emails.',
    },
    {
      name: 'Notion',
      slug: 'notion',
      category: 'Productivity',
      categoryType: 'business',
      icon: faFileLines,
      iconBg: 'bg-stone-900',
      iconColor: 'text-white',
      description: 'Sync content from Notion databases to your website automatically.',
    },
    {
      name: 'Hotjar',
      slug: 'hotjar',
      category: 'Analytics',
      categoryType: 'analytics',
      icon: faChartSimple,
      iconBg: 'bg-red-50',
      iconColor: 'text-red-600',
      description: 'Understand user behavior with heatmaps, recordings, and surveys.',
    },
  ];

  // Filter integrations based on active tab
  const getFilteredIntegrations = () => {
    if (activeTab === 'business') {
      return integrations.filter(int => int.categoryType === 'business');
    }
    if (activeTab === 'analytics') {
      return integrations.filter(int => int.categoryType === 'analytics');
    }
    // For 'all', 'connected', 'wordpress' tabs, show all integrations
    return integrations;
  };

  const filteredIntegrations = getFilteredIntegrations();

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopHeader
          title="Integrations & Connections"
          onMenuToggle={() => setIsMobileMenuOpen(true)}
          showSiteSwitcher={false}
        />

        <main className="flex-1 overflow-y-auto bg-slate-50 p-4 md:p-8">
          {/* Hero Section */}
          <section className="mb-8">
            <div className="flex flex-col md:flex-row items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-display font-bold text-stone-900 mb-2">
                  Integrations & Connections
                </h1>
                <p className="text-stone-600">
                  Connect WordPress, third-party tools, and services to enhance your sites.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <button className="flex items-center px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-medium rounded-lg transition">
                  <FontAwesomeIcon icon={faClockRotateLeft} className="mr-2" />
                  <span>Connection History</span>
                </button>
                <button className="flex items-center px-6 py-3 bg-pmc-red hover:bg-pmc-red-dark text-white font-medium rounded-card shadow-saas transition">
                  <FontAwesomeIcon icon={faPlus} className="mr-2" />
                  <span>Add Integration</span>
                </button>
              </div>
            </div>
          </section>

          {/* Tab Navigation */}
          <section className="mb-8">
            <div className="flex items-center space-x-2 bg-white border border-stone-200 rounded-lg p-1 inline-flex overflow-x-auto">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 text-sm font-medium rounded transition whitespace-nowrap ${
                  activeTab === 'all'
                    ? 'bg-pmc-red text-white'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <FontAwesomeIcon icon={faPlug} className="mr-2" />
                All Integrations
              </button>
              <button
                onClick={() => setActiveTab('connected')}
                className={`px-4 py-2 text-sm font-medium rounded transition whitespace-nowrap ${
                  activeTab === 'connected'
                    ? 'bg-pmc-red text-white'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
                Connected
              </button>
              <button
                onClick={() => setActiveTab('wordpress')}
                className={`px-4 py-2 text-sm font-medium rounded transition whitespace-nowrap ${
                  activeTab === 'wordpress'
                    ? 'bg-pmc-red text-white'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <FontAwesomeIcon icon={faWordpress} className="mr-2" />
                WordPress
              </button>
              <button
                onClick={() => setActiveTab('business')}
                className={`px-4 py-2 text-sm font-medium rounded transition whitespace-nowrap ${
                  activeTab === 'business'
                    ? 'bg-pmc-red text-white'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                Business Tools
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-4 py-2 text-sm font-medium rounded transition whitespace-nowrap ${
                  activeTab === 'analytics'
                    ? 'bg-pmc-red text-white'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                Analytics
              </button>
            </div>
          </section>

          {/* WordPress Featured Section */}
          {(activeTab === 'all' || activeTab === 'wordpress') && (
          <section className="mb-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-card p-8 text-white shadow-saas-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -ml-32 -mb-32"></div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-16 h-16 bg-white rounded-card flex items-center justify-center">
                      <FontAwesomeIcon icon={faWordpress} className="text-blue-600 text-3xl" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-display font-bold">WordPress Connect</h2>
                      <p className="text-blue-100 text-sm">Seamless WordPress Integration</p>
                    </div>
                  </div>
                  <p className="text-white/90 mb-6 text-lg">
                    Connect your WordPress installation directly to PMC Engine for one-click deployments, automatic updates, plugin management, and real-time synchronization.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="flex items-center space-x-2 px-3 py-1.5 bg-white/10 rounded-lg backdrop-blur-sm">
                      <FontAwesomeIcon icon={faBolt} className="text-yellow-300" />
                      <span className="text-sm">One-Click Deploy</span>
                    </div>
                    <div className="flex items-center space-x-2 px-3 py-1.5 bg-white/10 rounded-lg backdrop-blur-sm">
                      <FontAwesomeIcon icon={faSync} className="text-green-300" />
                      <span className="text-sm">Auto Sync</span>
                    </div>
                    <div className="flex items-center space-x-2 px-3 py-1.5 bg-white/10 rounded-lg backdrop-blur-sm">
                      <FontAwesomeIcon icon={faShieldHalved} className="text-blue-300" />
                      <span className="text-sm">Secure Connection</span>
                    </div>
                  </div>
                  <Link href="/integrations/wordpress">
                    <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-card hover:bg-blue-50 transition shadow-saas">
                      <FontAwesomeIcon icon={faLink} className="mr-2" />
                      Connect WordPress Now
                    </button>
                  </Link>
                </div>
                <div className="hidden lg:block">
                  <div className="bg-white/10 backdrop-blur-sm rounded-card p-6 border border-white/20">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FontAwesomeIcon icon={faCheck} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold">Plugin Management</div>
                          <div className="text-xs text-blue-100">Install & update plugins remotely</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FontAwesomeIcon icon={faCheck} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold">Database Sync</div>
                          <div className="text-xs text-blue-100">Real-time database synchronization</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FontAwesomeIcon icon={faCheck} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold">Content Migration</div>
                          <div className="text-xs text-blue-100">Migrate content seamlessly</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FontAwesomeIcon icon={faCheck} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold">Security Monitoring</div>
                          <div className="text-xs text-blue-100">24/7 security scanning</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          )}

          {/* Connected Integrations */}
          {(activeTab === 'all' || activeTab === 'connected') && (
          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-display font-bold text-stone-900">Connected Integrations</h2>
              <span className="text-sm text-stone-600">3 active connections</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* WordPress Connection */}
              <div className="bg-white border border-stone-200 rounded-card shadow-saas overflow-hidden hover:shadow-saas-lg transition">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                        <FontAwesomeIcon icon={faWordpress} className="text-blue-600 text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-bold text-stone-900">WordPress</h3>
                        <p className="text-xs text-stone-500">CMS Platform</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span>
                      Connected
                    </span>
                  </div>
                  <div className="mb-4 pb-4 border-b border-stone-200">
                    <div className="text-sm text-stone-600 mb-2">Connected to:</div>
                    <div className="text-sm font-semibold text-stone-900">Sweet Delights Bakery</div>
                    <div className="text-xs text-stone-500">sweetdelights.com</div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-600">Last Sync</span>
                      <span className="text-stone-900 font-medium">2 hours ago</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-600">Status</span>
                      <span className="text-green-600 font-medium">Healthy</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-600">Version</span>
                      <span className="text-stone-900 font-medium">6.4.2</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="flex-1 px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-medium rounded-lg transition">
                      <FontAwesomeIcon icon={faGear} className="mr-2" />
                      Manage
                    </button>
                    <button className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-medium rounded-lg transition" aria-label="Sync now">
                      <FontAwesomeIcon icon={faSync} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Google Analytics */}
              <div className="bg-white border border-stone-200 rounded-card shadow-saas overflow-hidden hover:shadow-saas-lg transition">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
                        <FontAwesomeIcon icon={faGoogle} className="text-orange-600 text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-bold text-stone-900">Google Analytics</h3>
                        <p className="text-xs text-stone-500">Analytics</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span>
                      Connected
                    </span>
                  </div>
                  <div className="mb-4 pb-4 border-b border-stone-200">
                    <div className="text-sm text-stone-600 mb-2">Connected to:</div>
                    <div className="text-sm font-semibold text-stone-900">TechStart Solutions</div>
                    <div className="text-xs text-stone-500">techstart.io</div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-600">Tracking ID</span>
                      <span className="text-stone-900 font-medium">G-XXXXXXXXX</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-600">Status</span>
                      <span className="text-green-600 font-medium">Active</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-600">Data Collection</span>
                      <span className="text-stone-900 font-medium">Enabled</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="flex-1 px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-medium rounded-lg transition">
                      <FontAwesomeIcon icon={faGear} className="mr-2" />
                      Manage
                    </button>
                    <button className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-medium rounded-lg transition" aria-label="View reports">
                      <FontAwesomeIcon icon={faChartLine} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Cloudflare */}
              <div className="bg-white border border-stone-200 rounded-card shadow-saas overflow-hidden hover:shadow-saas-lg transition">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
                        <FontAwesomeIcon icon={faCloudflare} className="text-orange-600 text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-bold text-stone-900">Cloudflare</h3>
                        <p className="text-xs text-stone-500">CDN & Security</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span>
                      Connected
                    </span>
                  </div>
                  <div className="mb-4 pb-4 border-b border-stone-200">
                    <div className="text-sm text-stone-600 mb-2">Connected to:</div>
                    <div className="text-sm font-semibold text-stone-900">All Sites</div>
                    <div className="text-xs text-stone-500">Global Protection</div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-600">CDN Status</span>
                      <span className="text-green-600 font-medium">Active</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-600">SSL/TLS</span>
                      <span className="text-stone-900 font-medium">Full</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-600">Firewall</span>
                      <span className="text-green-600 font-medium">Enabled</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="flex-1 px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-medium rounded-lg transition">
                      <FontAwesomeIcon icon={faGear} className="mr-2" />
                      Manage
                    </button>
                    <button className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-medium rounded-lg transition" aria-label="View dashboard">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          )}

          {/* Available Integrations */}
          {activeTab !== 'connected' && (
          <section className="mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
              <h2 className="text-2xl font-display font-bold text-stone-900">Available Integrations</h2>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm" />
                  <input type="text" placeholder="Search integrations..." className="pl-9 pr-4 py-2 bg-white border border-stone-200 rounded-lg text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent transition w-64" />
                </div>
                <select className="px-4 py-2 bg-white border border-stone-200 rounded-lg text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent transition">
                  <option>All Categories</option>
                  <option>CMS Platforms</option>
                  <option>Analytics</option>
                  <option>Marketing</option>
                  <option>E-Commerce</option>
                  <option>Security</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredIntegrations.map((integration) => (
                <Link
                  key={integration.name}
                  href={`/integrations/${integration.slug}`}
                  className="bg-white border border-stone-200 rounded-card p-6 shadow-saas hover:shadow-saas-lg hover:border-slate-300 transition-all group cursor-pointer block"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 ${integration.iconBg} rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform`}>
                      <FontAwesomeIcon icon={integration.icon} className={`${integration.iconColor} text-2xl`} />
                    </div>
                    <span className="px-2 py-1 bg-stone-100 text-stone-600 text-xs font-medium rounded">{integration.category}</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-stone-900 mb-2 group-hover:text-pmc-red transition-colors">{integration.name}</h3>
                  <p className="text-sm text-stone-600 mb-4">{integration.description}</p>
                  <div className="w-full px-4 py-2 bg-stone-100 group-hover:bg-pmc-red group-hover:text-white text-stone-700 text-sm font-medium rounded-lg transition-all text-center">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-2" />
                    View Details
                  </div>
                </Link>
              ))}
            </div>
          </section>
          )}

          {/* Integration Benefits */}
          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-stone-900 mb-6">Integration Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-stone-200 rounded-card p-6 shadow-saas">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faBolt} className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-lg font-display font-bold text-stone-900 mb-2">Automated Workflows</h3>
                <p className="text-sm text-stone-600">Streamline repetitive tasks with automated workflows between your sites and favorite tools.</p>
              </div>

              <div className="bg-white border border-stone-200 rounded-card p-6 shadow-saas">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faSync} className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-lg font-display font-bold text-stone-900 mb-2">Real-Time Sync</h3>
                <p className="text-sm text-stone-600">Keep your data synchronized across all platforms in real-time with instant updates.</p>
              </div>

              <div className="bg-white border border-stone-200 rounded-card p-6 shadow-saas">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faShieldHalved} className="text-purple-600 text-2xl" />
                </div>
                <h3 className="text-lg font-display font-bold text-stone-900 mb-2">Secure Connections</h3>
                <p className="text-sm text-stone-600">All integrations use encrypted connections and OAuth 2.0 for maximum security.</p>
              </div>

              <div className="bg-white border border-stone-200 rounded-card p-6 shadow-saas">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faChartLine} className="text-orange-600 text-2xl" />
                </div>
                <h3 className="text-lg font-display font-bold text-stone-900 mb-2">Enhanced Analytics</h3>
                <p className="text-sm text-stone-600">Gain deeper insights by combining data from multiple sources in one dashboard.</p>
              </div>

              <div className="bg-white border border-stone-200 rounded-card p-6 shadow-saas">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faClockRotateLeft} className="text-red-600 text-2xl" />
                </div>
                <h3 className="text-lg font-display font-bold text-stone-900 mb-2">Time Savings</h3>
                <p className="text-sm text-stone-600">Reduce manual work by up to 80% with automated data transfer and updates.</p>
              </div>

              <div className="bg-white border border-stone-200 rounded-card p-6 shadow-saas">
                <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faPuzzlePiece} className="text-teal-600 text-2xl" />
                </div>
                <h3 className="text-lg font-display font-bold text-stone-900 mb-2">Extensibility</h3>
                <p className="text-sm text-stone-600">Build custom integrations using our REST API and webhook system.</p>
              </div>
            </div>
          </section>

          {/* Custom Integration Request */}
          <section className="mb-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-card p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={faLightbulb} className="text-white text-xl" />
                    </div>
                    <h2 className="text-2xl font-display font-bold text-stone-900">Need a Custom Integration?</h2>
                  </div>
                  <p className="text-stone-700 mb-6">Don't see the integration you need? Request a custom integration or build your own using our comprehensive REST API and webhook system.</p>
                  <div className="flex items-center space-x-3">
                    <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-card transition shadow-saas">
                      <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                      Request Integration
                    </button>
                    <button className="px-6 py-3 bg-white hover:bg-stone-50 text-purple-600 font-medium rounded-card transition border border-purple-200">
                      <FontAwesomeIcon icon={faCode} className="mr-2" />
                      View API Docs
                    </button>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="bg-white/80 backdrop-blur-sm rounded-card p-6 border border-purple-200">
                    <h3 className="text-lg font-display font-bold text-stone-900 mb-4">Popular Requests</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <FontAwesomeIcon icon={faSalesforce} className="text-purple-600" />
                          <span className="text-sm font-medium text-stone-900">Salesforce CRM</span>
                        </div>
                        <span className="text-xs text-stone-600">47 votes</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <FontAwesomeIcon icon={faDiscord} className="text-purple-600" />
                          <span className="text-sm font-medium text-stone-900">Discord Webhooks</span>
                        </div>
                        <span className="text-xs text-stone-600">38 votes</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <FontAwesomeIcon icon={faTrello} className="text-purple-600" />
                          <span className="text-sm font-medium text-stone-900">Trello Boards</span>
                        </div>
                        <span className="text-xs text-stone-600">29 votes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* API & Webhooks */}
          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-stone-900 mb-6">API & Webhooks</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white border border-stone-200 rounded-card p-6 shadow-saas">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faCode} className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-stone-900 mb-1">REST API Access</h3>
                    <p className="text-sm text-stone-600">Build custom integrations using our comprehensive REST API.</p>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-stone-600">
                    <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                    <span>Full CRUD operations</span>
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                    <span>Rate limiting: 1000 requests/hour</span>
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                    <span>OAuth 2.0 authentication</span>
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                    <span>Comprehensive documentation</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition">
                    <FontAwesomeIcon icon={faBook} className="mr-2" />
                    API Documentation
                  </button>
                  <button className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-medium rounded-lg transition" aria-label="Generate API key">
                    <FontAwesomeIcon icon={faKey} />
                  </button>
                </div>
              </div>

              <div className="bg-white border border-stone-200 rounded-card p-6 shadow-saas">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faCloud} className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-stone-900 mb-1">Webhook Events</h3>
                    <p className="text-sm text-stone-600">Receive real-time notifications for important events.</p>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-stone-600">
                    <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                    <span>Deployment events</span>
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                    <span>Domain status changes</span>
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                    <span>Backup completions</span>
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                    <span>Security alerts</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition">
                    <FontAwesomeIcon icon={faPlus} className="mr-2" />
                    Add Webhook
                  </button>
                  <button className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-medium rounded-lg transition" aria-label="Manage webhooks">
                    <FontAwesomeIcon icon={faList} />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Integration Support */}
          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-stone-900 mb-6">Integration Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-stone-200 rounded-card p-6 shadow-saas hover:shadow-saas-lg transition">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faBookOpen} className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-lg font-display font-bold text-stone-900 mb-2">Documentation</h3>
                <p className="text-sm text-stone-600 mb-4">Comprehensive guides and tutorials for all integrations.</p>
                <a href="#" className="text-sm text-pmc-red hover:text-pmc-red-dark font-medium transition">
                  Browse Docs
                  <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                </a>
              </div>

              <div className="bg-white border border-stone-200 rounded-card p-6 shadow-saas hover:shadow-saas-lg transition">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faCirclePlay} className="text-purple-600 text-xl" />
                </div>
                <h3 className="text-lg font-display font-bold text-stone-900 mb-2">Video Tutorials</h3>
                <p className="text-sm text-stone-600 mb-4">Step-by-step video guides for setting up integrations.</p>
                <a href="#" className="text-sm text-pmc-red hover:text-pmc-red-dark font-medium transition">
                  Watch Videos
                  <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                </a>
              </div>

              <div className="bg-white border border-stone-200 rounded-card p-6 shadow-saas hover:shadow-saas-lg transition">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faUsers} className="text-green-600 text-xl" />
                </div>
                <h3 className="text-lg font-display font-bold text-stone-900 mb-2">Community Forum</h3>
                <p className="text-sm text-stone-600 mb-4">Get help from other users and share integration tips.</p>
                <a href="#" className="text-sm text-pmc-red hover:text-pmc-red-dark font-medium transition">
                  Join Forum
                  <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
