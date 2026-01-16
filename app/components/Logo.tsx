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
      {/* Network/Molecule Icon */}
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

        {/* Connection lines - forming an S-like network */}
        <line x1="10" y1="10" x2="28" y2="10" stroke="url(#logoGradient)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="10" y1="10" x2="10" y2="20" stroke="url(#logoGradient)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="10" y1="20" x2="28" y2="20" stroke="url(#logoGradient)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="28" y1="20" x2="28" y2="30" stroke="url(#logoGradient)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="10" y1="30" x2="28" y2="30" stroke="url(#logoGradient)" strokeWidth="2.5" strokeLinecap="round" />

        {/* Nodes - balanced positions forming S shape */}
        <circle cx="10" cy="10" r="4.5" fill="url(#logoGradient)" />
        <circle cx="28" cy="10" r="4" fill="url(#logoGradient)" />
        <circle cx="10" cy="20" r="4" fill="url(#logoGradient)" />
        <circle cx="28" cy="20" r="5" fill="url(#logoGradient)" />
        <circle cx="28" cy="30" r="4" fill="url(#logoGradient)" />
        <circle cx="10" cy="30" r="4.5" fill="url(#logoGradient)" />
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
