import { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";

const Navbar = () => {
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
      <nav
        className={`rounded-full transition-all duration-300 backdrop-blur-md bg-white/70 shadow-md ${
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
            {["Funções", "Planos", "Empresa"].map((label, i) => (
              <a
                key={i}
                href={`#${label.toLowerCase()}`}
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
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md pt-20 px-6 overflow-y-auto md:hidden animate-fade-in">
            <div className="flex flex-col space-y-6">
              {["Funções", "Planos", "Empresa"].map((label, i) => (
                <a
                  key={i}
                  href={`#${label.toLowerCase()}`}
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
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
