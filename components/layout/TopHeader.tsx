'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faBell,
  faChevronDown,
  faBars,
  faXmark,
  faCircle,
  faUser,
  faGear,
  faCreditCard,
  faQuestionCircle,
  faSignOutAlt,
  faCheckCircle,
  faExclamationTriangle,
  faInfoCircle,
  faBolt
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { mockSites } from '@/lib/mockData';

interface TopHeaderProps {
  title: string;
  subtitle?: string;
  showSearch?: boolean;
  onMenuToggle?: () => void;
  showExitButton?: boolean;
  children?: React.ReactNode;
  currentSiteId?: string;
  showSiteSwitcher?: boolean;
}

const notifications = [
  {
    id: 1,
    type: 'success',
    title: 'Deployment Successful',
    message: 'Your site "Portfolio Website" has been deployed successfully.',
    time: '5 minutes ago',
    read: false,
  },
  {
    id: 2,
    type: 'warning',
    title: 'SSL Certificate Expiring',
    message: 'SSL certificate for example.com will expire in 7 days.',
    time: '2 hours ago',
    read: false,
  },
  {
    id: 3,
    type: 'info',
    title: 'Backup Completed',
    message: 'Daily backup for all sites completed successfully.',
    time: '1 day ago',
    read: true,
  },
  {
    id: 4,
    type: 'success',
    title: 'Domain Connected',
    message: 'Custom domain mywebsite.com has been connected.',
    time: '2 days ago',
    read: true,
  },
];

