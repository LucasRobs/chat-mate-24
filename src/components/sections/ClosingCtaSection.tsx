
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const ClosingCtaSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-12 sm:py-16 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none backdrop-blur-[1px]">
        <div className="absolute inset-0 opacity-5 impulso-pattern"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 reveal">
          Menos trabalho manual, <span className="text-primary">mais vendas</span>!
        </h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 reveal">
          Junte-se às empresas que estão revolucionando seu atendimento com followop
        </p>
        <div className="mt-6 sm:mt-8 reveal">
          <Button 
            size={isMobile ? "default" : "lg"} 
            className="bg-primary hover:bg-primary/90 btn-hover text-base sm:text-lg backdrop-blur-sm w-full sm:w-auto"
          >
            Comece agora e aumente suas vendas no WhatsApp! <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClosingCtaSection;
