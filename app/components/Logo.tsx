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

        {/* Connection lines */}
        <line x1="10" y1="8" x2="20" y2="16" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="8" x2="10" y2="24" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="24" x2="20" y2="16" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="24" x2="20" y2="32" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="16" x2="30" y2="16" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round" />

        {/* Nodes */}
        <circle cx="10" cy="8" r="4" fill="url(#logoGradient)" />
        <circle cx="20" cy="16" r="5" fill="url(#logoGradient)" />
        <circle cx="10" cy="24" r="4" fill="url(#logoGradient)" />
        <circle cx="20" cy="32" r="4" fill="url(#logoGradient)" />
        <circle cx="30" cy="16" r="3" fill="url(#logoGradient)" />
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
