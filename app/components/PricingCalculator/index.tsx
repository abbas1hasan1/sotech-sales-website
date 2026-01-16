'use client';

import { useState, useEffect, useRef } from 'react';
import { tiers, addons, includedFeatures, TierId, formatCurrency } from './pricing-data';

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
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
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

  const handleAddonToggle = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId)
        ? prev.filter((id) => id !== addonId)
        : [...prev, addonId]
    );
  };

  const oneTimeTotal = selectedTier
    ? tiers.find((t) => t.id === selectedTier)?.price ?? 0
    : 0;

  const monthlyTotal = selectedAddons.reduce((sum, addonId) => {
    const addon = addons.find((a) => a.id === addonId);
    return sum + (addon?.avgPrice ?? 0);
  }, 0);

  const displayOneTime = useAnimatedNumber(oneTimeTotal);
  const displayMonthly = useAnimatedNumber(monthlyTotal);

  const selectedTierData = selectedTier ? tiers.find(t => t.id === selectedTier) : null;

  return (
    <section ref={sectionRef} className="section" id="pricing">
      <div className="container">
        {/* Section header */}
        <div className={`text-center mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Build <span className="gradient-text">Your Package</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Select your website tier. Click to see what&apos;s included.
          </p>
        </div>

        {/* Tier Selector - Horizontal Stepper */}
        <div className={`mb-8 fade-in delay-1 ${isVisible ? 'visible' : ''}`}>
          {/* Desktop: Horizontal with connector lines */}
          <div className="hidden md:flex items-center justify-center gap-0">
            {tiers.map((tier, index) => (
              <div key={tier.id} className="flex items-center">
                {/* Tier button */}
                <button
                  onClick={() => handleTierSelect(tier.id)}
                  className={`relative flex flex-col items-center p-6 rounded-2xl transition-all duration-300
                    ${selectedTier === tier.id
                      ? 'bg-[var(--glass-bg-hover)] scale-105 z-10'
                      : 'hover:bg-[var(--glass-bg)]'
                    }
                    ${tier.popular && !selectedTier ? 'ring-2 ring-[var(--popular)]' : ''}
                    ${selectedTier && selectedTier !== tier.id ? 'opacity-50' : ''}
                  `}
                  style={{
                    borderColor: selectedTier === tier.id ? 'var(--accent)' : 'transparent',
                    boxShadow: selectedTier === tier.id ? '0 0 30px var(--accent-glow)' : 'none'
                  }}
                >
                  {tier.popular && (
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase"
                      style={{ background: 'var(--popular)', color: '#000' }}
                    >
                      Popular
                    </span>
                  )}
                  <span className="text-2xl font-bold">{tier.priceDisplay}</span>
                  <span className="text-sm font-medium mt-1">{tier.name}</span>
                  <span className="text-xs mt-1" style={{ color: 'var(--text-tertiary)' }}>
                    {tier.days}
                  </span>
                </button>

                {/* Connector line */}
                {index < tiers.length - 1 && (
                  <div
                    className="w-12 h-0.5 mx-2"
                    style={{
                      background: selectedTier && tiers.findIndex(t => t.id === selectedTier) > index
                        ? 'var(--accent)'
                        : 'var(--glass-border)'
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Mobile: Vertical accordion */}
          <div className="md:hidden space-y-3">
            {tiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => handleTierSelect(tier.id)}
                className={`w-full glass-card p-4 text-left transition-all duration-300
                  ${selectedTier === tier.id ? 'selected' : ''}
                  ${tier.popular && !selectedTier ? 'popular' : ''}
                `}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{tier.name}</span>
                      {tier.popular && (
                        <span
                          className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase"
                          style={{ background: 'var(--popular)', color: '#000' }}
                        >
                          Popular
                        </span>
                      )}
                    </div>
                    <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{tier.days}</span>
                  </div>
                  <span className="text-xl font-bold">{tier.priceDisplay}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Expanded Tier Details */}
        <div className={`tier-details ${selectedTier ? 'expanded' : ''} mb-12`}>
          {selectedTierData && (
            <div className="glass-card p-6 md:p-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left: Features */}
                <div>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" style={{ color: 'var(--accent)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-2">
                    {selectedTierData.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <span style={{ color: 'var(--success)' }}>✓</span>
                        <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Deliverables */}
                <div>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" style={{ color: 'var(--accent)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    You&apos;ll Get
                  </h3>
                  <ul className="space-y-2">
                    {selectedTierData.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <span style={{ color: 'var(--violet)' }}>→</span>
                        <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Included with all */}
              <div className="mt-8 pt-6" style={{ borderTop: '1px solid var(--glass-border)' }}>
                <p className="text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--text-tertiary)' }}>
                  Included with every package
                </p>
                <div className="flex flex-wrap gap-2">
                  {includedFeatures.slice(0, 4).map((feature) => (
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
            </div>
          )}
        </div>

        {/* Add-ons Section - Only show after tier selection */}
        <div className={`transition-all duration-500 ${selectedTier ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}>
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2">Enhance Your Package</h3>
            <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
              Add monthly services to grow your business
            </p>
          </div>

          {/* Add-on toggles */}
          <div className="max-w-2xl mx-auto space-y-3">
            {addons.map((addon) => {
              const isActive = selectedAddons.includes(addon.id);
              return (
                <button
                  key={addon.id}
                  onClick={() => handleAddonToggle(addon.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-200
                    ${isActive
                      ? 'bg-[var(--accent-subtle)]'
                      : 'bg-[var(--glass-bg)] hover:bg-[var(--glass-bg-hover)]'
                    }
                  `}
                  style={{
                    border: `1px solid ${isActive ? 'var(--accent)' : 'var(--glass-border)'}`,
                    boxShadow: isActive ? '0 0 20px var(--accent-glow)' : 'none'
                  }}
                >
                  {/* Toggle */}
                  <div className={`toggle-switch ${isActive ? 'active' : ''}`} />

                  {/* Info */}
                  <div className="flex-1 text-left">
                    <div className="font-medium">{addon.name}</div>
                    <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                      {addon.description}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <div className="font-semibold" style={{ color: isActive ? 'var(--accent-light)' : 'var(--text-primary)' }}>
                      {addon.priceRange}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Price Summary - Fixed on mobile, inline on desktop */}
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
