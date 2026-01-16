'use client';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const sizes = {
    sm: { icon: 24, text: 'text-lg', gap: 'gap-1.5' },
    md: { icon: 32, text: 'text-xl', gap: 'gap-2' },
    lg: { icon: 40, text: 'text-2xl', gap: 'gap-3' },
  };

  const { icon, text, gap } = sizes[size];

  return (
    <div className={`flex items-center ${gap} ${className}`}>
      {/* Organic Scattered Network Icon */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--violet)" />
            <stop offset="50%" stopColor="var(--indigo)" />
            <stop offset="100%" stopColor="var(--deep-blue)" />
          </linearGradient>
        </defs>

        {/* Connection lines - organic asymmetric network */}
        <line x1="12" y1="8" x2="26" y2="14" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round" />
        <line x1="26" y1="14" x2="32" y2="26" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round" />
        <line x1="26" y1="14" x2="16" y2="22" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="22" x2="8" y2="32" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="22" x2="32" y2="26" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round" />

        {/* Nodes - scattered at varied positions with different sizes */}
        <circle cx="12" cy="8" r="4" fill="url(#logoGradient)" />
        <circle cx="26" cy="14" r="5" fill="url(#logoGradient)" />
        <circle cx="16" cy="22" r="4.5" fill="url(#logoGradient)" />
        <circle cx="32" cy="26" r="3.5" fill="url(#logoGradient)" />
        <circle cx="8" cy="32" r="4" fill="url(#logoGradient)" />
      </svg>

      {/* Text */}
      {showText && (
        <span className={`font-bold ${text} tracking-tight`}>
          <span className="text-white">So</span>
          <span className="gradient-text">Tech</span>
        </span>
      )}
    </div>
  );
}
