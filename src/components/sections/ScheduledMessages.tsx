
import React from "react";
import { Calendar, Clock, Send, Users } from "lucide-react";
import FeatureCard from "@/components/ui-custom/FeatureCard";

const ScheduledMessages = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="scheduled-messages">
      {/* Background pattern with concentric circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-5 followop-pattern"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16 reveal">
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
            Mensagens Agendadas
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-secondary">
            Aumente suas vendas com mensagens enviadas no <span className="text-primary">momento ideal</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Impulsione sua taxa de conversão com mensagens automatizadas estrategicamente programadas para seus clientes.
          </p>
        </div>
        
        <div className="flex justify-center">
          {/* Features */}
          <div className="space-y-8 reveal max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard 
                icon={Calendar} 
                title="Agendamento inteligente" 
                description="Configure mensagens para momentos de maior engajamento, aumentando drasticamente suas taxas de abertura e resposta."
              />
              <FeatureCard 
                icon={Users} 
                title="Segmentação avançada" 
                description="Envie mensagens personalizadas para diferentes grupos baseado em comportamento, aumentando a relevância e conversão."
              />
              <FeatureCard 
                icon={Clock} 
                title="Sequências automáticas" 
                description="Crie jornadas de mensagens que são enviadas automaticamente em intervalos estratégicos para nutrir leads."
              />
              <FeatureCard 
                icon={Send} 
                title="Campanhas em massa" 
                description="Alcance milhares de clientes simultaneamente com mensagens personalizadas que parecem individuais."
              />
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold text-secondary mb-3">Como funciona:</h3>
              <ol className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm">1</span>
                  <span>Importe sua base de contatos ou conecte com seu CRM existente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm">2</span>
                  <span>Crie mensagens persuasivas com campos dinâmicos personalizados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm">3</span>
                  <span>Selecione gatilhos inteligentes de disparo baseados em comportamento</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm">4</span>
                  <span>Acompanhe métricas detalhadas de entrega, engajamento e conversão</span>
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
