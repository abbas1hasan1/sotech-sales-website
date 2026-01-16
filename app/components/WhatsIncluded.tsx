'use client';

import { useEffect, useRef } from 'react';
import { includedFeatures } from './PricingCalculator/pricing-data';

export default function WhatsIncluded() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.fade-in');
            items.forEach((item) => {
              item.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What&apos;s Included</h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Every package includes these essentials. No nickel-and-diming, no surprise fees.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {includedFeatures.map((feature, index) => (
                <div
                  key={feature}
                  className={`flex items-center gap-3 fade-in delay-${index + 1}`}
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--success)', boxShadow: '0 0 10px var(--success-glow)' }}
                  >
                    <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
