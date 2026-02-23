
"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, User, Rocket, Users, PieChart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const isDarkTheme = location.pathname === "/scale-up";

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
        "fixed z-50 inset-x-4 mx-auto transition-all duration-500 ease-in-out backdrop-blur-md animate-fade-in-down rounded-full",
        isDarkTheme ? "bg-zinc-950/80" : "bg-white/60 acrylic",
        scrollY > 10
          ? "max-w-[560px] shadow-lg top-2 h-12"
          : "max-w-[620px] shadow-md top-2 h-14",
        isMobile && "max-w-full h-12"
      )}
    >
      <div
        className={cn(
          "px-4 flex items-center justify-between gap-3 transition-all duration-500 ease-in-out rounded-full",
          isDarkTheme ? "border border-zinc-800" : "border border-white/30",
          scrollY > 10 ? "h-12" : "h-14",
          isMobile && "h-12"
        )}
      >
        <Link to="/" className="flex items-center gap-2 animate-fade-in-left cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-6 h-6 rounded-full overflow-hidden shrink-0">
            <img
              src="/lovable-uploads/followop.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
          {!isMobile && (
            <span className={cn("font-semibold text-sm", isDarkTheme ? "text-zinc-100" : "text-secondary")}>followop</span>
          )}
        </Link>

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
                    : isDarkTheme ? "text-zinc-400 hover:text-white hover:scale-105 active:scale-95" : "text-muted-foreground hover:text-primary hover:scale-105 active:scale-95"
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
                    : isDarkTheme ? "text-zinc-400 hover:text-white hover:bg-zinc-800" : "text-muted-foreground hover:text-primary hover:bg-primary/5"
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
            className={cn(
              "shrink-0 flex items-center justify-center px-3 py-1.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-inner",
              isDarkTheme ? "bg-zinc-800 hover:bg-zinc-700" : "bg-white/40 hover:bg-white/70"
            )}
          >
            <User className={cn("w-4 h-4", isDarkTheme ? "text-zinc-200" : "text-secondary")} />
            <span className={cn("ml-2 text-sm font-medium", isDarkTheme ? "text-zinc-200" : "text-secondary")}>Entrar</span>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "md:hidden transition-transform duration-300 hover:scale-110 active:scale-95 animate-fade-in-right",
            isDarkTheme ? "text-zinc-400" : "text-muted-foreground"
          )}
        >
          {isOpen ? <X size={18} className="animate-spin-once" /> : <Menu size={18} className="animate-pulse-light" />}
        </button>
      </div>

      {isOpen && (
        <div className={cn(
          "md:hidden absolute top-full left-0 right-0 mt-2 mx-auto max-w-[95%] backdrop-blur-md rounded-xl shadow-md p-4 space-y-3 animate-fade-in-down",
          isDarkTheme ? "bg-zinc-900/90 border border-zinc-800" : "bg-white/60 acrylic"
        )}>
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={cn(
                "flex w-full items-center gap-3 transition-all duration-300 px-3 py-2 rounded-lg",
                activeSection === id
                  ? "bg-primary/10 text-primary font-medium"
                  : isDarkTheme ? "text-zinc-400 hover:bg-zinc-800 hover:text-white hover:translate-x-1" : "text-muted-foreground hover:bg-primary/5 hover:text-primary hover:translate-x-1"
              )}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}

          <Link
            to="https://www.followop.com.br/login"
            target="_blank"
            className={cn(
              "flex w-full items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300",
              isDarkTheme ? "bg-zinc-800 text-zinc-200 hover:bg-zinc-700" : "bg-secondary/10 text-secondary hover:bg-secondary/20"
            )}
          >
            <User size={16} />
            <span className="font-medium">Entrar</span>
          </Link>
        </div>
      )}
    </div>
  );
}
