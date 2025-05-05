// components/Navbar.tsx
import { useEffect, useState } from "react";
import { Menu, X, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Funções", href: "#features" },
  { label: "Planos", href: "#pricing" },
  { label: "Empresa", href: "#partners" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-2 sm:px-4 transition-all duration-300 ${
        scrolled ? "w-[90%]" : "w-[95%]"
      } max-w-7xl`}
    >
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`rounded-full backdrop-blur-md bg-white/70 shadow-md transition-all duration-300 ${
          scrolled ? "h-12 md:h-14" : "h-16 md:h-20"
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-full">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 z-50">
            <div
              className={`bg-[#D6F5C4] rounded-full flex items-center justify-center transition-all duration-300 ${
                scrolled ? "p-1" : "p-2"
              }`}
            >
              <img
                src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png"
                alt="Logo"
                className={`w-auto transition-all duration-300 ${
                  scrolled ? "h-4 sm:h-5" : "h-6 sm:h-8"
                }`}
              />
            </div>
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navItems.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`text-gray-800 font-medium hover:text-primary transition duration-200 ${
                  scrolled ? "text-sm" : "text-base"
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Botão Entrar */}
          <div className="hidden md:flex items-center">
            <a
              href="https://www.followop.com.br/register"
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-[#0D3719] hover:bg-[#0D3719]/90 text-white font-medium rounded-full transition-all duration-200 flex items-center gap-2 ${
                scrolled ? "px-4 py-1 text-sm" : "px-5 py-2 text-base"
              }`}
            >
              <User size={scrolled ? 14 : 18} className="mr-2" />
              Entrar
            </a>
          </div>

          {/* Menu Mobile Icon */}
          <button
            className="md:hidden z-50 text-secondary hover:text-primary transition duration-200"
            onClick={toggleMenu}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md pt-20 px-6 overflow-y-auto md:hidden"
            >
              <div className="flex flex-col space-y-6">
                {navItems.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={toggleMenu}
                    className="text-xl text-gray-800 font-medium py-2 border-b border-gray-100 hover:text-primary transition-colors duration-200"
                  >
                    {label}
                  </a>
                ))}

                <a
                  href="https://www.followop.com.br/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0D3719] text-white font-medium py-3 px-4 rounded-full text-center hover:bg-[#0D3719]/90 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <User size={18} className="mr-2" />
                  Entrar
                </a>
              </div>

              {/* Floating Dots */}
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;
