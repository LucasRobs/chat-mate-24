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
        "fixed z-50 top-2 left-1/2 -translate-x-1/2 transition-all duration-300",
        isMobile
          ? "w-[94%] h-12"
          : compact
            ? "w-[240px] h-12"
            : "w-[75%] h-12"
      )}
    >
      <div
        className={cn(
          "acrylic border border-white/30 shadow-md rounded-full flex items-center justify-between px-3 transition-all duration-300",
          "h-full"
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-1">
          <div className="w-6 h-6 rounded-full overflow-hidden bg-white">
            <img
              src="/lovable-uploads/02e6e528-86eb-4a69-a7aa-f901007e7ef3.png"
              alt="Logo"
              className="w-full h-full object-contain p-0.5"
            />
          </div>
        </div>

        {/* Navegação */}
        {!isMobile && (
          <div className="flex items-center gap-4 bg-muted/40 px-3 py-1 rounded-full">
            <button
              onClick={() => scrollToSection("features")}
              className="text-muted-foreground hover:text-primary text-xs font-medium transition-colors"
            >
              Funcionalidades
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-muted-foreground hover:text-primary text-xs font-medium transition-colors"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection("partners")}
              className="text-muted-foreground hover:text-primary text-xs font-medium transition-colors"
            >
              Parceiros
            </button>
          </div>
        )}

        {/* Acesso */}
        <Link to="https://www.followop.com.br/login" target="_blank" className="flex items-center gap-1">
          <User className="w-4 h-4 text-muted-foreground" />
        </Link>
      </div>
    </div>
  );
}
