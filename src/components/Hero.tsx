/**
 * Premium Hero Section
 *
 * Sophisticated hero with black/white/navy design.
 * Clean, minimal, and professional.
 */

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface HeroProps {
  videoUrl?: string;
  posterImage?: string;
}

export default function Hero({
  videoUrl = '/videos/construction-hero.mp4',
  posterImage = '/images/hero-poster.jpg',
}: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      // Headline fade-in
      if (headlineRef.current) {
        gsap.from(headlineRef.current, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power3.out',
          delay: 0.2,
        });
      }

      // Subtext fade-in
      const subtextElements = document.querySelectorAll('.hero-subtext');
      if (subtextElements.length > 0) {
        gsap.from('.hero-subtext', {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.6,
        });
      }

      // CTA buttons stagger
      const ctaElements = document.querySelectorAll('.hero-cta');
      if (ctaElements.length > 0) {
        gsap.from('.hero-cta', {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 1,
        });
      }

      // Stats stagger
      const stats = document.querySelectorAll('.hero-stat');
      if (stats.length > 0) {
        gsap.from('.hero-stat', {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 1.3,
        });
      }
    } catch (error) {
      console.error('Hero animation error:', error);
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        {/* Video for desktop */}
        <video
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster={posterImage}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>

        {/* Static image for mobile */}
        <div
          className="md:hidden absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${posterImage})` }}
        />

        {/* Dark overlay - sophisticated gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
        {/* Eyebrow text */}
        <p className="hero-subtext text-sm md:text-base text-white/60 tracking-widest uppercase mb-6">
          Construction & Demolition Specialists
        </p>

        {/* Main Headline */}
        <h1
          ref={headlineRef}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white mb-8 leading-[1.1] tracking-tight"
          style={{ letterSpacing: '-0.02em' }}
        >
          Building Excellence.<br />
          Delivering Results.
        </h1>

        {/* Value Proposition */}
        <p className="hero-subtext text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Expert project management and specialized demolition services for
          commercial and residential projects across Queensland.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href="#contact"
            className="hero-cta px-8 py-4 bg-white text-gray-900 font-medium rounded hover:bg-gray-100 transition-all duration-300 w-full sm:w-auto"
          >
            Get a Quote
          </a>

          <a
            href="#projects"
            className="hero-cta px-8 py-4 border border-white/30 text-white font-medium rounded hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
          >
            View Our Work
          </a>
        </div>

        {/* Stats - Minimal, sophisticated */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-3xl mx-auto">
          <div className="hero-stat">
            <div className="text-3xl md:text-4xl font-semibold text-white mb-1">
              15+
            </div>
            <div className="text-sm text-white/50 tracking-wide">
              Years Experience
            </div>
          </div>

          <div className="hero-stat">
            <div className="text-3xl md:text-4xl font-semibold text-white mb-1">
              500+
            </div>
            <div className="text-sm text-white/50 tracking-wide">
              Projects Completed
            </div>
          </div>

          <div className="hero-stat">
            <div className="text-3xl md:text-4xl font-semibold text-white mb-1">
              100%
            </div>
            <div className="text-sm text-white/50 tracking-wide">
              Safety Record
            </div>
          </div>

          <div className="hero-stat">
            <div className="text-3xl md:text-4xl font-semibold text-white mb-1">
              24/7
            </div>
            <div className="text-sm text-white/50 tracking-wide">
              Support Available
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
