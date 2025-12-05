/**
 * Services Section - Sophisticated Design
 *
 * Clean, minimal service showcase with black/white/navy color scheme.
 */

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Project Management',
    description: 'Expert oversight ensuring your construction project runs on time, on budget, and to the highest standards.',
    features: ['Timeline Management', 'Budget Control', 'Quality Assurance', 'Full Coordination'],
  },
  {
    title: 'Concrete Cutting',
    description: 'Precision concrete cutting using advanced equipment for walls, floors, and structural elements.',
    features: ['Wall Sawing', 'Floor Sawing', 'Core Drilling', 'Controlled Demo'],
  },
  {
    title: 'Material Procurement',
    description: 'Access to quality building materials through our established supplier network.',
    features: ['Supplier Network', 'Quality Materials', 'On-Time Delivery', 'Cost Effective'],
  },
  {
    title: 'Skilled Labor',
    description: 'Experienced, certified professionals who deliver exceptional workmanship with safety as priority.',
    features: ['Certified Teams', 'Safety Trained', 'Quality Work', 'Reliable'],
  },
  {
    title: 'Office Strip Out',
    description: 'Complete and efficient removal of office fixtures, partitions, and systems with minimal disruption.',
    features: ['Full Strip Out', 'Minimal Disruption', 'Proper Disposal', 'Fast Turnaround'],
  },
  {
    title: 'Waste Removal',
    description: 'Comprehensive waste removal and disposal services including hazardous materials handling.',
    features: ['Complete Removal', 'Hazmat Certified', 'Eco-Friendly', 'Same-Day Service'],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      try {
        // Section header animation
        gsap.from('.services-header', {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        });

        // Cards stagger animation
        if (cardsRef.current) {
          const cards = cardsRef.current.querySelectorAll('.service-card');
          if (cards.length > 0) {
            gsap.from(cards, {
              opacity: 0,
              y: 60,
              duration: 0.8,
              stagger: 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: cardsRef.current,
                start: 'top 80%',
              },
            });
          }
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
      className="py-24 md:py-32 lg:py-40 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="services-header max-w-2xl mb-16 lg:mb-20">
          <p className="text-sm text-gray-500 tracking-widest uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6" style={{ letterSpacing: '-0.02em' }}>
            Comprehensive Services
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Professional expertise across every aspect of your project. From planning to execution, we deliver results.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group"
            >
              {/* Card */}
              <div className="bg-white rounded-lg p-8 h-full border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                {/* Number */}
                <div className="text-sm text-gray-400 font-medium mb-6">
                  0{index + 1}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <a
                    href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors group"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 lg:mt-24 text-center">
          <div className="bg-gray-900 rounded-lg p-12 lg:p-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Get in touch for a free consultation and quote. We'll help you plan and execute your project with precision.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-medium rounded hover:bg-gray-100 transition-all duration-300"
            >
              Get a Free Quote
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
