import React from 'react';
import { X, ZoomIn } from 'lucide-react';

interface ImageDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

export const ImageDetailModal: React.FC<ImageDetailModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title
}) => {
  if (!isOpen || !imageUrl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="relative max-w-4xl w-full bg-neutral-900 border border-amber-500/30 rounded-lg overflow-hidden shadow-2xl">
        <div className="px-5 py-3 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between text-xs text-neutral-300">
          <span className="font-serif text-sm text-amber-200">{title}</span>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-1 rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="max-h-[80vh] overflow-hidden flex items-center justify-center bg-black p-2">
          <img
            src={imageUrl}
            alt={title}
            className="max-h-[75vh] w-auto object-contain rounded-xs"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
};
