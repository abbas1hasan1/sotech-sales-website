'use client';

import { useEffect, useRef, useState } from 'react';

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(99, 102, 241, 0.1) 50%, rgba(79, 70, 229, 0.08) 100%)'
      }}
    >
      {/* Gradient glow orbs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-30"
        style={{ background: 'var(--violet)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20"
        style={{ background: 'var(--indigo)' }}
      />

      <div className="container relative z-10">
        <div className={`text-center max-w-2xl mx-auto fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to build something
            <span className="block gradient-text">exceptional?</span>
          </h2>

          <p
            className="text-lg md:text-xl mb-10 max-w-lg mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Let&apos;s talk about your project. No pressure, no jargon—just a conversation about what you need.
          </p>

          <button
            className="btn-primary pulse text-lg px-10 py-4"
            style={{ opacity: 0.6, cursor: 'not-allowed' }}
            disabled
          >
            <span>Let&apos;s Build This</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          <p className="text-sm mt-4" style={{ color: 'var(--text-tertiary)' }}>
            Scheduling coming soon
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
            <a
              href="mailto:hello@sotech.com"
              className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
              style={{ color: 'var(--text-secondary)' }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@sotech.com
            </a>
            <span className="hidden sm:block w-1 h-1 rounded-full" style={{ background: 'var(--glass-border)' }} />
            <span className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-tertiary)' }}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Houston, Texas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
