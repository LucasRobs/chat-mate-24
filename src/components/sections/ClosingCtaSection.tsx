
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const ClosingCtaSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-6 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 text-center">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-secondary">
          Menos trabalho manual, <span className="text-primary">mais vendas</span>!
        </h2>

        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600">
          Comece agora e aumente suas vendas no WhatsApp!
        </p>

        <div className="mt-3 sm:mt-4">
          <Button
            asChild
            variant="trial"
            size="sm"
            className="inline-flex items-center justify-center gap-2 text-xs py-2 h-auto transform transition-all duration-300 hover:scale-105 button-pulse"
          >
            <a
              href="https://www.followop.com.br/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              TESTE GRÁTIS 7 DIAS
              <span className="bg-[#2D2D4A] text-white p-1 rounded-full">
                <ArrowRight size={10} />
              </span>
            </a>
          </Button>
        </div>

        <div className="mt-4 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-3">
            <MetaTechPartnerBadge />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCtaSection;
