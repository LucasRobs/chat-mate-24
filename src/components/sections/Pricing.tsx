
import React from 'react';
import PricingCard from '../ui-custom/PricingCard';
import { Check } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: 'R$99',
      description: 'Ideal para pequenas empresas começando com IA',
      period: '/mês',
      features: [
        'Até 500 mensagens/mês',
        'Integração com WhatsApp',
        'Respostas automáticas',
        'Suporte por email',
        'Horário comercial',
      ],
      cta: 'Começar Agora',
      isPopular: false,
    },
    {
      name: 'Growth',
      price: 'R$299',
      description: 'Perfeito para empresas em crescimento',
      period: '/mês',
      features: [
        'Até 3.000 mensagens/mês',
        'Todas as integrações',
        'Respostas personalizadas',
        'Relatórios avançados',
        'Suporte prioritário',
        'Configuração assistida',
      ],
      cta: 'Escolher Growth',
      isPopular: true,
    },
    {
      name: 'Enterprise',
      price: 'R$999',
      description: 'Para grandes empresas com alto volume',
      period: '/mês',
      features: [
        'Mensagens ilimitadas',
        'API personalizada',
        'Integrações avançadas',
        'Gerente de conta dedicado',
        'SLA garantido',
        'Treinamento personalizado',
      ],
      cta: 'Falar com Vendas',
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Planos Simples e Transparentes</h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Escolha o plano ideal para o tamanho do seu negócio, sem surpresas ou taxas ocultas.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`w-full sm:w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] max-w-sm ${
                plan.isPopular ? 'md:-mt-4 lg:-mt-8 md:mb-4 lg:mb-0' : ''
              }`}
            >
              <PricingCard
                name={plan.name}
                price={plan.price}
                description={plan.description}
                period={plan.period}
                features={plan.features}
                cta={plan.cta}
                isPopular={plan.isPopular}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
