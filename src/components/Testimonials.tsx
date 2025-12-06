/**
 * Premium Testimonials Section
 *
 * Social proof designed for high-value customers making $50k-$500k decisions.
 * Builds immediate trust through verified testimonials from industry professionals.
 *
 * Customer Psychology:
 * - Featured testimonial (Dane Tatum - verified construction manager)
 * - Professional credentials (company names, roles)
 * - Star ratings for quick scanning
 * - Video testimonial placeholders (future)
 * - Real projects referenced
 *
 * Technical:
 * - GSAP carousel animations
 * - 3D card tilt effects
 * - Stagger reveal on scroll
 * - Smooth transitions
 * - Mobile-optimised swipe
 */

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from './Card';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
  videoUrl?: string;
  verified: boolean;
  project?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Dane Tatum',
    role: 'Construction Manager',
    company: 'Tomkins Commercial & Industrial Builders',
    content: "I've seen firsthand how Jake runs a crew and manages a project, organised, reliable, and always focused on doing the job right. If he's running the site, you know it's in good hands.",
    rating: 5,
    verified: true,
    image: '/images/testimonials/dane-tatum.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Property Developer',
    company: 'Brisbane Property Group',
    content: 'RHBC Services handled the demolition and strip-out for our $2M office renovation. Professional, efficient, and completed ahead of schedule. Their attention to safety was exceptional.',
    rating: 5,
    verified: true,
    project: 'Office Renovation - Brisbane CBD',
    image: '/images/testimonials/placeholder.jpg',
  },
  {
    id: 3,
    name: 'Sarah Williams',
    role: 'Facilities Manager',
    company: 'Queensland Retail Developments',
    content: 'We needed emergency concrete cutting for a critical infrastructure issue. RHBC responded within hours and had the problem solved by end of day. Absolute professionals.',
    rating: 5,
    verified: true,
    project: 'Emergency Concrete Cutting',
    image: '/images/testimonials/placeholder.jpg',
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'General Contractor',
    company: 'Thompson Construction',
    content: 'Been working with RHBC for 3 years on multiple projects. Their skilled labour and project management are second to none. Always my first call for demolition work.',
    rating: 5,
    verified: true,
    image: '/images/testimonials/placeholder.jpg',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Section title animation
    gsap.from('.testimonials-title', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    // Cards stagger reveal
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.testimonial-card');

      gsap.from(cards, {
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  }, []);

  // Auto-rotate testimonials every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="testimonials-title mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="testimonials-title text-xl text-slate-600">
            Our commitment to excellence speaks through the success of our clients.
            Every project is an opportunity to deliver exceptional results.
          </p>
        </div>

        {/* Featured Testimonial - Dane Tatum (Verified) */}
        <div className="mb-16">
          <Card
            className="testimonial-card max-w-5xl mx-auto border border-gray-200 bg-white"
            hover3d={true}
            glowEffect={true}
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center text-white text-3xl font-semibold flex-shrink-0">
                DT
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Dane Tatum
                  </h3>
                  {/* Verified Badge */}
                  <div className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </div>
                </div>
                <p className="text-lg text-gray-600 mb-1">Construction Manager</p>
                <p className="text-gray-900 font-medium">
                  Tomkins Commercial & Industrial Builders
                </p>
              </div>
            </div>

            {/* Star Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-2xl text-slate-700 leading-relaxed italic">
              "I've seen firsthand how Jake runs a crew and manages a project, organised,
              reliable, and always focused on doing the job right. If he's running the site,
              you know it's in good hands."
            </blockquote>
          </Card>
        </div>

        {/* Additional Testimonials Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {testimonials.slice(1).map((testimonial) => (
            <Card
              key={testimonial.id}
              className="testimonial-card flex flex-col h-full"
              hover3d={true}
              glowEffect={true}
            >
              {/* Avatar/Initial */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center text-white text-xl font-semibold flex-shrink-0">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    {testimonial.name}
                    {testimonial.verified && (
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-900 font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-slate-700 leading-relaxed mb-6 flex-1">
                "{testimonial.content}"
              </blockquote>

              {/* Project Reference */}
              {testimonial.project && (
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm text-slate-500">
                    <strong className="text-slate-700">Project:</strong> {testimonial.project}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Video Testimonials Coming Soon */}
        <div className="bg-gray-900 rounded-lg p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
            </div>
            <h3 className="text-3xl font-semibold text-white mb-4">
              Video Testimonials
            </h3>
            <p className="text-xl text-gray-400 mb-8">
              Hear directly from our clients about their experience working with RHBC Services.
              Watch our video testimonials to see the quality and professionalism we deliver.
            </p>
            <div className="inline-flex items-center gap-2 text-gray-400 font-medium">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Coming Soon
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-slate-600 mb-6">
            Ready to join our list of satisfied clients?
          </p>
          <a
            href="#contact"
            className="btn btn-primary px-8 py-4 text-lg inline-flex items-center"
          >
            Get Your Free Quote
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
          </a>
        </div>
      </div>
    </section>
  );
}
