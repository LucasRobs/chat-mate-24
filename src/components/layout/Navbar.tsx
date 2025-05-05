import { useState, useEffect } from "react";
import { Menu, X, User, Grid3X3, DollarSign, Building2 } from "lucide-react";
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
    { label: "Funções", href: "#features", icon: <Grid3X3 size={18} /> },
    { label: "Planos", href: "#pricing", icon: <DollarSign size={18} /> },
    { label: "Empresa", href: "#partners", icon: <Building2 size={18} /> },
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
    <div
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 px-2 transition-all duration-300",
        scrollY > 20 ? "w-[80%]" : "w-[95%]"
      )}
    >
      <nav
        className={cn(
          "floating-navbar rounded-full transition-all duration-300 backdrop-blur-md bg-white/70 shadow-md",
          scrollY > 20 ? "navbar-scrolled" : "navbar-top"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between relative transition-all duration-300",
            scrollY > 20 ? "h-12 md:h-14 px-3" : "h-16 md:h-20 px-6"
          )}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 z-50">
            <div
              className={cn(
                "bg-[#D6F5C4] rounded-full flex items-center justify-center transition-all duration-300",
                scrollY > 20 ? "p-1.5" : "p-2"
              )}
            >
              <img
                src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png"
                alt="Logo"
                className={cn(
                  "w-auto transition-all duration-300",
                  scrollY > 20 ? "h-5 sm:h-6" : "h-6 sm:h-8"
                )}
              />
            </div>
          </a>

          {/* Centered Menus (Desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div
              className={cn(
                "bg-[#F1F1F1] rounded-full flex items-center justify-center gap-4 transition-all duration-300",
                scrollY > 20 ? "py-1.5 px-3" : "py-4 px-8"
              )}
            >
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={cn(
                    "text-gray-800 font-medium hover:text-primary transition-colors duration-200 flex items-center justify-center",
                    scrollY > 20 ? "text-[0px] w-6 h-6" : "text-base gap-2"
                  )}
                >
                  {item.icon}
                  <span className={scrollY > 20 ? "sr-only" : "inline"}>
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              variant="default"
              className={cn(
                "bg-[#0D3719] hover:bg-[#0D3719]/90 text-white font-medium rounded-full transition-all duration-200 flex items-center gap-2",
                scrollY > 20 ? "px-4 py-1.5 text-sm" : "px-6 py-2 text-base"
              )}
            >
              <a
                href="https://www.followop.com.br/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                <User size={scrollY > 20 ? 16 : 18} />
                {scrollY > 20 ? null : <span>Entrar</span>}
              </a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden z-50 text-secondary hover:text-primary transition-colors duration-200"
            onClick={toggleMenu}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md pt-20 px-6 overflow-y-auto md:hidden animate-fade-in">
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
                  className="bg-[#0D3719] text-white font-medium py-3 px-4 rounded-full hover:bg-[#0D3719]/90 transition duration-200 flex items-center justify-center gap-2"
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
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
