import { motion } from "framer-motion";

const footerLinksMap = {
  "Quick Links": [
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#cta" },
  ],
  Resources: [
    { label: "GitHub", href: "https://github.com/zaid1711", external: true },
    { label: "LinkedIn", href: "https://linkedin.com/in/zaidnadaf", external: true },
    { label: "Email", href: "mailto:nadafz811@gmail.com" },
    { label: "Resume", href: "https://drive.google.com/file/d/1zNS_061PhZm4-Wr-G_aOufq3HBSs54fJ/view?usp=drive_link", external: true },
  ],
  Sections: [
    { label: "My Process", href: "#how-it-works" },
    { label: "Tech Stack", href: "#skills" },
    { label: "Featured Work", href: "#projects" },
    { label: "Get In Touch", href: "#cta" },
  ],
};

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-charcoal py-12 sm:py-16 border-t-2 border-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-5 gap-8 sm:gap-12"
        >
          <motion.div variants={itemVariants} className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-card rounded-sm flex items-center justify-center text-foreground font-cabinet font-extrabold text-sm sm:text-lg">
                ZN
              </div>
              <span className="font-cabinet font-extrabold text-lg sm:text-xl tracking-tighter text-card">Zaid Nadaf</span>
            </div>
            <p className="font-satoshi text-xs sm:text-sm text-sage/60 leading-relaxed">Full-stack developer building digital experiences. Final year CS student passionate about modern web technologies.</p>
            <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6">
              {[
                { label: 'Gh', href: 'https://github.com/zaid1711', title: 'GitHub' },
                { label: 'Li', href: 'https://linkedin.com/in/zaidnadaf', title: 'LinkedIn' },
                { label: 'Em', href: 'mailto:nadafz811@gmail.com', title: 'Email' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.title}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="w-8 sm:w-10 h-8 sm:h-10 bg-[#272727] border border-sage/20 rounded-sm flex items-center justify-center text-sage/60 text-xs font-satoshi font-bold hover:bg-yellow hover:text-foreground hover:border-foreground hover:-translate-y-1 transition-all cursor-pointer"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
          {Object.entries(footerLinksMap).map(([title, links]) => (
            <motion.div variants={itemVariants} key={title}>
              <h4 className="font-cabinet font-bold text-xs sm:text-sm text-card mb-3 sm:mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="font-satoshi text-xs sm:text-sm text-sage/50 hover:text-yellow transition-colors inline-block hover:translate-x-1 duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border-t border-sage/10 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center"
        >
          <p className="font-satoshi text-xs text-sage/40 leading-relaxed">© 2026 Zaid Nadaf. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
