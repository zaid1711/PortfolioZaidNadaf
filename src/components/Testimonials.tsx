import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah Chen", role: "VP Marketing, Acme Corp", text: "Voltify cut our campaign setup time by 70%. We shipped more in one quarter than the entire previous year.", rating: 5 },
  { name: "Marcus Johnson", role: "Founder, LaunchPad", text: "I replaced 6 different tools with Voltify. My team is happier, faster, and we actually have visibility now.", rating: 5 },
  { name: "Elena Rodriguez", role: "COO, ScaleUp Agency", text: "The automation features alone paid for the entire subscription in the first week. No exaggeration.", rating: 5 },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-sage py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="font-cabinet font-extrabold text-4xl md:text-5xl tracking-tighter text-center mb-16">
          Loved by teams everywhere
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card p-8 border-2 border-foreground rounded-tr-3xl rounded-bl-3xl rounded-tl-sm rounded-br-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-[#ffbc2e] text-[#ffbc2e]" />
                ))}
              </div>
              <p className="font-satoshi text-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <div className="font-cabinet font-bold text-sm">{t.name}</div>
                <div className="font-satoshi text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
