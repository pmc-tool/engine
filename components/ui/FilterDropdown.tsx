'use client';

import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faCheck } from '@fortawesome/free-solid-svg-icons';

export interface FilterOption {
  value: string;
  label: string;
}

interface FilterDropdownProps {
  options: FilterOption[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
  label?: string;
}

export default function FilterDropdown({
  options,
  selectedValues,
  onChange,
  label = 'Filter'
}: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleOption = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter(v => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  const clearAll = () => {
    onChange([]);
  };

  const selectedCount = selectedValues.length;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-all flex items-center space-x-2 text-sm font-medium"
      >
        <FontAwesomeIcon icon={faFilter} />
        <span>{label}</span>
        {selectedCount > 0 && (
          <span className="bg-pmc-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {selectedCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-slate-200 rounded-lg shadow-lg py-2 z-20">
          <div className="px-3 py-2 border-b border-slate-200 flex items-center justify-between">
            <span className="text-xs font-medium text-slate-700">Filter Options</span>
            {selectedCount > 0 && (
              <button
                onClick={clearAll}
                className="text-xs text-pmc-red hover:underline"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="max-h-64 overflow-y-auto">
            {options.map((option) => {
              const isSelected = selectedValues.includes(option.value);
              return (
                <button
                  key={option.value}
                  onClick={() => toggleOption(option.value)}
                  className="w-full px-3 py-2 text-left text-sm hover:bg-slate-50 transition-colors flex items-center justify-between"
                >
                  <span className={isSelected ? 'font-medium text-slate-900' : 'text-slate-700'}>
                    {option.label}
                  </span>
                  {isSelected && (
                    <FontAwesomeIcon icon={faCheck} className="text-pmc-red text-xs" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
