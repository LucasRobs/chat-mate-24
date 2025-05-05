import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-800 hover:text-primary transition">Funções</a>
          <a href="#pricing" className="text-gray-800 hover:text-primary transition">Planos</a>
          <a href="#partners" className="text-gray-800 hover:text-primary transition">Empresa</a>
        </div>

        {/* Botão Entrar */}
        <div className="hidden md:block">
          <a href="/register" className="bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800 transition">Entrar</a>
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-primary transition">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Dropdown Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md px-4 pt-4 pb-2 space-y-2">
          <a href="#features" className="block text-gray-800 hover:text-primary transition">Funções</a>
          <a href="#pricing" className="block text-gray-800 hover:text-primary transition">Planos</a>
          <a href="#partners" className="block text-gray-800 hover:text-primary transition">Empresa</a>
          <a href="/register" className="block bg-green-700 text-white px-4 py-2 rounded-full text-center hover:bg-green-800 transition">Entrar</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
