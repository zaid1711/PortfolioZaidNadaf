import { Zap } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-yellow border-b-2 border-foreground flex items-center px-6 lg:px-12">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-foreground rounded-sm flex items-center justify-center">
          <Zap className="w-5 h-5 text-yellow fill-yellow" />
        </div>
        <span className="font-cabinet font-extrabold text-xl tracking-tighter">Voltify</span>
      </div>

      <div className="hidden md:flex items-center gap-8 mx-auto font-satoshi font-bold text-sm">
        <a href="#features" className="hover:underline underline-offset-4">Features</a>
        <a href="#how-it-works" className="hover:underline underline-offset-4">How It Works</a>
        <a href="#testimonials" className="hover:underline underline-offset-4">Testimonials</a>
        <a href="#pricing" className="hover:underline underline-offset-4">Pricing</a>
      </div>

      <button className="bg-foreground text-card font-satoshi font-bold text-sm px-5 py-2.5 border-2 border-foreground rounded-lg shadow-brutal-sm btn-brutal-press">
        Start Free Trial
      </button>
    </nav>
  );
};

export default Navbar;
