
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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

  return (
    <section className="relative bg-white overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-28">
      {/* Background decoration with subtle dot pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 impulso-pattern opacity-5"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Hero Text */}
          <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
              Transforme seu WhatsApp em uma <span className="text-primary">Máquina de Vendas Automática</span> com IA
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A IA que atende, qualifica e converte seus leads 24h por dia, sem interrupções e <span className="font-semibold">7x mais barata</span> que um SDR humano.
            </p>
            
            <div className="mt-10">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 btn-hover text-lg px-10 py-6"
              >
                Quero vender mais agora <ArrowRight size={20} className="ml-2" />
              </Button>
            </div>
          </div>
          
          {/* Hero Image/Video */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'} mt-16 w-full max-w-4xl`}>
            {isLoading ? (
              <div className="relative aspect-[16/9] w-full bg-gray-100 rounded-xl overflow-hidden">
                <div className="absolute inset-0 animate-pulse bg-gray-200"></div>
              </div>
            ) : (
              <div className="relative rounded-2xl shadow-lg overflow-hidden border-4 border-primary/20">
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
    </section>
  );
};

export default Hero;
