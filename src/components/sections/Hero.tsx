import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Dashboard from "@/components/ui-custom/Dashboard";

// Meta Tech Partner Badge Component
const MetaTechPartnerBadge = () => (
  <div className="flex items-center gap-2 bg-white shadow-md border border-gray-200 rounded-lg px-3 py-2 text-xs font-medium text-gray-700 hover:shadow-lg transition-shadow">
    <div className="w-5 h-5 flex items-center justify-center">
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M36 18C36 8.059 27.941 0 18 0C8.059 0 0 8.059 0 18C0 26.99 6.584 34.431 15.188 35.77V23.196H10.617V18H15.188V14.039C15.188 9.527 17.88 7.031 21.985 7.031C23.96 7.031 26.02 7.383 26.02 7.383V11.813H23.743C21.496 11.813 20.811 13.203 20.811 14.625V18H25.805L25.015 23.196H20.811V35.77C29.416 34.431 36 26.99 36 18Z" fill="#1877F2" />
        <path d="M25.015 23.196L25.805 18H20.812V14.625C20.812 13.203 21.496 11.813 23.743 11.813H26.02V7.383C26.02 7.383 23.96 7.031 21.985 7.031C17.879 7.031 15.188 9.527 15.188 14.039V18H10.617V23.196H15.188V35.77C16.104 35.924 17.044 36.001 18 36C18.956 36.001 19.896 35.924 20.812 35.77V23.196H25.015Z" fill="white" />
      </svg>
    </div>
    <span className="text-[#1877F2] font-semibold">Meta</span>
    <span className="text-gray-700">Tech Partner</span>
    <span className="text-xs text-gray-500 ml-1">|</span>
    <span className="text-xs text-gray-500">Powered by WhatsApp Business API</span>
  </div>
);

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setIsLoading(false), 1000);
    
    // Initialize scroll animations
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
      clearTimeout(timer);
      animElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleButtonClick = () => {
    if (typeof window !== "undefined") {
      window.open("https://www.followop.com.br/register", "_blank");
    }
  };

  // Fixed data for the activity chart
  const activityData = [
    { name: "5/04", value: 10 },
    { name: "6/04", value: 20 },
    { name: "7/04", value: 15 },
    { name: "8/04", value: 120 },
    { name: "9/04", value: 340 },
    { name: "10/04", value: 50 },
    { name: "11/04", value: 60 },
    { name: "12/04", value: 20 },
    { name: "13/04", value: 40 },
    { name: "14/04", value: 170 },
    { name: "15/04", value: 30 },
    { name: "16/04", value: 350 },
    { name: "17/04", value: 90 },
  ];

  return (
    <section className="relative bg-white overflow-hidden py-12 md:py-16 lg:py-20 mobile-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 animate-on-scroll from-bottom animate-in" style={{ animationDelay: "0.1s" }}>
          <div className="flex justify-center items-center mb-4">
            <div className="animate-on-scroll from-bottom animate-in">
              <MetaTechPartnerBadge />
            </div>
          </div>
        </div>

        <div className="text-center animate-on-scroll from-bottom animate-in" style={{ animationDelay: "0.3s" }}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            <span className="text-primary">Transforme</span> Seu Whatsapp:
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Venda no automático com <span className="text-primary">inteligência Artificial</span>
          </h2>

          <p className="mt-3 text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trabalhe de forma mais inteligente sem perder performance<br className="hidden md:inline" />
            aumente seus resultados e eleve o atendimento do seu negócio a outro nível.
          </p>

          <div className="mt-8 flex justify-center">
            <Button 
              onClick={handleButtonClick}
              variant="trial"
              className="text-sm py-2.5 flex items-center gap-3 h-auto transform hover:scale-105 transition-all duration-300"
            >
              TESTE GRÁTIS 7 DIAS
              <span className="bg-[#2D2D4A] text-white p-1.5 rounded-full">
                <ArrowRight size={12} />
              </span>
            </Button>
          </div>
        </div>

        <div className="mt-12 animate-on-scroll from-bottom animate-in" style={{ animationDelay: "0.5s" }}>
          <Dashboard 
            activityData={activityData} 
            isMobile={isMobile} 
            isLoading={isLoading} 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
