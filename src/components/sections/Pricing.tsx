import { useState, useEffect } from "react";
import PricingCard from "../ui-custom/PricingCard";
import { Button } from "@/components/ui/button";

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
      for: "Pequenos negócios e autônomos",
      features: [
        { text: "1 Funcionário de IA" },
        { text: "300 atendimentos/mês" },
        { text: "5.000 mensagens" },
        { text: "Atendimento contínuo" },
        { text: "Acesso à comunidade" },
      ],
    },
    {
      title: "Growth",
      price: "R$ 590",
      isPopular: true,
      for: "Empresas em crescimento",
      features: [
        { text: "3 Funcionários de IA" },
        { text: "1.500 atendimentos/mês" },
        { text: "20.000 mensagens" },
        { text: "Sempre disponível" },
        { text: "Comunidade exclusiva" },
        { text: "Automação de Follow-up inteligente" },
      ],
    },
    {
      title: "Scale Up",
      price: "R$ 1.290",
      for: "Operações de alto volume",
      features: [
        { text: "10 Funcionários de IA" },
        { text: "5.000 atendimentos/mês" },
        { text: "50.000 mensagens" },
        { text: "Atendimento prioritário" },
        { text: "Comunidade VIP exclusiva" },
        { text: "Automação avançada de Follow-up" },
        { text: "Suporte Premium 1:1" },
        { text: "Consultoria estratégica mensal" },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
            Planos e Preços
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-gray-900">
            Escolha o plano ideal para o seu negócio
          </h2>
          <p className="mt-6 text-xl text-gray-600">
            Cancele a qualquer momento. Sem compromisso de fidelidade.
          </p>
        </div>

        {/* Grid de Planos */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 flex flex-col justify-between p-8 bg-white shadow-lg rounded-xl min-h-[550px] ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <PricingCard
                  title={plan.title}
                  price={plan.price}
                  for={plan.for}
                  features={plan.features}
                  isPopular={plan.isPopular}
                />
                <div className="mt-auto text-center">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/5 w-full mt-4"
                    onClick={() =>
                      window.open("https://calendar.app.google/UYSBZ6HwfDj39UeCA", "_blank")
                    }
                  >
                    Agende uma reunião estratégica
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA final chamativo */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-6 text-lg font-medium">
            Quer entender melhor como podemos ajudar seu negócio? Vamos conversar!
          </p>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/5 px-6 py-3 text-lg font-semibold"
            onClick={() =>
              window.open("https://calendar.app.google/UYSBZ6HwfDj39UeCA", "_blank")
            }
          >
            Agendar uma reunião agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
