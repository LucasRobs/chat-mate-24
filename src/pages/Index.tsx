
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
import IntegrationPartners from "@/components/sections/IntegrationPartners";
import ClosingCtaSection from "@/components/sections/ClosingCtaSection";
import WistiaScriptLoader from "@/components/utils/WistiaScriptLoader";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  useEffect(() => {
    // Use simple dot patterns instead of gradients
    document.body.classList.add('pattern-background');
    
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

    // Add Apple-inspired smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Remove any possible overflow hidden that might be causing double scrollbars
    document.documentElement.style.overflowY = 'visible';
    document.body.style.overflowY = 'visible';
    
    // Animation handler for sections
    const animateSections = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isInView = (rect.top <= window.innerHeight * 0.75) && (rect.bottom >= 0);
        if (isInView) {
          section.classList.add('animate-in');
        }
      });
    };

    // Run once on load
    animateSections();
    
    // Add event listeners
    window.addEventListener('scroll', animateSections);
    window.addEventListener('resize', animateSections);

    return () => {
      document.body.classList.remove('pattern-background');
      revealElements.forEach((el) => observer.unobserve(el));
      document.documentElement.style.scrollBehavior = 'auto';
      window.removeEventListener('scroll', animateSections);
      window.removeEventListener('resize', animateSections);
    };
  }, []);

  return (
    <TooltipProvider>
      <div className="min-h-screen flex flex-col bg-white single-scroll-container">
        <Navbar />
        <WistiaScriptLoader />

        <main className="flex-1 single-scroll-container">
          <Hero />
          <Benefits />
          <Comparison />
          <Features />
          <Testimonials />
          <Partners />
          <IntegrationPartners />
          <Pricing />
          <ClosingCtaSection />
          <CtaSection />
        </main>

        <Footer />
        <Toaster />
      </div>
    </TooltipProvider>
  );
};

export default Index;
