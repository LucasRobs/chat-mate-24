
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import PopupForm from "@/components/ui-custom/PopupForm";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="bg-gradient-to-r from-secondary to-secondary/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-xl reveal acrylic">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Pronto para um <span className="text-primary">Atendimento WhatsApp</span> que Vende Sozinho?
            </h2>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-white/80">
              Comece agora. Sem compromisso. Cancele quando quiser.
            </p>

            <div className="mt-8 sm:mt-10">
              <PopupForm
                buttonClassName="bg-[#A2DE5D] hover:bg-[#A2DE5D]/90 text-[#222] font-medium text-lg py-6 rounded-full flex items-center justify-center gap-6 mx-auto"
                redirectUrl="https://www.followop.com.br/register"
              >
                <span>TESTE GRÁTIS 7 DIAS</span>
                <span className="bg-[#2D2D4A] text-white p-3 rounded-full">
                  <ArrowRight size={16} />
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
