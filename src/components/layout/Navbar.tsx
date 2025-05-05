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
          ? "w-[94%] h-14"
          : compact
            ? "w-[280px] h-14"
            : "w-[75%] h-14"
      )}
    >
      <div className="acrylic border border-white/30 shadow-md rounded-full px-4 h-full flex items-center justify-between gap-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-6 h-6 bg-white rounded-full overflow-hidden">
            <img
              src="/lovable-uploads/02e6e528-86eb-4a69-a7aa-f901007e7ef3.png"
              alt="Logo"
              className="w-full h-full object-contain p-0.5"
            />
          </div>
        </div>

        {/* Navegação central */}
        {!isMobile && (
          <div className="flex-1 flex items-center justify-center">
            <div className="flex gap-8 bg-muted/40 px-6 py-1.5 rounded-full">
              <button
                onClick={() => scrollToSection("features")}
                className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
              >
                Funções
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
          </div>
        )}

        {/* Acesso/Login */}
        <Link
          to="https://www.followop.com.br/login"
          target="_blank"
          className="shrink-0 flex items-center justify-center"
        >
          <User className="w-5 h-5 text-muted-foreground" />
        </Link>
      </div>
    </div>
  );
}
