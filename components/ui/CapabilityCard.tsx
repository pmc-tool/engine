import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface CapabilityCardProps {
  icon: IconDefinition;
  iconColor: string;
  iconBg: string;
  title: string;
  description: string;
  features: string[];
}

export default function CapabilityCard({
  icon,
  iconColor,
  iconBg,
  title,
  description,
  features
}: CapabilityCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-card p-6 shadow-sm">
      <div className="flex items-center space-x-3 mb-4">
        <div className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center`}>
          <FontAwesomeIcon icon={icon} className={`${iconColor} text-xl`} />
        </div>
        <h3 className="text-lg font-display font-bold text-slate-900">{title}</h3>
      </div>
      <p className="text-sm text-slate-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-slate-700">
            <FontAwesomeIcon icon={faCheck} className="text-green-600 mr-2 text-xs" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
