'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import TopHeader from '@/components/layout/TopHeader';
import MobileMenu from '@/components/layout/MobileMenu';
import { mockSites } from '@/lib/mockData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFolder,
  faFile,
  faArrowRight,
  faCircle,
  faHardDrive,
  faFileImage,
  faFileCode,
  faFileAlt
} from '@fortawesome/free-solid-svg-icons';

export default function FilesPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const storageUsage = [
    { type: 'Images', size: '4.2 GB', count: '1,245 files', color: 'blue', icon: faFileImage },
    { type: 'Code Files', size: '1.8 GB', count: '3,567 files', color: 'green', icon: faFileCode },
    { type: 'Documents', size: '856 MB', count: '432 files', color: 'purple', icon: faFileAlt },
    { type: 'Other', size: '1.1 GB', count: '789 files', color: 'orange', icon: faFile }
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopHeader
          title="Files Manager"
          onMenuToggle={() => setIsMobileMenuOpen(true)}
          showSiteSwitcher={false}
        />

        <main className="flex-1 overflow-y-auto bg-slate-50">
          {/* Hero Section */}
          <section className="p-8 bg-gradient-to-br from-indigo-600 to-blue-700 text-white">
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">Files Manager</h1>
              <p className="text-lg text-white/90 mb-6">Manage files, folders, and media across all your sites from one central location.</p>
            </div>
          </section>

          {/* Sites Files Overview */}
          <section className="px-8 py-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-1">Your Sites</h2>
                <p className="text-slate-600">Click on any site to manage files and folders</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockSites.map((site) => (
                <div
                  key={site.id}
                  onClick={() => router.push(`/sites/${site.id}/files`)}
                  className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center">
                        <FontAwesomeIcon icon={faFolder} className="text-indigo-600 text-xl" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-slate-900">{site.name}</h3>
                        <p className="text-sm text-slate-500">{site.domain}</p>
                      </div>
                    </div>
                    <span className={`flex items-center space-x-1 px-2 py-1 rounded text-xs font-semibold ${
                      site.status === 'live' ? 'bg-green-100 text-green-700' :
                      site.status === 'deploying' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      <FontAwesomeIcon icon={faCircle} className="text-xs" />
                      <span className="capitalize">{site.status}</span>
                    </span>
                  </div>

                  <div className="space-y-3 mb-4 pt-4 border-t border-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Storage Used</span>
                      <span className="text-sm font-semibold text-slate-900">2.8 GB / 10 GB</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Total Files</span>
                      <span className="text-sm font-semibold text-slate-900">1,456 files</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Total Folders</span>
                      <span className="text-sm font-semibold text-slate-900">89 folders</span>
                    </div>
                  </div>

                  <div className="w-full bg-slate-100 rounded-full h-2 mb-4">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '28%' }}></div>
                  </div>

                  <button className="w-full px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition flex items-center justify-center space-x-2">
                    <span>Manage Files</span>
                    <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Storage Breakdown */}
          <section className="px-8 py-6">
            <div className="mb-6">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-1">Storage Breakdown</h2>
              <p className="text-slate-600">Overview of file types across all sites</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {storageUsage.map((item, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-lg p-6">
                  <div className={`w-12 h-12 bg-${item.color}-50 rounded-lg flex items-center justify-center mb-4`}>
                    <FontAwesomeIcon icon={item.icon} className={`text-${item.color}-600 text-xl`} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-slate-900 mb-1">{item.type}</h3>
                  <div className="text-2xl font-bold text-slate-900 mb-1">{item.size}</div>
                  <p className="text-sm text-slate-600">{item.count}</p>
                </div>
              ))}
            </div>
          </section>

          {/* File Manager Features */}
          <section className="px-8 pb-8">
            <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">File Manager Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Upload Files</h3>
                  <p className="text-sm text-slate-600">Drag and drop or browse to upload multiple files at once.</p>
                </div>

                <div>
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Image Optimization</h3>
                  <p className="text-sm text-slate-600">Automatic image compression and optimization for faster loading.</p>
                </div>

                <div>
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Code Editor</h3>
                  <p className="text-sm text-slate-600">Edit code files directly with syntax highlighting.</p>
                </div>

                <div>
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Bulk Operations</h3>
                  <p className="text-sm text-slate-600">Move, copy, or delete multiple files and folders at once.</p>
                </div>

                <div>
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Advanced Search</h3>
                  <p className="text-sm text-slate-600">Search files by name, type, size, or modification date.</p>
                </div>

                <div>
                  <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Permissions</h3>
                  <p className="text-sm text-slate-600">Set file and folder permissions for security.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
