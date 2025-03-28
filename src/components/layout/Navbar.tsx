
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

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
    { label: "Início", href: "#" },
    { label: "Funcionalidades", href: "#features" },
    { label: "Preços", href: "#pricing" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent body scroll when menu is open on mobile
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <nav
      className={cn(
        "sticky-nav bg-white py-3 sm:py-4 px-4 sm:px-6 md:px-12 lg:px-20 shadow-sm",
        scrollY > 100 ? "glass" : "",
        isNavHidden && !isOpen ? "hidden-nav" : "",
        isOpen ? "fixed inset-0 z-50 bg-white" : ""
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 z-50">
          <img
            src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png"
            alt="followop Logo"
            className="h-8 w-auto sm:h-10"
          />
          <span className="font-bold text-xl sm:text-2xl text-secondary hidden md:inline-block">followop</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-700 font-medium hover:text-primary link-underline transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a 
            href="https://wa.me/5500000000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary font-medium"
          >
            <Phone size={18} />
            <span>Contato</span>
          </a>
          <Button className="bg-primary hover:bg-primary/90 btn-hover">
            Teste Grátis
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden z-50" 
          onClick={toggleMenu}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 px-6 overflow-y-auto md:hidden animate-fade-in">
          <div className="flex flex-col space-y-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-xl text-gray-800 font-medium py-2 border-b border-gray-100"
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-4 pt-4">
              <a 
                href="https://wa.me/5500000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary font-medium py-2"
              >
                <Phone size={18} />
                <span>Contato</span>
              </a>
              <Button className="bg-primary hover:bg-primary/90 btn-hover w-full mt-2">
                Teste Grátis
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
