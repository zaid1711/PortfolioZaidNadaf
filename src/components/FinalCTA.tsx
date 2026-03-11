const FinalCTA = () => {
  return (
    <section className="bg-yellow py-24 border-y-2 border-foreground relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern pointer-events-none" />
      <div className="relative container mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-cabinet font-extrabold text-5xl md:text-7xl tracking-tighter mb-6">
          Ready to ship?
        </h2>
        <p className="font-satoshi text-lg opacity-70 mb-10 max-w-lg mx-auto">
          Join 10,000+ teams already using Voltify to move faster. Start free, no credit card required.
        </p>
        <button className="bg-foreground text-card font-satoshi font-bold text-lg px-10 py-5 border-2 border-foreground rounded-lg shadow-brutal-md btn-brutal-press">
          Start Your Free Trial →
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;
