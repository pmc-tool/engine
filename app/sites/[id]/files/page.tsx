'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import TopHeader from '@/components/layout/TopHeader';
import MobileMenu from '@/components/layout/MobileMenu';
import TabNavigation from '@/components/ui/TabNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUpload,
  faFolderPlus,
  faHouse,
  faChevronRight,
  faSearch,
  faSliders,
  faList,
  faGrip,
  faPenToSquare,
  faTrash,
  faDownload,
  faCopy,
  faScissors,
  faFolder,
  faChevronDown,
  faInfoCircle,
  faEllipsis,
  faFileCode,
  faFile,
  faFileImage,
  faFilePdf,
  faFileZipper,
  faFileLines
} from '@fortawesome/free-solid-svg-icons';
import { mockSites } from '@/lib/mockData';

type FileType = 'folder' | 'css' | 'html' | 'javascript' | 'json' | 'jpeg' | 'svg' | 'pdf' | 'zip' | 'markdown' | 'config';

interface FileItem {
  id: string;
  name: string;
  type: FileType;
  size?: string;
  modified: string;
  icon: any;
  iconColor: string;
}

const mockFiles: FileItem[] = [
  { id: '1', name: 'css', type: 'folder', modified: '2 hours ago', icon: faFolder, iconColor: 'text-yellow-500' },
  { id: '2', name: 'js', type: 'folder', modified: '5 hours ago', icon: faFolder, iconColor: 'text-yellow-500' },
  { id: '3', name: 'images', type: 'folder', modified: '1 day ago', icon: faFolder, iconColor: 'text-yellow-500' },
  { id: '4', name: 'fonts', type: 'folder', modified: '3 days ago', icon: faFolder, iconColor: 'text-yellow-500' },
  { id: '5', name: 'main.css', type: 'css', size: '24 KB', modified: '2 hours ago', icon: faFileCode, iconColor: 'text-blue-600' },
  { id: '6', name: 'index.html', type: 'html', size: '18 KB', modified: '3 hours ago', icon: faFileCode, iconColor: 'text-orange-600' },
  { id: '7', name: 'app.js', type: 'javascript', size: '42 KB', modified: '5 hours ago', icon: faFileCode, iconColor: 'text-yellow-600' },
  { id: '8', name: 'config.json', type: 'json', size: '3 KB', modified: '1 day ago', icon: faFileCode, iconColor: 'text-green-600' },
  { id: '9', name: 'hero-banner.jpg', type: 'jpeg', size: '342 KB', modified: '2 days ago', icon: faFileImage, iconColor: 'text-purple-600' },
  { id: '10', name: 'logo.svg', type: 'svg', size: '8 KB', modified: '3 days ago', icon: faFileImage, iconColor: 'text-purple-600' },
  { id: '11', name: 'documentation.pdf', type: 'pdf', size: '1.2 MB', modified: '1 week ago', icon: faFilePdf, iconColor: 'text-red-600' },
  { id: '12', name: 'backup-2024.zip', type: 'zip', size: '5.8 MB', modified: '2 weeks ago', icon: faFileZipper, iconColor: 'text-gray-600' },
  { id: '13', name: 'README.md', type: 'markdown', size: '4 KB', modified: '1 month ago', icon: faFileLines, iconColor: 'text-gray-600' },
  { id: '14', name: '.htaccess', type: 'config', size: '2 KB', modified: '1 month ago', icon: faFileCode, iconColor: 'text-red-600' },
];

