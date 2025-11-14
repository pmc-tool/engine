'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faPencil,
  faTrash,
  faCopy,
  faDownload,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export interface Action {
  icon: any;
  label: string;
  onClick: () => void;
  variant?: 'default' | 'danger';
}

interface TableActionsProps {
  actions: Action[];
  compact?: boolean;
}

export default function TableActions({ actions, compact = false }: TableActionsProps) {
  const [showMenu, setShowMenu] = useState(false);

  if (compact) {
    // Mobile: Show dropdown menu
    return (
      <div className="relative">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <FontAwesomeIcon icon={faEllipsisV} className="text-slate-600" />
        </button>

        {showMenu && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setShowMenu(false)}
            />
            <div className="absolute right-0 top-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg py-1 z-20 min-w-[160px]">
              {actions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => {
                    action.onClick();
                    setShowMenu(false);
                  }}
                  className={`w-full px-4 py-2 text-left text-sm hover:bg-slate-50 flex items-center space-x-3 transition-colors ${
                    action.variant === 'danger' ? 'text-red-600 hover:bg-red-50' : 'text-slate-700'
                  }`}
                >
                  <FontAwesomeIcon icon={action.icon} className="w-4" />
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

  // Desktop: Show inline buttons
  return (
    <div className="flex items-center space-x-2">
      {actions.map((action, index) => (
        <button
          key={index}
          onClick={action.onClick}
          title={action.label}
          className={`p-2 rounded-lg transition-colors ${
            action.variant === 'danger'
              ? 'text-red-600 hover:bg-red-50'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <FontAwesomeIcon icon={action.icon} className="text-sm" />
        </button>
      ))}
    </div>
  );
}

// Predefined action sets for common use cases
export const viewEditDeleteActions = (
  onView: () => void,
  onEdit: () => void,
  onDelete: () => void
): Action[] => [
  { icon: faEye, label: 'View', onClick: onView },
  { icon: faPencil, label: 'Edit', onClick: onEdit },
  { icon: faTrash, label: 'Delete', onClick: onDelete, variant: 'danger' }
];

export const fileActions = (
  onView: () => void,
  onDownload: () => void,
  onDelete: () => void
): Action[] => [
  { icon: faEye, label: 'View', onClick: onView },
  { icon: faDownload, label: 'Download', onClick: onDownload },
  { icon: faTrash, label: 'Delete', onClick: onDelete, variant: 'danger' }
];

export const duplicateDeleteActions = (
  onDuplicate: () => void,
  onDelete: () => void
): Action[] => [
  { icon: faCopy, label: 'Duplicate', onClick: onDuplicate },
  { icon: faTrash, label: 'Delete', onClick: onDelete, variant: 'danger' }
];
