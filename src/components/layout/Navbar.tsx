
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
    { label: "Empresa", href: "#about" },
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
        "sticky-nav bg-white py-4 sm:py-6 px-4 sm:px-6 md:px-12 lg:px-20 transition-all duration-300",
        scrollY > 100 ? "shadow-md glass" : "",
        isNavHidden && !isOpen ? "hidden-nav" : "",
        isOpen ? "fixed inset-0 z-50 bg-white" : ""
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 z-50 animate-fade-in-down">
          <img
            src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png"
            alt="followop Logo"
            className="h-8 w-auto sm:h-10 transition-transform duration-300 hover:scale-110"
          />
          <span className="font-bold text-xl sm:text-2xl text-secondary">followop</span>
        </a>

        <div className="hidden md:flex items-center">
          <div className="bg-gray-100 rounded-full py-2 px-2 flex">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 font-medium hover:text-primary px-6 py-1 transition-colors relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-primary before:scale-x-0 before:origin-right before:transition-transform hover:before:scale-x-100 hover:before:origin-left"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:flex">
          <Button
            asChild
            variant="default"
            className="bg-secondary hover:bg-secondary/90 text-white font-medium px-8 py-2 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
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

        <button
          className="md:hidden z-50 text-secondary"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 px-6 overflow-y-auto md:hidden animate-fade-in-down">
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
                className="bg-secondary text-white font-medium py-2 px-4 rounded-full text-center hover:bg-secondary/90 transition-colors"
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
