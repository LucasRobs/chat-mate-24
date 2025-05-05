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
          "acrylic rounded-full shadow-md border border-white/30 flex items-center justify-between transition-all duration-300 px-3",
          isMobile || compact
            ? "h-12 gap-2
