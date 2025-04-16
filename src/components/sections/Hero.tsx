import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
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
    <section className="relative bg-white overflow-hidden py-20 md:py-28 lg:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 impulso-pattern opacity-5"></div>
      </div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center justify-center text-center w-full">
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
              interrupções e <span className="font-semibold">7x mais barata</span> que um Atendente.
            </p>

            <div className="mt-8 sm:mt-10">
              <button
                onClick={handleButtonClick}
                className="bg-primary text-white font-medium text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 inline-block rounded-full hover:bg-primary/90 transition"
              >
                Quero vender mais agora
              </button>
            </div>
          </div>

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
              <div
                ref={videoContainerRef}
                className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg border-[6px] border-primary/50 hover:border-primary transition-all duration-300"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
