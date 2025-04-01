
import { useState, useEffect } from "react";
import PricingCard from "../ui-custom/PricingCard";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (document.getElementById("pricing")) {
      observer.observe(document.getElementById("pricing")!);
    }

    return () => {
      if (document.getElementById("pricing")) {
        observer.unobserve(document.getElementById("pricing")!);
      }
    };
  }, []);

  const plans = [
    {
      title: "Plano Aceleração",
      price: "R$ 297",
      features: [
        { text: "1 Funcionário de IA" },
        { text: "300 atendimentos/mês" },
        { text: "5.000 mensagens" },
        { text: "Atendimento 24/7" },
        { text: "Acesso à comunidade" },
      ],
    },
    {
      title: "Plano Growth",
      price: "R$ 590",
      isPopular: true,
      features: [
        { text: "3 Funcionários de IA" },
        { text: "1.500 atendimentos/mês" },
        { text: "20.000 mensagens" },
        { text: "Atendimento 24/7" },
        { text: "Comunidade exclusiva" },
        { text: "Automação de Follow-up inteligente" },
      ],
    },
    {
      title: "Plano Scale Up",
      price: "R$ 1.290",
      features: [
        { text: "10 Funcionários de IA" },
        { text: "5.000 atendimentos/mês" },
        { text: "50.000 mensagens" },
        { text: "Atendimento 24/7 com prioridade" },
        { text: "Comunidade VIP exclusiva" },
        { text: "Automação avançada de Follow-up" },
        { text: "Suporte Premium 1:1" },
        { text: "Consultoria estratégica mensal" },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
            Planos e Preços
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-secondary">
            Escolha o plano ideal para o seu negócio
          </h2>
          <p className="mt-6 text-xl text-gray-600">
            Cancele a qualquer momento. Sem compromisso de fidelidade.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <PricingCard
                  title={plan.title}
                  price={plan.price}
                  features={plan.features}
                  isPopular={plan.isPopular}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 mb-4">Comece a automatizar em 5 minutos! Sem necessidade de cartão de crédito.</p>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.followop.com.br/pricing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/5 btn-hover"
            >
              Ver detalhes completos dos planos <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
