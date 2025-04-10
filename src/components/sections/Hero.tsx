import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-white overflow-hidden py-20 md:py-28 lg:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 impulso-pattern opacity-5"></div>
      </div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center justify-center text-center w-full">
          {/* Texto principal */}
          <div className={isVisible ? "animate-fade-in-left" : "opacity-0"}>
            <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-snug tracking-tight mx-auto max-w-[90%] sm:max-w-3xl md:max-w-4xl">
              Transforme seu WhatsApp em{" "}
              <span className="text-primary inline">
                uma Máquina de Vendas Automática
              </span>
              <div className="block mt-1">com Inteligência Artificial</div>
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A IA que atende, qualifica e converte seus leads 24h por dia, sem
              interrupções e <span className="font-semibold">7x mais barata</span>{" "}
              que um Atendente.
            </p>

            <div className="mt-8 sm:mt-10">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 btn-hover text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6"
                asChild
              >
                <a
                  href="http://followop.com.br/register"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quero vender mais agora <ArrowRight size={20} className="ml-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Vídeo responsivo */}
          <div
            className={`w-full mt-12 sm:mt-16 px-2 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            {isLoading ? (
              <div className="relative aspect-[16/9] w-full bg-gray-100 rounded-xl overflow-hidden max-w-5xl mx-auto">
                <div className="absolute inset-0 animate-pulse bg-gray-200"></div>
              </div>
            ) : (
              <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-primary/20">
                <div className="relative w-full h-0 pb-[56.25%]">
                  <iframe
                    src="https://fast.wistia.net/embed/iframe/k3jvq760qi?autoPlay=true&muted=true"
                    title="Wistia video player"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-2xl"
                    style={{ border: "0" }}
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
