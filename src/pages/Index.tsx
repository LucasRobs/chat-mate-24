
import { useEffect } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import Comparison from "@/components/sections/Comparison";
import Pricing from "@/components/sections/Pricing";
import Partners from "@/components/sections/Partners";
import Testimonials from "@/components/sections/Testimonials";
import IntegrationPartners from "@/components/sections/IntegrationPartners";
import Features from "@/components/sections/Features";
import StatsSection from "@/components/sections/StatsSection";
import CtaSection from "@/components/sections/CtaSection";
import ClosingCtaSection from "@/components/sections/ClosingCtaSection";
import HowItWorks from "@/components/sections/HowItWorks";
import ChatDemo from "@/components/sections/ChatDemo";
import ScheduledMessages from "@/components/sections/ScheduledMessages";
import WistiaScriptLoader from "@/components/utils/WistiaScriptLoader";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  useEffect(() => {
    // Animation effects for elements as they come into view
    const observerFadeUp = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const observerZoomIn = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scale-100", "opacity-100");
            entry.target.classList.remove("scale-90", "opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const observerZoomOut = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scale-100", "opacity-100");
            entry.target.classList.remove("scale-110", "opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Apply animations to different elements
    const fadeElements = document.querySelectorAll(".reveal");
    fadeElements.forEach((el) => observerFadeUp.observe(el));

    const zoomInElements = document.querySelectorAll(".zoom-in-element");
    zoomInElements.forEach((el) => observerZoomIn.observe(el));

    const zoomOutElements = document.querySelectorAll(".zoom-out-element");
    zoomOutElements.forEach((el) => observerZoomOut.observe(el));

    // Add section animation classes after DOM is loaded
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
      // Add different animation classes based on section index
      if (index % 3 === 0) {
        section.classList.add("reveal");
      } else if (index % 3 === 1) {
        section.classList.add("zoom-in-element", "scale-90", "opacity-0", "transition-all", "duration-700");
      } else {
        section.classList.add("zoom-out-element", "scale-110", "opacity-0", "transition-all", "duration-700");
      }
    });

    return () => {
      fadeElements.forEach((el) => observerFadeUp.unobserve(el));
      zoomInElements.forEach((el) => observerZoomIn.unobserve(el));
      zoomOutElements.forEach((el) => observerZoomOut.unobserve(el));
    };
  }, []);

  return (
    <TooltipProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <WistiaScriptLoader />

        <main className="flex-1 pt-16">
          <Hero />
          <StatsSection />
          <Benefits />
          <Features />
          <HowItWorks />
          <Comparison />
          <ChatDemo />
          <ScheduledMessages />
          <Testimonials />
          <IntegrationPartners />
          <CtaSection />
          <Pricing />
          <Partners />
          <ClosingCtaSection />
        </main>

        <Footer />
        <Toaster />
      </div>
    </TooltipProvider>
  );
};

export default Index;
