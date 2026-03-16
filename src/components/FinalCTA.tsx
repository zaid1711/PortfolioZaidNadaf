const FinalCTA = () => {
  return (
    <section id="cta" className="bg-yellow py-16 sm:py-24 border-y-2 border-foreground relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern pointer-events-none" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="font-cabinet font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-4 sm:mb-6">
          Let's collaborate
        </h2>
        <p className="font-satoshi text-base sm:text-lg opacity-70 mb-8 sm:mb-10 max-w-lg mx-auto">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out anytime!
        </p>
        <a href="mailto:nadafz811@gmail.com" className="inline-flex items-center justify-center bg-foreground text-card font-satoshi font-bold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 border-2 border-foreground rounded-lg shadow-brutal-md btn-brutal-press hover:shadow-brutal-lg transition-shadow w-full sm:w-auto">
          Send me an Email →
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
