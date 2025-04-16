import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import PopupForm from "@/components/ui-custom/PopupForm";
import { useRouter } from 'next/router';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const videoContainerRef = useRef(null); // Ref para o container do vídeo
  const isMobile = useIsMobile();
  const router = useRouter();
  const hasRegistered = useRef(false); // Ref para verificar se o usuário já registrou

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && videoContainerRef.current) {
      const wistiaEmbedCode = `
        <style>
          wistia-player[media-id='k3jvq760qi']:not(:defined) {
            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/k3jvq760qi/swatch');
            display: block;
            filter: blur(5px);
            padding-top: 56.25%;
          }
        </style>
        <wistia-player media-id="k3jvq760qi" aspect="1.7777777777777777" autoplay muted></wistia-player>
        <script src="https://fast.wistia.com/player.js" async></script>
        <script src="https://fast.wistia.com/embed/k3jvq760qi.js" async type="module"></script>
      `;

      videoContainerRef.current.innerHTML = wistiaEmbedCode;
    }
  }, [isLoading]);

  const handleFormSubmit = (formData) => {
    setIsFormSubmitted(true);
    // Aqui você implementaria a lógica para salvar os dados do formulário (formData)
    console.log("Dados do formulário:", formData);
    hasRegistered.current = true; // Marca o usuário como registrado após o envio
  };

  const handleButtonClick = () => {
    if (hasRegistered.current) {
      router.push("https://www.followop.com.br/register");
    } else {
      // Se o formulário ainda não foi enviado, o comportamento padrão do PopupForm será acionado
      // (abrir o popup). A lógica de redirecionamento ocorre após o envio do formulário.
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
              interrupções e <span className="font-semibold">7x mais barata</span>{" "}
              que um Atendente.
            </p>

            <div className="mt-8 sm:mt-10">
              <PopupForm
                buttonClassName={`bg-primary hover:bg-primary/90 btn-hover text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 inline-block ${isFormSubmitted ? 'cursor-pointer' : ''}`}
                redirectToPhone={true}
                onSubmit={handleFormSubmit}
                trigger={
                  <button onClick={handleButtonClick} disabled={isFormSubmitted}>
                    Quero vender mais agora
                  </button>
                }
              >
                Quero vender mais agora
              </PopupForm>
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
                {/* O conteúdo do vídeo será inserido aqui */}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
