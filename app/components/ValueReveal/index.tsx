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

// Before mockup - cluttered template website
function BeforeMockup() {
  return (
    <div className="w-full h-full p-4 flex items-center justify-center">
      <div
        className="w-full max-w-sm rounded-lg overflow-hidden shadow-2xl"
        style={{ background: '#1a1a1a', border: '1px solid #333' }}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2" style={{ background: '#0d0d0d' }}>
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          <div className="flex-1 mx-3 h-4 rounded bg-gray-800" />
        </div>

        {/* Cluttered website content */}
        <div className="p-3 space-y-2" style={{ background: '#f5f5f5' }}>
          {/* Messy nav with too many items */}
          <div className="flex items-center justify-between">
            <div className="w-16 h-4 rounded bg-blue-600" />
            <div className="flex gap-1">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="w-8 h-2 rounded bg-gray-400" />
              ))}
            </div>
          </div>

          {/* Banner with stock photo placeholder */}
          <div className="h-16 rounded bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'
            }} />
            <div className="space-y-1 text-center z-10">
              <div className="w-32 h-3 mx-auto rounded bg-white/80" />
              <div className="w-24 h-2 mx-auto rounded bg-white/50" />
            </div>
          </div>

          {/* Too many CTAs */}
          <div className="flex gap-1">
            <div className="flex-1 h-6 rounded bg-red-500" />
            <div className="flex-1 h-6 rounded bg-green-500" />
            <div className="flex-1 h-6 rounded bg-orange-500" />
          </div>

          {/* Cluttered grid */}
          <div className="grid grid-cols-4 gap-1">
            {[1,2,3,4,5,6,7,8].map(i => (
              <div key={i} className="aspect-square rounded bg-gray-300 flex items-center justify-center">
                <div className="w-4 h-4 rounded bg-gray-400" />
              </div>
            ))}
          </div>

          {/* Wall of text */}
          <div className="space-y-1">
            {[1,2,3].map(i => (
              <div key={i} className="h-1.5 rounded bg-gray-400" style={{ width: `${100 - i * 10}%` }} />
            ))}
          </div>

          {/* Footer chaos */}
          <div className="pt-2 border-t border-gray-300 flex justify-between">
            <div className="flex gap-1">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-4 h-4 rounded-full bg-gray-400" />
              ))}
            </div>
            <div className="w-20 h-3 rounded bg-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

// After mockup - clean premium website
function AfterMockup() {
  return (
    <div className="w-full h-full p-4 flex items-center justify-center">
      <div
        className="w-full max-w-sm rounded-xl overflow-hidden shadow-2xl"
        style={{
          background: 'linear-gradient(180deg, #0f0f1a 0%, #1a1a2e 100%)',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(99, 102, 241, 0.15)'
        }}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2" style={{ background: 'rgba(0,0,0,0.3)' }}>
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <div className="flex-1 mx-3 h-4 rounded-md flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
            <div className="w-2 h-2 rounded-full mr-1" style={{ background: '#30d158' }} />
            <div className="w-16 h-2 rounded bg-white/20" />
          </div>
        </div>

        {/* Clean website content */}
        <div className="p-4 space-y-4">
          {/* Minimal nav */}
          <div className="flex items-center justify-between">
            <div className="w-20 h-5 rounded" style={{ background: 'var(--gradient-primary)' }} />
            <div className="flex gap-3">
              {[1,2,3].map(i => (
                <div key={i} className="w-10 h-2 rounded bg-white/20" />
              ))}
            </div>
          </div>

          {/* Hero section - clean */}
          <div className="py-4 space-y-3">
            <div className="w-3/4 h-5 rounded bg-white/90" />
            <div className="w-1/2 h-5 rounded" style={{ background: 'var(--gradient-primary)', opacity: 0.8 }} />
            <div className="w-2/3 h-2 rounded bg-white/30 mt-3" />
            <div className="w-1/2 h-2 rounded bg-white/20" />
            <div
              className="w-28 h-8 rounded-lg mt-4"
              style={{ background: 'var(--accent)' }}
            />
          </div>

          {/* Clean cards */}
          <div className="grid grid-cols-3 gap-2">
            {[1,2,3].map(i => (
              <div
                key={i}
                className="p-3 rounded-lg"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <div
                  className="w-6 h-6 rounded-lg mb-2"
                  style={{ background: i === 1 ? 'var(--violet)' : i === 2 ? 'var(--indigo)' : 'var(--deep-blue)', opacity: 0.7 }}
                />
                <div className="w-full h-2 rounded bg-white/20 mb-1" />
                <div className="w-2/3 h-1.5 rounded bg-white/10" />
              </div>
            ))}
          </div>

          {/* Stats - minimal */}
          <div className="flex justify-between pt-2">
            {[1,2,3].map(i => (
              <div key={i} className="text-center">
                <div className="w-10 h-4 mx-auto rounded bg-white/30 mb-1" />
                <div className="w-12 h-1.5 mx-auto rounded bg-white/10" />
              </div>
            ))}
          </div>
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
            Drag to see what sets us apart
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
          {/* Before side - Typical Agency */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <BeforeMockup />
            {/* Label overlay */}
            <div className="absolute top-4 left-4 right-4 text-center">
              <p className="text-gray-400 font-semibold text-sm">Typical Agency</p>
              <p className="text-xs text-gray-600 mt-1">
                Templates • Cluttered • Generic
              </p>
            </div>
          </div>

          {/* After side - SoTech */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(99, 102, 241, 0.08) 100%)',
              clipPath: `inset(0 0 0 ${sliderPosition}%)`
            }}
          >
            <AfterMockup />
            {/* Label overlay */}
            <div className="absolute top-4 left-4 right-4 text-center">
              <p className="font-semibold text-sm" style={{ color: 'var(--accent-light)' }}>SoTech</p>
              <p className="text-xs mt-1" style={{ color: 'var(--text-tertiary)' }}>
                Custom • Clean • Premium
              </p>
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

          {/* Labels */}
          <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-medium" style={{ background: 'rgba(0,0,0,0.5)' }}>
            Before
          </div>
          <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-medium" style={{ background: 'var(--accent-subtle)', color: 'var(--accent-light)' }}>
            After
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
