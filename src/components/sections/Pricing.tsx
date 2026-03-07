
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

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
      id: "essencial",
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
      id: "growth",
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
      id: "scale-up",
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

        <div className="mt-8 md:hidden">
          <Tabs defaultValue="growth" className="w-full">
            <TabsList className="grid h-auto w-full grid-cols-3 rounded-[22px] bg-[#FAFAFA] p-1">
              {plans.map((plan) => (
                <TabsTrigger
                  key={plan.id}
                  value={plan.id}
                  className="rounded-[18px] px-2 py-3 text-xs font-semibold text-gray-500 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm"
                >
                  {plan.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {plans.map((plan, index) => {
              const isEnterprise = plan.title === "Scale Up";

              return (
                <TabsContent key={plan.id} value={plan.id} className="mt-4">
                  <div
                    className={cn(
                      "rounded-[32px] border bg-white/80 p-6 text-left shadow-sm",
                      plan.isPopular ? "border-primary" : "border-gray-100"
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">Plano {index + 1}</p>
                        <h3 className="mt-2 text-2xl font-semibold text-gray-900">{plan.title}</h3>
                        <p className="mt-1 text-sm text-gray-500">{plan.for}</p>
                      </div>
                      {plan.isPopular && (
                        <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                          Popular
                        </span>
                      )}
                    </div>

                    {plan.price ? (
                      <p className="mt-5 text-3xl font-bold text-primary">
                        {plan.price} <span className="text-sm font-medium text-gray-500">/mês</span>
                      </p>
                    ) : (
                      <p className="mt-5 text-lg font-semibold text-gray-900">Condições sob medida</p>
                    )}

                    <div className="mt-5 grid grid-cols-2 gap-2">
                      {plan.features.slice(0, 4).map((feature) => (
                        <div key={feature} className="rounded-2xl bg-[#FAFAFA] px-3 py-2 text-xs font-medium text-gray-600">
                          {feature}
                        </div>
                      ))}
                    </div>

                    <ul className="mt-6 space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6">
                      {!isEnterprise ? (
                        <Button
                          asChild
                          variant="apple"
                          size="default"
                          className="w-full animated-button text-sm font-medium py-3 rounded-xl shadow-sm transition-all duration-300"
                        >
                          <a
                            href="https://www.followop.com.br/pricing"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Teste grátis 15 dias
                            <ArrowRight size={14} />
                          </a>
                        </Button>
                      ) : (
                        <Button
                          asChild
                          variant="outline"
                          size="default"
                          className="w-full text-sm py-2 border-gray-300 hover:bg-gray-50 text-gray-900 group"
                        >
                          <a href="/scale-up">
                            Conhecer Plano Enterprise
                            <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>

        <div className="mt-8 hidden md:grid md:grid-cols-3 gap-6 justify-center">
          {plans.map((plan, index) => {
            const isEnterprise = plan.title === "Scale Up";
            return (
              <div
                key={index}
                className={`blur-reveal p-6 lg:p-8 bg-white/70 backdrop-blur-md shadow-sm hover:shadow-md rounded-[32px] min-h-[420px] flex flex-col justify-between group relative ${plan.isPopular ? "border-2 border-primary mt-6" : "border border-gray-100 mt-6"} hover:-translate-y-2 transition-transform duration-500`}
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
