'use client';

import { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import TopHeader from '@/components/layout/TopHeader';
import MobileMenu from '@/components/layout/MobileMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCreditCard,
  faBolt,
  faDownload,
  faCheckCircle,
  faEllipsisV,
  faChartLine,
  faCalendar,
  faCrown,
  faPlus,
  faGear,
  faArrowUp,
  faUnlink,
  faCheck,
  faXmark,
  faChevronDown,
  faEye,
  faFileInvoice,
  faHeadset,
  faComments,
  faBook,
  faTimes,
  faGlobe,
  faWandMagicSparkles,
  faDatabase
} from '@fortawesome/free-solid-svg-icons';
import {
  faCcVisa,
  faCcMastercard,
  faWordpress,
  faGithub,
  faGoogle
} from '@fortawesome/free-brands-svg-icons';

const invoices = [
  {
    id: '#INV-2024-12-001',
    date: 'Dec 15, 2024',
    paidDate: 'Paid on Dec 15',
    description: 'Pro Plan - Monthly',
    amount: 49.00,
    status: 'paid',
  },
  {
    id: '#INV-2024-11-001',
    date: 'Nov 15, 2024',
    paidDate: 'Paid on Nov 15',
    description: 'Pro Plan - Monthly',
    amount: 49.00,
    status: 'paid',
  },
  {
    id: '#INV-2024-10-001',
    date: 'Oct 15, 2024',
    paidDate: 'Paid on Oct 15',
    description: 'Pro Plan - Monthly',
    amount: 49.00,
    status: 'paid',
  },
  {
    id: '#INV-2025-01-001',
    date: 'Jan 15, 2025',
    paidDate: 'Due in 3 days',
    description: 'Pro Plan - Monthly',
    amount: 49.00,
    status: 'upcoming',
  },
];

