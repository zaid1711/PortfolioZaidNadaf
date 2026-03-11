const brands = ['ACME', 'GLOBEX', 'INITECH', 'MASSIVE', 'APERTURE', 'WAYSTAR', 'CYBERDYNE', 'SOYLENT', 'OSCORP', 'STARK'];

const SocialProofMarquee = () => {
  return (
    <section className="bg-charcoal border-b-2 border-foreground py-6 overflow-hidden">
      <div className="flex marquee whitespace-nowrap">
        {[...brands, ...brands].map((brand, i) => (
          <span key={i} className="font-cabinet font-extrabold text-2xl text-sage/50 mx-12 tracking-tighter">
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SocialProofMarquee;
