'use client';

import { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import TopHeader from '@/components/layout/TopHeader';
import MobileMenu from '@/components/layout/MobileMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faBell,
  faLock,
  faCreditCard,
  faGlobe,
  faShieldHalved,
  faCheck,
  faPlus
} from '@fortawesome/free-solid-svg-icons';

export default function SettingsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopHeader
          title="Settings"
          subtitle="Manage your account settings and preferences"
          onMenuToggle={() => setIsMobileMenuOpen(true)}
          showSiteSwitcher={false}
        />

        <main className="flex-1 overflow-y-auto bg-slate-50">
          <div className="p-4 md:p-8">
            {/* Tabs */}
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-6">
              <div className="border-b border-slate-200 overflow-x-auto">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === 'profile'
                        ? 'border-pmc-red text-pmc-red'
                        : 'border-transparent text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    Profile
                  </button>
                  <button
                    onClick={() => setActiveTab('notifications')}
                    className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === 'notifications'
                        ? 'border-pmc-red text-pmc-red'
                        : 'border-transparent text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <FontAwesomeIcon icon={faBell} className="mr-2" />
                    Notifications
                  </button>
                  <button
                    onClick={() => setActiveTab('security')}
                    className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === 'security'
                        ? 'border-pmc-red text-pmc-red'
                        : 'border-transparent text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <FontAwesomeIcon icon={faLock} className="mr-2" />
                    Security
                  </button>
                  <button
                    onClick={() => setActiveTab('billing')}
                    className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === 'billing'
                        ? 'border-pmc-red text-pmc-red'
                        : 'border-transparent text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <FontAwesomeIcon icon={faCreditCard} className="mr-2" />
                    Billing
                  </button>
                  <button
                    onClick={() => setActiveTab('preferences')}
                    className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === 'preferences'
                        ? 'border-pmc-red text-pmc-red'
                        : 'border-transparent text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <FontAwesomeIcon icon={faGlobe} className="mr-2" />
                    Preferences
                  </button>
                </div>
              </div>

              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-slate-900 mb-6">Profile Information</h2>

                  <div className="space-y-6">
                    <div className="flex items-center gap-6">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pmc-red to-pink-500 flex items-center justify-center text-white text-3xl font-bold">
                        JM
                      </div>
                      <div>
                        <button className="px-4 py-2 bg-pmc-red text-white rounded-lg text-sm font-medium hover:bg-pmc-red-dark transition-colors mr-2">
                          Change Photo
                        </button>
                        <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                        <input
                          type="text"
                          defaultValue="John"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          defaultValue="Mitchell"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                        <input
                          type="email"
                          defaultValue="john@pmcengine.com"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          defaultValue="+1 (555) 123-4567"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-slate-700 mb-2">Bio</label>
                        <textarea
                          rows={4}
                          defaultValue="Web developer and designer passionate about creating beautiful digital experiences."
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent"
                        ></textarea>
                      </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                      <button className="px-6 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                        Cancel
                      </button>
                      <button className="px-6 py-2 bg-pmc-red text-white rounded-lg text-sm font-medium hover:bg-pmc-red-dark transition-colors">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === 'notifications' && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-slate-900 mb-6">Notification Preferences</h2>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div>
                        <h3 className="font-medium text-slate-900">Email Notifications</h3>
                        <p className="text-sm text-slate-600">Receive updates and alerts via email</p>
                      </div>
                      <button
                        onClick={() => setEmailNotifications(!emailNotifications)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          emailNotifications ? 'bg-pmc-red' : 'bg-slate-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            emailNotifications ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div>
                        <h3 className="font-medium text-slate-900">Push Notifications</h3>
                        <p className="text-sm text-slate-600">Receive push notifications on your devices</p>
                      </div>
                      <button
                        onClick={() => setPushNotifications(!pushNotifications)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          pushNotifications ? 'bg-pmc-red' : 'bg-slate-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            pushNotifications ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>

                    <div className="border-t border-slate-200 pt-6">
                      <h3 className="font-medium text-slate-900 mb-4">Email Preferences</h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="w-4 h-4 text-pmc-red border-slate-300 rounded focus:ring-pmc-red" />
                          <span className="ml-3 text-sm text-slate-700">Deployment notifications</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="w-4 h-4 text-pmc-red border-slate-300 rounded focus:ring-pmc-red" />
                          <span className="ml-3 text-sm text-slate-700">Security alerts</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="w-4 h-4 text-pmc-red border-slate-300 rounded focus:ring-pmc-red" />
                          <span className="ml-3 text-sm text-slate-700">Product updates</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="w-4 h-4 text-pmc-red border-slate-300 rounded focus:ring-pmc-red" />
                          <span className="ml-3 text-sm text-slate-700">Marketing emails</span>
                        </label>
                      </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                      <button className="px-6 py-2 bg-pmc-red text-white rounded-lg text-sm font-medium hover:bg-pmc-red-dark transition-colors">
                        Save Preferences
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Security Tab */}
              {activeTab === 'security' && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-slate-900 mb-6">Security Settings</h2>

                  <div className="space-y-6">
                    <div className="p-5 border border-slate-200 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-medium text-slate-900 mb-1">Two-Factor Authentication</h3>
                          <p className="text-sm text-slate-600">Add an extra layer of security to your account</p>
                        </div>
                        <button
                          onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            twoFactorEnabled ? 'bg-green-600' : 'bg-slate-300'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                      {twoFactorEnabled && (
                        <div className="flex items-center gap-2 text-sm text-green-600">
                          <FontAwesomeIcon icon={faCheck} />
                          <span>Two-factor authentication is enabled</span>
                        </div>
                      )}
                    </div>

                    <div className="p-5 border border-slate-200 rounded-lg">
                      <h3 className="font-medium text-slate-900 mb-4">Change Password</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Current Password</label>
                          <input
                            type="password"
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">New Password</label>
                          <input
                            type="password"
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Confirm New Password</label>
                          <input
                            type="password"
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent"
                          />
                        </div>
                        <button className="px-6 py-2 bg-pmc-red text-white rounded-lg text-sm font-medium hover:bg-pmc-red-dark transition-colors">
                          Update Password
                        </button>
                      </div>
                    </div>

                    <div className="p-5 border border-slate-200 rounded-lg">
                      <h3 className="font-medium text-slate-900 mb-2">Active Sessions</h3>
                      <p className="text-sm text-slate-600 mb-4">Manage devices where you're currently logged in</p>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <div>
                            <p className="text-sm font-medium text-slate-900">MacBook Pro - Chrome</p>
                            <p className="text-xs text-slate-500">Last active: 2 minutes ago</p>
                          </div>
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">Current</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <div>
                            <p className="text-sm font-medium text-slate-900">iPhone 14 - Safari</p>
                            <p className="text-xs text-slate-500">Last active: 1 hour ago</p>
                          </div>
                          <button className="text-sm text-red-600 hover:text-red-700 font-medium">Revoke</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Billing Tab */}
              {activeTab === 'billing' && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-slate-900 mb-6">Billing & Subscription</h2>

                  <div className="space-y-6">
                    <div className="p-5 bg-gradient-to-br from-pmc-red to-pink-600 text-white rounded-xl">
                      <h3 className="text-lg font-semibold mb-2">Pro Plan</h3>
                      <p className="text-white/90 mb-4">$29/month • Renews on Jan 15, 2025</p>
                      <button className="px-4 py-2 bg-white text-pmc-red rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors">
                        Manage Subscription
                      </button>
                    </div>

                    <div className="p-5 border border-slate-200 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-medium text-slate-900">Payment Methods</h3>
                        <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors flex items-center gap-2">
                          <FontAwesomeIcon icon={faPlus} />
                          Add Card
                        </button>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-8 bg-slate-900 rounded flex items-center justify-center text-white text-xs font-bold">
                              VISA
                            </div>
                            <div>
                              <p className="text-sm font-medium text-slate-900">•••• •••• •••• 4242</p>
                              <p className="text-xs text-slate-500">Expires 12/2025</p>
                            </div>
                          </div>
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">Default</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Preferences Tab */}
              {activeTab === 'preferences' && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-slate-900 mb-6">Preferences</h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Language</label>
                      <select className="w-full md:w-96 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent">
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Timezone</label>
                      <select className="w-full md:w-96 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent">
                        <option>(UTC-08:00) Pacific Time</option>
                        <option>(UTC-05:00) Eastern Time</option>
                        <option>(UTC+00:00) UTC</option>
                        <option>(UTC+01:00) Central European Time</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Date Format</label>
                      <select className="w-full md:w-96 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent">
                        <option>MM/DD/YYYY</option>
                        <option>DD/MM/YYYY</option>
                        <option>YYYY-MM-DD</option>
                      </select>
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                      <button className="px-6 py-2 bg-pmc-red text-white rounded-lg text-sm font-medium hover:bg-pmc-red-dark transition-colors">
                        Save Preferences
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
