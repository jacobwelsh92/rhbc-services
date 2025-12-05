/**
 * Contact CTA - Subtle & Sophisticated
 *
 * Minimal floating contact button for quick access.
 * Clean design matches the premium aesthetic.
 */

import React from 'react';

export default function EmergencyCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href="tel:+61474309168"
        className="flex items-center gap-3 bg-gray-900 text-white px-5 py-3 rounded-full shadow-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 group"
        aria-label="Call RHBC Services"
      >
        {/* Phone Icon */}
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>

        {/* Text - Hidden on mobile */}
        <span className="hidden sm:block text-sm font-medium">
          Call Now
        </span>

        {/* Arrow */}
        <svg
          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>
  );
}
