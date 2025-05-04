
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import PopupForm from "@/components/ui-custom/PopupForm";
import { Button } from "@/components/ui/button";

// Meta Tech Partner Badge Component
const MetaTechPartnerBadge = () => (
  <div className="flex items-center gap-2 bg-white shadow-md border border-gray-200 rounded-lg px-3 py-2 text-xs font-medium text-gray-700 hover:shadow-lg transition-shadow">
    <div className="w-6 h-6 flex items-center justify-center">
      <svg width="24" height="24" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M96 9.69l-84 48.4v75.82l84 48.4 84-48.4V58.09l-84-48.4z" fill="none"/>
        <path d="M96 9.69l-84 48.4v75.82l84 48.4 84-48.4V58.09l-84-48.4z" fill="none"/>
        <path d="M96 9.69l-84 48.4v75.82l84 48.4 84-48.4V58.09l-84-48.4z" fill="none"/>
        <path d="M168 58.09l-72-41.54-72 41.54v75.82l72 41.54 72-41.54V58.09z" fill="none"/>
        <path d="M95.5 174L41 142.5V79.5L95.5 48l54.5 31.5v63L95.5 174z" fill="none"/>
        <path d="M96 174.5L40 142.29V78.71L96 46.5l56 32.21v63.58L96 174.5z" fill="none"/>
        <path d="M71.46 102.51l-1.43-1.43c-2.97-2.97-4.29-6.37-4.29-10.07 0-3.7 1.32-7.1 4.29-10.07l26.05-26.05 26.05 26.05c2.97 2.97 4.29 6.37 4.29 10.07 0 3.7-1.32 7.1-4.29 10.07l-26.05 26.05-24.62-24.62z" fill="#0080FB"/>
        <path d="M150.18 102.51l-1.43-1.43c-2.97-2.97-4.29-6.37-4.29-10.07 0-3.7 1.32-7.1 4.29-10.07l26.05-26.05 26.05 26.05c2.97 2.97 4.29 6.37 4.29 10.07 0 3.7-1.32 7.1-4.29 10.07l-26.05 26.05-24.62-24.62z" fill="#0080FB" transform="translate(-80 0)"/>
      </svg>
    </div>
    <span className="text-[#0080FB] font-semibold">Meta</span>
    <span className="text-gray-700">Tech Partner</span>
  </div>
);

const CtaSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-10 sm:py-14 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="bg-gradient-to-r from-secondary to-secondary/90 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-8 lg:p-10 shadow-xl reveal acrylic">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-3">
              <MetaTechPartnerBadge />
            </div>
            
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
