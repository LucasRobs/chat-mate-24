import { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detecta rolagem para aplicar estilos
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Alterna o menu mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl z-50 px-2 sm:px-4">
      <nav
        className={`rounded-full transition-all duration-300 backdrop-blur-md bg-white/70 shadow-md ${
          scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-full">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 z-50">
            <div
              className={`bg-[#D6F5C4] rounded-full flex items-center justify-center transition-all duration-300 ${
                scrolled ? "p-1.5" : "p-2"
              }`}
            >
              <img
                src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png"
                alt="Logo"
                className={`w-auto transition-all duration-300 ${
                  scrolled ? "h-5 sm:h-6" : "h-6 sm:h-8"
                }`}
              />
            </div>
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <a
              href="#features"
              className={`text-gray-800 font-medium hover:text-primary transition-colors duration-200 ${
                scrolled ? "text-base" : "text-lg"
              }`}
            >
              Funções
            </a>
            <a
              href="#pricing"
              className={`text-gray-800 font-medium hover:text-primary transition-colors duration-200 ${
                scrolled ? "text-base" : "text-lg"
              }`}
            >
              Planos
            </a>
            <a
              href="#partners"
              className={`text-gray-800 font-medium hover:text-primary transition-colors duration-200 ${
                scrolled ? "text-base" : "text-lg"
              }`}
            >
              Empresa
            </a>
          </div>

          {/* Botão Entrar */}
          <div className="hidden md:flex items-center">
            <a
              href="https://www.followop.com.br/register"
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-[#0D3719] hover:bg-[#0D3719]/90 text-white font-medium rounded-full transition-all duration-200 flex items-center gap-2 ${
                scrolled ? "px-5 py-1 text-sm" : "px-6 py-1.5 text-base"
              }`}
            >
              <User size={scrolled ? 16 : 18} className="mr-2" />
              Entrar
            </a>
          </div>

          {/* Ícone Menu Mobile */}
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
          <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md pt-20 px-6 overflow-y-auto md:hidden animate-fade-in">
            <div className="flex flex-col space-y-6">
              <a
                href="#features"
                className="text-xl text-gray-800 font-medium py-2 border-b border-gray-100 hover:text-primary transition-colors duration-200"
                onClick={toggleMenu}
              >
                Funções
              </a>
              <a
                href="#pricing"
                className="text-xl text-gray-800 font-medium py-2 border-b border-gray-100 hover:text-primary transition-colors duration-200"
                onClick={toggleMenu}
              >
                Planos
              </a>
              <a
                href="#partners"
                className="text-xl text-gray-800 font-medium py-2 border-b border-gray-100 hover:text-primary transition-colors duration-200"
                onClick={toggleMenu}
              >
                Empresa
              </a>
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
