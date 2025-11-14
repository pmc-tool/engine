'use client';

import { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import TopHeader from '@/components/layout/TopHeader';
import MobileMenu from '@/components/layout/MobileMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faShoppingCart,
  faCartPlus,
  faCheck,
  faXmark,
  faStar,
  faLock,
  faShieldHalved,
  faFire,
  faBolt,
  faTag,
  faCrown,
  faBell,
  faChevronDown,
  faArrowRight,
  faBriefcase,
  faCode,
  faPalette,
  faUser,
  faEarthAmericas,
  faCircleInfo,
  faHeadset,
  faRocket,
  faPhone,
  faRotate,
  faEnvelope,
  faServer,
  faUserSecret
} from '@fortawesome/free-solid-svg-icons';

interface SearchResult {
  domain: string;
  available: boolean;
  price: string;
  renewalPrice: string;
  badge?: string;
  badgeColor?: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

export default function DomainSearchPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const searchResults: SearchResult[] = [
    {
      domain: 'mybusiness.com',
      available: true,
      price: '$12.99',
      renewalPrice: '$14.99',
      badge: 'Available',
      badgeColor: 'bg-green-600',
      description: 'Premium domain',
      iconBg: 'bg-green-600',
      iconColor: 'text-white'
    },
    {
      domain: 'mybusiness.io',
      available: true,
      price: '$39.99',
      renewalPrice: '$49.99',
      badge: 'Trending',
      badgeColor: 'bg-purple-100 text-purple-700',
      description: 'Perfect for tech startups and SaaS products',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      domain: 'mybusiness.net',
      available: true,
      price: '$14.99',
      renewalPrice: '$16.99',
      description: 'Classic extension for businesses and organizations',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      domain: 'mybusiness.co',
      available: true,
      price: '$24.99',
      renewalPrice: '$29.99',
      description: 'Short and memorable for modern companies',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      domain: 'mybusiness.app',
      available: true,
      price: '$18.99',
      renewalPrice: '$22.99',
      badge: 'Popular',
      badgeColor: 'bg-green-100 text-green-700',
      description: 'Ideal for mobile and web applications',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600'
    },
    {
      domain: 'mybusiness.dev',
      available: true,
      price: '$16.99',
      renewalPrice: '$19.99',
      description: 'Perfect for developers and tech projects',
      iconBg: 'bg-cyan-100',
      iconColor: 'text-cyan-600'
    },
    {
      domain: 'mybusiness.ai',
      available: false,
      price: '',
      renewalPrice: '',
      description: 'This domain is already registered',
      iconBg: 'bg-gray-200',
      iconColor: 'text-gray-400'
    },
    {
      domain: 'mybusiness.xyz',
      available: true,
      price: '$2.99',
      renewalPrice: '$12.99',
      badge: 'Budget-friendly',
      badgeColor: 'bg-amber-100 text-amber-700',
      description: 'Affordable alternative for any purpose',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    }
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setShowResults(true);
    }
  };

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const popularTLDs = ['.com', '.io', '.net', '.co', '.app', '.dev', '.ai', '.xyz'];

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopHeader
          title="Domain Search & Purchase"
          onMenuToggle={() => setIsMobileMenuOpen(true)}
          showSiteSwitcher={false}
        />

        <main className="flex-1 overflow-y-auto bg-gray-50">
          {/* Page Header */}
          <div className="p-8">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-3xl font-bold text-gray-900">Search & Purchase Domains</h1>
              <button
                className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>Cart ({cartCount})</span>
              </button>
            </div>
            <p className="text-gray-600">Find and register the perfect domain for your next project. All domains include free SSL, DNS management, and WHOIS privacy.</p>
          </div>

          {/* Search Section */}
          <div className="px-8 mb-8">
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl border border-blue-200 p-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white text-3xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Find Your Perfect Domain</h2>
                  <p className="text-gray-600">Search millions of available domains across all popular TLDs</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex gap-3 mb-4">
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                        placeholder="Enter your domain name (e.g., mybusiness)"
                        className="w-full px-5 py-4 pr-12 border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg font-medium"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl" />
                      </div>
                    </div>
                    <button
                      onClick={handleSearch}
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 text-lg"
                    >
                      <span>Search</span>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                      <span className="text-gray-600">Instant availability check</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faLock} className="text-green-600" />
                      <span className="text-gray-600">Free WHOIS privacy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faShieldHalved} className="text-green-600" />
                      <span className="text-gray-600">Free SSL included</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-center text-sm text-gray-600 mb-3">Popular extensions:</div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {popularTLDs.map((tld) => (
                      <button
                        key={tld}
                        onClick={() => {
                          setSearchQuery(searchQuery || 'mybusiness');
                          handleSearch();
                        }}
                        className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors"
                      >
                        {tld}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search Results */}
          {showResults && (
            <div className="px-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">Search Results</h2>
                  <p className="text-sm text-gray-600">Showing results for "<span className="font-semibold">{searchQuery || 'mybusiness'}</span>"</p>
                </div>
                <div className="flex items-center gap-3">
                  <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Sort by: Relevance</option>
                    <option>Sort by: Price (Low to High)</option>
                    <option>Sort by: Price (High to Low)</option>
                    <option>Sort by: Popularity</option>
                  </select>
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
                    <FontAwesomeIcon icon={faRotate} />
                    Filters
                  </button>
                </div>
              </div>

              {/* Primary Result */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-300 p-6 mb-6 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center shadow-lg">
                      <FontAwesomeIcon icon={faCheck} className="text-white text-2xl" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl font-bold text-gray-900 font-mono">mybusiness.com</span>
                        <span className="px-3 py-1 bg-green-600 text-white rounded-lg text-xs font-semibold uppercase tracking-wide">Available</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1.5">
                          <FontAwesomeIcon icon={faStar} className="text-amber-500" />
                          <span>Premium domain</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <FontAwesomeIcon icon={faLock} className="text-green-600" />
                          <span>Free WHOIS privacy</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <FontAwesomeIcon icon={faShieldHalved} className="text-green-600" />
                          <span>Free SSL certificate</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 mb-1">First year</div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">$12.99<span className="text-lg text-gray-600">/yr</span></div>
                    <button
                      onClick={handleAddToCart}
                      className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                    >
                      <FontAwesomeIcon icon={faCartPlus} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              {/* Alternative Results */}
              <div className="space-y-3">
                {searchResults.slice(1).map((result, index) => (
                  <div
                    key={index}
                    className={`${result.available ? 'bg-white' : 'bg-gray-50'} rounded-xl border ${result.available ? 'border-gray-200 hover:border-blue-300 hover:shadow-md' : 'border-gray-200'} p-5 transition-all`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <div className={`w-12 h-12 ${result.iconBg} rounded-lg flex items-center justify-center`}>
                          <FontAwesomeIcon
                            icon={result.available ? faMagnifyingGlass : faXmark}
                            className={`${result.iconColor} text-xl`}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-xl font-bold text-gray-900 font-mono">{result.domain}</span>
                            {result.available && (
                              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-semibold">Available</span>
                            )}
                            {!result.available && (
                              <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-semibold">Taken</span>
                            )}
                            {result.badge && (
                              <span className={`px-2 py-0.5 ${result.badgeColor} rounded text-xs font-semibold flex items-center gap-1`}>
                                {result.badge === 'Trending' && <FontAwesomeIcon icon={faFire} className="text-xs" />}
                                {result.badge === 'Popular' && <FontAwesomeIcon icon={faBolt} className="text-xs" />}
                                {result.badge === 'Budget-friendly' && <FontAwesomeIcon icon={faTag} className="text-xs" />}
                                {result.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-gray-600">{result.description}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        {result.available ? (
                          <>
                            <div className="text-right">
                              <div className="text-xs text-gray-500 mb-0.5">First year</div>
                              <div className="text-2xl font-bold text-gray-900">{result.price}<span className="text-sm text-gray-600">/yr</span></div>
                              <div className="text-xs text-gray-500">Renews at {result.renewalPrice}/yr</div>
                            </div>
                            <button
                              onClick={handleAddToCart}
                              className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                            >
                              <FontAwesomeIcon icon={faCartPlus} />
                              Add to Cart
                            </button>
                          </>
                        ) : (
                          <button className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                            <FontAwesomeIcon icon={faBell} />
                            Get Notified
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
                  <span>Load More Results</span>
                  <FontAwesomeIcon icon={faChevronDown} />
                </button>
              </div>
            </div>
          )}

          {/* TLD Categories */}
          <div className="px-8 mb-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Browse by Category</h2>
              <p className="text-gray-600">Explore domain extensions organized by industry and purpose</p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faBriefcase} className="text-white text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Business & Commerce</h3>
                <p className="text-sm text-gray-600 mb-4">Professional domains for businesses and e-commerce</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium">.com</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium">.biz</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium">.shop</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium">.store</span>
                </div>
                <div className="text-sm text-blue-600 font-medium flex items-center gap-1">
                  View all extensions
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-purple-300 hover:shadow-lg transition-all cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faCode} className="text-white text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Technology & Development</h3>
                <p className="text-sm text-gray-600 mb-4">Modern domains for tech companies and developers</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-xs font-medium">.io</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-xs font-medium">.dev</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-xs font-medium">.tech</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-xs font-medium">.ai</span>
                </div>
                <div className="text-sm text-purple-600 font-medium flex items-center gap-1">
                  View all extensions
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-pink-300 hover:shadow-lg transition-all cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faPalette} className="text-white text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Creative & Media</h3>
                <p className="text-sm text-gray-600 mb-4">Expressive domains for artists and content creators</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-pink-50 text-pink-700 rounded-lg text-xs font-medium">.art</span>
                  <span className="px-3 py-1 bg-pink-50 text-pink-700 rounded-lg text-xs font-medium">.design</span>
                  <span className="px-3 py-1 bg-pink-50 text-pink-700 rounded-lg text-xs font-medium">.media</span>
                  <span className="px-3 py-1 bg-pink-50 text-pink-700 rounded-lg text-xs font-medium">.studio</span>
                </div>
                <div className="text-sm text-pink-600 font-medium flex items-center gap-1">
                  View all extensions
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-green-300 hover:shadow-lg transition-all cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faUser} className="text-white text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal & Lifestyle</h3>
                <p className="text-sm text-gray-600 mb-4">Perfect domains for personal brands and blogs</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-xs font-medium">.me</span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-xs font-medium">.life</span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-xs font-medium">.blog</span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-xs font-medium">.family</span>
                </div>
                <div className="text-sm text-green-600 font-medium flex items-center gap-1">
                  View all extensions
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-amber-300 hover:shadow-lg transition-all cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faEarthAmericas} className="text-white text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Regional & Country</h3>
                <p className="text-sm text-gray-600 mb-4">Location-specific domains for local businesses</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-lg text-xs font-medium">.us</span>
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-lg text-xs font-medium">.uk</span>
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-lg text-xs font-medium">.ca</span>
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-lg text-xs font-medium">.de</span>
                </div>
                <div className="text-sm text-amber-600 font-medium flex items-center gap-1">
                  View all extensions
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:border-indigo-300 hover:shadow-lg transition-all cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faStar} className="text-white text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Special & Trending</h3>
                <p className="text-sm text-gray-600 mb-4">Unique and trending domain extensions</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-medium">.app</span>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-medium">.xyz</span>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-medium">.online</span>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-medium">.site</span>
                </div>
                <div className="text-sm text-indigo-600 font-medium flex items-center gap-1">
                  View all extensions
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                </div>
              </div>
            </div>
          </div>

          {/* Domain Pricing Table */}
          <div className="px-8 mb-8">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Popular Domain Pricing</h2>
                <p className="text-gray-600">Compare prices across popular domain extensions</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-4 py-4 text-left text-sm font-semibold text-gray-900">Extension</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold text-gray-900">First Year</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold text-gray-900">Renewal</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold text-gray-900">Transfer</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold text-gray-900">Features</th>
                      <th className="px-4 py-4 text-left text-sm font-semibold text-gray-900"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { ext: '.com', badge: 'Most Popular', first: '$12.99', renewal: '$14.99/yr', transfer: '$14.99' },
                      { ext: '.io', badge: 'Trending', first: '$39.99', renewal: '$49.99/yr', transfer: '$49.99' },
                      { ext: '.net', first: '$14.99', renewal: '$16.99/yr', transfer: '$16.99' },
                      { ext: '.app', first: '$18.99', renewal: '$22.99/yr', transfer: '$22.99' },
                      { ext: '.dev', first: '$16.99', renewal: '$19.99/yr', transfer: '$19.99' },
                      { ext: '.xyz', badge: 'Budget', first: '$2.99', renewal: '$12.99/yr', transfer: '$12.99' }
                    ].map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg font-mono font-semibold">{item.ext}</span>
                            {item.badge && (
                              <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                                item.badge === 'Most Popular' ? 'bg-green-100 text-green-700' :
                                item.badge === 'Trending' ? 'bg-purple-100 text-purple-700' :
                                'bg-amber-100 text-amber-700'
                              }`}>{item.badge}</span>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-gray-900 font-semibold">{item.first}</td>
                        <td className="px-4 py-4 text-gray-600">{item.renewal}</td>
                        <td className="px-4 py-4 text-gray-600">{item.transfer}</td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2 text-xs">
                            <span className="px-2 py-1 bg-green-50 text-green-700 rounded">Free SSL</span>
                            <span className="px-2 py-1 bg-green-50 text-green-700 rounded">Privacy</span>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                            Search
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCircleInfo} className="text-blue-600 mt-0.5" />
                  <div className="flex-1 text-sm text-blue-900">
                    <span className="font-medium">All domains include:</span> Free SSL certificate, Free WHOIS privacy protection, Free DNS management, and 24/7 support. Prices shown are in USD and may be subject to applicable taxes.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="px-8 mb-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">What's Included with Every Domain</h2>
              <p className="text-gray-600">Premium features at no extra cost</p>
            </div>

            <div className="grid grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faShieldHalved} className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Free SSL Certificate</h3>
                <p className="text-sm text-gray-600">Automatic SSL/TLS certificates for secure HTTPS connections. Auto-renewed every 90 days.</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faUserSecret} className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">WHOIS Privacy</h3>
                <p className="text-sm text-gray-600">Keep your personal information private. Your contact details are hidden from public WHOIS databases.</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200 p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faServer} className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">DNS Management</h3>
                <p className="text-sm text-gray-600">Advanced DNS management with instant propagation. Full control over A, CNAME, MX, and TXT records.</p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200 p-6">
                <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faHeadset} className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-600">Expert support team available around the clock to help with any domain-related questions.</p>
              </div>
            </div>
          </div>

          {/* Trust Section */}
          <div className="px-8 mb-8">
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 text-white">
                <div className="text-5xl font-bold mb-2">50K+</div>
                <div className="text-blue-100 text-lg">Domains Registered</div>
                <div className="text-sm text-blue-200 mt-2">Trusted by thousands of businesses worldwide</div>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl p-8 text-white">
                <div className="text-5xl font-bold mb-2">99.9%</div>
                <div className="text-green-100 text-lg">Uptime Guarantee</div>
                <div className="text-sm text-green-200 mt-2">Industry-leading reliability and performance</div>
              </div>

              <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl p-8 text-white">
                <div className="text-5xl font-bold mb-2">24/7</div>
                <div className="text-amber-100 text-lg">Expert Support</div>
                <div className="text-sm text-amber-200 mt-2">Always here to help with your domains</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="px-8 pb-8">
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white">
              <div className="max-w-3xl mx-auto">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FontAwesomeIcon icon={faRocket} className="text-4xl" />
                </div>
                <h2 className="text-4xl font-bold mb-4">Ready to Claim Your Domain?</h2>
                <p className="text-xl text-blue-100 mb-8">Join thousands of satisfied customers who trust PMC Engine for their domain needs. Get started today with free SSL, WHOIS privacy, and 24/7 support.</p>
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 text-lg"
                  >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <span>Search Domains</span>
                  </button>
                  <button className="px-8 py-4 bg-white bg-opacity-20 text-white border-2 border-white rounded-xl font-semibold hover:bg-opacity-30 transition-all flex items-center gap-2 text-lg">
                    <FontAwesomeIcon icon={faPhone} />
                    <span>Contact Sales</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-20 right-6 z-50">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 flex items-center gap-3 min-w-[320px]">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <FontAwesomeIcon icon={faCheck} className="text-green-600" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">Added to cart!</div>
              <div className="text-xs text-gray-600">Domain successfully added to your cart</div>
            </div>
            <button onClick={() => setShowToast(false)} className="text-gray-400 hover:text-gray-600">
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
