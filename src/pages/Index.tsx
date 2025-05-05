
import { useEffect } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import Pricing from "@/components/sections/Pricing";
import Partners from "@/components/sections/Partners";
import Testimonials from "@/components/sections/Testimonials";
import CtaSection from "@/components/sections/CtaSection";
import Comparison from "@/components/sections/Comparison";
import Features from "@/components/sections/Features";
import ClosingCtaSection from "@/components/sections/ClosingCtaSection";
import WistiaScriptLoader from "@/components/utils/WistiaScriptLoader";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Add sample activity data for ClosingCtaSection
  const activityData = [
    { name: "5/04", value: 10 },
    { name: "8/04", value: 120 },
    { name: "11/04", value: 60 },
    { name: "14/04", value: 170 },
    { name: "17/04", value: 90 },
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <WistiaScriptLoader />

        <main className="flex-1 overflow-x-hidden"> {/* Added overflow-x-hidden to prevent horizontal scrolling */}
          <Hero />
          <Benefits />
          <Comparison />
          <Features />
          <Testimonials />
          <Pricing />
          <Partners />
          <ClosingCtaSection activityData={activityData} />
          <CtaSection />
        </main>

        <Footer />
        <Toaster />
      </div>
    </TooltipProvider>
  );
};

export default Index;
