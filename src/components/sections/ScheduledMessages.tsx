
import React from "react";
import { Calendar, Clock, Send, Users } from "lucide-react";
import FeatureCard from "@/components/ui-custom/FeatureCard";

const ScheduledMessages = () => {
  return (
    <section className="py-12 sm:py-16 bg-white relative overflow-hidden" id="scheduled-messages">
      {/* Background pattern with concentric circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-5 followop-pattern"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8 reveal">
          <span className="bg-primary/10 text-primary px-3 py-0.5 rounded-full text-xs font-medium">
            Mensagens Agendadas
          </span>
          <h2 className="mt-3 text-xl md:text-2xl font-bold text-secondary">
            Aumente suas vendas com mensagens enviadas no <span className="text-primary">momento ideal</span>
          </h2>
          <p className="mt-2 text-sm text-gray-600 max-w-2xl mx-auto">
            Impulsione sua taxa de conversão com mensagens automatizadas estrategicamente programadas.
          </p>
        </div>
        
        <div className="flex justify-center">
          {/* Features */}
          <div className="space-y-6 reveal max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FeatureCard 
                icon={Calendar} 
                title="Agendamento inteligente" 
                description="Configure mensagens para momentos de maior engajamento, aumentando suas taxas de abertura."
              />
              <FeatureCard 
                icon={Users} 
                title="Segmentação avançada" 
                description="Envie mensagens personalizadas para diferentes grupos, aumentando a relevância."
              />
              <FeatureCard 
                icon={Clock} 
                title="Sequências automáticas" 
                description="Crie jornadas de mensagens automáticas em intervalos estratégicos para nutrir leads."
              />
              <FeatureCard 
                icon={Send} 
                title="Campanhas em massa" 
                description="Alcance milhares de clientes com mensagens que parecem individuais."
              />
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-base font-semibold text-secondary mb-2">Como funciona:</h3>
              <ol className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">1</span>
                  <span>Importe sua base de contatos ou conecte com seu CRM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">2</span>
                  <span>Crie mensagens persuasivas com campos dinâmicos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">3</span>
                  <span>Selecione gatilhos inteligentes de disparo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">4</span>
                  <span>Acompanhe métricas de entrega e conversão</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduledMessages;
