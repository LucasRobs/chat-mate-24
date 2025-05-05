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
    const handleScroll = () => setScrollY(window.scrollY);
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
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 px-2 sm:px-4">
      <nav
        className={cn(
          "floating-navbar rounded-full transition-all duration-300 backdrop-blur-lg bg-white/50 shadow-xl",
          scrollY > 20 ? "navbar-scrolled" : "navbar-top"
        )}
      >
        <div
          className={cn(
            "px-4 sm:px-6 lg:px-8 flex items-center justify-between relative transition-[height,padding] duration-300",
            scrollY > 20 ? "h-14 md:h-16" : "h-16 md:h-20"
          )}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 z-50 transition-transform duration-300 hover:scale-105">
            <div
              className={cn(
                "bg-[#D6F5C4] rounded-full flex items-center justify-center transition-all duration-300",
                scrollY > 20 ? "p-1.5" : "p-2"
              )}
            >
              <img
                src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png"
                alt="followop Logo"
                className={cn(
                  "w-auto transition-all duration-300",
                  scrollY > 20 ? "h-5 sm:h-6" : "h-6 sm:h-8"
                )}
              />
            </div>
          </a>

          {/* Centered menus - Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div
              className={cn(
                "bg-[#F1F1F1]/80 backdrop-blur-sm rounded-full flex items-center justify-center gap-8 lg:gap-12 transition-all duration-300 shadow-sm",
                scrollY > 20 ? "py-2.5 px-5" : "py-4 px-8"
              )}
            >
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={cn(
                    "text-gray-800 font-medium hover:text-primary transition-colors duration-200 nav-link",
                    scrollY > 20 ? "text-base" : "text-lg"
                  )}
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
              className={cn(
                "bg-[#0D3719] hover:bg-[#0D3719]/90 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-[1.02] flex items-center gap-2 animated-button",
                scrollY > 20 ? "px-5 py-1" : "px-6 py-1.5"
              )}
            >
              <a
                href="https://www.followop.com.br/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                <User size={scrollY > 20 ? 16 : 18} className="mr-2" />
                <span
                  className={cn(
                    "transition-all duration-300",
                    scrollY > 20 ? "text-sm" : "text-base"
                  )}
                >
                  Entrar
                </span>
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
          <div className="fixed inset-0 z-40 bg-white/90 backdrop-blur-lg pt-20 px-6 overflow-y-auto md:hidden animate-fade-in transition-opacity duration-300">
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
                  className="bg-[#0D3719] text-white font-medium py-3 px-4 rounded-full text-center hover:bg-[#0D3719]/90 transition-all duration-300 transform hover:scale-[1.02] animated-button flex items-center justify-center gap-2"
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

              {/* Branding dots */}
              <div className="absolute bottom-10 right-10">
                <div className="w-20 h-20 relative">
                  <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-primary/30 animate-float"></div>
                  <div
                    className="absolute top-8 left-8 w-6 h-6 rounded-full bg-primary/20 animate-float"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="absolute top-16 left-0 w-3 h-3 rounded-full bg-primary/10 animate-float"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
