'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/layout/Sidebar';
import TopHeader from '@/components/layout/TopHeader';
import MobileMenu from '@/components/layout/MobileMenu';
import WizardStepper from '@/components/ui/WizardStepper';
import ThemeCard from '@/components/wizard/ThemeCard';
import FilterBar from '@/components/wizard/FilterBar';
import { themes, themeFeatures, popularThemes, categories, platforms } from '@/lib/themesData';
import { wizardSteps } from '@/lib/hostingPlans';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faArrowLeft,
  faFire,
  faStar,
  faDownload,
  faCheck,
  faXmark,
  faWandMagicSparkles,
  faHeadset,
  faCalendar,
  faStore,
  faFilter
} from '@fortawesome/free-solid-svg-icons';

export default function WizardThemePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<string>('corporate-pro');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedPlatform, setSelectedPlatform] = useState('All Platforms');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter themes based on search and filters
  const filteredThemes = useMemo(() => {
    return themes.filter((theme) => {
      const matchesSearch = theme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        theme.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All Categories' || theme.category === selectedCategory;
      const matchesPlatform = selectedPlatform === 'All Platforms' || theme.platform === selectedPlatform;
      return matchesSearch && matchesCategory && matchesPlatform;
    });
  }, [searchTerm, selectedCategory, selectedPlatform]);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopHeader
          title="New Site Deployment"
          subtitle="Step 1 of 4: Choose Theme"
          onMenuToggle={() => setIsMobileMenuOpen(true)}
          showSearch={false}
          showExitButton={true}
        >
          <WizardStepper currentStep={1} steps={wizardSteps} />
        </TopHeader>

        <main className="flex-1 overflow-y-auto bg-stone-50 pb-32">
          {/* Main Content */}
          <section className="px-4 md:px-8 py-6 md:py-8">
            <div className="max-w-7xl mx-auto">

              {/* Step Header */}
              <div className="mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-stone-900 mb-2 md:mb-3">
                  Choose Your Theme
                </h2>
                <p className="text-base md:text-lg text-stone-600 max-w-3xl">
                  Select from your purchased themes on PackMyCode. Each theme is fully customizable and optimized for performance.
                </p>
              </div>

              {/* Filter Bar */}
              <FilterBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                selectedPlatform={selectedPlatform}
                onPlatformChange={setSelectedPlatform}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                resultCount={filteredThemes.length}
                categories={categories}
                platforms={platforms}
              />

              {/* Theme Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {filteredThemes.map((theme) => (
                  <ThemeCard
                    key={theme.id}
                    theme={theme}
                    isSelected={selectedTheme === theme.id}
                    onSelect={setSelectedTheme}
                  />
                ))}
              </div>

              {/* What's Included Section */}
              <section className="mb-8">
                <h3 className="text-2xl font-display font-bold text-stone-900 mb-6">
                  What's Included with Every Theme
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {themeFeatures.map((feature) => (
                    <div
                      key={feature.id}
                      className="bg-white border border-stone-200 rounded-card p-6 shadow-saas"
                    >
                      <div className={`w-12 h-12 bg-${feature.color}-50 rounded-lg flex items-center justify-center mb-4`}>
                        <i className={`fas ${feature.icon} text-${feature.color}-600 text-xl`}></i>
                      </div>
                      <h4 className="text-lg font-display font-bold text-stone-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-stone-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Theme Comparison Section */}
              <section className="mb-8">
                <h3 className="text-2xl font-display font-bold text-stone-900 mb-6">
                  Compare Themes
                </h3>
                <div className="bg-white border border-stone-200 rounded-card shadow-saas overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-stone-50 border-b border-stone-200">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-stone-900">
                            Feature
                          </th>
                          <th className="px-6 py-4 text-center text-sm font-semibold text-stone-900">
                            Corporate Pro
                          </th>
                          <th className="px-6 py-4 text-center text-sm font-semibold text-stone-900">
                            ShopMaster
                          </th>
                          <th className="px-6 py-4 text-center text-sm font-semibold text-stone-900">
                            Creative Portfolio
                          </th>
                          <th className="px-6 py-4 text-center text-sm font-semibold text-stone-900">
                            Restaurant Deluxe
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200">
                        <tr className="hover:bg-stone-50 transition">
                          <td className="px-6 py-4 text-sm text-stone-900">Pages Included</td>
                          <td className="px-6 py-4 text-center text-sm text-stone-600">15+</td>
                          <td className="px-6 py-4 text-center text-sm text-stone-600">20+</td>
                          <td className="px-6 py-4 text-center text-sm text-stone-600">12+</td>
                          <td className="px-6 py-4 text-center text-sm text-stone-600">10+</td>
                        </tr>
                        <tr className="hover:bg-stone-50 transition">
                          <td className="px-6 py-4 text-sm text-stone-900">E-Commerce Ready</td>
                          <td className="px-6 py-4 text-center">
                            <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                          </td>
                          <td className="px-6 py-4 text-center">
                            <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                          </td>
                          <td className="px-6 py-4 text-center">
                            <FontAwesomeIcon icon={faXmark} className="text-stone-300" />
                          </td>
                          <td className="px-6 py-4 text-center">
                            <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                          </td>
                        </tr>
                        <tr className="hover:bg-stone-50 transition">
                          <td className="px-6 py-4 text-sm text-stone-900">Blog Functionality</td>
                          <td className="px-6 py-4 text-center">
                            <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                          </td>
                          <td className="px-6 py-4 text-center">
                            <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                          </td>
                          <td className="px-6 py-4 text-center">
                            <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                          </td>
                          <td className="px-6 py-4 text-center">
                            <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                          </td>
                        </tr>
                        <tr className="hover:bg-stone-50 transition">
                          <td className="px-6 py-4 text-sm text-stone-900">Contact Forms</td>
                          <td className="px-6 py-4 text-center">
                            <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                          </td>
                          <td className="px-6 py-4 text-center">
                            <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                          </td>
                          <td className="px-6 py-4 text-center">
                            <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                          </td>
                          <td className="px-6 py-4 text-center">
                            <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                          </td>
                        </tr>
                        <tr className="hover:bg-stone-50 transition">
                          <td className="px-6 py-4 text-sm text-stone-900">Booking System</td>
                          <td className="px-6 py-4 text-center">
                            <FontAwesomeIcon icon={faXmark} className="text-stone-300" />
                          </td>
                          <td className="px-6 py-4 text-center">
                            <FontAwesomeIcon icon={faXmark} className="text-stone-300" />
                          </td>
                          <td className="px-6 py-4 text-center">
                            <FontAwesomeIcon icon={faXmark} className="text-stone-300" />
                          </td>
                          <td className="px-6 py-4 text-center">
                            <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                          </td>
                        </tr>
                        <tr className="hover:bg-stone-50 transition">
                          <td className="px-6 py-4 text-sm text-stone-900">Multi-language</td>
                          <td className="px-6 py-4 text-center">
                            <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                          </td>
                          <td className="px-6 py-4 text-center">
                            <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                          </td>
                          <td className="px-6 py-4 text-center">
                            <FontAwesomeIcon icon={faXmark} className="text-stone-300" />
                          </td>
                          <td className="px-6 py-4 text-center">
                            <FontAwesomeIcon icon={faCheck} className="text-green-600" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Most Popular This Month Section */}
              <section className="mb-8">
                <h3 className="text-2xl font-display font-bold text-stone-900 mb-6">
                  Most Popular This Month
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {popularThemes.map((theme) => (
                    <div
                      key={theme.id}
                      className={`bg-gradient-to-br ${theme.gradient} border ${theme.borderColor} rounded-card p-6`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-2.5 py-1 ${
                          theme.rank === 1 ? 'bg-blue-500' :
                          theme.rank === 2 ? 'bg-purple-500' :
                          'bg-green-500'
                        } text-white text-xs font-semibold rounded-full`}>
                          #{theme.rank} Popular
                        </span>
                        <FontAwesomeIcon icon={faFire} className="text-orange-500 text-xl" />
                      </div>
                      <h4 className="text-lg font-display font-bold text-stone-900 mb-2">
                        {theme.name}
                      </h4>
                      <p className="text-sm text-stone-700 mb-4">{theme.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-stone-600">
                        <span>
                          <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
                          {theme.rating}
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faDownload} className="mr-1" />
                          {theme.downloads}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Need More Themes Section */}
              <section className="mb-8">
                <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-card p-8 text-white shadow-saas-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
                  <div className="relative z-10 max-w-3xl">
                    <h3 className="text-2xl font-display font-bold mb-3">Need More Themes?</h3>
                    <p className="text-white/90 mb-6 text-lg">
                      Browse thousands of premium themes on PackMyCode marketplace. Find the perfect design for any project.
                    </p>
                    <div className="flex items-center space-x-4">
                      <button className="px-6 py-3 bg-white text-stone-900 font-semibold rounded-card hover:bg-stone-100 transition shadow-saas">
                        <FontAwesomeIcon icon={faStore} className="mr-2" />
                        Browse Marketplace
                      </button>
                      <button className="px-6 py-3 bg-white/10 text-white font-semibold rounded-card hover:bg-white/20 transition backdrop-blur-sm">
                        <FontAwesomeIcon icon={faFilter} className="mr-2" />
                        View by Category
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Need Help Choosing Section */}
              <section className="mb-8">
                <h3 className="text-2xl font-display font-bold text-stone-900 mb-6">
                  Need Help Choosing?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {/* AI Theme Recommender Card */}
                  <div className="bg-white border border-stone-200 rounded-card p-6 shadow-saas">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={faWandMagicSparkles} className="text-blue-600 text-xl" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-display font-bold text-stone-900 mb-2">
                          AI Theme Recommender
                        </h4>
                        <p className="text-sm text-stone-600 mb-4">
                          Answer a few questions and let our AI suggest the perfect theme for your project.
                        </p>
                        <button className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 text-sm font-medium rounded-lg transition">
                          <FontAwesomeIcon icon={faWandMagicSparkles} className="mr-2" />
                          Get AI Recommendation
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Expert Consultation Card */}
                  <div className="bg-white border border-stone-200 rounded-card p-6 shadow-saas">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={faHeadset} className="text-purple-600 text-xl" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-display font-bold text-stone-900 mb-2">
                          Talk to an Expert
                        </h4>
                        <p className="text-sm text-stone-600 mb-4">
                          Schedule a free consultation with our theme experts to find the best fit.
                        </p>
                        <button className="px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 text-sm font-medium rounded-lg transition">
                          <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                          Schedule Consultation
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

            </div>
          </section>
        </main>

        {/* Sticky Footer with Action Buttons */}
        <div className="fixed bottom-0 left-0 md:left-64 right-0 bg-white border-t border-stone-200 px-4 md:px-8 py-3 md:py-4 z-30">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 md:gap-4">
            <button
              className="px-3 md:px-6 py-2 md:py-3 text-stone-400 cursor-not-allowed font-medium transition flex items-center text-sm md:text-base"
              disabled
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-1 md:mr-2 text-sm" />
              <span className="hidden sm:inline">Back</span>
            </button>

            <div className="flex items-center gap-2 md:gap-4">
              <Link
                href="/"
                className="hidden md:inline-block px-6 py-3 text-stone-600 hover:text-stone-900 font-medium transition"
              >
                Save & Exit
              </Link>
              <Link
                href="/wizard/hosting"
                className="px-4 md:px-8 py-2 md:py-3 bg-pmc-red hover:bg-pmc-red-dark text-white font-semibold rounded-card shadow-saas transition flex items-center text-sm md:text-base whitespace-nowrap"
              >
                <span className="hidden sm:inline">Next: Hosting & Domain</span>
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
