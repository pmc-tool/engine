'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRocket,
  faXmark,
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
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DropdownState {
  domains: boolean;
  hosting: boolean;
  tools: boolean;
  security: boolean;
  integrations: boolean;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [dropdowns, setDropdowns] = useState<DropdownState>({
    domains: false,
    hosting: false,
    tools: false,
    security: false,
    integrations: false,
  });

  const toggleDropdown = (key: keyof DropdownState) => {
    setDropdowns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const isActive = (path: string) => pathname === path;

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />

          {/* Menu Drawer */}
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed left-0 top-0 bottom-0 w-80 bg-white z-50 overflow-y-auto lg:hidden shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <Link href="/" onClick={handleLinkClick} className="flex items-center">
                  <div className="w-8 h-8 bg-pmc-red rounded-lg flex items-center justify-center mr-3">
                    <FontAwesomeIcon icon={faRocket} className="text-white text-sm" />
                  </div>
                  <div>
                    <h2 className="font-heading font-semibold text-slate-900 text-base">PMC Engine</h2>
                    <p className="text-xs text-slate-500">inside PackMyCode</p>
                  </div>
                </Link>
                <button
                  onClick={onClose}
                  className="text-slate-400 hover:text-slate-600 transition-colors p-2"
                  aria-label="Close menu"
                >
                  <FontAwesomeIcon icon={faXmark} className="text-xl" />
                </button>
              </div>
            </div>

            {/* Navigation */}
            <nav className="py-4 px-3">
              {/* My Sites */}
              <div className="mb-4">
                <Link
                  href="/"
                  onClick={handleLinkClick}
                  className={`flex items-center px-3 py-3 rounded-lg font-medium text-sm transition-all ${
                    isActive('/') ? 'bg-slate-100 text-slate-900 font-semibold' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <FontAwesomeIcon icon={faTh} className="w-5 mr-3 text-slate-500" />
                  <span>My Sites</span>
                </Link>
              </div>

              {/* Domains Dropdown */}
              <div className="mb-4">
                <button
                  onClick={() => toggleDropdown('domains')}
                  className="flex items-center justify-between w-full px-3 py-3 rounded-lg text-slate-700 hover:bg-slate-100 font-medium text-sm transition-all"
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
                      onClick={handleLinkClick}
                      className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all"
                    >
                      Domain Search & Purchase
                    </Link>
                    <Link
                      href="/domains"
                      onClick={handleLinkClick}
                      className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all"
                    >
                      Connected Domains
                    </Link>
                  </div>
                )}
              </div>

              {/* Hosting & Backups */}
              <div className="mb-4">
                <button
                  onClick={() => toggleDropdown('hosting')}
                  className="flex items-center justify-between w-full px-3 py-3 rounded-lg text-slate-700 hover:bg-slate-100 font-medium text-sm transition-all"
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
                      onClick={handleLinkClick}
                      className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all"
                    >
                      Hosting Overview
                    </Link>
                    <Link
                      href="/backups"
                      onClick={handleLinkClick}
                      className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all"
                    >
                      Backups & Redeploy
                    </Link>
                  </div>
                )}
              </div>

              {/* Tools */}
              <div className="mb-4">
                <button
                  onClick={() => toggleDropdown('tools')}
                  className="flex items-center justify-between w-full px-3 py-3 rounded-lg text-slate-700 hover:bg-slate-100 font-medium text-sm transition-all"
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
                      onClick={handleLinkClick}
                      className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all"
                    >
                      Files Manager
                    </Link>
                    <Link
                      href="/database"
                      onClick={handleLinkClick}
                      className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all"
                    >
                      Database
                    </Link>
                  </div>
                )}
              </div>

              {/* Security */}
              <div className="mb-4">
                <button
                  onClick={() => toggleDropdown('security')}
                  className="flex items-center justify-between w-full px-3 py-3 rounded-lg text-slate-700 hover:bg-slate-100 font-medium text-sm transition-all"
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
                      onClick={handleLinkClick}
                      className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all"
                    >
                      Security Center
                    </Link>
                  </div>
                )}
              </div>

              {/* Integrations */}
              <div className="mb-4">
                <button
                  onClick={() => toggleDropdown('integrations')}
                  className="flex items-center justify-between w-full px-3 py-3 rounded-lg text-slate-700 hover:bg-slate-100 font-medium text-sm transition-all"
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
                      onClick={handleLinkClick}
                      className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all"
                    >
                      All Integrations
                    </Link>
                    <Link
                      href="/integrations/wordpress"
                      onClick={handleLinkClick}
                      className="block px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all"
                    >
                      WordPress Connect
                    </Link>
                  </div>
                )}
              </div>

              {/* Billing & Connects */}
              <div className="mb-4">
                <Link
                  href="/billing"
                  onClick={handleLinkClick}
                  className={`flex items-center px-3 py-3 rounded-lg font-medium text-sm transition-all ${
                    isActive('/billing') ? 'bg-slate-100 text-slate-900 font-semibold' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <FontAwesomeIcon icon={faCreditCard} className="w-5 mr-3 text-slate-500" />
                  <span>Billing & Connects</span>
                </Link>
              </div>

              {/* Settings */}
              <div className="mb-4">
                <Link
                  href="/settings"
                  onClick={handleLinkClick}
                  className={`flex items-center px-3 py-3 rounded-lg font-medium text-sm transition-all ${
                    isActive('/settings') ? 'bg-slate-100 text-slate-900 font-semibold' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <FontAwesomeIcon icon={faGear} className="w-5 mr-3 text-slate-500" />
                  <span>Settings</span>
                </Link>
              </div>

              {/* Support */}
              <div className="mb-4">
                <Link
                  href="/support"
                  onClick={handleLinkClick}
                  className={`flex items-center px-3 py-3 rounded-lg font-medium text-sm transition-all ${
                    isActive('/support') ? 'bg-slate-100 text-slate-900 font-semibold' : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <FontAwesomeIcon icon={faLifeRing} className="w-5 mr-3 text-slate-500" />
                  <span>Support</span>
                </Link>
              </div>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
