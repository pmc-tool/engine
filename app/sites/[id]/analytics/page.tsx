'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import TopHeader from '@/components/layout/TopHeader';
import MobileMenu from '@/components/layout/MobileMenu';
import TabNavigation from '@/components/ui/TabNavigation';
import LineChart from '@/components/charts/LineChart';
import { mockSites } from '@/lib/mockData';
import {
  analyticsOverview,
  topPages,
  trafficSources,
  topCountries,
  weeklyVisitorsData,
  deviceBreakdown
} from '@/lib/analyticsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faEye,
  faClock,
  faArrowRightFromBracket,
  faArrowTrendUp,
  faArrowTrendDown
} from '@fortawesome/free-solid-svg-icons';

export default function AnalyticsPage() {
  const params = useParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [timeRange, setTimeRange] = useState('Last 7 days');
  const site = mockSites.find(s => s.id === params.id) || mockSites[0];

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

        <main className="flex-1 overflow-y-auto bg-slate-50">
          {/* Analytics Header */}
          <div className="px-4 md:px-8 pt-6 pb-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-slate-900 mb-1">Analytics</h1>
                <p className="text-sm text-slate-600">Track your site's performance and visitor insights</p>
              </div>
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>Last year</option>
              </select>
            </div>
          </div>

          {/* Overview Stats */}
          <section className="px-4 md:px-8 pb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Total Visitors */}
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faUsers} className="text-blue-600" />
                  </div>
                  <span className="text-xs font-medium text-green-600 flex items-center">
                    <FontAwesomeIcon icon={faArrowTrendUp} className="mr-1" />
                    {analyticsOverview.growth.visitors}
                  </span>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  {analyticsOverview.totalVisitors.toLocaleString()}
                </div>
                <div className="text-sm text-slate-600">Total Visitors</div>
              </div>

              {/* Page Views */}
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faEye} className="text-green-600" />
                  </div>
                  <span className="text-xs font-medium text-green-600 flex items-center">
                    <FontAwesomeIcon icon={faArrowTrendUp} className="mr-1" />
                    {analyticsOverview.growth.pageViews}
                  </span>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  {analyticsOverview.pageViews.toLocaleString()}
                </div>
                <div className="text-sm text-slate-600">Page Views</div>
              </div>

              {/* Avg Session Duration */}
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faClock} className="text-purple-600" />
                  </div>
                  <span className="text-xs font-medium text-green-600 flex items-center">
                    <FontAwesomeIcon icon={faArrowTrendUp} className="mr-1" />
                    {analyticsOverview.growth.sessionDuration}
                  </span>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  {analyticsOverview.avgSessionDuration}
                </div>
                <div className="text-sm text-slate-600">Avg Session Duration</div>
              </div>

              {/* Bounce Rate */}
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-orange-600" />
                  </div>
                  <span className="text-xs font-medium text-green-600 flex items-center">
                    <FontAwesomeIcon icon={faArrowTrendDown} className="mr-1" />
                    {analyticsOverview.growth.bounceRate}
                  </span>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  {analyticsOverview.bounceRate}
                </div>
                <div className="text-sm text-slate-600">Bounce Rate</div>
              </div>
            </div>
          </section>

          {/* Visitors Chart */}
          <section className="px-4 md:px-8 pb-6">
            <div className="bg-white rounded-xl border border-slate-200 p-4 md:p-6">
              <LineChart title="Weekly Visitors" data={weeklyVisitorsData} />
            </div>
          </section>

          {/* Two Column Section: Top Pages & Traffic Sources */}
          <section className="px-4 md:px-8 pb-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Pages */}
              <div className="bg-white rounded-xl border border-slate-200 p-4 md:p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Top Pages</h3>
                <div className="space-y-3">
                  {topPages.map((page, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-slate-900 truncate">{page.page}</div>
                        <div className="text-xs text-slate-600 mt-0.5">
                          {page.views.toLocaleString()} views • {page.uniqueVisitors.toLocaleString()} unique
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-sm font-medium text-slate-900">{page.avgTime}</div>
                        <div className="text-xs text-slate-600">{page.bounceRate} bounce</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Traffic Sources */}
              <div className="bg-white rounded-xl border border-slate-200 p-4 md:p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Traffic Sources</h3>
                <div className="space-y-4">
                  {trafficSources.map((source, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-900">{source.source}</span>
                        <span className="text-sm text-slate-600">
                          {source.visitors.toLocaleString()} ({source.percentage}%)
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className={`${source.color} h-2 rounded-full`}
                          style={{ width: `${source.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Two Column Section: Top Countries & Device Breakdown */}
          <section className="px-4 md:px-8 pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Countries */}
              <div className="bg-white rounded-xl border border-slate-200 p-4 md:p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Top Countries</h3>
                <div className="space-y-2">
                  {topCountries.map((country, index) => (
                    <div key={index} className="flex items-center justify-between py-2">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{country.code === 'US' ? '🇺🇸' : country.code === 'GB' ? '🇬🇧' : country.code === 'CA' ? '🇨🇦' : country.code === 'AU' ? '🇦🇺' : country.code === 'DE' ? '🇩🇪' : country.code === 'FR' ? '🇫🇷' : country.code === 'IN' ? '🇮🇳' : '🇧🇷'}</span>
                        <span className="text-sm font-medium text-slate-900">{country.country}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-slate-900">{country.visitors.toLocaleString()}</div>
                        <div className="text-xs text-slate-600">{country.percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Device Breakdown */}
              <div className="bg-white rounded-xl border border-slate-200 p-4 md:p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Device Breakdown</h3>
                <div className="space-y-6">
                  {deviceBreakdown.map((device, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-900">{device.device}</span>
                        <span className="text-2xl font-bold text-slate-900">{device.percentage}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-3">
                        <div
                          className={`${device.color} h-3 rounded-full transition-all duration-500`}
                          style={{ width: `${device.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
