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
  faGlobe,
  faCopy,
  faArrowUpRightFromSquare,
  faEllipsisVertical,
  faLock,
  faCheckCircle,
  faStar,
  faPlus,
  faMagnifyingGlass,
  faCircle,
  faClock,
  faCircleXmark,
  faTriangleExclamation,
  faWrench,
  faRotate,
  faShieldHalved,
  faCalendarCheck,
  faCircleCheck,
  faBook,
  faHeadset,
  faArrowRight,
  faDownload,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

export default function DomainPage() {
  const params = useParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            {/* Page Header */}
            <div className="mb-6 md:mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Domain Manager</h1>
                  <p className="text-slate-600">Manage your PMC subdomain, connect custom domains, and configure DNS settings for your site.</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    Search & Purchase Domain
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <FontAwesomeIcon icon={faPlus} />
                    Connect Existing Domain
                  </button>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <TabNavigation />

            {/* Notification Banner */}
            <div className="bg-blue-50 border border-blue-100 rounded-lg mb-6">
              <div className="px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-blue-600" />
                  <span className="text-sm text-blue-900">DNS changes can take up to 48 hours to propagate globally. We&apos;ll notify you when your domain is fully active.</span>
                </div>
              </div>
            </div>

            {/* PMC Subdomain Section */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-1">PMC Subdomain</h2>
                  <p className="text-sm text-slate-600">Your default subdomain on PMC Engine infrastructure</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faCircle} className="text-xs" />
                  Active
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div className="flex-1">
                  <div className="text-xs text-slate-500 mb-1 uppercase font-medium">Your Subdomain</div>
                  <div className="text-base font-mono text-slate-900">{site.domain}</div>
                </div>
                <button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
                  <FontAwesomeIcon icon={faCopy} />
                  Copy
                </button>
                <a href={`https://${site.domain}`} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  Visit Site
                </a>
              </div>
            </div>

            {/* Custom Domains Section */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mb-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-1">Custom Domains</h2>
                  <p className="text-sm text-slate-600">Connect your own domain names to this site</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Active Domain */}
                <div className="border border-slate-200 rounded-lg overflow-hidden">
                  <div className="p-5 bg-slate-50 border-b border-slate-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faGlobe} className="text-slate-400 text-xl" />
                        <div>
                          <div className="font-mono font-semibold text-slate-900">mybusiness.com</div>
                          <div className="text-xs text-slate-500 mt-0.5">Added 3 days ago</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex items-center gap-1.5">
                          <FontAwesomeIcon icon={faCircle} className="text-xs" />
                          Active
                        </span>
                        <button className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-white rounded-lg transition-colors">
                          <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="p-3 bg-slate-50 rounded-lg">
                        <div className="text-xs text-slate-500 mb-1">SSL Status</div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">Active</span>
                          <FontAwesomeIcon icon={faLock} className="text-green-600 text-xs" />
                        </div>
                        <div className="text-xs text-slate-500 mt-1">Auto-renew enabled</div>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-lg">
                        <div className="text-xs text-slate-500 mb-1">DNS Status</div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">Verified</span>
                          <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 text-xs" />
                        </div>
                        <div className="text-xs text-slate-500 mt-1">Last checked 5 min ago</div>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-lg">
                        <div className="text-xs text-slate-500 mb-1">Primary Domain</div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-medium">Yes</span>
                          <FontAwesomeIcon icon={faStar} className="text-blue-600 text-xs" />
                        </div>
                        <div className="text-xs text-slate-500 mt-1">Default for site</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                        View DNS Records
                      </button>
                      <button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                        Configure
                      </button>
                      <button className="px-4 py-2 bg-white border border-red-300 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors ml-auto">
                        Disconnect
                      </button>
                    </div>
                  </div>
                </div>

                {/* Pending Domain */}
                <div className="border border-amber-200 rounded-lg overflow-hidden">
                  <div className="p-5 bg-amber-50 border-b border-amber-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faGlobe} className="text-amber-500 text-xl" />
                        <div>
                          <div className="font-mono font-semibold text-slate-900">www.mybusiness.com</div>
                          <div className="text-xs text-slate-500 mt-0.5">Added 3 days ago</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium flex items-center gap-1.5">
                          <FontAwesomeIcon icon={faClock} className="text-xs" />
                          Waiting for DNS
                        </span>
                        <button className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-white rounded-lg transition-colors">
                          <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <FontAwesomeIcon icon={faTriangleExclamation} className="text-amber-600 mt-0.5" />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-amber-900 mb-1">DNS propagation in progress</div>
                          <div className="text-xs text-amber-700">We&apos;re waiting for your DNS changes to propagate. This usually takes 15 minutes to 48 hours. Check status below or wait for our notification.</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                        <FontAwesomeIcon icon={faRotate} />
                        Check DNS Status
                      </button>
                      <button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                        View DNS Records
                      </button>
                    </div>
                  </div>
                </div>

                {/* Error Domain */}
                <div className="border border-red-200 rounded-lg overflow-hidden">
                  <div className="p-5 bg-red-50 border-b border-red-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faGlobe} className="text-red-500 text-xl" />
                        <div>
                          <div className="font-mono font-semibold text-slate-900">shop.mybusiness.com</div>
                          <div className="text-xs text-slate-500 mt-0.5">Added 1 day ago</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium flex items-center gap-1.5">
                          <FontAwesomeIcon icon={faCircleXmark} className="text-xs" />
                          Error
                        </span>
                        <button className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-white rounded-lg transition-colors">
                          <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <FontAwesomeIcon icon={faCircleXmark} className="text-red-600 mt-0.5" />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-red-900 mb-1">DNS configuration error detected</div>
                          <div className="text-xs text-red-700 mb-2">The DNS records for this domain are incorrect or incomplete. Please verify your DNS settings match our requirements exactly.</div>
                          <button className="text-xs text-red-700 font-medium hover:text-red-800 flex items-center gap-1">
                            View troubleshooting guide
                            <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                        <FontAwesomeIcon icon={faWrench} />
                        Fix DNS Issues
                      </button>
                      <button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                        View DNS Records
                      </button>
                      <button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                        Contact Support
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SSL Certificate Section */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mb-6">
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

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <FontAwesomeIcon icon={faLock} className="text-green-600 text-xl" />
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">Active</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">3</div>
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
                    <div className="text-xs text-slate-600">PMC Engine automatically provisions, renews, and manages SSL/TLS certificates for all your domains using Let&apos;s Encrypt. Certificates are renewed 30 days before expiration with zero downtime.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Help Section */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faBook} className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Domain Setup Guide</h3>
                <p className="text-sm text-slate-600 mb-4">Step-by-step instructions for connecting your domain from popular registrars like GoDaddy, Namecheap, and Cloudflare.</p>
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
                <p className="text-sm text-slate-600 mb-4">Our support team is here to help you with domain configuration, DNS issues, and SSL certificate problems.</p>
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
