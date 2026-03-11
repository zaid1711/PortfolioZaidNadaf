const steps = [
  { number: "01", title: "Connect", desc: "Link your existing tools and data sources in seconds. No complex setup required.", color: "border-sage" },
  { number: "02", title: "Automate", desc: "Build powerful workflows with our visual editor. AI suggests optimizations as you go.", color: "border-yellow" },
  { number: "03", title: "Scale", desc: "Launch to your team and watch productivity soar. Monitor everything in real-time.", color: "border-card" },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-charcoal py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="font-cabinet font-extrabold text-4xl md:text-5xl tracking-tighter text-center text-card mb-4">
          How it works
        </h2>
        <p className="font-satoshi text-lg text-center text-sage/70 mb-20 max-w-xl mx-auto">
          Get up and running in three simple steps.
        </p>
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-[#272727]" />
          <div className="grid lg:grid-cols-3 gap-12">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className={`w-24 h-24 mx-auto rounded-full border-4 ${s.color} flex items-center justify-center mb-8 relative z-10 bg-charcoal`}>
                  <span className="font-cabinet font-extrabold text-3xl text-card">{s.number}</span>
                </div>
                <h3 className="font-cabinet font-extrabold text-2xl tracking-tighter text-card mb-3">{s.title}</h3>
                <p className="font-satoshi text-sage/70 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
