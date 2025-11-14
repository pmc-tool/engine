'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Sidebar from '@/components/layout/Sidebar';
import TopHeader from '@/components/layout/TopHeader';
import MobileMenu from '@/components/layout/MobileMenu';
import TabNavigation from '@/components/ui/TabNavigation';
import LineChart from '@/components/charts/LineChart';
import { mockSites } from '@/lib/mockData';
import { performanceMetrics, deploymentHistory, pageLoadTimeData, visitorTrafficData } from '@/lib/performanceData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faTriangleExclamation, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export default function PerformancePage() {
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
          {/* Performance Metrics Section */}
          <section className="px-4 md:px-8 pb-8 pt-6">
            <div className="bg-white rounded-xl border border-slate-200 p-4 md:p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <h2 className="text-lg font-semibold text-slate-900">Performance Metrics</h2>
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <LineChart title="Page Load Time" data={pageLoadTimeData} />
                <LineChart title="Visitor Traffic" data={visitorTrafficData} />
              </div>
            </div>
          </section>

          {/* Uptime Monitoring Section */}
          <section className="px-4 md:px-8 pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Uptime Status Card */}
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-slate-900">Uptime Status</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                    {performanceMetrics.uptime.status}
                  </span>
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">{performanceMetrics.uptime.percentage}</div>
                <div className="text-sm text-slate-600 mb-4">Last 30 days</div>
                <div className="grid grid-cols-7 gap-1">
                  {performanceMetrics.uptime.last30Days.map((uptime, index) => (
                    <div
                      key={index}
                      className={`h-8 rounded ${
                        uptime === 100 ? 'bg-green-500' : uptime >= 99 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      title={`${uptime}% uptime`}
                    />
                  ))}
                </div>
              </div>

              {/* Response Time Card */}
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-slate-900">Response Time</h3>
                  <FontAwesomeIcon icon={faBolt} className="text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">{performanceMetrics.responseTime.average}</div>
                <div className="text-sm text-slate-600 mb-4">Average response time</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600">Fastest</span>
                    <span className="font-medium text-green-600">{performanceMetrics.responseTime.fastest}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600">Slowest</span>
                    <span className="font-medium text-orange-600">{performanceMetrics.responseTime.slowest}</span>
                  </div>
                </div>
              </div>

              {/* Error Rate Card */}
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-slate-900">Error Rate</h3>
                  <FontAwesomeIcon icon={faTriangleExclamation} className="text-orange-600" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">{performanceMetrics.errorRate.percentage}</div>
                <div className="text-sm text-slate-600 mb-4">Last 30 days</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600">4xx Errors</span>
                    <span className="font-medium text-slate-900">{performanceMetrics.errorRate.errors4xx}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600">5xx Errors</span>
                    <span className="font-medium text-slate-900">{performanceMetrics.errorRate.errors5xx}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Deployment History Section */}
          <section className="px-4 md:px-8 pb-8">
            <div className="bg-white rounded-xl border border-slate-200 p-4 md:p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <h2 className="text-lg font-semibold text-slate-900">Deployment History</h2>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  View all deployments
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Version</th>
                      <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Environment</th>
                      <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Status</th>
                      <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Deployed By</th>
                      <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Date</th>
                      <th className="text-left text-xs font-medium text-slate-500 uppercase pb-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {deploymentHistory.map((deployment) => (
                      <tr key={deployment.id}>
                        <td className="py-4">
                          <span className="text-sm font-medium text-slate-900">{deployment.version}</span>
                        </td>
                        <td className="py-4">
                          <span className={`px-2 py-1 text-xs font-medium rounded ${
                            deployment.environment === 'Production'
                              ? 'bg-green-100 text-green-700'
                              : deployment.environment === 'Staging'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-slate-100 text-slate-700'
                          }`}>
                            {deployment.environment}
                          </span>
                        </td>
                        <td className="py-4">
                          <span className={`px-2 py-1 text-xs font-medium rounded flex items-center w-fit ${
                            deployment.status === 'Success'
                              ? 'bg-green-100 text-green-700'
                              : deployment.status === 'Failed'
                              ? 'bg-red-100 text-red-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {deployment.status === 'Success' && (
                              <FontAwesomeIcon icon={faCircleCheck} className="mr-1" />
                            )}
                            {deployment.status}
                          </span>
                        </td>
                        <td className="py-4">
                          <span className="text-sm text-slate-700">{deployment.deployedBy}</span>
                        </td>
                        <td className="py-4">
                          <span className="text-sm text-slate-600">{deployment.date}</span>
                        </td>
                        <td className="py-4">
                          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
