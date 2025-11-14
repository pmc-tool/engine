'use client';

import { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import TopHeader from '@/components/layout/TopHeader';
import MobileMenu from '@/components/layout/MobileMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeadset,
  faBook,
  faComments,
  faEnvelope,
  faPhone,
  faCircleQuestion,
  faChevronRight,
  faMagnifyingGlass,
  faFileLines,
  faVideo,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons';

const faqs = [
  {
    question: 'How do I deploy my first site?',
    answer: 'To deploy your first site, click on "Create New Site" from the dashboard, connect your repository or upload your files, configure your settings, and click Deploy. Your site will be live in minutes!'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for enterprise plans.'
  },
  {
    question: 'How do I connect a custom domain?',
    answer: 'Go to your site settings, click on "Domains", then "Add Custom Domain". Follow the instructions to update your DNS settings, and your domain will be connected once verified.'
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Yes! You can change your plan anytime from the Billing section. Changes take effect immediately, and we\'ll prorate any differences.'
  },
  {
    question: 'How do backups work?',
    answer: 'We automatically backup your sites daily. You can also create manual backups anytime from the Backups & Redeploy section. All backups are stored securely for 30 days.'
  },
  {
    question: 'What is your uptime guarantee?',
    answer: 'We guarantee 99.9% uptime for all sites. Our infrastructure is built on enterprise-grade servers with automatic failover and redundancy.'
  }
];

const resources = [
  {
    icon: faBook,
    title: 'Documentation',
    description: 'Comprehensive guides and API references',
    color: 'blue'
  },
  {
    icon: faVideo,
    title: 'Video Tutorials',
    description: 'Step-by-step video guides',
    color: 'red'
  },
  {
    icon: faGraduationCap,
    title: 'Learning Center',
    description: 'Courses and best practices',
    color: 'purple'
  },
  {
    icon: faFileLines,
    title: 'Blog',
    description: 'Latest news and updates',
    color: 'green'
  }
];

export default function SupportPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopHeader
          title="Support Center"
          subtitle="Get help and find answers to your questions"
          onMenuToggle={() => setIsMobileMenuOpen(true)}
          showSiteSwitcher={false}
        />

        <main className="flex-1 overflow-y-auto bg-slate-50">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-pmc-red to-pink-600 text-white p-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">How can we help you?</h1>
              <p className="text-lg text-white/90 mb-8">Search our knowledge base or get in touch with our support team</p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-14 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-white/30"
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-xl"
                />
              </div>
            </div>
          </section>

          {/* Contact Cards */}
          <section className="px-4 md:px-8 py-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Get in Touch</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faComments} className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Live Chat</h3>
                <p className="text-sm text-slate-600 mb-4">Get instant help from our support team</p>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Start Chat
                </button>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faEnvelope} className="text-green-600 text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Email Support</h3>
                <p className="text-sm text-slate-600 mb-4">We'll respond within 24 hours</p>
                <a
                  href="mailto:support@pmcengine.com"
                  className="block w-full px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors text-center"
                >
                  Send Email
                </a>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={faPhone} className="text-purple-600 text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Phone Support</h3>
                <p className="text-sm text-slate-600 mb-4">Available Mon-Fri, 9am-5pm EST</p>
                <a
                  href="tel:+18881234567"
                  className="block w-full px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors text-center"
                >
                  Call Now
                </a>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="px-4 md:px-8 pb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Frequently Asked Questions</h2>

            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              {filteredFaqs.length > 0 ? (
                <div className="divide-y divide-slate-200">
                  {filteredFaqs.map((faq, index) => (
                    <div key={index} className="p-6">
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <div className="flex items-start gap-3">
                          <FontAwesomeIcon
                            icon={faCircleQuestion}
                            className="text-pmc-red mt-1 flex-shrink-0"
                          />
                          <h3 className="font-semibold text-slate-900">{faq.question}</h3>
                        </div>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className={`text-slate-400 transition-transform flex-shrink-0 ${
                            openFaq === index ? 'rotate-90' : ''
                          }`}
                        />
                      </button>
                      {openFaq === index && (
                        <div className="mt-3 ml-8 text-sm text-slate-600">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center">
                  <p className="text-slate-500">No FAQs found matching your search.</p>
                </div>
              )}
            </div>
          </section>

          {/* Resources */}
          <section className="px-4 md:px-8 pb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Help Resources</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className={`w-12 h-12 bg-${resource.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                    <FontAwesomeIcon icon={resource.icon} className={`text-${resource.color}-600 text-xl`} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{resource.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{resource.description}</p>
                  <div className="flex items-center text-pmc-red text-sm font-medium">
                    Browse
                    <FontAwesomeIcon icon={faChevronRight} className="ml-2 text-xs" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Status */}
          <section className="px-4 md:px-8 pb-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faHeadset} className="text-white text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">All Systems Operational</h3>
                  <p className="text-slate-600 mb-4">All PMC Engine services are running smoothly. Check our status page for real-time updates.</p>
                  <button className="px-6 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                    View Status Page
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Submit Ticket */}
          <section className="px-4 md:px-8 pb-8">
            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Submit a Support Ticket</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent">
                    <option>Select a category</option>
                    <option>Technical Issue</option>
                    <option>Billing Question</option>
                    <option>Feature Request</option>
                    <option>Account Management</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent"
                    placeholder="Brief description of your issue"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent"
                    placeholder="Please provide as much detail as possible..."
                  ></textarea>
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    className="px-6 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-pmc-red text-white rounded-lg text-sm font-medium hover:bg-pmc-red-dark transition-colors"
                  >
                    Submit Ticket
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
