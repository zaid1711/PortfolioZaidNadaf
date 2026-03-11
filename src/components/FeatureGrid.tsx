import { Zap, BarChart3, Shield, Layers, Workflow, Globe } from "lucide-react";

const features = [
  { icon: Zap, title: "Lightning Automation", desc: "Set up complex workflows in minutes, not months. Our visual builder makes automation accessible to everyone." },
  { icon: BarChart3, title: "Deep Analytics", desc: "See exactly what's working with real-time dashboards and custom reports that surface actionable insights." },
  { icon: Shield, title: "Enterprise Security", desc: "SOC2 compliant, end-to-end encryption, and role-based access controls keep your data locked down." },
  { icon: Layers, title: "Seamless Integrations", desc: "Connect with 200+ tools you already use. Slack, Notion, HubSpot, Stripe — all in one click." },
  { icon: Workflow, title: "Smart Workflows", desc: "AI-powered suggestions optimize your processes and eliminate bottlenecks before they happen." },
  { icon: Globe, title: "Global Scale", desc: "Deploy across 12 regions worldwide with 99.99% uptime. Built for teams of 5 or 5,000." },
];

const FeatureGrid = () => {
  return (
    <section id="features" className="bg-yellow py-24 border-y-2 border-foreground relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern pointer-events-none" />
      <div className="relative container mx-auto px-6 lg:px-12">
        <h2 className="font-cabinet font-extrabold text-4xl md:text-5xl tracking-tighter text-center mb-4">
          Everything you need
        </h2>
        <p className="font-satoshi text-lg text-center opacity-70 mb-16 max-w-xl mx-auto">
          Powerful features that work together seamlessly to help you move faster.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group bg-card p-8 border-2 border-foreground rounded-xl shadow-brutal-sm hover:shadow-brutal-md transition-shadow duration-200">
              <div className="w-14 h-14 bg-sage rounded-lg border-2 border-foreground flex items-center justify-center mb-6 group-hover:bg-yellow transition-colors">
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="font-cabinet font-extrabold text-2xl tracking-tighter mb-3">{f.title}</h3>
              <p className="font-satoshi text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
