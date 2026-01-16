export type TierId = 'landing' | 'website';

export interface Tier {
  id: TierId;
  name: string;
  price: number;
  priceDisplay: string;
  description: string;
  delivery: string;
  features: string[];
}

export interface MonthlyPackage {
  name: string;
  price: number;
  priceDisplay: string;
  description: string;
  features: string[];
}

export const tiers: Tier[] = [
  {
    id: 'landing',
    name: 'Landing Page',
    price: 1500,
    priceDisplay: '$1,500',
    description: 'Single high-converting page. Perfect for launches, campaigns, or focused offers.',
    delivery: '7 days',
    features: [
      'Custom responsive design',
      'Mobile optimized',
      'Contact/lead capture form',
      'Basic SEO setup',
      '1 round of revisions',
    ],
  },
  {
    id: 'website',
    name: 'Website',
    price: 3000,
    priceDisplay: '$3,000',
    description: 'Full multi-page site with all the essentials. Up to 5-7 custom pages.',
    delivery: '14 days',
    features: [
      'Everything in Landing Page',
      'Up to 5-7 custom pages',
      'Blog setup',
      'Google Analytics integration',
      '2 rounds of revisions',
    ],
  },
];

export const monthlyPackage: MonthlyPackage = {
  name: 'Monthly Growth Package',
  price: 797,
  priceDisplay: '$797/mo',
  description: 'Keep your site fresh and climbing the rankings.',
  features: [
    '2 content revisions per month',
    '1 blog post per month',
    'SEO optimization & monitoring',
    'Priority support',
  ],
};

export const includedFeatures = [
  'You own everything',
  'Mobile-responsive',
  'SEO foundation',
  'Training included',
];

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
