'use client';

import { Addon } from './pricing-data';

interface AddonCardProps {
  addon: Addon;
  isSelected: boolean;
  onToggle: () => void;
}

export default function AddonCard({ addon, isSelected, onToggle }: AddonCardProps) {
  return (
    <div
      role="checkbox"
      aria-checked={isSelected}
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle();
        }
      }}
      className={`glass-card selectable-card p-5 flex items-start gap-4 ${isSelected ? 'selected' : ''}`}
    >
      <div className={`checkbox-indicator ${isSelected ? 'checked' : ''}`}>
        {isSelected && (
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-2 flex-wrap">
          <h4 className="font-semibold">{addon.name}</h4>
          <span className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
            {addon.priceRange}
          </span>
        </div>
        <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
          {addon.description}
        </p>
      </div>
    </div>
  );
}
