import { X, Check } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    "Wasting hours on repetitive manual tasks",
    "Scattered tools that don't talk to each other",
    "Losing leads because follow-ups slip through cracks",
    "No visibility into what's actually working",
  ];

  const solutions = [
    "Automate 80% of your workflow in minutes",
    "One unified platform for everything",
    "Smart follow-ups that never miss a beat",
    "Real-time analytics on every metric that matters",
  ];

  return (
    <section className="bg-card py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="font-cabinet font-extrabold text-4xl md:text-5xl tracking-tighter text-center mb-16">
          Stop struggling. <span className="text-stroke">Start shipping.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Problem Card */}
          <div className="bg-muted rounded-3xl p-8 border-2 border-dashed border-foreground/30 opacity-70">
            <h3 className="font-cabinet font-extrabold text-2xl tracking-tighter mb-6 text-foreground/60">The Old Way</h3>
            <ul className="space-y-4">
              {problems.map((p, i) => (
                <li key={i} className="flex items-start gap-3 font-satoshi text-foreground/60">
                  <X className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Card */}
          <div className="bg-yellow rounded-3xl p-8 border-2 border-foreground shadow-brutal-md">
            <h3 className="font-cabinet font-extrabold text-2xl tracking-tighter mb-6">The Voltify Way</h3>
            <ul className="space-y-4">
              {solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-3 font-satoshi font-medium">
                  <Check className="w-5 h-5 mt-0.5 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
