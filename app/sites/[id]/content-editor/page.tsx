'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import TopHeader from '@/components/layout/TopHeader';
import MobileMenu from '@/components/layout/MobileMenu';
import TabNavigation from '@/components/ui/TabNavigation';
import SectionItem from '@/components/ui/SectionItem';
import { mockSections } from '@/lib/contentSections';
import { mockSites } from '@/lib/mockData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faInfoCircle,
  faPlus,
  faEye,
  faFloppyDisk,
  faUpload,
  faClock,
  faLink,
  faTrash,
  faCircleInfo,
  faLightbulb,
  faMagicWandSparkles,
  faChevronDown,
  faHistory,
  faCode
} from '@fortawesome/free-solid-svg-icons';

export default function ContentEditorPage() {
  const params = useParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const site = mockSites.find(s => s.id === params.id) || mockSites[0];
  const [selectedSectionId, setSelectedSectionId] = useState('hero');
  const [searchTerm, setSearchTerm] = useState('');

  const selectedSection = mockSections.find(s => s.id === selectedSectionId) || mockSections[0];

  const filteredSections = mockSections.filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

        <TabNavigation />

        <div className="flex-1 flex overflow-hidden">
        {/* Sections Sidebar */}
        <aside className="hidden md:block w-72 bg-white border-r border-slate-200 overflow-y-auto">
          <div className="p-4">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-slate-900">Page Sections</h3>
                <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                  Add Section
                </button>
              </div>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-xs"
                />
                <input
                  type="text"
                  placeholder="Search sections..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
              <div className="flex items-start space-x-2">
                <FontAwesomeIcon icon={faInfoCircle} className="text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-xs font-medium text-amber-900 mb-1">Manual editing mode</div>
                  <div className="text-xs text-amber-700">No AI used here. Changes require manual input.</div>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              {filteredSections.map((section) => (
                <SectionItem
                  key={section.id}
                  title={section.title}
                  description={section.description}
                  isActive={section.id === selectedSectionId}
                  isSaved={section.isSaved}
                  hasUnsavedChanges={section.hasUnsavedChanges}
                  onClick={() => setSelectedSectionId(section.id)}
                />
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200">
              <button className="w-full px-4 py-2 border-2 border-dashed border-slate-300 rounded-lg text-sm font-medium text-slate-600 hover:border-blue-400 hover:text-blue-600 transition-colors">
                <FontAwesomeIcon icon={faPlus} className="mr-2" />
                Add New Section
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content Editor */}
        <main className="flex-1 bg-slate-50 overflow-hidden flex flex-col">
          {/* Editor Header - Sticky */}
          <div className="bg-white border-b border-slate-200 sticky top-0 z-40 px-4 md:px-6 py-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-3">
              <div className="flex items-center space-x-4">
                <div>
                  <h1 className="text-xl font-bold text-slate-900">{selectedSection.title} Section</h1>
                  <p className="text-sm text-slate-500">{selectedSection.description}</p>
                </div>
                {selectedSection.hasUnsavedChanges && (
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                    <span className="text-xs font-medium text-orange-600 hidden md:inline">Unsaved changes</span>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 md:px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
                  <FontAwesomeIcon icon={faEye} className="md:mr-2" />
                  <span className="hidden md:inline">Preview</span>
                </button>
                <button className="px-3 md:px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
                  <FontAwesomeIcon icon={faFloppyDisk} className="md:mr-2" />
                  <span className="hidden md:inline">Save</span>
                </button>
                <button className="px-3 md:px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium">
                  <FontAwesomeIcon icon={faUpload} className="md:mr-2" />
                  <span className="hidden md:inline">Publish</span>
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-xs text-slate-500">
              <FontAwesomeIcon icon={faClock} />
              <span>Last edited: 12 minutes ago by Alex Turner</span>
            </div>
          </div>

          {/* Editor Content Area - Scrollable */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6">
            {/* Content Fields */}
            <section className="bg-white rounded-xl border border-slate-200 p-4 md:p-6 mb-6">
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Main Headline
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  defaultValue={selectedSection.fields.headline || ''}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex items-center justify-between mt-2">
                  <p className="text-xs text-slate-500">Primary headline on your homepage</p>
                  <span className="text-xs text-slate-400">{selectedSection.fields.headline?.length || 0} / 80</span>
                </div>
              </div>

              {selectedSection.fields.subheadline !== undefined && (
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Subheadline</label>
                  <input
                    type="text"
                    defaultValue={selectedSection.fields.subheadline || ''}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}

              {selectedSection.fields.bodyText !== undefined && (
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Description / Body Text</label>
                  <textarea
                    rows={6}
                    defaultValue={selectedSection.fields.bodyText || ''}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>
              )}

              {selectedSection.fields.primaryCtaText !== undefined && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Primary CTA Text<span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={selectedSection.fields.primaryCtaText || ''}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Primary CTA Link<span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={selectedSection.fields.primaryCtaLink || ''}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              )}
            </section>

            {/* Layout & Styling */}
            <section className="bg-white rounded-xl border border-slate-200 p-4 md:p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Layout & Styling</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Background Color</label>
                  <div className="flex items-center space-x-2">
                    <input type="color" defaultValue={selectedSection.fields.backgroundColor || '#ffffff'} className="w-12 h-10 rounded border border-slate-300" />
                    <input type="text" defaultValue={selectedSection.fields.backgroundColor || '#ffffff'} className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Text Color</label>
                  <div className="flex items-center space-x-2">
                    <input type="color" defaultValue={selectedSection.fields.textColor || '#1f2937'} className="w-12 h-10 rounded border border-slate-300" />
                    <input type="text" defaultValue={selectedSection.fields.textColor || '#1f2937'} className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Button Color</label>
                  <div className="flex items-center space-x-2">
                    <input type="color" defaultValue={selectedSection.fields.buttonColor || '#2563eb'} className="w-12 h-10 rounded border border-slate-300" />
                    <input type="text" defaultValue={selectedSection.fields.buttonColor || '#2563eb'} className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
              </div>
            </section>

            {/* Advanced Options */}
            <section className="bg-white rounded-xl border border-slate-200 p-4 md:p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Advanced Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-center space-x-3">
                  <input type="checkbox" defaultChecked={selectedSection.fields.showOnMobile} className="w-4 h-4 text-blue-600 rounded" />
                  <span className="text-sm font-medium text-slate-700">Show on mobile</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" defaultChecked={selectedSection.fields.showOnTablet} className="w-4 h-4 text-blue-600 rounded" />
                  <span className="text-sm font-medium text-slate-700">Show on tablet</span>
                </label>
              </div>
            </section>
          </div>

          {/* Footer Actions - Sticky */}
          <div className="bg-white border-t border-slate-200 px-4 md:px-6 py-4">
            <div className="flex items-center justify-end space-x-2">
              <button className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">Cancel</button>
              <button className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
                <FontAwesomeIcon icon={faFloppyDisk} className="mr-2" />Save Draft
              </button>
              <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium">
                <FontAwesomeIcon icon={faUpload} className="mr-2" />Publish
              </button>
            </div>
          </div>
        </main>
        </div>
      </div>
    </div>
  );
}
