import { cn } from "@/lib/utils";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png"
                alt="followop Logo"
                className="h-10 w-auto"
              />
              <span className="font-bold text-2xl">followop</span>
            </div>
            <p className="text-gray-300">
              Atendimento 24h no WhatsApp com IA avançada para o seu negócio.
            </p>
            <div className="flex gap-4 mt-4 flex-wrap">
              {/* Redes sociais */}
              {[
                "M22 12c0-5.523-4.477-10-10-10S2...",
                "M8.29 20.251c7.547 0 11.675-6.253...",
                "M12.315 2c2.43 0 2.784.013 3.808...",
                "M19.812 5.418c.861.23 1.538.907...",
              ].map((d, i) => (
                <a key={i} href="#" className="text-white hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={d}></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
                ["Início", "#"],
                ["Funcionalidades", "#features"],
                ["Preços", "#pricing"],
                ["Planos Completos", "https://www.followop.com.br/pricing"],
                ["Integrações", "#integrations"],
              ].map(([label, href], i) => (
                <li key={i}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {["Termos de Serviço", "Política de Privacidade", "Cookies", "LGPD"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Av. Paulista, 1000, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <a href="tel:+5588997492536" className="text-gray-300 text-sm hover:text-primary transition-colors">
                  +55 88 99749-2536
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <a href="mailto:contato@followop.com.br" className="text-gray-300 text-sm hover:text-primary transition-colors">
                  followop.oficial@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo e nome mobile */}
        <div className="flex flex-col items-center mt-12 lg:hidden">
          <img
            src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png"
            alt="followop Logo"
            className="h-8 w-auto mb-2"
          />
          <span className="text-lg font-semibold">followop</span>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} followop. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
