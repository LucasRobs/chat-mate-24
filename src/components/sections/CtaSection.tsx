
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import PopupForm from "@/components/ui-custom/PopupForm";
import { Button } from "@/components/ui/button";

// Meta Tech Partner Badge Component
const MetaTechPartnerBadge = () => (
  <div className="flex items-center gap-2 bg-white shadow-md border border-gray-200 rounded-lg px-3 py-2 text-xs font-medium text-gray-700 hover:shadow-lg transition-shadow">
    <div className="w-5 h-5 flex items-center justify-center">
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M36 18C36 8.059 27.941 0 18 0C8.059 0 0 8.059 0 18C0 26.99 6.584 34.431 15.188 35.77V23.196H10.617V18H15.188V14.039C15.188 9.527 17.88 7.031 21.985 7.031C23.96 7.031 26.02 7.383 26.02 7.383V11.813H23.743C21.496 11.813 20.811 13.203 20.811 14.625V18H25.805L25.015 23.196H20.811V35.77C29.416 34.431 36 26.99 36 18Z" fill="#1877F2" />
        <path d="M25.015 23.196L25.805 18H20.812V14.625C20.812 13.203 21.496 11.813 23.743 11.813H26.02V7.383C26.02 7.383 23.96 7.031 21.985 7.031C17.879 7.031 15.188 9.527 15.188 14.039V18H10.617V23.196H15.188V35.77C16.104 35.924 17.044 36.001 18 36C18.956 36.001 19.896 35.924 20.812 35.77V23.196H25.015Z" fill="white" />
      </svg>
    </div>
    <span className="text-[#1877F2] font-semibold">Meta</span>
    <span className="text-gray-700">Tech Partner</span>
  </div>
);

const CtaSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 sm:py-16 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="bg-gradient-to-r from-secondary to-secondary/90 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-10 lg:p-12 shadow-xl reveal acrylic">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <MetaTechPartnerBadge />
            </div>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
              Pronto para um <span className="text-primary">Atendimento WhatsApp</span> que Vende Sozinho?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/80">
              Comece agora. Sem compromisso. Cancele quando quiser.
            </p>

            <div className="mt-6 sm:mt-8">
              <PopupForm
                buttonClassName="bg-[#A2DE5D] hover:bg-[#A2DE5D]/90 text-[#222] font-medium text-sm py-2.5 rounded-full flex items-center justify-center gap-3 mx-auto transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md"
                redirectUrl="https://www.followop.com.br/register"
              >
                <span>TESTE GRÁTIS 7 DIAS</span>
                <span className="bg-[#2D2D4A] text-white p-1.5 rounded-full">
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
