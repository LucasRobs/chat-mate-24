import { CheckCircle, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

const MetaPartnerSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 bg-gray-50 rounded-3xl shadow-md max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Text Section */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <img src="/meta-logo.svg" alt="Meta logo" className="h-6" />
            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">
              Certificada pela Meta
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            Parceira Oficial da Meta <br />
            (WhatsApp Business API)
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600">
            A <strong>Followop</strong> é uma plataforma aprovada e certificada pela Meta,
            garantindo conformidade com as diretrizes oficiais da <strong>WhatsApp Business API</strong>.
          </p>

          <ul className="mt-5 space-y-2 text-sm sm:text-base text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
              <span><strong>Baixo risco</strong> de banimento</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
              <span>Conexão <strong>estável e autorizada</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
              <span>Suporte direto da <strong>infraestrutura oficial</strong></span>
            </li>
          </ul>

          <div className="mt-6">
            <Button
              asChild
              size={isMobile ? "default" : "lg"}
              className="inline-flex items-center justify-center gap-2 text-sm sm:text-base py-2 sm:py-2.5 px-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow"
            >
              <a
                href="https://www.followop.com.br/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                TESTE GRÁTIS 7 DIAS
                <span className="bg-white text-green-600 p-1 rounded-full">
                  <ArrowRight size={14} />
                </span>
              </a>
            </Button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="hidden md:flex justify-center">
          <img
            src="/meta-big-symbol.png" // substitua pelo caminho correto do ícone grande da Meta
            alt="Meta Symbol"
            className="max-h-64 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default MetaPartnerSection;
