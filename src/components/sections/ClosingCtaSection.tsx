
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ClosingCtaSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Padrões de pontos decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 impulso-pattern opacity-5"></div>
      </div>
      
      {/* Elementos circulares decorativos */}
      <div className="absolute top-10 left-10 w-16 h-16 rounded-full border-4 border-primary/30 opacity-70 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full border-4 border-primary/30 opacity-70 animate-float" style={{ animationDelay: "1.5s" }}></div>
      
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
            className="inline-flex items-center justify-center gap-2 bg-[#A2DE5D] hover:bg-[#A2DE5D]/90 text-gray-800 font-medium text-base sm:text-lg rounded-full transition px-6 py-6 h-auto group hover:-translate-y-1 hover:shadow-lg duration-300"
          >
            <a
              href="https://www.followop.com.br/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              TESTE GRÁTIS 7 DIAS
              <span className="bg-secondary text-white p-2 rounded-full group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} />
              </span>
            </a>
          </Button>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/5e5ea857-e83d-43fd-a62d-96b99190ecbb.png" alt="Meta Tech Partner" className="h-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCtaSection;
