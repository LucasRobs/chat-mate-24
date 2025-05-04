
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MetaTechPartnerBadge = () => (
  <div className="flex items-center gap-2 bg-white/90 shadow-sm border border-gray-100 rounded-lg px-3 py-1.5 text-xs font-medium text-gray-700">
    <span className="text-[#1877F2] font-semibold">Meta</span>
    <span className="text-gray-700">Tech Partner</span>
  </div>
);

const ClosingCtaSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-secondary">
          Menos trabalho manual, <span className="text-primary">mais vendas</span>!
        </h2>

        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600">
          Comece agora e aumente suas vendas no WhatsApp!
        </p>

        <div className="mt-4 sm:mt-6">
          <Button
            asChild
            variant="trial"
            className="inline-flex items-center justify-center gap-3 text-sm py-2.5 h-auto transform transition-all duration-300 hover:scale-105"
          >
            <a
              href="https://www.followop.com.br/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              TESTE GRÁTIS 7 DIAS
              <span className="bg-[#2D2D4A] text-white p-1.5 rounded-full">
                <ArrowRight size={12} />
              </span>
            </a>
          </Button>
        </div>

        <div className="mt-6 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <MetaTechPartnerBadge />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCtaSection;
