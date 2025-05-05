
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ClosingCtaSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl font-light text-black">
          Menos trabalho manual, <span className="text-primary">mais vendas</span>!
        </h2>

        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-500 font-light">
          Transforme seu WhatsApp em uma máquina de vendas!
        </p>

        <div className="mt-6 sm:mt-8">
          <Button
            asChild
            variant="apple"
            size="lg"
            className="inline-flex items-center justify-center gap-2 text-sm py-2.5 h-auto animated-button font-light"
          >
            <a
              href="https://www.followop.com.br/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver detalhes dos planos
              <span className="bg-[#2D2D4A] text-white p-1 rounded-full">
                <ArrowRight size={12} />
              </span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClosingCtaSection;
