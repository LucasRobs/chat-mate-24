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
        "1 Funcionário de IA",
        "300 atendimentos/mês",
        "5.000 mensagens",
        "Atendimento contínuo",
      ],
    },
    {
      title: "Growth",
      price: "R$ 590",
      isPopular: true,
      for: "Empresas em crescimento",
      features: [
        "3 Funcionários de IA",
        "1.500 atendimentos/mês",
        "20.000 mensagens",
        "Automação de Follow-up inteligente",
      ],
    },
    {
      title: "Scale Up",
      price: "R$ 1.290",
      for: "Operações de alto volume",
      features: [
        "10 Funcionários de IA",
        "5.000 atendimentos/mês",
        "50.000 mensagens",
        "Suporte Premium 1:1",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
          Planos e Preços
        </span>
        <h2 className="mt-6 text-3xl md:text-4xl font-bold text-gray-900">
          Escolha o plano ideal para o seu negócio
        </h2>
        <p className="mt-6 text-xl text-gray-600">
          Cancele a qualquer momento. Sem compromisso de fidelidade.
        </p>

        {/* Planos centralizados */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 p-8 bg-white shadow-lg rounded-xl min-h-[480px] flex flex-col justify-between ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
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
            </div>
          ))}
        </div>

        {/* Botões */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/5 px-6 py-3 text-lg font-semibold"
            onClick={() => window.open("https://www.followop.com.br/pricing", "_blank")}
          >
            Veja todos os detalhes dos planos
          </Button>

          <Button
            variant="default"
            className="bg-primary text-white hover:bg-primary-dark px-6 py-3 text-lg font-semibold"
            onClick={() => window.open("https://calendar.app.google/UYSBZ6HwfDj39UeCA", "_blank")}
          >
            Agende uma reunião estratégica
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
