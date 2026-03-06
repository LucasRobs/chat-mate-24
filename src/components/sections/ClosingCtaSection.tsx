
import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const MetaPartnerSection = () => {
  const isMobile = useIsMobile();

  const handleClick = () => {
    window.open("https://www.followop.com.br/register", "_blank");
  };

  return (
    <section className="w-full relative py-12">
      <div className="w-full bg-white/70 backdrop-blur-md rounded-[2.5rem] border border-gray-100 p-8 sm:p-12 shadow-sm transition-shadow duration-500 max-w-6xl mx-auto animated-section relative z-10 overflow-hidden">
        {/* Subtle tech background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-[80px] -z-10 animate-smoke"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-[80px] -z-10 animate-smoke delay-500"></div>

        <div className="grid md:grid-cols-2 items-center gap-12">
          <div className="blur-reveal" style={{ transitionDelay: "200ms" }}>
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
              A <strong>followop</strong> é uma plataforma aprovada e certificada pela Meta, garantindo conformidade com as diretrizes do <strong>WhatsApp Business API</strong>. Isso significa:
            </p>
            <ul className="mt-4 space-y-3 text-sm text-gray-700 stagger-container">
              <li className="flex items-start gap-2 stagger-item">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <span><strong>Baixo risco</strong> de banimento</span>
              </li>
              <li className="flex items-start gap-2 stagger-item">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <span><strong>Conexão estável e autorizada</strong></span>
              </li>
              <li className="flex items-start gap-2 stagger-item">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <span>Suporte direto da <strong>infraestrutura oficial</strong></span>
              </li>
            </ul>
            <div className="mt-8 blur-reveal delay-500">
              <Button
                asChild
                variant="apple"
                size={isMobile ? "default" : "lg"}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 h-auto text-sm sm:text-base font-medium rounded-full animated-button w-full sm:w-auto shadow-sm shadow-gray-200"
              >
                <a
                  href="https://www.followop.com.br/register"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Começar a automatizar
                  <span className="bg-[#2D2D4A] text-white p-1 rounded-full">
                    <ArrowRight size={12} />
                  </span>
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center blur-reveal" style={{ transitionDelay: "400ms" }}>
            <div className="relative group">
              <img
                src="/lovable-uploads/c5206104-ee78-44ed-b432-e4d2a4bb0863.png"
                alt="Meta Illustration"
                className="w-full max-w-sm object-contain drop-shadow-sm relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Block (Isolated outside the Meta box) */}
      <div className="mt-20 sm:mt-32 text-center pb-8 blur-reveal relative z-10" style={{ transitionDelay: "200ms" }}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-[1.1] mb-6">
          Pronto para transformar <br className="hidden sm:block" />
          <span className="text-[#16B763]">conversas em receita?</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto font-light mb-10">
          Junte-se às empresas inovadoras que já escalam suas vendas com o primeiro CRM autônomo nativo para WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            variant="apple"
            size={isMobile ? "default" : "lg"}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 h-auto text-sm sm:text-base font-medium rounded-full animated-button w-full sm:w-auto shadow-sm shadow-gray-200"
          >
            <a
              href="https://www.followop.com.br/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              Teste grátis agora
              <span className="bg-[#2D2D4A] text-white p-1 rounded-full flex items-center justify-center w-5 h-5 ml-1">
                <ArrowRight size={12} />
              </span>
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size={isMobile ? "default" : "lg"}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 h-auto text-sm sm:text-base font-medium rounded-full w-full sm:w-auto border-gray-300 hover:bg-gray-50 text-gray-900"
          >
            <a
              href="https://api.whatsapp.com/send?phone=+5585994314736&text=Ol%C3%A1%2C%20quero%20conhecer%20a%20followop"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com consultor
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MetaPartnerSection;
