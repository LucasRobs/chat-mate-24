
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, ChevronDown, Check } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-white overflow-hidden pt-24 pb-20 lg:pt-28 lg:pb-28">
      {/* Background decoration with FollowOP logo pattern */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 followop-pattern opacity-5"></div>
      </div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5"></div>
      <div className="absolute top-1/3 -left-20 w-64 h-64 rounded-full bg-primary/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Hero Text */}
          <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
              Inteligência artificial para WhatsApp
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
              IA para <span className="dark-to-light-green-gradient">automatizar</span> seu atendimento no WhatsApp
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-xl">
              Nunca mais perca um lead. Atenda seus clientes 24/7 com nossa IA treinada para vender como você.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 btn-hover text-lg flex items-center gap-2"
              >
                Começar agora <MessageSquare size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-secondary text-secondary hover:bg-secondary/5 btn-hover text-lg"
              >
                Ver demonstração
              </Button>
            </div>
            
            <div className="mt-10 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check size={14} className="text-primary" />
                </div>
                <p className="text-gray-600">Atendimento 24/7</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check size={14} className="text-primary" />
                </div>
                <p className="text-gray-600">Setup em 5 minutos</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check size={14} className="text-primary" />
                </div>
                <p className="text-gray-600">7 dias grátis</p>
              </div>
            </div>
            
            <p className="mt-6 text-sm text-gray-500">
              Mais de 20 empresas já usam o FollowOP para automatizar seu atendimento
            </p>
          </div>
          
          {/* Hero Image - Chat Demo */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'} relative`}>
            {isLoading ? (
              <ChatSkeleton />
            ) : (
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl rotate-1 animate-float">
                <div className="rounded-xl overflow-hidden border border-gray-100">
                  {/* Chat Header */}
                  <div className="bg-primary p-4 flex items-center gap-3">
                    <img 
                      src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png"
                      alt="FollowOP Logo" 
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-white">FollowOP Assistant</p>
                      <p className="text-xs text-white/70">Online 24/7</p>
                    </div>
                  </div>
                  
                  {/* Chat Body */}
                  <div className="bg-gray-50 p-4 h-[500px] flex flex-col gap-4">
                    <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
                      <p>Olá! Como posso ajudar você hoje?</p>
                    </div>
                    
                    <div className="bg-primary text-white p-3 rounded-lg rounded-tr-none shadow-sm max-w-[80%] self-end">
                      <p>Quero informações sobre o plano Growth</p>
                    </div>
                    
                    <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
                      <p>O plano Growth custa R$ 590/mês e inclui 3 Funcionários de IA, 1.500 atendimentos/mês e 20.000 mensagens mensais. Posso te ajudar a começar hoje?</p>
                    </div>
                    
                    <div className="bg-primary text-white p-3 rounded-lg rounded-tr-none shadow-sm max-w-[80%] self-end">
                      <p>E quantos atendimentos simultâneos posso ter?</p>
                    </div>
                    
                    <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
                      <p>Com o plano Growth, você pode ter até 50 atendimentos simultâneos! Seus clientes nunca ficarão esperando.</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Stats Bubble */}
                <div className="absolute -top-6 -right-6 p-4 bg-white rounded-lg shadow-lg">
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-primary">97%</span>
                    <span className="text-xs text-gray-500">Taxa de satisfação</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
          <button 
            onClick={scrollToFeatures}
            className="flex flex-col items-center text-gray-400 hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2">Descubra mais</span>
            <ChevronDown size={24} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Skeleton for chat loading state with Apple-inspired design
const ChatSkeleton = () => (
  <div className="relative bg-white p-2 rounded-2xl shadow-xl rotate-1">
    <div className="rounded-xl overflow-hidden border border-gray-100">
      {/* Chat Header Skeleton */}
      <div className="p-4 flex items-center gap-3">
        <Skeleton className="w-8 h-8 rounded-full" />
        <div>
          <Skeleton className="h-5 w-32 mb-1" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
      
      {/* Chat Body Skeleton */}
      <div className="bg-gray-50 p-4 h-[500px] flex flex-col gap-4">
        <Skeleton className="h-14 w-[80%] rounded-lg rounded-tl-none" />
        <Skeleton className="h-10 w-[60%] rounded-lg rounded-tr-none self-end" />
        <Skeleton className="h-20 w-[80%] rounded-lg rounded-tl-none" />
        <Skeleton className="h-12 w-[50%] rounded-lg rounded-tr-none self-end" />
        <Skeleton className="h-14 w-[75%] rounded-lg rounded-tl-none" />
      </div>
    </div>
    
    {/* Floating Stats Bubble Skeleton */}
    <div className="absolute -top-6 -right-6 p-4 bg-white rounded-lg shadow-lg">
      <div className="text-center">
        <Skeleton className="h-8 w-12 mx-auto mb-1" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
  </div>
);

export default Hero;
