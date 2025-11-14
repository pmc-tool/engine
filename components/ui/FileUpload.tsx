'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUpload, faFile, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';

interface FileUploadProps {
  onFilesSelected: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in MB
  maxFiles?: number;
}

export default function FileUpload({
  onFilesSelected,
  accept = '*',
  multiple = true,
  maxSize = 10,
  maxFiles = 5
}: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [error, setError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const validateFiles = (files: File[]): string | null => {
    if (!multiple && files.length > 1) {
      return 'Please select only one file';
    }
    if (files.length > maxFiles) {
      return `Maximum ${maxFiles} files allowed`;
    }
    for (const file of files) {
      if (file.size > maxSize * 1024 * 1024) {
        return `File "${file.name}" exceeds ${maxSize}MB limit`;
      }
    }
    return null;
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    setError('');

    const files = Array.from(e.dataTransfer.files);
    const validationError = validateFiles(files);

    if (validationError) {
      setError(validationError);
      return;
    }

    setSelectedFiles(files);
    onFilesSelected(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    const files = Array.from(e.target.files || []);
    const validationError = validateFiles(files);

    if (validationError) {
      setError(validationError);
      return;
    }

    setSelectedFiles(files);
    onFilesSelected(files);
  };

  const removeFile = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
    onFilesSelected(newFiles);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className="w-full">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-all cursor-pointer ${
          isDragging
            ? 'border-pmc-red bg-red-50'
            : 'border-slate-300 hover:border-slate-400 hover:bg-slate-50'
        }`}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="flex flex-col items-center space-y-3">
          <FontAwesomeIcon
            icon={faCloudUpload}
            className={`text-5xl transition-colors ${
              isDragging ? 'text-pmc-red' : 'text-slate-400'
            }`}
          />
          <div>
            <p className="text-slate-700 font-medium">
              Drop files here or click to browse
            </p>
            <p className="text-sm text-slate-500 mt-1">
              Maximum {maxSize}MB per file {multiple ? `(up to ${maxFiles} files)` : ''}
            </p>
          </div>
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileInput}
        accept={accept}
        multiple={multiple}
        className="hidden"
      />

      {error && (
        <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      {selectedFiles.length > 0 && (
        <div className="mt-4 space-y-2">
          <p className="text-sm font-medium text-slate-700">Selected Files:</p>
          {selectedFiles.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-lg"
            >
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                <FontAwesomeIcon icon={faFile} className="text-slate-400" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 truncate">
                    {file.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {formatFileSize(file.size)}
                  </p>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(index);
                }}
                className="ml-3 p-2 text-slate-400 hover:text-red-600 transition-colors"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
