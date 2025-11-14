import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCopy, faEllipsisVertical, faClock, faFileLines, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

interface RecentGenerationCardProps {
  title: string;
  type: string;
  typeBadge: string;
  description: string;
  timestamp: string;
  wordCount: number;
  tone: string;
  isApplied?: boolean;
  onView?: () => void;
  onCopy?: () => void;
  onMore?: () => void;
}

export default function RecentGenerationCard({
  title,
  type,
  typeBadge,
  description,
  timestamp,
  wordCount,
  tone,
  isApplied = false,
  onView,
  onCopy,
  onMore
}: RecentGenerationCardProps) {
  return (
    <div className="p-6 hover:bg-slate-50 transition">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <span className="px-2 py-0.5 bg-purple-50 text-purple-700 text-xs font-semibold rounded">
              {typeBadge}
            </span>
            {isApplied && (
              <span className="px-2 py-0.5 bg-green-50 text-green-700 text-xs font-semibold rounded">
                Applied
              </span>
            )}
          </div>
          <p className="text-sm text-slate-600 mb-2">{description}</p>
          <div className="flex items-center space-x-4 text-xs text-slate-500">
            <span>
              <FontAwesomeIcon icon={faClock} className="mr-1" />
              {timestamp}
            </span>
            <span>
              <FontAwesomeIcon icon={faFileLines} className="mr-1" />
              {wordCount} words
            </span>
            <span>
              <FontAwesomeIcon icon={faWandMagicSparkles} className="mr-1" />
              {tone} tone
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={onView}
            className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition"
          >
            <FontAwesomeIcon icon={faEye} />
          </button>
          <button
            onClick={onCopy}
            className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition"
          >
            <FontAwesomeIcon icon={faCopy} />
          </button>
          <button
            onClick={onMore}
            className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition"
          >
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
        </div>
      </div>
    </div>
  );
}
