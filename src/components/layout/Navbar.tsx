
import { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Funções", href: "#features" },
    { label: "Planos", href: "#pricing" },
    { label: "Empresa", href: "#partners" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 backdrop-blur-md bg-white/70 acrylic",
        scrollY > 20 ? "shadow-sm" : ""
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between relative">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 z-50">
          <div className="bg-[#D6F5C4] rounded-full p-2 flex items-center justify-center">
            <img
              src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png"
              alt="followop Logo"
              className="h-6 w-auto sm:h-8"
            />
          </div>
        </a>

        {/* Centered menus - Desktop */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <div className="bg-[#F1F1F1] rounded-full py-4 px-8 flex items-center justify-center gap-12">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-800 font-medium hover:text-primary transition-colors duration-200 text-lg"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            asChild
            variant="default"
            className="bg-[#0D3719] hover:bg-[#0D3719]/90 text-white font-medium px-6 py-1.5 rounded-full transition-all duration-200 flex items-center gap-2 animated-button"
          >
            <a
              href="https://www.followop.com.br/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              <User size={18} className="mr-2" />
              Entrar
            </a>
          </Button>
        </div>

        {/* Menu mobile toggle */}
        <button
          className="md:hidden z-50 text-secondary transition-colors duration-200 hover:text-primary"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md pt-20 px-6 overflow-y-auto md:hidden">
          <div className="flex flex-col space-y-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-xl text-gray-800 font-medium py-2 border-b border-gray-100 hover:text-primary transition-colors duration-200 flex items-center justify-between"
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-4 pt-4">
              <Button
                asChild
                variant="default"
                className="bg-[#0D3719] text-white font-medium py-3 px-4 rounded-full text-center hover:bg-[#0D3719]/90 transition-colors duration-200 animated-button flex items-center justify-center gap-2"
              >
                <a
                  href="https://www.followop.com.br/register"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <User size={18} className="mr-2" />
                  Entrar
                </a>
              </Button>
            </div>

            {/* Branding dots no menu mobile */}
            <div className="absolute bottom-10 right-10">
              <div className="w-20 h-20 relative">
                <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-primary/30"></div>
                <div className="absolute top-8 left-8 w-6 h-6 rounded-full bg-primary/20"></div>
                <div className="absolute top-16 left-0 w-3 h-3 rounded-full bg-primary/10"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