export default function BillingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddPaymentModal, setShowAddPaymentModal] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopHeader
          title="Billing & Connects"
          onMenuToggle={() => setIsMobileMenuOpen(true)}
          showSiteSwitcher={false}
        />

        <main className="flex-1 overflow-y-auto bg-slate-50 p-4 md:p-8">
          {/* Hero Section */}
          <section className="mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">
                  Billing & Connected Accounts
                </h1>
                <p className="text-slate-600">
                  Manage your subscription, payment methods, invoices, and connected accounts.
                </p>
              </div>
              <button
                onClick={() => setShowUpgradeModal(true)}
                className="flex items-center px-6 py-3 bg-pmc-red hover:bg-pmc-red-dark text-white font-medium rounded-card shadow-saas transition"
              >
                <FontAwesomeIcon icon={faCrown} className="mr-2" />
                <span>Upgrade Plan</span>
              </button>
            </div>
          </section>

          {/* Tabs */}
          <section className="mb-8">
            <div className="border-b border-slate-200">
              <div className="flex space-x-8 overflow-x-auto">
                {['overview', 'payment', 'invoices', 'connected', 'usage'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-3 text-sm font-semibold whitespace-nowrap border-b-2 transition ${
                      activeTab === tab
                        ? 'text-pmc-red border-pmc-red'
                        : 'text-slate-600 border-transparent hover:text-slate-900 hover:border-slate-300'
                    }`}
                  >
                    {tab === 'overview' && 'Overview'}
                    {tab === 'payment' && 'Payment Methods'}
                    {tab === 'invoices' && 'Invoices'}
                    {tab === 'connected' && 'Connected Accounts'}
                    {tab === 'usage' && 'Usage History'}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <>
              {/* Current Plan */}
              <section className="mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Active Plan Card */}
                  <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-purple-700 rounded-card p-8 text-white shadow-saas-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                              Current Plan
                            </span>
                            <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full flex items-center">
                              <span className="w-1.5 h-1.5 bg-white rounded-full mr-1.5"></span>
                              Active
                            </span>
                          </div>
                          <h2 className="text-3xl font-display font-bold mb-2">Pro Plan</h2>
                          <p className="text-white/90 text-lg">
                            Everything you need to manage multiple sites with advanced features.
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-4xl font-display font-bold mb-1">$49</div>
                          <div className="text-white/80 text-sm">per month</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                          <div className="text-white/80 text-sm mb-1">Billing Cycle</div>
                          <div className="text-xl font-display font-bold">Monthly</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                          <div className="text-white/80 text-sm mb-1">Next Billing Date</div>
                          <div className="text-xl font-display font-bold">Jan 15, 2025</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                          <div className="text-white/80 text-sm mb-1">Sites Deployed</div>
                          <div className="text-xl font-display font-bold">3 / 10</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                          <div className="text-white/80 text-sm mb-1">Member Since</div>
                          <div className="text-xl font-display font-bold">Mar 2024</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => setShowUpgradeModal(true)}
                          className="flex-1 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-slate-100 transition shadow-saas"
                        >
                          <FontAwesomeIcon icon={faArrowUp} className="mr-2" />
                          Upgrade to Enterprise
                        </button>
                        <button className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition">
                          <FontAwesomeIcon icon={faGear} className="mr-2" />
                          Manage Plan
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Plan Features */}
                  <div className="bg-white border border-slate-200 rounded-card p-6 shadow-saas">
                    <h3 className="text-lg font-display font-bold text-slate-900 mb-4">Plan Features</h3>
                    <div className="space-y-3">
                      {[
                        { title: 'Up to 10 Sites', desc: 'Deploy and manage multiple sites' },
                        { title: 'Staging Environments', desc: 'Test before going live' },
                        { title: '100 AI Generations/mo', desc: 'AI-powered content creation' },
                        { title: '50 GB Storage', desc: 'Ample space for all sites' },
                        { title: 'Free SSL Certificates', desc: 'Secure all your domains' },
                        { title: 'Priority Support', desc: 'Get help when you need it' },
                        { title: 'Automatic Backups', desc: 'Daily backups included' },
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <FontAwesomeIcon icon={faCheck} className="text-green-600 text-xs" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900">{feature.title}</div>
                            <div className="text-xs text-slate-600">{feature.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button className="w-full mt-6 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition">
                      Compare All Plans
                    </button>
                  </div>
                </div>
              </section>

              {/* Usage Overview */}
              <section className="mb-8">
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Current Usage</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { icon: faGlobe, color: 'blue', label: 'Sites Deployed', value: '3 / 10', percent: 30 },
                    { icon: faWandMagicSparkles, color: 'purple', label: 'AI Generations', value: '47 / 100', percent: 47 },
                    { icon: faDatabase, color: 'green', label: 'of 50 GB Storage', value: '12.4 GB', percent: 25 },
                    { icon: faChartLine, color: 'orange', label: 'Bandwidth Used', value: '142 GB', percent: 100, unlimited: true },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white border border-slate-200 rounded-card p-6 shadow-saas">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-${item.color}-50 rounded-lg flex items-center justify-center`}>
                          <FontAwesomeIcon icon={item.icon} className={`text-${item.color}-600 text-xl`} />
                        </div>
                        <span className="text-xs font-semibold text-slate-500">
                          {item.unlimited ? 'Unlimited' : `${item.percent}% Used`}
                        </span>
                      </div>
                      <div className="mb-3">
                        <div className="text-3xl font-display font-bold text-slate-900 mb-1">{item.value}</div>
                        <div className="text-sm text-slate-600">{item.label}</div>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-${item.color}-500 rounded-full transition-all`}
                          style={{ width: `${item.percent}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Plan Comparison */}
              <section className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-display font-bold text-slate-900">Compare Plans</h2>
                  <div className="flex items-center space-x-2 bg-white border border-slate-200 rounded-lg p-1">
                    <button
                      onClick={() => setBillingCycle('monthly')}
                      className={`px-3 py-1.5 text-sm font-medium rounded transition ${
                        billingCycle === 'monthly' ? 'bg-pmc-red text-white' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Monthly
                    </button>
                    <button
                      onClick={() => setBillingCycle('annual')}
                      className={`px-3 py-1.5 text-sm font-medium rounded transition ${
                        billingCycle === 'annual' ? 'bg-pmc-red text-white' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Annual
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Starter Plan */}
                  <div className="bg-white border border-slate-200 rounded-card p-6 shadow-saas hover:shadow-saas-lg transition">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Starter</h3>
                      <div className="text-4xl font-display font-bold text-slate-900 mb-1">
                        $19<span className="text-lg text-slate-500">/mo</span>
                      </div>
                      <p className="text-sm text-slate-600">Perfect for single projects</p>
                    </div>
                    <div className="space-y-3 mb-6">
                      {['Up to 3 sites', '20 AI generations/mo', '10 GB storage', 'Free SSL certificates', 'Email support'].map((f, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <FontAwesomeIcon icon={faCheck} className="text-green-600 mt-1" />
                          <span className="text-sm text-slate-700">{f}</span>
                        </div>
                      ))}
                      <div className="flex items-start space-x-2">
                        <FontAwesomeIcon icon={faXmark} className="text-slate-300 mt-1" />
                        <span className="text-sm text-slate-400">No staging environments</span>
                      </div>
                    </div>
                    <button className="w-full px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition">
                      Select Plan
                    </button>
                  </div>

                  {/* Pro Plan (Current) */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-pmc-red rounded-card p-6 shadow-saas-lg relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 bg-pmc-red text-white text-xs font-semibold rounded-full">
                        Current Plan
                      </span>
                    </div>
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Pro</h3>
                      <div className="text-4xl font-display font-bold text-slate-900 mb-1">
                        $49<span className="text-lg text-slate-500">/mo</span>
                      </div>
                      <p className="text-sm text-slate-600">For growing businesses</p>
                    </div>
                    <div className="space-y-3 mb-6">
                      {['Up to 10 sites', '100 AI generations/mo', '50 GB storage', 'Free SSL certificates', 'Priority support', 'Staging environments'].map((f, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <FontAwesomeIcon icon={faCheck} className="text-green-600 mt-1" />
                          <span className="text-sm text-slate-700">{f}</span>
                        </div>
                      ))}
                    </div>
                    <button className="w-full px-4 py-2.5 bg-pmc-red hover:bg-pmc-red-dark text-white font-medium rounded-lg shadow-saas transition">
                      Current Plan
                    </button>
                  </div>

                  {/* Enterprise Plan */}
                  <div className="bg-white border border-slate-200 rounded-card p-6 shadow-saas hover:shadow-saas-lg transition">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Enterprise</h3>
                      <div className="text-4xl font-display font-bold text-slate-900 mb-1">
                        $149<span className="text-lg text-slate-500">/mo</span>
                      </div>
                      <p className="text-sm text-slate-600">For large organizations</p>
                    </div>
                    <div className="space-y-3 mb-6">
                      {['Unlimited sites', 'Unlimited AI generations', '200 GB storage', 'Free SSL certificates', '24/7 dedicated support', 'Advanced staging'].map((f, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <FontAwesomeIcon icon={faCheck} className="text-green-600 mt-1" />
                          <span className="text-sm text-slate-700">{f}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => setShowUpgradeModal(true)}
                      className="w-full px-4 py-2.5 bg-pmc-red hover:bg-pmc-red-dark text-white font-medium rounded-lg shadow-saas transition"
                    >
                      Upgrade Now
                    </button>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Payment Methods Tab */}
          {activeTab === 'payment' && (
            <section className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-display font-bold text-slate-900">Payment Methods</h2>
                <button
                  onClick={() => setShowAddPaymentModal(true)}
                  className="flex items-center px-4 py-2 bg-pmc-red hover:bg-pmc-red-dark text-white text-sm font-medium rounded-lg shadow-saas transition"
                >
                  <FontAwesomeIcon icon={faPlus} className="mr-2" />
                  Add Payment Method
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Visa Card (Primary) */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-card p-6 text-white shadow-saas-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                      <span className="px-2.5 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                        Primary
                      </span>
                      <FontAwesomeIcon icon={faCcVisa} className="text-4xl text-white/80" />
                    </div>
                    <div className="mb-6">
                      <div className="text-xl font-mono tracking-wider mb-1">•••• •••• •••• 4242</div>
                      <div className="text-sm text-white/70">Visa ending in 4242</div>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-xs text-white/70 mb-1">Cardholder</div>
                        <div className="text-sm font-semibold">John Mitchell</div>
                      </div>
                      <div>
                        <div className="text-xs text-white/70 mb-1">Expires</div>
                        <div className="text-sm font-semibold">12/2026</div>
                      </div>
                      <button className="text-white/80 hover:text-white transition" aria-label="Card options">
                        <FontAwesomeIcon icon={faEllipsisV} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Mastercard (Backup) */}
                <div className="bg-white border-2 border-slate-200 rounded-card p-6 shadow-saas relative">
                  <div className="flex items-start justify-between mb-8">
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">
                      Backup
                    </span>
                    <FontAwesomeIcon icon={faCcMastercard} className="text-4xl text-slate-300" />
                  </div>
                  <div className="mb-6">
                    <div className="text-xl font-mono tracking-wider mb-1 text-slate-900">•••• •••• •••• 8888</div>
                    <div className="text-sm text-slate-600">Mastercard ending in 8888</div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Cardholder</div>
                      <div className="text-sm font-semibold text-slate-900">John Mitchell</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Expires</div>
                      <div className="text-sm font-semibold text-slate-900">08/2025</div>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600 transition" aria-label="Card options">
                      <FontAwesomeIcon icon={faEllipsisV} />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Invoices Tab */}
          {activeTab === 'invoices' && (
            <section className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-display font-bold text-slate-900">Recent Invoices</h2>
                <button className="text-sm text-pmc-red hover:text-pmc-red-dark font-medium transition">
                  View All Invoices
                  <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                </button>
              </div>

              <div className="bg-white border border-slate-200 rounded-card shadow-saas overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                          Invoice
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-4 text-right text-xs font-semibold text-slate-600 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {invoices.map((invoice) => (
                        <tr key={invoice.id} className="hover:bg-slate-50 transition">
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 ${invoice.status === 'upcoming' ? 'bg-yellow-50' : 'bg-blue-50'} rounded-lg flex items-center justify-center`}>
                                <FontAwesomeIcon
                                  icon={faFileInvoice}
                                  className={invoice.status === 'upcoming' ? 'text-yellow-600' : 'text-blue-600'}
                                />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-slate-900">{invoice.id}</div>
                                <div className="text-xs text-slate-500">{invoice.description}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-slate-900">{invoice.date}</div>
                            <div className="text-xs text-slate-500">{invoice.paidDate}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm font-semibold text-slate-900">${invoice.amount.toFixed(2)}</div>
                            <div className="text-xs text-slate-500">USD</div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
                              invoice.status === 'paid'
                                ? 'bg-green-50 text-green-700'
                                : 'bg-yellow-50 text-yellow-700'
                            }`}>
                              {invoice.status === 'paid' ? 'Paid' : 'Upcoming'}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button
                              className={`text-sm font-medium transition mr-4 ${
                                invoice.status === 'upcoming'
                                  ? 'text-slate-400 cursor-not-allowed'
                                  : 'text-pmc-red hover:text-pmc-red-dark'
                              }`}
                              disabled={invoice.status === 'upcoming'}
                            >
                              <FontAwesomeIcon icon={faDownload} className="mr-1" />
                              Download
                            </button>
                            <button className="text-sm text-slate-600 hover:text-slate-900 font-medium transition">
                              <FontAwesomeIcon icon={faEye} className="mr-1" />
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          )}

          {/* Connected Accounts Tab */}
          {activeTab === 'connected' && (
            <section className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-display font-bold text-slate-900 mb-1">Connected Accounts</h2>
                  <p className="text-sm text-slate-600">
                    Manage integrations and connected services for seamless workflows.
                  </p>
                </div>
                <button className="flex items-center px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition">
                  <FontAwesomeIcon icon={faPlus} className="mr-2" />
                  Connect New Account
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* WordPress */}
                <div className="bg-white border border-slate-200 rounded-card p-6 shadow-saas hover:shadow-saas-lg transition">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={faWordpress} className="text-white text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-bold text-slate-900 mb-1">WordPress</h3>
                        <p className="text-sm text-slate-600">Content management system</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-1.5"></span>
                      Connected
                    </span>
                  </div>
                  <div className="mb-4 p-3 bg-slate-50 rounded-lg">
                    <div className="text-xs text-slate-500 mb-1">Connected Account</div>
                    <div className="text-sm font-semibold text-slate-900">john.mitchell@pmcengine.com</div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                    <span>Connected on Dec 10, 2024</span>
                    <span>3 sites using</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="flex-1 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition">
                      <FontAwesomeIcon icon={faGear} className="mr-2" />
                      Manage
                    </button>
                    <button className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 text-sm font-medium rounded-lg transition">
                      <FontAwesomeIcon icon={faUnlink} />
                    </button>
                  </div>
                </div>

                {/* GitHub */}
                <div className="bg-white border border-slate-200 rounded-card p-6 shadow-saas hover:shadow-saas-lg transition">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={faGithub} className="text-white text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-bold text-slate-900 mb-1">GitHub</h3>
                        <p className="text-sm text-slate-600">Version control & deployment</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-1.5"></span>
                      Connected
                    </span>
                  </div>
                  <div className="mb-4 p-3 bg-slate-50 rounded-lg">
                    <div className="text-xs text-slate-500 mb-1">Connected Account</div>
                    <div className="text-sm font-semibold text-slate-900">@johnmitchell</div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                    <span>Connected on Nov 28, 2024</span>
                    <span>2 repositories</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="flex-1 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition">
                      <FontAwesomeIcon icon={faGear} className="mr-2" />
                      Manage
                    </button>
                    <button className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 text-sm font-medium rounded-lg transition">
                      <FontAwesomeIcon icon={faUnlink} />
                    </button>
                  </div>
                </div>

                {/* Google Cloud */}
                <div className="bg-white border border-slate-200 rounded-card p-6 shadow-saas hover:shadow-saas-lg transition">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={faGoogle} className="text-white text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-bold text-slate-900 mb-1">Google Cloud</h3>
                        <p className="text-sm text-slate-600">Storage & CDN services</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-1.5"></span>
                      Connected
                    </span>
                  </div>
                  <div className="mb-4 p-3 bg-slate-50 rounded-lg">
                    <div className="text-xs text-slate-500 mb-1">Connected Account</div>
                    <div className="text-sm font-semibold text-slate-900">john.mitchell@gmail.com</div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                    <span>Connected on Oct 15, 2024</span>
                    <span>Active storage</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="flex-1 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition">
                      <FontAwesomeIcon icon={faGear} className="mr-2" />
                      Manage
                    </button>
                    <button className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 text-sm font-medium rounded-lg transition">
                      <FontAwesomeIcon icon={faUnlink} />
                    </button>
                  </div>
                </div>

                {/* Add New */}
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 rounded-card p-6 hover:border-pmc-red hover:bg-slate-50 transition cursor-pointer">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-saas">
                      <FontAwesomeIcon icon={faPlus} className="text-slate-400 text-2xl" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-slate-900 mb-2">Connect New Service</h3>
                    <p className="text-sm text-slate-600 mb-4">
                      Link additional accounts and services to enhance your workflow.
                    </p>
                    <button className="px-4 py-2 bg-pmc-red hover:bg-pmc-red-dark text-white text-sm font-medium rounded-lg transition">
                      Browse Integrations
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Help Section */}
          <section className="mb-8">
            <div className="bg-gradient-to-br from-purple-600 to-blue-700 rounded-card p-8 text-white shadow-saas-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="max-w-2xl">
                    <div className="flex items-center space-x-2 mb-4">
                      <FontAwesomeIcon icon={faHeadset} className="text-2xl" />
                      <h2 className="text-2xl font-display font-bold">Need Help with Billing?</h2>
                    </div>
                    <p className="text-white/90 mb-6 text-lg">
                      Our billing support team is here to help with any questions about your subscription, payments, or invoices.
                    </p>
                    <div className="flex items-center space-x-4">
                      <button className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-card hover:bg-slate-100 transition shadow-saas">
                        <FontAwesomeIcon icon={faComments} className="mr-2" />
                        Contact Billing Support
                      </button>
                      <button className="px-6 py-3 bg-white/10 text-white font-semibold rounded-card hover:bg-white/20 transition backdrop-blur-sm">
                        <FontAwesomeIcon icon={faBook} className="mr-2" />
                        View Billing Docs
                      </button>
                    </div>
                  </div>
                  <div className="hidden xl:block">
                    <div className="w-48 h-48 bg-white/10 rounded-card backdrop-blur-sm flex items-center justify-center">
                      <FontAwesomeIcon icon={faCreditCard} className="text-6xl text-white/80" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Add Payment Method Modal */}
      {showAddPaymentModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-card max-w-md w-full p-6 shadow-saas-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-display font-bold text-slate-900">Add Payment Method</h3>
              <button
                onClick={() => setShowAddPaymentModal(false)}
                className="text-slate-400 hover:text-slate-600 transition"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent transition"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent transition"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Cardholder Name</label>
                <input
                  type="text"
                  placeholder="John Mitchell"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent transition"
                />
              </div>
              <div className="flex items-center space-x-3 pt-4">
                <button
                  onClick={() => setShowAddPaymentModal(false)}
                  className="flex-1 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition"
                >
                  Cancel
                </button>
                <button className="flex-1 px-4 py-2.5 bg-pmc-red hover:bg-pmc-red-dark text-white font-medium rounded-lg shadow-saas transition">
                  Add Card
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Upgrade Modal */}
      {showUpgradeModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-card max-w-2xl w-full p-8 shadow-saas-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-display font-bold text-slate-900">Upgrade to Enterprise</h3>
              <button
                onClick={() => setShowUpgradeModal(false)}
                className="text-slate-400 hover:text-slate-600 transition"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="mb-6">
              <p className="text-slate-600 mb-4">
                Unlock unlimited sites, AI generations, and premium support with our Enterprise plan.
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-card p-6 mb-6">
                <div className="text-center mb-4">
                  <div className="text-5xl font-display font-bold text-slate-900 mb-2">
                    $149<span className="text-2xl text-slate-500">/mo</span>
                  </div>
                  <p className="text-slate-600">Billed monthly</p>
                </div>
                <div className="space-y-3">
                  {['Unlimited sites', 'Unlimited AI generations', '200 GB storage', '24/7 dedicated support', 'Advanced staging', 'Custom integrations', 'SLA guarantee'].map((f, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                      <span className="text-sm text-slate-700">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowUpgradeModal(false)}
                className="flex-1 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition"
              >
                Maybe Later
              </button>
              <button className="flex-1 px-6 py-3 bg-pmc-red hover:bg-pmc-red-dark text-white font-medium rounded-lg shadow-saas transition">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
