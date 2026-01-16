'use client';

import { useState } from 'react';
import { tiers, addons, TierId } from './pricing-data';
import TierCard from './TierCard';
import AddonCard from './AddonCard';
import PriceSummary from './PriceSummary';

export default function PricingCalculator() {
  const [selectedTier, setSelectedTier] = useState<TierId | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const handleTierSelect = (tierId: TierId) => {
    setSelectedTier(tierId);
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

  return (
    <section className="section" id="calculator">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Build Your Package</h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Select your website tier and any ongoing services you need. Your total updates instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left side - Selection */}
          <div className="lg:col-span-2 space-y-10">
            {/* Tier Selection */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: 'var(--accent)', color: '#000' }}>
                  1
                </span>
                Choose Your Website Package
              </h3>
              <div
                className="grid sm:grid-cols-2 gap-4"
                role="radiogroup"
                aria-label="Website packages"
              >
                {tiers.map((tier) => (
                  <TierCard
                    key={tier.id}
                    tier={tier}
                    isSelected={selectedTier === tier.id}
                    onSelect={() => handleTierSelect(tier.id)}
                  />
                ))}
              </div>
            </div>

            {/* Add-ons Selection */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: 'var(--accent)', color: '#000' }}>
                  2
                </span>
                Add Monthly Services
                <span className="text-sm font-normal ml-2" style={{ color: 'var(--text-tertiary)' }}>
                  (optional)
                </span>
              </h3>
              <div
                className="space-y-3"
                role="group"
                aria-label="Monthly add-on services"
              >
                {addons.map((addon) => (
                  <AddonCard
                    key={addon.id}
                    addon={addon}
                    isSelected={selectedAddons.includes(addon.id)}
                    onToggle={() => handleAddonToggle(addon.id)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Summary */}
          <div className="lg:col-span-1">
            <PriceSummary
              oneTimeTotal={oneTimeTotal}
              monthlyTotal={monthlyTotal}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
