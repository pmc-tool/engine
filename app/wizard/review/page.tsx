'use client';

import { useState, useEffect } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import TopHeader from '@/components/layout/TopHeader';
import MobileMenu from '@/components/layout/MobileMenu';
import WizardStepper from '@/components/ui/WizardStepper';
import { wizardSteps } from '@/lib/hostingPlans';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRocket,
  faCheck,
  faArrowLeft,
  faPen,
  faCheckCircle,
  faXmark,
  faGlobe,
  faPalette,
  faServer,
  faWandMagicSparkles,
  faShieldHalved,
  faBolt,
  faGaugeHigh,
  faEnvelope,
  faClock,
  faFileLines,
  faLightbulb,
  faCircleQuestion,
  faComments,
  faEye,
  faLock,
  faFloppyDisk,
  faArrowRight,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function WizardReviewPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDeployModal, setShowDeployModal] = useState(false);
  const [deploymentStep, setDeploymentStep] = useState(0);
  const [isDeploying, setIsDeploying] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  const deploymentSteps = [
    { id: 1, title: 'Preparing Environment', status: 'pending' },
    { id: 2, title: 'Uploading Files', status: 'pending' },
    { id: 3, title: 'Configuring Database', status: 'pending' },
    { id: 4, title: 'Installing Dependencies', status: 'pending' },
    { id: 5, title: 'Applying SSL Certificate', status: 'pending' },
    { id: 6, title: 'Final Verification', status: 'pending' }
  ];

  const simulateLogs = [
    '[INFO] Initializing deployment process...',
    '[INFO] Verifying server configuration...',
    '[SUCCESS] Environment prepared successfully',
    '[INFO] Starting file upload to server...',
    '[PROGRESS] Uploading theme files... (245 files)',
    '[PROGRESS] Uploading content and media... (32 assets)',
    '[SUCCESS] All files uploaded successfully',
    '[INFO] Setting up MySQL database...',
    '[INFO] Creating database tables...',
    '[SUCCESS] Database configured successfully',
    '[INFO] Installing WordPress core...',
    '[INFO] Installing theme dependencies...',
    '[INFO] Installing plugins...',
    '[SUCCESS] All dependencies installed',
    '[INFO] Generating SSL certificate...',
    '[INFO] Configuring HTTPS redirect...',
    '[SUCCESS] SSL certificate applied',
    '[INFO] Running final verification checks...',
    '[INFO] Testing domain connection...',
    '[INFO] Verifying SSL handshake...',
    '[SUCCESS] All verifications passed',
    '[SUCCESS] Site deployed successfully!',
    '[INFO] Your site is now live at restaurantdelight.com'
  ];

  const handleLaunch = () => {
    setShowDeployModal(true);
    setIsDeploying(true);
    setDeploymentStep(0);
    setLogs([]);

    // Simulate deployment process
    let logIndex = 0;
    const logInterval = setInterval(() => {
      if (logIndex < simulateLogs.length) {
        setLogs(prev => [...prev, simulateLogs[logIndex]]);
        logIndex++;

        // Update deployment steps
        if (logIndex === 3) setDeploymentStep(1);
        if (logIndex === 7) setDeploymentStep(2);
        if (logIndex === 10) setDeploymentStep(3);
        if (logIndex === 14) setDeploymentStep(4);
        if (logIndex === 17) setDeploymentStep(5);
        if (logIndex === 22) {
          setDeploymentStep(6);
          setIsDeploying(false);
          setIsComplete(true);
          clearInterval(logInterval);
        }
      }
    }, 400);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopHeader
          title="New Site Wizard"
          subtitle="Step 4 of 4 - Review & Launch"
          onMenuToggle={() => setIsMobileMenuOpen(true)}
          showSearch={false}
          showExitButton={true}
        >
          <WizardStepper currentStep={4} steps={wizardSteps} />
        </TopHeader>

        <main className="flex-1 overflow-y-auto bg-stone-50 pb-24">

          <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">

                {/* Site Overview Card */}
                <div className="bg-white border border-stone-200 rounded-2xl shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-r from-pmc-red to-red-700 px-6 py-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                          <FontAwesomeIcon icon={faGlobe} className="text-white text-xl" />
                        </div>
                        <div>
                          <h2 className="text-xl font-display font-bold text-white">Creative Design Studio</h2>
                          <p className="text-white/90 text-sm">creativedesign.com</p>
                        </div>
                      </div>
                      <span className="px-3 py-1.5 bg-white/20 text-white text-xs font-semibold rounded-full backdrop-blur-sm">Production</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                          <FontAwesomeIcon icon={faPalette} className="text-blue-600" />
                        </div>
                        <div>
                          <div className="text-xs text-stone-500">Theme</div>
                          <div className="text-sm font-semibold text-stone-900">Modern Portfolio</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                          <FontAwesomeIcon icon={faServer} className="text-green-600" />
                        </div>
                        <div>
                          <div className="text-xs text-stone-500">Hosting Plan</div>
                          <div className="text-sm font-semibold text-stone-900">Pro Plan</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                          <FontAwesomeIcon icon={faWandMagicSparkles} className="text-purple-600" />
                        </div>
                        <div>
                          <div className="text-xs text-stone-500">Content Method</div>
                          <div className="text-sm font-semibold text-stone-900">AI Generated</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                          <FontAwesomeIcon icon={faWordpress} className="text-orange-600" />
                        </div>
                        <div>
                          <div className="text-xs text-stone-500">Platform</div>
                          <div className="text-sm font-semibold text-stone-900">WordPress 6.4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Theme Configuration */}
                <div className="bg-white border border-stone-200 rounded-2xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-display font-bold text-stone-900">Theme Configuration</h3>
                    <Link href="/wizard/theme" className="text-sm text-pmc-red hover:text-pmc-red-dark font-medium transition">
                      <FontAwesomeIcon icon={faPen} className="mr-1" />
                      Edit
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-stone-50 rounded-lg">
                      <div className="text-xs text-stone-500 mb-1">Theme Name</div>
                      <div className="text-sm font-semibold text-stone-900">Modern Portfolio</div>
                    </div>
                    <div className="p-4 bg-stone-50 rounded-lg">
                      <div className="text-xs text-stone-500 mb-1">Version</div>
                      <div className="text-sm font-semibold text-stone-900">3.2.1</div>
                    </div>
                    <div className="p-4 bg-stone-50 rounded-lg">
                      <div className="text-xs text-stone-500 mb-1">License</div>
                      <div className="text-sm font-semibold text-stone-900">Extended License</div>
                    </div>
                    <div className="p-4 bg-stone-50 rounded-lg">
                      <div className="text-xs text-stone-500 mb-1">Purchase Date</div>
                      <div className="text-sm font-semibold text-stone-900">Dec 15, 2024</div>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-blue-900 mb-1">Theme Features Included</div>
                        <div className="text-xs text-blue-700">Portfolio showcase, project gallery, contact forms, blog integration, SEO optimized, fully responsive design</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hosting & Domain */}
                <div className="bg-white border border-stone-200 rounded-2xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-display font-bold text-stone-900">Hosting & Domain</h3>
                    <Link href="/wizard/hosting" className="text-sm text-pmc-red hover:text-pmc-red-dark font-medium transition">
                      <FontAwesomeIcon icon={faPen} className="mr-1" />
                      Edit
                    </Link>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-stone-50 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-sm font-semibold text-stone-900">Domain Configuration</div>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">Connected</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <div className="text-xs text-stone-500 mb-1">Domain Name</div>
                          <div className="text-sm font-medium text-stone-900">creativedesign.com</div>
                        </div>
                        <div>
                          <div className="text-xs text-stone-500 mb-1">Domain Type</div>
                          <div className="text-sm font-medium text-stone-900">New Purchase</div>
                        </div>
                        <div>
                          <div className="text-xs text-stone-500 mb-1">SSL Certificate</div>
                          <div className="text-sm font-medium text-stone-900 flex items-center">
                            <FontAwesomeIcon icon={faLock} className="text-green-600 mr-1" />
                            Auto-provisioned
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-stone-500 mb-1">DNS Status</div>
                          <div className="text-sm font-medium text-stone-900 flex items-center">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mr-1" />
                            Verified
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-stone-50 rounded-lg">
                      <div className="text-sm font-semibold text-stone-900 mb-3">Hosting Plan Details</div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <div className="text-xs text-stone-500 mb-1">Plan Type</div>
                          <div className="text-sm font-medium text-stone-900">Pro Plan</div>
                        </div>
                        <div>
                          <div className="text-xs text-stone-500 mb-1">Environment</div>
                          <div className="text-sm font-medium text-stone-900">Production</div>
                        </div>
                        <div>
                          <div className="text-xs text-stone-500 mb-1">Storage</div>
                          <div className="text-sm font-medium text-stone-900">10 GB SSD</div>
                        </div>
                        <div>
                          <div className="text-xs text-stone-500 mb-1">Bandwidth</div>
                          <div className="text-sm font-medium text-stone-900">100 GB</div>
                        </div>
                        <div>
                          <div className="text-xs text-stone-500 mb-1">PHP Version</div>
                          <div className="text-sm font-medium text-stone-900">8.2</div>
                        </div>
                        <div>
                          <div className="text-xs text-stone-500 mb-1">MySQL Version</div>
                          <div className="text-sm font-medium text-stone-900">8.0</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-stone-50 rounded-lg">
                      <div className="text-sm font-semibold text-stone-900 mb-3">Server Location</div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <FontAwesomeIcon icon={faServer} className="text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-stone-900">US East (N. Virginia)</div>
                          <div className="text-xs text-stone-500">us-east-1 • Optimal for North America</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Configuration */}
                <div className="bg-white border border-stone-200 rounded-2xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-display font-bold text-stone-900">Content Configuration</h3>
                    <Link href="/wizard/customization" className="text-sm text-pmc-red hover:text-pmc-red-dark font-medium transition">
                      <FontAwesomeIcon icon={faPen} className="mr-1" />
                      Edit
                    </Link>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                      <div className="flex items-start space-x-3 mb-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FontAwesomeIcon icon={faWandMagicSparkles} className="text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-purple-900 mb-1">AI Content Generation</div>
                          <div className="text-xs text-purple-700">Content generated using AI based on your business description and preferences</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <div className="text-xs text-purple-700 mb-1">Pages Generated</div>
                          <div className="text-sm font-semibold text-purple-900">4 pages</div>
                        </div>
                        <div>
                          <div className="text-xs text-purple-700 mb-1">Images</div>
                          <div className="text-sm font-semibold text-purple-900">15 images</div>
                        </div>
                        <div>
                          <div className="text-xs text-purple-700 mb-1">SEO Metadata</div>
                          <div className="text-sm font-semibold text-purple-900">Complete</div>
                        </div>
                        <div>
                          <div className="text-xs text-purple-700 mb-1">Credits Used</div>
                          <div className="text-sm font-semibold text-purple-900">5 credits</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-stone-50 rounded-lg">
                      <div className="text-sm font-semibold text-stone-900 mb-3">Generated Pages</div>
                      <div className="space-y-2">
                        {['Home', 'About', 'Services', 'Contact'].map((page) => (
                          <div key={page} className="flex items-center justify-between p-2 bg-white rounded border border-stone-200">
                            <div className="flex items-center space-x-3">
                              <FontAwesomeIcon icon={faFileLines} className="text-stone-400" />
                              <span className="text-sm text-stone-900">{page}</span>
                            </div>
                            <span className="text-xs text-green-600 font-medium">Ready</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Settings */}
                <div className="bg-white border border-stone-200 rounded-2xl shadow-sm p-6">
                  <h3 className="text-lg font-display font-bold text-stone-900 mb-4">Additional Settings</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-stone-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FontAwesomeIcon icon={faShieldHalved} className="text-green-600" />
                        <div>
                          <div className="text-sm font-medium text-stone-900">Auto Backups</div>
                          <div className="text-xs text-stone-500">Daily automated backups</div>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">Enabled</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-stone-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FontAwesomeIcon icon={faBolt} className="text-blue-600" />
                        <div>
                          <div className="text-sm font-medium text-stone-900">CDN</div>
                          <div className="text-xs text-stone-500">Global content delivery</div>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">Enabled</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-stone-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FontAwesomeIcon icon={faGaugeHigh} className="text-purple-600" />
                        <div>
                          <div className="text-sm font-medium text-stone-900">Performance Optimization</div>
                          <div className="text-xs text-stone-500">Caching & compression</div>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded">Enabled</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-stone-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FontAwesomeIcon icon={faEnvelope} className="text-orange-600" />
                        <div>
                          <div className="text-sm font-medium text-stone-900">Email Notifications</div>
                          <div className="text-xs text-stone-500">Deployment & security alerts</div>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded">Enabled</span>
                    </div>
                  </div>
                </div>

                {/* Pre-Deployment Checklist */}
                <div className="bg-white border border-stone-200 rounded-2xl shadow-sm p-6">
                  <h3 className="text-lg font-display font-bold text-stone-900 mb-4">Pre-Deployment Checklist</h3>
                  <div className="space-y-3">
                    {[
                      { title: 'Theme Configuration Complete', desc: 'All theme files and dependencies verified' },
                      { title: 'Domain & SSL Verified', desc: 'DNS records configured, SSL certificate ready' },
                      { title: 'Database Initialized', desc: 'MySQL database created and configured' },
                      { title: 'Content Ready for Deployment', desc: 'All pages, media, and assets prepared' },
                      { title: 'Security Measures Active', desc: 'Firewall, backups, and monitoring configured' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mt-0.5" />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-green-900">{item.title}</div>
                          <div className="text-xs text-green-700">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Estimated Deployment Time */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faClock} className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-bold text-blue-900 mb-2">Estimated Deployment Time</h3>
                      <div className="text-3xl font-display font-bold text-blue-900 mb-2">3-5 minutes</div>
                      <p className="text-sm text-blue-700 mb-4">Your site will be live and accessible once deployment completes. You'll see real-time progress in the terminal.</p>
                      <div className="flex flex-wrap gap-4 text-sm text-blue-700">
                        <div className="flex items-center space-x-2">
                          <FontAwesomeIcon icon={faCheckCircle} />
                          <span>Server provisioning: ~1 min</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FontAwesomeIcon icon={faCheckCircle} />
                          <span>File transfer: ~2 min</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FontAwesomeIcon icon={faCheckCircle} />
                          <span>Configuration: ~1 min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Summary Sidebar */}
              <aside className="lg:col-span-1 space-y-6">
                <div className="bg-white border border-stone-200 rounded-2xl shadow-sm p-6 sticky top-8">
                  <h3 className="text-lg font-display font-bold text-stone-900 mb-4">Deployment Summary</h3>
                  <div className="space-y-4 mb-6">
                    <div className="pb-3 border-b border-stone-200">
                      <div className="text-xs text-stone-500 mb-1">Site Name</div>
                      <div className="text-sm font-semibold text-stone-900">Creative Design Studio</div>
                    </div>
                    <div className="pb-3 border-b border-stone-200">
                      <div className="text-xs text-stone-500 mb-1">Domain</div>
                      <div className="text-sm font-semibold text-stone-900">creativedesign.com</div>
                    </div>
                    <div className="pb-3 border-b border-stone-200">
                      <div className="text-xs text-stone-500 mb-1">Environment</div>
                      <div className="text-sm font-semibold text-stone-900">Production</div>
                    </div>
                    <div className="pb-3 border-b border-stone-200">
                      <div className="text-xs text-stone-500 mb-1">Theme</div>
                      <div className="text-sm font-semibold text-stone-900">Modern Portfolio v3.2.1</div>
                    </div>
                    <div className="pb-3 border-b border-stone-200">
                      <div className="text-xs text-stone-500 mb-1">Platform</div>
                      <div className="text-sm font-semibold text-stone-900">WordPress 6.4</div>
                    </div>
                    <div className="pb-3 border-b border-stone-200">
                      <div className="text-xs text-stone-500 mb-1">Content Method</div>
                      <div className="text-sm font-semibold text-stone-900">AI Generated</div>
                    </div>
                    <div>
                      <div className="text-xs text-stone-500 mb-1">Server Location</div>
                      <div className="text-sm font-semibold text-stone-900">US East (N. Virginia)</div>
                    </div>
                  </div>

                  <div className="p-4 bg-stone-50 rounded-lg mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-stone-500">Readiness Status</span>
                      <span className="text-xs font-semibold text-green-600">100%</span>
                    </div>
                    <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <button
                      onClick={handleLaunch}
                      className="w-full flex items-center justify-center px-6 py-3 bg-pmc-red hover:bg-pmc-red-dark text-white font-semibold rounded-2xl shadow-lg transition"
                    >
                      <FontAwesomeIcon icon={faRocket} className="mr-2" />
                      <span>Launch Site Now</span>
                    </button>
                    <button className="w-full flex items-center justify-center px-6 py-2.5 bg-white border border-stone-200 hover:bg-stone-50 text-stone-700 font-medium rounded-lg transition">
                      <FontAwesomeIcon icon={faEye} className="mr-2" />
                      <span>Preview Configuration</span>
                    </button>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-2xl p-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faCircleQuestion} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-purple-900 mb-1">Need Help?</h4>
                      <p className="text-xs text-purple-700">Our support team is here to assist you with deployment.</p>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition">
                    <FontAwesomeIcon icon={faComments} className="mr-2" />
                    Chat with Support
                  </button>
                </div>

                <div className="bg-white border border-stone-200 rounded-2xl shadow-sm p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <FontAwesomeIcon icon={faLightbulb} className="text-yellow-500" />
                    <h4 className="text-sm font-semibold text-stone-900">Deployment Tips</h4>
                  </div>
                  <ul className="space-y-3 text-xs text-stone-600">
                    {[
                      'Monitor the terminal logs for real-time deployment progress',
                      'Your site will be accessible immediately after deployment',
                      'First backup will be created automatically post-launch',
                      'You can edit content anytime from the Site Manager'
                    ].map((tip, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <FontAwesomeIcon icon={faCheck} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>

            </div>
          </div>

        </main>

        {/* Bottom Navigation Bar */}
        <div className="fixed bottom-0 left-0 md:left-64 right-0 bg-white border-t border-stone-200 px-4 md:px-8 py-3 md:py-4 z-30 shadow-lg">
          <div className="flex items-center justify-between max-w-7xl mx-auto gap-2">
            <Link
              href="/wizard/customization"
              className="flex items-center px-3 md:px-6 py-2 md:py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold rounded-2xl transition text-sm md:text-base"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-1 md:mr-2 text-sm" />
              <span className="hidden sm:inline">Back to Content Setup</span>
              <span className="sm:hidden">Back</span>
            </Link>

            <div className="flex items-center gap-2">
              <Link
                href="/sites"
                className="hidden md:flex items-center px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold rounded-2xl transition"
              >
                <FontAwesomeIcon icon={faFloppyDisk} className="mr-2" />
                Save as Draft
              </Link>
              <button
                onClick={handleLaunch}
                className="flex items-center px-4 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all text-sm md:text-base whitespace-nowrap"
              >
                <FontAwesomeIcon icon={faRocket} className="mr-1 md:mr-2 text-sm" />
                <span className="hidden sm:inline">Launch Site</span>
                <span className="sm:hidden">Launch</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Deployment Modal */}
      {showDeployModal && (
        <div className="fixed inset-0 bg-stone-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8">
          <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden">

            {/* Modal Header */}
            <div className="px-6 md:px-8 py-4 md:py-6 border-b border-stone-200 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0 pr-4">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-stone-900 mb-1 truncate">
                    {isComplete ? 'Deployment Complete!' : 'Deploying Your Site'}
                  </h2>
                  <p className="text-sm text-stone-600 truncate">Creative Design Studio • creativedesign.com</p>
                </div>
                <button
                  onClick={() => setShowDeployModal(false)}
                  disabled={isDeploying}
                  className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg transition ${
                    isDeploying
                      ? 'text-stone-300 cursor-not-allowed'
                      : 'text-stone-400 hover:text-stone-600 hover:bg-stone-100'
                  }`}
                  aria-label="Close modal"
                >
                  <FontAwesomeIcon icon={faXmark} className="text-xl" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8">

              {/* Deployment Progress */}
              <div className="mb-6 md:mb-8">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <h3 className="text-base md:text-lg font-display font-bold text-stone-900">Deployment Progress</h3>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${isComplete ? 'bg-green-500' : 'bg-blue-500 animate-pulse'}`}></div>
                    <span className="text-xs md:text-sm text-stone-600">{isComplete ? 'Complete' : 'In Progress'}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {deploymentSteps.map((step, idx) => (
                    <div
                      key={step.id}
                      className={`p-3 md:p-4 rounded-xl border-2 transition ${
                        idx < deploymentStep
                          ? 'bg-green-50 border-green-500'
                          : idx === deploymentStep && isDeploying
                          ? 'bg-blue-50 border-blue-500'
                          : 'bg-stone-50 border-stone-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-stone-500">Step {step.id}</span>
                        {idx < deploymentStep ? (
                          <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 text-sm" />
                        ) : idx === deploymentStep && isDeploying ? (
                          <FontAwesomeIcon icon={faSpinner} className="text-blue-600 text-sm animate-spin" />
                        ) : null}
                      </div>
                      <div className="text-xs md:text-sm font-medium text-stone-900 leading-tight">{step.title}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deployment Terminal */}
              <div className="bg-stone-900 rounded-xl p-4 md:p-6 font-mono text-sm mb-6 md:mb-0">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <span className="text-green-400 text-xs md:text-sm font-semibold">Deployment Terminal</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="space-y-0.5 md:space-y-1 max-h-64 md:max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-stone-700 scrollbar-track-stone-800">
                  {logs.map((log, idx) => (
                    <div
                      key={idx}
                      className={`${
                        log.includes('[SUCCESS]')
                          ? 'text-green-400'
                          : log.includes('[INFO]')
                          ? 'text-blue-400'
                          : log.includes('[PROGRESS]')
                          ? 'text-yellow-400'
                          : 'text-stone-400'
                      } text-xs leading-relaxed break-all`}
                    >
                      {log}
                    </div>
                  ))}
                  {isDeploying && (
                    <div className="text-blue-400 text-xs flex items-center mt-2">
                      <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2 flex-shrink-0" />
                      Processing...
                    </div>
                  )}
                </div>
              </div>

              {/* Success Message */}
              {isComplete && (
                <div className="mt-6 md:mt-8 p-4 md:p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex flex-col md:flex-row items-start space-y-3 md:space-y-0 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-white text-lg md:text-xl" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base md:text-lg font-display font-bold text-green-900 mb-2">Your Site is Live!</h4>
                      <p className="text-sm text-green-800 mb-4">Your site has been successfully deployed and is now accessible at:</p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href="https://creativedesign.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition"
                        >
                          <FontAwesomeIcon icon={faGlobe} className="mr-2" />
                          Visit creativedesign.com
                          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                        </a>
                        <Link
                          href="/sites"
                          className="inline-flex items-center justify-center px-4 py-2.5 bg-white hover:bg-stone-50 border border-green-600 text-green-600 text-sm font-medium rounded-lg transition"
                        >
                          Go to Site Manager
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
