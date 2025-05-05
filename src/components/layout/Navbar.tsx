"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, User, LayoutGrid, DollarSign, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);

      const sections = ["features", "pricing", "partners"];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <div
      className={cn(
        "fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out backdrop-blur-lg backdrop-saturate-150 rounded-full",
        scrollY > 10
          ? "w-[280px] sm:w-[720px] bg-white/70 shadow-lg top-2 h-10"
          : "w-[95%] sm:w-[720px] bg-white/50 shadow-md top-2 h-14"
      )}
    >
      <div
        className={cn(
          "border border-white/30 px-4 flex items-center justify-between gap-3 transition-all duration-500 ease-in-out rounded-full",
          scrollY > 10 ? "h-10" : "h-14"
        )}
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white rounded-full overflow-hidden shrink-0">
            <img
              src="/lovable-uploads/02e6e528-86eb-4a69-a7aa-f901007e7ef3.png"
              alt="Logo"
              className="w-full h-full object-contain p-0.5"
            />
          </div>
          {!isMobile && (
            <span className="font-semibold text-secondary text-sm">followop</span>
          )}
        </div>

        <div className={cn(
          "flex items-center gap-6 transition-all duration-300",
          scrollY > 10 ? "scale-95" : "scale-100"
        )}>
          {[{ id: "features", label: "Funções" }, { id: "pricing", label: "Planos" }, { id: "partners", label: "Parceiros" }].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 active:scale-95",
                activeSection === id ? "text-primary" : "text-muted-foreground"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {!isMobile && (
          <Link
            to="https://www.followop.com.br/login"
            target="_blank"
            className="shrink-0 flex items-center justify-center bg-white/40 p-2 rounded-full hover:bg-white/70 transition-colors shadow-sm active:shadow-inner"
          >
            <User className="w-4 h-4 text-secondary" />
          </Link>
        )}

        {isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-muted-foreground"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        )}
      </div>

      {isMobile && isOpen && (
        <div className="absolute right-0 left-0 mt-2 mx-auto max-w-[280px] bg-white/90 backdrop-blur-md rounded-xl shadow-md p-4 space-y-3 animate-slide-in-down">
          <button
            onClick={() => scrollToSection("features")}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            Funções
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            Planos
          </button>
          <button
            onClick={() => scrollToSection("partners")}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            Parceiros
          </button>
        </div>
      )}
    </div>
  );
}
