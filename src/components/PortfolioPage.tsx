/**
 * Complete Portfolio Page Component
 *
 * Brings together filtering, project display, and lightbox gallery.
 * Professional showcase of all RHBC projects.
 *
 * Features:
 * - Real-time filtering and search
 * - Project cards with before/after images
 * - Lightbox gallery for detailed viewing
 * - GSAP animations for smooth transitions
 * - Mobile-optimised layout
 */

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PortfolioFilter from './PortfolioFilter';
import ImageLightbox from './ImageLightbox';
import Card from './Card';

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
  galleryImages: Array<{
    src: string;
    alt: string;
    caption?: string;
    type?: 'before' | 'after' | 'normal';
  }>;
  highlights: string[];
  completed: string;
}

// Comprehensive project data (expandable)
const allProjects: Project[] = [
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
    galleryImages: [
      { src: '/images/projects/office-before.jpg', alt: 'Office before strip-out', caption: 'Before: Dated office fitout', type: 'before' },
      { src: '/images/projects/office-after.jpg', alt: 'Office after strip-out', caption: 'After: Clean slate ready for renovation', type: 'after' },
      { src: '/images/projects/office-progress-1.jpg', alt: 'Strip-out in progress', caption: 'Systematic removal of partitions' },
      { src: '/images/projects/office-progress-2.jpg', alt: 'Electrical removal', caption: 'Safe electrical system removal' },
    ],
    highlights: [
      'Zero safety incidents',
      'Completed 1 week ahead of schedule',
      'Recycled 85% of materials',
      'Minimal disruption to surrounding tenants',
    ],
    completed: '2024',
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
    galleryImages: [
      { src: '/images/projects/concrete-before.jpg', alt: 'Before concrete cutting', caption: 'Before: Solid concrete wall', type: 'before' },
      { src: '/images/projects/concrete-after.jpg', alt: 'After concrete cutting', caption: 'After: Precision cut opening', type: 'after' },
      { src: '/images/projects/concrete-cutting-equipment.jpg', alt: 'Wall sawing equipment', caption: 'Advanced wall sawing equipment' },
      { src: '/images/projects/concrete-final.jpg', alt: 'Final result', caption: 'Perfect alignment and finish' },
    ],
    highlights: [
      'Precision cuts within 2mm tolerance',
      'Completed during business hours',
      'Advanced dust suppression systems',
      'No structural compromise',
    ],
    completed: '2024',
  },
  {
    id: 3,
    title: 'Industrial Demolition - Manufacturing Facility',
    category: 'Demolition',
    location: 'Cleveland, QLD',
    duration: '6 weeks',
    budgetRange: '$300k-$500k',
    description: 'Full demolition of 5,000m² manufacturing facility including hazardous material removal, concrete crushing, and site remediation.',
    beforeImage: '/images/projects/industrial-before.jpg',
    afterImage: '/images/projects/industrial-after.jpg',
    galleryImages: [
      { src: '/images/projects/industrial-before.jpg', alt: 'Manufacturing facility before', caption: 'Before: 5,000m² facility', type: 'before' },
      { src: '/images/projects/industrial-after.jpg', alt: 'Site after demolition', caption: 'After: Complete site remediation', type: 'after' },
      { src: '/images/projects/industrial-demo-1.jpg', alt: 'Demolition in progress', caption: 'Systematic demolition process' },
      { src: '/images/projects/industrial-crushing.jpg', alt: 'On-site crushing', caption: 'On-site concrete crushing' },
    ],
    highlights: [
      'Hazmat certified removal',
      'On-site concrete crushing',
      '100% site cleared and remediated',
      'Environmental compliance achieved',
    ],
    completed: '2023',
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
    galleryImages: [
      { src: '/images/projects/residential-before.jpg', alt: 'Site before construction', caption: 'Before: Vacant land', type: 'before' },
      { src: '/images/projects/residential-after.jpg', alt: 'Completed residence', caption: 'After: Completed high-end home', type: 'after' },
      { src: '/images/projects/residential-framing.jpg', alt: 'Framing stage', caption: 'Precision framing work' },
      { src: '/images/projects/residential-finishes.jpg', alt: 'Interior finishes', caption: 'Premium finishes installation' },
    ],
    highlights: [
      'Delivered on time and under budget',
      'Quality exceeded client expectations',
      'Seamless trade coordination',
      'Zero defects at handover',
    ],
    completed: '2024',
  },
  {
    id: 5,
    title: 'Emergency Concrete Cutting - Infrastructure Repair',
    category: 'Concrete Cutting',
    location: 'Brisbane',
    duration: '1 week',
    budgetRange: '$50k-$75k',
    description: 'Emergency concrete cutting for critical infrastructure repair. Fast response and execution to minimise downtime.',
    beforeImage: '/images/projects/emergency-before.jpg',
    afterImage: '/images/projects/emergency-after.jpg',
    galleryImages: [
      { src: '/images/projects/emergency-before.jpg', alt: 'Infrastructure damage', caption: 'Before: Critical infrastructure issue', type: 'before' },
      { src: '/images/projects/emergency-after.jpg', alt: 'Repair complete', caption: 'After: Infrastructure restored', type: 'after' },
    ],
    highlights: [
      'Responded within 4 hours',
      'Problem solved by end of day',
      'Zero disruption to operations',
      'Emergency protocols followed',
    ],
    completed: '2024',
  },
  {
    id: 6,
    title: 'Retail Strip-Out - Shopping Center',
    category: 'Office Strip-Out',
    location: 'Capalaba',
    duration: '3 weeks',
    budgetRange: '$100k-$150k',
    description: 'Complete strip-out of retail space in busy shopping centre. Worked overnight to avoid disrupting neighbouring businesses.',
    beforeImage: '/images/projects/retail-before.jpg',
    afterImage: '/images/projects/retail-after.jpg',
    galleryImages: [
      { src: '/images/projects/retail-before.jpg', alt: 'Retail space before', caption: 'Before: Existing retail fitout', type: 'before' },
      { src: '/images/projects/retail-after.jpg', alt: 'Space after strip-out', caption: 'After: Ready for new tenant', type: 'after' },
    ],
    highlights: [
      'Overnight work schedule',
      'Zero complaints from neighbours',
      'All materials properly disposed',
      'Completed 2 days early',
    ],
    completed: '2023',
  },
  {
    id: 7,
    title: 'Industrial Waste Removal - Factory Cleanup',
    category: 'Waste Removal',
    location: 'Cleveland',
    duration: '2 weeks',
    budgetRange: '$50k-$75k',
    description: 'Comprehensive waste removal including hazardous materials from decommissioned factory. Environmental compliance throughout.',
    beforeImage: '/images/projects/waste-before.jpg',
    afterImage: '/images/projects/waste-after.jpg',
    galleryImages: [
      { src: '/images/projects/waste-before.jpg', alt: 'Factory with waste', caption: 'Before: Years of accumulated waste', type: 'before' },
      { src: '/images/projects/waste-after.jpg', alt: 'Clean factory floor', caption: 'After: Clean and compliant', type: 'after' },
    ],
    highlights: [
      'Hazmat certified team',
      'Environmental compliance',
      '90% materials recycled',
      'Site left inspection-ready',
    ],
    completed: '2023',
  },
  {
    id: 8,
    title: 'High-Rise Concrete Cutting - CBD Tower',
    category: 'Concrete Cutting',
    location: 'Brisbane CBD',
    duration: '3 weeks',
    budgetRange: '$100k-$150k',
    description: 'Precision core drilling and sawing on 15th floor of CBD office tower for new HVAC installation.',
    beforeImage: '/images/projects/highrise-before.jpg',
    afterImage: '/images/projects/highrise-after.jpg',
    galleryImages: [
      { src: '/images/projects/highrise-before.jpg', alt: 'Before cutting', caption: 'Before: Solid floor slab', type: 'before' },
      { src: '/images/projects/highrise-after.jpg', alt: 'After cutting', caption: 'After: Precision penetrations', type: 'after' },
    ],
    highlights: [
      'High-rise certified team',
      'Zero vibration issues',
      'Complex logistics managed',
      'Dust-free cutting methods',
    ],
    completed: '2024',
  },
];

