
"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, User, Rocket, Users, PieChart } from "lucide-react";
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

      const sections = ["features", "partners", "pricing"];
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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: "features", label: "Funções", icon: Rocket },
    { id: "partners", label: "Parceiros", icon: Users },
    { id: "pricing", label: "Planos", icon: PieChart }
  ];

  return (
    <div
      className={cn(
        "fixed z-50 inset-x-4 mx-auto transition-all duration-500 ease-in-out acrylic backdrop-blur-md bg-white/60 animate-fade-in-down",
        scrollY > 10
          ? "max-w-[560px] shadow-lg top-2 h-12"
          : "max-w-[620px] shadow-md top-2 h-14",
        isMobile && "max-w-full h-12"
      )}
    >
      <div
        className={cn(
          "border border-white/30 px-4 flex items-center justify-between gap-3 transition-all duration-500 ease-in-out rounded-full",
          scrollY > 10 ? "h-12" : "h-14",
          isMobile && "h-12"
        )}
      >
        <div className="flex items-center gap-2 animate-fade-in-left">
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

        {!isMobile ? (
          <div
            className={cn(
              "flex items-center gap-6 transition-all duration-300 animate-fade-in",
              scrollY > 10 ? "scale-95" : "scale-100"
            )}
          >
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={cn(
                  "text-sm font-medium transition-all duration-300 nav-link relative overflow-hidden",
                  activeSection === id 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-primary hover:scale-105 active:scale-95"
                )}
              >
                {label}
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 origin-left",
                  activeSection === id ? "bg-primary scale-x-100" : "bg-primary group-hover:scale-x-100"
                )}></span>
              </button>
            ))}
          </div>
        ) : (
          <div className="flex items-center gap-4 animate-fade-in">
            {navItems.map(({ id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={cn(
                  "transition-all duration-300 p-1.5 rounded-full",
                  activeSection === id 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                )}
                aria-label={id}
              >
                <Icon size={16} />
              </button>
            ))}
          </div>
        )}

        <div className="hidden md:flex animate-fade-in-right">
          <Link
            to="https://www.followop.com.br/login"
            target="_blank"
            className="shrink-0 flex items-center justify-center bg-white/40 px-3 py-1.5 rounded-full hover:bg-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-inner"
          >
            <User className="w-4 h-4 text-secondary" />
            <span className="ml-2 text-sm text-secondary font-medium">Entrar</span>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-muted-foreground transition-transform duration-300 hover:scale-110 active:scale-95 animate-fade-in-right"
        >
          {isOpen ? <X size={18} className="animate-spin-once" /> : <Menu size={18} className="animate-pulse-light" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-auto max-w-[95%] acrylic backdrop-blur-md bg-white/60 rounded-xl shadow-md p-4 space-y-3 animate-fade-in-down">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={cn(
                "flex w-full items-center gap-3 transition-all duration-300 px-3 py-2 rounded-lg",
                activeSection === id 
                  ? "bg-primary/10 text-primary font-medium" 
                  : "text-muted-foreground hover:bg-primary/5 hover:text-primary hover:translate-x-1"
              )}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}

          <Link
            to="https://www.followop.com.br/login"
            target="_blank"
            className="flex w-full items-center gap-3 px-3 py-2 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary/20 transition-all duration-300"
          >
            <User size={16} />
            <span className="font-medium">Entrar</span>
          </Link>
        </div>
      )}
    </div>
  );
}
