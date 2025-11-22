/**
 * Premium Services Section
 *
 * Showcase RHBC's core capabilities with professional presentation.
 * Designed to build confidence in high-value customers.
 *
 * Customer Psychology:
 * - Clear service descriptions (no jargon)
 * - Icons for quick scanning
 * - Professional imagery
 * - "Learn More" CTAs for deeper engagement
 * - Emphasis on expertise and quality
 *
 * Technical:
 * - GSAP stagger animations on scroll
 * - 3D card tilt effects
 * - Hover interactions
 * - Mobile-optimized grid
 */

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from './Card';
import Button from './Button';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
      </svg>
    ),
    title: 'Project Management',
    description: 'Expert oversight ensuring your construction project runs on time, on budget, and to the highest standards. We coordinate every detail from concept to completion.',
    features: ['Timeline Management', 'Budget Control', 'Quality Assurance', 'Coordination'],
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zm17.586 0L18.414 5.586v12.828l2.293-2.293A1 1 0 0021 15V4a1 1 0 00-1.707-.707z" clipRule="evenodd"/>
      </svg>
    ),
    title: 'Concrete Cutting',
    description: 'Precision concrete cutting using advanced equipment for walls, floors, and structural elements. Safe, accurate, and efficient cutting for any application.',
    features: ['Wall Sawing', 'Floor Sawing', 'Core Drilling', 'Controlled Demo'],
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 3a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
      </svg>
    ),
    title: 'Material Procurement',
    description: 'Access to quality building materials through our established supplier network. We ensure materials arrive on time and meet project specifications.',
    features: ['Supplier Network', 'Quality Materials', 'On-Time Delivery', 'Cost Effective'],
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
      </svg>
    ),
    title: 'Skilled Labor',
    description: 'Experienced, certified professionals who deliver exceptional workmanship across all construction and demolition projects with safety as priority one.',
    features: ['Certified Teams', 'Safety Trained', 'Quality Work', 'Reliable'],
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a2 2 0 01-2-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"/>
      </svg>
    ),
    title: 'Office Strip Out',
    description: 'Complete and efficient removal of office fixtures, partitions, and systems. Minimal disruption to surrounding areas with proper disposal and recycling.',
    features: ['Full Strip Out', 'Minimal Disruption', 'Proper Disposal', 'Fast Turnaround'],
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"/>
      </svg>
    ),
    title: 'Waste Removal',
    description: 'Comprehensive waste removal and disposal services including hazardous materials. We ensure all debris is handled safely and disposed of responsibly.',
    features: ['Complete Removal', 'Hazmat Certified', 'Eco-Friendly', 'Same-Day Service'],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // PHASE 6: Advanced GSAP Timeline Animations
    const ctx = gsap.context(() => {
      try {
        // Create a master timeline for orchestrated animations
        const masterTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        });

        // Section title with split reveal and fade - only if exists
        const serviceTitles = document.querySelectorAll('.services-title');
        if (serviceTitles.length > 0) {
          masterTimeline.from('.services-title', {
            opacity: 0,
            y: 50,
            scale: 0.95,
            duration: 0.8,
            ease: 'power3.out',
          });
        }

        // Premium stagger reveal with 3D transforms
        if (cardsRef.current) {
          const cards = cardsRef.current.querySelectorAll('.service-card');

          // Create individual timelines for each card with complex animations
          if (cards.length > 0) {
            cards.forEach((card, index) => {
              const cardTimeline = gsap.timeline({
                scrollTrigger: {
                  trigger: card,
                  start: 'top 85%',
                  end: 'top 20%',
                  toggleActions: 'play none none reverse',
                },
              });

              // Entry animation with 3D rotation
              cardTimeline.from(card, {
                opacity: 0,
                y: 100,
                rotationX: -15,
                scale: 0.9,
                duration: 0.8,
                ease: 'power3.out',
              });

              // Icon scale bounce - only if icon exists
              const iconElement = card.querySelector('.service-icon');
              if (iconElement) {
                cardTimeline.from(
                  iconElement,
                  {
                    scale: 0,
                    rotation: -180,
                    duration: 0.6,
                    ease: 'back.out(1.7)',
                  },
                  '-=0.4'
                );
              }

              // Features list stagger
              const features = card.querySelectorAll('li');
              if (features.length > 0) {
                cardTimeline.from(
                  features,
                  {
                    opacity: 0,
                    x: -20,
                    stagger: 0.1,
                    duration: 0.4,
                    ease: 'power2.out',
                  },
                  '-=0.3'
                );
              }
            });
          }

          // Parallax effect on cards while scrolling - only if cards exist
          if (cards.length > 0) {
            gsap.to(cards, {
              y: -30,
              stagger: 0.1,
              ease: 'none',
              scrollTrigger: {
                trigger: cardsRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
              },
            });
          }
        }

        // CTA section reveal with dramatic entrance - only if element exists
        const ctaElement = document.querySelector('.demolition-cta');
        if (ctaElement) {
          const ctaTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: '.demolition-cta',
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          });

          ctaTimeline
            .from('.demolition-cta', {
              opacity: 0,
              scale: 0.95,
              duration: 0.8,
              ease: 'power2.out',
            })
            .from(
              '.demolition-cta h3',
              {
                opacity: 0,
                y: 30,
                duration: 0.6,
                ease: 'power2.out',
              },
              '-=0.4'
            )
            .from(
              '.demolition-cta p',
              {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: 'power2.out',
              },
              '-=0.3'
            )
            .from(
              '.demolition-cta button, .demolition-cta a',
              {
                opacity: 0,
                scale: 0.9,
                duration: 0.5,
                ease: 'back.out(1.7)',
              },
              '-=0.2'
            );
        }
      } catch (error) {
        console.error('Services animation error:', error);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section bg-gradient-to-b from-white to-slate-50"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="services-title mb-4">
            Comprehensive Construction & Demolition Services
          </h2>
          <p className="services-title text-xl text-slate-600">
            Professional expertise across every aspect of your project. From planning to execution, we deliver results that exceed expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <Card
              key={index}
              className="service-card hover:border-orange-500 border-2 border-transparent transition-colors duration-300"
              hover3d={true}
              glowEffect={true}
            >
              {/* Icon */}
              <div className="service-icon w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white mb-6 transform transition-transform group-hover:scale-110">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-slate-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-slate-700"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold group"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform"
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
            </Card>
          ))}
        </div>

        {/* Specialized Demolition CTA */}
        <div className="demolition-cta relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-center overflow-hidden">
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
          />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Specialized Demolition Services?
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Expert concrete cutting, jack hammering, floor grinding, and hazardous waste removal. View our complete demolition capabilities.
            </p>
            <Button
              variant="primary"
              size="lg"
              href="/demolition-services"
              magnetic={true}
            >
              View Demolition Services
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