export default function PortfolioPage() {
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<any[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const projectsGridRef = useRef<HTMLDivElement>(null);

  // Extract unique values for filters
  const categories = Array.from(new Set(allProjects.map(p => p.category)));
  const budgetRanges = Array.from(new Set(allProjects.map(p => p.budgetRange)));
  const locations = Array.from(new Set(allProjects.map(p => p.location)));

  const handleFilterChange = (filters: any) => {
    let filtered = allProjects;

    // Category filter
    if (filters.category !== 'all') {
      filtered = filtered.filter(p => p.category === filters.category);
    }

    // Budget filter
    if (filters.budgetRange !== 'all') {
      filtered = filtered.filter(p => p.budgetRange === filters.budgetRange);
    }

    // Location filter
    if (filters.location !== 'all') {
      filtered = filtered.filter(p => p.location === filters.location);
    }

    // Search filter
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.highlights.some(h => h.toLowerCase().includes(query))
      );
    }

    setFilteredProjects(filtered);

    // Animate project cards
    if (projectsGridRef.current) {
      const cards = projectsGridRef.current.querySelectorAll('.portfolio-project-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: 'power2.out' }
      );
    }
  };

  const openLightbox = (project: Project, startIndex: number = 0) => {
    setLightboxImages(project.galleryImages);
    setLightboxIndex(startIndex);
    setLightboxOpen(true);
  };

  useEffect(() => {
    // Animate projects on scroll
    if (projectsGridRef.current) {
      const cards = projectsGridRef.current.querySelectorAll('.portfolio-project-card');

      gsap.from(cards, {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: projectsGridRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  }, []);

  return (
    <section className="section bg-gradient-to-b from-white to-slate-50">
      <div className="container-custom">
        {/* Filter System */}
        <PortfolioFilter
          onFilterChange={handleFilterChange}
          categories={categories}
          budgetRanges={budgetRanges}
          locations={locations}
          totalProjects={allProjects.length}
          filteredCount={filteredProjects.length}
        />

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div
            ref={projectsGridRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="portfolio-project-card overflow-hidden"
                hover3d={true}
                glowEffect={true}
              >
                {/* Before/After Images */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <button
                    onClick={() => openLightbox(project, 0)}
                    className="relative overflow-hidden rounded-lg group cursor-pointer"
                  >
                    <div className="absolute top-2 left-2 bg-slate-900/90 text-white px-2 py-1 rounded text-xs font-semibold z-10">
                      Before
                    </div>
                    <img
                      src={project.beforeImage}
                      alt={`${project.title} - Before`}
                      className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </button>

                  <button
                    onClick={() => openLightbox(project, 1)}
                    className="relative overflow-hidden rounded-lg group cursor-pointer"
                  >
                    <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold z-10">
                      After
                    </div>
                    <img
                      src={project.afterImage}
                      alt={`${project.title} - After`}
                      className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </button>
                </div>

                {/* Project Details */}
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 text-gray-500 font-medium text-sm tracking-wide uppercase mb-3">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    {project.category}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Project Meta */}
                <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-slate-200 text-sm">
                  <div>
                    <span className="text-slate-500">Location:</span>
                    <span className="ml-1 font-semibold text-slate-900">{project.location}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Duration:</span>
                    <span className="ml-1 font-semibold text-slate-900">{project.duration}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Budget:</span>
                    <span className="ml-1 font-semibold text-slate-900">{project.budgetRange}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Completed:</span>
                    <span className="ml-1 font-semibold text-green-600">{project.completed}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-bold text-slate-900 text-sm mb-2">Project Highlights</h4>
                  <ul className="space-y-1">
                    {project.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* View Gallery Button */}
                <button
                  onClick={() => openLightbox(project)}
                  className="w-full btn btn-secondary flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  View Full Gallery ({project.galleryImages.length} photos)
                </button>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <svg className="w-20 h-20 text-slate-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No Projects Found</h3>
            <p className="text-slate-600 mb-6">Try adjusting your filters or search query</p>
          </div>
        )}
      </div>

      {/* Image Lightbox */}
      <ImageLightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}
