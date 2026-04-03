import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Analyze", desc: "I start by understanding the requirements, user needs, and project goals. Planning is key to success.", color: "border-sage" },
  { number: "02", title: "Develop", desc: "Using modern tech stack, I build clean, maintainable code with focus on performance and user experience.", color: "border-yellow" },
  { number: "03", title: "Deploy", desc: "Launch to production with comprehensive testing. I ensure the app runs smoothly and scales as needed.", color: "border-card" },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-charcoal py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="font-cabinet font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-tighter text-center text-card mb-3 sm:mb-4"
        >
          My Process
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-satoshi text-base sm:text-lg text-center text-sage/70 mb-12 sm:mb-20 max-w-xl mx-auto"
        >
          From concept to deployment in three simple steps.
        </motion.p>
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-[#272727] overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
              className="w-full h-full bg-sage/30"
            />
          </div>
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
            {steps.map((s, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.2, type: "spring", bounce: 0.4 }}
                key={i} 
                className="text-center"
              >
                <div className={`w-20 sm:w-24 h-20 sm:h-24 mx-auto rounded-full border-4 ${s.color} flex items-center justify-center mb-6 sm:mb-8 relative z-10 bg-charcoal hover:scale-110 transition-transform duration-300`}>
                  <span className="font-cabinet font-extrabold text-2xl sm:text-3xl text-card">{s.number}</span>
                </div>
                <h3 className="font-cabinet font-extrabold text-xl sm:text-2xl tracking-tighter text-card mb-2 sm:mb-3">{s.title}</h3>
                <p className="font-satoshi text-sm sm:text-base text-sage/70 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
