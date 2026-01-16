'use client';

import LivingCanvas from './LivingCanvas';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <LivingCanvas />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="block">Websites that work</span>
          <span className="block gradient-text">as hard as you do.</span>
        </h1>

        <p
          className="text-lg md:text-xl max-w-md mx-auto mb-12"
          style={{ color: 'var(--text-secondary)' }}
        >
          Premium design. Transparent pricing. You own everything.
        </p>
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
