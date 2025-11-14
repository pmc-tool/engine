'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import TopHeader from '@/components/layout/TopHeader';
import MobileMenu from '@/components/layout/MobileMenu';
import TabNavigation from '@/components/ui/TabNavigation';
import ToggleSwitch from '@/components/ui/ToggleSwitch';
import { mockSites } from '@/lib/mockData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faUpload,
  faImage,
  faWandMagicSparkles,
  faUserGear,
  faShieldHalved
} from '@fortawesome/free-solid-svg-icons';

export default function SettingsPage() {
  const params = useParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('general');
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const site = mockSites.find(s => s.id === params.id) || mockSites[0];

  // Form states
  const [siteName, setSiteName] = useState('My Business Website');
  const [language, setLanguage] = useState('English (US)');
  const [timezone, setTimezone] = useState('Eastern Time (GMT-5:00)');
  const [description, setDescription] = useState('A modern business website showcasing our products and services.');
  const [primaryColor, setPrimaryColor] = useState('#2563eb');
  const [secondaryColor, setSecondaryColor] = useState('#64748b');
  const [accentColor, setAccentColor] = useState('#10b981');

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

        <TabNavigation />

        <main className="flex-1 overflow-y-auto bg-slate-50">
          {/* Page Header */}
          <div className="px-4 md:px-8 pt-6 pb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Site Settings</h1>
            <p className="text-sm md:text-base text-slate-600">
              Configure general settings, branding, developer access, and advanced options for your site.
            </p>
          </div>

          {/* Settings Tabs */}
          <div className="bg-white border-b border-slate-200 sticky top-16 z-40 px-4 md:px-8">
            <div className="flex gap-4 md:gap-8 overflow-x-auto">
              <button
                onClick={() => setActiveTab('general')}
                className={`py-4 text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'general'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                General
              </button>
              <button
                onClick={() => setActiveTab('brand')}
                className={`py-4 text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'brand'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Brand
              </button>
              <button
                onClick={() => setActiveTab('developer')}
                className={`py-4 text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'developer'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Developer Access
              </button>
              <button
                onClick={() => setActiveTab('danger')}
                className={`py-4 text-sm font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'danger'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Danger Zone
              </button>
            </div>
          </div>

          {/* General Tab */}
          {activeTab === 'general' && (
            <div className="px-4 md:px-8 py-6 space-y-6">
              {/* General Settings Section */}
              <div className="bg-white rounded-xl border border-slate-200 p-4 md:p-6">
                <div className="mb-6">
                  <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-1">General Settings</h2>
                  <p className="text-sm text-slate-600">Basic configuration for your site</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Site Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={siteName}
                      onChange={(e) => setSiteName(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <p className="text-xs text-slate-500 mt-1.5">
                      This name is used for internal reference and site identification.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Content Language <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option>English (US)</option>
                        <option>English (UK)</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                        <option>Italian</option>
                        <option>Portuguese</option>
                        <option>Japanese</option>
                        <option>Chinese (Simplified)</option>
                        <option>Chinese (Traditional)</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <FontAwesomeIcon icon={faChevronDown} className="text-slate-400" />
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-1.5">
                      Primary language for your site content. This affects AI-generated content and default text.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      Time Zone <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option>UTC (GMT+0:00)</option>
                        <option>Eastern Time (GMT-5:00)</option>
                        <option>Central Time (GMT-6:00)</option>
                        <option>Mountain Time (GMT-7:00)</option>
                        <option>Pacific Time (GMT-8:00)</option>
                        <option>Alaska Time (GMT-9:00)</option>
                        <option>Hawaii Time (GMT-10:00)</option>
                        <option>London (GMT+0:00)</option>
                        <option>Paris (GMT+1:00)</option>
                        <option>Tokyo (GMT+9:00)</option>
                        <option>Sydney (GMT+10:00)</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <FontAwesomeIcon icon={faChevronDown} className="text-slate-400" />
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-1.5">
                      Used for scheduling, logs, and analytics timestamps.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Site Description</label>
                    <textarea
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Enter a brief description of your site..."
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                    <p className="text-xs text-slate-500 mt-1.5">
                      Optional description for internal reference and SEO purposes.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-slate-900">Maintenance Mode</span>
                          <span className={`px-2 py-0.5 text-xs font-medium rounded ${
                            maintenanceMode ? 'bg-orange-200 text-orange-700' : 'bg-slate-200 text-slate-600'
                          }`}>
                            {maintenanceMode ? 'On' : 'Off'}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600">
                          Enable to show a maintenance page to visitors while you work on your site.
                        </p>
                      </div>
                      <ToggleSwitch enabled={maintenanceMode} onChange={setMaintenanceMode} />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 mt-8 pt-6 border-t border-slate-200">
                  <button className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Save Changes
                  </button>
                  <button className="w-full sm:w-auto px-6 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors">
                    Cancel
                  </button>
                </div>
              </div>

              {/* Site Metadata Section */}
              <div className="bg-white rounded-xl border border-slate-200 p-4 md:p-6">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-slate-900 mb-1">Site Metadata</h2>
                  <p className="text-sm text-slate-600">Information about your site's creation and current status</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="text-xs text-slate-500 uppercase font-medium mb-1">Created On</div>
                    <div className="text-base font-semibold text-slate-900">December 10, 2024</div>
                    <div className="text-xs text-slate-500 mt-0.5">15 days ago</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="text-xs text-slate-500 uppercase font-medium mb-1">Last Modified</div>
                    <div className="text-base font-semibold text-slate-900">December 24, 2024</div>
                    <div className="text-xs text-slate-500 mt-0.5">1 hour ago</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="text-xs text-slate-500 uppercase font-medium mb-1">Site ID</div>
                    <div className="text-base font-mono text-slate-900">site_abc123xyz789</div>
                    <button className="text-xs text-blue-600 hover:text-blue-700 font-medium mt-1">Copy ID</button>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="text-xs text-slate-500 uppercase font-medium mb-1">Current Plan</div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-semibold text-slate-900">Pro Trial</span>
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-xs font-medium">
                        13 days left
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Brand Tab */}
          {activeTab === 'brand' && (
            <div className="px-4 md:px-8 py-6 space-y-6">
              {/* Brand Assets Section */}
              <div className="bg-white rounded-xl border border-slate-200 p-4 md:p-6">
                <div className="mb-6">
                  <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-1">Brand Assets</h2>
                  <p className="text-sm text-slate-600">Upload your logos and favicon to customize your site's appearance</p>
                </div>

                <div className="space-y-6">
                  {/* Dark Logo */}
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-3">Dark Logo</label>
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div className="w-full md:w-48 h-32 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center bg-white">
                        <div className="text-center">
                          <FontAwesomeIcon icon={faImage} className="text-slate-400 text-3xl mb-2" />
                          <div className="text-xs text-slate-500">No logo uploaded</div>
                        </div>
                      </div>
                      <div className="flex-1 w-full">
                        <button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors mb-2 flex items-center gap-2">
                          <FontAwesomeIcon icon={faUpload} />
                          Upload Dark Logo
                        </button>
                        <p className="text-xs text-slate-500 mb-2">
                          Recommended: PNG or SVG, max 2MB. Used on light backgrounds.
                        </p>
                        <p className="text-xs text-slate-500">Ideal dimensions: 400x100px or similar aspect ratio.</p>
                      </div>
                    </div>
                  </div>

                  {/* Light Logo */}
                  <div className="border-t border-slate-200 pt-6">
                    <label className="block text-sm font-medium text-slate-900 mb-3">Light Logo</label>
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div className="w-full md:w-48 h-32 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center bg-slate-900">
                        <div className="text-center">
                          <FontAwesomeIcon icon={faImage} className="text-slate-600 text-3xl mb-2" />
                          <div className="text-xs text-slate-500">No logo uploaded</div>
                        </div>
                      </div>
                      <div className="flex-1 w-full">
                        <button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors mb-2 flex items-center gap-2">
                          <FontAwesomeIcon icon={faUpload} />
                          Upload Light Logo
                        </button>
                        <p className="text-xs text-slate-500 mb-2">
                          Recommended: PNG or SVG, max 2MB. Used on dark backgrounds.
                        </p>
                        <p className="text-xs text-slate-500">Ideal dimensions: 400x100px or similar aspect ratio.</p>
                      </div>
                    </div>
                  </div>

                  {/* Favicon */}
                  <div className="border-t border-slate-200 pt-6">
                    <label className="block text-sm font-medium text-slate-900 mb-3">Favicon</label>
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div className="w-32 h-32 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center bg-slate-50">
                        <div className="text-center">
                          <FontAwesomeIcon icon={faImage} className="text-slate-400 text-3xl mb-2" />
                          <div className="text-xs text-slate-500">No favicon</div>
                        </div>
                      </div>
                      <div className="flex-1 w-full">
                        <button className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors mb-2 flex items-center gap-2">
                          <FontAwesomeIcon icon={faUpload} />
                          Upload Favicon
                        </button>
                        <p className="text-xs text-slate-500 mb-2">
                          Recommended: PNG or ICO, 32x32px or 64x64px, max 100KB.
                        </p>
                        <p className="text-xs text-slate-500">Appears in browser tabs and bookmarks.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faWandMagicSparkles} className="text-blue-600 mt-0.5" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-blue-900 mb-1">Need brand assets?</div>
                      <div className="text-xs text-blue-700 mb-3">
                        Use the AI Content Assistant to generate professional logos and brand assets tailored to your business.
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
                        <FontAwesomeIcon icon={faWandMagicSparkles} />
                        AI Assistant
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 mt-8 pt-6 border-t border-slate-200">
                  <button className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Save Brand Assets
                  </button>
                  <button className="w-full sm:w-auto px-6 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors">
                    Cancel
                  </button>
                </div>
              </div>

              {/* Brand Colors Section */}
              <div className="bg-white rounded-xl border border-slate-200 p-4 md:p-6">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-slate-900 mb-1">Brand Colors</h2>
                  <p className="text-sm text-slate-600">
                    Define your primary brand colors (optional - theme will use defaults if not set)
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Primary Color</label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="w-16 h-12 rounded-lg border border-slate-300 cursor-pointer"
                      />
                      <input
                        type="text"
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="flex-1 px-4 py-3 border border-slate-300 rounded-lg text-slate-900 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Secondary Color</label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={secondaryColor}
                        onChange={(e) => setSecondaryColor(e.target.value)}
                        className="w-16 h-12 rounded-lg border border-slate-300 cursor-pointer"
                      />
                      <input
                        type="text"
                        value={secondaryColor}
                        onChange={(e) => setSecondaryColor(e.target.value)}
                        className="flex-1 px-4 py-3 border border-slate-300 rounded-lg text-slate-900 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Accent Color</label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={accentColor}
                        onChange={(e) => setAccentColor(e.target.value)}
                        className="w-16 h-12 rounded-lg border border-slate-300 cursor-pointer"
                      />
                      <input
                        type="text"
                        value={accentColor}
                        onChange={(e) => setAccentColor(e.target.value)}
                        className="flex-1 px-4 py-3 border border-slate-300 rounded-lg text-slate-900 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 mt-8 pt-6 border-t border-slate-200">
                  <button className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Save Colors
                  </button>
                  <button className="w-full sm:w-auto px-6 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors">
                    Reset to Defaults
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Developer Access Tab */}
          {activeTab === 'developer' && (
            <div className="px-4 md:px-8 py-6 space-y-6">
              {/* Developer Access Intro */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border border-purple-200 p-4 md:p-6">
                <div className="flex flex-col md:flex-row items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon icon={faUserGear} className="text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-slate-900 mb-2">Developer Access Management</h2>
                    <p className="text-sm text-slate-600 mb-4">
                      Grant developers you've hired on PackMyCode secure, time-limited access to your site. You control
                      exactly what they can access and for how long.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-purple-700">
                      <FontAwesomeIcon icon={faShieldHalved} />
                      <span className="font-medium">All access is logged and can be revoked instantly</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Invite Developer Section */}
              <div className="bg-white rounded-xl border border-slate-200 p-4 md:p-6">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-slate-900 mb-1">Invite Developer</h2>
                  <p className="text-sm text-slate-600">Send an access invitation to a developer</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Developer Email</label>
                    <input
                      type="email"
                      placeholder="developer@example.com"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Access Role</label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>Content only - Can edit pages and content</option>
                        <option>Content + AI Assistant - Can edit content and use AI tools</option>
                        <option>Content + Files + Logs - Can manage content, files, and view logs</option>
                        <option>Full Access - Can access all features except billing</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <FontAwesomeIcon icon={faChevronDown} className="text-slate-400" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Access Duration</label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>1 week</option>
                        <option>2 weeks</option>
                        <option>1 month</option>
                        <option>3 months</option>
                        <option>6 months</option>
                        <option>1 year</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <FontAwesomeIcon icon={faChevronDown} className="text-slate-400" />
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-1.5">Access will automatically expire after this period</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
                  <button className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Send Invitation
                  </button>
                  <button className="w-full sm:w-auto px-6 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Danger Zone Tab */}
          {activeTab === 'danger' && (
            <div className="px-4 md:px-8 py-6 space-y-6">
              <div className="bg-white rounded-xl border border-red-200 p-4 md:p-6">
                <div className="mb-6">
                  <h2 className="text-lg md:text-xl font-semibold text-red-900 mb-1">Danger Zone</h2>
                  <p className="text-sm text-slate-600">
                    Irreversible and destructive actions. Please be certain before proceeding.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 border border-slate-200 rounded-lg">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-slate-900 mb-1">Delete this site</h3>
                        <p className="text-sm text-slate-600">
                          Once you delete a site, there is no going back. This will permanently delete all content, files,
                          and settings.
                        </p>
                      </div>
                      <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors whitespace-nowrap">
                        Delete Site
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
