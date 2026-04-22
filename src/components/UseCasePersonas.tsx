import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { badge: "Full-Stack", title: "Customia", desc: "A Django-based jewellery storefront with React frontend, PostgreSQL database, and WhatsApp API integration for seamless ordering.", bg: "bg-sage", text: "text-foreground", link: "https://customia.in" },
  { badge: "Backend", title: "AFQ Islamic Institute Website. ", desc: "Built a responsive website using React.js, Vite, and Framer Motion, featuring smooth animations and structured content for improved user experience.", bg: "bg-yellow", text: "text-foreground", link: "https://afq-gold.vercel.app", shadow: true },
  { badge: "Full-Stack", title: "Portfolio Projects", desc: "Various web applications showcasing frontend excellence, backend architecture, and modern development practices across multiple tech stacks.", bg: "bg-[#272727]", text: "text-card", link: "https://portfolio-zaid-nadaf.vercel.app" },
];

const UseCasePersonas = () => {
  return (
    <section id="projects" className="bg-card py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="font-cabinet font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-tighter text-center mb-12 sm:mb-16"
        >
          Featured <span className="text-stroke">Projects</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              key={i} 
              className={`${p.bg} ${p.text} p-6 sm:p-8 rounded-xl border-2 border-foreground ${p.shadow ? 'shadow-brutal-md' : 'shadow-brutal-sm'} transition-shadow hover:shadow-brutal-lg flex flex-col group relative`}
            >
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={`Visit ${p.title}`}></a>
              )}
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <span className="inline-block bg-card text-foreground font-satoshi font-bold text-xs px-3 py-1.5 rounded-full border border-foreground">
                  {p.badge}
                </span>
                {p.link && (
                  <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center -mr-2 -mt-2 group-hover:bg-foreground group-hover:text-card transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                )}
              </div>
              <h3 className="font-cabinet font-extrabold text-xl sm:text-2xl tracking-tighter mb-2 sm:mb-3">{p.title}</h3>
              <p className="font-satoshi text-sm sm:text-base leading-relaxed opacity-80 flex-grow">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasePersonas;
