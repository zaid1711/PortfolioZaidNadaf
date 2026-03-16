const projects = [
  { badge: "Full-Stack", title: "Customia", desc: "A Django-based jewellery storefront with React frontend, PostgreSQL database, and WhatsApp API integration for seamless ordering.", bg: "bg-sage", text: "text-foreground" },
  { badge: "Backend", title: "E-Commerce Core", desc: "Robust Node.js API with JWT authentication, MongoDB integration, and Stripe payment processing for scalable e-commerce platforms.", bg: "bg-yellow", text: "text-foreground", shadow: true },
  { badge: "Full-Stack", title: "Portfolio Projects", desc: "Various web applications showcasing frontend excellence, backend architecture, and modern development practices across multiple tech stacks.", bg: "bg-[#272727]", text: "text-card" },
];

const UseCasePersonas = () => {
  return (
    <section id="projects" className="bg-card py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="font-cabinet font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-tighter text-center mb-12 sm:mb-16">
          Featured <span className="text-stroke">Projects</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <div key={i} className={`${p.bg} ${p.text} p-6 sm:p-8 rounded-xl border-2 border-foreground ${p.shadow ? 'shadow-brutal-md' : ''}`}>
              <span className="inline-block bg-card text-foreground font-satoshi font-bold text-xs px-3 py-1.5 rounded-full border border-foreground mb-4 sm:mb-6">
                {p.badge}
              </span>
              <h3 className="font-cabinet font-extrabold text-xl sm:text-2xl tracking-tighter mb-2 sm:mb-3">{p.title}</h3>
              <p className="font-satoshi text-sm sm:text-base leading-relaxed opacity-80">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasePersonas;
