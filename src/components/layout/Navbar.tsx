
"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only enable compact mode on scroll for desktop
  const compact = !isMobile && scrollY > 20;

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={cn(
        "fixed z-50 left-1/2 -translate-x-1/2 top-3 transition-all duration-300",
        isMobile 
          ? "w-[85%] h-10" // Smaller width and height for mobile
          : compact 
            ? "w-[250px] h-10" // Smaller width and height for compact
            : "w-[85%] h-14" // Smaller height for default
      )}
    >
      <div
        className={cn(
          "acrylic rounded-full shadow-md border border-white/30 flex items-center justify-between transition-all duration-300 px-3",
          isMobile
            ? "h-10 gap-2" // Smaller height and gap for mobile
            : compact 
              ? "h-10 gap-2" // Smaller height and gap for compact
              : "h-14 gap-3" // Smaller height and gap for default
        )}
      >
        {/* Logo */}
        <div
          className={cn(
            "transition-all duration-300 flex items-center justify-center bg-white rounded-full overflow-hidden",
            isMobile
              ? "w-6 h-6" // Smaller logo for mobile
              : compact 
                ? "w-6 h-6" // Smaller logo for compact
                : "w-8 h-8" // Smaller logo for default
          )}
        >
          <img 
            src="/lovable-uploads/02e6e528-86eb-4a69-a7aa-f901007e7ef3.png" 
            alt="Logo" 
            className="w-full h-full p-1"
          />
        </div>

        {/* Center navigation */}
        <div
          className={cn(
            "flex items-center bg-muted/40 rounded-full transition-all duration-300",
            isMobile
              ? "gap-2 px-2 py-1" // Smaller padding and gap for mobile
              : compact 
                ? "gap-2 px-2 py-1" // Smaller padding and gap for compact
                : "gap-3 px-3 py-1.5" // Smaller padding and gap for default
          )}
        >
          <button 
            onClick={() => scrollToSection('pricing')}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs font-medium">Planos</span>
          </button>
          <button 
            onClick={() => scrollToSection('partners')}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs font-medium">Parceiros</span>
          </button>
        </div>

        {/* Login button */}
        <Link to="https://www.followop.com.br/login" target="_blank" className="group">
          <div
            className={cn(
              "transition-all duration-300 flex items-center justify-center bg-secondary rounded-full group-hover:bg-secondary/90",
              isMobile || compact
                ? "w-6 h-6" // Smaller button for mobile and compact
                : "h-8 px-3" // Smaller height and padding for default
            )}
          >
            {isMobile || compact ? (
              <LogIn className="text-white w-3 h-3" />
            ) : (
              <div className="flex items-center gap-1.5">
                <LogIn className="text-white w-3 h-3" />
                <span className="text-white text-xs font-medium">Entrar</span>
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}
