
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import PopupForm from "@/components/ui-custom/PopupForm";

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
          Comece agora e aumente suas vendas no WhatsApp!
        </p>
        <div className="mt-6 sm:mt-8 reveal">
          <PopupForm 
            buttonClassName={`bg-primary hover:bg-primary/90 btn-hover text-base sm:text-lg backdrop-blur-sm w-full sm:w-auto ${
              isMobile ? "h-10 px-4 py-2" : "h-11 px-8 py-6"
            }`}
          >
            Agende uma reunião estratégica
          </PopupForm>
        </div>
      </div>
    </section>
  );
};

export default ClosingCtaSection;
