
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-secondary to-secondary/90 rounded-2xl p-5 sm:p-6 shadow-lg text-center">
          <h2 className="text-xl sm:text-2xl font-light text-white">
            Pronto para um <span className="text-primary">Atendimento</span> que Vende Sozinho?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-white/90 font-light">
            Comece agora. Sem compromisso. Cancele quando quiser.
          </p>

          <div className="mt-5">
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
                TESTE GRÁTIS 7 DIAS
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
