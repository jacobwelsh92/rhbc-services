/**
 * Before/After Image Slider Component
 *
 * Professional comparison slider for showcasing transformation work.
 * Perfect for construction, demolition, and renovation projects.
 *
 * Features:
 * - Draggable slider with touch support
 * - Keyboard navigation (arrow keys)
 * - Smooth animations and transitions
 * - Mobile-optimized with gesture support
 * - Accessible with ARIA labels
 * - Premium visual design
 *
 * Customer Psychology:
 * - Shows tangible results and transformation
 * - Builds trust through visual proof
 * - Interactive engagement increases memorability
 * - Before/after comparisons are highly persuasive
 */

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  className = '',
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLButtonElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  // Handle slider movement
  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));

    setSliderPosition(percentage);
  };

  // Mouse events
  const handleMouseDown = () => setIsDragging(true);

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  };

  const handleMouseUp = () => setIsDragging(false);

  // Touch events
  const handleTouchStart = () => setIsDragging(true);

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !e.touches[0]) return;
    updateSliderPosition(e.touches[0].clientX);
  };

  const handleTouchEnd = () => setIsDragging(false);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  useEffect(() => {
    // Entrance animation
    if (containerRef.current) {
      gsap.from(containerRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }

    // Handle position animation
    if (handleRef.current) {
      gsap.from(handleRef.current, {
        scale: 0,
        rotation: -180,
        duration: 0.6,
        ease: 'back.out(1.7)',
        delay: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-2xl shadow-2xl ${className}`}
      style={{ aspectRatio: '16/9' }}
    >
      {/* Before Image (Full Width) */}
      <div className="absolute inset-0">
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="w-full h-full object-cover"
          draggable={false}
        />
        {/* Before Label */}
        <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-semibold">
          {beforeLabel}
        </div>
      </div>

      {/* After Image (Clipped by slider position) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={afterImage}
          alt={afterLabel}
          className="w-full h-full object-cover"
          draggable={false}
        />
        {/* After Label */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg font-semibold">
          {afterLabel}
        </div>
      </div>

      {/* Slider Line */}
      <div
        ref={sliderRef}
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Slider Handle */}
        <button
          ref={handleRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onKeyDown={handleKeyDown}
          className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-16 h-16 rounded-full bg-white shadow-2xl
            flex items-center justify-center
            cursor-grab active:cursor-grabbing
            hover:scale-110 transition-transform duration-200
            focus:outline-none focus:ring-4 focus:ring-gray-500/50
            ${isDragging ? 'scale-110' : ''}
          `}
          aria-label="Drag to compare before and after"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={sliderPosition}
          role="slider"
        >
          {/* Left Arrow */}
          <svg
            className="w-6 h-6 text-slate-700 absolute left-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M15 19l-7-7 7-7"
            />
          </svg>

          {/* Right Arrow */}
          <svg
            className="w-6 h-6 text-slate-700 absolute right-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Instruction hint (appears initially, fades after interaction) */}
      {!isDragging && sliderPosition === 50 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/80 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium text-sm animate-pulse">
          <span className="hidden sm:inline">Drag to compare</span>
          <span className="sm:hidden">Swipe to compare</span>
        </div>
      )}
    </div>
  );
}
