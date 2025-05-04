
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import PopupForm from "@/components/ui-custom/PopupForm";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-10 sm:py-14 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="bg-gradient-to-r from-secondary to-secondary/90 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-8 lg:p-10 shadow-xl reveal acrylic">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
              Pronto para um <span className="text-primary">Atendimento WhatsApp</span> que Vende Sozinho?
            </h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/80">
              Comece agora. Sem compromisso. Cancele quando quiser.
            </p>

            <div className="mt-5 sm:mt-6">
              <PopupForm
                buttonClassName="bg-[#A2DE5D] hover:bg-[#A2DE5D]/90 text-[#222] font-medium text-xs py-2 rounded-full flex items-center justify-center gap-2 mx-auto transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md button-pulse"
                redirectUrl="https://www.followop.com.br/register"
              >
                <span>TESTE GRÁTIS 7 DIAS</span>
                <span className="bg-[#2D2D4A] text-white p-1 rounded-full">
                  <ArrowRight size={10} />
                </span>
              </PopupForm>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
