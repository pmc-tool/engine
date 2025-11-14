import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface QuickActionCardProps {
  icon: IconDefinition;
  title: string;
  description: string;
  gradient: string;
  onClick?: () => void;
}

export default function QuickActionCard({
  icon,
  title,
  description,
  gradient,
  onClick
}: QuickActionCardProps) {
  return (
    <button
      onClick={onClick}
      className={`${gradient} rounded-card p-6 text-white hover:opacity-90 transition shadow-lg group text-left w-full`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
          <FontAwesomeIcon icon={icon} className="text-2xl" />
        </div>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-white/60 group-hover:text-white transition"
        />
      </div>
      <h3 className="text-lg font-display font-bold mb-2">{title}</h3>
      <p className="text-sm text-white/90">{description}</p>
    </button>
  );
}
