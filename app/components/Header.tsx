'use client';

import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-black/80 backdrop-blur-xl border-b border-white/10'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="hover:opacity-80 transition-opacity">
          <Logo size="md" />
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <a
            href="#pricing"
            className="text-sm font-medium transition-colors hover:text-white"
            style={{ color: 'var(--text-secondary)' }}
          >
            Pricing
          </a>
          <a
            href="mailto:hello@sotech.com"
            className="text-sm font-medium px-4 py-2 rounded-lg transition-all hover:scale-105"
            style={{
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
            }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
