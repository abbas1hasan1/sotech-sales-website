'use client';

import { useEffect, useRef, useState } from 'react';

const valuePoints = [
  {
    icon: 'key',
    text: 'You own everything',
    description: 'Domain, hosting, code, design files—it\'s all yours. No hostage situations.',
  },
  {
    icon: 'clock',
    text: '7-14 day delivery',
    description: 'While others quote months, we ship in weeks. Your time matters.',
  },
  {
    icon: 'handshake',
    text: 'No contracts',
    description: 'Pay for what you need. Stay because you want to, not because you have to.',
  },
  {
    icon: 'pin',
    text: 'Houston-based',
    description: 'Local team, real accountability. Same timezone, same standards.',
  },
];

const icons: Record<string, React.ReactNode> = {
  key: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
    </svg>
  ),
  clock: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  handshake: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  pin: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

// Shared content for both mockups - ensures identical structure
const mockupContent = {
  business: "Smith's Plumbing",
  tagline: "Houston's Trusted Experts",
  headline: "Quality Plumbing",
  subheadline: "Services You Can Trust",
  description: "24/7 emergency service. Fair pricing. Guaranteed work.",
  services: [
    { name: 'Leak Repair', icon: '💧' },
    { name: 'Drain Cleaning', icon: '🔧' },
    { name: 'Water Heaters', icon: '🔥' },
  ],
  stats: [
    { value: '29+', label: 'Years' },
    { value: '5K+', label: 'Jobs' },
    { value: '4.9', label: 'Rating' },
  ],
  cta: 'Get a Quote',
  navItems: ['Services', 'About', 'Contact'],
};

