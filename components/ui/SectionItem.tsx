import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface SectionItemProps {
  title: string;
  description: string;
  isActive?: boolean;
  isSaved?: boolean;
  hasUnsavedChanges?: boolean;
  onClick?: () => void;
}

export default function SectionItem({
  title,
  description,
  isActive = false,
  isSaved = true,
  hasUnsavedChanges = false,
  onClick
}: SectionItemProps) {
  return (
    <div
      onClick={onClick}
      className={`px-3 py-3 rounded-lg cursor-pointer transition-colors ${
        isActive
          ? 'bg-blue-50 border-l-3 border-blue-500'
          : 'hover:bg-slate-50'
      }`}
    >
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faGripVertical} className="text-slate-400 text-xs" />
          <span className={`text-sm font-medium ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
            {title}
          </span>
        </div>
        <div className="flex items-center space-x-1">
          {hasUnsavedChanges ? (
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
          ) : isSaved ? (
            <span className="px-1.5 py-0.5 bg-green-100 text-green-700 text-[10px] font-medium rounded">
              Saved
            </span>
          ) : null}
          <FontAwesomeIcon icon={faChevronRight} className="text-slate-400 text-xs" />
        </div>
      </div>
      <div className="text-xs text-slate-500 ml-5">{description}</div>
    </div>
  );
}
