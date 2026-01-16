export default function Hero() {
  return (
    <section className="section pt-32 pb-20">
      <div className="container text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Your Custom Website
          <span className="block mt-2 bg-gradient-to-r from-[var(--accent)] to-[var(--success)] bg-clip-text text-transparent">
            Investment
          </span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Transparent, straightforward pricing. See exactly what you&apos;ll pay upfront &mdash; no hidden fees, no surprises, no corporate BS.
        </p>

        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}>
            <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse"></span>
            <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Configure your package below</span>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <svg
            className="w-6 h-6 animate-bounce"
            style={{ color: 'var(--text-tertiary)' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
