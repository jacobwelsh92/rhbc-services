/**
 * Premium Card Component
 *
 * Industry-leading card component with sophisticated 3D tilt effect.
 * Used for services, projects, and content displays.
 *
 * Features:
 * - Smooth tilt on mouse move
 * - Lighting effect that follows cursor
 * - GSAP-powered animations
 * - Accessible and semantic HTML
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

  // Premium 3D tilt effect on hover
  useEffect(() => {
    if (!hover3d || !cardRef.current) return;

    const card = cardRef.current;
    const glow = glowRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect();

      // Calculate mouse position relative to card center
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      // Calculate tilt angles (subtle for professional feel)
      const rotateY = (x - 0.5) * 15; // Max 7.5deg in each direction
      const rotateX = (y - 0.5) * -15; // Max 7.5deg in each direction

      gsap.to(card, {
        rotateX,
        rotateY,
        duration: 0.5,
        ease: 'power2.out',
        transformPerspective: 1000,
      });

      // Move glow effect to follow cursor
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
        scale: 1.02,
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

  const baseStyles =
    'relative bg-white rounded-xl p-8 shadow-md transition-shadow duration-300 overflow-hidden';
  const hoverStyles = 'hover:shadow-2xl';

  return (
    <div
      ref={cardRef}
      className={`${baseStyles} ${hoverStyles} ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Glow effect that follows cursor */}
      {glowEffect && (
        <div
          ref={glowRef}
          className={`absolute w-64 h-64 -translate-x-32 -translate-y-32 rounded-full bg-orange-500/10 blur-3xl pointer-events-none transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transformStyle: 'preserve-3d' }}
        />
      )}

      {/* Border glow on hover */}
      <div
        className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background:
            'linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, transparent 50%, rgba(245, 158, 11, 0.2) 100%)',
          transformStyle: 'preserve-3d',
        }}
      />

      {/* Content */}
      <div className="relative z-10" style={{ transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </div>
  );
}
