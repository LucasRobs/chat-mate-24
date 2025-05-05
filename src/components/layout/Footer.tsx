
import { Instagram, Linkedin, Mail, Phone, MapPin, Globe } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const isMobile = useIsMobile();

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
    <footer className="bg-gradient-to-b from-white to-gray-50 pt-8 pb-4 md:pt-12 md:pb-8 border-t border-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 impulso-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 mb-6 md:mb-0">
            <a href="#" className="inline-flex items-center gap-2">
              <img
                src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png"
                alt="followop Logo"
                className="h-6 md:h-8 w-auto"
              />
              <span className="font-bold text-lg md:text-xl text-secondary">followop</span>
            </a>
            <p className="mt-2 md:mt-4 text-gray-500 text-xs md:text-sm leading-relaxed">
              Automatize seu atendimento no WhatsApp de forma profissional e eficiente.
            </p>
            <div className="flex mt-3 md:mt-6 space-x-3 md:space-x-4">
              <a
                href="https://www.instagram.com/followop.ia?igsh=MTRyajNya285dm5icA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors transform hover:scale-110 duration-300"
                aria-label="Instagram"
              >
                <Instagram size={isMobile ? 16 : 20} />
              </a>
              <a
                href="https://www.linkedin.com/company/followop/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors transform hover:scale-110 duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={isMobile ? 16 : 20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-3 mb-6 md:mb-0">
            <h3 className="font-medium text-secondary text-sm md:text-base mb-2 md:mb-4">Contato</h3>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-500">
              <li className="flex items-center gap-2 md:gap-3">
                <Mail size={isMobile ? 14 : 20} className="text-primary" />
                <a href="mailto:followop.oficial@gmail.com" className="hover:text-primary transition-colors">
                  followop.oficial@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <Phone size={isMobile ? 14 : 20} className="text-primary" />
                <a href="tel:+5588997492536" className="hover:text-primary transition-colors">
                  +55 (88) 99749-2536
                </a>
              </li>
              {!isMobile && (
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-primary mt-1" />
                  <address className="not-italic leading-tight">
                    R. Antônio Augusto, 290<br />
                    Meireles, Fortaleza - CE<br />
                    CEP: 60110-370
                  </address>
                </li>
              )}
              <li className="flex items-center gap-2 md:gap-3">
                <Globe size={isMobile ? 14 : 20} className="text-primary" />
                <a
                  href="https://www.followop.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  www.followop.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Links - Mobile: 2 columns in 1 row, Desktop: 3 separate columns */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-medium text-secondary text-sm md:text-base mb-2 md:mb-4">Produto</h3>
            <ul className="space-y-1 md:space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-primary text-xs md:text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="font-medium text-secondary text-sm md:text-base mb-2 md:mb-4">Empresa</h3>
            <ul className="space-y-1 md:space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-primary text-xs md:text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2 mt-4 md:mt-0">
            <h3 className="font-medium text-secondary text-sm md:text-base mb-2 md:mb-4">Legal</h3>
            <ul className="space-y-1 md:space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-primary text-xs md:text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 md:mt-12 pt-4 md:pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-xs md:text-sm">
            &copy; {currentYear} followop. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
