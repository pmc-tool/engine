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
  faListUl,
  faDownload,
  faRotate,
  faMagnifyingGlass,
  faRocket,
  faWandMagicSparkles,
  faFileLines,
  faTriangleExclamation,
  faUser,
  faCodeBranch,
  faHashtag,
  faPencil,
  faFileImage,
  faShieldHalved,
  faCertificate,
  faImage,
  faDatabase,
  faClock,
  faHardDrive,
  faCircleCheck,
  faCircleXmark,
  faCircle,
  faChartLine,
  faFileCsv,
  faFileCode,
  faFolder,
  faBolt,
  faUserTag,
  faGlobe,
  faCheck,
  faEllipsisVertical
} from '@fortawesome/free-solid-svg-icons';

export default function LogsPage() {
  const params = useParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const site = mockSites.find(s => s.id === params.id) || mockSites[0];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'deployments', label: 'Deployments' },
    { id: 'ai', label: 'AI' },
    { id: 'content', label: 'Content' },
    { id: 'security', label: 'Security' },
    { id: 'errors', label: 'Errors' }
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
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Logs & Activity</h1>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">Production</span>
                  </div>
                  <p className="text-slate-600">View and monitor all changes, deployments, and system events for your site</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
                    <FontAwesomeIcon icon={faDownload} />
                    Export Logs
                  </button>
                  <button className="px-4 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
                    <FontAwesomeIcon icon={faRotate} />
                    Refresh
                  </button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Total Events</span>
                    <FontAwesomeIcon icon={faListUl} className="text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">1,247</div>
                  <div className="text-xs text-slate-500 mt-1">Last 30 days</div>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Deployments</span>
                    <FontAwesomeIcon icon={faRocket} className="text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">34</div>
                  <div className="text-xs text-slate-500 mt-1">18 successful</div>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">AI Actions</span>
                    <FontAwesomeIcon icon={faWandMagicSparkles} className="text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">127</div>
                  <div className="text-xs text-slate-500 mt-1">42 Connects used</div>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Errors</span>
                    <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">3</div>
                  <div className="text-xs text-slate-500 mt-1">All resolved</div>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <TabNavigation />

            {/* Filters Section */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm mb-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                <div className="md:col-span-2">
                  <label className="text-xs font-medium text-slate-700 mb-2 block">Search logs</label>
                  <div className="relative">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search by keyword, user, or action..."
                      className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-700 mb-2 block">Event Type</label>
                  <select className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Events</option>
                    <option>Deployments</option>
                    <option>AI Actions</option>
                    <option>Content Changes</option>
                    <option>Domain Changes</option>
                    <option>Security Events</option>
                    <option>User Actions</option>
                    <option>System Events</option>
                    <option>Errors</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-700 mb-2 block">Time Range</label>
                  <select className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Last 24 hours</option>
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                    <option>Custom range</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-700 mb-2 block">Severity</label>
                  <select className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Levels</option>
                    <option>Info</option>
                    <option>Success</option>
                    <option>Warning</option>
                    <option>Error</option>
                    <option>Critical</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                        activeFilter === filter.id
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Clear all filters</button>
              </div>
            </div>

            {/* Activity Timeline */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm mb-6">
              <div className="p-5 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-slate-900">Activity Timeline</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-600">Showing 247 results</span>
                    <button className="p-2 text-slate-400 hover:text-slate-600">
                      <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-slate-200">
                {/* Deployment Success */}
                <div className="p-5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                      <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">DEPLOYMENT</span>
                          <h3 className="font-semibold text-slate-900">Production deployment successful</h3>
                        </div>
                        <span className="text-sm text-slate-500">2 minutes ago</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">Version 2.4.1 deployed to production environment. Build completed in 47 seconds.</p>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faUser} />
                          <span>Alex Turner</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faCodeBranch} />
                          <span>main</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faHashtag} />
                          <span>d4f8a2b</span>
                        </span>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <button className="px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-50 rounded">View deployment</button>
                        <button className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded">View build log</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Content Generation */}
                <div className="p-5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-purple-500 rounded-full flex-shrink-0"></div>
                      <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded">AI ACTION</span>
                          <h3 className="font-semibold text-slate-900">Content regenerated with AI</h3>
                        </div>
                        <span className="text-sm text-slate-500">18 minutes ago</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">Hero section headline and subtext regenerated. Used 3 Connects.</p>
                      <div className="bg-slate-50 rounded-lg p-3 mb-3">
                        <div className="text-xs font-medium text-slate-700 mb-2">Changes:</div>
                        <div className="space-y-1 text-xs">
                          <div className="flex items-start gap-2">
                            <span className="text-red-600">-</span>
                            <span className="text-slate-600 line-through">Transform Your Business with Technology</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-green-600">+</span>
                            <span className="text-slate-900">Revolutionize Your Digital Experience</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faUser} />
                          <span>Alex Turner</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faBolt} />
                          <span>3 Connects</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faFileLines} />
                          <span>Hero Section</span>
                        </span>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <button className="px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-50 rounded">View changes</button>
                        <button className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded">Revert</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Update */}
                <div className="p-5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">CONTENT</span>
                          <h3 className="font-semibold text-slate-900">Services section updated</h3>
                        </div>
                        <span className="text-sm text-slate-500">1 hour ago</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">Manual edit: Added new service &quot;Cloud Migration&quot; to services list</p>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faUser} />
                          <span>Sarah Chen</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faPencil} />
                          <span>Manual edit</span>
                        </span>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <button className="px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-50 rounded">View content</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* File Upload */}
                <div className="p-5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-amber-500 rounded-full flex-shrink-0"></div>
                      <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded">FILE</span>
                          <h3 className="font-semibold text-slate-900">Images uploaded</h3>
                        </div>
                        <span className="text-sm text-slate-500">2 hours ago</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">5 new images uploaded to /assets/images/products/</p>
                      <div className="bg-slate-50 rounded-lg p-3 mb-3">
                        <div className="grid grid-cols-5 gap-2">
                          <div className="aspect-square bg-slate-200 rounded"></div>
                          <div className="aspect-square bg-slate-200 rounded"></div>
                          <div className="aspect-square bg-slate-200 rounded"></div>
                          <div className="aspect-square bg-slate-200 rounded"></div>
                          <div className="aspect-square bg-slate-200 rounded flex items-center justify-center text-xs text-slate-500">+1</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faUser} />
                          <span>Mike Johnson</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faFileImage} />
                          <span>5 files (2.4 MB)</span>
                        </span>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <button className="px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-50 rounded">View files</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SSL Renewal */}
                <div className="p-5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-cyan-500 rounded-full flex-shrink-0"></div>
                      <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-1 bg-cyan-100 text-cyan-700 text-xs font-medium rounded">DOMAIN</span>
                          <h3 className="font-semibold text-slate-900">SSL certificate renewed</h3>
                        </div>
                        <span className="text-sm text-slate-500">3 hours ago</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">SSL certificate for {site.domain} automatically renewed. Valid until Dec 15, 2025.</p>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faShieldHalved} />
                          <span>System</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faCertificate} />
                          <span>Let&apos;s Encrypt</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Image Generation */}
                <div className="p-5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-purple-500 rounded-full flex-shrink-0"></div>
                      <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded">AI ACTION</span>
                          <h3 className="font-semibold text-slate-900">Image generated with AI</h3>
                        </div>
                        <span className="text-sm text-slate-500">5 hours ago</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">Hero background image generated. Prompt: &quot;Modern tech office with diverse team collaborating&quot;</p>
                      <div className="bg-slate-50 rounded-lg p-3 mb-3">
                        <div className="h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded"></div>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faUser} />
                          <span>Alex Turner</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faBolt} />
                          <span>1 Connect</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faImage} />
                          <span>1920x1080</span>
                        </span>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <button className="px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-50 rounded">View image</button>
                        <button className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded">Regenerate</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Database Backup */}
                <div className="p-5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full flex-shrink-0"></div>
                      <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded">DATABASE</span>
                          <h3 className="font-semibold text-slate-900">Database backup created</h3>
                        </div>
                        <span className="text-sm text-slate-500">6 hours ago</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">Automatic daily backup completed successfully. Size: 128 MB</p>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faDatabase} />
                          <span>System</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faClock} />
                          <span>Automated</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faHardDrive} />
                          <span>128 MB</span>
                        </span>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <button className="px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-50 rounded">Download Backup</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security Scan */}
                <div className="p-5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-indigo-500 rounded-full flex-shrink-0"></div>
                      <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded">SECURITY</span>
                          <h3 className="font-semibold text-slate-900">Security scan completed</h3>
                        </div>
                        <span className="text-sm text-slate-500">8 hours ago</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">Weekly security scan completed. No vulnerabilities detected.</p>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faCircleCheck} className="text-green-600" />
                          <span className="text-sm font-medium text-green-900">All checks passed</span>
                        </div>
                        <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                          <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                            <span className="text-slate-700">SSL/TLS configuration</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                            <span className="text-slate-700">Firewall rules</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                            <span className="text-slate-700">Dependencies</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                            <span className="text-slate-700">Access controls</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faShieldHalved} />
                          <span>System</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faClock} />
                          <span>Automated weekly</span>
                        </span>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <button className="px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-50 rounded">View full report</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Error Log */}
                <div className="p-5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                      <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded">ERROR</span>
                          <h3 className="font-semibold text-slate-900">Deployment failed</h3>
                        </div>
                        <span className="text-sm text-slate-500">12 hours ago</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">Build failed due to syntax error in custom CSS file</p>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-3">
                        <div className="text-xs font-medium text-red-900 mb-2">Error Details:</div>
                        <div className="font-mono text-xs text-red-800 bg-red-100 p-2 rounded">
                          <div>Error: Unexpected token at line 147</div>
                          <div className="mt-1 text-slate-600">File: /assets/css/custom.css</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faUser} />
                          <span>Mike Johnson</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faCodeBranch} />
                          <span>main</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faCircleXmark} className="text-red-600" />
                          <span>Resolved</span>
                        </span>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <button className="px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-50 rounded">View build log</button>
                        <button className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded">View resolution</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team Member Added */}
                <div className="p-5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-teal-500 rounded-full flex-shrink-0"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded">USER</span>
                          <h3 className="font-semibold text-slate-900">Team member invited</h3>
                        </div>
                        <span className="text-sm text-slate-500">1 day ago</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">emma.wilson@techflow.com invited as Editor</p>
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faUser} />
                          <span>Alex Turner</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faUserTag} />
                          <span>Editor role</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination */}
              <div className="p-5 border-t border-slate-200">
                <div className="flex items-center justify-center gap-3">
                  <button className="px-4 py-2 border border-slate-300 rounded-lg text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2">
                    Previous
                  </button>
                  <div className="flex items-center gap-1">
                    <button className="w-8 h-8 bg-blue-600 text-white rounded text-sm font-medium">1</button>
                    <button className="w-8 h-8 text-slate-700 hover:bg-slate-50 rounded text-sm">2</button>
                    <button className="w-8 h-8 text-slate-700 hover:bg-slate-50 rounded text-sm">3</button>
                    <span className="px-2 text-slate-500">...</span>
                    <button className="w-8 h-8 text-slate-700 hover:bg-slate-50 rounded text-sm">12</button>
                  </div>
                  <button className="px-4 py-2 border border-slate-300 rounded-lg text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2">
                    Next
                  </button>
                </div>
              </div>
            </div>

            {/* Analytics Section */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Activity Analytics</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Events by Type</h3>
                  <div className="h-64 flex items-center justify-center text-slate-400">
                    <FontAwesomeIcon icon={faChartLine} className="text-4xl" />
                  </div>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Activity Timeline</h3>
                  <div className="h-64 flex items-center justify-center text-slate-400">
                    <FontAwesomeIcon icon={faChartLine} className="text-4xl" />
                  </div>
                </div>
              </div>
            </div>

            {/* Insights Section */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Insights & Recommendations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={faChartLine} className="text-green-600 text-xl" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">98.5%</div>
                      <div className="text-sm text-slate-600">Uptime</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700">Your site has been highly reliable this month with minimal downtime.</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={faRocket} className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">34</div>
                      <div className="text-sm text-slate-600">Deployments</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700">Average deployment time: 42 seconds. 12% faster than last month.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={faWandMagicSparkles} className="text-purple-600 text-xl" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">127</div>
                      <div className="text-sm text-slate-600">AI Actions</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700">You&apos;ve saved ~18 hours of manual content editing with AI assistance.</p>
                </div>
              </div>
            </div>

            {/* Export Options */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Export Activity Logs</h2>
                  <p className="text-slate-300">Download your complete activity history for compliance or analysis</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-6 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-2">
                    <FontAwesomeIcon icon={faFileCsv} />
                    <span>Export as CSV</span>
                  </button>
                  <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors flex items-center gap-2">
                    <FontAwesomeIcon icon={faFileCode} />
                    <span>Export as JSON</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
