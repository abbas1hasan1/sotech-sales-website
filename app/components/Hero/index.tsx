'use client';

import LivingCanvas from './LivingCanvas';
import BrowserMockup from './BrowserMockup';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <LivingCanvas />

      {/* Content - Split layout on desktop */}
      <div className="relative z-10 container px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text content - Left side */}
          <div className="flex-1 text-center lg:text-left max-w-xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6">
              <span className="block">Websites that work</span>
              <span className="block gradient-text">as hard as you do.</span>
            </h1>

            <p
              className="text-lg md:text-xl mb-8"
              style={{ color: 'var(--text-secondary)' }}
            >
              Premium design. Transparent pricing. You own everything.
            </p>

            {/* Quick value props */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <span
                className="px-3 py-1.5 rounded-full text-xs font-medium"
                style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}
              >
                7-14 day delivery
              </span>
              <span
                className="px-3 py-1.5 rounded-full text-xs font-medium"
                style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}
              >
                No contracts
              </span>
              <span
                className="px-3 py-1.5 rounded-full text-xs font-medium"
                style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}
              >
                Houston-based
              </span>
            </div>
          </div>

          {/* Browser mockup - Right side */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <BrowserMockup />
          </div>
        </div>
      </div>

      {/* Scroll prompt */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 scroll-prompt">
        <span
          className="text-xs uppercase tracking-widest"
          style={{ color: 'var(--text-tertiary)' }}
        >
          Scroll to explore
        </span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
