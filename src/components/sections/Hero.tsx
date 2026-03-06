
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight, Bell, Calendar, BarChart2, Users, MessageSquare, BarChart3, Calendar as CalendarIcon, TrendingUp } from "lucide-react";
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

const InteractiveDashboard = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-[#FAFAFA] p-4 sm:p-6 lg:p-8 text-left w-full mx-auto max-w-5xl animate-fade-in-up">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
            <img
              src="/lovable-uploads/followop.png"
              alt="Logo followop"
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Painel de Métricas</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-[#16B763]/10 text-[#16B763] text-sm font-medium rounded-full">Premium</span>
          <div className="w-8 h-8 rounded-full bg-[#16B763]/10 text-[#16B763] flex items-center justify-center text-sm font-semibold">F</div>
        </div>
      </div>

      {/* Row 1 Stats */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 mb-4 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* Stat 1 */}
        <div className="shrink-0 snap-center w-[85%] sm:w-auto bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-gray-600" />
            </div>
            <span className="text-sm text-gray-400 font-medium">Atendimentos</span>
          </div>
          <div className="flex flex-col mt-2">
            <span className="text-3xl font-bold text-gray-800">329</span>
            <span className="text-sm font-medium text-[#16B763] flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3" /> 12%
            </span>
          </div>
        </div>
        {/* Stat 2 */}
        <div className="shrink-0 snap-center w-[85%] sm:w-auto bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-gray-600" />
            </div>
            <span className="text-sm text-gray-400 font-medium">Mensagens</span>
          </div>
          <div className="flex flex-col mt-2">
            <span className="text-3xl font-bold text-gray-800">2.559</span>
            <span className="text-sm font-medium text-[#16B763] flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3" /> 28%
            </span>
          </div>
        </div>
        {/* Stat 3 */}
        <div className="shrink-0 snap-center w-[85%] sm:w-auto bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-gray-600" />
            </div>
            <span className="text-sm text-gray-400 font-medium">Conversões</span>
          </div>
          <div className="flex flex-col mt-2">
            <span className="text-3xl font-bold text-gray-800">43</span>
            <span className="text-sm font-medium text-[#16B763] flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3" /> 8%
            </span>
          </div>
        </div>
      </div>

      {/* Row 2 Updates */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 mb-4 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* Notificações */}
        <div className="shrink-0 snap-center w-[85%] sm:w-auto bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50/50 rounded-full flex items-center justify-center">
            <Bell className="w-5 h-5 text-blue-500" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 font-medium">Notificações</span>
            <span className="text-lg font-semibold text-gray-700">12 novas</span>
          </div>
        </div>
        {/* Agendamentos */}
        <div className="shrink-0 snap-center w-[85%] sm:w-auto bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-green-50/50 rounded-full flex items-center justify-center">
            <CalendarIcon className="w-5 h-5 text-[#16B763]" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 font-medium">Agendamentos</span>
            <span className="text-lg font-semibold text-gray-700">5 hoje</span>
          </div>
        </div>
      </div>

      {/* Row 3 Graph */}
      <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#16B763]" />
            <h4 className="font-semibold text-gray-800">Desempenho</h4>
          </div>
          <span className="text-xs text-gray-400">Últimos 5 dias</span>
        </div>
        <div className="relative h-36 sm:h-48 w-full border-b border-gray-100/50 mt-4">
          {/* Y Axis lines */}
          <div className="absolute inset-0 flex flex-col justify-between pt-2 pb-6">
            <div className="border-b border-dashed border-gray-100 w-full flex items-center"><span className="absolute -left-2 text-[10px] text-gray-400 -translate-x-full">180</span></div>
            <div className="border-b border-dashed border-gray-100 w-full flex items-center"><span className="absolute -left-2 text-[10px] text-gray-400 -translate-x-full">135</span></div>
            <div className="border-b border-dashed border-gray-100 w-full flex items-center"><span className="absolute -left-2 text-[10px] text-gray-400 -translate-x-full">90</span></div>
            <div className="border-b border-dashed border-gray-100 w-full flex items-center"><span className="absolute -left-2 text-[10px] text-gray-400 -translate-x-full">45</span></div>
            <div className="border-b border-dashed border-gray-100 w-full flex items-center"><span className="absolute -left-2 text-[10px] text-gray-400 -translate-x-full">0</span></div>
          </div>
          {/* X Axis labels */}
          <div className="absolute bottom-0 inset-x-0 ml-8 flex justify-between text-[10px] text-gray-400 -mb-5">
            <span>5/04</span>
            <span>8/04</span>
            <span>11/04</span>
            <span>14/04</span>
            <span>17/04</span>
          </div>

          <div className="absolute inset-0 ml-8 pb-6 h-full overflow-visible">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="gradientLine" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#16B763" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#16B763" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M 0 95 C 15 95, 12.5 25, 25 25 C 37.5 25, 37.5 75, 50 75 C 62.5 75, 62.5 5, 75 5 C 87.5 5, 85 50, 100 50 L 100 100 L 0 100 Z"
                fill="url(#gradientLine)"
              />
              <path
                d="M 0 95 C 15 95, 12.5 25, 25 25 C 37.5 25, 37.5 75, 50 75 C 62.5 75, 62.5 5, 75 5 C 87.5 5, 85 50, 100 50"
                fill="none"
                stroke="#16B763"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Footer / Ver Painel Completo */}
      <div className="flex justify-end mt-6">
        <button
          onClick={() => window.open("https://www.followop.com.br/", "_blank")}
          className="flex items-center gap-2 px-4 py-2 border border-[#16B763]/40 text-[#16B763] rounded-lg text-sm font-medium hover:bg-[#16B763]/5 transition-colors bg-white"
        >
          Ver Painel Completo <ArrowRight className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = [
    "Follow-up",
    "Tempo da Equipe",
    "Organização",
    "Gestão de Leads",
    "Resposta Rápida",
    "Nutrição de Contatos",
    "Análise Repetitiva",
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
    <section className="relative bg-white overflow-hidden min-h-[70vh] flex flex-col justify-center pt-24 pb-12 mobile-container">
      {/* Background patterns - Enhanced for Antigravity feel */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Meta badge centralized */}
        <div className={`flex justify-center ${isMobile ? "mb-6 mt-4" : "mb-8 mt-8"}`}>
          <MetaTechPartnerBadge />
        </div>

        <div className="text-center max-w-5xl mx-auto z-10 relative">
          <h1 className="blur-reveal text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 mb-6 leading-[1.1]" style={{ transitionDelay: "100ms" }}>
            Transforme leads perdidos <br className="hidden sm:block" />
            <span className="text-[#16B763] transition duration-1000">em receita previsível.</span>
          </h1>

          <div className="h-16 sm:h-20 md:h-24 flex items-center justify-center mb-4 blur-reveal" style={{ transitionDelay: "300ms" }}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-600 animate-fade-in-down" style={{ animationDelay: "300ms" }}>
              Nunca mais perca vendas por falta de <span className="font-medium text-[#16B763] typing-animation border-b-2 border-[#16B763]/30 pb-1">{displayedText}</span>
            </h2>
          </div>

          <p className="blur-reveal mt-4 text-base sm:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed font-light px-4" style={{ transitionDelay: "500ms" }}>
            Um ecossistema inteligente que acaba com o trabalho braçal, resgata orçamentos esquecidos e assume as tarefas repetitivas. Escale seu atendimento e fature com previsibilidade.
          </p>

          <div className="mt-8 sm:mt-10 flex justify-center blur-reveal" style={{ transitionDelay: "700ms" }}>
            <Button
              asChild
              variant="apple"
              size={isMobile ? "default" : "lg"}
              className="inline-flex items-center justify-center gap-2 text-sm sm:text-base px-8 sm:px-10 py-3 sm:py-4 h-auto animated-button font-medium w-full sm:w-auto"
            >
              <a
                href="https://www.followop.com.br/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                Assinar a followop
                <span className="bg-[#2D2D4A] text-white p-1 rounded-full flex items-center justify-center w-5 h-5 ml-1">
                  <ArrowRight size={12} />
                </span>
              </a>
            </Button>
          </div>
        </div>

        {/* Dashboard Image with sophisticated container */}
        <div className="mt-12 sm:mt-16 blur-reveal max-w-5xl mx-auto relative group z-10" style={{ transitionDelay: "900ms" }}>
          {/* Subtle smoke backdrop behind dashboard */}
          <div className="absolute -inset-4 bg-gradient-to-r from-green-100/30 to-blue-100/30 blur-2xl rounded-full opacity-50 animate-smoke z-0"></div>
          <div className="relative z-10">
            <InteractiveDashboard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
