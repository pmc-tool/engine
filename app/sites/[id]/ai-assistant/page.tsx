'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import TopHeader from '@/components/layout/TopHeader';
import MobileMenu from '@/components/layout/MobileMenu';
import StatCard from '@/components/ui/StatCard';
import QuickActionCard from '@/components/ui/QuickActionCard';
import ContentTemplateCard from '@/components/ui/ContentTemplateCard';
import RecentGenerationCard from '@/components/ui/RecentGenerationCard';
import CapabilityCard from '@/components/ui/CapabilityCard';
import {
  aiUsageStats,
  mockGenerations,
  contentTemplates,
  aiCapabilities,
  toneOptions,
  faqItems
} from '@/lib/aiGenerations';
import { mockSites } from '@/lib/mockData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWandMagicSparkles,
  faClockRotateLeft,
  faGear,
  faBolt,
  faFileLines,
  faImage,
  faChartLine,
  faSliders,
  faRotateRight,
  faCopy,
  faDownload,
  faCheck,
  faHeading,
  faParagraph,
  faList,
  faPenToSquare,
  faLanguage,
  faCrown,
  faArrowUp,
  faCircleInfo,
  faArrowRight,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';

export default function AIAssistantPage() {
  const params = useParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const site = mockSites.find(s => s.id === params.id) || mockSites[0];
  const [selectedContentType, setSelectedContentType] = useState('page');
  const [selectedTone, setSelectedTone] = useState('professional');
  const [contentLength, setContentLength] = useState(2);
  const [description, setDescription] = useState('');

  const contentTypes = [
    { value: 'page', label: 'Page', icon: faFileLines },
    { value: 'headline', label: 'Headline', icon: faHeading },
    { value: 'paragraph', label: 'Paragraph', icon: faParagraph },
    { value: 'list', label: 'List', icon: faList }
  ];

  const quickActions = [
    {
      icon: faFileLines,
      title: 'Generate Page',
      description: 'Create complete page with AI-generated content',
      gradient: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    {
      icon: faPenToSquare,
      title: 'Write Copy',
      description: 'Generate headlines, descriptions, and body text',
      gradient: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      icon: faImage,
      title: 'Create Images',
      description: 'Generate custom images for your content',
      gradient: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      icon: faLanguage,
      title: 'Translate',
      description: 'Translate content to multiple languages',
      gradient: 'bg-gradient-to-br from-orange-500 to-orange-600'
    }
  ];

  const lengthOptions = ['Short', 'Medium', 'Long'];

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
            {/* Hero Section */}
            <div className="mb-6 md:mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <FontAwesomeIcon icon={faWandMagicSparkles} className="text-2xl md:text-3xl text-pmc-red" />
                    <h1 className="text-2xl md:text-3xl font-display font-bold text-slate-900">AI Content Assistant</h1>
                  </div>
                  <p className="text-sm md:text-base text-slate-600">Generate, edit, and optimize content for your websites using advanced AI technology.</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="flex items-center px-3 md:px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition">
                    <FontAwesomeIcon icon={faClockRotateLeft} className="mr-2" />
                    <span className="hidden sm:inline">History</span>
                  </button>
                  <button className="flex items-center px-3 md:px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition">
                    <FontAwesomeIcon icon={faGear} className="mr-2" />
                    <span className="hidden sm:inline">Settings</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Usage Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
              <StatCard
                icon={faBolt}
                iconColor="text-purple-600"
                iconBg="bg-purple-50"
                label="AI Generations Used"
                value={aiUsageStats.generationsUsed}
                badge="This Month"
                badgeBg="bg-purple-50"
                badgeText="text-purple-700"
                showProgress={true}
                progress={aiUsageStats.generationsUsed}
                progressText={`${aiUsageStats.generationsUsed} of ${aiUsageStats.generationsTotal} available`}
              />
              <StatCard
                icon={faFileLines}
                iconColor="text-blue-600"
                iconBg="bg-blue-50"
                label="Pages Generated"
                value={aiUsageStats.pagesGenerated}
                badge="Total"
                badgeBg="bg-blue-50"
                badgeText="text-blue-700"
              />
              <StatCard
                icon={faImage}
                iconColor="text-green-600"
                iconBg="bg-green-50"
                label="Images Created"
                value={aiUsageStats.imagesCreated}
                badge="Total"
                badgeBg="bg-green-50"
                badgeText="text-green-700"
              />
              <StatCard
                icon={faChartLine}
                iconColor="text-orange-600"
                iconBg="bg-orange-50"
                label="Quality Score"
                value={`${aiUsageStats.qualityScore}%`}
                badge="Average"
                badgeBg="bg-orange-50"
                badgeText="text-orange-700"
              />
            </div>

            {/* Quick Actions */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-display font-bold text-slate-900 mb-4 md:mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {quickActions.map((action, index) => (
                  <QuickActionCard
                    key={index}
                    icon={action.icon}
                    title={action.title}
                    description={action.description}
                    gradient={action.gradient}
                  />
                ))}
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
              {/* Generator Interface */}
              <div className="lg:col-span-2 space-y-6 md:space-y-8">
                {/* AI Generator */}
                <div className="bg-white border border-slate-200 rounded-card shadow-sm overflow-hidden">
                  <div className="border-b border-slate-200 px-4 md:px-6 py-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <h2 className="text-lg md:text-xl font-display font-bold text-slate-900">AI Content Generator</h2>
                      <div className="flex items-center space-x-2">
                        <button className="px-3 py-1.5 bg-purple-50 text-purple-700 text-sm font-medium rounded-lg hover:bg-purple-100 transition">
                          <FontAwesomeIcon icon={faBolt} className="mr-1" />
                          Quick Mode
                        </button>
                        <button className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-200 transition">
                          <FontAwesomeIcon icon={faSliders} className="mr-1" />
                          Advanced
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 md:p-6">
                    {/* Content Type */}
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Content Type</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {contentTypes.map((type) => (
                          <button
                            key={type.value}
                            onClick={() => setSelectedContentType(type.value)}
                            className={`px-4 py-3 text-sm font-medium rounded-lg transition ${
                              selectedContentType === type.value
                                ? 'bg-purple-50 border-2 border-purple-500 text-purple-700'
                                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                            }`}
                          >
                            <FontAwesomeIcon icon={type.icon} className="mr-2" />
                            {type.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Select Site */}
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Select Site</label>
                      <select className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent transition">
                        <option>My Portfolio Site</option>
                        <option>E-Commerce Store</option>
                        <option>Restaurant Website</option>
                      </select>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Describe what you want to create</label>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent transition resize-none"
                        rows={5}
                        placeholder="Example: Create an about page for a modern web design agency. Include sections for company history, team members, values, and achievements. Use a professional but friendly tone."
                      />
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-slate-500">Be specific for better results</span>
                        <span className="text-xs text-slate-500">{description.length} / 500 characters</span>
                      </div>
                    </div>

                    {/* Tone & Style */}
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Tone & Style</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {toneOptions.map((tone) => (
                          <button
                            key={tone}
                            onClick={() => setSelectedTone(tone.toLowerCase())}
                            className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
                              selectedTone === tone.toLowerCase()
                                ? 'bg-purple-50 border-2 border-purple-500 text-purple-700'
                                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                            }`}
                          >
                            {tone}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Length */}
                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Length</label>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                        <input
                          type="range"
                          min="1"
                          max="3"
                          value={contentLength}
                          onChange={(e) => setContentLength(Number(e.target.value))}
                          className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-pmc-red"
                        />
                        <div className="flex items-center space-x-2">
                          {lengthOptions.map((option, index) => (
                            <span
                              key={option}
                              className={`px-3 py-1 text-xs font-medium rounded ${
                                contentLength === index + 1
                                  ? 'bg-purple-50 text-purple-700 font-semibold'
                                  : 'bg-slate-100 text-slate-700'
                              }`}
                            >
                              {option}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3">
                      <button className="w-full sm:flex-1 px-6 py-3 bg-pmc-red hover:bg-red-700 text-white font-semibold rounded-card transition shadow-sm">
                        <FontAwesomeIcon icon={faWandMagicSparkles} className="mr-2" />
                        Generate Content
                      </button>
                      <button className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-card transition">
                        <FontAwesomeIcon icon={faRotateRight} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Output Preview */}
                <div className="bg-white border border-slate-200 rounded-card shadow-sm overflow-hidden">
                  <div className="border-b border-slate-200 px-4 md:px-6 py-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <h2 className="text-lg md:text-xl font-display font-bold text-slate-900">Generated Content</h2>
                      <div className="flex items-center space-x-2">
                        <button className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-200 transition">
                          <FontAwesomeIcon icon={faCopy} className="mr-1" />
                          Copy
                        </button>
                        <button className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-200 transition">
                          <FontAwesomeIcon icon={faDownload} className="mr-1" />
                          Export
                        </button>
                        <button className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition">
                          <FontAwesomeIcon icon={faCheck} className="mr-1" />
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 md:p-6">
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 min-h-[400px]">
                      <div className="flex flex-col items-center justify-center h-full text-center">
                        <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-4">
                          <FontAwesomeIcon icon={faWandMagicSparkles} className="text-purple-600 text-2xl" />
                        </div>
                        <h3 className="text-lg font-display font-bold text-slate-900 mb-2">Ready to Generate</h3>
                        <p className="text-sm text-slate-600 max-w-md">Fill in the details above and click "Generate Content" to create AI-powered content for your website.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Templates Sidebar */}
              <div className="lg:col-span-1 space-y-6 md:space-y-8">
                {/* Content Templates */}
                <div className="bg-white border border-slate-200 rounded-card shadow-sm overflow-hidden">
                  <div className="border-b border-slate-200 px-4 md:px-6 py-4">
                    <h3 className="text-base md:text-lg font-display font-bold text-slate-900">Content Templates</h3>
                  </div>
                  <div className="p-4 space-y-3 max-h-[600px] overflow-y-auto">
                    {contentTemplates.map((template, index) => (
                      <ContentTemplateCard
                        key={index}
                        icon={template.icon}
                        title={template.title}
                        description={template.description}
                        isPopular={template.isPopular}
                      />
                    ))}
                  </div>
                </div>

                {/* Pro Tips */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-card p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={faLightbulb} className="text-white" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-slate-900">Pro Tips</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <FontAwesomeIcon icon={faCheck} className="text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-slate-700">Be specific about your target audience and industry</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <FontAwesomeIcon icon={faCheck} className="text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-slate-700">Include keywords you want to emphasize</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <FontAwesomeIcon icon={faCheck} className="text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-slate-700">Specify the desired tone and style clearly</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <FontAwesomeIcon icon={faCheck} className="text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-slate-700">Review and edit AI content before publishing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Generations */}
            <div className="mb-6 md:mb-8">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h2 className="text-xl md:text-2xl font-display font-bold text-slate-900">Recent Generations</h2>
                <button className="text-sm text-pmc-red hover:text-red-700 font-medium transition">
                  View All History
                  <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                </button>
              </div>
              <div className="bg-white border border-slate-200 rounded-card shadow-sm overflow-hidden">
                <div className="divide-y divide-slate-200">
                  {mockGenerations.map((generation) => (
                    <RecentGenerationCard
                      key={generation.id}
                      title={generation.title}
                      type={generation.type}
                      typeBadge={generation.typeBadge}
                      description={generation.description}
                      timestamp={generation.timestamp}
                      wordCount={generation.wordCount}
                      tone={generation.tone}
                      isApplied={generation.isApplied}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* AI Capabilities */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-display font-bold text-slate-900 mb-4 md:mb-6">AI Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {aiCapabilities.map((capability, index) => (
                  <CapabilityCard
                    key={index}
                    icon={capability.icon}
                    iconColor={capability.iconColor}
                    iconBg={capability.iconBg}
                    title={capability.title}
                    description={capability.description}
                    features={capability.features}
                  />
                ))}
              </div>
            </div>

            {/* Settings & Preferences */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-display font-bold text-slate-900 mb-4 md:mb-6">AI Settings & Preferences</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                {/* Default Preferences */}
                <div className="bg-white border border-slate-200 rounded-card p-6 shadow-sm">
                  <h3 className="text-base md:text-lg font-display font-bold text-slate-900 mb-4">Default Preferences</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Default Tone</label>
                      <select className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent transition">
                        <option>Professional</option>
                        <option>Casual</option>
                        <option>Creative</option>
                        <option>Technical</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Default Length</label>
                      <select className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent transition">
                        <option>Short</option>
                        <option selected>Medium</option>
                        <option>Long</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">Language</label>
                      <select className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent transition">
                        <option>English (US)</option>
                        <option>English (UK)</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Advanced Options */}
                <div className="bg-white border border-slate-200 rounded-card p-6 shadow-sm">
                  <h3 className="text-base md:text-lg font-display font-bold text-slate-900 mb-4">Advanced Options</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Auto-save Generations</div>
                        <div className="text-xs text-slate-600">Automatically save all generated content</div>
                      </div>
                      <button className="w-12 h-6 bg-pmc-red rounded-full relative transition">
                        <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Show Word Count</div>
                        <div className="text-xs text-slate-600">Display word count in preview</div>
                      </div>
                      <button className="w-12 h-6 bg-pmc-red rounded-full relative transition">
                        <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Enable Templates</div>
                        <div className="text-xs text-slate-600">Show template suggestions</div>
                      </div>
                      <button className="w-12 h-6 bg-pmc-red rounded-full relative transition">
                        <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Quick Mode Default</div>
                        <div className="text-xs text-slate-600">Start in quick mode by default</div>
                      </div>
                      <button className="w-12 h-6 bg-slate-200 rounded-full relative transition">
                        <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-display font-bold text-slate-900 mb-4 md:mb-6">Frequently Asked Questions</h2>
              <div className="bg-white border border-slate-200 rounded-card shadow-sm overflow-hidden">
                <div className="divide-y divide-slate-200">
                  {faqItems.map((item, index) => (
                    <div key={index} className="p-6">
                      <button className="w-full flex items-start justify-between text-left group">
                        <div className="flex-1 pr-4">
                          <h3 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-pmc-red transition">
                            {item.question}
                          </h3>
                          <p className="text-sm text-slate-600">{item.answer}</p>
                        </div>
                        <FontAwesomeIcon icon={faArrowRight} className="text-slate-400 group-hover:text-pmc-red transition mt-1 rotate-90" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Upgrade CTA */}
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-card p-6 md:p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
              <div className="relative z-10 max-w-3xl">
                <div className="flex items-center space-x-2 mb-4">
                  <FontAwesomeIcon icon={faCrown} className="text-2xl" />
                  <h2 className="text-xl md:text-2xl font-display font-bold">Need More AI Generations?</h2>
                </div>
                <p className="text-white/90 mb-6 text-base md:text-lg">Upgrade to our Premium plan and get unlimited AI generations, priority processing, and access to advanced AI models.</p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-card hover:bg-slate-100 transition shadow-sm">
                    <FontAwesomeIcon icon={faArrowUp} className="mr-2" />
                    Upgrade Plan
                  </button>
                  <button className="px-6 py-3 bg-white/10 text-white font-semibold rounded-card hover:bg-white/20 transition backdrop-blur-sm">
                    <FontAwesomeIcon icon={faCircleInfo} className="mr-2" />
                    Learn More
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
