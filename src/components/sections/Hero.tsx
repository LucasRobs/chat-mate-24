
import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && typeof window !== "undefined" && videoContainerRef.current) {
      videoContainerRef.current.innerHTML = `
        <style>
          wistia-player[media-id='k3jvq760qi']:not(:defined) {
            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/k3jvq760qi/swatch');
            display: block;
            filter: blur(5px);
            padding-top: 56.25%;
          }
        </style>
        <wistia-player media-id="k3jvq760qi" aspect="1.7777777777777777" autoplay></wistia-player>
      `;

      const script1 = document.createElement("script");
      script1.src = "https://fast.wistia.com/player.js";
      script1.async = true;

      const script2 = document.createElement("script");
      script2.src = "https://fast.wistia.com/embed/k3jvq760qi.js";
      script2.type = "module";
      script2.async = true;

      videoContainerRef.current.appendChild(script1);
      videoContainerRef.current.appendChild(script2);
    }
  }, [isLoading]);

  const handleButtonClick = () => {
    if (typeof window !== "undefined") {
      window.open("https://www.followop.com.br/register", "_blank");
    }
  };

  return (
    <section className="relative bg-white overflow-hidden py-16 md:py-20 lg:py-24">
      {/* Círculos decorativos */}
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full border-4 border-primary/30 opacity-70"></div>
      <div className="absolute top-40 right-10 md:right-20 w-20 h-20 rounded-full border-4 border-primary/30 opacity-70"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full border-4 border-primary/30 opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src="/lovable-uploads/c630dcac-7cec-4e9b-b05a-65669a5be978.png" alt="Meta Tech Partner" className="h-6" />
            <span className="text-sm text-gray-600">|</span>
            <span className="text-sm text-gray-600">Powered by WhatsApp Business AP</span>
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transforme Seu Whatsapp:
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Venda no automático com inteligência Artificial
          </h2>

          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trabalhe de forma mais inteligente sem perder performance<br />
            aumente seus resultados e eleve o atendimento do seu negócio a outro nível.
          </p>

          <div className="mt-10 flex justify-center">
            <a 
              href="#" 
              onClick={handleButtonClick}
              className="bg-[#A2DE5D] hover:bg-[#A2DE5D]/90 text-gray-800 font-medium px-8 py-4 rounded-full flex items-center gap-2 group"
            >
              TESTE GRÁTIS 7 DIAS
              <span className="bg-[#173824] text-white p-2 rounded-full group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} />
              </span>
            </a>
          </div>
        </div>

        <div className="mt-16">
          {isLoading ? (
            <div className="relative aspect-[16/9] w-full bg-gray-100 rounded-xl overflow-hidden max-w-5xl mx-auto">
              <div className="absolute inset-0 animate-pulse bg-gray-200"></div>
            </div>
          ) : (
            <div
              ref={videoContainerRef}
              className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg border-[6px] border-primary/50 hover:border-primary transition-all duration-300"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
