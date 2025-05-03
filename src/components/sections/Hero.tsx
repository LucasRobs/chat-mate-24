
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
      {/* Elementos decorativos (dots) */}
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full border-4 border-primary/30 opacity-70 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-20 h-20 rounded-full border-4 border-primary/30 opacity-70 animate-float"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full border-4 border-primary/30 opacity-70"></div>
      <div className="absolute bottom-40 right-1/3 w-14 h-14 rounded-full border-4 border-primary/30 opacity-70"></div>

      {/* Padrão de pontos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 impulso-pattern opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="/lovable-uploads/5e5ea857-e83d-43fd-a62d-96b99190ecbb.png" 
              alt="Meta Tech Partner" 
              className="h-8 transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-down">
            <span className="text-primary">Transforme</span> Seu Whatsapp:
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Venda no automático com <span className="text-primary">inteligência Artificial</span>
          </h2>

          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trabalhe de forma mais inteligente sem perder performance<br />
            aumente seus resultados e eleve o atendimento do seu negócio a outro nível.
          </p>

          <div className="mt-10 flex justify-center">
            <a 
              href="#" 
              onClick={handleButtonClick}
              className="bg-[#A2DE5D] hover:bg-[#A2DE5D]/90 text-gray-800 font-medium px-8 py-4 rounded-full flex items-center gap-2 group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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
            <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg border-[6px] border-primary/50 hover:border-primary transition-all duration-300">
              <img 
                src="/lovable-uploads/9ae827e7-7b31-41c9-a8df-620d486be97d.png" 
                alt="Followop Dashboard" 
                className="w-full h-auto object-cover"
              />
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="flex items-center gap-2">
                  <img 
                    src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png" 
                    alt="followop Logo" 
                    className="h-6"
                  />
                  <span className="font-medium text-gray-800">followop</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
