
"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Home, DollarSign, Building, User } from "lucide-react";
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
          "bg-white/70 backdrop-blur-xl rounded-full shadow-md border border-white/30 flex items-center justify-between transition-all duration-300 px-4",
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
          <Home className="text-white w-5 h-5" />
        </div>

        {/* Ícones centrais */}
        <div
          className={cn(
            "flex items-center bg-muted/40 rounded-full transition-all duration-300",
            compact ? "gap-4 px-3 py-2" : "gap-6 px-6 py-3"
          )}
        >
          <Link to="#"><DollarSign className="w-5 h-5 text-muted-foreground" /></Link>
          <Link to="#"><Building className="w-5 h-5 text-muted-foreground" /></Link>
          <Link to="#"><User className="w-5 h-5 text-muted-foreground" /></Link>
        </div>

        {/* Botão lateral direito */}
        <div
          className={cn(
            "transition-all duration-300 flex items-center justify-center bg-secondary rounded-full",
            compact ? "w-10 h-10" : "w-14 h-14"
          )}
        >
          <User className="text-white w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
