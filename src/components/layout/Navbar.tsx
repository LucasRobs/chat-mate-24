
import { useState, useEffect } from "react";
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
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

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
        "sticky-nav py-3 sm:py-4 px-4 sm:px-6 md:px-12 lg:px-20 backdrop-blur-md transition-all duration-300",
        scrollY > 100 ? "bg-white/80 shadow-sm" : "bg-white",
        isNavHidden && !isOpen ? "hidden-nav" : "",
        isOpen ? "fixed inset-0 z-50 bg-white" : "z-40"
      )}
      style={{
        transform: isNavHidden && !isOpen ? "translateY(-100%)" : "translateY(0)",
        borderRadius: scrollY > 100 ? "0 0 24px 24px" : "0",
      }}
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

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-700 font-medium hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a 
            href="https://wa.me/5588997492536" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white font-medium bg-primary hover:bg-primary/90 rounded-full px-5 py-2 transition-all duration-300"
          >
            <Phone size={18} />
            <span>Contato</span>
          </a>
        </div>

        <button 
          className="md:hidden z-50 rounded-full p-2 hover:bg-gray-100 transition-colors" 
          onClick={toggleMenu}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

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
                href="https://wa.me/5588997492536" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-white font-medium bg-primary hover:bg-primary/90 rounded-full px-5 py-3 transition-all duration-300"
              >
                <Phone size={18} />
                <span>Contato</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
