import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface StatCardProps {
  icon: IconDefinition;
  iconColor: string;
  iconBg: string;
  label: string;
  value: string | number;
  badge?: string;
  badgeBg?: string;
  badgeText?: string;
  showProgress?: boolean;
  progress?: number;
  progressText?: string;
}

export default function StatCard({
  icon,
  iconColor,
  iconBg,
  label,
  value,
  badge,
  badgeBg = 'bg-purple-50',
  badgeText = 'text-purple-700',
  showProgress = false,
  progress = 0,
  progressText
}: StatCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-card p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center`}>
          <FontAwesomeIcon icon={icon} className={`${iconColor} text-xl`} />
        </div>
        {badge && (
          <span className={`px-2.5 py-1 ${badgeBg} ${badgeText} text-xs font-semibold rounded-full`}>
            {badge}
          </span>
        )}
      </div>
      <div className="text-3xl font-display font-bold text-slate-900 mb-1">{value}</div>
      <div className="text-sm text-slate-600 mb-3">{label}</div>
      {showProgress && (
        <>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-purple-500 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          {progressText && (
            <div className="text-xs text-slate-500 mt-2">{progressText}</div>
          )}
        </>
      )}
    </div>
  );
}
