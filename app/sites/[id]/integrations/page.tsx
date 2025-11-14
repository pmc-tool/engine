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
  faPuzzlePiece,
  faCheckCircle,
  faPlus,
  faMagnifyingGlass,
  faEllipsisVertical,
  faGear,
  faCircle,
  faChartLine,
  faEnvelope,
  faShoppingCart,
  faCloud,
  faCode,
  faBell,
  faDatabase,
  faShieldHalved,
  faCreditCard,
  faUsers,
  faFileInvoice,
  faComments,
  faVideo,
  faBoxArchive,
  faArrowRight,
  faBook,
  faStore,
  faStar,
  faDownload,
  faClock,
  faCircleCheck,
  faWandMagicSparkles,
  faRocket,
  faPaperPlane,
  faHeadset
} from '@fortawesome/free-solid-svg-icons';

export default function IntegrationsPage() {
  const params = useParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const site = mockSites.find(s => s.id === params.id) || mockSites[0];

  const categories = [
    { id: 'all', label: 'All Integrations', count: 24 },
    { id: 'analytics', label: 'Analytics', count: 5 },
    { id: 'marketing', label: 'Marketing', count: 6 },
    { id: 'ecommerce', label: 'E-commerce', count: 4 },
    { id: 'communication', label: 'Communication', count: 5 },
    { id: 'productivity', label: 'Productivity', count: 4 }
  ];

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
            {/* Page Header */}
            <div className="mb-6 md:mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Integrations</h1>
                  <p className="text-slate-600">Connect your favorite tools and services to enhance your site&apos;s functionality</p>
                </div>
                <button className="px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <FontAwesomeIcon icon={faStore} />
                  Browse Marketplace
                </button>
              </div>
            </div>

            {/* Tab Navigation */}
            <TabNavigation />

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">Active Integrations</span>
                  <FontAwesomeIcon icon={faPuzzlePiece} className="text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900">8</div>
                <div className="text-xs text-slate-500 mt-1">Connected services</div>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">Available</span>
                  <FontAwesomeIcon icon={faStore} className="text-green-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900">24</div>
                <div className="text-xs text-slate-500 mt-1">In marketplace</div>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">API Calls</span>
                  <FontAwesomeIcon icon={faChartLine} className="text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900">12.4K</div>
                <div className="text-xs text-slate-500 mt-1">This month</div>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">Last Sync</span>
                  <FontAwesomeIcon icon={faClock} className="text-amber-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900">2m</div>
                <div className="text-xs text-slate-500 mt-1">Google Analytics</div>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm mb-6">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                <div className="flex-1 w-full md:max-w-md">
                  <div className="relative">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search integrations..."
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                        activeCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {category.label} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Active Integrations */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">Active Integrations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Google Analytics */}
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={faChartLine} className="text-orange-600 text-xl" />
                    </div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full flex items-center gap-1">
                        <FontAwesomeIcon icon={faCircle} className="text-xs" />
                        Active
                      </span>
                      <button className="text-slate-400 hover:text-slate-600">
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                      </button>
                    </div>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Google Analytics</h3>
                  <p className="text-sm text-slate-600 mb-4">Track visitor behavior, traffic sources, and conversion metrics</p>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                    <span>Last synced: 2 min ago</span>
                    <span className="text-green-600 font-medium">Syncing</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                      <FontAwesomeIcon icon={faGear} className="mr-1" />
                      Configure
                    </button>
                    <button className="px-3 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                      View Stats
                    </button>
                  </div>
                </div>

                {/* Mailchimp */}
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={faEnvelope} className="text-yellow-600 text-xl" />
                    </div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full flex items-center gap-1">
                        <FontAwesomeIcon icon={faCircle} className="text-xs" />
                        Active
                      </span>
                      <button className="text-slate-400 hover:text-slate-600">
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                      </button>
                    </div>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Mailchimp</h3>
                  <p className="text-sm text-slate-600 mb-4">Email marketing automation and newsletter management</p>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                    <span>347 subscribers</span>
                    <span className="text-green-600 font-medium">Connected</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                      <FontAwesomeIcon icon={faGear} className="mr-1" />
                      Configure
                    </button>
                    <button className="px-3 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                      Manage Lists
                    </button>
                  </div>
                </div>

                {/* Stripe */}
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={faCreditCard} className="text-purple-600 text-xl" />
                    </div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full flex items-center gap-1">
                        <FontAwesomeIcon icon={faCircle} className="text-xs" />
                        Active
                      </span>
                      <button className="text-slate-400 hover:text-slate-600">
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                      </button>
                    </div>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Stripe</h3>
                  <p className="text-sm text-slate-600 mb-4">Accept payments and manage subscriptions securely</p>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                    <span>$12,450 revenue</span>
                    <span className="text-green-600 font-medium">Live Mode</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                      <FontAwesomeIcon icon={faGear} className="mr-1" />
                      Configure
                    </button>
                    <button className="px-3 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                      Dashboard
                    </button>
                  </div>
                </div>

                {/* Slack */}
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={faComments} className="text-pink-600 text-xl" />
                    </div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full flex items-center gap-1">
                        <FontAwesomeIcon icon={faCircle} className="text-xs" />
                        Active
                      </span>
                      <button className="text-slate-400 hover:text-slate-600">
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                      </button>
                    </div>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Slack</h3>
                  <p className="text-sm text-slate-600 mb-4">Get notifications for site events and form submissions</p>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                    <span>Connected to #general</span>
                    <span className="text-green-600 font-medium">Connected</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                      <FontAwesomeIcon icon={faGear} className="mr-1" />
                      Configure
                    </button>
                    <button className="px-3 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                      Test
                    </button>
                  </div>
                </div>

                {/* Cloudflare */}
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={faCloud} className="text-orange-600 text-xl" />
                    </div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full flex items-center gap-1">
                        <FontAwesomeIcon icon={faCircle} className="text-xs" />
                        Active
                      </span>
                      <button className="text-slate-400 hover:text-slate-600">
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                      </button>
                    </div>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Cloudflare</h3>
                  <p className="text-sm text-slate-600 mb-4">CDN, DNS management, and DDoS protection</p>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                    <span>Cache hit rate: 94%</span>
                    <span className="text-green-600 font-medium">Optimized</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                      <FontAwesomeIcon icon={faGear} className="mr-1" />
                      Configure
                    </button>
                    <button className="px-3 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                      Analytics
                    </button>
                  </div>
                </div>

                {/* GitHub */}
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={faCode} className="text-white text-xl" />
                    </div>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full flex items-center gap-1">
                        <FontAwesomeIcon icon={faCircle} className="text-xs" />
                        Active
                      </span>
                      <button className="text-slate-400 hover:text-slate-600">
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                      </button>
                    </div>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">GitHub</h3>
                  <p className="text-sm text-slate-600 mb-4">Version control and automatic deployments from repository</p>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                    <span>Connected to main branch</span>
                    <span className="text-green-600 font-medium">Syncing</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                      <FontAwesomeIcon icon={faGear} className="mr-1" />
                      Configure
                    </button>
                    <button className="px-3 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                      View Repo
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Available Integrations */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">Available Integrations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Zapier */}
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <FontAwesomeIcon icon={faPuzzlePiece} className="text-orange-600 text-xl" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Zapier</h3>
                  <p className="text-sm text-slate-600 mb-4">Connect with 3,000+ apps and automate workflows</p>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <FontAwesomeIcon icon={faPlus} />
                    Connect
                  </button>
                </div>

                {/* HubSpot */}
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <FontAwesomeIcon icon={faUsers} className="text-orange-600 text-xl" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">HubSpot</h3>
                  <p className="text-sm text-slate-600 mb-4">CRM and marketing automation platform</p>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <FontAwesomeIcon icon={faPlus} />
                    Connect
                  </button>
                </div>

                {/* Shopify */}
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <FontAwesomeIcon icon={faShoppingCart} className="text-green-600 text-xl" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Shopify</h3>
                  <p className="text-sm text-slate-600 mb-4">E-commerce platform integration</p>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <FontAwesomeIcon icon={faPlus} />
                    Connect
                  </button>
                </div>

                {/* Intercom */}
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <FontAwesomeIcon icon={faComments} className="text-blue-600 text-xl" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Intercom</h3>
                  <p className="text-sm text-slate-600 mb-4">Customer messaging and support platform</p>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <FontAwesomeIcon icon={faPlus} />
                    Connect
                  </button>
                </div>
              </div>
            </div>

            {/* Integration Marketplace Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white mb-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={faStore} className="text-2xl" />
                    </div>
                    <h2 className="text-2xl font-bold">Integration Marketplace</h2>
                  </div>
                  <p className="text-blue-100 mb-4">Discover hundreds of integrations to extend your site&apos;s capabilities. From analytics to payment processing, find the perfect tools for your needs.</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCircleCheck} />
                      200+ integrations available
                    </span>
                    <span className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCircleCheck} />
                      One-click setup
                    </span>
                    <span className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCircleCheck} />
                      Free & premium options
                    </span>
                  </div>
                </div>
                <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2">
                  <FontAwesomeIcon icon={faStore} />
                  <span>Browse Marketplace</span>
                </button>
              </div>
            </div>

            {/* Help Section */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faBook} className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Integration Guides</h3>
                <p className="text-sm text-slate-600 mb-4">Step-by-step tutorials for setting up and configuring popular integrations.</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
                  View Guides
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200 p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faHeadset} className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Need Help?</h3>
                <p className="text-sm text-slate-600 mb-4">Our support team can help you set up and troubleshoot integrations.</p>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors inline-flex items-center gap-2">
                  Contact Support
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