export default function FilesManagerPage() {
  const params = useParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const site = mockSites.find(s => s.id === params.id) || mockSites[0];
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

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

        <main className="flex-1 flex flex-col overflow-hidden bg-gray-50">
          <TabNavigation />

          {/* File Manager Header */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">File Manager</h1>
                <p className="text-sm text-gray-600 mt-1">Manage your site files and folders</p>
              </div>
              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg flex items-center space-x-2">
                  <FontAwesomeIcon icon={faUpload} />
                  <span>Upload File</span>
                </button>
                <button className="px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-lg flex items-center space-x-2">
                  <FontAwesomeIcon icon={faFolderPlus} />
                  <span>New Folder</span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <button className="hover:text-blue-600">
                  <FontAwesomeIcon icon={faHouse} />
                </button>
                <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                <button className="hover:text-blue-600">public</button>
                <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                <span className="text-gray-900 font-medium">assets</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="text"
                    placeholder="Search files..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                  />
                </div>
                <button className="p-2 border border-gray-300 hover:bg-gray-50 rounded-lg">
                  <FontAwesomeIcon icon={faSliders} className="text-gray-600" />
                </button>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-3 py-2 border-r border-gray-300 ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <FontAwesomeIcon icon={faList} />
                  </button>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <FontAwesomeIcon icon={faGrip} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex overflow-hidden">
            {/* Folder Tree Panel */}
            <div className="w-64 bg-white border-r border-gray-200 overflow-y-auto">
              <div className="p-4">
                <div className="text-xs font-semibold text-gray-500 uppercase mb-3">Folder Structure</div>
                <div className="space-y-1">
                  <div className="folder-tree-item px-2 py-1.5 rounded cursor-pointer hover:bg-gray-100">
                    <div className="flex items-center space-x-2 text-sm">
                      <FontAwesomeIcon icon={faChevronDown} className="text-xs text-gray-400" />
                      <FontAwesomeIcon icon={faFolder} className="text-blue-500" />
                      <span className="text-gray-900 font-medium">public</span>
                    </div>
                  </div>
                  <div className="ml-4 space-y-1">
                    <div className="folder-tree-item px-2 py-1.5 rounded cursor-pointer bg-blue-50">
                      <div className="flex items-center space-x-2 text-sm">
                        <FontAwesomeIcon icon={faChevronDown} className="text-xs text-gray-400" />
                        <FontAwesomeIcon icon={faFolder} className="text-blue-500" />
                        <span className="text-blue-600 font-medium">assets</span>
                      </div>
                    </div>
                    <div className="ml-4 space-y-1">
                      <div className="folder-tree-item px-2 py-1.5 rounded cursor-pointer hover:bg-gray-100">
                        <div className="flex items-center space-x-2 text-sm">
                          <FontAwesomeIcon icon={faChevronRight} className="text-xs text-gray-400" />
                          <FontAwesomeIcon icon={faFolder} className="text-yellow-500" />
                          <span className="text-gray-700">css</span>
                        </div>
                      </div>
                      <div className="folder-tree-item px-2 py-1.5 rounded cursor-pointer hover:bg-gray-100">
                        <div className="flex items-center space-x-2 text-sm">
                          <FontAwesomeIcon icon={faChevronRight} className="text-xs text-gray-400" />
                          <FontAwesomeIcon icon={faFolder} className="text-yellow-500" />
                          <span className="text-gray-700">js</span>
                        </div>
                      </div>
                      <div className="folder-tree-item px-2 py-1.5 rounded cursor-pointer hover:bg-gray-100">
                        <div className="flex items-center space-x-2 text-sm">
                          <FontAwesomeIcon icon={faChevronRight} className="text-xs text-gray-400" />
                          <FontAwesomeIcon icon={faFolder} className="text-yellow-500" />
                          <span className="text-gray-700">images</span>
                        </div>
                      </div>
                      <div className="folder-tree-item px-2 py-1.5 rounded cursor-pointer hover:bg-gray-100">
                        <div className="flex items-center space-x-2 text-sm">
                          <FontAwesomeIcon icon={faChevronRight} className="text-xs text-gray-400" />
                          <FontAwesomeIcon icon={faFolder} className="text-yellow-500" />
                          <span className="text-gray-700">fonts</span>
                        </div>
                      </div>
                    </div>
                    <div className="folder-tree-item px-2 py-1.5 rounded cursor-pointer hover:bg-gray-100">
                      <div className="flex items-center space-x-2 text-sm">
                        <FontAwesomeIcon icon={faChevronRight} className="text-xs text-gray-400" />
                        <FontAwesomeIcon icon={faFolder} className="text-blue-500" />
                        <span className="text-gray-700">pages</span>
                      </div>
                    </div>
                    <div className="folder-tree-item px-2 py-1.5 rounded cursor-pointer hover:bg-gray-100">
                      <div className="flex items-center space-x-2 text-sm">
                        <FontAwesomeIcon icon={faChevronRight} className="text-xs text-gray-400" />
                        <FontAwesomeIcon icon={faFolder} className="text-blue-500" />
                        <span className="text-gray-700">components</span>
                      </div>
                    </div>
                  </div>
                  <div className="folder-tree-item px-2 py-1.5 rounded cursor-pointer hover:bg-gray-100">
                    <div className="flex items-center space-x-2 text-sm">
                      <FontAwesomeIcon icon={faChevronRight} className="text-xs text-gray-400" />
                      <FontAwesomeIcon icon={faFolder} className="text-blue-500" />
                      <span className="text-gray-900 font-medium">config</span>
                    </div>
                  </div>
                  <div className="folder-tree-item px-2 py-1.5 rounded cursor-pointer hover:bg-gray-100">
                    <div className="flex items-center space-x-2 text-sm">
                      <FontAwesomeIcon icon={faChevronRight} className="text-xs text-gray-400" />
                      <FontAwesomeIcon icon={faFolder} className="text-blue-500" />
                      <span className="text-gray-900 font-medium">data</span>
                    </div>
                  </div>
                  <div className="folder-tree-item px-2 py-1.5 rounded cursor-pointer hover:bg-gray-100">
                    <div className="flex items-center space-x-2 text-sm">
                      <FontAwesomeIcon icon={faChevronRight} className="text-xs text-gray-400" />
                      <FontAwesomeIcon icon={faFolder} className="text-blue-500" />
                      <span className="text-gray-900 font-medium">backups</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-gray-200">
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="flex items-start space-x-2">
                    <FontAwesomeIcon icon={faInfoCircle} className="text-blue-600 mt-0.5" />
                    <div className="flex-1">
                      <div className="text-xs font-medium text-blue-900 mb-1">Folder Tips</div>
                      <div className="text-xs text-blue-700">Right-click folders for more options</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* File List Panel */}
            <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
              {/* Toolbar */}
              <div className="bg-white border-b border-gray-200 px-6 py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg flex items-center space-x-2">
                      <FontAwesomeIcon icon={faPenToSquare} />
                      <span>Rename</span>
                    </button>
                    <button className="px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg flex items-center space-x-2">
                      <FontAwesomeIcon icon={faTrash} />
                      <span>Delete</span>
                    </button>
                    <button className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg flex items-center space-x-2">
                      <FontAwesomeIcon icon={faDownload} />
                      <span>Download</span>
                    </button>
                    <button className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg flex items-center space-x-2">
                      <FontAwesomeIcon icon={faCopy} />
                      <span>Copy</span>
                    </button>
                    <button className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg flex items-center space-x-2">
                      <FontAwesomeIcon icon={faScissors} />
                      <span>Move</span>
                    </button>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">{mockFiles.length}</span> items
                  </div>
                </div>
              </div>

              {/* Files Table */}
              <div className="flex-1 overflow-y-auto">
                <table className="w-full">
                  <thead className="bg-gray-100 sticky top-0">
                    <tr className="text-left text-xs font-semibold text-gray-600 uppercase">
                      <th className="px-6 py-3 w-12">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      </th>
                      <th className="px-6 py-3">Name</th>
                      <th className="px-6 py-3 w-32">Type</th>
                      <th className="px-6 py-3 w-32">Size</th>
                      <th className="px-6 py-3 w-48">Modified</th>
                      <th className="px-6 py-3 w-24"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockFiles.map((file, index) => (
                      <tr key={file.id} className={`cursor-pointer hover:bg-gray-50 ${index === 4 ? 'bg-blue-50' : ''}`}>
                        <td className="px-6 py-3">
                          <input type="checkbox" checked={index === 4} className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        </td>
                        <td className="px-6 py-3">
                          <div className="flex items-center space-x-3">
                            <FontAwesomeIcon icon={file.icon} className={`${file.iconColor} text-lg`} />
                            <span className="text-sm font-medium text-gray-900">{file.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-3">
                          <span className="text-sm text-gray-600 capitalize">{file.type}</span>
                        </td>
                        <td className="px-6 py-3">
                          <span className="text-sm text-gray-600">{file.size || '-'}</span>
                        </td>
                        <td className="px-6 py-3">
                          <span className="text-sm text-gray-600">{file.modified}</span>
                        </td>
                        <td className="px-6 py-3">
                          <button className="text-gray-400 hover:text-gray-600">
                            <FontAwesomeIcon icon={faEllipsis} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
