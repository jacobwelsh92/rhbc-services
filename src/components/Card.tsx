/**
 * Card Component - Sophisticated Design
 *
 * Clean card component with subtle 3D tilt effect.
 * Black/white/navy color scheme.
 */

import { useRef, useEffect, useState, type ReactNode } from 'react';
import { gsap } from 'gsap';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover3d?: boolean;
  glowEffect?: boolean;
}

export default function Card({
  children,
  className = '',
  hover3d = true,
  glowEffect = true,
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Subtle 3D tilt effect on hover
  useEffect(() => {
    if (!hover3d || !cardRef.current) return;

    const card = cardRef.current;
    const glow = glowRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect();

      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      // Subtle tilt - max 5deg
      const rotateY = (x - 0.5) * 10;
      const rotateX = (y - 0.5) * -10;

      gsap.to(card, {
        rotateX,
        rotateY,
        duration: 0.5,
        ease: 'power2.out',
        transformPerspective: 1000,
      });

      if (glow) {
        gsap.to(glow, {
          x: e.clientX - left,
          y: e.clientY - top,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      gsap.to(card, {
        scale: 1.01,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hover3d]);

  return (
    <div
      ref={cardRef}
      className={`relative bg-white rounded-lg p-8 border border-gray-200 transition-all duration-300 overflow-hidden hover:shadow-lg hover:border-gray-300 ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Subtle glow effect */}
      {glowEffect && (
        <div
          ref={glowRef}
          className={`absolute w-48 h-48 -translate-x-24 -translate-y-24 rounded-full bg-gray-900/5 blur-3xl pointer-events-none transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transformStyle: 'preserve-3d' }}
        />
      )}

      {/* Content */}
      <div className="relative z-10" style={{ transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </div>
  );
}
