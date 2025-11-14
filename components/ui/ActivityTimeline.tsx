'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface ActivityItemData {
  id: string;
  type: 'deployment' | 'file' | 'content' | 'security' | 'database' | 'settings' | 'user' | 'plugin' | 'theme';
  icon: IconDefinition;
  iconColor: string;
  iconBg: string;
  title: string;
  description: string;
  timestamp: string;
  user?: string;
}

interface ActivityTimelineProps {
  activities: ActivityItemData[];
}

export default function ActivityTimeline({ activities }: ActivityTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 hidden sm:block" />

      {/* Activities */}
      <div className="space-y-6">
        {activities.map((activity, index) => (
          <div key={activity.id} className="relative flex gap-4">
            {/* Icon */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 ${activity.iconBg}`}
            >
              <FontAwesomeIcon icon={activity.icon} className={`text-sm ${activity.iconColor}`} />
            </div>

            {/* Content */}
            <div className="flex-1 pb-6">
              <div className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="font-medium text-slate-900 text-sm">{activity.title}</h4>
                  <span className="text-xs text-slate-500 whitespace-nowrap">{activity.timestamp}</span>
                </div>
                <p className="text-sm text-slate-600 mb-2">{activity.description}</p>
                {activity.user && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">by</span>
                    <span className="text-xs font-medium text-slate-700">{activity.user}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
