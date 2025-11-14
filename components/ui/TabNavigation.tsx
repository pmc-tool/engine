'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

interface Tab {
  label: string;
  href: string;
  isLink?: boolean;
}

export default function TabNavigation() {
  const params = useParams();
  const pathname = usePathname();
  const siteId = params.id as string;

  const tabs: Tab[] = [
    { label: 'Overview', href: `/sites/${siteId}/overview`, isLink: true },
    { label: 'Content Editor', href: `/sites/${siteId}/content-editor`, isLink: true },
    { label: 'Files Manager', href: `/sites/${siteId}/files`, isLink: true },
    { label: 'Database', href: `/sites/${siteId}/database`, isLink: true },
    { label: 'Domain', href: `/sites/${siteId}/domain`, isLink: true },
    { label: 'Backups', href: `/sites/${siteId}/backups`, isLink: true },
    { label: 'Security', href: `/sites/${siteId}/security`, isLink: true },
    { label: 'Integrations', href: `/sites/${siteId}/integrations`, isLink: true },
    { label: 'AI Assistant', href: `/sites/${siteId}/ai-assistant`, isLink: true },
    { label: 'Logs', href: `/sites/${siteId}/logs`, isLink: true },
    { label: 'Performance', href: `/sites/${siteId}/performance`, isLink: true },
    { label: 'Analytics', href: `/sites/${siteId}/analytics`, isLink: true },
    { label: 'Settings', href: `/sites/${siteId}/settings`, isLink: true }
  ];

  const isActive = (href: string) => {
    if (href === '#') return false;
    return pathname === href;
  };

  return (
    <div className="bg-white border border-slate-200 rounded-pmc shadow-sm mb-6 md:mb-8 overflow-x-auto">
      <div className="flex border-b border-slate-200 min-w-max">
        {tabs.map((tab, index) => {
          const active = isActive(tab.href);
          const className = `px-4 md:px-6 py-3 md:py-4 text-sm font-semibold transition-all ${
            active
              ? 'text-pmc-red border-b-2 border-pmc-red'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`;

          if (tab.isLink) {
            return (
              <Link key={index} href={tab.href} className={className}>
                {tab.label}
              </Link>
            );
          }

          return (
            <button key={index} className={className}>
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
