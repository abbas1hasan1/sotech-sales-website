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
      {/* SoTech 5-Node S-Network Logo */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Connection lines - S-shaped network pattern */}
        <line x1="10" y1="6" x2="22" y2="14" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="22" y1="14" x2="10" y2="22" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="22" y1="14" x2="30" y2="22" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="10" y1="22" x2="22" y2="34" stroke="white" strokeWidth="2.5" strokeLinecap="round" />

        {/* Nodes - 5 nodes forming S-shaped network */}
        <circle cx="10" cy="6" r="4" fill="white" />
        <circle cx="22" cy="14" r="4.5" fill="white" />
        <circle cx="10" cy="22" r="4" fill="white" />
        <circle cx="30" cy="22" r="4" fill="white" />
        <circle cx="22" cy="34" r="4" fill="white" />
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
