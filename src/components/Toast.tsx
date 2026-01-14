'use client';

import { useEffect, useState } from 'react';

export default function Toast() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleShowToast = (event: CustomEvent) => {
      setMessage(event.detail.message);
      setIsVisible(true);

      // Auto hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    window.addEventListener('showToast' as any, handleShowToast);

    return () => {
      window.removeEventListener('showToast' as any, handleShowToast);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-[slideInRight_0.3s_ease-out]">
      <div className="bg-gray-900 text-white px-6 py-4 shadow-2xl border border-gray-800 flex items-center gap-3 min-w-[300px]">
        {/* Success Icon */}
        <div className="flex-shrink-0">
          <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        {/* Message */}
        <p className="text-sm font-medium">{message}</p>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="ml-auto text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
