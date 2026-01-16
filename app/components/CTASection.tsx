export default function CTASection() {
  return (
    <section className="section pb-32">
      <div className="container">
        <div className="glass-card p-8 md:p-12 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
            Let&apos;s discuss your project and get you a website that actually gets results.
          </p>

          <button
            disabled
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold transition-all opacity-50 cursor-not-allowed"
            style={{
              background: 'var(--accent)',
              color: '#fff',
            }}
          >
            <span>Schedule a Call</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          <p className="text-sm mt-4" style={{ color: 'var(--text-tertiary)' }}>
            Coming soon &mdash; button functionality in development
          </p>

          <div className="mt-8 pt-8" style={{ borderTop: '1px solid var(--glass-border)' }}>
            <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
              Questions? Reach out directly
            </p>
            <p className="mt-2 font-medium" style={{ color: 'var(--text-secondary)' }}>
              hello@sotech.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
