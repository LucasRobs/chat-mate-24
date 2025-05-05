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
        "fixed z-50 top-3 left-1/2 -translate-x-1/2 transition-all duration-300",
        isMobile
          ? "w-[90%] h-14"
          : compact
            ? "w-[250px] h-14"
            : "w-[85%] h-16"
      )}
    >
      <div
        className={cn(
          "acrylic border border-white/30 shadow-md rounded-full flex items-center justify-between px-4 transition-all duration-300",
          isMobile || compact ? "h-14 gap-2" : "h-16 gap-4"
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white">
            <img
              src="/lovable-uploads/02e6e528-86eb-4a69-a7aa-f901007e7ef3.png"
              alt="Logo"
              className="w-full h-full object-contain p-1"
            />
          </div>
          {!compact && !isMobile && (
            <span className="font-semibold text-sm text-black">SaaS</span>
          )}
        </div>

        {/* Navegação central */}
        {!isMobile && (
          <div className="flex items-center gap-6 bg-muted/40 px-4 py-1.5 rounded-full">
            <button
              onClick={() => scrollToSection("features")}
              className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
            >
              Funcionalidades
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection("partners")}
              className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
            >
              Parceiros
            </button>
          </div>
        )}

        {/* Botão de login */}
        <Link to="https://www.followop.com.br/login" target="_blank" className="group flex items-center gap-2">
          <User className="w-4 h-4 text-muted-foreground" />
          {!compact && (
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-1.5 rounded-full transition-colors">
              Começar
            </button>
          )}
        </Link>
      </div>
    </div>
  );
}
