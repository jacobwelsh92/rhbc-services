/**
 * Projects Showcase Section
 *
 * Clean, text-focused project showcase without relying on images.
 * Sophisticated design with project details and highlights.
 */

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from './Button';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  duration: string;
  budgetRange: string;
  description: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Commercial Office Strip-Out & Renovation',
    category: 'Office Strip-Out',
    location: 'Brisbane CBD',
    duration: '4 weeks',
    budgetRange: '$150k-$200k',
    description: 'Complete strip-out and demolition for a 2,000m² office renovation. Removed all internal partitions, electrical, HVAC, and flooring while maintaining structural integrity.',
    highlights: [
      'Zero safety incidents',
      'Completed 1 week ahead of schedule',
      'Recycled 85% of materials',
      'Minimal disruption to surrounding tenants',
    ],
  },
  {
    id: 2,
    title: 'Precision Concrete Cutting - Retail Development',
    category: 'Concrete Cutting',
    location: 'Gold Coast',
    duration: '2 weeks',
    budgetRange: '$75k-$100k',
    description: 'Wall and floor sawing for new retail entrance installation. Required precision cutting through 400mm reinforced concrete walls while maintaining building stability.',
    highlights: [
      'Precision cuts within 2mm tolerance',
      'Completed during business hours',
      'Advanced dust suppression systems',
      'No structural compromise',
    ],
  },
  {
    id: 3,
    title: 'Industrial Demolition - Manufacturing Facility',
    category: 'Specialised Demolition',
    location: 'Cleveland, QLD',
    duration: '6 weeks',
    budgetRange: '$300k-$500k',
    description: 'Full demolition of 5,000m² manufacturing facility including hazardous material removal, concrete crushing, and site remediation.',
    highlights: [
      'Hazmat certified removal',
      'On-site concrete crushing',
      '100% site cleared and remediated',
      'Environmental compliance achieved',
    ],
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header animation
      gsap.from('.projects-header', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      // Project cards stagger
      if (projectsRef.current) {
        const cards = projectsRef.current.querySelectorAll('.project-card');
        if (cards.length > 0) {
          gsap.from(cards, {
            opacity: 0,
            y: 60,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: projectsRef.current,
              start: 'top 75%',
            },
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-32 lg:py-40 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="projects-header max-w-2xl mb-16 lg:mb-20">
          <p className="text-sm text-gray-500 tracking-widest uppercase mb-4">
            Our Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6" style={{ letterSpacing: '-0.02em' }}>
            Recent Projects
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            See the quality and professionalism we deliver on every project. From small-scale concrete cutting to large industrial demolitions.
          </p>
        </div>

        {/* Projects List */}
        <div ref={projectsRef} className="space-y-8 lg:space-y-12 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card border border-gray-200 rounded-lg p-8 lg:p-10 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Project Info */}
                <div className="lg:col-span-2">
                  {/* Category */}
                  <p className="text-sm text-gray-500 tracking-wide uppercase mb-3">
                    {project.category}
                  </p>

                  {/* Title */}
                  <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Meta */}
                <div className="lg:border-l lg:border-gray-200 lg:pl-8">
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Location</p>
                      <p className="font-medium text-gray-900">{project.location}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Duration</p>
                      <p className="font-medium text-gray-900">{project.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Budget</p>
                      <p className="font-medium text-gray-900">{project.budgetRange}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Status</p>
                      <p className="font-medium text-green-600">Completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            href="#contact"
            magnetic={true}
          >
            Discuss Your Project
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Button>
        </div>

        {/* Stats Section */}
        <div className="mt-20 lg:mt-24 bg-gray-900 rounded-lg p-10 lg:p-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-2">
                500+
              </div>
              <div className="text-gray-400 text-sm">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-2">
                100%
              </div>
              <div className="text-gray-400 text-sm">
                Safety Record
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-2">
                $50M+
              </div>
              <div className="text-gray-400 text-sm">
                Projects Delivered
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-2">
                98%
              </div>
              <div className="text-gray-400 text-sm">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
