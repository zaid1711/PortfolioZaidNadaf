import { X, Check } from "lucide-react";
import { motion } from "framer-motion";

const ProblemSolution = () => {
  const challenges = [
    "Websites that break on mobile devices",
    "Slow, laggy applications frustrating users",
    "Backend APIs that aren't scalable",
    "Code that's hard to maintain and debug",
  ];

  const myApproach = [
    "Mobile-first design + rigorous testing across devices",
    "Optimization: lazy loading, caching, efficient queries",
    "RESTful APIs with proper database indexing & caching",
    "Clean code standards, documentation, and version control",
  ];

  return (
    <section className="bg-card py-16 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="font-cabinet font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-tighter text-center mb-12 sm:mb-16"
        >
          Real Problems. <span className="text-stroke">Practical Solutions.</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Challenges Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            className="bg-muted rounded-3xl p-6 sm:p-8 border-2 border-dashed border-foreground/30 opacity-70"
          >
            <h3 className="font-cabinet font-extrabold text-xl sm:text-2xl tracking-tighter mb-4 sm:mb-6 text-foreground/60">The Problems</h3>
            <ul className="space-y-3 sm:space-y-4">
              {challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3 font-satoshi text-sm sm:text-base text-foreground/60">
                  <X className="w-4 sm:w-5 h-4 sm:h-5 text-destructive mt-0.5 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Approach Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.3 }}
            className="bg-yellow rounded-3xl p-6 sm:p-8 border-2 border-foreground shadow-brutal-md"
          >
            <h3 className="font-cabinet font-extrabold text-xl sm:text-2xl tracking-tighter mb-4 sm:mb-6">How I Solve It</h3>
            <ul className="space-y-3 sm:space-y-4">
              {myApproach.map((approach, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3 font-satoshi font-medium text-sm sm:text-base">
                  <Check className="w-4 sm:w-5 h-4 sm:h-5 mt-0.5 shrink-0" />
                  {approach}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