// Before mockup - Full-bleed boxy WordPress style
function BeforeMockup() {
  return (
    <div
      className="w-full h-full overflow-hidden"
      style={{
        background: '#f5f5f5',
        fontFamily: 'Arial, Helvetica, sans-serif',
      }}
    >
      {/* Header - boxy corporate style */}
      <div
        className="flex items-center justify-between px-6 py-3"
        style={{
          background: 'linear-gradient(180deg, #4a7cb5 0%, #2d5a8a 100%)',
          borderBottom: '3px solid #1e4a6e',
        }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 flex items-center justify-center text-xs font-bold"
            style={{ background: '#fff', color: '#2d5a8a', border: '1px solid #ccc' }}
          >
            SP
          </div>
          <span className="text-white font-bold text-sm">{mockupContent.business}</span>
        </div>
        <div className="flex gap-4 text-xs text-white">
          {mockupContent.navItems.map((item) => (
            <span key={item} className="hover:underline cursor-pointer px-2 py-1">{item}</span>
          ))}
        </div>
      </div>

      {/* Hero section - white background, basic layout */}
      <div className="px-6 py-6" style={{ background: '#ffffff', borderBottom: '1px solid #ddd' }}>
        <p
          className="text-xs uppercase tracking-wide mb-2 font-bold"
          style={{ color: '#0066cc' }}
        >
          {mockupContent.tagline}
        </p>
        <h1
          className="text-2xl font-bold leading-tight mb-2"
          style={{ color: '#333333' }}
        >
          {mockupContent.headline}
          <br />
          <span style={{ color: '#0066cc' }}>{mockupContent.subheadline}</span>
        </h1>
        <p className="text-xs mb-4" style={{ color: '#666666', lineHeight: 1.6 }}>
          {mockupContent.description}
        </p>
        <button
          className="px-4 py-2 text-xs text-white font-bold"
          style={{
            background: 'linear-gradient(180deg, #4a90d9 0%, #357abd 100%)',
            border: '2px outset #4a90d9',
          }}
        >
          {mockupContent.cta}
        </button>
      </div>

      {/* Services - table-like grid */}
      <div className="px-6 py-4" style={{ background: '#e8e8e8', borderBottom: '1px solid #ccc' }}>
        <h3 className="text-sm font-bold mb-3" style={{ color: '#333' }}>Our Services</h3>
        <div className="grid grid-cols-3 gap-3">
          {mockupContent.services.map((service) => (
            <div
              key={service.name}
              className="p-3 text-center"
              style={{
                background: '#ffffff',
                border: '1px solid #cccccc',
                boxShadow: 'inset 0 1px 0 #fff',
              }}
            >
              <div className="text-lg mb-1">{service.icon}</div>
              <p className="text-[10px] font-bold" style={{ color: '#333' }}>{service.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats - basic table style */}
      <div
        className="flex justify-around py-4 mx-6 my-4"
        style={{
          background: '#ffffff',
          border: '1px solid #cccccc',
        }}
      >
        {mockupContent.stats.map((stat, i) => (
          <div
            key={stat.label}
            className="text-center px-4"
            style={{ borderRight: i < mockupContent.stats.length - 1 ? '1px solid #ddd' : 'none' }}
          >
            <p className="text-lg font-bold" style={{ color: '#0066cc' }}>{stat.value}</p>
            <p className="text-[10px] uppercase" style={{ color: '#666' }}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-6 py-3" style={{ background: '#2d5a8a' }}>
        <p className="text-[10px] text-white/80 text-center">© 2024 {mockupContent.business}. All rights reserved.</p>
      </div>
    </div>
  );
}

// After mockup - Full-bleed premium dark glassmorphic design with floating animations
function AfterMockup() {
  return (
    <div
      className="w-full h-full overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0a0a12 0%, #12121a 100%)',
      }}
    >
      {/* Header - glassmorphic */}
      <div
        className="flex items-center justify-between px-6 py-3"
        style={{
          background: 'rgba(0,0,0,0.3)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
            style={{ background: 'var(--gradient-primary)' }}
          >
            <span className="text-white">S</span>
          </div>
          <span className="text-white font-semibold text-sm">{mockupContent.business}</span>
        </div>
        <div className="flex gap-3 text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>
          {mockupContent.navItems.map((item, i) => (
            <span
              key={item}
              className={i === mockupContent.navItems.length - 1 ? 'px-3 py-1 rounded-lg' : ''}
              style={i === mockupContent.navItems.length - 1 ? { background: 'var(--accent)', color: 'white' } : {}}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Hero section - dark gradient with glow */}
      <div className="px-6 py-6">
        <p
          className="text-xs uppercase tracking-wider mb-2"
          style={{ color: 'var(--accent-light)' }}
        >
          {mockupContent.tagline}
        </p>
        <h1 className="text-2xl font-bold text-white leading-tight mb-2">
          {mockupContent.headline}
          <br />
          <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {mockupContent.subheadline}
          </span>
        </h1>
        <p className="text-xs mb-4" style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
          {mockupContent.description}
        </p>
        <button
          className="px-4 py-2 rounded-lg text-xs text-white font-medium"
          style={{
            background: 'var(--gradient-primary)',
            boxShadow: '0 0 20px var(--accent-glow)',
          }}
        >
          {mockupContent.cta}
        </button>
      </div>

      {/* Services cards with floating animation */}
      <div className="px-6 py-4">
        <div className="grid grid-cols-3 gap-3">
          {mockupContent.services.map((service, i) => (
            <div
              key={service.name}
              className="p-3 rounded-xl text-center float-gentle"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <div className="text-lg mb-1">{service.icon}</div>
              <p className="text-[10px] text-white font-medium">{service.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats bar - glassmorphic */}
      <div
        className="flex justify-around py-4 mx-6 my-4 rounded-xl float-gentle"
        style={{
          background: 'rgba(99, 102, 241, 0.1)',
          border: '1px solid rgba(99, 102, 241, 0.2)',
          animationDelay: '1.5s',
        }}
      >
        {mockupContent.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-lg font-bold text-white">{stat.value}</p>
            <p className="text-[10px] uppercase" style={{ color: 'var(--accent-light)' }}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Footer glow effect */}
      <div
        className="h-1 mx-6"
        style={{
          background: 'var(--gradient-primary)',
          borderRadius: '2px',
          boxShadow: '0 0 20px var(--accent-glow)',
        }}
      />
    </div>
  );
}

export default function ValueReveal() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
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

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mouseup', handleMouseUp);
      return () => document.removeEventListener('mouseup', handleMouseUp);
    }
  }, [isDragging]);

  return (
    <section ref={sectionRef} className="section">
      <div className="container">
        {/* Section header */}
        <div className={`text-center mb-12 fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The <span className="gradient-text">SoTech</span> Difference
          </h2>
          <p className="text-lg max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Same business. Transformed online presence.
          </p>
        </div>

        {/* Comparison slider - full-bleed mockups */}
        <div
          ref={containerRef}
          className={`comparison-slider glass-card p-0 max-w-4xl mx-auto mb-12 fade-in delay-1 ${isVisible ? 'visible' : ''}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          style={{ borderRadius: '16px', overflow: 'hidden' }}
        >
          {/* Before side - Full website */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
            }}
          >
            <BeforeMockup />
            {/* Label overlay */}
            <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-gray-800/90 backdrop-blur">
              <p className="text-white font-semibold text-xs">Before</p>
            </div>
          </div>

          {/* After side - Full website */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: `inset(0 0 0 ${sliderPosition}%)`
            }}
          >
            <AfterMockup />
            {/* Label overlay */}
            <div
              className="absolute top-3 right-3 px-3 py-1.5 rounded-lg backdrop-blur"
              style={{ background: 'var(--accent)', boxShadow: '0 0 20px var(--accent-glow)' }}
            >
              <p className="text-white font-semibold text-xs">After</p>
            </div>
          </div>

          {/* Slider handle */}
          <div
            className="comparison-handle"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center cursor-ew-resize">
              <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Value points with descriptions */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto fade-in delay-2 ${isVisible ? 'visible' : ''}`}>
          {valuePoints.map((point, index) => (
            <div
              key={point.text}
              className={`glass-card p-5 text-center fade-in delay-${index + 1} ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div
                className="w-10 h-10 mx-auto mb-3 rounded-full flex items-center justify-center"
                style={{ background: 'var(--accent-subtle)' }}
              >
                <span style={{ color: 'var(--accent)' }}>{icons[point.icon]}</span>
              </div>
              <h3 className="font-semibold text-sm mb-2">{point.text}</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
