'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFile,
  faFileImage,
  faFileVideo,
  faFileAudio,
  faFilePdf,
  faFileWord,
  faFileExcel,
  faFileCode,
  faFolder,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons';

interface FileCardProps {
  name: string;
  type: 'folder' | 'image' | 'video' | 'audio' | 'pdf' | 'doc' | 'excel' | 'code' | 'file';
  size?: string;
  modified?: string;
  onClick?: () => void;
  onMenuClick?: (e: React.MouseEvent) => void;
}

const iconMap = {
  folder: faFolder,
  image: faFileImage,
  video: faFileVideo,
  audio: faFileAudio,
  pdf: faFilePdf,
  doc: faFileWord,
  excel: faFileExcel,
  code: faFileCode,
  file: faFile,
};

const colorMap = {
  folder: 'text-amber-500',
  image: 'text-purple-500',
  video: 'text-red-500',
  audio: 'text-green-500',
  pdf: 'text-red-600',
  doc: 'text-blue-600',
  excel: 'text-green-600',
  code: 'text-slate-600',
  file: 'text-slate-400',
};

export default function FileCard({
  name,
  type,
  size,
  modified,
  onClick,
  onMenuClick
}: FileCardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-white border border-slate-200 rounded-lg p-4 transition-all hover:shadow-md ${
        onClick ? 'cursor-pointer hover:border-slate-300' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className={`text-4xl ${colorMap[type]}`}>
          <FontAwesomeIcon icon={iconMap[type]} />
        </div>
        {onMenuClick && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMenuClick(e);
            }}
            className="text-slate-400 hover:text-slate-600 p-2 -mr-2 -mt-2"
          >
            <FontAwesomeIcon icon={faEllipsisV} />
          </button>
        )}
      </div>

      <h4 className="font-medium text-slate-900 text-sm mb-1 truncate" title={name}>
        {name}
      </h4>

      <div className="flex items-center justify-between text-xs text-slate-500">
        {size && <span>{size}</span>}
        {modified && <span>{modified}</span>}
      </div>
    </div>
  );
}
