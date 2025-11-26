/**
 * Premium Hero Section
 *
 * Industry-leading hero designed for high-value construction customers.
 * First impression that builds immediate trust and authority.
 *
 * Customer Psychology:
 * - Immediate credibility (years, projects, expertise)
 * - Strong, confident messaging
 * - Multiple CTAs (different customer intents)
 * - Professional background video showing actual work
 * - Trust signals front and center
 *
 * Technical:
 * - Background video with optimized loading
 * - Advanced multi-layer parallax (Phase 6 enhancement)
 * - GSAP scroll-triggered animations with 3D transforms
 * - SplitType text reveals
 * - Depth-based parallax effect
 * - Mobile-optimized (static image fallback)
 */

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import SplitType from 'split-type'; // TEMPORARILY DISABLED - causing hydration issues
import Button from './Button';

gsap.registerPlugin(ScrollTrigger);

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
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple entrance animations - no parallax (causes hydration issues)
    try {
      // Headline fade-in
      if (headlineRef.current) {
        gsap.from(headlineRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.3,
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
          delay: 0.8,
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
          delay: 1.2,
        });
      }

      // Trust signals stagger
      const trustSignals = document.querySelectorAll('.trust-signal');
      if (trustSignals.length > 0) {
        gsap.from('.trust-signal', {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          delay: 1.5,
        });
      }
    } catch (error) {
      console.error('Hero animation error:', error);
    }

    return () => {
      // Cleanup
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video - Professional, showing actual work */}
      <div ref={backgroundRef} className="absolute inset-0 z-0">
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

        {/* Static image for mobile (performance) */}
        <div
          className="md:hidden absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${posterImage})` }}
        />

        {/* Gradient overlay for readability and depth */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-800/90"
        />

        {/* Subtle grid overlay (premium detail) */}
        <div
          ref={gridRef}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 container-custom text-center text-white">
        {/* Main Headline - Powerful, Confident */}
        <h1
          ref={headlineRef}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight"
        >
          Professional Construction<br />
          & Demolition Services
        </h1>

        {/* Value Proposition - Clear, Specific */}
        <p className="hero-subtext text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-12 leading-relaxed normal-case" style={{ textTransform: 'none', fontFamily: 'Barlow, sans-serif' }}>
          Expert project management and specialized demolition services for
          commercial and residential projects across Queensland
        </p>

        {/* CTAs - Multiple options for different customer intents */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            variant="primary"
            size="lg"
            href="#contact"
            className="hero-cta w-full sm:w-auto"
            magnetic={true}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Get Free Quote
          </Button>

          <Button
            variant="secondary"
            size="lg"
            href="#projects"
            className="hero-cta w-full sm:w-auto"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            View Projects
          </Button>

          <a
            href="tel:+61474309168"
            className="hero-cta btn btn-ghost text-white border-white hover:bg-white hover:text-slate-900 w-full sm:w-auto"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            +61 474 309 168
          </a>
        </div>

        {/* Trust Signals - Build Immediate Credibility */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="trust-signal">
            <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
              15+
            </div>
            <div className="text-sm md:text-base text-slate-300 uppercase tracking-wide">
              Years Experience
            </div>
          </div>

          <div className="trust-signal">
            <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
              500+
            </div>
            <div className="text-sm md:text-base text-slate-300 uppercase tracking-wide">
              Projects Completed
            </div>
          </div>

          <div className="trust-signal">
            <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
              100%
            </div>
            <div className="text-sm md:text-base text-slate-300 uppercase tracking-wide">
              Safety Record
            </div>
          </div>

          <div className="trust-signal">
            <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
              24/7
            </div>
            <div className="text-sm md:text-base text-slate-300 uppercase tracking-wide">
              Support Available
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Guides user to explore more */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
