'use client';

import { useEffect, useRef, useState } from 'react';

const featureCards = [
  {
    icon: 'key',
    headline: 'You own everything',
    description: 'Domain, hosting, code—all yours',
  },
  {
    icon: 'rocket',
    headline: '7-14 day delivery',
    description: 'Ship in weeks, not months',
  },
  {
    icon: 'shield',
    headline: 'No contracts',
    description: 'Pay for what you need, leave when you want',
  },
  {
    icon: 'pin',
    headline: 'Houston-based',
    description: 'Same timezone, real accountability',
  },
];

const icons: Record<string, React.ReactNode> = {
  key: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
    </svg>
  ),
  rocket: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  shield: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  pin: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

export default function ValueReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section">
      <div className="container">
        {/* Section header */}
        <div className={`text-center mb-12 fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The <span className="gradient-text">SoTech</span> Difference
          </h2>
          <p className="text-lg max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            What sets us apart from the rest
          </p>
        </div>

        {/* Feature cards grid - 2x2 on desktop, stack on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {featureCards.map((card, index) => (
            <div
              key={card.headline}
              className={`glass-card p-8 text-center fade-in ${isVisible ? 'visible' : ''}`}
              style={{
                transitionDelay: `${0.1 + index * 0.1}s`,
              }}
            >
              {/* Icon with accent glow */}
              <div
                className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'var(--accent-subtle)',
                  boxShadow: '0 0 30px var(--accent-glow)',
                }}
              >
                <span style={{ color: 'var(--accent-light)' }}>{icons[card.icon]}</span>
              </div>

              {/* Headline */}
              <h3 className="font-semibold text-lg mb-2 text-white">{card.headline}</h3>

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
