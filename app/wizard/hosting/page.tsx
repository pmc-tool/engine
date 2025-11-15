'use client';

import { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import TopHeader from '@/components/layout/TopHeader';
import MobileMenu from '@/components/layout/MobileMenu';
import WizardStepper from '@/components/ui/WizardStepper';
import { wizardSteps } from '@/lib/hostingPlans';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faFlask,
  faCheck,
  faBriefcase,
  faStore,
  faArrowLeft,
  faArrowRight,
  faFloppyDisk,
  faXmark,
  faCircleInfo,
  faTag,
  faHeadset,
  faComments,
  faCheckCircle,
  faCircleCheck,
  faCircleXmark,
  faShieldHalved,
  faCertificate,
  faLock,
  faNetworkWired,
  faDatabase,
  faCode,
  faShield,
  faGaugeHigh,
  faChevronDown,
  faPlus,
  faLink,
  faServer,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function WizardHostingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedEnvironment, setSelectedEnvironment] = useState<'production' | 'staging'>('production');
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'professional' | 'enterprise'>('professional');
  const [domainTab, setDomainTab] = useState<'purchase' | 'connect' | 'subdomain'>('purchase');
  const [domainSearch, setDomainSearch] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('myportfolio.com');
  const [sslType, setSslType] = useState<'auto' | 'premium'>('auto');
  const [expandedAdvanced, setExpandedAdvanced] = useState<string[]>([]);

  const toggleAdvancedSection = (section: string) => {
    setExpandedAdvanced(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const domainResults = [
    { domain: 'myportfolio.com', available: true, price: 12.99, icon: 'faCheckCircle', color: 'green' },
    { domain: 'myportfolio.net', available: true, price: 14.99, icon: 'faCircleCheck', color: 'blue' },
    { domain: 'myportfolio.io', available: true, price: 29.99, icon: 'faCircleCheck', color: 'purple' },
    { domain: 'myportfolio.org', available: false, price: 0, icon: 'faCircleXmark', color: 'stone' }
  ];

  const hostingPlansData = [
    {
      id: 'starter',
      name: 'Starter',
      badge: 'Basic',
      badgeColor: 'bg-stone-100 text-stone-700',
      price: 'Free',
      description: 'Perfect for small projects',
      features: [
        { name: '1 GB Storage', included: true },
        { name: '10 GB Bandwidth', included: true },
        { name: 'SSL Certificate', included: true },
        { name: 'Basic Support', included: true },
        { name: 'CDN', included: false },
        { name: 'Auto Backups', included: false }
      ],
      buttonClass: 'bg-stone-100 hover:bg-stone-200 text-stone-700'
    },
    {
      id: 'professional',
      name: 'Professional',
      badge: 'Popular',
      badgeColor: 'bg-blue-50 text-blue-700',
      price: '$12',
      priceUnit: '/mo',
      description: 'For growing businesses',
      recommended: true,
      features: [
        { name: '10 GB Storage', included: true },
        { name: '100 GB Bandwidth', included: true },
        { name: 'SSL Certificate', included: true },
        { name: 'Priority Support', included: true },
        { name: 'Global CDN', included: true },
        { name: 'Daily Auto Backups', included: true }
      ],
      buttonClass: 'bg-pmc-red hover:bg-pmc-red-dark text-white'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      badge: 'Premium',
      badgeColor: 'bg-purple-50 text-purple-700',
      price: '$49',
      priceUnit: '/mo',
      description: 'Maximum performance',
      features: [
        { name: '50 GB Storage', included: true },
        { name: 'Unlimited Bandwidth', included: true },
        { name: 'SSL Certificate', included: true },
        { name: '24/7 Premium Support', included: true },
        { name: 'Global CDN + DDoS', included: true },
        { name: 'Hourly Auto Backups', included: true }
      ],
      buttonClass: 'bg-stone-100 hover:bg-stone-200 text-stone-700'
    }
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopHeader
          title="New Site Wizard"
          subtitle="Step 2: Hosting & Domain Configuration"
          onMenuToggle={() => setIsMobileMenuOpen(true)}
          showSearch={false}
          showExitButton={true}
        >
          <WizardStepper currentStep={2} steps={wizardSteps} />
        </TopHeader>

        <main className="flex-1 overflow-y-auto bg-stone-50">
          <div className="p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

                {/* Main Content Column */}
                <div className="lg:col-span-2 space-y-6 lg:space-y-8">

                  {/* Section 1: Environment Selection */}
                  <section className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8 shadow-sm">
                    <div className="mb-6">
                      <h2 className="text-xl md:text-2xl font-display font-bold text-stone-900 mb-2">Choose Environment</h2>
                      <p className="text-stone-600">Select whether this will be a production site or a staging environment for testing.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Production */}
                      <button
                        onClick={() => setSelectedEnvironment('production')}
                        className={`relative p-6 border-2 rounded-2xl hover:shadow-lg transition text-left ${
                          selectedEnvironment === 'production'
                            ? 'border-pmc-red bg-pmc-red/5'
                            : 'border-stone-200 bg-white hover:border-pmc-red'
                        }`}
                      >
                        <div className="absolute top-4 right-4">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            selectedEnvironment === 'production' ? 'bg-pmc-red' : 'bg-stone-200'
                          }`}>
                            <FontAwesomeIcon icon={faCheck} className={`text-sm ${
                              selectedEnvironment === 'production' ? 'text-white' : 'text-white opacity-0'
                            }`} />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="w-12 h-12 bg-pmc-red rounded-lg flex items-center justify-center mb-3">
                            <FontAwesomeIcon icon={faGlobe} className="text-white text-xl" />
                          </div>
                          <h3 className="text-lg font-display font-bold text-stone-900 mb-1">Production</h3>
                          <p className="text-sm text-stone-600">Live site accessible to the public</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-stone-600">
                            <FontAwesomeIcon icon={faCheck} className="text-pmc-red mr-2" />
                            <span>Custom domain support</span>
                          </div>
                          <div className="flex items-center text-sm text-stone-600">
                            <FontAwesomeIcon icon={faCheck} className="text-pmc-red mr-2" />
                            <span>SSL certificate included</span>
                          </div>
                          <div className="flex items-center text-sm text-stone-600">
                            <FontAwesomeIcon icon={faCheck} className="text-pmc-red mr-2" />
                            <span>Full performance optimization</span>
                          </div>
                        </div>
                      </button>

                      {/* Staging */}
                      <button
                        onClick={() => setSelectedEnvironment('staging')}
                        className={`relative p-6 border-2 rounded-2xl hover:shadow-lg transition text-left ${
                          selectedEnvironment === 'staging'
                            ? 'border-pmc-red bg-pmc-red/5'
                            : 'border-stone-200 bg-white hover:border-pmc-red'
                        }`}
                      >
                        <div className="absolute top-4 right-4">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center transition ${
                            selectedEnvironment === 'staging' ? 'bg-pmc-red' : 'bg-stone-200'
                          }`}>
                            <FontAwesomeIcon icon={faCheck} className={`text-sm transition ${
                              selectedEnvironment === 'staging' ? 'text-white opacity-100' : 'text-white opacity-0'
                            }`} />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-3">
                            <FontAwesomeIcon icon={faFlask} className="text-yellow-600 text-xl" />
                          </div>
                          <h3 className="text-lg font-display font-bold text-stone-900 mb-1">Staging</h3>
                          <p className="text-sm text-stone-600">Test environment for development</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-stone-600">
                            <FontAwesomeIcon icon={faCheck} className="text-stone-400 mr-2" />
                            <span>Subdomain on pmc.dev</span>
                          </div>
                          <div className="flex items-center text-sm text-stone-600">
                            <FontAwesomeIcon icon={faCheck} className="text-stone-400 mr-2" />
                            <span>Password protection</span>
                          </div>
                          <div className="flex items-center text-sm text-stone-600">
                            <FontAwesomeIcon icon={faCheck} className="text-stone-400 mr-2" />
                            <span>Easy push to production</span>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-stone-200">
                          <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">Pro Plan Required</span>
                        </div>
                      </button>
                    </div>
                  </section>

                  {/* Section 2: Hosting Plan Selection */}
                  <section className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8 shadow-sm">
                    <div className="mb-6">
                      <h2 className="text-xl md:text-2xl font-display font-bold text-stone-900 mb-2">Select Hosting Plan</h2>
                      <p className="text-stone-600">Choose the right resources for your site's needs. You can upgrade anytime.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                      {hostingPlansData.map((plan) => (
                        <div
                          key={plan.id}
                          className={`border-2 rounded-2xl p-6 transition ${
                            plan.recommended
                              ? 'border-pmc-red shadow-lg relative'
                              : selectedPlan === plan.id
                              ? 'border-pmc-red'
                              : 'border-stone-200 hover:border-pmc-red hover:shadow-lg'
                          }`}
                        >
                          {plan.recommended && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                              <span className="px-3 py-1 bg-pmc-red text-white text-xs font-bold rounded-full">Recommended</span>
                            </div>
                          )}
                          <div className="mb-4">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-lg font-display font-bold text-stone-900">{plan.name}</h3>
                              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${plan.badgeColor}`}>
                                {plan.badge}
                              </span>
                            </div>
                            <div className="text-3xl font-display font-bold text-stone-900 mb-1">
                              {plan.price}
                              {plan.priceUnit && <span className="text-lg text-stone-500">{plan.priceUnit}</span>}
                            </div>
                            <p className="text-sm text-stone-600">{plan.description}</p>
                          </div>
                          <div className="space-y-3 mb-6">
                            {plan.features.map((feature, index) => (
                              <div key={index} className={`flex items-start text-sm ${
                                feature.included ? 'text-stone-600' : 'text-stone-400'
                              }`}>
                                <FontAwesomeIcon
                                  icon={feature.included ? faCheck : faXmark}
                                  className={`mr-2 mt-0.5 ${
                                    feature.included ? 'text-green-600' : 'text-stone-300'
                                  }`}
                                />
                                <span>{feature.name}</span>
                              </div>
                            ))}
                          </div>
                          <button
                            onClick={() => setSelectedPlan(plan.id as any)}
                            className={`w-full px-4 py-2 text-sm font-medium rounded-lg transition ${plan.buttonClass}`}
                          >
                            Select Plan
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <FontAwesomeIcon icon={faCircleInfo} className="text-blue-600 mt-0.5" />
                        <div className="text-sm text-blue-900">
                          <span className="font-semibold">Pro Tip:</span> You can upgrade or downgrade your plan anytime. All plans include automatic scaling during traffic spikes.
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 3: Domain Configuration */}
                  <section className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8 shadow-sm">
                    <div className="mb-6">
                      <h2 className="text-xl md:text-2xl font-display font-bold text-stone-900 mb-2">Domain Configuration</h2>
                      <p className="text-stone-600">Connect an existing domain or purchase a new one for your site.</p>
                    </div>

                    {/* Domain Tabs */}
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 bg-white border border-stone-200 rounded-lg p-1">
                        <button
                          onClick={() => setDomainTab('purchase')}
                          className={`flex-1 px-4 py-2 text-sm font-medium rounded transition ${
                            domainTab === 'purchase'
                              ? 'bg-pmc-red text-white'
                              : 'text-stone-600 hover:text-stone-900'
                          }`}
                        >
                          <FontAwesomeIcon icon={faPlus} className="mr-2" />
                          Purchase New Domain
                        </button>
                        <button
                          onClick={() => setDomainTab('connect')}
                          className={`flex-1 px-4 py-2 text-sm font-medium rounded transition ${
                            domainTab === 'connect'
                              ? 'bg-pmc-red text-white'
                              : 'text-stone-600 hover:text-stone-900'
                          }`}
                        >
                          <FontAwesomeIcon icon={faLink} className="mr-2" />
                          Connect Existing Domain
                        </button>
                        <button
                          onClick={() => setDomainTab('subdomain')}
                          className={`flex-1 px-4 py-2 text-sm font-medium rounded transition ${
                            domainTab === 'subdomain'
                              ? 'bg-pmc-red text-white'
                              : 'text-stone-600 hover:text-stone-900'
                          }`}
                        >
                          <FontAwesomeIcon icon={faServer} className="mr-2" />
                          Use Subdomain
                        </button>
                      </div>
                    </div>

                    {/* Domain Search Section (Purchase New Domain tab) */}
                    {domainTab === 'purchase' && (
                      <div>
                        <div className="mb-6">
                          <label className="block text-sm font-semibold text-stone-900 mb-2">Search for your perfect domain</label>
                          <div className="flex items-center space-x-3">
                            <div className="flex-1 relative">
                              <input
                                type="text"
                                value={domainSearch}
                                onChange={(e) => setDomainSearch(e.target.value)}
                                placeholder="Enter domain name..."
                                className="w-full px-4 py-3 bg-white border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent transition"
                              />
                              <button className="absolute right-3 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-pmc-red hover:bg-pmc-red-dark text-white text-sm font-medium rounded transition">
                                Search
                              </button>
                            </div>
                          </div>
                          <p className="text-xs text-stone-500 mt-2">Example: myawesomesite, mybusiness, myportfolio</p>
                        </div>

                        <div className="space-y-3">
                          {domainResults.map((result, index) => (
                            <div
                              key={index}
                              className={`flex items-center justify-between p-4 rounded-lg ${
                                result.available
                                  ? index === 0
                                    ? 'bg-green-50 border border-green-200'
                                    : 'bg-white border border-stone-200 hover:border-pmc-red transition'
                                  : 'bg-stone-50 border border-stone-200 opacity-60'
                              }`}
                            >
                              <div className="flex items-center space-x-3">
                                <FontAwesomeIcon
                                  icon={
                                    result.available
                                      ? index === 0 ? faCheckCircle : faCircleCheck
                                      : faCircleXmark
                                  }
                                  className={`text-xl ${
                                    result.color === 'green'
                                      ? 'text-green-600'
                                      : result.color === 'blue'
                                      ? 'text-blue-600'
                                      : result.color === 'purple'
                                      ? 'text-purple-600'
                                      : 'text-stone-400'
                                  }`}
                                />
                                <div>
                                  <div className="font-semibold text-stone-900">{result.domain}</div>
                                  <div className="text-sm text-stone-600">
                                    {result.available ? 'Available' : 'Not Available'}
                                  </div>
                                </div>
                              </div>
                              {result.available ? (
                                <div className="flex items-center space-x-4">
                                  <div className="text-right">
                                    <div className="text-lg font-bold text-stone-900">
                                      ${result.price}
                                      <span className="text-sm text-stone-500">/year</span>
                                    </div>
                                    <div className="text-xs text-stone-500">Auto-renewal</div>
                                  </div>
                                  <button
                                    onClick={() => setSelectedDomain(result.domain)}
                                    className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
                                      index === 0
                                        ? 'bg-pmc-red hover:bg-pmc-red-dark text-white'
                                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                                    }`}
                                  >
                                    Select
                                  </button>
                                </div>
                              ) : (
                                <button className="px-4 py-2 bg-stone-200 text-stone-500 text-sm font-medium rounded-lg cursor-not-allowed">
                                  Unavailable
                                </button>
                              )}
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                          <div className="flex items-start space-x-3">
                            <FontAwesomeIcon icon={faTag} className="text-purple-600 mt-0.5" />
                            <div className="text-sm text-purple-900">
                              <span className="font-semibold">Premium domains available:</span> Get a memorable .com domain with premium naming options starting at $99/year.
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </section>

                  {/* Section 4: SSL Configuration */}
                  <section className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8 shadow-sm">
                    <div className="mb-6">
                      <h2 className="text-xl md:text-2xl font-display font-bold text-stone-900 mb-2">SSL Certificate</h2>
                      <p className="text-stone-600">Secure your site with HTTPS encryption. Required for production sites.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Auto SSL */}
                      <div
                        className={`border-2 rounded-2xl p-6 relative ${
                          sslType === 'auto'
                            ? 'border-pmc-red bg-pmc-red/5'
                            : 'border-stone-200'
                        }`}
                      >
                        <div className="absolute top-4 right-4">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            sslType === 'auto' ? 'bg-pmc-red' : 'bg-stone-200'
                          }`}>
                            <FontAwesomeIcon icon={faCheck} className={`text-sm ${
                              sslType === 'auto' ? 'text-white' : 'text-white opacity-0'
                            }`} />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                            <FontAwesomeIcon icon={faShieldHalved} className="text-green-600 text-xl" />
                          </div>
                          <h3 className="text-lg font-display font-bold text-stone-900 mb-1">Auto SSL (Let's Encrypt)</h3>
                          <div className="text-2xl font-display font-bold text-stone-900 mb-2">Free</div>
                          <p className="text-sm text-stone-600">Automatically issued and renewed</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-stone-600">
                            <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                            <span>Automatic renewal</span>
                          </div>
                          <div className="flex items-center text-sm text-stone-600">
                            <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                            <span>Domain validation (DV)</span>
                          </div>
                          <div className="flex items-center text-sm text-stone-600">
                            <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                            <span>256-bit encryption</span>
                          </div>
                          <div className="flex items-center text-sm text-stone-600">
                            <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                            <span>99.9% browser compatibility</span>
                          </div>
                        </div>
                      </div>

                      {/* Premium SSL */}
                      <div className="border-2 border-stone-200 rounded-2xl p-6 hover:border-pmc-red hover:shadow-lg transition">
                        <div className="mb-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                            <FontAwesomeIcon icon={faCertificate} className="text-blue-600 text-xl" />
                          </div>
                          <h3 className="text-lg font-display font-bold text-stone-900 mb-1">Premium SSL</h3>
                          <div className="text-2xl font-display font-bold text-stone-900 mb-2">
                            $49<span className="text-lg text-stone-500">/year</span>
                          </div>
                          <p className="text-sm text-stone-600">Extended validation certificate</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-stone-600">
                            <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                            <span>Organization validation (OV)</span>
                          </div>
                          <div className="flex items-center text-sm text-stone-600">
                            <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                            <span>Green address bar</span>
                          </div>
                          <div className="flex items-center text-sm text-stone-600">
                            <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                            <span>$1M warranty</span>
                          </div>
                          <div className="flex items-center text-sm text-stone-600">
                            <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                            <span>Priority support</span>
                          </div>
                        </div>
                        <button
                          onClick={() => setSslType('premium')}
                          className="w-full mt-4 px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-medium rounded-lg transition"
                        >
                          Upgrade to Premium
                        </button>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <FontAwesomeIcon icon={faLock} className="text-green-600 mt-0.5" />
                        <div>
                          <div className="text-sm font-semibold text-green-900 mb-1">SSL will be automatically configured</div>
                          <div className="text-sm text-green-800">Your site will have HTTPS enabled immediately after deployment. Certificate renewal is fully automated.</div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 5: Advanced Settings */}
                  <section className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-xl md:text-2xl font-display font-bold text-stone-900 mb-2">Advanced Settings</h2>
                        <p className="text-stone-600">Optional configurations for power users</p>
                      </div>
                      <button className="text-sm text-pmc-red hover:text-pmc-red-dark font-medium transition">
                        <FontAwesomeIcon icon={faChevronDown} className="mr-1" />
                        Expand All
                      </button>
                    </div>

                    <div className="space-y-4">
                      {[
                        { id: 'cdn', icon: faNetworkWired, title: 'CDN Configuration', description: 'Configure content delivery network settings' },
                        { id: 'database', icon: faDatabase, title: 'Database Settings', description: 'Configure database connection and optimization' },
                        { id: 'env', icon: faCode, title: 'Environment Variables', description: 'Set custom environment variables for your application' },
                        { id: 'security', icon: faShield, title: 'Security Headers', description: 'Configure HTTP security headers and CORS' },
                        { id: 'performance', icon: faGaugeHigh, title: 'Performance Optimization', description: 'Enable caching, compression, and other optimizations' }
                      ].map((setting) => (
                        <div key={setting.id} className="border border-stone-200 rounded-lg overflow-hidden">
                          <button
                            onClick={() => toggleAdvancedSection(setting.id)}
                            className="w-full flex items-center justify-between p-4 bg-stone-50 hover:bg-stone-100 transition"
                          >
                            <div className="flex items-center space-x-3">
                              <FontAwesomeIcon icon={setting.icon} className="text-stone-600" />
                              <div className="text-left">
                                <div className="font-semibold text-stone-900">{setting.title}</div>
                                <div className="text-sm text-stone-600">{setting.description}</div>
                              </div>
                            </div>
                            <FontAwesomeIcon icon={faChevronDown} className="text-stone-400" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </section>

                </div>

                {/* Summary Sidebar */}
                <aside className="lg:col-span-1">
                  <div className="sticky top-24">
                    <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
                      <h3 className="text-lg font-display font-bold text-stone-900 mb-4">Configuration Summary</h3>

                      <div className="space-y-4 mb-6">
                        {/* Theme */}
                        <div className="pb-4 border-b border-stone-200">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold text-stone-700">Theme</span>
                            <button className="text-xs text-pmc-red hover:text-pmc-red-dark font-medium transition">Edit</button>
                          </div>
                          <div className="text-sm text-stone-900">Portfolio Theme</div>
                          <div className="text-xs text-stone-500">Professional design</div>
                        </div>

                        {/* Environment */}
                        <div className="pb-4 border-b border-stone-200">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold text-stone-700">Environment</span>
                            <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-semibold rounded">
                              {selectedEnvironment === 'production' ? 'Production' : 'Staging'}
                            </span>
                          </div>
                          <div className="text-sm text-stone-900">
                            {selectedEnvironment === 'production' ? 'Live production site' : 'Testing environment'}
                          </div>
                        </div>

                        {/* Hosting Plan */}
                        <div className="pb-4 border-b border-stone-200">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold text-stone-700">Hosting Plan</span>
                            <span className="px-2 py-0.5 bg-purple-50 text-purple-700 text-xs font-semibold rounded">
                              {hostingPlansData.find(p => p.id === selectedPlan)?.name}
                            </span>
                          </div>
                          <div className="text-sm text-stone-900">
                            {selectedPlan === 'professional' ? '10 GB Storage' : selectedPlan === 'enterprise' ? '50 GB Storage' : '1 GB Storage'}
                          </div>
                          <div className="text-xs text-stone-500">
                            {selectedPlan === 'professional' ? '100 GB Bandwidth' : selectedPlan === 'enterprise' ? 'Unlimited Bandwidth' : '10 GB Bandwidth'}
                          </div>
                        </div>

                        {/* Domain */}
                        <div className="pb-4 border-b border-stone-200">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold text-stone-700">Domain</span>
                            <span className="px-2 py-0.5 bg-green-50 text-green-700 text-xs font-semibold rounded">Selected</span>
                          </div>
                          <div className="text-sm text-stone-900">{selectedDomain}</div>
                          <div className="text-xs text-stone-500">$12.99/year</div>
                        </div>

                        {/* SSL Certificate */}
                        <div className="pb-4 border-b border-stone-200">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold text-stone-700">SSL Certificate</span>
                            <span className="px-2 py-0.5 bg-green-50 text-green-700 text-xs font-semibold rounded">Included</span>
                          </div>
                          <div className="text-sm text-stone-900">Auto SSL (Free)</div>
                          <div className="text-xs text-stone-500">Let's Encrypt</div>
                        </div>
                      </div>

                      {/* Cost Breakdown */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-stone-700">Monthly Cost</span>
                        </div>
                        <div className="space-y-2 mb-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-stone-600">Hosting ({hostingPlansData.find(p => p.id === selectedPlan)?.name})</span>
                            <span className="text-stone-900">
                              {selectedPlan === 'professional' ? '$12.00' : selectedPlan === 'enterprise' ? '$49.00' : '$0.00'}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-stone-600">Domain (Annual)</span>
                            <span className="text-stone-900">$1.08</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-stone-600">SSL Certificate</span>
                            <span className="text-green-600">Free</span>
                          </div>
                        </div>
                        <div className="pt-3 border-t border-stone-200">
                          <div className="flex items-center justify-between">
                            <span className="text-base font-bold text-stone-900">Total</span>
                            <span className="text-2xl font-display font-bold text-stone-900">
                              ${(selectedPlan === 'professional' ? 13.08 : selectedPlan === 'enterprise' ? 50.08 : 1.08).toFixed(2)}
                              <span className="text-sm text-stone-500">/mo</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Promotional Banner */}
                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg mb-4">
                        <div className="flex items-start space-x-2">
                          <FontAwesomeIcon icon={faTag} className="text-blue-600 mt-0.5" />
                          <div className="text-sm text-blue-900">
                            <div className="font-semibold mb-1">First Month 50% Off</div>
                            <div className="text-xs">
                              Save ${(selectedPlan === 'professional' ? 6.54 : selectedPlan === 'enterprise' ? 25.04 : 0.54).toFixed(2)} on your first month
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Guarantees */}
                      <div className="space-y-2">
                        <div className="flex items-center text-xs text-stone-600">
                          <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                          <span>Cancel anytime</span>
                        </div>
                        <div className="flex items-center text-xs text-stone-600">
                          <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                          <span>30-day money-back guarantee</span>
                        </div>
                        <div className="flex items-center text-xs text-stone-600">
                          <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                          <span>Free migrations included</span>
                        </div>
                      </div>
                    </div>

                    {/* Support Card */}
                    <div className="mt-6 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-2xl p-6">
                      <div className="flex items-start space-x-3 mb-4">
                        <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FontAwesomeIcon icon={faHeadset} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-stone-900 mb-1">Need Help?</h4>
                          <p className="text-sm text-stone-700">Our experts are here to assist you with domain and hosting setup.</p>
                        </div>
                      </div>
                      <button className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition">
                        <FontAwesomeIcon icon={faComments} className="mr-2" />
                        Chat with Support
                      </button>
                    </div>
                  </div>
                </aside>

              </div>
            </div>
          </div>
        </main>

        {/* Bottom Navigation Bar */}
        <div className="bg-white border-t border-stone-200 px-4 md:px-8 py-3 md:py-4 fixed bottom-0 left-0 right-0 z-30 shadow-lg">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 md:gap-4">
            <Link
              href="/wizard/theme"
              className="flex items-center px-3 md:px-6 py-2 md:py-3 bg-white border border-stone-300 hover:bg-stone-50 text-stone-700 font-medium rounded-2xl transition text-sm md:text-base"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-1 md:mr-2 text-sm" />
              <span className="hidden sm:inline">Back to Theme</span>
              <span className="sm:hidden">Back</span>
            </Link>

            <div className="flex items-center gap-2 md:gap-4">
              <Link
                href="/sites"
                className="hidden md:flex items-center px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium rounded-2xl transition"
              >
                <FontAwesomeIcon icon={faFloppyDisk} className="mr-2" />
                Save as Draft
              </Link>
              <Link
                href="/wizard/customization"
                className="flex items-center px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all text-sm md:text-base whitespace-nowrap"
              >
                <span className="hidden sm:inline">Continue to Content Setup</span>
                <span className="sm:hidden">Next</span>
                <FontAwesomeIcon icon={faArrowRight} className="ml-1 md:ml-2 text-sm" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
