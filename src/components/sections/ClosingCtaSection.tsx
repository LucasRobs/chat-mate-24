
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      </div>
    </section>
  );
};

export default ClosingCtaSection;
