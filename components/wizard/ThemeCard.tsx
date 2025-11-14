'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faStar, faEye } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Theme } from '@/lib/themesData';
import { useState } from 'react';

interface ThemeCardProps {
  theme: Theme;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

// Icon mapping - you'll need to import these from fontawesome
const iconMap: Record<string, string> = {
  'fa-briefcase': 'briefcase',
  'fa-store': 'store',
  'fa-image': 'image',
  'fa-utensils': 'utensils',
  'fa-rocket': 'rocket',
  'fa-users': 'users',
  'fa-heart': 'heart',
  'fa-newspaper': 'newspaper',
  'fa-dumbbell': 'dumbbell',
  'fa-music': 'music',
  'fa-graduation-cap': 'graduation-cap',
  'fa-spa': 'spa',
};

export default function ThemeCard({ theme, isSelected, onSelect }: ThemeCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleSelect = () => {
    onSelect(theme.id);
  };

  const handlePreview = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Handle preview logic
    console.log('Preview theme:', theme.id);
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        className={`text-xs ${i < Math.floor(theme.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div
      className={`relative bg-white border-2 rounded-xl overflow-hidden cursor-pointer transition-all hover:shadow-lg transform hover:-translate-y-1 ${
        isSelected ? 'border-pmc-red shadow-md' : 'border-gray-200'
      }`}
      onClick={handleSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Selected Indicator */}
      {isSelected && (
        <div className="absolute top-3 right-3 z-10 w-8 h-8 bg-pmc-red rounded-full flex items-center justify-center shadow-lg">
          <FontAwesomeIcon icon={faCheck} className="text-white text-sm" />
        </div>
      )}

      {/* Theme Preview with Gradient */}
      <div className={`relative h-48 bg-gradient-to-br ${theme.gradient} flex items-center justify-center`}>
        {/* Icon */}
        <i className={`fas ${theme.icon} text-white text-6xl opacity-80`}></i>

        {/* Preview Overlay on Hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-all">
            <button
              onClick={handlePreview}
              className="bg-white text-gray-900 px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-gray-100 transition-all flex items-center space-x-2 shadow-lg"
            >
              <FontAwesomeIcon icon={faEye} />
              <span>Preview</span>
            </button>
          </div>
        )}
      </div>

      {/* Theme Info */}
      <div className="p-5">
        <h3 className="font-semibold text-lg text-gray-900 mb-2">{theme.name}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{theme.description}</p>

        {/* Rating */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex items-center space-x-1">{renderStars()}</div>
          <span className="text-sm font-semibold text-gray-900">{theme.rating}</span>
          <span className="text-sm text-gray-500">({theme.downloads} downloads)</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {theme.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Additional Info */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <span>{theme.pages} pages</span>
          <span>•</span>
          <span>Purchased {theme.purchasedDate}</span>
        </div>

        {/* Select Button */}
        <button
          onClick={handleSelect}
          className={`w-full py-2.5 rounded-lg font-medium text-sm transition-all ${
            isSelected
              ? 'bg-pmc-red text-white hover:bg-red-700'
              : 'border-2 border-gray-300 text-gray-700 hover:border-pmc-red hover:text-pmc-red'
          }`}
        >
          {isSelected ? (
            <span className="flex items-center justify-center space-x-2">
              <FontAwesomeIcon icon={faCheck} />
              <span>Selected</span>
            </span>
          ) : (
            'Select Theme'
          )}
        </button>
      </div>
    </div>
  );
}
