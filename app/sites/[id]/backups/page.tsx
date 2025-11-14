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
  faClockRotateLeft,
  faDatabase,
  faDownload,
  faRotate,
  faEllipsisVertical,
  faCheckCircle,
  faCircle,
  faClock,
  faHardDrive,
  faServer,
  faFolder,
  faToggleOn,
  faToggleOff,
  faCalendarDays,
  faShieldHalved,
  faCloud,
  faRocket,
  faArrowRotateRight,
  faBoxArchive,
  faTrash,
  faExclamationTriangle,
  faCircleCheck,
  faTimes,
  faInfoCircle,
  faBolt,
  faGlobe,
  faCodeBranch,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';

export default function BackupsPage() {
  const params = useParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [autoBackupEnabled, setAutoBackupEnabled] = useState(true);
  const [showRedeployModal, setShowRedeployModal] = useState(false);
  const [showRestoreModal, setShowRestoreModal] = useState(false);
  const [selectedBackup, setSelectedBackup] = useState<any>(null);
  const [isDeploying, setIsDeploying] = useState(false);

  const site = mockSites.find(s => s.id === params.id) || mockSites[0];

  const handleRedeploy = () => {
    setIsDeploying(true);
    setTimeout(() => {
      setIsDeploying(false);
      setShowRedeployModal(false);
      alert('Site redeployed successfully!');
    }, 3000);
  };

  const handleRestore = (backup: any) => {
    setSelectedBackup(backup);
    setShowRestoreModal(true);
  };

  const confirmRestore = () => {
    setShowRestoreModal(false);
    alert('Restoring backup: ' + (selectedBackup?.name || ''));
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
              <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full mb-4">
                    <FontAwesomeIcon icon={faClockRotateLeft} className="text-blue-600" />
                    <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Automated Protection
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-display font-bold mb-3 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                    Backups & Redeploy
                  </h1>
                  <p className="text-lg text-slate-600 max-w-2xl">Manage backups, restore previous versions, and redeploy your site with confidence</p>
                </div>
                <div className="hidden md:flex gap-3">
                  <button className="px-5 py-3 bg-white border-2 border-slate-300 text-slate-700 rounded-xl text-sm font-semibold hover:border-blue-500 hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                    <FontAwesomeIcon icon={faDownload} />
                    Export Backup
                  </button>
                  <button className="px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-sm font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                    <FontAwesomeIcon icon={faBoxArchive} />
                    Create Backup Now
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Tab Navigation */}
              <TabNavigation />

              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 mt-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FontAwesomeIcon icon={faDatabase} className="text-white text-xl" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">24</div>
                  <div className="text-sm text-slate-600">Total Backups</div>
                  <div className="text-xs text-slate-500 mt-1">Last 30 days</div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FontAwesomeIcon icon={faHardDrive} className="text-white text-xl" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">2.8 GB</div>
                  <div className="text-sm text-slate-600">Storage Used</div>
                  <div className="text-xs text-slate-500 mt-1">of 10 GB limit</div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FontAwesomeIcon icon={faClock} className="text-white text-xl" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">2h ago</div>
                  <div className="text-sm text-slate-600">Last Backup</div>
                  <div className="text-xs text-slate-500 mt-1">Automatic daily</div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FontAwesomeIcon icon={faRotate} className="text-white text-xl" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">3</div>
                  <div className="text-sm text-slate-600">Restorations</div>
                  <div className="text-xs text-slate-500 mt-1">This month</div>
                </div>
              </div>

            {/* Auto Backup Settings */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mb-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-1">Automatic Backup Settings</h2>
                  <p className="text-sm text-slate-600">Configure automated backup schedule and retention policy</p>
                </div>
                <button
                  onClick={() => setAutoBackupEnabled(!autoBackupEnabled)}
                  className="flex items-center gap-2"
                >
                  <span className="text-sm font-medium text-slate-700">
                    {autoBackupEnabled ? 'Enabled' : 'Disabled'}
                  </span>
                  <FontAwesomeIcon
                    icon={autoBackupEnabled ? faToggleOn : faToggleOff}
                    className={`text-3xl ${autoBackupEnabled ? 'text-blue-600' : 'text-slate-400'}`}
                  />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <label className="text-xs font-medium text-slate-700 mb-2 block">Backup Frequency</label>
                  <select className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Daily at 2:00 AM</option>
                    <option>Every 12 hours</option>
                    <option>Every 6 hours</option>
                    <option>Weekly</option>
                  </select>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <label className="text-xs font-medium text-slate-700 mb-2 block">Retention Period</label>
                  <select className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>30 days</option>
                    <option>60 days</option>
                    <option>90 days</option>
                    <option>1 year</option>
                    <option>Forever</option>
                  </select>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <label className="text-xs font-medium text-slate-700 mb-2 block">Backup Components</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span>Files & Media</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span>Database</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Backup List */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm mb-6">
              <div className="p-5 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-slate-900">Backup History</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-600">Showing 24 backups</span>
                    <button className="p-2 text-slate-400 hover:text-slate-600">
                      <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-slate-200">
                {/* Latest Backup */}
                <div className="p-5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 text-xl" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-slate-900">Automatic Daily Backup</h3>
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full flex items-center gap-1">
                            <FontAwesomeIcon icon={faCircle} className="text-xs" />
                            Complete
                          </span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">Latest</span>
                        </div>
                        <p className="text-sm text-slate-600 mb-3">Full site backup including all files, database, and configurations</p>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faCalendarDays} />
                            <span>Today at 2:00 AM</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faHardDrive} />
                            <span>124 MB</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faFolder} />
                            <span>1,247 files</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faDatabase} />
                            <span>Database included</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-50 rounded-lg">
                        <FontAwesomeIcon icon={faDownload} className="mr-1" />
                        Download
                      </button>
                      <button
                        onClick={() => handleRestore({ name: 'Automatic Daily Backup', date: 'Today at 2:00 AM' })}
                        className="px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
                      >
                        <FontAwesomeIcon icon={faRotate} className="mr-1" />
                        Restore
                      </button>
                    </div>
                  </div>
                </div>

                {/* Yesterday's Backup */}
                <div className="p-5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600 text-xl" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-slate-900">Pre-deployment Backup</h3>
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full flex items-center gap-1">
                            <FontAwesomeIcon icon={faCircle} className="text-xs" />
                            Complete
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 mb-3">Manual backup created before major deployment</p>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faCalendarDays} />
                            <span>Yesterday at 6:42 PM</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faHardDrive} />
                            <span>122 MB</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faFolder} />
                            <span>1,243 files</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faDatabase} />
                            <span>Database included</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-50 rounded-lg">
                        <FontAwesomeIcon icon={faDownload} className="mr-1" />
                        Download
                      </button>
                      <button
                        onClick={() => handleRestore({ name: 'Pre-deployment Backup', date: 'Yesterday at 6:42 PM' })}
                        className="px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
                      >
                        <FontAwesomeIcon icon={faRotate} className="mr-1" />
                        Restore
                      </button>
                      <button className="px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 rounded-lg">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* 2 Days Ago */}
                <div className="p-5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600 text-xl" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-slate-900">Automatic Daily Backup</h3>
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full flex items-center gap-1">
                            <FontAwesomeIcon icon={faCircle} className="text-xs" />
                            Complete
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 mb-3">Full site backup including all files and database</p>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faCalendarDays} />
                            <span>2 days ago at 2:00 AM</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faHardDrive} />
                            <span>121 MB</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faFolder} />
                            <span>1,238 files</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faDatabase} />
                            <span>Database included</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-50 rounded-lg">
                        <FontAwesomeIcon icon={faDownload} className="mr-1" />
                        Download
                      </button>
                      <button
                        onClick={() => handleRestore({ name: 'Automatic Daily Backup', date: '2 days ago at 2:00 AM' })}
                        className="px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
                      >
                        <FontAwesomeIcon icon={faRotate} className="mr-1" />
                        Restore
                      </button>
                      <button className="px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 rounded-lg">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* In Progress Backup */}
                <div className="p-5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={faClock} className="text-amber-600 text-xl animate-pulse" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-slate-900">Manual Backup</h3>
                          <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full flex items-center gap-1">
                            <FontAwesomeIcon icon={faClock} className="text-xs" />
                            In Progress
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 mb-3">Creating backup... 67% complete</p>
                        <div className="w-full bg-slate-200 rounded-full h-2 mb-3">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '67%' }}></div>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faCalendarDays} />
                            <span>Started 3 minutes ago</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faClock} />
                            <span>~2 min remaining</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 rounded-lg">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 border-t border-slate-200">
                <div className="flex items-center justify-center gap-3">
                  <button className="px-4 py-2 border border-slate-300 rounded-lg text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2">
                    <span>Load More Backups</span>
                  </button>
                </div>
              </div>
            </div>

              {/* Redeploy Section */}
              <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-8 md:p-10 text-white mb-8 overflow-hidden group">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <FontAwesomeIcon icon={faRocket} className="text-3xl" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-display font-bold">Redeploy Site</h2>
                        <p className="text-blue-100 text-sm">Lightning-fast deployment</p>
                      </div>
                    </div>
                    <p className="text-blue-50 mb-6 text-lg">Trigger a fresh deployment of your site. This will rebuild and redeploy your site with the latest code and configurations.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                        <FontAwesomeIcon icon={faBolt} className="text-yellow-300" />
                        <span>Zero downtime</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                        <FontAwesomeIcon icon={faShieldHalved} className="text-green-300" />
                        <span>Auto rollback</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                        <FontAwesomeIcon icon={faGlobe} className="text-blue-300" />
                        <span>Cache cleared</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowRedeployModal(true)}
                    className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 group"
                  >
                    <FontAwesomeIcon icon={faArrowRotateRight} className="group-hover:rotate-180 transition-transform duration-500" />
                    <span>Redeploy Now</span>
                  </button>
                </div>
              </div>

            {/* Storage Info */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faCloud} className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Backup Storage</h3>
                    <p className="text-sm text-slate-600">2.8 GB of 10 GB used</p>
                  </div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '28%' }}></div>
                </div>
                <p className="text-xs text-slate-500">7.2 GB remaining on your Pro plan</p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faShieldHalved} className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Backup Protection</h3>
                    <p className="text-sm text-slate-600">Your data is secure</p>
                  </div>
                </div>
                <p className="text-sm text-slate-700">All backups are encrypted and stored redundantly across multiple geographic locations for maximum reliability.</p>
              </div>
            </div>
            </div>
          </section>
        </main>

        {/* Redeploy Modal */}
        {showRedeployModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full animate-in fade-in zoom-in duration-300">
              {/* Modal Header */}
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-t-3xl">
                <button
                  onClick={() => setShowRedeployModal(false)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <FontAwesomeIcon icon={faTimes} className="text-white" />
                </button>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <FontAwesomeIcon icon={faRocket} className="text-white text-3xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Redeploy Site</h3>
                    <p className="text-blue-100">Deploy with latest configurations</p>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-8">
                <div className="mb-6">
                  <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl mb-4">
                    <FontAwesomeIcon icon={faInfoCircle} className="text-blue-600 mt-1" />
                    <div className="text-sm text-slate-700">
                      <p className="font-semibold text-slate-900 mb-1">What happens during redeployment?</p>
                      <p>Your site will be rebuilt and redeployed with zero downtime. All caches will be cleared and your latest code changes will go live.</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <FontAwesomeIcon icon={faBolt} className="text-yellow-600" />
                      <span className="text-sm text-slate-700">Zero downtime deployment</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <FontAwesomeIcon icon={faShieldHalved} className="text-green-600" />
                      <span className="text-sm text-slate-700">Automatic rollback on failure</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <FontAwesomeIcon icon={faGlobe} className="text-blue-600" />
                      <span className="text-sm text-slate-700">Global CDN cache invalidation</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <FontAwesomeIcon icon={faCodeBranch} className="text-purple-600" />
                      <span className="text-sm text-slate-700">Deploy from main branch</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowRedeployModal(false)}
                    className="flex-1 px-6 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleRedeploy}
                    disabled={isDeploying}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isDeploying ? (
                      <>
                        <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                        Deploying...
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faRocket} />
                        Start Deployment
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Restore Modal */}
        {showRestoreModal && selectedBackup && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full animate-in fade-in zoom-in duration-300">
              {/* Modal Header */}
              <div className="relative bg-gradient-to-r from-amber-500 to-orange-600 p-8 rounded-t-3xl">
                <button
                  onClick={() => setShowRestoreModal(false)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <FontAwesomeIcon icon={faTimes} className="text-white" />
                </button>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <FontAwesomeIcon icon={faRotate} className="text-white text-3xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Restore Backup</h3>
                    <p className="text-orange-100">Restore previous version</p>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-8">
                <div className="mb-6">
                  <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-4">
                    <FontAwesomeIcon icon={faExclamationTriangle} className="text-amber-600 mt-1" />
                    <div className="text-sm text-slate-700">
                      <p className="font-semibold text-slate-900 mb-1">Warning: This will overwrite your current site</p>
                      <p>Your current site content and database will be replaced with the backup version. This action cannot be undone.</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4 mb-4">
                    <h4 className="font-semibold text-slate-900 mb-3">Restoring:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Backup Name:</span>
                        <span className="font-medium text-slate-900">{selectedBackup.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Created:</span>
                        <span className="font-medium text-slate-900">{selectedBackup.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <label className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-slate-700">Create automatic backup before restore</span>
                    </label>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowRestoreModal(false)}
                    className="flex-1 px-6 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmRestore}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <FontAwesomeIcon icon={faRotate} />
                    Confirm Restore
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
