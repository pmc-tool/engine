'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRocket,
  faBars,
  faTh,
  faGlobe,
  faServer,
  faFolder,
  faShieldHalved,
  faPuzzlePiece,
  faCreditCard,
  faGear,
  faLifeRing,
  faChevronDown,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

interface DropdownState {
  domains: boolean;
  hosting: boolean;
  tools: boolean;
  security: boolean;
  integrations: boolean;
}

export default function Sidebar() {
  const pathname = usePathname();
  const [dropdowns, setDropdowns] = useState<DropdownState>({
    domains: true,
    hosting: true,
    tools: true,
    security: true,
    integrations: true,
  });

  const toggleDropdown = (key: keyof DropdownState) => {
    setDropdowns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const isActive = (path: string) => pathname === path;

  return (
    <aside className="hidden lg:flex w-64 bg-white border-r border-slate-200 flex-col transition-all duration-300">
      {/* Header */}
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center justify-between mb-1">
          <Link href="/" className="flex items-center group">
            <div className="w-10 h-10 bg-gradient-to-br from-pmc-red to-pink-600 rounded-xl flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all">
              <FontAwesomeIcon icon={faRocket} className="text-white text-lg" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-slate-900 text-base">PMC Engine</h2>
              <p className="text-xs text-slate-500 font-medium">inside PackMyCode</p>
            </div>
          </Link>
          <button className="text-slate-400 hover:text-pmc-red transition-colors p-2 hover:bg-slate-50 rounded-lg" aria-label="Collapse sidebar">
            <FontAwesomeIcon icon={faBars} className="text-sm" />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        {/* My Sites */}
        <div className="mb-6">
          <Link
            href="/"
            className={`flex items-center px-3 py-2.5 rounded-lg font-medium text-sm transition-all ${
              isActive('/') ? 'bg-slate-100 text-slate-900 font-semibold' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <FontAwesomeIcon icon={faTh} className="w-5 mr-3 text-slate-500" />
            <span>My Sites</span>
          </Link>
        </div>

        {/* Domains Dropdown */}
        <div className="mb-6">
          <button
            onClick={() => toggleDropdown('domains')}
            className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-100 font-medium text-sm transition-all"
          >
            <div className="flex items-center">
              <FontAwesomeIcon icon={faGlobe} className="w-5 mr-3 text-slate-500" />
              <span>Domains</span>
            </div>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`text-xs text-slate-400 transition-transform ${dropdowns.domains ? 'rotate-0' : '-rotate-90'}`}
            />
          </button>
          {dropdowns.domains && (
            <div className="ml-8 mt-1 space-y-1">
              <Link
                href="/domains/search"
                className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all"
              >
                Domain Search & Purchase
              </Link>
              <Link
                href="/domains"
                className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all"
              >
                Connected Domains
              </Link>
            </div>
          )}
        </div>

        {/* Hosting & Backups Dropdown */}
        <div className="mb-6">
          <button
            onClick={() => toggleDropdown('hosting')}
            className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-100 font-medium text-sm transition-all"
          >
            <div className="flex items-center">
              <FontAwesomeIcon icon={faServer} className="w-5 mr-3 text-slate-500" />
              <span>Hosting & Backups</span>
            </div>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`text-xs text-slate-400 transition-transform ${dropdowns.hosting ? 'rotate-0' : '-rotate-90'}`}
            />
          </button>
          {dropdowns.hosting && (
            <div className="ml-8 mt-1 space-y-1">
              <Link
                href="/hosting"
                className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all"
              >
                Hosting Overview
              </Link>
              <Link
                href="/backups"
                className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all"
              >
                Backups & Redeploy
              </Link>
            </div>
          )}
        </div>

        {/* Tools Dropdown */}
        <div className="mb-6">
          <button
            onClick={() => toggleDropdown('tools')}
            className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-100 font-medium text-sm transition-all"
          >
            <div className="flex items-center">
              <FontAwesomeIcon icon={faFolder} className="w-5 mr-3 text-slate-500" />
              <span>Tools</span>
            </div>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`text-xs text-slate-400 transition-transform ${dropdowns.tools ? 'rotate-0' : '-rotate-90'}`}
            />
          </button>
          {dropdowns.tools && (
            <div className="ml-8 mt-1 space-y-1">
              <Link
                href="/files"
                className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all"
              >
                Files Manager
              </Link>
              <Link
                href="/database"
                className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all"
              >
                Database
              </Link>
            </div>
          )}
        </div>

        {/* Security Dropdown */}
        <div className="mb-6">
          <button
            onClick={() => toggleDropdown('security')}
            className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-100 font-medium text-sm transition-all"
          >
            <div className="flex items-center">
              <FontAwesomeIcon icon={faShieldHalved} className="w-5 mr-3 text-slate-500" />
              <span>Security</span>
            </div>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`text-xs text-slate-400 transition-transform ${dropdowns.security ? 'rotate-0' : '-rotate-90'}`}
            />
          </button>
          {dropdowns.security && (
            <div className="ml-8 mt-1 space-y-1">
              <Link
                href="/security"
                className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all"
              >
                Security Center
              </Link>
            </div>
          )}
        </div>

        {/* Integrations Dropdown */}
        <div className="mb-6">
          <button
            onClick={() => toggleDropdown('integrations')}
            className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-100 font-medium text-sm transition-all"
          >
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPuzzlePiece} className="w-5 mr-3 text-slate-500" />
              <span>Integrations</span>
            </div>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`text-xs text-slate-400 transition-transform ${dropdowns.integrations ? 'rotate-0' : '-rotate-90'}`}
            />
          </button>
          {dropdowns.integrations && (
            <div className="ml-8 mt-1 space-y-1">
              <Link
                href="/integrations"
                className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all"
              >
                All Integrations
              </Link>
              <Link
                href="/integrations/wordpress"
                className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all"
              >
                WordPress Connect
              </Link>
            </div>
          )}
        </div>

        {/* Billing & Connects */}
        <div className="mb-6">
          <Link
            href="/billing"
            className={`flex items-center px-3 py-2.5 rounded-lg font-medium text-sm transition-all ${
              isActive('/billing') ? 'bg-slate-100 text-slate-900 font-semibold' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <FontAwesomeIcon icon={faCreditCard} className="w-5 mr-3 text-slate-500" />
            <span>Billing & Connects</span>
          </Link>
        </div>

        {/* Settings */}
        <div className="mb-6">
          <Link
            href="/settings"
            className={`flex items-center px-3 py-2.5 rounded-lg font-medium text-sm transition-all ${
              isActive('/settings') ? 'bg-slate-100 text-slate-900 font-semibold' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <FontAwesomeIcon icon={faGear} className="w-5 mr-3 text-slate-500" />
            <span>Settings</span>
          </Link>
        </div>

        {/* Support */}
        <div className="mb-6">
          <Link
            href="/support"
            className={`flex items-center px-3 py-2.5 rounded-lg font-medium text-sm transition-all ${
              isActive('/support') ? 'bg-slate-100 text-slate-900 font-semibold' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <FontAwesomeIcon icon={faLifeRing} className="w-5 mr-3 text-slate-500" />
            <span>Support</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
}
