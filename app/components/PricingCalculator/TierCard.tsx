'use client';

import { Tier } from './pricing-data';

interface TierCardProps {
  tier: Tier;
  isSelected: boolean;
  onSelect: () => void;
}

export default function TierCard({ tier, isSelected, onSelect }: TierCardProps) {
  return (
    <div
      role="radio"
      aria-checked={isSelected}
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect();
        }
      }}
      className={`glass-card selectable-card relative p-6 ${isSelected ? 'selected' : ''} ${tier.popular ? 'popular' : ''}`}
    >
      {tier.popular && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide"
          style={{ background: 'var(--popular)', color: '#000' }}
        >
          Most Popular
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold">{tier.name}</h3>
          <p className="text-sm mt-1" style={{ color: 'var(--text-tertiary)' }}>
            {tier.pages} &middot; {tier.days}
          </p>
        </div>
        <div className={`radio-indicator ${isSelected ? 'checked' : ''}`} />
      </div>

      <div className="mb-4">
        <span className="text-3xl font-bold">{tier.priceDisplay}</span>
        {!tier.isCustom && <span className="text-sm ml-1" style={{ color: 'var(--text-tertiary)' }}>one-time</span>}
      </div>

      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
        {tier.description}
      </p>

      {tier.isCustom && (
        <p className="text-xs mt-3 italic" style={{ color: 'var(--text-tertiary)' }}>
          Contact us for a custom quote
        </p>
      )}
    </div>
  );
}
