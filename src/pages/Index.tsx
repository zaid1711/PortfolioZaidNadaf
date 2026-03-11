import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofMarquee from "@/components/SocialProofMarquee";
import ProblemSolution from "@/components/ProblemSolution";
import FeatureGrid from "@/components/FeatureGrid";
import HowItWorks from "@/components/HowItWorks";
import UseCasePersonas from "@/components/UseCasePersonas";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SocialProofMarquee />
      <ProblemSolution />
      <FeatureGrid />
      <HowItWorks />
      <UseCasePersonas />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
