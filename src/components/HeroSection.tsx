const HeroSection = () => {
  return (
    <section className="relative bg-yellow pt-32 pb-20 border-b-2 border-foreground overflow-hidden">
      <div className="absolute inset-0 dot-pattern pointer-events-none" />
      <div className="relative container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="space-y-8">
          <span className="inline-block bg-card text-foreground font-satoshi font-bold text-sm px-4 py-2 rounded-full border-2 border-foreground shadow-brutal-sm">
            NEW: AI Content Assistant 2.0
          </span>
          <h1 className="font-cabinet font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9]">
            Ship your
            <br />
            <span className="text-stroke">ideas</span> faster.
          </h1>
          <p className="font-satoshi text-lg md:text-xl max-w-md leading-relaxed opacity-80">
            The all-in-one platform that turns your rough concepts into polished products. No friction, just flow.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-foreground text-card font-satoshi font-bold text-base px-8 py-4 border-2 border-foreground rounded-lg shadow-brutal-md btn-brutal-press">
              Get Started Free →
            </button>
            <button className="bg-card text-foreground font-satoshi font-bold text-base px-8 py-4 border-2 border-foreground rounded-lg shadow-brutal-sm btn-brutal-press">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Column - Browser Mockup */}
        <div className="bg-card border-2 border-foreground rounded-2xl shadow-brutal-lg overflow-hidden">
          <div className="bg-foreground px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <div className="ml-4 bg-charcoal/50 rounded-md px-3 py-1 text-xs text-sage font-satoshi">app.voltify.io/dashboard</div>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-sage/30 rounded-lg p-4 border border-foreground/10">
                <div className="text-xs font-satoshi text-muted-foreground mb-1">Revenue</div>
                <div className="font-cabinet font-extrabold text-2xl">$48.2k</div>
                <div className="text-xs text-green-600 font-bold mt-1">+24.5%</div>
              </div>
              <div className="bg-sage/30 rounded-lg p-4 border border-foreground/10">
                <div className="text-xs font-satoshi text-muted-foreground mb-1">Users</div>
                <div className="font-cabinet font-extrabold text-2xl">12.4k</div>
                <div className="text-xs text-green-600 font-bold mt-1">+18.2%</div>
              </div>
              <div className="bg-yellow/50 rounded-lg p-4 border border-foreground/10">
                <div className="text-xs font-satoshi text-muted-foreground mb-1">Growth</div>
                <div className="font-cabinet font-extrabold text-2xl">89%</div>
                <div className="text-xs text-green-600 font-bold mt-1">+5.1%</div>
              </div>
            </div>
            <div className="bg-charcoal rounded-lg p-4 h-32 flex items-end gap-1">
              {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                <div key={i} className="flex-1 bg-yellow rounded-sm" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-charcoal rounded-lg p-4">
                <div className="text-xs text-sage font-satoshi mb-2">Top Pages</div>
                <div className="space-y-1.5">
                  {['/landing', '/pricing', '/docs'].map((p) => (
                    <div key={p} className="flex justify-between text-xs text-card font-satoshi">
                      <span>{p}</span>
                      <span className="text-sage">{Math.floor(Math.random() * 5000)}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-sage/30 rounded-lg p-4">
                <div className="text-xs font-satoshi text-muted-foreground mb-2">Active Now</div>
                <div className="font-cabinet font-extrabold text-3xl">847</div>
                <div className="flex gap-1 mt-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-charcoal border-2 border-card -ml-1 first:ml-0" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
