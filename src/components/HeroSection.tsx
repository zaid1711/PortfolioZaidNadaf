const HeroSection = () => {
  return (
    <section className="relative bg-yellow pt-20 sm:pt-28 pb-12 sm:pb-16 border-b-2 border-foreground overflow-hidden min-h-screen flex items-center lg:min-h-auto">
      <div className="absolute inset-0 dot-pattern pointer-events-none" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
        {/* Left Column */}
        <div className="space-y-5 sm:space-y-6">
          <span className="inline-block bg-card text-foreground font-satoshi font-bold text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border-2 border-foreground shadow-brutal-sm">
            Full-Stack Developer • Prompt Engineer
          </span>
          <h1 className="font-cabinet font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter leading-[0.9]">
            I build
            <br />
            <span className="text-stroke">digital</span> experiences.
          </h1>
          <p className="font-satoshi text-sm sm:text-base md:text-lg max-w-md leading-relaxed opacity-80">
            Final year CS student at Sharad Institute of Technology, passionate about modern web technologies and creating seamless user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <a href="#projects" className="inline-flex items-center justify-center bg-foreground text-card font-satoshi font-bold text-xs sm:text-sm px-5 sm:px-7 py-2.5 sm:py-3 border-2 border-foreground rounded-lg shadow-brutal-md btn-brutal-press hover:opacity-80 transition-opacity w-full sm:w-auto whitespace-nowrap">
              View My Work →
            </a>
            <a href="#cta" className="inline-flex items-center justify-center bg-card text-foreground font-satoshi font-bold text-xs sm:text-sm px-5 sm:px-7 py-2.5 sm:py-3 border-2 border-foreground rounded-lg shadow-brutal-sm btn-brutal-press hover:opacity-80 transition-opacity w-full sm:w-auto">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Column - Portfolio Stats */}
        <div className="hidden lg:block bg-card border-2 border-foreground rounded-2xl shadow-brutal-lg overflow-hidden">
          <div className="bg-foreground px-3 py-2 flex items-center gap-1.5 overflow-x-auto">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] flex-shrink-0" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e] flex-shrink-0" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840] flex-shrink-0" />
            <div className="ml-2 bg-charcoal/50 rounded-md px-2 py-1 text-xs text-sage font-satoshi flex-shrink-0">zaidnadaf.dev</div>
          </div>
          <div className="p-4 space-y-3">
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-sage/30 rounded-lg p-2.5 border border-foreground/10">
                <div className="text-xs font-satoshi text-muted-foreground mb-0.5">Projects</div>
                <div className="font-cabinet font-extrabold text-lg">4+</div>
              </div>
              <div className="bg-sage/30 rounded-lg p-2.5 border border-foreground/10">
                <div className="text-xs font-satoshi text-muted-foreground mb-0.5">Exp</div>
                <div className="font-cabinet font-extrabold text-lg">1+</div>
              </div>
              <div className="bg-yellow/50 rounded-lg p-2.5 border border-foreground/10">
                <div className="text-xs font-satoshi text-muted-foreground mb-0.5">Skills</div>
                <div className="font-cabinet font-extrabold text-lg">8+</div>
              </div>
            </div>
            <div className="bg-charcoal rounded-lg p-3 space-y-2">
              <div className="text-xs text-sage font-satoshi">Tech Stack</div>
              <div className="flex flex-wrap gap-1.5">
                {['React', 'Django', 'Python', 'JavaScript'].map((tech) => (
                  <div key={tech} className="text-xs font-satoshi text-card bg-yellow/30 px-2 py-1 rounded border border-yellow/50">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-charcoal rounded-lg p-2.5">
                <div className="text-xs text-sage font-satoshi mb-1">Latest</div>
                <div className="space-y-1">
                  <div className="text-xs text-card font-satoshi font-bold">Customia</div>
                  <div className="text-xs text-sage/70 font-satoshi">E-commerce</div>
                </div>
              </div>
              <div className="bg-sage/30 rounded-lg p-2.5">
                <div className="text-xs font-satoshi text-muted-foreground mb-1">Location</div>
                <div className="font-cabinet font-extrabold text-sm">India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
