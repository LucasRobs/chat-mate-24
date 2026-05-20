import { useEffect, useRef, useState } from "react";
import GrupoRecupera from "./GrupoRecupera";

const UNLOCK_SECONDS = 120;
const PLAYER_SCRIPT_SRC =
  "https://scripts.converteai.net/c0dcd534-9de6-45c7-b23c-5a2e8267b82c/players/6a0dcbd7f2566ea03b0c1e40/v4/player.js";

export default function VSL3() {
  const [secondsLeft, setSecondsLeft] = useState(UNLOCK_SECONDS);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const playerContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isUnlocked) return;

    const intervalId = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(intervalId);
          setIsUnlocked(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [isUnlocked]);

  useEffect(() => {
    if (isUnlocked) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isUnlocked]);

  useEffect(() => {
    if (isUnlocked || !playerContainerRef.current) return;

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
  }, [isUnlocked]);

  if (isUnlocked) {
    return <GrupoRecupera />;
  }

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <div className="min-h-screen bg-[#FAFAFA] px-4 py-8 md:py-12">
      <div className="mb-4 text-center text-sm font-semibold text-orange-600 md:text-base">
        ⚠️ ATENÇÃO: Assista o vídeo até o final para receber a demonstração
        gratuita ⚠️
      </div>
      <section className="mx-auto w-full max-w-3xl text-center">
        <div className="mb-6 mt-2 flex justify-center">
          <div className="flex items-center gap-2 text-xs font-medium text-gray-700 sm:text-sm">
            <span className="font-semibold text-[#0668E1]">Meta</span>
            <span>Business Partner</span>
          </div>
        </div>

        <h1 className="mb-3 text-3xl font-extrabold text-gray-900 md:text-4xl lg:text-5xl">
          CONHEÇA A FERRAMENTA que acompanha e persegue o lead automaticamente
          até ele tomar uma decisão de compra
        </h1>

        <p className="mb-5 text-base text-gray-600 md:text-lg">
          Nao deixe seus leads esfriarem na "janela de ouro".
        </p>

        <div
          ref={playerContainerRef}
          className="mx-auto mb-5 w-full max-w-[400px]"
        />

        <div className="mb-6 rounded-xl border-2 border-orange-200 bg-orange-50 p-4">
          <p className="mb-2 text-sm font-bold text-orange-600 md:text-base">
            ⚠️ ATENÇÃO⚠️
          </p>
          <p className="text-sm text-gray-700 md:text-base">
            Após assistir à aula, o botão para uma demonstração gratuita será
            liberado aqui abaixo.
          </p>
          <p className="mt-2 text-sm text-gray-700 md:text-base">
            Mas apenas para quem assistir até o final.
          </p>
        </div>

        <p className="text-sm font-semibold text-[#16B763] md:text-base">
          Conteudo completo desbloqueia em {minutes}:
          {String(seconds).padStart(2, "0")}
        </p>
      </section>
    </div>
  );
}
