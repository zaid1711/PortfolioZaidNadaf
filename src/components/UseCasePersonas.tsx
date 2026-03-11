const personas = [
  { badge: "Marketers", title: "10x your content output", desc: "Automate social scheduling, email campaigns, and analytics reporting so you can focus on strategy.", bg: "bg-sage", text: "text-foreground" },
  { badge: "Founders", title: "Ship products faster", desc: "From idea to launch in days. Manage your entire product pipeline without switching between 12 different tools.", bg: "bg-yellow", text: "text-foreground", shadow: true },
  { badge: "Agencies", title: "Scale your operations", desc: "White-label dashboards, automated client reporting, and team collaboration that actually works.", bg: "bg-[#272727]", text: "text-card" },
];

const UseCasePersonas = () => {
  return (
    <section className="bg-card py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="font-cabinet font-extrabold text-4xl md:text-5xl tracking-tighter text-center mb-16">
          Built for <span className="text-stroke">everyone</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {personas.map((p, i) => (
            <div key={i} className={`${p.bg} ${p.text} p-8 rounded-xl border-2 border-foreground ${p.shadow ? 'shadow-brutal-md' : ''}`}>
              <span className="inline-block bg-card text-foreground font-satoshi font-bold text-xs px-3 py-1.5 rounded-full border border-foreground mb-6">
                {p.badge}
              </span>
              <h3 className="font-cabinet font-extrabold text-2xl tracking-tighter mb-3">{p.title}</h3>
              <p className="font-satoshi leading-relaxed opacity-80">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasePersonas;
