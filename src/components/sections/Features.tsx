
import React from 'react';
import FeatureCard from '../ui-custom/FeatureCard';
import { MessageSquare, Clock, BarChart, Zap, Globe, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <MessageSquare className="h-10 w-10 text-emerald-500" />,
      title: 'Respostas Inteligentes',
      description: 'IA treinada para responder dúvidas dos clientes com precisão e personalidade.',
    },
    {
      icon: <Clock className="h-10 w-10 text-emerald-500" />,
      title: 'Disponibilidade 24/7',
      description: 'Atendimento automatizado disponível a qualquer hora, todos os dias da semana.',
    },
    {
      icon: <BarChart className="h-10 w-10 text-emerald-500" />,
      title: 'Relatórios Detalhados',
      description: 'Análise completa das interações para melhorar seu atendimento.',
    },
    {
      icon: <Zap className="h-10 w-10 text-emerald-500" />,
      title: 'Integração Rápida',
      description: 'Configure em minutos e comece a usar imediatamente em sua plataforma.',
    },
    {
      icon: <Globe className="h-10 w-10 text-emerald-500" />,
      title: 'Múltiplos Canais',
      description: 'Funciona com WhatsApp, Instagram, Facebook e seu próprio site.',
    },
    {
      icon: <Shield className="h-10 w-10 text-emerald-500" />,
      title: 'Segurança Total',
      description: 'Protocolos avançados para garantir a segurança dos dados dos clientes.',
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Funcionalidades Principais</h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Nossa plataforma oferece tudo o que você precisa para automatizar e aprimorar sua comunicação com clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="hover-scale transition-all duration-300 hover:shadow-lg h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
