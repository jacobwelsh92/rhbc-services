/**
 * Emergency Contact CTA
 *
 * Prominent call-to-action for urgent construction/demolition needs.
 * Critical for construction industry where emergencies require immediate response.
 *
 * Features:
 * - High-visibility design
 * - Direct phone link
 * - 24/7 availability messaging
 * - Mobile-optimized tap-to-call
 */

import React from 'react';

export default function EmergencyCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 animate-bounce">
      <a
        href="tel:+61474309168"
        className="flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-red-500/50 hover:scale-105 transition-all duration-300 group"
        aria-label="Emergency Contact - Call Now"
      >
        {/* Pulsing Icon */}
        <div className="relative">
          <div className="absolute inset-0 bg-white/30 rounded-full animate-ping" />
          <svg
            className="w-6 h-6 relative z-10"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </div>

        {/* Text */}
        <div className="hidden sm:block text-left">
          <div className="text-xs font-semibold uppercase tracking-wider opacity-90">
            Emergency?
          </div>
          <div className="text-sm font-bold">Call Now</div>
        </div>

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

      {/* Availability Badge */}
      <div className="absolute -top-2 -left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse">
        24/7
      </div>
    </div>
  );
}
