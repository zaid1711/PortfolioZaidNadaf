import { Zap } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "API Reference", "Community", "Status"],
  Legal: ["Privacy", "Terms", "Security", "GDPR"],
};

const Footer = () => {
  return (
    <footer className="bg-charcoal py-16 border-t-2 border-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-card rounded-sm flex items-center justify-center">
                <Zap className="w-5 h-5 text-foreground" />
              </div>
              <span className="font-cabinet font-extrabold text-xl tracking-tighter text-card">Voltify</span>
            </div>
            <p className="font-satoshi text-sm text-sage/60 leading-relaxed">Ship your ideas faster with the all-in-one platform.</p>
            <div className="flex gap-3 mt-6">
              {['X', 'Li', 'Gh', 'Yt'].map((s) => (
                <div key={s} className="w-10 h-10 bg-[#272727] border border-sage/20 rounded-sm flex items-center justify-center text-sage/60 text-xs font-satoshi font-bold hover:bg-yellow hover:text-foreground hover:border-foreground transition-colors cursor-pointer">
                  {s}
                </div>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-cabinet font-bold text-sm text-card mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-satoshi text-sm text-sage/50 hover:text-yellow transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-sage/10 mt-12 pt-8 text-center">
          <p className="font-satoshi text-xs text-sage/40">© 2026 Voltify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
