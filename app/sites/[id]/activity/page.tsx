'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import TopHeader from '@/components/layout/TopHeader';
import MobileMenu from '@/components/layout/MobileMenu';
import TabNavigation from '@/components/ui/TabNavigation';
import ActivityTimeline from '@/components/ui/ActivityTimeline';
import FilterDropdown from '@/components/ui/FilterDropdown';
import SearchBar from '@/components/ui/SearchBar';
import Pagination from '@/components/ui/Pagination';
import { mockActivityLogs, activityTypes } from '@/lib/activityLogs';
import { mockSites } from '@/lib/mockData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faSync } from '@fortawesome/free-solid-svg-icons';

export default function ActivityLogsPage() {
  const params = useParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const site = mockSites.find(s => s.id === params.id) || mockSites[0];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Filter activities
  const filteredActivities = mockActivityLogs.filter(activity => {
    const matchesSearch =
      activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.user?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(activity.type);

    return matchesSearch && matchesType;
  });

  // Pagination
  const totalPages = Math.ceil(filteredActivities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedActivities = filteredActivities.slice(startIndex, startIndex + itemsPerPage);

  const handleExport = () => {
    console.log('Exporting activity logs...');
    // Export functionality
  };

  const handleRefresh = () => {
    console.log('Refreshing activity logs...');
    // Refresh functionality
  };

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
            {/* Tab Navigation */}
            <TabNavigation />

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <div className="text-2xl font-bold text-slate-900">
                  {mockActivityLogs.length}
                </div>
                <div className="text-sm text-slate-600 mt-1">Total Activities</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <div className="text-2xl font-bold text-green-600">
                  {mockActivityLogs.filter(a => a.type === 'deployment').length}
                </div>
                <div className="text-sm text-slate-600 mt-1">Deployments</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <div className="text-2xl font-bold text-amber-600">
                  {mockActivityLogs.filter(a => a.type === 'security').length}
                </div>
                <div className="text-sm text-slate-600 mt-1">Security Events</div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <div className="text-2xl font-bold text-blue-600">
                  {mockActivityLogs.filter(a => a.type === 'file' || a.type === 'content').length}
                </div>
                <div className="text-sm text-slate-600 mt-1">Content Changes</div>
              </div>
            </div>

            {/* Toolbar */}
            <div className="bg-white rounded-lg border border-slate-200 p-4 mb-6">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                <div className="flex-1 w-full lg:max-w-md">
                  <SearchBar
                    value={searchTerm}
                    onChange={setSearchTerm}
                    placeholder="Search activities..."
                  />
                </div>
                <div className="flex items-center gap-3 w-full lg:w-auto">
                  <FilterDropdown
                    options={activityTypes}
                    selectedValues={selectedTypes}
                    onChange={setSelectedTypes}
                    label="Filter Types"
                  />
                  <button
                    onClick={handleRefresh}
                    className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium flex items-center space-x-2"
                  >
                    <FontAwesomeIcon icon={faSync} />
                    <span className="hidden sm:inline">Refresh</span>
                  </button>
                  <button
                    onClick={handleExport}
                    className="px-4 py-2 bg-pmc-red text-white rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center space-x-2"
                  >
                    <FontAwesomeIcon icon={faDownload} />
                    <span className="hidden sm:inline">Export</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Activity Timeline */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 mb-6">
              {paginatedActivities.length > 0 ? (
                <ActivityTimeline activities={paginatedActivities} />
              ) : (
                <div className="text-center py-12">
                  <p className="text-slate-600">No activities found matching your filters.</p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedTypes([]);
                    }}
                    className="mt-4 px-4 py-2 text-sm text-pmc-red hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                  itemsPerPage={itemsPerPage}
                  totalItems={filteredActivities.length}
                />
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
