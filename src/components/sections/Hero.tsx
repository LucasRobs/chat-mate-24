
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight, Bell, Calendar, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Dashboard from "@/components/ui-custom/Dashboard";

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
      <span>Tech Partner</span>
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

  const activityData = [
    { name: "5/04", value: 10 },
    { name: "8/04", value: 120 },
    { name: "11/04", value: 60 },
    { name: "14/04", value: 170 },
    { name: "17/04", value: 90 },
  ];

  return (
    <section className="relative bg-white overflow-hidden pb-10 pt-16 sm:py-10 lg:py-12 mobile-container">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "0s" }}></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Meta badge centralized with proper spacing - adjusted for mobile */}
        <div className={`${isMobile ? "mb-4 mt-4" : "mb-6 mt-6"}`}>
          <MetaTechPartnerBadge />
        </div>

        <div className="text-center animate-on-scroll from-bottom animate-in mt-4" style={{ animationDelay: "0.3s" }}>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-black mb-1 sm:mb-3 animate-fade-in-down" style={{ animationDelay: "200ms" }}>
            Transforme Seu Whatsapp
          </h1>

          <h2 className="text-lg sm:text-xl md:text-3xl font-light text-black mb-2 sm:mb-3 animate-fade-in-down" style={{ animationDelay: "300ms" }}>
            Venda no automático com <span className="font-semibold text-[#00af6b] typing-animation">{displayedText}</span>
          </h2>

          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed font-light px-1 animate-fade-in-down" style={{ animationDelay: "400ms" }}>
            Potencialize seu negócio de forma inteligente
            {!isMobile && <br className="hidden md:inline" />}
            {' '}e eleve seu atendimento a outro nível.
          </p>

          <div className="mt-4 sm:mt-6 flex justify-center animate-fade-in" style={{ animationDelay: "600ms" }}>
            <Button 
              onClick={handleButtonClick}
              variant="apple"
              size={isMobile ? "default" : "lg"}
              className="text-xs sm:text-sm py-2 sm:py-2.5 flex items-center gap-2 h-auto animated-button"
            >
              Começar agora
              <span className="bg-[#2D2D4A] text-white p-1 rounded-full">
                <ArrowRight size={12} />
              </span>
            </Button>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 animate-on-scroll from-bottom animate-in max-w-4xl mx-auto px-1 sm:px-0" style={{ animationDelay: "0.5s" }}>
          <Dashboard 
            activityData={activityData} 
            isMobile={isMobile}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
