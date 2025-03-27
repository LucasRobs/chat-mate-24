
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, ChevronDown } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-white overflow-hidden pt-24 pb-20 lg:pt-28 lg:pb-28">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5"></div>
      <div className="absolute top-1/3 -left-20 w-64 h-64 rounded-full bg-primary/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Hero Text */}
          <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
              Atendimento via WhatsApp com IA
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
              Revolucione seu atendimento com IA no WhatsApp
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-xl">
              Atendimento 24/7 automatizado e inteligente. Nunca mais perca um cliente ou uma venda.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 btn-hover text-lg flex items-center gap-2"
              >
                <MessageSquare size={20} />
                Teste Grátis por 7 dias
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-secondary text-secondary hover:bg-secondary/5 btn-hover text-lg"
              >
                Ver demonstração
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-gray-500">
              Mais de 1.000 empresas já usam o FollowOP para automatizar seu atendimento
            </p>
          </div>
          
          {/* Hero Image */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'} relative`}>
            <div className="relative bg-white p-2 rounded-2xl shadow-2xl rotate-1 animate-float">
              <img 
                src="https://via.placeholder.com/500x650"
                alt="FollowOP AI Chat Interface" 
                className="rounded-xl w-full"
              />
              
              {/* Floating Chat Bubble */}
              <div className="absolute -bottom-6 -left-6 p-4 bg-white rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <p className="text-sm font-medium">Atendimento em tempo real</p>
                </div>
              </div>
              
              {/* Stats Bubble */}
              <div className="absolute -top-6 -right-6 p-4 bg-white rounded-lg shadow-lg">
                <div className="text-center">
                  <span className="block text-2xl font-bold text-primary">97%</span>
                  <span className="text-xs text-gray-500">Taxa de satisfação</span>
                </div>
              </div>
            </div>
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

export default Hero;
