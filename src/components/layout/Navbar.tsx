
"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { DollarSign, Building, User, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const compact = scrollY > 20;

  return (
    <div
      className={cn(
        "fixed z-50 left-1/2 -translate-x-1/2 top-4 transition-all duration-300",
        compact ? "w-[300px] h-14" : "w-[95%] h-20"
      )}
    >
      <div
        className={cn(
          "acrylic rounded-full shadow-md border border-white/30 flex items-center justify-between transition-all duration-300 px-4",
          compact ? "h-14 gap-4" : "h-20 gap-6"
        )}
      >
        {/* Logo */}
        <div
          className={cn(
            "transition-all duration-300 flex items-center justify-center bg-primary rounded-full",
            compact ? "w-10 h-10" : "w-14 h-14"
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
            compact ? "gap-4 px-3 py-2" : "gap-6 px-6 py-3"
          )}
        >
          <Link to="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <DollarSign className="w-5 h-5" />
            {!compact && <span className="font-medium">Financeiro</span>}
          </Link>
          <Link to="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Building className="w-5 h-5" />
            {!compact && <span className="font-medium">Empresa</span>}
          </Link>
          <Link to="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <User className="w-5 h-5" />
            {!compact && <span className="font-medium">Perfil</span>}
          </Link>
        </div>

        {/* Login button */}
        <Link to="#" className="group">
          <div
            className={cn(
              "transition-all duration-300 flex items-center justify-center bg-secondary rounded-full group-hover:bg-secondary/90",
              compact ? "w-10 h-10" : "h-14 px-5"
            )}
          >
            {compact ? (
              <LogIn className="text-white w-5 h-5" />
            ) : (
              <div className="flex items-center gap-2">
                <LogIn className="text-white w-5 h-5" />
                <span className="text-white font-medium">Entrar</span>
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}
