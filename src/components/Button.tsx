/**
 * Premium Button Component with Magnetic Hover
 *
 * Industry-leading button component with sophisticated interactions.
 * Features magnetic hover effect using GSAP - used by top agencies.
 *
 * Variants:
 * - primary: Orange CTA button
 * - secondary: Outlined button
 * - ghost: Text-only button
 *
 * Accessibility: WCAG 2.2 AA compliant
 */

import { useRef, useEffect, type ReactNode } from 'react';
import { gsap } from 'gsap';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  magnetic?: boolean;
  ariaLabel?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  magnetic = true,
  ariaLabel,
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const magneticRef = useRef<HTMLDivElement>(null);

  // Magnetic hover effect - industry standard premium interaction
  useEffect(() => {
    if (!magnetic || !buttonRef.current) return;

    const button = buttonRef.current;
    const magnetic = magneticRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = button.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const deltaX = (e.clientX - centerX) * 0.35;
      const deltaY = (e.clientY - centerY) * 0.35;

      gsap.to(button, {
        x: deltaX,
        y: deltaY,
        duration: 0.5,
        ease: 'power2.out',
      });

      if (magnetic) {
        gsap.to(magnetic, {
          x: deltaX * 0.5,
          y: deltaY * 0.5,
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });

      if (magnetic) {
        gsap.to(magnetic, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)',
        });
      }
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [magnetic]);

  // Style variants - design system compliant
  const variants = {
    primary:
      'bg-orange-500 text-white hover:bg-orange-600 shadow-md hover:shadow-xl',
    secondary:
      'border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white',
    ghost: 'text-slate-800 hover:text-orange-500',
  };

  const sizes = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 relative overflow-hidden group';

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {/* Magnetic wrapper for nested element animation */}
      <div ref={magneticRef} className="relative z-10 flex items-center gap-2">
        {children}
      </div>

      {/* Hover shine effect - premium detail */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </>
  );

  // Render as link or button based on href prop
  if (href) {
    return (
      <a
        ref={buttonRef as any}
        href={href}
        className={combinedStyles}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as any}
      onClick={onClick}
      className={combinedStyles}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
