import { motion, Variants } from "framer-motion";

const HeroSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section className="relative bg-yellow pt-24 pb-12 sm:pt-32 md:pt-36 lg:pt-0 lg:pb-0 border-b-2 border-foreground overflow-hidden lg:h-screen lg:min-h-[700px] flex items-center">
      <div className="absolute inset-0 dot-pattern pointer-events-none" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-12 gap-8 lg:gap-8 items-center mt-8 lg:mt-16">
        {/* Left Column */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-6 lg:space-y-8 z-10 relative lg:col-span-6 xl:col-span-5"
        >
          <motion.span variants={itemVariants} className="inline-block bg-card text-foreground font-satoshi font-bold text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border-2 border-foreground shadow-brutal-sm">
            Full-Stack Developer • Prompt Engineer
          </motion.span>
          <motion.h1 variants={itemVariants} className="font-cabinet font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.5rem] tracking-tighter leading-[0.95]">
            I build
            <br />
            <span className="text-stroke">digital</span> 
            <br className="hidden lg:block xl:hidden"/> experiences.
          </motion.h1>
          <motion.p variants={itemVariants} className="font-satoshi text-sm sm:text-base md:text-lg max-w-md leading-relaxed opacity-80">
            Final year CS student at Sharad Institute of Technology, passionate about modern web technologies and creating seamless user experiences.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-5 pt-2">
            <a href="#projects" className="inline-flex items-center justify-center bg-foreground text-card font-satoshi font-bold text-xs sm:text-sm px-5 sm:px-7 py-2.5 sm:py-3 border-2 border-foreground rounded-lg shadow-brutal-md btn-brutal-press hover:opacity-80 transition-opacity w-full sm:w-auto whitespace-nowrap">
              View My Work →
            </a>
            <a href="#cta" className="inline-flex items-center justify-center bg-card text-foreground font-satoshi font-bold text-xs sm:text-sm px-5 sm:px-7 py-2.5 sm:py-3 border-2 border-foreground rounded-lg shadow-brutal-sm btn-brutal-press hover:opacity-80 transition-opacity w-full sm:w-auto">
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column - Portfolio Stats */}
        <motion.div 
          initial={{ opacity: 0, x: 50, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring", bounce: 0.4 }}
          className="bg-card border-2 border-foreground rounded-2xl shadow-brutal-lg overflow-hidden z-0 lg:col-span-6 xl:col-span-7"
        >
          <div className="bg-foreground px-3 py-2 flex items-center gap-1.5 overflow-x-auto">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] flex-shrink-0" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e] flex-shrink-0" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840] flex-shrink-0" />
            <div className="ml-2 bg-charcoal/50 rounded-md px-2 py-1 text-xs text-sage font-satoshi flex-shrink-0">zaidnadaf.dev</div>
          </div>
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-sage/30 rounded-lg p-4 border border-foreground/10">
                <div className="text-xs font-satoshi text-muted-foreground mb-2">Projects</div>
                <div className="font-cabinet font-extrabold text-xl">4+</div>
              </div>
              <div className="bg-sage/30 rounded-lg p-4 border border-foreground/10">
                <div className="text-xs font-satoshi text-muted-foreground mb-2">Exp</div>
                <div className="font-cabinet font-extrabold text-xl">1+</div>
              </div>
              <div className="bg-yellow/50 rounded-lg p-4 border border-foreground/10">
                <div className="text-xs font-satoshi text-muted-foreground mb-2">Skills</div>
                <div className="font-cabinet font-extrabold text-xl">8+</div>
              </div>
            </div>
            <div className="bg-charcoal rounded-lg p-4 space-y-3">
              <div className="text-xs text-sage font-satoshi font-bold">Tech Stack</div>
              <div className="flex flex-wrap gap-2.5">
                {['React', 'Django', 'Python', 'JavaScript'].map((tech) => (
                  <div key={tech} className="text-xs font-satoshi text-card bg-yellow/30 px-3 py-2 rounded border border-yellow/50">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-charcoal rounded-lg p-4">
                <div className="text-xs text-sage font-satoshi font-bold mb-2.5">Latest</div>
                <div className="space-y-2">
                  <div className="text-xs text-card font-satoshi font-bold">Customia</div>
                  <div className="text-xs text-sage/70 font-satoshi">E-commerce</div>
                </div>
              </div>
              <div className="bg-sage/30 rounded-lg p-4">
                <div className="text-xs font-satoshi text-muted-foreground font-bold mb-2.5">Location</div>
                <div className="font-cabinet font-extrabold text-sm">India</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
