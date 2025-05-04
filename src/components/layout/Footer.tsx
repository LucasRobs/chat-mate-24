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
      { name: "Sobre", href: "#about" },
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
      <div className="absolute inset-0 impulso-pattern opacity-5 pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Brand */}
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
                href="https://www.instagram.com/followop.ia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/followop/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contato */}
          <div className="lg:col-span-3">
            <h3 className="font-medium text-secondary mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-center gap-3">
                <Mail size={22} className="text-primary" />
                <a href="mailto:followop.oficial@gmail.com" className="hover:text-primary transition-colors">
                  followop.oficial@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary" />
                <a href="tel:+5588997492536" className="hover:text-primary transition-colors">
                  +55 (88) 99749-2536
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1" />
                <address className="not-italic leading-tight">
                  R. Antônio Augusto, 290<br />
                  Meireles, Fortaleza - CE<br />
                  CEP: 60110-370
                </address>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={20} className="text-primary" />
                <a href="https://www.followop.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  www.followop.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="lg:col-span-2">
              <h3 className="font-medium text-secondary mb-4 capitalize">
                {section === "product" ? "Produto" : section === "company" ? "Empresa" : "Legal"}
              </h3>
              <ul className="space-y-2">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-primary text-sm transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Rodapé inferior */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-center text-sm text-gray-500">
          <p>&copy; {currentYear} followop. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
