const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 sm:h-20 bg-yellow border-b-2 border-foreground flex items-center px-4 sm:px-6 lg:px-12">
      <a href="#" className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity flex-shrink-0">
        <div className="w-8 sm:w-10 h-8 sm:h-10 bg-foreground rounded-sm flex items-center justify-center text-yellow font-cabinet font-extrabold text-sm sm:text-lg">
          ZN
        </div>
        <span className="font-cabinet font-extrabold text-xs sm:text-lg md:text-xl tracking-tighter hidden sm:inline">Zaid Nadaf</span>
      </a>

      <div className="hidden md:flex items-center gap-4 lg:gap-8 mx-auto font-satoshi font-bold text-xs sm:text-sm">
        <a href="#skills" className="hover:underline underline-offset-4">Skills</a>
        <a href="#projects" className="hover:underline underline-offset-4">Projects</a>
        <a href="#experience" className="hover:underline underline-offset-4">Experience</a>
        <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
      </div>

      <a href="#cta" className="bg-foreground text-card font-satoshi font-bold text-xs sm:text-sm px-3 sm:px-5 py-2 sm:py-2.5 border-2 border-foreground rounded-lg shadow-brutal-sm btn-brutal-press hover:opacity-80 transition-opacity inline-block ml-auto sm:ml-0 flex-shrink-0">
        <span className="hidden sm:inline">Get In Touch</span>
        <span className="sm:hidden">Touch</span>
      </a>
    </nav>
  );
};

export default Navbar;
