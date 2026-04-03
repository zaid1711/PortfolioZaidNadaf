import { motion } from "framer-motion";

const brands = ['React', 'Django', 'Python', 'JavaScript', 'TypeScript', 'PostgreSQL', 'MySQL', 'Tailwind', 'Git'];

const SocialProofMarquee = () => {
  return (
    <section className="bg-charcoal border-b-2 border-foreground py-4 sm:py-6 overflow-hidden">
      <div className="flex marquee whitespace-nowrap">
        {[...brands, ...brands, ...brands].map((tech, i) => (
          <motion.span 
            whileHover={{ scale: 1.1, color: "#e1e1d1", textShadow: "0px 0px 8px rgba(225,225,209,0.3)" }}
            key={i} 
            className="font-cabinet font-extrabold text-xl sm:text-2xl text-sage/50 mx-6 sm:mx-12 tracking-tighter cursor-default transition-colors duration-300 inline-block"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default SocialProofMarquee;
