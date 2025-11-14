'use client';

import { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import TopHeader from '@/components/layout/TopHeader';
import MobileMenu from '@/components/layout/MobileMenu';
import WizardStepper from '@/components/ui/WizardStepper';
import { wizardSteps } from '@/lib/hostingPlans';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWandMagicSparkles,
  faPenToSquare,
  faCheck,
  faLightbulb,
  faFileLines,
  faImage,
  faPalette,
  faCode,
  faEye,
  faCheckCircle,
  faInfoCircle,
  faSliders,
  faChevronDown,
  faBook,
  faCirclePlay,
  faHeadset,
  faClock,
  faArrowLeft,
  faArrowRight,
  faFloppyDisk,
  faCircleDot,
  faCircle
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function WizardCustomizationPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [contentMethod, setContentMethod] = useState<'ai' | 'manual'>('ai');
  const [businessName, setBusinessName] = useState('Creative Design Studio');
  const [industry, setIndustry] = useState('Design & Creative');
  const [businessDescription, setBusinessDescription] = useState('We are a creative design studio specializing in branding, web design, and digital marketing. Our team of talented designers and strategists help businesses create compelling visual identities and engaging digital experiences.');
  const [targetAudience, setTargetAudience] = useState('Startups and small businesses');
  const [location, setLocation] = useState('San Francisco, CA');
  const [toneOfVoice, setToneOfVoice] = useState('Professional');
  const [contentLength, setContentLength] = useState('Balanced');
  const [selectedPages, setSelectedPages] = useState(['Home', 'About', 'Services', 'Contact']);
  const [keyServices, setKeyServices] = useState('Branding, Web Design, Digital Marketing, UI/UX');
  const [uniqueSellingPoints, setUniqueSellingPoints] = useState('Award-winning design team, 10+ years of experience, personalized approach, fast turnaround times');
  const [contactEmail, setContactEmail] = useState('hello@creativedesign.com');
  const [phoneNumber, setPhoneNumber] = useState('+1 (415) 555-0123');
  const [instagram, setInstagram] = useState('https://instagram.com/creativedesignstudio');
  const [linkedin, setLinkedin] = useState('https://linkedin.com/company/creativedesign');
  const [generateText, setGenerateText] = useState(true);
  const [generateImages, setGenerateImages] = useState(true);
  const [suggestColors, setSuggestColors] = useState(true);
  const [seoOptimization, setSeoOptimization] = useState(false);

  const togglePage = (page: string) => {
    if (selectedPages.includes(page)) {
      setSelectedPages(selectedPages.filter(p => p !== page));
    } else {
      setSelectedPages([...selectedPages, page]);
    }
  };

  const toneOptions = ['Professional', 'Casual', 'Friendly', 'Authoritative'];
  const contentLengthOptions = [
    { value: 'Concise', label: 'Concise', description: 'Brief & to the point' },
    { value: 'Balanced', label: 'Balanced', description: 'Moderate detail' },
    { value: 'Detailed', label: 'Detailed', description: 'In-depth content' }
  ];
  const pageOptions = ['Home', 'About', 'Services', 'Portfolio', 'Contact', 'Blog'];

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopHeader
          title="New Site Wizard"
          subtitle="Step 3 of 4 - Customize Content"
          onMenuToggle={() => setIsMobileMenuOpen(true)}
          showSearch={false}
          showExitButton={true}
        >
          <WizardStepper currentStep={3} steps={wizardSteps} />
        </TopHeader>

        <main className="flex-1 overflow-y-auto bg-stone-50 pb-20 md:pb-24">

          <div className="flex">

            {/* Main Content */}
            <div className="flex-1 px-4 md:px-8 py-8">

              {/* Intro Section */}
              <section className="mb-8">
                <div className="max-w-5xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-stone-900 mb-3">Customize Your Site Content</h2>
                  <p className="text-base md:text-lg text-stone-600 mb-6">Choose how you want to populate your site. Use AI to generate professional content instantly, or customize everything manually with full control.</p>

                  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={faLightbulb} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-stone-900 mb-1">Pro Tip</h3>
                        <p className="text-sm text-stone-700">Start with AI-generated content and refine it manually for the best results. You can always regenerate or edit any section later.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Content Method Selection */}
              <section className="mb-8">
                <div className="max-w-5xl mx-auto">
                  <h3 className="text-xl font-display font-bold text-stone-900 mb-6">Select Content Method</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* AI Content Card */}
                    <button
                      onClick={() => setContentMethod('ai')}
                      className={`bg-white border-2 rounded-2xl p-8 shadow-lg hover:shadow-xl transition text-left group relative ${
                        contentMethod === 'ai' ? 'border-pmc-red' : 'border-stone-200'
                      }`}
                    >
                      {contentMethod === 'ai' && (
                        <div className="absolute top-4 right-4">
                          <div className="w-6 h-6 bg-pmc-red rounded-full flex items-center justify-center">
                            <FontAwesomeIcon icon={faCheck} className="text-white text-xs" />
                          </div>
                        </div>
                      )}
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <FontAwesomeIcon icon={faWandMagicSparkles} className="text-white text-2xl" />
                        </div>
                        <div>
                          <h4 className="text-xl font-display font-bold text-stone-900 mb-2">AI-Powered Content</h4>
                          <span className="px-2.5 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded-full">Recommended</span>
                        </div>
                      </div>
                      <p className="text-stone-600 mb-6">Let our AI generate professional content tailored to your site. Provide a few details about your business and watch the magic happen.</p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center text-sm text-stone-700">
                          <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                          <span>Generate pages, sections, and copy</span>
                        </div>
                        <div className="flex items-center text-sm text-stone-700">
                          <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                          <span>Create relevant images and graphics</span>
                        </div>
                        <div className="flex items-center text-sm text-stone-700">
                          <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                          <span>SEO-optimized content</span>
                        </div>
                        <div className="flex items-center text-sm text-stone-700">
                          <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                          <span>Save hours of manual work</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                        <span className="text-sm text-stone-500">Est. time: 2-3 minutes</span>
                        {contentMethod === 'ai' && (
                          <span className="text-sm font-semibold text-pmc-red">Selected</span>
                        )}
                      </div>
                    </button>

                    {/* Manual Content Card */}
                    <button
                      onClick={() => setContentMethod('manual')}
                      className={`bg-white border-2 rounded-2xl p-8 shadow-sm hover:shadow-xl transition text-left group ${
                        contentMethod === 'manual' ? 'border-pmc-red' : 'border-stone-200'
                      }`}
                    >
                      {contentMethod === 'manual' && (
                        <div className="absolute top-4 right-4">
                          <div className="w-6 h-6 bg-pmc-red rounded-full flex items-center justify-center">
                            <FontAwesomeIcon icon={faCheck} className="text-white text-xs" />
                          </div>
                        </div>
                      )}
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <FontAwesomeIcon icon={faPenToSquare} className="text-white text-2xl" />
                        </div>
                        <div>
                          <h4 className="text-xl font-display font-bold text-stone-900 mb-2">Manual Customization</h4>
                          <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">Full Control</span>
                        </div>
                      </div>
                      <p className="text-stone-600 mb-6">Start with a blank canvas and customize every aspect of your site manually. Perfect for those who want complete creative control.</p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center text-sm text-stone-700">
                          <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                          <span>Edit text, images, and layouts</span>
                        </div>
                        <div className="flex items-center text-sm text-stone-700">
                          <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                          <span>Upload your own assets</span>
                        </div>
                        <div className="flex items-center text-sm text-stone-700">
                          <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                          <span>Customize colors and fonts</span>
                        </div>
                        <div className="flex items-center text-sm text-stone-700">
                          <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2" />
                          <span>Complete creative freedom</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                        <span className="text-sm text-stone-500">Est. time: 15-30 minutes</span>
                        {contentMethod === 'manual' ? (
                          <span className="text-sm font-semibold text-pmc-red">Selected</span>
                        ) : (
                          <span className="text-sm font-medium text-stone-400 group-hover:text-stone-600">Select</span>
                        )}
                      </div>
                    </button>

                  </div>
                </div>
              </section>

              {/* AI Content Form */}
              {contentMethod === 'ai' && (
                <>
                  <section className="mb-8">
                    <div className="max-w-5xl mx-auto">
                      <div className="bg-white border border-stone-200 rounded-2xl shadow-sm p-6 md:p-8">

                        <div className="flex items-center justify-between mb-8">
                          <div>
                            <h3 className="text-xl md:text-2xl font-display font-bold text-stone-900 mb-2">AI Content Generation</h3>
                            <p className="text-stone-600">Tell us about your business and we'll create professional content for your site.</p>
                          </div>
                          <div className="px-4 py-2 bg-purple-50 text-purple-700 text-sm font-semibold rounded-lg">
                            <FontAwesomeIcon icon={faWandMagicSparkles} className="mr-2" />
                            AI Powered
                          </div>
                        </div>

                        <div className="space-y-6">

                          {/* Business Information Section */}
                          <div>
                            <h4 className="text-lg font-display font-bold text-stone-900 mb-4">Business Information</h4>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                              <div>
                                <label className="block text-sm font-semibold text-stone-900 mb-2">Business Name *</label>
                                <input
                                  type="text"
                                  value={businessName}
                                  onChange={(e) => setBusinessName(e.target.value)}
                                  placeholder="e.g., Acme Corporation"
                                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent transition"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-stone-900 mb-2">Industry *</label>
                                <select
                                  value={industry}
                                  onChange={(e) => setIndustry(e.target.value)}
                                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent transition"
                                >
                                  <option>Select industry...</option>
                                  <option>Design & Creative</option>
                                  <option>Technology & Software</option>
                                  <option>E-commerce & Retail</option>
                                  <option>Healthcare & Medical</option>
                                  <option>Education & Training</option>
                                  <option>Real Estate</option>
                                  <option>Food & Restaurant</option>
                                  <option>Professional Services</option>
                                  <option>Other</option>
                                </select>
                              </div>
                            </div>

                            <div className="mb-6">
                              <label className="block text-sm font-semibold text-stone-900 mb-2">Business Description *</label>
                              <textarea
                                rows={4}
                                value={businessDescription}
                                onChange={(e) => setBusinessDescription(e.target.value)}
                                placeholder="Describe your business, products, or services..."
                                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent transition resize-none"
                              />
                              <div className="flex items-center justify-between mt-2">
                                <span className="text-xs text-stone-500">Provide as much detail as possible for better AI results</span>
                                <span className="text-xs text-stone-500">{businessDescription.length} characters</span>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label className="block text-sm font-semibold text-stone-900 mb-2">Target Audience</label>
                                <input
                                  type="text"
                                  value={targetAudience}
                                  onChange={(e) => setTargetAudience(e.target.value)}
                                  placeholder="e.g., Small businesses, Startups"
                                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent transition"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-stone-900 mb-2">Location</label>
                                <input
                                  type="text"
                                  value={location}
                                  onChange={(e) => setLocation(e.target.value)}
                                  placeholder="e.g., New York, NY"
                                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent transition"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="h-px bg-stone-200"></div>

                          {/* Content Preferences Section */}
                          <div>
                            <h4 className="text-lg font-display font-bold text-stone-900 mb-4">Content Preferences</h4>

                            <div className="mb-6">
                              <label className="block text-sm font-semibold text-stone-900 mb-2">Tone of Voice</label>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {toneOptions.map((tone) => (
                                  <button
                                    key={tone}
                                    onClick={() => setToneOfVoice(tone)}
                                    className={`px-4 py-3 text-sm font-medium rounded-lg transition ${
                                      toneOfVoice === tone
                                        ? 'bg-pmc-red text-white'
                                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                                    }`}
                                  >
                                    {tone}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div className="mb-6">
                              <label className="block text-sm font-semibold text-stone-900 mb-2">Content Length</label>
                              <div className="grid grid-cols-3 gap-3">
                                {contentLengthOptions.map((option) => (
                                  <button
                                    key={option.value}
                                    onClick={() => setContentLength(option.value)}
                                    className={`px-4 py-3 text-sm font-medium rounded-lg transition ${
                                      contentLength === option.value
                                        ? 'bg-pmc-red text-white'
                                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                                    }`}
                                  >
                                    <div className="font-semibold mb-1">{option.label}</div>
                                    <div className={`text-xs ${
                                      contentLength === option.value ? 'text-white/80' : 'text-stone-500'
                                    }`}>{option.description}</div>
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-stone-900 mb-2">Pages to Generate</label>
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {pageOptions.map((page) => (
                                  <label
                                    key={page}
                                    className={`flex items-center px-4 py-3 bg-stone-50 border-2 rounded-lg cursor-pointer ${
                                      selectedPages.includes(page)
                                        ? 'border-pmc-red'
                                        : 'border-stone-200 hover:border-stone-300'
                                    }`}
                                  >
                                    <input
                                      type="checkbox"
                                      checked={selectedPages.includes(page)}
                                      onChange={() => togglePage(page)}
                                      className="w-4 h-4 text-pmc-red border-stone-300 rounded focus:ring-pmc-red"
                                    />
                                    <span className="ml-3 text-sm font-medium text-stone-900">{page}</span>
                                  </label>
                                ))}
                              </div>
                              <p className="text-xs text-stone-500 mt-2">Select the pages you want AI to generate content for</p>
                            </div>
                          </div>

                          <div className="h-px bg-stone-200"></div>

                          {/* Additional Details Section */}
                          <div>
                            <h4 className="text-lg font-display font-bold text-stone-900 mb-4">Additional Details (Optional)</h4>

                            <div className="mb-6">
                              <label className="block text-sm font-semibold text-stone-900 mb-2">Key Services or Products</label>
                              <input
                                type="text"
                                value={keyServices}
                                onChange={(e) => setKeyServices(e.target.value)}
                                placeholder="e.g., Web Design, Branding, SEO"
                                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent transition"
                              />
                            </div>

                            <div className="mb-6">
                              <label className="block text-sm font-semibold text-stone-900 mb-2">Unique Selling Points</label>
                              <textarea
                                rows={3}
                                value={uniqueSellingPoints}
                                onChange={(e) => setUniqueSellingPoints(e.target.value)}
                                placeholder="What makes your business unique?"
                                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent transition resize-none"
                              />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label className="block text-sm font-semibold text-stone-900 mb-2">Contact Email</label>
                                <input
                                  type="email"
                                  value={contactEmail}
                                  onChange={(e) => setContactEmail(e.target.value)}
                                  placeholder="hello@example.com"
                                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent transition"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-stone-900 mb-2">Phone Number</label>
                                <input
                                  type="tel"
                                  value={phoneNumber}
                                  onChange={(e) => setPhoneNumber(e.target.value)}
                                  placeholder="+1 (555) 123-4567"
                                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent transition"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="h-px bg-stone-200"></div>

                          {/* Social Media Section */}
                          <div>
                            <h4 className="text-lg font-display font-bold text-stone-900 mb-4">Social Media Links (Optional)</h4>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label className="block text-sm font-semibold text-stone-900 mb-2">
                                  <FontAwesomeIcon icon={faFacebook} className="text-blue-600 mr-2" />
                                  Facebook
                                </label>
                                <input
                                  type="url"
                                  placeholder="https://facebook.com/yourpage"
                                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent transition"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-stone-900 mb-2">
                                  <FontAwesomeIcon icon={faTwitter} className="text-blue-400 mr-2" />
                                  Twitter
                                </label>
                                <input
                                  type="url"
                                  placeholder="https://twitter.com/yourhandle"
                                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent transition"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-stone-900 mb-2">
                                  <FontAwesomeIcon icon={faInstagram} className="text-pink-600 mr-2" />
                                  Instagram
                                </label>
                                <input
                                  type="url"
                                  value={instagram}
                                  onChange={(e) => setInstagram(e.target.value)}
                                  placeholder="https://instagram.com/yourhandle"
                                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent transition"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-stone-900 mb-2">
                                  <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 mr-2" />
                                  LinkedIn
                                </label>
                                <input
                                  type="url"
                                  value={linkedin}
                                  onChange={(e) => setLinkedin(e.target.value)}
                                  placeholder="https://linkedin.com/company/yourcompany"
                                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent transition"
                                />
                              </div>
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>
                  </section>

                  {/* AI Generation Options */}
                  <section className="mb-8">
                    <div className="max-w-5xl mx-auto">
                      <div className="bg-white border border-stone-200 rounded-2xl shadow-sm p-6 md:p-8">

                        <h3 className="text-xl font-display font-bold text-stone-900 mb-6">AI Generation Options</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

                          {/* Generate Text Content */}
                          <div className="border-2 border-stone-200 rounded-2xl p-6 hover:border-pmc-red transition cursor-pointer">
                            <div className="flex items-start justify-between mb-4">
                              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                                <FontAwesomeIcon icon={faFileLines} className="text-purple-600 text-xl" />
                              </div>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={generateText}
                                  onChange={(e) => setGenerateText(e.target.checked)}
                                  className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pmc-red/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pmc-red"></div>
                              </label>
                            </div>
                            <h4 className="text-lg font-display font-bold text-stone-900 mb-2">Generate Text Content</h4>
                            <p className="text-sm text-stone-600">AI will create headings, paragraphs, and copy for all selected pages based on your business information.</p>
                          </div>

                          {/* Generate Images */}
                          <div className="border-2 border-stone-200 rounded-2xl p-6 hover:border-pmc-red transition cursor-pointer">
                            <div className="flex items-start justify-between mb-4">
                              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                                <FontAwesomeIcon icon={faImage} className="text-blue-600 text-xl" />
                              </div>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={generateImages}
                                  onChange={(e) => setGenerateImages(e.target.checked)}
                                  className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pmc-red/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pmc-red"></div>
                              </label>
                            </div>
                            <h4 className="text-lg font-display font-bold text-stone-900 mb-2">Generate Images</h4>
                            <p className="text-sm text-stone-600">AI will create relevant images and graphics that match your business and brand style.</p>
                          </div>

                          {/* Suggest Color Palette */}
                          <div className="border-2 border-stone-200 rounded-2xl p-6 hover:border-pmc-red transition cursor-pointer">
                            <div className="flex items-start justify-between mb-4">
                              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                                <FontAwesomeIcon icon={faPalette} className="text-green-600 text-xl" />
                              </div>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={suggestColors}
                                  onChange={(e) => setSuggestColors(e.target.checked)}
                                  className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pmc-red/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pmc-red"></div>
                              </label>
                            </div>
                            <h4 className="text-lg font-display font-bold text-stone-900 mb-2">Suggest Color Palette</h4>
                            <p className="text-sm text-stone-600">AI will recommend a professional color scheme that matches your industry and brand.</p>
                          </div>

                          {/* SEO Optimization */}
                          <div className="border-2 border-stone-200 rounded-2xl p-6 hover:border-pmc-red transition cursor-pointer">
                            <div className="flex items-start justify-between mb-4">
                              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
                                <FontAwesomeIcon icon={faCode} className="text-orange-600 text-xl" />
                              </div>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={seoOptimization}
                                  onChange={(e) => setSeoOptimization(e.target.checked)}
                                  className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pmc-red/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pmc-red"></div>
                              </label>
                            </div>
                            <h4 className="text-lg font-display font-bold text-stone-900 mb-2">SEO Optimization</h4>
                            <p className="text-sm text-stone-600">Generate meta titles, descriptions, and keywords optimized for search engines.</p>
                          </div>

                        </div>

                        {/* AI Credits Info */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                              <FontAwesomeIcon icon={faWandMagicSparkles} className="text-white" />
                            </div>
                            <div>
                              <h4 className="text-base font-semibold text-stone-900 mb-2">AI Generation Credits</h4>
                              <p className="text-sm text-stone-700 mb-3">You have <span className="font-bold text-purple-700">47 AI generations</span> remaining this month. Each content generation uses approximately 3-5 credits depending on complexity.</p>
                              <div className="flex items-center space-x-2">
                                <div className="flex-1 h-2 bg-white rounded-full overflow-hidden">
                                  <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: '47%' }}></div>
                                </div>
                                <span className="text-xs font-semibold text-stone-700">47/100</span>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </section>

                  {/* Generation Preview */}
                  <section className="mb-8">
                    <div className="max-w-5xl mx-auto">
                      <div className="bg-white border border-stone-200 rounded-2xl shadow-sm p-6 md:p-8">

                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-xl font-display font-bold text-stone-900">Generation Preview</h3>
                          <button className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-medium rounded-lg transition">
                            <FontAwesomeIcon icon={faEye} className="mr-2" />
                            Preview Settings
                          </button>
                        </div>

                        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6">
                          <div className="flex items-start space-x-4 mb-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <FontAwesomeIcon icon={faInfoCircle} className="text-blue-600 text-xl" />
                            </div>
                            <div>
                              <h4 className="text-base font-semibold text-stone-900 mb-2">What Will Be Generated</h4>
                              <p className="text-sm text-stone-600 mb-4">Based on your selections, AI will create the following content for your site:</p>
                            </div>
                          </div>

                          <div className="space-y-4">

                            <div className="flex items-start space-x-3 p-4 bg-white rounded-lg">
                              <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mt-0.5" />
                              <div className="flex-1">
                                <div className="font-semibold text-stone-900 mb-1">Home Page Content</div>
                                <div className="text-sm text-stone-600">Hero section, about snippet, services overview, testimonials, call-to-action</div>
                              </div>
                              <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded">~2 credits</span>
                            </div>

                            <div className="flex items-start space-x-3 p-4 bg-white rounded-lg">
                              <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mt-0.5" />
                              <div className="flex-1">
                                <div className="font-semibold text-stone-900 mb-1">About Page Content</div>
                                <div className="text-sm text-stone-600">Company story, mission & vision, team introduction, values</div>
                              </div>
                              <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded">~1 credit</span>
                            </div>

                            <div className="flex items-start space-x-3 p-4 bg-white rounded-lg">
                              <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mt-0.5" />
                              <div className="flex-1">
                                <div className="font-semibold text-stone-900 mb-1">Services Page Content</div>
                                <div className="text-sm text-stone-600">Service descriptions, features, benefits, pricing hints</div>
                              </div>
                              <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded">~1 credit</span>
                            </div>

                            <div className="flex items-start space-x-3 p-4 bg-white rounded-lg">
                              <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mt-0.5" />
                              <div className="flex-1">
                                <div className="font-semibold text-stone-900 mb-1">Contact Page Content</div>
                                <div className="text-sm text-stone-600">Contact form, business hours, location map, social links</div>
                              </div>
                              <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded">~1 credit</span>
                            </div>

                            <div className="flex items-start space-x-3 p-4 bg-white rounded-lg">
                              <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mt-0.5" />
                              <div className="flex-1">
                                <div className="font-semibold text-stone-900 mb-1">Images & Graphics</div>
                                <div className="text-sm text-stone-600">Hero images, service icons, team photos, background graphics</div>
                              </div>
                              <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded">Included</span>
                            </div>

                          </div>

                          <div className="mt-6 pt-6 border-t border-stone-200 flex items-center justify-between">
                            <div>
                              <div className="text-sm font-semibold text-stone-900 mb-1">Estimated Generation Time</div>
                              <div className="text-xs text-stone-600">AI will process your content in approximately 2-3 minutes</div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-semibold text-stone-900 mb-1">Total Credits</div>
                              <div className="text-2xl font-display font-bold text-purple-600">~5</div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </section>

                  {/* Advanced Options */}
                  <section className="mb-8">
                    <div className="max-w-5xl mx-auto">
                      <button className="w-full flex items-center justify-between px-6 py-4 bg-white border border-stone-200 rounded-2xl shadow-sm hover:shadow-lg transition">
                        <div className="flex items-center space-x-3">
                          <FontAwesomeIcon icon={faSliders} className="text-stone-600" />
                          <span className="text-base font-semibold text-stone-900">Advanced AI Options</span>
                          <span className="px-2 py-1 bg-stone-100 text-stone-600 text-xs font-medium rounded">Optional</span>
                        </div>
                        <FontAwesomeIcon icon={faChevronDown} className="text-stone-400" />
                      </button>
                    </div>
                  </section>

                  {/* Generation Actions */}
                  <section className="mb-8">
                    <div className="max-w-5xl mx-auto">
                      <div className="bg-gradient-to-br from-pmc-red to-red-700 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
                        <div className="relative z-10">
                          <div className="flex items-center justify-between">
                            <div className="max-w-2xl">
                              <h3 className="text-2xl font-display font-bold mb-2">Ready to Generate Your Content?</h3>
                              <p className="text-white/90 mb-6">Click the button below to start AI content generation. You can review and edit everything before launching your site.</p>
                              <div className="flex items-center space-x-4">
                                <button className="px-8 py-4 bg-white text-pmc-red font-bold rounded-2xl hover:bg-stone-100 transition shadow-lg flex items-center">
                                  <FontAwesomeIcon icon={faWandMagicSparkles} className="mr-3" />
                                  Generate Content with AI
                                </button>
                                <button className="px-6 py-4 bg-white/10 text-white font-semibold rounded-2xl hover:bg-white/20 transition backdrop-blur-sm">
                                  Save as Draft
                                </button>
                              </div>
                            </div>
                            <div className="hidden xl:block">
                              <div className="w-32 h-32 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                                <FontAwesomeIcon icon={faWandMagicSparkles} className="text-5xl text-white/80" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </>
              )}

              {/* Help Resources */}
              <section className="mb-8">
                <div className="max-w-5xl mx-auto">
                  <h3 className="text-xl font-display font-bold text-stone-900 mb-6">Need Help?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <a href="#" className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition group">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition">
                        <FontAwesomeIcon icon={faBook} className="text-blue-600 text-xl" />
                      </div>
                      <h4 className="text-base font-display font-bold text-stone-900 mb-2">AI Content Guide</h4>
                      <p className="text-sm text-stone-600 mb-3">Learn best practices for AI content generation</p>
                      <span className="text-sm text-pmc-red font-medium group-hover:underline">Read Guide →</span>
                    </a>

                    <a href="#" className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition group">
                      <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-100 transition">
                        <FontAwesomeIcon icon={faCirclePlay} className="text-purple-600 text-xl" />
                      </div>
                      <h4 className="text-base font-display font-bold text-stone-900 mb-2">Video Tutorial</h4>
                      <p className="text-sm text-stone-600 mb-3">Watch a step-by-step walkthrough (5:30)</p>
                      <span className="text-sm text-pmc-red font-medium group-hover:underline">Watch Video →</span>
                    </a>

                    <a href="#" className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition group">
                      <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-100 transition">
                        <FontAwesomeIcon icon={faHeadset} className="text-green-600 text-xl" />
                      </div>
                      <h4 className="text-base font-display font-bold text-stone-900 mb-2">Get Support</h4>
                      <p className="text-sm text-stone-600 mb-3">Chat with our support team</p>
                      <span className="text-sm text-pmc-red font-medium group-hover:underline">Start Chat →</span>
                    </a>

                  </div>
                </div>
              </section>

            </div>

            {/* Summary Sidebar */}
            <aside className="w-96 bg-white border-l border-stone-200 p-8 sticky top-20 h-screen overflow-y-auto hidden lg:block">

              <div className="mb-8">
                <h3 className="text-lg font-display font-bold text-stone-900 mb-4">Setup Summary</h3>

                <div className="space-y-4">

                  <div className="pb-4 border-b border-stone-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-stone-900">Step 1: Theme</span>
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
                      <div>
                        <div className="text-sm font-medium text-stone-900">Modern Portfolio</div>
                        <div className="text-xs text-stone-500">Creative theme</div>
                      </div>
                    </div>
                  </div>

                  <div className="pb-4 border-b border-stone-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-stone-900">Step 2: Hosting</span>
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-stone-600">Plan:</span>
                        <span className="font-medium text-stone-900">Pro</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-stone-600">Domain:</span>
                        <span className="font-medium text-stone-900">creativedesign.com</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-stone-600">Environment:</span>
                        <span className="font-medium text-stone-900">Production</span>
                      </div>
                    </div>
                  </div>

                  <div className="pb-4 border-b border-stone-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-stone-900">Step 3: Content</span>
                      <FontAwesomeIcon icon={faCircleDot} className="text-pmc-red" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-stone-600">Method:</span>
                        <span className="font-medium text-pmc-red">AI-Powered</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-stone-600">Pages:</span>
                        <span className="font-medium text-stone-900">{selectedPages.length} selected</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-stone-600">Credits:</span>
                        <span className="font-medium text-stone-900">~5 credits</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-stone-900">Step 4: Review</span>
                      <FontAwesomeIcon icon={faCircle} className="text-stone-300" />
                    </div>
                    <div className="text-sm text-stone-500">Pending completion</div>
                  </div>

                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-base font-display font-bold text-stone-900 mb-4">Estimated Costs</h4>
                <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4">
                  <div className="space-y-2 mb-4 pb-4 border-b border-stone-200">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-600">Hosting (Pro)</span>
                      <span className="text-stone-900">$49.00/mo</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-600">Domain</span>
                      <span className="text-stone-900">$12.99/yr</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-600">SSL Certificate</span>
                      <span className="text-green-600 font-medium">Free</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-base font-semibold text-stone-900">Total Monthly</span>
                    <span className="text-xl font-display font-bold text-pmc-red">$49.00</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-base font-display font-bold text-stone-900 mb-4">Next Steps</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-pmc-red rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-stone-900">Generate Content</div>
                      <div className="text-xs text-stone-600">Complete AI content generation</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-stone-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-stone-600 text-xs font-bold">2</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-stone-900">Review & Edit</div>
                      <div className="text-xs text-stone-600">Review generated content</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-stone-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-stone-600 text-xs font-bold">3</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-stone-900">Launch Site</div>
                      <div className="text-xs text-stone-600">Deploy to production</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <FontAwesomeIcon icon={faClock} className="text-blue-600 text-xl" />
                  <div>
                    <h4 className="text-sm font-semibold text-stone-900 mb-1">Time Estimate</h4>
                    <p className="text-xs text-stone-700">Your site will be ready in approximately <span className="font-bold">5-7 minutes</span> after content generation.</p>
                  </div>
                </div>
              </div>

            </aside>

          </div>

        </main>

        {/* Bottom Navigation Bar */}
        <div className="fixed bottom-0 left-0 md:left-64 right-0 bg-white border-t border-stone-200 px-4 md:px-8 py-3 md:py-4 z-30 shadow-lg">
          <div className="flex items-center justify-between max-w-7xl mx-auto gap-2">
            <Link
              href="/wizard/hosting"
              className="flex items-center px-3 md:px-6 py-2 md:py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold rounded-2xl transition text-sm md:text-base"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-1 md:mr-2 text-sm" />
              <span className="hidden sm:inline">Back to Hosting</span>
              <span className="sm:hidden">Back</span>
            </Link>

            <div className="flex items-center gap-2">
              <Link
                href="/sites"
                className="hidden lg:flex items-center px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold rounded-2xl transition"
              >
                <FontAwesomeIcon icon={faFloppyDisk} className="mr-2" />
                Save Draft
              </Link>
              <Link
                href="/wizard/review"
                className="hidden md:flex items-center px-4 md:px-6 py-2 md:py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold rounded-2xl transition text-sm md:text-base"
              >
                Skip This Step
              </Link>
              <Link
                href="/wizard/review"
                className="flex items-center px-4 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all text-sm md:text-base whitespace-nowrap"
              >
                <span className="hidden sm:inline">Continue to Review</span>
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
