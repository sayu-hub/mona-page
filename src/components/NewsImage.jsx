import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function NewsImage({ src, alt, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group mx-auto block w-[92%] max-w-2xl cursor-zoom-in text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
        aria-label={`${alt}を拡大表示`}
      >
        <img src={src} alt={alt} className={`w-full transition-opacity group-hover:opacity-90 ${className}`} />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/80 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${alt}の拡大表示`}
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 rounded-lg bg-white/90 p-2 text-slate-700 shadow-sm transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
            aria-label="画像を閉じる"
          >
            <X size={22} />
          </button>
          <img
            src={src}
            alt={alt}
            className="max-h-[90vh] max-w-full object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