export default function TopHeader({
  title,
  subtitle,
  showSearch = true,
  onMenuToggle,
  showExitButton = false,
  children,
  currentSiteId,
  showSiteSwitcher = false
}: TopHeaderProps) {
  const router = useRouter();
  const [showSiteDropdown, setShowSiteDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const currentSite = currentSiteId ? mockSites.find(s => s.id === currentSiteId) : null;

  const handleSiteChange = (siteId: string) => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/\/sites\/[^\/]+/, `/sites/${siteId}`);
    router.push(newPath);
    setShowSiteDropdown(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'text-green-500';
      case 'deploying': return 'text-yellow-500';
      case 'offline': return 'text-red-500';
      default: return 'text-stone-400';
    }
  };

  return (
    <header className="bg-white border-b border-slate-200">
      {/* Top Bar */}
      <div className="px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3 md:space-x-4">
          {/* Hamburger Menu - Mobile Only */}
          <button
            onClick={onMenuToggle}
            className="lg:hidden text-slate-600 hover:text-slate-900 transition-colors p-2"
            aria-label="Open menu"
          >
            <FontAwesomeIcon icon={faBars} className="text-xl" />
          </button>

          {/* Site Switcher Dropdown */}
          {showSiteSwitcher && currentSite ? (
            <div className="relative">
              <button
                onClick={() => setShowSiteDropdown(!showSiteDropdown)}
                className="flex items-center gap-3 px-4 py-2 hover:bg-stone-50 rounded-lg transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <FontAwesomeIcon
                      icon={faCircle}
                      className={`${getStatusColor(currentSite.status)} text-xs`}
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-heading text-base md:text-lg font-semibold text-slate-900 flex items-center gap-2">
                      {currentSite.name}
                      <FontAwesomeIcon icon={faChevronDown} className="text-xs text-stone-400" />
                    </div>
                    <p className="text-xs text-stone-500">{currentSite.domain}</p>
                  </div>
                </div>
              </button>

              {/* Dropdown Menu */}
              {showSiteDropdown && (
                <>
                  {/* Backdrop */}
                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setShowSiteDropdown(false)}
                  />

                  {/* Dropdown */}
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl border border-stone-200 shadow-lg z-40 max-h-96 overflow-y-auto">
                    <div className="p-2">
                      <div className="px-3 py-2 text-xs font-semibold text-stone-500 uppercase tracking-wider">
                        Switch Site
                      </div>
                      {mockSites.map((site) => (
                        <button
                          key={site.id}
                          onClick={() => handleSiteChange(site.id)}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition text-left ${
                            site.id === currentSiteId
                              ? 'bg-pmc-red/10 text-pmc-red'
                              : 'hover:bg-stone-50 text-stone-700'
                          }`}
                        >
                          <FontAwesomeIcon
                            icon={faCircle}
                            className={`${getStatusColor(site.status)} text-xs flex-shrink-0`}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm truncate">{site.name}</div>
                            <div className="text-xs text-stone-500 truncate">{site.domain}</div>
                          </div>
                          {site.id === currentSiteId && (
                            <div className="w-2 h-2 bg-pmc-red rounded-full flex-shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div>
              <h1 className="font-heading text-lg md:text-xl font-semibold text-slate-900">{title}</h1>
              {subtitle && <p className="text-xs md:text-sm text-stone-500 mt-0.5">{subtitle}</p>}
            </div>
          )}
        </div>

        <div className="flex items-center space-x-3 md:space-x-6">
          {showSearch && (
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search sites or domains..."
                className="w-48 lg:w-80 pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent transition-all"
                aria-label="Search sites or domains"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm"
              />
            </div>
          )}

          {showExitButton && (
            <Link
              href="/sites"
              className="hidden md:flex items-center px-4 py-2 text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-lg transition font-medium text-sm"
            >
              <FontAwesomeIcon icon={faXmark} className="mr-2" />
              Exit Wizard
            </Link>
          )}

          {/* Notifications Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfileMenu(false);
              }}
              className="relative text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="Notifications"
            >
              <FontAwesomeIcon icon={faBell} className="text-xl" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-pmc-red text-white text-xs font-semibold rounded-full flex items-center justify-center">
                {notifications.filter(n => !n.read).length}
              </span>
            </button>

            {showNotifications && (
              <>
                {/* Backdrop */}
                <div
                  className="fixed inset-0 z-30"
                  onClick={() => setShowNotifications(false)}
                />

                {/* Notifications Dropdown */}
                <div className="absolute right-0 top-full mt-2 w-80 md:w-96 bg-white rounded-xl border border-slate-200 shadow-lg z-40 max-h-[32rem] overflow-hidden flex flex-col">
                  {/* Header */}
                  <div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-slate-900">Notifications</h3>
                    <button className="text-xs text-pmc-red hover:text-pmc-red-dark font-medium transition">
                      Mark all as read
                    </button>
                  </div>

                  {/* Notifications List */}
                  <div className="overflow-y-auto flex-1">
                    {notifications.map((notification) => {
                      const getNotificationIcon = () => {
                        switch (notification.type) {
                          case 'success': return { icon: faCheckCircle, color: 'text-green-600 bg-green-50' };
                          case 'warning': return { icon: faExclamationTriangle, color: 'text-yellow-600 bg-yellow-50' };
                          case 'info': return { icon: faInfoCircle, color: 'text-blue-600 bg-blue-50' };
                          default: return { icon: faBell, color: 'text-slate-600 bg-slate-50' };
                        }
                      };

                      const { icon, color } = getNotificationIcon();

                      return (
                        <div
                          key={notification.id}
                          className={`px-4 py-3 border-b border-slate-100 hover:bg-slate-50 transition cursor-pointer ${
                            !notification.read ? 'bg-blue-50/30' : ''
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`w-10 h-10 ${color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                              <FontAwesomeIcon icon={icon} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between mb-1">
                                <p className="text-sm font-semibold text-slate-900">{notification.title}</p>
                                {!notification.read && (
                                  <span className="w-2 h-2 bg-pmc-red rounded-full flex-shrink-0 ml-2 mt-1.5"></span>
                                )}
                              </div>
                              <p className="text-xs text-slate-600 mb-1">{notification.message}</p>
                              <p className="text-xs text-slate-400">{notification.time}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Footer */}
                  <div className="px-4 py-3 border-t border-slate-200 bg-slate-50">
                    <button className="w-full text-center text-sm text-pmc-red hover:text-pmc-red-dark font-medium transition">
                      View all notifications
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowProfileMenu(!showProfileMenu);
                setShowNotifications(false);
              }}
              className="flex items-center space-x-2 md:space-x-3 hover:opacity-80 transition-opacity"
              aria-label="User menu"
            >
              <Image
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                alt="User avatar"
                width={36}
                height={36}
                className="rounded-full object-cover border-2 border-slate-200"
              />
              <FontAwesomeIcon icon={faChevronDown} className="text-xs text-slate-400 hidden md:block" />
            </button>

            {showProfileMenu && (
              <>
                {/* Backdrop */}
                <div
                  className="fixed inset-0 z-30"
                  onClick={() => setShowProfileMenu(false)}
                />

                {/* Profile Dropdown */}
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl border border-slate-200 shadow-lg z-40 overflow-hidden">
                  {/* Profile Info */}
                  <div className="px-4 py-4 bg-gradient-to-br from-slate-50 to-slate-100 border-b border-slate-200">
                    <div className="flex items-center space-x-3">
                      <Image
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                        alt="User avatar"
                        width={48}
                        height={48}
                        className="rounded-full object-cover border-2 border-white shadow-sm"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-900 truncate">John Mitchell</p>
                        <p className="text-xs text-slate-500 truncate">john@pmcengine.com</p>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="py-2">
                    <Link
                      href="/profile"
                      onClick={() => setShowProfileMenu(false)}
                      className="flex items-center space-x-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition"
                    >
                      <FontAwesomeIcon icon={faUser} className="w-4 text-slate-400" />
                      <span>My Profile</span>
                    </Link>
                    <Link
                      href="/settings"
                      onClick={() => setShowProfileMenu(false)}
                      className="flex items-center space-x-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition"
                    >
                      <FontAwesomeIcon icon={faGear} className="w-4 text-slate-400" />
                      <span>Settings</span>
                    </Link>
                    <Link
                      href="/billing"
                      onClick={() => setShowProfileMenu(false)}
                      className="flex items-center space-x-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition"
                    >
                      <FontAwesomeIcon icon={faCreditCard} className="w-4 text-slate-400" />
                      <span>Billing</span>
                    </Link>
                    <Link
                      href="/help"
                      onClick={() => setShowProfileMenu(false)}
                      className="flex items-center space-x-3 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition"
                    >
                      <FontAwesomeIcon icon={faQuestionCircle} className="w-4 text-slate-400" />
                      <span>Help & Support</span>
                    </Link>
                  </div>

                  {/* Logout */}
                  <div className="border-t border-slate-200 py-2">
                    <button
                      onClick={() => {
                        setShowProfileMenu(false);
                        // Add logout logic here
                      }}
                      className="flex items-center space-x-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition w-full"
                    >
                      <FontAwesomeIcon icon={faSignOutAlt} className="w-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Stepper Section */}
      {children && (
        <div className="px-4 md:px-8 pb-4 pt-0 flex justify-center border-t border-slate-200">
          {children}
        </div>
      )}
    </header>
  );
}
