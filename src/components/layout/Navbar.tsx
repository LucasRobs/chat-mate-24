"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, User } from "lucide-react";
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
        "fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out",
        scrollY > 10
          ? "w-[320px] sm:w-[420px] bg-white shadow-md top-2 h-12 rounded-full"
          : "w-[95%] sm:w-[760px] bg-white shadow-md top-2 h-16 rounded-full"
      )}
    >
      <div className={cn(
        "border border-white/30 px-6 flex items-center justify-between gap-3 transition-all duration-500 ease-in-out",
        scrollY > 10 ? "h-12" : "h-16"
      )}>
        <div className="w-7 h-7 bg-white rounded-full overflow-hidden shrink-0">
          <img
            src="/lovable-uploads/02e6e528-86eb-4a69-a7aa-f901007e7ef3.png"
            alt="Logo"
            className="w-full h-full object-contain p-0.5"
          />
        </div>

        {!isMobile && (
          <div className={cn(
            "flex items-center gap-6 transition-all duration-300",
            scrollY > 10 ? "scale-95" : "scale-100"
          )}>
            {[{ id: "features", label: "Funções" }, { id: "pricing", label: "Planos" }, { id: "partners", label: "Parceiros" }].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={cn(
                  "text-sm font-medium transition-colors",
                  activeSection === id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        <Link
          to="https://www.followop.com.br/login"
          target="_blank"
          className="shrink-0 flex items-center justify-center bg-white/50 p-2 rounded-full hover:bg-white/80 transition-colors"
        >
          <User className="w-5 h-5 text-secondary" />
        </Link>

        {isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-muted-foreground"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}
      </div>

      {isMobile && isOpen && (
        <div className="mt-2 w-full bg-white rounded-xl shadow-md p-4 space-y-4 animate-slide-in-down">
          <button
            onClick={() => scrollToSection("features")}
            className="block w-full text-left text-muted-foreground hover:text-primary text-base"
          >
            Funções
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="block w-full text-left text-muted-foreground hover:text-primary text-base"
          >
            Planos
          </button>
          <button
            onClick={() => scrollToSection("partners")}
            className="block w-full text-left text-muted-foreground hover:text-primary text-base"
          >
            Parceiros
          </button>
          <Link
            to="https://www.followop.com.br/login"
            target="_blank"
            className="block w-full text-left text-muted-foreground hover:text-primary text-base"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
}
