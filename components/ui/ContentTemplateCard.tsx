import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ContentTemplateCardProps {
  icon: IconDefinition;
  title: string;
  description: string;
  isPopular?: boolean;
  onClick?: () => void;
}

export default function ContentTemplateCard({
  icon,
  title,
  description,
  isPopular = false,
  onClick
}: ContentTemplateCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-4 ${
        isPopular
          ? 'bg-purple-50 border border-purple-200 hover:bg-purple-100'
          : 'bg-white border border-slate-200 hover:bg-slate-50'
      } rounded-lg transition text-left group`}
    >
      <div className="flex items-start justify-between mb-2">
        <FontAwesomeIcon
          icon={icon}
          className={isPopular ? 'text-purple-600' : 'text-slate-600'}
        />
        {isPopular && (
          <span className="px-2 py-0.5 bg-purple-600 text-white text-xs font-semibold rounded">
            Popular
          </span>
        )}
      </div>
      <h4 className="text-sm font-semibold text-slate-900 mb-1">{title}</h4>
      <p className="text-xs text-slate-600">{description}</p>
    </button>
  );
}
