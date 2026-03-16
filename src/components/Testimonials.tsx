import { Star, Award } from "lucide-react";

const achievements = [
  { title: "Software Engineering Intern", subtitle: "Sanpurnam Infotech Pvt. Ltd. Sangli", text: "Working on real-world projects, collaborating with senior developers, and gaining hands-on experience in modern software development lifecycles.", rating: 5 },
  { title: "Full-Stack Developer", subtitle: "Personal Projects", text: "Built 4+ projects from concept to deployment. Experienced in building scalable, responsive applications with modern tech stacks.", rating: 5 },
  { title: "Continuous Learner", subtitle: "Self-Directed Growth", text: "Always exploring new technologies, best practices, and frameworks. Dedicated to staying current in the rapidly evolving tech landscape.", rating: 5 },
];

const Testimonials = () => {
  return (
    <section id="experience" className="bg-sage py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="font-cabinet font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-tighter text-center mb-12 sm:mb-16">
          Experience & Achievements
        </h2>
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {achievements.map((a, i) => (
            <div key={i} className="bg-card p-6 sm:p-8 border-2 border-foreground rounded-tr-3xl rounded-bl-3xl rounded-tl-sm rounded-br-sm">
              <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                {[...Array(a.rating)].map((_, j) => (
                  <Star key={j} className="w-4 sm:w-5 h-4 sm:h-5 fill-[#ffbc2e] text-[#ffbc2e]" />
                ))}
              </div>
              <p className="font-satoshi text-sm sm:text-base text-foreground leading-relaxed mb-4 sm:mb-6">" {a.text}"</p>
              <div>
                <div className="font-cabinet font-bold text-xs sm:text-sm">{a.title}</div>
                <div className="font-satoshi text-xs text-muted-foreground">{a.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
