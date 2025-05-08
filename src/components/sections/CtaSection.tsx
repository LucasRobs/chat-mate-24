
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const CtaSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-8 sm:py-10 bg-white animated-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-secondary to-secondary/90 rounded-2xl p-4 sm:p-6 shadow-lg text-center scale-in">
          <h2 className="text-lg sm:text-xl md:text-2xl font-light text-white animate-wave">
            Pronto para transformar seu <span className="text-primary">Atendimento</span>?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-white/90 font-light fade-in delay-200">
            Comece agora sem compromisso. Cancele quando quiser.
          </p>

          <div className="mt-4 sm:mt-5 fade-in-up delay-300">
            <Button
              asChild
              variant="apple"
              size={isMobile ? "default" : "lg"}
              className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm py-2 sm:py-2.5 h-auto animated-button font-light"
            >
              <a
                href="https://www.followop.com.br/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                Começar agora
                <span className="bg-[#2D2D4A] text-white p-1 rounded-full">
                  <ArrowRight size={12} />
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
