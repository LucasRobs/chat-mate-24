
import { useState, useEffect } from "react";
import { Clock, DollarSign, MessageCircle, Headphones, Zap } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const BenefitItem = ({ icon: Icon, title, description, delay }) => {
  return (
    <div
      className="flex flex-col items-center p-6 text-center h-full transition-opacity duration-500 ease-in-out card-with-patterns"
      style={{ transitionDelay: `${delay}ms`, minHeight: '200px' }}
    >
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 relative">
        <Icon className="w-8 h-8 text-primary" />
        <div className="absolute -top-1 -right-1 w-3 h-3">
          <div className="w-full h-full outline-circle-pattern"></div>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 whitespace-normal leading-tight">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed max-w-xs">{description}</p>
    </div>
  );
};

const Benefits = () => {
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

    const section = document.getElementById("benefits");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: "Tempo é Ouro: Atendimento 24/7",
      description: "Seu atendimento sempre ativo, dia e noite, aumentando suas chances de venda."
    },
    {
      icon: DollarSign,
      title: "Lucro Inteligente: Custo Reduzido em 97%",
      description: "Substitua gastos com SDR humano por uma solução de apenas R$ 0,44/hora, focando no seu retorno sobre investimento."
    },
    {
      icon: MessageCircle,
      title: "Conversão Turbinada: Follow-up Que Vende",
      description: "Não perca nenhuma oportunidade! Nosso sistema automatizado engaja leads e acelera suas conversões."
    },
    {
      icon: Headphones,
      title: "Eficiência Máxima: Atendimento Rápido e Preciso",
      description: "Respostas instantâneas e assertivas com IA, garantindo a melhor experiência para o cliente."
    },
    {
      icon: Zap,
      title: "Comece Já: Integração Super Simples",
      description: "Ative em minutos! Conecte ao seu WhatsApp e veja a transformação acontecer."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50 brand-decorations">
      {/* Subtle brand patterns */}
      <div className="absolute top-14 left-8 w-6 h-6 solid-circle-pattern opacity-20"></div>
      <div className="absolute bottom-10 right-12 w-8 h-8 half-circle-pattern opacity-15"></div>
      <div className="absolute top-40 right-20 w-5 h-5 impulso-pattern opacity-25"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        <div className={`mb-16 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Turbine Suas Vendas com Followop!</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Tecnologia de ponta gerando resultados incríveis para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className={`flex flex-col items-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <BenefitItem
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                delay={index * 100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
