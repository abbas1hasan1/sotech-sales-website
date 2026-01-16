'use client';

export default function BrowserMockup() {
  return (
    <div className="browser-mockup">
      {/* Browser frame */}
      <div
        className="rounded-xl overflow-hidden w-full max-w-[400px] lg:max-w-[540px]"
        style={{
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 60px var(--accent-glow)',
        }}
      >
        {/* Browser header */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{
            background: 'rgba(0, 0, 0, 0.3)',
            borderBottom: '1px solid var(--glass-border)',
          }}
        >
          {/* Traffic lights */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
            <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
          </div>

          {/* URL bar */}
          <div
            className="flex-1 mx-4 px-3 py-1.5 rounded-md text-xs flex items-center gap-2"
            style={{ background: 'rgba(255, 255, 255, 0.05)' }}
          >
            <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span style={{ color: 'var(--text-tertiary)' }}>yoursite.com</span>
          </div>
        </div>

        {/* Browser content - animated website preview */}
        <div
          className="relative overflow-hidden h-[280px] lg:h-[320px]"
          style={{ background: 'linear-gradient(180deg, #0f0f1a 0%, #1a1a2e 100%)' }}
        >
          {/* Animated content container with auto-scroll */}
          <div className="browser-content-scroll">
            {/* Hero section mock */}
            <div className="p-6 space-y-4">
              {/* Nav bar */}
              <div className="flex items-center justify-between">
                <div
                  className="w-20 h-5 rounded"
                  style={{ background: 'var(--gradient-primary)', opacity: 0.8 }}
                />
                <div className="flex gap-2">
                  <div className="w-12 h-3 rounded bg-white/10" />
                  <div className="w-12 h-3 rounded bg-white/10" />
                  <div className="w-12 h-3 rounded bg-white/10" />
                </div>
              </div>

              {/* Hero text */}
              <div className="pt-8 space-y-3 browser-element-fade">
                <div className="w-3/4 h-6 rounded bg-white/20" />
                <div className="w-1/2 h-6 rounded" style={{ background: 'var(--gradient-primary)', opacity: 0.6 }} />
                <div className="w-2/3 h-3 rounded bg-white/10 mt-4" />
                <div className="w-1/2 h-3 rounded bg-white/10" />
              </div>

              {/* CTA button */}
              <div
                className="w-28 h-8 rounded-lg mt-6 browser-element-fade"
                style={{ background: 'var(--accent)', animationDelay: '0.3s' }}
              />

              {/* Cards section */}
              <div className="grid grid-cols-3 gap-3 pt-8 browser-element-fade" style={{ animationDelay: '0.6s' }}>
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg"
                    style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
                  >
                    <div className="w-8 h-8 rounded-lg mb-2" style={{ background: `var(--${i === 1 ? 'violet' : i === 2 ? 'indigo' : 'deep-blue'})`, opacity: 0.5 }} />
                    <div className="w-full h-2 rounded bg-white/10 mb-1" />
                    <div className="w-2/3 h-2 rounded bg-white/10" />
                  </div>
                ))}
              </div>

              {/* Stats section */}
              <div className="flex justify-between pt-6 browser-element-fade" style={{ animationDelay: '0.9s' }}>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="text-center">
                    <div className="w-12 h-5 mx-auto rounded bg-white/20 mb-1" />
                    <div className="w-16 h-2 mx-auto rounded bg-white/10" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gradient overlay at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-16"
            style={{ background: 'linear-gradient(to top, #1a1a2e, transparent)' }}
          />
        </div>
      </div>

      {/* Reflection/glow underneath */}
      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 blur-xl opacity-30"
        style={{ background: 'var(--accent)' }}
      />
    </div>
  );
}
