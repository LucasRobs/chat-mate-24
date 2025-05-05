"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";
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

  const compact = !isMobile && scrollY > 20;

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
          ? "w-[90%] h-12"
          : compact 
            ? "w-[250px] h-12"
            : "w-[85%] h-16"
      )}
    >
      <div
        className={cn(
          "acrylic rounded-full shadow-md border border-white/30 flex items-center justify-between transition-all duration-300 px-3",
          isMobile || compact
            ? "h-12 gap-2"
            : "h-16 gap-4"
        )}
      >
        {/* Logo */}
        <div
          className={cn(
            "transition-all duration-300 flex items-center justify-center bg-white rounded-full overflow-hidden",
            isMobile || compact
              ? "w-8 h-8"
              : "w-10 h-10"
          )}
        >
          <img 
            src="/lovable-uploads/02e6e528-86eb-4a69-a7aa-f901007e7ef3.png" 
            alt="Logo" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Navigation */}
        <div
          className={cn(
            "flex items-center bg-muted/40 rounded-full transition-all duration-300",
            isMobile || compact
              ? "gap-3 px-2 py-1"
              : "gap-6 px-4 py-1.5"
          )}
        >
          <button 
            onClick={() => scrollToSection('features')}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs font-medium">Funcionalidades</span>
          </button>
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

        {/* Login */}
        <Link to="https://www.followop.com.br/login" target="_blank" className="group">
          <div
            className={cn(
              "transition-all duration-300 flex items-center justify-center bg-secondary rounded-full group-hover:bg-secondary/90",
              isMobile || compact
                ? "w-8 h-8"
                : "h-9 px-3"
            )}
          >
            {isMobile || compact ? (
              <User className="text-white w-4 h-4" />
            ) : (
              <div className="flex items-center gap-1.5">
                <User className="text-white w-4 h-4" />
                <span className="text-white text-xs font-medium">Entrar</span>
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}
