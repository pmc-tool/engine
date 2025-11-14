'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onFilterClick?: () => void;
  showFilter?: boolean;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = 'Search...',
  onFilterClick,
  showFilter = false
}: SearchBarProps) {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative flex-1">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pmc-red focus:border-transparent transition-all"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm"
        />
      </div>
      {showFilter && (
        <button
          onClick={onFilterClick}
          className="px-4 py-2.5 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-all flex items-center space-x-2"
        >
          <FontAwesomeIcon icon={faFilter} className="text-sm" />
          <span className="hidden sm:inline text-sm font-medium">Filter</span>
        </button>
      )}
    </div>
  );
}
