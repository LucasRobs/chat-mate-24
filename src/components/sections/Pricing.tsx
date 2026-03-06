
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ContactModal } from "../ui-custom/ContactModal";

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const pricingElement = document.getElementById("pricing");
    if (pricingElement) {
      observer.observe(pricingElement);
    }

    return () => {
      if (pricingElement) {
        observer.unobserve(pricingElement);
      }
    };
  }, []);

  const plans = [
    {
      title: "Essencial",
      price: "R$ 297",
      for: "Para começar",
      features: [
        "1 Conexão WhatsApp",
        "Atendimento Básico IA",
        "Suporte em até 48h",
        "600 atendimentos",
        "5.000 mensagens"
      ],
    },
    {
      title: "Growth",
      price: "R$ 590",
      isPopular: true,
      for: "O mais escolhido",
      features: [
        "Até 3 Conexões WhatsApp",
        "CRM com IA Integrada",
        "Follow-up Automático",
        "Integração API Oficial",
        "Painel de Métricas",
        "Suporte Prioritário",
        "2.500 atendimentos",
        "20.000 mensagens"
      ],
    },
    {
      title: "Scale Up",
      for: "Operações de alto volume",
      features: [
        "Até 10 Conexões WhatsApp",
        "CRM com IA Integrada",
        "Follow-up Inteligente com IA",
        "Integração API Oficial",
        "Painel de Métricas Avançado",
        "Suporte Prioritário",
        "6.000 atendimentos",
        "50.000 mensagens"
      ],
    },
  ];

  return (
    <section id="pricing" className="bg-white relative py-20 overflow-hidden">
      {/* Tech decorative background */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-green-50/50 rounded-full blur-[100px] -z-10 animate-smoke"></div>
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-50/40 rounded-full blur-[80px] -z-10 animate-smoke delay-700"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
        <div className="blur-reveal" style={{ transitionDelay: "100ms" }}>
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium tracking-wide animate-pulse">
            Investimento
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
            Escolha o plano ideal <br className="hidden sm:block" />
            <span className="text-[#16B763]">para o seu negócio</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto font-light">
            Sem compromisso de fidelidade. Cancele quando quiser.
          </p>
        </div>

        {/* Planos centralizados */}
        <div className="mt-6 sm:mt-8 flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-3 justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {plans.map((plan, index) => {
            const isEnterprise = plan.title === "Scale Up";
            return (
              <div
                key={index}
                className={`blur-reveal shrink-0 snap-center w-[85%] sm:w-auto p-6 sm:p-8 bg-white/70 backdrop-blur-md shadow-sm hover:shadow-md rounded-[32px] min-h-[300px] sm:min-h-[400px] flex flex-col justify-between group relative ${plan.isPopular ? "border-2 border-primary mt-4 sm:mt-6" : "border border-gray-100 mt-4 sm:mt-6"} hover:-translate-y-2 transition-transform duration-500`}
                style={{ transitionDelay: `${200 + index * 200}ms` }}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-primary text-white px-5 py-1.5 rounded-full text-xs font-semibold shadow-sm z-30 tracking-wide">
                    Popular
                  </div>
                )}
                <div className="relative z-10 flex flex-col h-full flex-grow">
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">{plan.title}</h3>
                    <p className="text-gray-600 mt-1 text-xs sm:text-sm">{plan.for}</p>
                    {plan.price && (
                      <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mt-2 sm:mt-3">
                        {plan.price} <span className="text-sm sm:text-base font-medium">/mês</span>
                      </p>
                    )}

                    {/* Lista de funcionalidades */}
                    <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-left">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 text-xs sm:text-sm">
                          <Check className="text-green-500 flex-shrink-0 mt-0.5" size={isMobile ? 14 : 16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-6 sm:pt-8 w-full">
                    {!isEnterprise ? (
                      <Button
                        asChild
                        variant="apple"
                        size={isMobile ? "default" : "lg"}
                        className="w-full animated-button text-sm font-medium py-3 rounded-xl shadow-sm transition-all duration-300"
                      >
                        <a
                          href="https://www.followop.com.br/pricing"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Teste grátis 15 dias
                          <ArrowRight size={isMobile ? 14 : 16} />
                        </a>
                      </Button>
                    ) : (
                      <Button
                        asChild
                        variant="outline"
                        size={isMobile ? "default" : "lg"}
                        className="w-full text-xs sm:text-sm py-1.5 sm:py-2 border-gray-300 hover:bg-gray-50 text-gray-900 group"
                      >
                        <a href="/scale-up">
                          Conhecer Plano Enterprise
                          <ArrowRight size={isMobile ? 14 : 16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
