/**
 * Navigation Component - Construction Industry Gold Standard
 *
 * World-class navigation designed for high-value construction clients.
 * Every detail builds trust and demonstrates professionalism.
 *
 * Features:
 * - Mega menu with service categories
 * - Prominent trust signals (Licensed, Insured, 24/7)
 * - Always-visible contact information
 * - Service area indicator
 * - Emergency contact badge
 * - Professional credential display
 *
 * Design Philosophy:
 * - Industrial, bold, professional
 * - High contrast (accessibility + safety culture)
 * - Large touch targets (on-site mobile use)
 * - Instant trust-building
 */

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Button from './Button';

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setServicesOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Services organized by category
  const services = {
    construction: [
      { name: 'Project Management', href: '#services', description: 'End-to-end project oversight' },
      { name: 'Material Procurement', href: '#services', description: 'Professional sourcing' },
      { name: 'Skilled Labor', href: '#services', description: 'Certified professionals' },
    ],
    demolition: [
      { name: 'Concrete Cutting', href: '#services', description: 'Precision cutting services' },
      { name: 'Office Strip Out', href: '#services', description: 'Complete office demolition' },
      { name: 'Waste Removal', href: '#services', description: 'Professional disposal' },
    ],
  };

  return (
    <>
      {/* Top Bar - Trust Signals */}
      <div className="bg-slate-900 text-white py-2 text-sm border-b-2 border-orange-500">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              {/* Licensed Badge */}
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Licensed & Insured</span>
              </div>

              {/* Service Area */}
              <div className="hidden md:flex items-center gap-2 text-slate-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Serving Brisbane, Gold Coast & Queensland</span>
              </div>
            </div>

            {/* 24/7 Emergency */}
            <div className="hidden lg:flex items-center gap-2 bg-orange-600 px-3 py-1 rounded text-white font-bold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>24/7 Emergency Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        ref={navRef}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-xl'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-24">
            {/* Logo - Professional & Bold */}
            <a
              href="/"
              className="flex items-center gap-4 group"
              aria-label="RHBC Services Home"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center transform transition-all group-hover:scale-105 group-hover:shadow-xl border-2 border-orange-800">
                <span className="text-white font-black text-2xl">RH</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-black text-2xl text-slate-900 uppercase tracking-wide leading-none">
                  RHBC Services
                </div>
                <div className="text-sm text-orange-600 font-bold uppercase tracking-wider mt-1">
                  Expert Construction & Demolition
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-8">
              {/* Services Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="flex items-center gap-2 text-slate-900 hover:text-orange-600 font-bold text-lg uppercase tracking-wide transition-colors group"
                  aria-expanded={servicesOpen}
                >
                  <span>Services</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                {/* Mega Menu Dropdown */}
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white rounded-xl shadow-2xl border-t-4 border-orange-600 p-8">
                    <div className="grid grid-cols-2 gap-8">
                      {/* Construction Services */}
                      <div>
                        <h3 className="text-orange-600 font-black text-lg uppercase tracking-wide mb-4 pb-2 border-b-2 border-orange-200">
                          Construction
                        </h3>
                        <div className="space-y-3">
                          {services.construction.map((service) => (
                            <a
                              key={service.name}
                              href={service.href}
                              className="block p-3 rounded-lg hover:bg-orange-50 transition-colors group"
                            >
                              <div className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                                {service.name}
                              </div>
                              <div className="text-sm text-slate-600 mt-1">
                                {service.description}
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Demolition Services */}
                      <div>
                        <h3 className="text-orange-600 font-black text-lg uppercase tracking-wide mb-4 pb-2 border-b-2 border-orange-200">
                          Demolition
                        </h3>
                        <div className="space-y-3">
                          {services.demolition.map((service) => (
                            <a
                              key={service.name}
                              href={service.href}
                              className="block p-3 rounded-lg hover:bg-orange-50 transition-colors group"
                            >
                              <div className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                                {service.name}
                              </div>
                              <div className="text-sm text-slate-600 mt-1">
                                {service.description}
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA in Mega Menu */}
                    <div className="mt-6 pt-6 border-t-2 border-slate-200 text-center">
                      <p className="text-slate-600 mb-3">
                        Need help choosing the right service?
                      </p>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors"
                      >
                        <span>Talk to an Expert</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Other Nav Links */}
              <a
                href="#projects"
                className="text-slate-900 hover:text-orange-600 font-bold text-lg uppercase tracking-wide transition-colors"
              >
                Projects
              </a>
              <a
                href="#about"
                className="text-slate-900 hover:text-orange-600 font-bold text-lg uppercase tracking-wide transition-colors"
              >
                About
              </a>
              <a
                href="#testimonials"
                className="text-slate-900 hover:text-orange-600 font-bold text-lg uppercase tracking-wide transition-colors"
              >
                Testimonials
              </a>
            </div>

            {/* Contact Section - Trust Building */}
            <div className="hidden xl:flex items-center gap-4">
              {/* Phone - Prominent */}
              <a
                href="tel:+61474309168"
                className="flex flex-col items-end group"
              >
                <span className="text-xs text-slate-600 uppercase tracking-wide font-semibold">
                  Call Us Now
                </span>
                <span className="text-2xl font-black text-slate-900 group-hover:text-orange-600 transition-colors">
                  0474 309 168
                </span>
              </a>

              {/* Get Quote - Primary Action */}
              <Button
                variant="primary"
                href="#contact-form"
                size="lg"
                className="shadow-lg hover:shadow-xl font-black text-lg px-8 py-4"
              >
                GET FREE QUOTE
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden p-3 text-slate-900 hover:text-orange-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Slide Down */}
        <div
          className={`xl:hidden overflow-hidden transition-all duration-300 bg-slate-50 border-t-2 border-orange-500 ${
            isMobileMenuOpen ? 'max-h-[600px]' : 'max-h-0'
          }`}
        >
          <div className="container-custom py-6">
            {/* Mobile Services */}
            <div className="mb-6">
              <h3 className="text-orange-600 font-black text-sm uppercase tracking-wide mb-3 px-4">
                Construction Services
              </h3>
              <div className="space-y-1">
                {services.construction.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block px-4 py-3 text-slate-900 font-bold hover:bg-orange-100 hover:text-orange-600 transition-colors rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-orange-600 font-black text-sm uppercase tracking-wide mb-3 px-4">
                Demolition Services
              </h3>
              <div className="space-y-1">
                {services.demolition.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block px-4 py-3 text-slate-900 font-bold hover:bg-orange-100 hover:text-orange-600 transition-colors rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Other Mobile Links */}
            <div className="space-y-1 mb-6 border-t-2 border-slate-200 pt-4">
              <a
                href="#projects"
                className="block px-4 py-3 text-slate-900 font-bold hover:bg-orange-100 hover:text-orange-600 transition-colors rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#about"
                className="block px-4 py-3 text-slate-900 font-bold hover:bg-orange-100 hover:text-orange-600 transition-colors rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#testimonials"
                className="block px-4 py-3 text-slate-900 font-bold hover:bg-orange-100 hover:text-orange-600 transition-colors rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
            </div>

            {/* Mobile CTAs */}
            <div className="space-y-3 px-4">
              <a
                href="tel:+61474309168"
                className="flex items-center justify-center gap-3 bg-slate-900 text-white font-black text-lg px-6 py-4 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>0474 309 168</span>
              </a>
              <a
                href="#contact-form"
                className="block text-center bg-orange-600 text-white font-black text-lg px-6 py-4 rounded-lg hover:bg-orange-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                GET FREE QUOTE
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
