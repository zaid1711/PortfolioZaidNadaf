const brands = ['React', 'Django', 'Python', 'JavaScript', 'TypeScript', 'PostgreSQL', 'MySQL', 'Node.js', 'Tailwind', 'Git'];

const SocialProofMarquee = () => {
  return (
    <section className="bg-charcoal border-b-2 border-foreground py-4 sm:py-6 overflow-hidden\">
      <div className="flex marquee whitespace-nowrap\">
        {[...brands, ...brands].map((tech, i) => (
          <span key={i} className="font-cabinet font-extrabold text-xl sm:text-2xl text-sage/50 mx-6 sm:mx-12 tracking-tighter\">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SocialProofMarquee;
