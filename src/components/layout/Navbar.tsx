
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
          "acrylic rounded-full shadow-md border border-white/30 flex items-center justify-between transition-all duration-300 px-3 navbar-item-spacing",
          isMobile || compact
            ? "h-12 gap-2"
            : "h-16 gap-4"
        )}
      >
        <div className="flex items-center gap-1">
          <img src="/lovable-uploads/danieldoto.png" alt="Logo" className="h-8 w-8" />
          <span className={cn("font-semibold text-xs", compact && "hidden")}>
            SaaS
          </span>
        </div>

        {!isMobile && (
          <div className="flex gap-7 items-center">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm text-gray-300 hover:text-white transition"
            >
              Funcionalidades
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm text-gray-300 hover:text-white transition"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection("partners")}
              className="text-sm text-gray-300 hover:text-white transition"
            >
              Parceiros
            </button>
          </div>
        )}

        <div className="flex items-center gap-2">
          {!compact && (
            <Link
              to="/auth/login"
              className="text-sm text-gray-300 hover:text-white transition"
            >
              <User size={18} />
            </Link>
          )}
          <Link
            to="/auth/register"
            className="bg-blue-600 text-white rounded-full px-4 py-1.5 text-xs font-medium hover:bg-blue-700 transition"
          >
            Começar
          </Link>
        </div>
      </div>
    </div>
  );
}
