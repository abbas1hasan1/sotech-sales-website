'use client';

import { useState, useEffect, useRef } from 'react';
import { tiers, monthlyPackage, includedFeatures, TierId, formatCurrency } from './pricing-data';

function useAnimatedNumber(value: number, duration: number = 400) {
  const [displayValue, setDisplayValue] = useState(value);
  const previousValue = useRef(value);

  useEffect(() => {
    if (previousValue.current === value) return;

    const startValue = previousValue.current;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      const currentValue = Math.round(startValue + (value - startValue) * easeProgress);
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        previousValue.current = value;
      }
    }

    requestAnimationFrame(animate);
  }, [value, duration]);

  return displayValue;
}

export default function PricingCalculator() {
  const [selectedTier, setSelectedTier] = useState<TierId | null>(null);
  const [includeMonthly, setIncludeMonthly] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTierSelect = (tierId: TierId) => {
    setSelectedTier(selectedTier === tierId ? null : tierId);
  };

  const oneTimeTotal = selectedTier
    ? tiers.find((t) => t.id === selectedTier)?.price ?? 0
    : 0;

  const monthlyTotal = includeMonthly ? monthlyPackage.price : 0;

  const displayOneTime = useAnimatedNumber(oneTimeTotal);
  const displayMonthly = useAnimatedNumber(monthlyTotal);

  const selectedTierData = selectedTier ? tiers.find(t => t.id === selectedTier) : null;

  return (
    <section ref={sectionRef} className="section" id="pricing">
      <div className="container">
        {/* Section header */}
        <div className={`text-center mb-12 fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Two options. No hidden fees. You own everything.
          </p>
        </div>

        {/* Tier Cards - Side by Side */}
        <div className={`grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8 fade-in delay-1 ${isVisible ? 'visible' : ''}`}>
          {tiers.map((tier) => {
            const isSelected = selectedTier === tier.id;
            return (
              <button
                key={tier.id}
                onClick={() => handleTierSelect(tier.id)}
                className={`glass-card p-8 text-left transition-all duration-300 group
                  ${isSelected ? 'ring-2 ring-[var(--accent)] scale-[1.02]' : 'hover:scale-[1.01]'}
                `}
                style={{
                  boxShadow: isSelected ? '0 0 40px var(--accent-glow)' : 'none'
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                    <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                      {tier.delivery} delivery
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">{tier.priceDisplay}</div>
                    <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>one-time</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {tier.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <span style={{ color: 'var(--accent)' }}>
                        <svg className="w-4 h-4 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Selection indicator */}
                <div className={`mt-6 py-3 rounded-lg text-center text-sm font-medium transition-all
                  ${isSelected
                    ? 'bg-[var(--accent)] text-white'
                    : 'bg-[var(--glass-bg)] text-[var(--text-secondary)] group-hover:bg-[var(--glass-bg-hover)]'
                  }
                `}>
                  {isSelected ? 'Selected' : 'Select'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Expanded Tier Details */}
        <div className={`tier-details ${selectedTier ? 'expanded' : ''} mb-8`}>
          {selectedTierData && (
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-2">
                {includedFeatures.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 rounded-full text-xs"
                    style={{ background: 'var(--accent-subtle)', color: 'var(--accent-light)' }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Monthly Growth Package Toggle */}
        <div className={`max-w-2xl mx-auto transition-all duration-500 ${selectedTier ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold mb-1">Add Monthly Growth</h3>
            <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
              {monthlyPackage.description}
            </p>
          </div>

          <button
            onClick={() => setIncludeMonthly(!includeMonthly)}
            className={`w-full flex items-center gap-4 p-5 rounded-xl transition-all duration-200
              ${includeMonthly
                ? 'bg-[var(--accent-subtle)]'
                : 'bg-[var(--glass-bg)] hover:bg-[var(--glass-bg-hover)]'
              }
            `}
            style={{
              border: `1px solid ${includeMonthly ? 'var(--accent)' : 'var(--glass-border)'}`,
              boxShadow: includeMonthly ? '0 0 30px var(--accent-glow)' : 'none'
            }}
          >
            {/* Toggle */}
            <div className={`toggle-switch ${includeMonthly ? 'active' : ''}`} />

            {/* Info */}
            <div className="flex-1 text-left">
              <div className="font-semibold">{monthlyPackage.name}</div>
              <div className="text-xs mt-1 space-x-2" style={{ color: 'var(--text-tertiary)' }}>
                {monthlyPackage.features.map((f, i) => (
                  <span key={f}>
                    {f}{i < monthlyPackage.features.length - 1 ? ' •' : ''}
                  </span>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="text-right">
              <div className="text-xl font-bold" style={{ color: includeMonthly ? 'var(--accent-light)' : 'var(--text-primary)' }}>
                {monthlyPackage.priceDisplay}
              </div>
            </div>
          </button>
        </div>

        {/* Price Summary */}
        <div className="mt-12 max-w-md mx-auto">
          <div
            className="glass-card p-6 text-center"
            role="region"
            aria-live="polite"
            aria-label="Price Summary"
          >
            <h3 className="text-sm uppercase tracking-wider mb-4" style={{ color: 'var(--text-tertiary)' }}>
              Your Investment
            </h3>

            <div className="flex justify-center items-baseline gap-8">
              <div>
                <div className="text-3xl font-bold animated-number">
                  {formatCurrency(displayOneTime)}
                </div>
                <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>one-time</div>
              </div>

              {monthlyTotal > 0 && (
                <>
                  <div className="text-2xl" style={{ color: 'var(--text-tertiary)' }}>+</div>
                  <div>
                    <div className="text-3xl font-bold animated-number" style={{ color: 'var(--accent-light)' }}>
                      {formatCurrency(displayMonthly)}
                    </div>
                    <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>/month</div>
                  </div>
                </>
              )}
            </div>

            {!selectedTier && (
              <p className="mt-4 text-sm" style={{ color: 'var(--text-tertiary)' }}>
                Select a package above to see your total
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
