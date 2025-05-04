
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight, Instagram, Linkedin } from "lucide-react";
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

        <div className="mt-8 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6">
            <img src="/lovable-uploads/5e5ea857-e83d-43fd-a62d-96b99190ecbb.png" alt="Meta Tech Partner" className="h-6" />
          </div>
          
          {/* Social Icons - only Instagram and LinkedIn */}
          <div className="flex items-center justify-center gap-6 mt-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-primary transition-colors hover:scale-110 transform duration-300"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-primary transition-colors hover:scale-110 transform duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCtaSection;
