
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, ChevronDown, Check, Clock } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();

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
    <section className="relative bg-white overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-36">
      {/* Background decoration with followop logo pattern */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 followop-pattern opacity-5"></div>
      </div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5"></div>
      <div className="absolute top-1/3 -left-20 w-64 h-64 rounded-full bg-primary/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Hero Text */}
          <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'} text-center lg:text-left`}>
            <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
              Inteligência artificial para WhatsApp
            </span>
            <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
              IA para automatizar seu atendimento no WhatsApp
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
              Nunca mais perca um lead. Atenda seus clientes 24/7 com nossa IA treinada para vender como você.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 btn-hover text-lg flex items-center gap-2 w-full sm:w-auto"
              >
                Começar agora <MessageSquare size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-secondary text-secondary hover:bg-secondary/5 btn-hover text-lg w-full sm:w-auto"
              >
                Ver demonstração
              </Button>
            </div>
            
            {/* Atendimento 24/7 com destaque */}
            <div className="mt-10 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg border border-primary/20 transition-all hover:bg-primary/15">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Clock size={20} className="text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg text-primary">Atendimento 24/7</h3>
                  <p className="text-gray-600">Sua empresa disponível para seus clientes a qualquer momento</p>
                </div>
              </div>
            </div>
            
            <p className="mt-6 text-sm text-gray-500 text-center lg:text-left">
              Mais de 20 empresas já usam o followop para automatizar seu atendimento
            </p>
          </div>
          
          {/* Hero Video - Wistia Video */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'} relative mt-8 lg:mt-0`}>
            {isLoading ? (
              <div className="relative aspect-video w-full bg-gray-100 rounded-xl overflow-hidden">
                <div className="absolute inset-0 animate-pulse bg-gray-200"></div>
              </div>
            ) : (
              <div className="relative rounded-2xl shadow-2xl rotate-1 animate-float overflow-hidden">
                <div className="aspect-video relative">
                  <div dangerouslySetInnerHTML={{ 
                    __html: '<wistia-player media-id="k3jvq760qi" aspect="1.7777777777777777"></wistia-player>' 
                  }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator moved lower */}
      <div className="absolute bottom-4 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-center mt-20">
        <button 
          onClick={scrollToFeatures}
          className="flex flex-col items-center text-gray-400 hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">Descubra mais</span>
          <ChevronDown size={24} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
