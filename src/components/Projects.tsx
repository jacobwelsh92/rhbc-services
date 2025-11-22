/**
 * Premium Projects Showcase Section
 *
 * Visual proof of quality work for high-value customers.
 * Before/after imagery builds confidence in capabilities.
 *
 * Customer Psychology:
 * - Visual proof over claims
 * - Before/after comparisons (transformation)
 * - Project scale/complexity indicators
 * - Professional photography
 * - Clear project details (location, timeline, budget range)
 *
 * Technical:
 * - GSAP scroll-triggered reveals
 * - Hover image transitions
 * - Card 3D tilt effects
 * - Lazy loading for performance
 * - Responsive grid layout
 */

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from './Card';
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
  beforeImage: string;
  afterImage: string;
  highlights: string[];
  featured: boolean;
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
    beforeImage: '/images/projects/office-before.jpg',
    afterImage: '/images/projects/office-after.jpg',
    highlights: [
      'Zero safety incidents',
      'Completed 1 week ahead of schedule',
      'Recycled 85% of materials',
      'Minimal disruption to surrounding tenants',
    ],
    featured: true,
  },
  {
    id: 2,
    title: 'Precision Concrete Cutting - Retail Development',
    category: 'Concrete Cutting',
    location: 'Gold Coast',
    duration: '2 weeks',
    budgetRange: '$75k-$100k',
    description: 'Wall and floor sawing for new retail entrance installation. Required precision cutting through 400mm reinforced concrete walls while maintaining building stability.',
    beforeImage: '/images/projects/concrete-before.jpg',
    afterImage: '/images/projects/concrete-after.jpg',
    highlights: [
      'Precision cuts within 2mm tolerance',
      'Completed during business hours',
      'Advanced dust suppression systems',
      'No structural compromise',
    ],
    featured: true,
  },
  {
    id: 3,
    title: 'Industrial Demolition - Manufacturing Facility',
    category: 'Specialized Demolition',
    location: 'Cleveland, QLD',
    duration: '6 weeks',
    budgetRange: '$300k-$500k',
    description: 'Full demolition of 5,000m² manufacturing facility including hazardous material removal, concrete crushing, and site remediation.',
    beforeImage: '/images/projects/industrial-before.jpg',
    afterImage: '/images/projects/industrial-after.jpg',
    highlights: [
      'Hazmat certified removal',
      'On-site concrete crushing',
      '100% site cleared and remediated',
      'Environmental compliance achieved',
    ],
    featured: true,
  },
  {
    id: 4,
    title: 'Residential Construction Project Management',
    category: 'Project Management',
    location: 'Redland Bay',
    duration: '12 weeks',
    budgetRange: '$200k-$300k',
    description: 'Complete project management for high-end residential construction. Coordinated all trades, materials procurement, and timeline management.',
    beforeImage: '/images/projects/residential-before.jpg',
    afterImage: '/images/projects/residential-after.jpg',
    highlights: [
      'Delivered on time and under budget',
      'Quality exceeded client expectations',
      'Seamless trade coordination',
      'Zero defects at handover',
    ],
    featured: false,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Section title animation
    gsap.from('.projects-title', {
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

    // Project cards stagger reveal
    if (projectsRef.current) {
      const cards = projectsRef.current.querySelectorAll('.project-card');

      gsap.from(cards, {
        opacity: 0,
        y: 80,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section bg-white"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="projects-title mb-4">
            Recent Projects
          </h2>
          <p className="projects-title text-xl text-slate-600">
            See the quality and professionalism we deliver on every project.
            From small-scale concrete cutting to large industrial demolitions.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div ref={projectsRef} className="space-y-16 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <Card
              key={project.id}
              className={`project-card overflow-hidden ${
                index % 2 === 0 ? '' : ''
              }`}
              hover3d={true}
              glowEffect={true}
            >
              <div className={`grid md:grid-cols-2 gap-8 ${
                index % 2 === 0 ? '' : 'md:grid-flow-dense'
              }`}>
                {/* Project Images - Before/After */}
                <div className={`space-y-4 ${index % 2 === 0 ? '' : 'md:col-start-2'}`}>
                  {/* Before Image */}
                  <div className="relative overflow-hidden rounded-lg group">
                    <div className="absolute top-4 left-4 bg-slate-900/90 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                      Before
                    </div>
                    <img
                      src={project.beforeImage}
                      alt={`${project.title} - Before`}
                      className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  </div>

                  {/* After Image */}
                  <div className="relative overflow-hidden rounded-lg group">
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                      After
                    </div>
                    <img
                      src={project.afterImage}
                      alt={`${project.title} - After`}
                      className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  </div>
                </div>

                {/* Project Details */}
                <div className={`flex flex-col justify-center ${index % 2 === 0 ? '' : 'md:col-start-1 md:row-start-1'}`}>
                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-2 text-orange-500 font-semibold mb-4 w-fit">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">
                    {project.title}
                  </h3>

                  {/* Project Meta */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-slate-200">
                    <div>
                      <p className="text-sm text-slate-500 mb-1">Location</p>
                      <p className="font-semibold text-slate-900">{project.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">Duration</p>
                      <p className="font-semibold text-slate-900">{project.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">Budget Range</p>
                      <p className="font-semibold text-slate-900">{project.budgetRange}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">Status</p>
                      <p className="font-semibold text-green-600">Completed</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-bold text-slate-900 mb-3">Project Highlights</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg
                            className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-slate-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <p className="text-xl text-slate-600 mb-6">
            Want to see more of our completed projects?
          </p>
          <Button
            variant="primary"
            size="lg"
            href="/projects"
            magnetic={true}
          >
            View Full Portfolio
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
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </Button>
        </div>

        {/* Stats Section - Build Credibility */}
        <div className="mt-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
                500+
              </div>
              <div className="text-slate-300 text-sm md:text-base">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
                100%
              </div>
              <div className="text-slate-300 text-sm md:text-base">
                Safety Record
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
                $50M+
              </div>
              <div className="text-slate-300 text-sm md:text-base">
                Projects Delivered
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
                98%
              </div>
              <div className="text-slate-300 text-sm md:text-base">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
