
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
        "Até 3 Conexões",
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
        "Até 10 Conexões",
        "CRM com IA Integrada",
        "Follow-up Automático",
        "Integração API Oficial",
        "Painel de Métricas",
        "Suporte Prioritário",
        "6.000 atendimentos",
        "50.000 mensagens"
      ],
    },
  ];

  return (
    <section id="pricing" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
          Escolha o plano ideal para o seu negócio
        </h2>
        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600">
          Sem compromisso de fidelidade. Cancele quando quiser.
        </p>

        {/* Planos centralizados */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 justify-center">
          {plans.map((plan, index) => {
            const isEnterprise = plan.title === "Scale Up";
            return (
              <div
                key={index}
                className={`transform transition-all duration-700 p-4 sm:p-5 bg-white shadow-lg rounded-xl min-h-[300px] sm:min-h-[360px] flex flex-col justify-between ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                  } ${plan.isPopular ? "border-2 border-primary" : "border border-gray-100"} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                )}
                <div>
                  <h3 className="text-base sm:text-xl font-semibold text-gray-900">{plan.title}</h3>
                  <p className="text-gray-600 mt-1 text-xs sm:text-sm">{plan.for}</p>
                  {plan.price && (
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mt-2 sm:mt-3">
                      {plan.price} <span className="text-sm sm:text-base font-medium">/mês</span>
                    </p>
                  )}

                  {/* Lista de funcionalidades */}
                  <ul className="mt-3 sm:mt-5 space-y-1.5 sm:space-y-2 text-left">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 sm:gap-2 text-gray-700 text-xs sm:text-sm">
                        <Check className="text-green-500 flex-shrink-0" size={isMobile ? 14 : 16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 sm:mt-5">
                  {!isEnterprise ? (
                    <Button
                      asChild
                      variant="apple"
                      size={isMobile ? "default" : "lg"}
                      className="w-full animated-button text-xs sm:text-sm py-1.5 sm:py-2"
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
            );
          })}
        </div>
      </div >
    </section >
  );
};

export default Pricing;
