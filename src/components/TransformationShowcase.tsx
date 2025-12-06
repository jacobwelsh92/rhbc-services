/**
 * Transformation Showcase Section
 *
 * Highlights RHBC's project transformations using before/after sliders.
 * Demonstrates tangible results and builds trust through visual proof.
 *
 * Customer Psychology:
 * - Visual proof is more persuasive than text
 * - Before/after creates emotional impact
 * - Shows capability and attention to detail
 * - Interactive elements increase engagement
 */

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BeforeAfterSlider from './BeforeAfterSlider';
import Button from './Button';

gsap.registerPlugin(ScrollTrigger);

const transformations = [
  {
    id: 1,
    title: 'Commercial Office Strip-Out',
    description: 'Complete office transformation in Brisbane CBD. Full strip-out and waste removal completed in 48 hours with zero disruption to neighbouring tenants.',
    before: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=675&fit=crop',
    after: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=675&fit=crop',
    location: 'Brisbane CBD',
    duration: '48 hours',
    value: '$45,000',
  },
  {
    id: 2,
    title: 'Industrial Concrete Cutting',
    description: 'Precision concrete cutting for new loading dock installation. Advanced wall sawing with zero structural damage to existing building.',
    before: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&h=675&fit=crop',
    after: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&h=675&fit=crop',
    location: 'Gold Coast',
    duration: '5 days',
    value: '$85,000',
  },
];

export default function TransformationShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.from('.transformation-title', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      // Transformation cards stagger
      gsap.from('.transformation-card', {
        opacity: 0,
        y: 80,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.transformations-grid',
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="transformation-title mb-4">
            See the Transformation
          </h2>
          <p className="transformation-title text-xl text-slate-600">
            Drag the slider to see the dramatic before-and-after results of our precision demolition and construction work
          </p>
        </div>

        {/* Transformations Grid */}
        <div className="transformations-grid space-y-24">
          {transformations.map((project, index) => (
            <div
              key={project.id}
              className={`transformation-card grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Before/After Slider */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <BeforeAfterSlider
                  beforeImage={project.before}
                  afterImage={project.after}
                  beforeLabel="Before"
                  afterLabel="After"
                />
              </div>

              {/* Project Details */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="space-y-6">
                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <div className="text-sm text-slate-500 uppercase tracking-wide mb-1">
                        Location
                      </div>
                      <div className="text-lg font-semibold text-slate-900">
                        {project.location}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-slate-500 uppercase tracking-wide mb-1">
                        Duration
                      </div>
                      <div className="text-lg font-semibold text-slate-900">
                        {project.duration}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-slate-500 uppercase tracking-wide mb-1">
                        Value
                      </div>
                      <div className="text-lg font-semibold text-gray-900">
                        {project.value}
                      </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="pt-4 space-y-3">
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-slate-700">
                        Completed on schedule with zero delays
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-slate-700">
                        100% safety compliance with no incidents
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-slate-700">
                        Professional waste management and disposal
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              size="lg"
              href="/projects"
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
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              View All Projects
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href="#contact"
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
              Get Your Free Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
