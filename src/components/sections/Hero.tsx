import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import PopupForm from "@/components/ui-custom/PopupForm";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const videoContainerRef = useRef(null); // Ref para o container do vídeo
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && videoContainerRef.current) {
      const wistiaUrl = `https://fast.wistia.net/embed/iframe/k3jvq760qi?web_component=true&seo=true&autoPlay=true&muted=false`;
      const wistiaScript = document.createElement('script');
      wistiaScript.src = 'https://fast.wistia.net/player.js';
      wistiaScript.async = true;

      const wistiaDiv = document.createElement('div');
      wistiaDiv.className = 'wistia_responsive_padding';
      wistiaDiv.style.padding = '56.25% 0 0 0';
      wistiaDiv.style.position = 'relative';

      const wistiaWrapper = document.createElement('div');
      wistiaWrapper.className = 'wistia_responsive_wrapper';
      wistiaWrapper.style.height = '100%';
      wistiaWrapper.style.left = '0';
      wistiaWrapper.style.position = 'absolute';
      wistiaWrapper.style.top = '0';
      wistiaWrapper.style.width = '100%';

      const iframe = document.createElement('iframe');
      iframe.src = wistiaUrl;
      iframe.title = 'VersãoCompletaDefinitiva Video';
      iframe.allow = 'autoplay; fullscreen';
      iframe.allowTransparency = true;
      iframe.frameBorder = '0';
      iframe.scrolling = 'no';
      iframe.className = 'wistia_embed';
      iframe.name = 'wistia_embed';
      iframe.width = '100%';
      iframe.height = '100%';

      wistiaWrapper.appendChild(iframe);
      wistiaDiv.appendChild(wistiaWrapper);
      videoContainerRef.current.appendChild(wistiaDiv);
      document.head.appendChild(wistiaScript);

      // Limpeza ao desmontar o componente (opcional, dependendo do seu caso)
      return () => {
        if (wistiaScript.parentNode) {
          wistiaScript.parentNode.removeChild(wistiaScript);
        }
        if (wistiaDiv.parentNode) {
          wistiaDiv.parentNode.removeChild(wistiaDiv);
        }
      };
    }
  }, [isLoading]);

  const handleFormSubmit = () => {
    setIsFormSubmitted(true); // Marca o formulário como enviado
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
              interrupções e <span className="font-semibold">7x mais barata</span>{" "}
              que um Atendente.
            </p>

            <div className="mt-8 sm:mt-10">
              {isFormSubmitted ? (
                <button
                  className="bg-primary hover:bg-primary/90 btn-hover text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 inline-block"
                >
                  Quero vender mais agora
                </button>
              ) : (
                <PopupForm
                  buttonClassName="bg-primary hover:bg-primary/90 btn-hover text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6"
                  redirectToPhone={true}
                  onSubmit={handleFormSubmit}
                >
                  Quero vender mais agora
                </PopupForm>
              )}
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
              <div
                ref={videoContainerRef}
                className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg border-[6px] border-primary/50 hover:border-primary transition-all duration-300"
              >
                {/* O conteúdo do vídeo será inserido aqui pelo useEffect */}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
