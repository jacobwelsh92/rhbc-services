/**
 * Premium Animation Utilities
 *
 * Industry-standard animation functions using GSAP.
 * Used by top agencies like Active Theory, Locomotive, Resn.
 *
 * Features:
 * - Scroll-triggered reveals
 * - Stagger animations
 * - Text split animations
 * - Number counters
 * - Parallax effects
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Fade in element on scroll with customizable direction
 */
export function fadeInOnScroll(
  element: string | Element,
  options: {
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    distance?: number;
    duration?: number;
    delay?: number;
    start?: string;
  } = {}
) {
  const {
    direction = 'up',
    distance = 50,
    duration = 0.8,
    delay = 0,
    start = 'top 80%',
  } = options;

  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  gsap.from(element, {
    opacity: 0,
    ...directionMap[direction],
    duration,
    delay,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start,
      toggleActions: 'play none none reverse',
    },
  });
}

/**
 * Stagger animation for multiple elements
 * Perfect for service grids, team members, project cards
 */
export function staggerReveal(
  elements: string | NodeListOf<Element>,
  options: {
    stagger?: number;
    duration?: number;
    direction?: 'up' | 'left';
    distance?: number;
  } = {}
) {
  const {
    stagger = 0.1,
    duration = 0.8,
    direction = 'up',
    distance = 30,
  } = options;

  const from = direction === 'up' ? { y: distance } : { x: distance };

  gsap.from(elements, {
    opacity: 0,
    ...from,
    duration,
    stagger,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: elements,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });
}

/**
 * Premium text reveal animation
 * Splits text into characters/words and animates them in
 */
export function splitTextReveal(
  element: string | Element,
  options: {
    type?: 'chars' | 'words' | 'lines';
    stagger?: number;
    duration?: number;
  } = {}
) {
  const { type = 'chars', stagger = 0.03, duration = 0.6 } = options;

  const split = new SplitType(element as any, {
    types: type,
  });

  const targets = type === 'chars' ? split.chars : type === 'words' ? split.words : split.lines;

  gsap.from(targets, {
    opacity: 0,
    y: 20,
    rotateX: -90,
    stagger,
    duration,
    ease: 'back.out(1.4)',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });

  return split;
}

/**
 * Animated number counter
 * Perfect for statistics and metrics
 */
export function animateCounter(
  element: string | Element,
  options: {
    target: number;
    duration?: number;
    decimals?: number;
    prefix?: string;
    suffix?: string;
  }
) {
  const { target, duration = 2, decimals = 0, prefix = '', suffix = '' } = options;

  const obj = { val: 0 };

  gsap.to(obj, {
    val: target,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      const value = obj.val.toFixed(decimals);
      if (typeof element === 'string') {
        const el = document.querySelector(element);
        if (el) el.textContent = `${prefix}${value}${suffix}`;
      } else {
        element.textContent = `${prefix}${value}${suffix}`;
      }
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });
}

/**
 * Parallax effect for images and elements
 */
export function parallax(
  element: string | Element,
  options: {
    speed?: number;
    direction?: 'up' | 'down';
  } = {}
) {
  const { speed = 0.5, direction = 'down' } = options;

  gsap.to(element, {
    y: direction === 'down' ? '20%' : '-20%',
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: speed,
    },
  });
}

/**
 * Magnetic element - follows cursor with smooth lag
 * Premium interaction used by top agencies
 */
export function magneticElement(element: Element, strength: number = 0.3) {
  const handleMouseMove = (e: MouseEvent) => {
    const { left, top, width, height } = element.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    gsap.to(element, {
      x: deltaX,
      y: deltaY,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)',
    });
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
}

/**
 * Smooth scroll to element
 */
export function scrollToElement(target: string | Element, offset: number = 0) {
  const lenis = (window as any).lenis;

  if (lenis) {
    lenis.scrollTo(target, {
      offset,
      duration: 1.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  } else {
    // Fallback if Lenis not available
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

/**
 * Initialize all scroll animations
 * Call this once when the page loads
 */
export function initScrollAnimations() {
  // Refresh ScrollTrigger on page load
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });

  // Refresh on window resize (debounced)
  let resizeTimer: ReturnType<typeof setTimeout>;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);
  });
}

/**
 * Page transition animation
 * Used when navigating between pages
 */
export function pageTransition(
  onComplete?: () => void
): Promise<void> {
  return new Promise((resolve) => {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #0F172A;
      z-index: 9999;
      pointer-events: none;
    `;
    document.body.appendChild(overlay);

    gsap.fromTo(
      overlay,
      { y: '-100%' },
      {
        y: '0%',
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: () => {
          if (onComplete) onComplete();
          gsap.to(overlay, {
            y: '100%',
            duration: 0.6,
            ease: 'power2.inOut',
            delay: 0.2,
            onComplete: () => {
              document.body.removeChild(overlay);
              resolve();
            },
          });
        },
      }
    );
  });
}
