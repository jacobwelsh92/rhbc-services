/**
 * Certifications & Credentials Section
 *
 * Showcases licenses, insurance, safety certifications, and industry credentials.
 * Critical for building trust in construction industry.
 *
 * Features:
 * - Visual credential badges
 * - Verification numbers
 * - Expiry dates where applicable
 * - Professional presentation
 */

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Fully Licensed',
    description: 'QBCC Licensed Builder',
    details: 'License #[Your License Number]',
    status: 'Current',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Fully Insured',
    description: 'Public Liability Insurance',
    details: '$20 Million Coverage',
    status: 'Current',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
      </svg>
    ),
    title: 'Safety Certified',
    description: 'WorkSafe Queensland Certified',
    details: '100% Safety Record',
    status: 'Current',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Environmental Compliance',
    description: 'EPA Approved Waste Handling',
    details: 'Certified Waste Transporter',
    status: 'Current',
  },
];

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animation for certification cards
      const cards = document.querySelectorAll('.cert-card');
      if (cards.length > 0) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 50,
          stagger: 0.15,
          duration: 0.6,
          ease: 'power2.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="section-sm bg-slate-50"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">Licensed, Insured & Certified</h2>
          <p className="text-xl text-slate-600">
            Your project is in safe, qualified hands. We maintain all required licenses, comprehensive insurance, and industry certifications to deliver professional results with complete peace of mind.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="cert-card bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gray-900 rounded-lg flex items-center justify-center text-white mb-4">
                {cert.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2 text-slate-900 normal-case">
                {cert.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 mb-2 text-sm">
                {cert.description}
              </p>

              {/* Details */}
              <p className="text-sm text-slate-500 mb-3">
                {cert.details}
              </p>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {cert.status}
              </div>
            </div>
          ))}
        </div>

        {/* Verification Notice */}
        <div className="text-center">
          <p className="text-sm text-slate-500">
            All licenses and certifications are current and can be verified upon request.
            <br />
            We're committed to maintaining the highest industry standards for your protection.
          </p>
        </div>
      </div>
    </section>
  );
}
