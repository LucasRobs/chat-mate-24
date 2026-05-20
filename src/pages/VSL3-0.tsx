import { useEffect, useRef } from "react";

const PLAYER_SCRIPT_SRC =
  "https://scripts.converteai.net/c0dcd534-9de6-45c7-b23c-5a2e8267b82c/players/6a0dcbd7f2566ea03b0c1e40/v4/player.js";

export default function VSL30() {
  const playerContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!playerContainerRef.current) return;

    const playerElement = document.createElement("vturb-smartplayer");
    playerElement.setAttribute("id", "vid-6a0dcbd7f2566ea03b0c1e40");
    playerElement.setAttribute(
      "style",
      "display:block;margin:0 auto;width:100%;max-width:400px;",
    );

    playerContainerRef.current.innerHTML = "";
    playerContainerRef.current.appendChild(playerElement);

    const scriptAlreadyLoaded = document.querySelector(
      `script[src="${PLAYER_SCRIPT_SRC}"]`,
    );

    if (!scriptAlreadyLoaded) {
      const script = document.createElement("script");
      script.src = PLAYER_SCRIPT_SRC;
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] px-4 py-2">
      <div className="mb-2 text-center text-sm font-semibold text-orange-600 md:text-base">
        ⚠️ ATENÇÃO: ASSISTA O VÍDEO ATÉ O FINAL PARA RECEBER A DEMONSTRAÇÃO
        GRATUITA ⚠️
      </div>
      <div className="mb-2 flex justify-center">
        <div className="flex items-center gap-2 text-xs font-medium text-gray-700 sm:text-sm">
          <span className="font-semibold text-[#0668E1]">Meta</span>
          <span>Business Partner</span>
        </div>
      </div>

      <h1 className="mb-3 text-center text-2xl font-extrabold text-gray-900 md:text-3xl lg:text-4xl">
        CONHEÇA A FERRAMENTA QUE ACOMPANHA E PERSEGUE O LEAD AUTOMATICAMENTE ATÉ
        ELE TOMAR UMA DECISÃO DE COMPRA
      </h1>

      <p className="mb-5 text-center text-base text-gray-600 md:text-lg">
        Nao deixe seus leads esfriarem na "janela de ouro".
      </p>

      <div
        ref={playerContainerRef}
        className="mx-auto mb-5 w-full max-w-[320px] rounded-2xl overflow-hidden"
      />

      <div className="mb-6 mx-auto max-w-3xl rounded-xl border-2 border-orange-200 bg-orange-50 p-4">
        <p className="mb-2 text-center text-sm font-bold text-orange-600 md:text-base">
          ⚠️ ATENÇÃO⚠️
        </p>
        <p className="text-center text-sm text-gray-700 md:text-base">
          Após assistir à aula, o botão para uma demonstração gratuita será
          liberado aqui abaixo.
        </p>
        <p className="mt-2 text-center text-sm text-gray-700 md:text-base">
          Mas apenas para quem assistir até o final.
        </p>
      </div>
    </div>
  );
}
