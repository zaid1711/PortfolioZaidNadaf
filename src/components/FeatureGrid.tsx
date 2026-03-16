import { Code2, Database, GitBranch, Layout, Server, Zap } from "lucide-react";

const skills = [
  { icon: Code2, title: "Frontend Development", desc: "React, JavaScript, HTML5, CSS3, Tailwind CSS for building interactive and responsive user interfaces." },
  { icon: Server, title: "Backend Development", desc: "Python, Django, Node.js for building scalable APIs and robust server-side applications." },
  { icon: Database, title: "Database Design", desc: "MySQL, PostgreSQL expertise in designing efficient schemas and optimizing queries." },
  { icon: Layout, title: "UI/UX Design", desc: "Creating clean, intuitive interfaces that users love. Responsive design across all devices." },
  { icon: GitBranch, title: "Version Control", desc: "Git, GitHub for collaborative development and maintaining code quality throughout projects." },
  { icon: Zap, title: "Performance Optimization", desc: "Building fast, efficient applications with optimized code, lazy loading, and caching strategies." },
];

const FeatureGrid = () => {
  return (
    <section id="skills" className="bg-yellow py-16 sm:py-24 border-y-2 border-foreground relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern pointer-events-none" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="font-cabinet font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-tighter text-center mb-3 sm:mb-4">
          My Core Skills
        </h2>
        <p className="font-satoshi text-base sm:text-lg text-center opacity-70 mb-12 sm:mb-16 max-w-xl mx-auto">
          A diverse toolkit spanning frontend, backend, and everything in between.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skills.map((skill, i) => (
            <div key={i} className="group bg-card p-6 sm:p-8 border-2 border-foreground rounded-xl shadow-brutal-sm hover:shadow-brutal-md transition-shadow duration-200">
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-sage rounded-lg border-2 border-foreground flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-yellow transition-colors">
                <skill.icon className="w-6 sm:w-7 h-6 sm:h-7" />
              </div>
              <h3 className="font-cabinet font-extrabold text-xl sm:text-2xl tracking-tighter mb-2 sm:mb-3">{skill.title}</h3>
              <p className="font-satoshi text-sm sm:text-base text-muted-foreground leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
