
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    product: [
      { name: "Recursos", href: "#features" },
      { name: "Preços", href: "#pricing" },
      { name: "FAQ", href: "#" },
    ],
    company: [
      { name: "Sobre", href: "#partners" },
      { name: "Parceiros", href: "#partners" },
      { name: "Contato", href: "#" },
    ],
    legal: [
      { name: "Termos de Uso", href: "#" },
      { name: "Privacidade", href: "#" },
      { name: "Cookies", href: "#" },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 pt-12 pb-8 border-t border-gray-100 relative overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 impulso-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-3">
            <a href="#" className="inline-flex items-center gap-2">
              <img
                src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png"
                alt="followop Logo"
                className="h-8 w-auto"
              />
              <span className="font-bold text-xl text-secondary">followop</span>
            </a>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              Automatize seu atendimento no WhatsApp de forma profissional e eficiente.
            </p>
            <div className="flex mt-6 space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3">
            <h3 className="font-medium text-secondary mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-500 text-sm">
                <Mail size={16} className="text-primary" />
                <a href="mailto:contato@followop.com.br" className="hover:text-primary transition-colors">
                  contato@followop.com.br
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-500 text-sm">
                <Phone size={16} className="text-primary" />
                <a href="tel:+551199999999" className="hover:text-primary transition-colors">
                  +55 (11) 9 9999-9999
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-500 text-sm">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-1" />
                <span>
                  Av. Paulista, 1000, Sala 101<br />
                  Bela Vista, São Paulo - SP<br />
                  CEP: 01310-100
                </span>
              </li>
              <li className="flex items-center gap-2 text-gray-500 text-sm">
                <Globe size={16} className="text-primary" />
                <a href="https://www.followop.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  www.followop.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-2">
            <h3 className="font-medium text-secondary mb-4">Produto</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-primary text-sm transition-colors link-underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-medium text-secondary mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-primary text-sm transition-colors link-underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-medium text-secondary mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-primary text-sm transition-colors link-underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} followop. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex items-center">
            <span className="text-sm text-gray-500">
              <span className="text-red-500"></span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
