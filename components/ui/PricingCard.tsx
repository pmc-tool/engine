'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircle } from '@fortawesome/free-solid-svg-icons';
import Badge from './Badge';

interface PricingCardProps {
  id: string;
  name: string;
  price: number;
  billing: string;
  badge?: string;
  features: string[];
  description: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export default function PricingCard({
  id,
  name,
  price,
  billing,
  badge,
  features,
  description,
  isSelected,
  onSelect
}: PricingCardProps) {
  return (
    <button
      onClick={() => onSelect(id)}
      className={`relative bg-white border-2 rounded-pmc p-5 md:p-6 text-left transition-all hover:shadow-lg ${
        isSelected
          ? 'border-pmc-red shadow-md'
          : 'border-slate-200 hover:border-slate-300'
      }`}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="recommended">{badge}</Badge>
        </div>
      )}

      {/* Radio Button Indicator */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-heading text-lg md:text-xl font-semibold text-slate-900 mb-1">
            {name}
          </h3>
          <div className="flex items-baseline">
            <span className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              ${price}
            </span>
            <span className="text-sm text-slate-600 ml-2">/{billing}</span>
          </div>
        </div>

        {/* Radio Button Visual */}
        <div
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
            isSelected
              ? 'border-pmc-red bg-pmc-red'
              : 'border-slate-300'
          }`}
        >
          {isSelected && (
            <div className="w-2 h-2 bg-white rounded-full"></div>
          )}
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-2.5 mb-5">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-slate-700">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-green-600 mt-0.5 mr-2 flex-shrink-0"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Description */}
      <p className="text-xs text-slate-500 pt-4 border-t border-slate-200">
        {description}
      </p>
    </button>
  );
}
