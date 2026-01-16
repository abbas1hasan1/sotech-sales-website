'use client';

import { useEffect, useRef, useState } from 'react';
import { formatCurrency } from './pricing-data';

interface PriceSummaryProps {
  oneTimeTotal: number;
  monthlyTotal: number;
}

function useAnimatedNumber(value: number, duration: number = 400) {
  const [displayValue, setDisplayValue] = useState(value);
  const [isUpdating, setIsUpdating] = useState(false);
  const previousValue = useRef(value);

  useEffect(() => {
    if (previousValue.current === value) return;

    setIsUpdating(true);
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
        setIsUpdating(false);
      }
    }

    requestAnimationFrame(animate);
  }, [value, duration]);

  return { displayValue, isUpdating };
}

export default function PriceSummary({ oneTimeTotal, monthlyTotal }: PriceSummaryProps) {
  const { displayValue: displayOneTime, isUpdating: isUpdatingOneTime } = useAnimatedNumber(oneTimeTotal);
  const { displayValue: displayMonthly, isUpdating: isUpdatingMonthly } = useAnimatedNumber(monthlyTotal);

  const hasSelection = oneTimeTotal > 0 || monthlyTotal > 0;

  return (
    <div
      className="glass-card p-6 lg:sticky lg:top-8"
      role="region"
      aria-live="polite"
      aria-label="Price Summary"
    >
      <h3 className="text-lg font-semibold mb-6">Your Investment</h3>

      <div className="space-y-4">
        <div>
          <div className="flex items-baseline justify-between">
            <span style={{ color: 'var(--text-secondary)' }}>One-Time</span>
            <span
              className={`text-2xl font-bold animated-number ${isUpdatingOneTime ? 'updating' : ''}`}
              aria-label={`One-time cost: ${formatCurrency(oneTimeTotal)}`}
            >
              {formatCurrency(displayOneTime)}
            </span>
          </div>
          <p className="text-xs mt-1" style={{ color: 'var(--text-tertiary)' }}>
            Website build &amp; launch
          </p>
        </div>

        <div className="h-px" style={{ background: 'var(--glass-border)' }} />

        <div>
          <div className="flex items-baseline justify-between">
            <span style={{ color: 'var(--text-secondary)' }}>Monthly</span>
            <span
              className={`text-2xl font-bold animated-number ${isUpdatingMonthly ? 'updating' : ''}`}
              aria-label={`Monthly cost: ${formatCurrency(monthlyTotal)} per month`}
            >
              {formatCurrency(displayMonthly)}
              <span className="text-sm font-normal ml-1" style={{ color: 'var(--text-tertiary)' }}>/mo</span>
            </span>
          </div>
          <p className="text-xs mt-1" style={{ color: 'var(--text-tertiary)' }}>
            Ongoing services (optional)
          </p>
        </div>

        {monthlyTotal > 0 && (
          <>
            <div className="h-px" style={{ background: 'var(--glass-border)' }} />
            <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
              * Monthly prices shown are averages. Final pricing based on your specific needs.
            </p>
          </>
        )}
      </div>

      {!hasSelection && (
        <div className="mt-6 p-4 rounded-xl text-center" style={{ background: 'var(--accent-subtle)' }}>
          <p className="text-sm" style={{ color: 'var(--accent)' }}>
            Select a website package above to see your pricing
          </p>
        </div>
      )}
    </div>
  );
}
