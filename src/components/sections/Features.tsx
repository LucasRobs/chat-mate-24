
import React, { useState } from 'react';
import FeatureCard from '../ui-custom/FeatureCard';
import { MessageSquare, Clock, BarChart, Zap, Globe, Shield, Users, FileText, Brain, Bot, Database, Lightbulb } from 'lucide-react';
import { Button } from '../ui/button';

const Features = () => {
  const [showMore, setShowMore] = useState(false);
  
  const initialFeatures = [
    {
      icon: MessageSquare,
      title: 'Respostas Inteligentes',
      description: 'IA treinada para responder dúvidas dos clientes com precisão e personalidade.',
    },
    {
      icon: Clock,
      title: 'Disponibilidade 24/7',
      description: 'Atendimento automatizado disponível a qualquer hora, todos os dias da semana.',
    },
    {
      icon: BarChart,
      title: 'Relatórios Detalhados',
      description: 'Análise completa das interações para melhorar seu atendimento.',
    },
    {
      icon: Zap,
      title: 'Integração Rápida',
      description: 'Configure em minutos e comece a usar imediatamente em sua plataforma.',
    },
    {
      icon: Globe,
      title: 'Múltiplos Canais',
      description: 'Funciona com WhatsApp, Instagram, Facebook e seu próprio site.',
    },
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Protocolos avançados para garantir a segurança dos dados dos clientes.',
    },
  ];

  const additionalFeatures = [
    {
      icon: Users,
      title: 'Gestão de Leads',
      description: 'Organize automaticamente seus leads com base em interesses e estágio no funil.',
    },
    {
      icon: FileText,
      title: 'Templates Personalizados',
      description: 'Crie e salve templates de mensagens para diferentes situações de atendimento.',
    },
    {
      icon: Brain,
      title: 'Aprendizado Contínuo',
      description: 'IA que aprende com cada interação para melhorar constantemente as respostas.',
    },
    {
      icon: Bot,
      title: 'Personalidade Customizável',
      description: 'Configure o tom e estilo de comunicação do seu assistente virtual.',
    },
    {
      icon: Database,
      title: 'Integração com CRM',
      description: 'Conecte-se facilmente com os principais sistemas de CRM do mercado.',
    },
    {
      icon: Lightbulb,
      title: 'Sugestões Inteligentes',
      description: 'Recomendações para melhorar suas taxas de conversão com base em dados.',
    },
  ];

  const visibleFeatures = showMore 
    ? [...initialFeatures, ...additionalFeatures] 
    : initialFeatures;

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
          {visibleFeatures.map((feature, index) => (
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
        
        {!showMore && (
          <div className="flex justify-center mt-12">
            <Button 
              onClick={() => setShowMore(true)}
              className="group bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
            >
              Exibir mais funcionalidades
              <span className="transition-transform duration-300 group-hover:translate-y-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;
