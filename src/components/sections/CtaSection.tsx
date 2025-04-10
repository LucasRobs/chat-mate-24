import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const CtaSection = () => {
  const isMobile = useIsMobile();

  const whatsappMessage = encodeURIComponent(
    "Olá! Vi a followop e fiquei curioso... como exatamente vocês podem melhorar meu atendimento no WhatsApp?"
  );

  const whatsappLink = `https://wa.me/558897492536?text=${whatsappMessage}`;

  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-5 impulso-pattern"></div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-xl reveal acrylic">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Pronto para um <span className="text-primary">Atendimento WhatsApp</span> que Vende Sozinho?
            </h2>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-white/80">
              Comece agora. Sem compromisso. Cancele quando quiser.
            </p>

            <div className="mt-8 sm:mt-10">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  size={isMobile ? "default" : "lg"}
                  className="bg-primary hover:bg-primary/90 btn-hover text-base sm:text-lg backdrop-blur-sm px-8 py-6"
                >
                  Quero testar a followop <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
