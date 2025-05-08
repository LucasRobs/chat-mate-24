
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
    
    // Intersection Observer for revealing elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Apply to all reveal elements
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));
    
    // Apply to all animation classes
    const animatedElements = document.querySelectorAll(
      '.fade-in-left, .fade-in-right, .fade-in-up, .fade-in-down, .fade-in, .scale-in, .rotate-in'
    );
    animatedElements.forEach((el) => observer.observe(el));
    
    // Stagger animations for grouped elements
    const staggerContainers = document.querySelectorAll('.stagger-container');
    staggerContainers.forEach(container => {
      const items = container.querySelectorAll('.stagger-item');
      items.forEach((item, index) => {
        (item as HTMLElement).style.transitionDelay = `${index * 100}ms`;
        observer.observe(item);
      });
    });

    // Add Apple-inspired smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
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

    // Animation handler for animated sections
    const animateCustomSections = () => {
      const animatedSections = document.querySelectorAll('.animated-section');
      animatedSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isInView = (rect.top <= window.innerHeight * 0.85) && (rect.bottom >= 0);
        if (isInView) {
          section.classList.add('show');
        }
      });
    };

    // Run once on load
    animateSections();
    animateCustomSections();
    
    // Add event listeners
    window.addEventListener('scroll', animateSections);
    window.addEventListener('scroll', animateCustomSections);
    window.addEventListener('resize', animateSections);
    window.addEventListener('resize', animateCustomSections);

    return () => {
      document.body.classList.remove('pattern-background');
      revealElements.forEach((el) => observer.unobserve(el));
      animatedElements.forEach((el) => observer.unobserve(el));
      document.documentElement.style.scrollBehavior = 'auto';
      window.removeEventListener('scroll', animateSections);
      window.removeEventListener('scroll', animateCustomSections);
      window.removeEventListener('resize', animateSections);
      window.removeEventListener('resize', animateCustomSections);
    };
  }, []);

  return (
    <TooltipProvider>
      <div className="global-scroll-container">
        <Navbar />
        <WistiaScriptLoader />

        <main>
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
