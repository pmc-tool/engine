'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import TopHeader from '@/components/layout/TopHeader';
import MobileMenu from '@/components/layout/MobileMenu';
import { mockSites } from '@/lib/mockData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faServer,
  faGauge,
  faMemory,
  faHardDrive,
  faNetworkWired,
  faArrowRight,
  faChartLine,
  faRocket,
  faShieldHalved,
  faBolt,
  faGlobe,
  faStar,
  faCloud,
  faCheckCircle,
  faArrowTrendUp,
  faDatabase,
  faCube,
  faWifi,
  faLock
} from '@fortawesome/free-solid-svg-icons';

export default function HostingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const router = useRouter();

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
    // You can add logic here to navigate to checkout or show a modal
    alert(`You selected the ${planName} plan! This would typically take you to checkout.`);
  };

  const handleDeployNewSite = () => {
    router.push('/wizard');
  };

  const handleStartTrial = () => {
    alert('Starting your free trial! This would typically create a trial account.');
  };

  const handleComparePlans = () => {
    // Scroll to plans section
    const plansSection = document.getElementById('hosting-plans');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const hostingPlans = [
    {
      name: 'Starter',
      price: '$9.99',
      sites: '1 Site',
      storage: '10 GB',
      bandwidth: '100 GB',
      cpu: '1 Core',
      ram: '1 GB',
      color: 'blue'
    },
    {
      name: 'Professional',
      price: '$19.99',
      sites: '5 Sites',
      storage: '50 GB',
      bandwidth: '500 GB',
      cpu: '2 Cores',
      ram: '4 GB',
      color: 'purple',
      popular: true
    },
    {
      name: 'Business',
      price: '$39.99',
      sites: '20 Sites',
      storage: '200 GB',
      bandwidth: 'Unlimited',
      cpu: '4 Cores',
      ram: '8 GB',
      color: 'orange'
    }
  ];

  const features = [
    'Free SSL Certificates',
    'Daily Automated Backups',
    'One-Click WordPress Install',
    'SSD Storage',
    '24/7 Support',
    'CDN Integration',
    'Email Accounts',
    'Database Management'
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopHeader
          title="Hosting Management"
          onMenuToggle={() => setIsMobileMenuOpen(true)}
          showSiteSwitcher={false}
        />

        <main className="flex-1 overflow-y-auto bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
          {/* Hero Section */}
          <section className="relative px-4 md:px-8 pt-8 pb-16 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full mb-6">
                  <FontAwesomeIcon icon={faRocket} className="text-blue-600" />
                  <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Powered by Enterprise Infrastructure
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                  Hosting & Infrastructure
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                  Lightning-fast hosting with enterprise-grade security. Scale effortlessly with our managed infrastructure.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-200">
                    <FontAwesomeIcon icon={faBolt} className="text-yellow-500" />
                    <span className="text-sm font-semibold text-slate-900">99.9% Uptime</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-200">
                    <FontAwesomeIcon icon={faShieldHalved} className="text-green-500" />
                    <span className="text-sm font-semibold text-slate-900">SSL Included</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-200">
                    <FontAwesomeIcon icon={faGlobe} className="text-blue-500" />
                    <span className="text-sm font-semibold text-slate-900">Global CDN</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-200">
                    <FontAwesomeIcon icon={faCloud} className="text-purple-500" />
                    <span className="text-sm font-semibold text-slate-900">Auto Backups</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FontAwesomeIcon icon={faServer} className="text-white text-xl" />
                    </div>
                    <FontAwesomeIcon icon={faArrowTrendUp} className="text-green-500 text-sm" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{mockSites.length}</div>
                  <div className="text-sm text-slate-600">Active Sites</div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FontAwesomeIcon icon={faGauge} className="text-white text-xl" />
                    </div>
                    <span className="text-xs font-semibold text-green-600 px-2 py-1 bg-green-50 rounded-full">Excellent</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">99.9%</div>
                  <div className="text-sm text-slate-600">Uptime Rate</div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FontAwesomeIcon icon={faDatabase} className="text-white text-xl" />
                    </div>
                    <FontAwesomeIcon icon={faArrowTrendUp} className="text-purple-500 text-sm" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">2.4 TB</div>
                  <div className="text-sm text-slate-600">Total Storage</div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FontAwesomeIcon icon={faWifi} className="text-white text-xl" />
                    </div>
                    <span className="text-xs font-semibold text-orange-600 px-2 py-1 bg-orange-50 rounded-full">Fast</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">245ms</div>
                  <div className="text-sm text-slate-600">Avg Response</div>
                </div>
              </div>
            </div>
          </section>

          {/* Current Sites */}
          <section className="px-4 md:px-8 py-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Your Active Sites</h2>
                  <p className="text-slate-600">Manage hosting, backups, and performance for each site</p>
                </div>
                <button
                  onClick={handleDeployNewSite}
                  className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <FontAwesomeIcon icon={faRocket} />
                  Deploy New Site
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockSites.map((site, idx) => (
                  <div
                    key={site.id}
                    onClick={() => router.push(`/sites/${site.id}/backups`)}
                    className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-2xl hover:border-blue-300 transition-all duration-300 cursor-pointer hover:-translate-y-1"
                    style={{animationDelay: `${idx * 100}ms`}}
                  >
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className={`w-14 h-14 bg-gradient-to-br ${
                            idx % 3 === 0 ? 'from-blue-500 to-blue-600' :
                            idx % 3 === 1 ? 'from-purple-500 to-purple-600' :
                            'from-pink-500 to-pink-600'
                          } rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <FontAwesomeIcon icon={faServer} className="text-white text-xl" />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-white text-xs" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{site.name}</h3>
                          <p className="text-sm text-slate-500 flex items-center gap-1">
                            <FontAwesomeIcon icon={faGlobe} className="text-xs" />
                            {site.domain}
                          </p>
                        </div>
                      </div>
                      <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                        site.status === 'live' ? 'bg-green-100 text-green-700' :
                        site.status === 'deploying' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        <span className={`w-2 h-2 rounded-full ${
                          site.status === 'live' ? 'bg-green-500 animate-pulse' :
                          site.status === 'deploying' ? 'bg-yellow-500 animate-pulse' :
                          'bg-red-500'
                        }`}></span>
                        <span className="capitalize">{site.status}</span>
                      </span>
                    </div>

                    {/* Progress Bars */}
                    <div className="space-y-4 mb-5">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-slate-600 flex items-center gap-1.5">
                            <FontAwesomeIcon icon={faHardDrive} className="text-slate-400" />
                            Storage
                          </span>
                          <span className="text-xs font-bold text-slate-900">2.4 / 10 GB</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500" style={{width: '24%'}}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-slate-600 flex items-center gap-1.5">
                            <FontAwesomeIcon icon={faWifi} className="text-slate-400" />
                            Bandwidth
                          </span>
                          <span className="text-xs font-bold text-slate-900">45 / 100 GB</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-500" style={{width: '45%'}}></div>
                        </div>
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    <div className="grid grid-cols-3 gap-2 p-3 bg-slate-50 rounded-xl mb-4">
                      <div className="text-center">
                        <div className="text-xs text-slate-500 mb-1">Uptime</div>
                        <div className="text-sm font-bold text-green-600">99.9%</div>
                      </div>
                      <div className="text-center border-x border-slate-200">
                        <div className="text-xs text-slate-500 mb-1">Speed</div>
                        <div className="text-sm font-bold text-blue-600">Fast</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-slate-500 mb-1">SSL</div>
                        <div className="text-sm font-bold text-purple-600">
                          <FontAwesomeIcon icon={faLock} />
                        </div>
                      </div>
                    </div>

                    <button className="w-full px-4 py-3 bg-gradient-to-r from-slate-900 to-slate-700 hover:from-blue-600 hover:to-purple-600 text-white text-sm font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                      <span>Manage Hosting</span>
                      <FontAwesomeIcon icon={faArrowRight} className="text-xs group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Hosting Plans */}
          <section id="hosting-plans" className="px-4 md:px-8 py-12 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                  <span className="text-sm font-semibold text-white">
                    Flexible Pricing Plans
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Choose Your Perfect Plan</h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">Scale your hosting as you grow. All plans include premium features and 24/7 support.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {hostingPlans.map((plan, idx) => (
                  <div
                    key={idx}
                    className={`relative bg-white/10 backdrop-blur-sm rounded-3xl border-2 ${
                      plan.popular ? 'border-yellow-400 scale-105' : 'border-white/20'
                    } p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 group`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 text-sm font-bold rounded-full shadow-lg">
                          <FontAwesomeIcon icon={faStar} className="text-xs" />
                          Most Popular
                        </div>
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${
                        idx === 0 ? 'from-blue-400 to-blue-600' :
                        idx === 1 ? 'from-purple-400 to-purple-600' :
                        'from-orange-400 to-orange-600'
                      } rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform`}>
                        <FontAwesomeIcon icon={idx === 0 ? faServer : idx === 1 ? faRocket : faCube} className="text-white text-2xl" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-white mb-2">{plan.name}</h3>
                      <div className="flex items-baseline justify-center mb-2">
                        <span className="text-5xl font-bold text-white">{plan.price}</span>
                        <span className="text-slate-300 ml-2 text-lg">/month</span>
                      </div>
                      <p className="text-sm text-slate-400">Billed monthly</p>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3 text-white">
                        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FontAwesomeIcon icon={faServer} className="text-blue-400 text-sm" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold">{plan.sites}</div>
                          <div className="text-xs text-slate-400">Websites</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-white">
                        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FontAwesomeIcon icon={faHardDrive} className="text-purple-400 text-sm" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold">{plan.storage}</div>
                          <div className="text-xs text-slate-400">SSD Storage</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-white">
                        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FontAwesomeIcon icon={faNetworkWired} className="text-green-400 text-sm" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold">{plan.bandwidth}</div>
                          <div className="text-xs text-slate-400">Bandwidth</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-white">
                        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FontAwesomeIcon icon={faMemory} className="text-orange-400 text-sm" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold">{plan.cpu} • {plan.ram}</div>
                          <div className="text-xs text-slate-400">CPU & RAM</div>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handlePlanSelect(plan.name)}
                      className={`w-full px-6 py-4 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 hover:shadow-2xl hover:shadow-yellow-500/50'
                          : 'bg-white/20 hover:bg-white/30 text-white'
                      } font-bold rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2`}
                    >
                      <span>Get Started</span>
                      <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="mt-16 pt-12 border-t border-white/10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">24/7</div>
                    <div className="text-sm text-slate-300">Expert Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                    <div className="text-sm text-slate-300">Uptime SLA</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">30 Days</div>
                    <div className="text-sm text-slate-300">Money Back</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">Free</div>
                    <div className="text-sm text-slate-300">SSL & CDN</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="px-4 md:px-8 py-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Everything You Need to Succeed</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">All plans include powerful features to help you build, deploy, and scale your websites with confidence.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">{feature}</h3>
                        <p className="text-xs text-slate-500">
                          {idx === 0 && 'Secure your site with free SSL certificates'}
                          {idx === 1 && 'Automatic daily backups for peace of mind'}
                          {idx === 2 && 'Deploy WordPress in seconds'}
                          {idx === 3 && 'Lightning-fast SSD storage included'}
                          {idx === 4 && 'Expert help whenever you need it'}
                          {idx === 5 && 'Global content delivery network'}
                          {idx === 6 && 'Professional email hosting'}
                          {idx === 7 && 'Easy database administration'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Performance Stats */}
          <section className="px-4 md:px-8 pb-12">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl border border-slate-200 p-8 md:p-12 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>

                <div className="relative">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full mb-4">
                      <FontAwesomeIcon icon={faBolt} className="text-yellow-500" />
                      <span className="text-sm font-semibold text-slate-900">
                        Enterprise-Grade Infrastructure
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-3">Built for Performance</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">Our infrastructure is optimized for speed, reliability, and scalability.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-slate-200">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <FontAwesomeIcon icon={faGauge} className="text-white text-3xl" />
                      </div>
                      <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">99.9%</div>
                      <div className="text-sm font-semibold text-slate-900 mb-1">Uptime Guarantee</div>
                      <div className="text-xs text-slate-500">Industry-leading reliability</div>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-slate-200">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <FontAwesomeIcon icon={faChartLine} className="text-white text-3xl" />
                      </div>
                      <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-2">245ms</div>
                      <div className="text-sm font-semibold text-slate-900 mb-1">Avg Response Time</div>
                      <div className="text-xs text-slate-500">Lightning-fast performance</div>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-slate-200">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <FontAwesomeIcon icon={faMemory} className="text-white text-3xl" />
                      </div>
                      <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-2">8 GB</div>
                      <div className="text-sm font-semibold text-slate-900 mb-1">Available RAM</div>
                      <div className="text-xs text-slate-500">Plenty of memory</div>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-slate-200">
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <FontAwesomeIcon icon={faHardDrive} className="text-white text-3xl" />
                      </div>
                      <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent mb-2">SSD</div>
                      <div className="text-sm font-semibold text-slate-900 mb-1">Storage Type</div>
                      <div className="text-xs text-slate-500">Ultra-fast drives</div>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="mt-12 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4">
                      <button
                        onClick={handleStartTrial}
                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
                      >
                        <FontAwesomeIcon icon={faRocket} />
                        Start Your Free Trial
                      </button>
                      <button
                        onClick={handleComparePlans}
                        className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl border-2 border-slate-300 hover:border-blue-500 hover:shadow-lg transition-all duration-300"
                      >
                        Compare All Plans
                      </button>
                    </div>
                    <p className="text-sm text-slate-600 mt-4">No credit card required • 30-day money-back guarantee</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
