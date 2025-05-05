import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight, Bell, Calendar, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Dashboard from "@/components/ui-custom/Dashboard";

// Meta Tech Partner Badge Component (refined with Apple-inspired design)
const MetaTechPartnerBadge = () => (
  <div className="flex items-center gap-2 bg-white/90 backdrop-filter backdrop-blur-sm border border-gray-100 rounded-lg px-3 py-2 text-xs font-medium text-gray-700 max-w-fit mx-auto shadow-sm transition-all duration-300 hover:shadow-md">
    <div className="w-5 h-5 flex items-center justify-center">
      <img 
        src="/lovable-uploads/c5206104-ee78-44ed-b432-e4d2a4bb0863.png" 
        alt="Meta Logo" 
        className="w-full h-full object-contain"
      />
    </div>
    <div className="flex items-center">
      <span className="text-[#0668E1] font-semibold">Meta</span>
      <span className="text-gray-700 ml-1">Tech Partner</span>
      <span className="text-gray-400 mx-1.5">|</span>
      <span className="text-[10px] text-gray-500">Powered by WhatsApp Business API</span>
    </div>
  </div>
);

// System Features Component
const SystemFeatures = () => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 max-w-2xl mx-auto mt-4 mb-6">
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100 text-center">
      <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
        <Bell className="w-4 h-4 text-blue-500" />
      </div>
      <p className="text-xs font-medium text-gray-800">Automação de Fluxos</p>
    </div>
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100 text-center">
      <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-2">
        <Calendar className="w-4 h-4 text-green-500" />
      </div>
      <p className="text-xs font-medium text-gray-800">Chatbot IA</p>
    </div>
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100 text-center">
      <div className="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-2">
        <BarChart2 className="w-4 h-4 text-purple-500" />
      </div>
      <p className="text-xs font-medium text-gray-800">Métricas Avançadas</p>
    </div>
  </div>
);

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
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
    <section className="relative bg-white overflow-hidden py-8 sm:py-10 lg:py-12 mobile-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Meta badge centralized with proper spacing - adjusted for mobile */}
        <div className={`${isMobile ? "mb-4 mt-14" : "mb-6 mt-6"}`}>
          <MetaTechPartnerBadge />
        </div>

        <div className="text-center animate-on-scroll from-bottom animate-in mt-4" style={{ animationDelay: "0.3s" }}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-black mb-4">
            Transforme Seu Whatsapp:
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-black mb-3">
            Venda no automático com inteligência Artificial
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Trabalhe de forma mais inteligente sem perder performance
            {!isMobile && <br className="hidden md:inline" />}
            {' '}aumente seus resultados e eleve o atendimento do seu negócio a outro nível.
          </p>

          {/* System Features */}
          <SystemFeatures />

          <div className="mt-6 flex justify-center">
            <Button 
              onClick={handleButtonClick}
              variant="apple"
              size="lg"
              className="text-sm py-2.5 flex items-center gap-2 h-auto animated-button"
            >
              TESTE GRÁTIS 7 DIAS
              <span className="bg-[#2D2D4A] text-white p-1 rounded-full">
                <ArrowRight size={12} />
              </span>
            </Button>
          </div>
        </div>

        <div className="mt-8 animate-on-scroll from-bottom animate-in max-w-4xl mx-auto" style={{ animationDelay: "0.5s" }}>
          <Dashboard 
            activityData={activityData} 
            isMobile={isMobile}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
