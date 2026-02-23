
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight, Bell, Calendar, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";


// Meta Tech Partner Badge Component (refinado para linha única no mobile e estilo texto)
const MetaTechPartnerBadge = () => (
  <div className="flex items-center gap-2 bg-transparent border-none px-0 py-0 text-xs font-medium text-gray-700 max-w-fit mx-auto animate-fade-in-down">
    <div className="w-5 h-5 flex items-center justify-center">
      <img
        src="/lovable-uploads/c5206104-ee78-44ed-b432-e4d2a4bb0863.png"
        alt="Meta Logo"
        className="w-full h-full object-contain"
      />
    </div>
    <div className="flex flex-wrap sm:flex-nowrap items-center gap-x-1 text-xs sm:text-sm text-gray-700">
      <span className="text-[#0668E1] font-semibold">Meta</span>
      <span>Business Partner</span>
      <span className="text-gray-400 hidden sm:inline">|</span>
      <span className="text-[10px] sm:text-xs text-gray-500 whitespace-nowrap">
        Powered by WhatsApp Business API
      </span>
    </div>
  </div>
);

// System Features Component
const SystemFeatures = () => (
  <div className="grid grid-cols-2 gap-2 max-w-2xl mx-auto mt-4 mb-6 animate-fade-in px-1" style={{ animationDelay: "400ms" }}>
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100 text-center transform hover:scale-102 transition-transform">
      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
        <Bell className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
      </div>
      <p className="text-[10px] sm:text-xs font-medium text-gray-800">Automação de Fluxos</p>
    </div>
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100 text-center transform hover:scale-102 transition-transform">
      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-2">
        <BarChart2 className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500" />
      </div>
      <p className="text-[10px] sm:text-xs font-medium text-gray-800">Métricas Avançadas</p>
    </div>
  </div>
);

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = [
    "Automação de Fluxos",
    "Métricas Avançadas",
    "Followup",
    "Disparos em Massa",
    "Atendimento Inteligente",
    "Engajamento",
    "Multi-atendimento",
  ];

  const isMobile = useIsMobile();

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animElements = document.querySelectorAll(".animate-on-scroll");
    animElements.forEach((el) => observer.observe(el));

    return () => {
      animElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const i = currentWordIndex % words.length;
      const fullText = words[i];

      setDisplayedText(
        isDeleting
          ? fullText.substring(0, displayedText.length - 1)
          : fullText.substring(0, displayedText.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && displayedText === fullText) {
        setTypingSpeed(1500); // Pause at end of word
        setIsDeleting(true);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => prev + 1);
        setTypingSpeed(200); // Pause before typing new word
      }
    };

    const typingInterval = setInterval(handleTyping, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [displayedText, isDeleting, typingSpeed, currentWordIndex, words]);

  const handleButtonClick = () => {
    if (typeof window !== "undefined") {
      window.open("https://www.followop.com.br/register", "_blank");
    }
  };



  return (
    <section className="relative bg-white overflow-hidden min-h-[90vh] flex flex-col justify-center pt-32 pb-20 mobile-container">
      {/* Background patterns - Enhanced for Antigravity feel */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Meta badge centralized */}
        <div className={`flex justify-center ${isMobile ? "mb-6 mt-4" : "mb-8 mt-8"}`}>
          <MetaTechPartnerBadge />
        </div>

        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 mb-6 leading-[1.1] animate-fade-in-down" style={{ animationDelay: "200ms" }}>
            Transforme Seu Whatsapp em uma <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-600">Máquina de Vendas</span>
          </h1>

          <div className="h-20 sm:h-24 md:h-28 flex items-center justify-center mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-600 animate-fade-in-down" style={{ animationDelay: "300ms" }}>
              Venda no automático com <span className="font-medium text-[#16B763] typing-animation border-b-2 border-[#16B763]/30 pb-1">{displayedText}</span>
            </h2>
          </div>

          <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-light px-4 animate-fade-in-down" style={{ animationDelay: "400ms" }}>
            Potencialize seu negócio de forma inteligente. Atendimento 24/7, disparos em massa e CRM integrado em uma única plataforma.
          </p>

          <div className="mt-10 sm:mt-12 flex justify-center gap-4 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <Button
              onClick={handleButtonClick}
              size={isMobile ? "lg" : "default"}
              className="text-sm sm:text-base px-8 py-6 rounded-full bg-gray-900 hover:bg-black text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-14"
            >
              Começar agora
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>

            <Button
              variant="outline"
              size={isMobile ? "lg" : "default"}
              onClick={() => window.open("https://www.followop.com.br/login", "_blank")}
              className="text-sm sm:text-base px-8 py-6 rounded-full border-gray-200 hover:bg-gray-50 text-gray-900 transition-all duration-300 h-14"
            >
              Ver demonstração
            </Button>
          </div>
        </div>

        {/* Dashboard Image with sophisticated container */}
        <div className="mt-20 sm:mt-24 animate-on-scroll from-bottom animate-in max-w-6xl mx-auto relative group" style={{ animationDelay: "0.8s" }}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50 bg-white">
            <img
              src="/lovable-uploads/Captura de tela 2025-12-01 125703.png"
              alt="Dashboard followop"
              className="w-full h-auto transform transition-transform duration-700 hover:scale-[1.01]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
