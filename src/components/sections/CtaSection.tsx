
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import PopupForm from "@/components/ui-custom/PopupForm";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="bg-gradient-to-r from-secondary to-secondary/90 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 lg:p-12 shadow-xl reveal acrylic">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-white leading-tight">
              Pronto para um <span className="text-primary">Atendimento WhatsApp</span> que Vende Sozinho?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/90 font-light">
              Comece agora. Sem compromisso. Cancele quando quiser.
            </p>

            <div className="mt-6 sm:mt-8">
              <PopupForm
                buttonClassName="animated-button bg-[#A2DE5D] hover:bg-[#A2DE5D]/90 text-[#222] font-light text-sm py-2.5 px-6 rounded-full flex items-center justify-center gap-2 mx-auto shadow-sm"
                redirectUrl="https://www.followop.com.br/register"
              >
                <span>TESTE GRÁTIS 7 DIAS</span>
                <span className="bg-[#2D2D4A] text-white p-1 rounded-full">
                  <ArrowRight size={12} />
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
