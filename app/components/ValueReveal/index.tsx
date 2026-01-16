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

// Before mockup - Old WordPress style website
function BeforeMockup() {
  return (
    <div className="w-full h-full flex items-center justify-center p-3">
      <div
        className="w-full max-w-md rounded overflow-hidden shadow-lg"
        style={{ background: '#ffffff', border: '1px solid #ddd', fontFamily: 'Georgia, Times, serif' }}
      >
        {/* Old-style header with gradient banner */}
        <div
          className="h-12 flex items-center justify-between px-3"
          style={{ background: 'linear-gradient(180deg, #4a7cb5 0%, #2d5a8a 100%)' }}
        >
          <span className="text-white font-bold text-sm" style={{ fontFamily: 'Arial, sans-serif' }}>
            Smith&apos;s Plumbing
          </span>
          <div className="flex gap-2 text-[10px] text-white/80">
            <span className="hover:underline cursor-pointer">Home</span>
            <span className="hover:underline cursor-pointer">About</span>
            <span className="hover:underline cursor-pointer">Services</span>
            <span className="hover:underline cursor-pointer">Contact</span>
          </div>
        </div>

        {/* Stock photo banner */}
        <div
          className="h-24 relative flex items-center justify-center"
          style={{
            background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), linear-gradient(135deg, #87CEEB 0%, #4682B4 100%)',
          }}
        >
          <div className="text-center text-white">
            <p className="text-lg font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              Welcome to Our Website!
            </p>
            <p className="text-[10px] mt-1">Serving Houston Since 1995</p>
          </div>
        </div>

        {/* Content with sidebar */}
        <div className="flex" style={{ background: '#f5f5f5' }}>
          {/* Main content */}
          <div className="flex-1 p-3">
            <h2 className="text-sm font-bold text-gray-800 mb-2">Our Services</h2>
            <div className="space-y-2">
              {['Leak Repair', 'Drain Cleaning', 'Water Heaters'].map((service) => (
                <div key={service} className="flex items-start gap-2">
                  <span className="text-blue-600 text-xs">►</span>
                  <div>
                    <p className="text-xs font-bold text-gray-700">{service}</p>
                    <p className="text-[10px] text-gray-500">Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="mt-3 px-3 py-1.5 text-[10px] text-white rounded"
              style={{ background: 'linear-gradient(180deg, #4a90d9 0%, #357abd 100%)', border: '1px solid #2d6aa0' }}
            >
              Contact Us Today!
            </button>
          </div>

          {/* Cluttered sidebar */}
          <div className="w-28 p-2 border-l border-gray-300 space-y-2">
            <div className="p-1.5 bg-yellow-100 border border-yellow-400 rounded text-[8px] text-center">
              <p className="font-bold text-yellow-800">★ Special Offer!</p>
              <p className="text-yellow-700">10% OFF</p>
            </div>
            <div className="p-1.5 bg-white border border-gray-300 rounded text-[8px]">
              <p className="font-bold text-gray-700">Hours:</p>
              <p className="text-gray-600">Mon-Fri 8-5</p>
            </div>
            <div className="p-1.5 bg-white border border-gray-300 rounded text-[8px]">
              <p className="font-bold text-gray-700">Call Now!</p>
              <p className="text-blue-600">(555) 123-4567</p>
            </div>
            <div className="flex gap-1 justify-center">
              {['f', 't', 'in'].map((s) => (
                <div key={s} className="w-4 h-4 bg-gray-400 rounded text-[8px] flex items-center justify-center text-white">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-3 py-2 bg-gray-200 border-t border-gray-300 text-[8px] text-gray-600 text-center">
          © 2024 Smith&apos;s Plumbing | All Rights Reserved | Privacy Policy | Terms | Sitemap
        </div>
      </div>
    </div>
  );
}

// After mockup - SoTech premium dark glassmorphic design
function AfterMockup() {
  return (
    <div className="w-full h-full flex items-center justify-center p-3">
      <div
        className="w-full max-w-md rounded-xl overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0a0a12 0%, #12121a 100%)',
          border: '1px solid rgba(99, 102, 241, 0.2)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4), 0 0 60px rgba(99, 102, 241, 0.1)',
        }}
      >
        {/* Modern header */}
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg" style={{ background: 'var(--gradient-primary)' }} />
            <span className="text-white font-semibold text-sm">Smith&apos;s</span>
          </div>
          <div className="flex gap-4 text-[10px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
            <span>Services</span>
            <span>About</span>
            <span
              className="px-2 py-0.5 rounded"
              style={{ background: 'var(--accent)', color: 'white' }}
            >
              Contact
            </span>
          </div>
        </div>

        {/* Hero section */}
        <div className="px-4 py-6">
          <p className="text-[10px] uppercase tracking-wider mb-2" style={{ color: 'var(--accent-light)' }}>
            Houston&apos;s Trusted Experts
          </p>
          <h1 className="text-xl font-bold text-white leading-tight mb-2">
            Plumbing that<br />
            <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              just works.
            </span>
          </h1>
          <p className="text-[10px] mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
            24/7 emergency service. Fair pricing. Guaranteed work.
          </p>
          <div className="flex gap-2">
            <button
              className="px-3 py-1.5 rounded-lg text-[10px] text-white font-medium"
              style={{ background: 'var(--gradient-primary)' }}
            >
              Get a Quote
            </button>
            <button
              className="px-3 py-1.5 rounded-lg text-[10px] font-medium"
              style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              Our Services
            </button>
          </div>
        </div>

        {/* Services cards */}
        <div className="px-4 pb-4">
          <div className="grid grid-cols-3 gap-2">
            {[
              { name: 'Leak Repair', icon: '💧' },
              { name: 'Drains', icon: '🔧' },
              { name: 'Heaters', icon: '🔥' },
            ].map((service, i) => (
              <div
                key={service.name}
                className="p-2.5 rounded-lg text-center"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div className="text-base mb-1">{service.icon}</div>
                <p className="text-[9px] text-white font-medium">{service.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="flex justify-around py-3 mx-4 mb-4 rounded-lg"
          style={{ background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.2)' }}
        >
          {[
            { value: '29+', label: 'Years' },
            { value: '5K+', label: 'Jobs' },
            { value: '4.9', label: 'Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-sm font-bold text-white">{stat.value}</p>
              <p className="text-[8px]" style={{ color: 'var(--accent-light)' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
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

        {/* Comparison slider */}
        <div
          ref={containerRef}
          className={`comparison-slider glass-card p-1 max-w-4xl mx-auto mb-12 fade-in delay-1 ${isVisible ? 'visible' : ''}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
        >
          {/* Before side - Old WordPress */}
          <div
            className="absolute inset-0"
            style={{
              background: '#e8e8e8',
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
            }}
          >
            <BeforeMockup />
            {/* Label overlay */}
            <div className="absolute top-3 left-3 px-2 py-1 rounded bg-gray-800/80 backdrop-blur">
              <p className="text-white font-medium text-xs">Before</p>
            </div>
          </div>

          {/* After side - SoTech Premium */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(15, 15, 25, 1) 100%)',
              clipPath: `inset(0 0 0 ${sliderPosition}%)`
            }}
          >
            <AfterMockup />
            {/* Label overlay */}
            <div
              className="absolute top-3 right-3 px-2 py-1 rounded backdrop-blur"
              style={{ background: 'var(--accent)', boxShadow: '0 0 20px var(--accent-glow)' }}
            >
              <p className="text-white font-medium text-xs">After</p>
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
