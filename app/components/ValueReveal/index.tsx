'use client';

import { useEffect, useRef, useState } from 'react';

const valuePoints = [
  { icon: 'key', text: 'You own everything' },
  { icon: 'clock', text: '7-14 day delivery' },
  { icon: 'handshake', text: 'No contracts' },
  { icon: 'pin', text: 'Houston-based' },
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
          {/* Before side - Generic/Template */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <div className="text-center p-8 opacity-60">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gray-700 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-400 font-medium">Typical Agency</p>
              <p className="text-sm text-gray-500 mt-2">Templates • Jargon • Contracts</p>
            </div>
          </div>

          {/* After side - SoTech quality */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(99, 102, 241, 0.1) 100%)',
              clipPath: `inset(0 0 0 ${sliderPosition}%)`
            }}
          >
            <div className="text-center p-8">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center"
                style={{ background: 'var(--gradient-primary)' }}
              >
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="font-semibold text-white">SoTech</p>
              <p className="text-sm mt-2" style={{ color: 'var(--text-secondary)' }}>
                Custom • Clear • Yours
              </p>
            </div>
          </div>

          {/* Slider handle */}
          <div
            className="comparison-handle"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
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

        {/* Value points - horizontal scroll on mobile */}
        <div className={`flex flex-wrap justify-center gap-3 md:gap-4 fade-in delay-2 ${isVisible ? 'visible' : ''}`}>
          {valuePoints.map((point, index) => (
            <div
              key={point.text}
              className={`flex items-center gap-2 px-4 py-2 rounded-full glass-card fade-in delay-${index + 1} ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <span style={{ color: 'var(--accent)' }}>{icons[point.icon]}</span>
              <span className="text-sm font-medium whitespace-nowrap">{point.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
