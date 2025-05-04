
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setIsNavHidden(currentScrollY > prevScrollY);
      } else {
        setIsNavHidden(false);
      }
      setPrevScrollY(currentScrollY);
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

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
        "sticky-nav bg-white py-3 sm:py-4 px-4 sm:px-8 md:px-12 lg:px-20 transition-all duration-300",
        scrollY > 100 ? "shadow-sm glass" : "",
        isNavHidden && !isOpen ? "hidden-nav" : "",
        isOpen ? "fixed inset-0 z-50 bg-white" : ""
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 z-50">
          <img
            src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png"
            alt="followop Logo"
            className="h-6 w-auto sm:h-8"
          />
          <span className="font-bold text-lg sm:text-xl text-secondary">followop</span>
        </a>

        {/* Centered menus */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <div className="bg-gray-100 rounded-full py-2 px-2 flex">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 font-medium hover:text-primary px-6 py-1 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Login Button */}
        <div className="hidden md:flex">
          <Button
            asChild
            variant="default"
            className="bg-[#33334F] hover:bg-[#33334F]/90 text-white font-medium px-6 py-1.5 rounded-full"
          >
            <a
              href="https://www.followop.com.br/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              Entrar
            </a>
          </Button>
        </div>

        {/* Menu mobile toggle */}
        <button
          className="md:hidden z-50 text-secondary"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 px-6 overflow-y-auto md:hidden">
          <div className="flex flex-col space-y-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-xl text-gray-800 font-medium py-2 border-b border-gray-100 hover:text-primary transition-colors flex items-center justify-between"
                onClick={toggleMenu}
              >
                {item.label}
                <ChevronDown size={20} className="text-gray-400" />
              </a>
            ))}
            <div className="flex flex-col gap-4 pt-4">
              <Button
                asChild
                variant="default"
                className="bg-[#33334F] text-white font-medium py-3 px-4 rounded-full text-center hover:bg-[#33334F]/90 transition-colors"
              >
                <a
                  href="https://www.followop.com.br/register"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Entrar
                </a>
              </Button>

              <Button
                asChild
                variant="apple"
                className="text-center py-3 px-4 text-sm"
              >
                <a
                  href="https://www.followop.com.br/register"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TESTE GRÁTIS 7 DIAS
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
