export type TierId = 'starter' | 'growth' | 'pro' | 'custom';

export interface Tier {
  id: TierId;
  name: string;
  price: number;
  priceDisplay: string;
  pages: string;
  days: string;
  description: string;
  popular?: boolean;
  isCustom?: boolean;
  features: string[];
  deliverables: string[];
}

export interface Addon {
  id: string;
  name: string;
  priceRange: string;
  avgPrice: number;
  description: string;
}

export const tiers: Tier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 1497,
    priceDisplay: '$1,497',
    pages: '3-5 pages',
    days: '7 days',
    description: 'Perfect for new businesses needing a professional online presence.',
    features: [
      'Custom responsive design',
      'Contact form integration',
      'Basic SEO setup',
      'Mobile optimized',
      '1 round of revisions',
    ],
    deliverables: [
      'Homepage',
      'About page',
      'Services/Products page',
      'Contact page',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 2497,
    priceDisplay: '$2,497',
    pages: '5-8 pages',
    days: '10 days',
    description: 'For established businesses wanting more leads and conversions.',
    popular: true,
    features: [
      'Premium responsive design',
      'Lead capture forms',
      'Google Analytics setup',
      'Blog/News section',
      '2 rounds of revisions',
      'Speed optimization',
    ],
    deliverables: [
      'Everything in Starter',
      'Portfolio/Gallery page',
      'Testimonials section',
      'FAQ page',
      'Blog setup',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 3997,
    priceDisplay: '$3,997',
    pages: '8-12 pages',
    days: '14 days',
    description: 'Full-featured website with advanced functionality and integrations.',
    features: [
      'Advanced custom design',
      'Scheduling integration',
      'Chat widget setup',
      'Advanced SEO',
      '3 rounds of revisions',
      'Performance optimization',
      'CRM integration',
    ],
    deliverables: [
      'Everything in Growth',
      'Service area pages',
      'Team/Staff page',
      'Case studies',
      'Resource center',
    ],
  },
  {
    id: 'custom',
    name: 'Custom',
    price: 5000,
    priceDisplay: '$5,000+',
    pages: 'Variable',
    days: 'TBD',
    description: 'Tailored solution for complex requirements and unique needs.',
    isCustom: true,
    features: [
      'Fully custom design',
      'Custom functionality',
      'Third-party integrations',
      'E-commerce capable',
      'Unlimited revisions',
      'Priority support',
    ],
    deliverables: [
      'Scoped to your needs',
      'Custom page count',
      'Unique features',
      'Dedicated timeline',
    ],
  },
];

export const addons: Addon[] = [
  {
    id: 'carePlan',
    name: 'Website Care Plan',
    priceRange: '$97-$197/mo',
    avgPrice: 147,
    description: 'Updates, security, backups, and minor edits handled for you.',
  },
  {
    id: 'localSeo',
    name: 'Local SEO',
    priceRange: '$297-$497/mo',
    avgPrice: 397,
    description: 'Google Business optimization, local citations, review management.',
  },
  {
    id: 'seoGrowth',
    name: 'SEO Growth',
    priceRange: '$500-$1,500/mo',
    avgPrice: 1000,
    description: 'Content strategy, link building, technical SEO for organic growth.',
  },
  {
    id: 'googleAds',
    name: 'Google Ads Management',
    priceRange: '15-20% + $300-$500',
    avgPrice: 400,
    description: 'Campaign setup, optimization, and ongoing management.',
  },
  {
    id: 'socialMedia',
    name: 'Social Media Management',
    priceRange: '$500-$1,500/mo',
    avgPrice: 1000,
    description: 'Content creation, posting, and community engagement.',
  },
];

export const includedFeatures = [
  'You own everything (domain, hosting, files)',
  'Mobile-responsive design',
  'SEO foundation setup',
  'Training included',
  'Speed optimized',
  'SSL certificate included',
  'No hidden fees',
  '30-day support after launch',
];

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
