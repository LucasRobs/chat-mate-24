import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MetaPartnerSection = () => {
  const handleClick = () => {
    window.open("https://www.followop.com.br/register", "_blank");
  };

  return (
    <section className="w-full bg-[#f5f7f9] rounded-2xl p-6 sm:p-10 shadow-md max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 items-center gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img
              src="/lovable-uploads/c5206104-ee78-44ed-b432-e4d2a4bb0863.png"
              alt="Meta logo"
              className="h-6 w-auto"
            />
            <span className="bg-green-100 text-green-800 px-2 py-0.5 text-xs rounded-full font-medium">
              Certificada pela Meta
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-snug">
            Parceira Oficial da Meta<br />
            <span className="text-lg font-medium text-gray-700">(WhatsApp Business API)</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3">
            A <strong>Followop</strong> é uma plataforma aprovada e certificada pela Meta, garantindo conformidade com as diretrizes do <strong>WhatsApp Business API</strong>. Isso significa:
          </p>
          <ul className="mt-4 space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
              <span><strong>Baixo risco</strong> de banimento</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
              <span><strong>Conexão estável e autorizada</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
              <span>Suporte direto da <strong>infraestrutura oficial</strong></span>
            </li>
          </ul>
          <div className="mt-4 sm:mt-5">
            <Button
              asChild
              variant="apple"
              size={isMobile ? "default" : "lg"}
              className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm py-2 sm:py-2.5 h-auto animated-button font-light"
            >
              <a
                href="https://www.followop.com.br/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                Teste Grátis 7 dias
                <span className="bg-[#2D2D4A] text-white p-1 rounded-full">
                  <ArrowRight size={12} />
                </span>
              </a>
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src="/lovable-uploads/c5206104-ee78-44ed-b432-e4d2a4bb0863.png"
            alt="Meta Illustration"
            className="w-full max-h-80 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default MetaPartnerSection;
