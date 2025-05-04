
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ClosingCtaSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary">
          Menos trabalho manual, <span className="text-primary">mais vendas</span>!
        </h2>

        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
          Comece agora e aumente suas vendas no WhatsApp!
        </p>

        <div className="mt-6 sm:mt-8">
          <Button
            asChild
            variant="trial"
            className="inline-flex items-center justify-center gap-6 text-lg py-6 h-auto"
          >
            <a
              href="https://www.followop.com.br/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              TESTE GRÁTIS 7 DIAS
              <span className="bg-[#2D2D4A] text-white p-3 rounded-full">
                <ArrowRight size={16} />
              </span>
            </a>
          </Button>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6">
            <img src="/lovable-uploads/b245de89-8336-4e08-9842-eca33945c44e.png" alt="Meta Tech Partner" className="h-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCtaSection;
