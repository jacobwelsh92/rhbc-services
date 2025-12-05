/**
 * Custom Cursor Component
 *
 * Premium custom cursor with smooth following and scale effects.
 * Signature feature of world-class websites.
 *
 * Features:
 * - Smooth cursor following with lag
 * - Scales up on interactive elements
 * - Hides on touch devices
 * - GSAP-powered smooth animations
 */

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Hide on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    // Mouse move with smooth lag
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Main cursor follows with lag
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.6,
        ease: 'power2.out',
      });

      // Dot follows faster for precision
      gsap.to(cursorDot, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    // Scale up on interactive elements
    const handleMouseEnter = () => {
      setIsHovering(true);
      gsap.to(cursor, {
        scale: 1.5,
        duration: 0.3,
        ease: 'back.out(1.7)',
      });
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    // Add listeners to all interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, .cursor-pointer'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter as any);
      el.addEventListener('mouseleave', handleMouseLeave as any);
    });

    document.addEventListener('mousemove', handleMouseMove);

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
      gsap.to([cursor, cursorDot], {
        opacity: 0,
        duration: 0.2,
      });
    });

    document.addEventListener('mouseenter', () => {
      gsap.to([cursor, cursorDot], {
        opacity: 1,
        duration: 0.2,
      });
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter as any);
        el.removeEventListener('mouseleave', handleMouseLeave as any);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor circle */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999] mix-blend-difference ${
          isHovering ? 'opacity-100' : 'opacity-50'
        }`}
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`w-full h-full rounded-full border-2 transition-colors duration-300 ${
            isHovering ? 'border-white' : 'border-white'
          }`}
        />
      </div>

      {/* Cursor dot for precision */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
}
