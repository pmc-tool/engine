'use client';

import { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import TopHeader from '@/components/layout/TopHeader';
import MobileMenu from '@/components/layout/MobileMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faCheck,
  faTimes,
  faEllipsisVertical,
  faGear,
  faArrowUpRightFromSquare,
  faPlus,
  faLock,
  faShieldHalved,
  faServer,
  faRotate,
  faCircleCheck,
  faClock,
  faCircleXmark,
  faTriangleExclamation,
  faWrench,
  faHeadset,
  faBook,
  faCopy,
  faArrowRight,
  faNetworkWired,
  faEnvelope,
  faCalendarCheck,
  faMagnifyingGlass,
  faFilter
} from '@fortawesome/free-solid-svg-icons';

interface Domain {
  id: string;
  name: string;
  site: string;
  status: 'active' | 'pending' | 'error';
  sslStatus: 'active' | 'pending' | 'error';
  dnsStatus: 'verified' | 'checking' | 'failed';
  isPrimary: boolean;
  registrar: string;
  expires: string;
  autoRenew: boolean;
  dns: string;
  addedDate: string;
}

export default function DomainsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  const domains: Domain[] = [
    {
      id: '1',
      name: 'mybusiness.com',
      site: 'My Business Site',
      status: 'active',
      sslStatus: 'active',
      dnsStatus: 'verified',
      isPrimary: true,
      registrar: 'PMC Domains',
      expires: 'Dec 15, 2025',
      autoRenew: true,
      dns: 'PMC Nameservers',
      addedDate: '3 days ago'
    },
    {
      id: '2',
      name: 'www.mybusiness.com',
      site: 'My Business Site',
      status: 'pending',
      sslStatus: 'pending',
      dnsStatus: 'checking',
      isPrimary: false,
      registrar: 'PMC Domains',
      expires: 'Dec 15, 2025',
      autoRenew: true,
      dns: 'PMC Nameservers',
      addedDate: '3 days ago'
    },
    {
      id: '3',
      name: 'shop.mybusiness.com',
      site: 'My Business Site',
      status: 'error',
      sslStatus: 'error',
      dnsStatus: 'failed',
      isPrimary: false,
      registrar: 'PMC Domains',
      expires: 'Dec 15, 2025',
      autoRenew: false,
      dns: 'PMC Nameservers',
      addedDate: '1 day ago'
    },
    {
      id: '4',
      name: 'myportfolio.com',
      site: 'Portfolio Site',
      status: 'active',
      sslStatus: 'active',
      dnsStatus: 'verified',
      isPrimary: true,
      registrar: 'External',
      expires: 'Mar 22, 2025',
      autoRenew: false,
      dns: 'Custom',
      addedDate: '15 days ago'
    }
  ];

  const filteredDomains = domains.filter(domain => {
    const matchesSearch = domain.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         domain.site.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || domain.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: domains.length,
    active: domains.filter(d => d.status === 'active').length,
    pending: domains.filter(d => d.status === 'pending').length,
    error: domains.filter(d => d.status === 'error').length
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopHeader
          title="Connected Domains"
          subtitle="Manage domains connected to your sites"
          onMenuToggle={() => setIsMobileMenuOpen(true)}
          showSiteSwitcher={false}
        />

        <main className="flex-1 overflow-y-auto bg-slate-50">
          {/* Stats Overview */}
          <section className="px-4 md:px-8 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-white border border-slate-200 rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <FontAwesomeIcon icon={faGlobe} className="text-blue-600 text-xl" />
                  <span className="text-2xl font-bold text-slate-900">{stats.total}</span>
                </div>
                <div className="text-sm text-slate-600">Total Domains</div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-green-600 text-xl" />
                  <span className="text-2xl font-bold text-slate-900">{stats.active}</span>
                </div>
                <div className="text-sm text-slate-600">Active Domains</div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <FontAwesomeIcon icon={faClock} className="text-amber-600 text-xl" />
                  <span className="text-2xl font-bold text-slate-900">{stats.pending}</span>
                </div>
                <div className="text-sm text-slate-600">Pending DNS</div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <FontAwesomeIcon icon={faCircleXmark} className="text-red-600 text-xl" />
                  <span className="text-2xl font-bold text-slate-900">{stats.error}</span>
                </div>
                <div className="text-sm text-slate-600">Errors</div>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="text"
                    placeholder="Search domains..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faFilter} className="text-slate-400" />
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                    <option value="error">Error</option>
                  </select>
                </div>
                <button className="px-6 py-2 bg-pmc-red text-white rounded-lg font-medium hover:bg-pmc-red-dark transition-colors">
                  <FontAwesomeIcon icon={faPlus} className="mr-2" />
                  Connect Domain
                </button>
              </div>
            </div>
          </section>

          {/* Domains List */}
          <section className="px-4 md:px-8 pb-8">
            <div className="space-y-4">
              {filteredDomains.map((domain) => (
                <div
                  key={domain.id}
                  className={`bg-white border rounded-xl overflow-hidden transition-all ${
                    domain.status === 'active' ? 'border-slate-200' :
                    domain.status === 'pending' ? 'border-amber-200 bg-amber-50/30' :
                    'border-red-200 bg-red-50/30'
                  }`}
                >
                  {/* Domain Header */}
                  <div className={`p-5 border-b ${
                    domain.status === 'active' ? 'bg-slate-50 border-slate-200' :
                    domain.status === 'pending' ? 'bg-amber-50 border-amber-200' :
                    'bg-red-50 border-red-200'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FontAwesomeIcon
                          icon={faGlobe}
                          className={`text-xl ${
                            domain.status === 'active' ? 'text-slate-400' :
                            domain.status === 'pending' ? 'text-amber-500' :
                            'text-red-500'
                          }`}
                        />
                        <div>
                          <div className="font-mono font-semibold text-slate-900">{domain.name}</div>
                          <div className="text-xs text-slate-500 mt-0.5">
                            Connected to {domain.site} • Added {domain.addedDate}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 ${
                          domain.status === 'active' ? 'bg-green-100 text-green-700' :
                          domain.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          <FontAwesomeIcon
                            icon={
                              domain.status === 'active' ? faCircleCheck :
                              domain.status === 'pending' ? faClock :
                              faCircleXmark
                            }
                            className="text-xs"
                          />
                          {domain.status === 'active' ? 'Active' :
                           domain.status === 'pending' ? 'Waiting for DNS' :
                           'Error'}
                        </span>
                        <button
                          onClick={() => setSelectedDomain(selectedDomain === domain.id ? null : domain.id)}
                          className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-white rounded-lg transition-colors"
                        >
                          <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Alert Messages */}
                  {domain.status === 'pending' && (
                    <div className="p-4 bg-amber-50 border-b border-amber-200">
                      <div className="flex items-start gap-3">
                        <FontAwesomeIcon icon={faTriangleExclamation} className="text-amber-600 mt-0.5" />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-amber-900 mb-1">DNS propagation in progress</div>
                          <div className="text-xs text-amber-700">
                            We're waiting for your DNS changes to propagate. This usually takes 15 minutes to 48 hours. Check status below or wait for our notification.
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {domain.status === 'error' && (
                    <div className="p-4 bg-red-50 border-b border-red-200">
                      <div className="flex items-start gap-3">
                        <FontAwesomeIcon icon={faCircleXmark} className="text-red-600 mt-0.5" />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-red-900 mb-1">DNS configuration error detected</div>
                          <div className="text-xs text-red-700 mb-2">
                            The DNS records for this domain are incorrect or incomplete. Please verify your DNS settings match our requirements exactly.
                          </div>
                          <button className="text-xs text-red-700 font-medium hover:text-red-800 flex items-center gap-1">
                            View troubleshooting guide
                            <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Domain Details */}
                  <div className="p-5">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="p-3 bg-slate-50 rounded-lg">
                        <div className="text-xs text-slate-500 mb-1">SSL Status</div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                            domain.sslStatus === 'active' ? 'bg-green-100 text-green-700' :
                            domain.sslStatus === 'pending' ? 'bg-slate-200 text-slate-600' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {domain.sslStatus === 'active' ? 'Active' :
                             domain.sslStatus === 'pending' ? 'Pending' :
                             'Error'}
                          </span>
                          <FontAwesomeIcon
                            icon={domain.sslStatus === 'active' ? faLock :
                                  domain.sslStatus === 'pending' ? faClock : faTimes}
                            className={`text-xs ${
                              domain.sslStatus === 'active' ? 'text-green-600' :
                              domain.sslStatus === 'pending' ? 'text-slate-400' :
                              'text-red-600'
                            }`}
                          />
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                          {domain.sslStatus === 'active' ? 'Auto-renew enabled' :
                           domain.sslStatus === 'pending' ? 'Awaiting DNS' :
                           'Cannot provision'}
                        </div>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-lg">
                        <div className="text-xs text-slate-500 mb-1">DNS Status</div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                            domain.dnsStatus === 'verified' ? 'bg-green-100 text-green-700' :
                            domain.dnsStatus === 'checking' ? 'bg-amber-100 text-amber-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {domain.dnsStatus === 'verified' ? 'Verified' :
                             domain.dnsStatus === 'checking' ? 'Checking' :
                             'Failed'}
                          </span>
                          <FontAwesomeIcon
                            icon={domain.dnsStatus === 'verified' ? faCircleCheck :
                                  domain.dnsStatus === 'checking' ? faRotate :
                                  faTimes}
                            className={`text-xs ${
                              domain.dnsStatus === 'verified' ? 'text-green-600' :
                              domain.dnsStatus === 'checking' ? 'text-amber-600 fa-spin' :
                              'text-red-600'
                            }`}
                          />
                        </div>
                        <div className="text-xs text-slate-500 mt-1">Last checked 5 min ago</div>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-lg">
                        <div className="text-xs text-slate-500 mb-1">Primary Domain</div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                            domain.isPrimary ? 'bg-blue-100 text-blue-700' : 'bg-slate-200 text-slate-600'
                          }`}>
                            {domain.isPrimary ? 'Yes' : 'No'}
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                          {domain.isPrimary ? 'Default for site' : 'Redirects to primary'}
                        </div>
                      </div>

                      <div className="p-3 bg-slate-50 rounded-lg">
                        <div className="text-xs text-slate-500 mb-1">Registrar</div>
                        <div className="text-sm font-semibold text-slate-900">{domain.registrar}</div>
                        <div className="text-xs text-slate-500 mt-1">Expires {domain.expires}</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 flex-wrap">
                      {domain.status === 'pending' && (
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                          <FontAwesomeIcon icon={faRotate} className="mr-2" />
                          Check DNS Status
                        </button>
                      )}
                      {domain.status === 'error' && (
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                          <FontAwesomeIcon icon={faWrench} className="mr-2" />
                          Fix DNS Issues
                        </button>
                      )}
                      <button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                        <FontAwesomeIcon icon={faGear} className="mr-2" />
                        View DNS Records
                      </button>
                      {domain.status === 'active' && (
                        <button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-2" />
                          Visit Site
                        </button>
                      )}
                      <button className="px-4 py-2 bg-white border border-red-300 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors ml-auto">
                        Disconnect
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredDomains.length === 0 && (
              <div className="bg-white border border-slate-200 rounded-xl p-12 text-center">
                <FontAwesomeIcon icon={faGlobe} className="text-slate-300 text-5xl mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">No domains found</h3>
                <p className="text-sm text-slate-600 mb-6">
                  {searchQuery ? 'Try a different search term' : 'Connect your first domain to get started'}
                </p>
                <button className="px-6 py-2 bg-pmc-red text-white rounded-lg font-medium hover:bg-pmc-red-dark transition-colors">
                  <FontAwesomeIcon icon={faPlus} className="mr-2" />
                  Connect Domain
                </button>
              </div>
            )}
          </section>

          {/* SSL Overview */}
          <section className="px-4 md:px-8 pb-8">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-1">SSL Certificates</h2>
                  <p className="text-sm text-slate-600">Automatic SSL/TLS certificates for all your domains</p>
                </div>
                <span className="px-3 py-1.5 bg-green-100 text-green-700 rounded-lg text-sm font-medium flex items-center gap-2">
                  <FontAwesomeIcon icon={faShieldHalved} />
                  All Domains Protected
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <FontAwesomeIcon icon={faLock} className="text-green-600 text-xl" />
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">Active</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">
                    {domains.filter(d => d.sslStatus === 'active').length}
                  </div>
                  <div className="text-xs text-slate-600">Active Certificates</div>
                </div>

                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <FontAwesomeIcon icon={faRotate} className="text-blue-600 text-xl" />
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-medium">Enabled</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">Auto</div>
                  <div className="text-xs text-slate-600">Renewal Status</div>
                </div>

                <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg border border-purple-200">
                  <div className="flex items-center justify-between mb-2">
                    <FontAwesomeIcon icon={faCalendarCheck} className="text-purple-600 text-xl" />
                    <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded text-xs font-medium">Valid</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">89d</div>
                  <div className="text-xs text-slate-600">Until Next Renewal</div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-green-600 mt-0.5" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-900 mb-1">Automatic SSL Management</div>
                    <div className="text-xs text-slate-600">
                      PMC Engine automatically provisions, renews, and manages SSL/TLS certificates for all your domains using Let's Encrypt. Certificates are renewed 30 days before expiration with zero downtime.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Help Section */}
          <section className="px-4 md:px-8 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faBook} className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Domain Setup Guide</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Step-by-step instructions for connecting your domain from popular registrars like GoDaddy, Namecheap, and Cloudflare.
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
                  View Guide
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200 p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faHeadset} className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Need Help?</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Our support team is here to help you with domain configuration, DNS issues, and SSL certificate problems.
                </p>
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
