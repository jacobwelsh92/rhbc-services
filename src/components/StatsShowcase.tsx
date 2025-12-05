/**
 * Stats Showcase Component
 *
 * Animated counter dashboard displaying key metrics.
 * Builds authority and credibility in construction industry.
 *
 * Features:
 * - Count-up animations on scroll
 * - Professional presentation
 * - Industry-specific metrics
 */

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const stats: Stat[] = [
  {
    value: 500,
    suffix: '+',
    label: 'Projects Completed',
  },
  {
    value: 15,
    suffix: '+',
    label: 'Years Experience',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Safety Record',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Customer Satisfaction',
  },
];

export default function StatsShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        onEnter: () => {
          if (!hasAnimated) {
            // Animate each counter
            const counters = document.querySelectorAll('.stat-value');
            counters.forEach((counter, index) => {
              const target = stats[index].value;
              const obj = { value: 0 };

              gsap.to(obj, {
                value: target,
                duration: 2,
                ease: 'power2.out',
                delay: index * 0.1,
                onUpdate: () => {
                  counter.textContent = Math.round(obj.value).toString();
                },
              });
            });

            setHasAnimated(true);
          }
        },
      });

      // Card entrance animations
      const cards = document.querySelectorAll('.stat-card');
      if (cards.length > 0) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          scale: 0.9,
          y: 30,
          stagger: 0.1,
          duration: 0.6,
          ease: 'back.out(1.4)',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="section-sm bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-white mb-4">Building Trust Through Results</h2>
          <p className="text-xl text-slate-300">
            Our track record speaks for itself. Delivering excellence across Queensland for over 15 years.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-colors duration-300"
            >
              {/* Value */}
              <div className="mb-2">
                <span className="stat-value text-5xl md:text-6xl font-semibold text-white">
                  0
                </span>
                <span className="text-5xl md:text-6xl font-semibold text-white">
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <div className="text-sm md:text-base text-slate-300 uppercase tracking-wide font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Message */}
        <div className="text-center mt-12">
          <p className="text-slate-300 text-lg">
            Join hundreds of satisfied customers who trust RHBC Services for their construction and demolition needs
          </p>
        </div>
      </div>
    </section>
  );
}
