
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Dashboard from "@/components/ui-custom/Dashboard";

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

  // Dados do gráfico de atividade simulados - fixed data, no carousel effect
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
    <section className="relative bg-white overflow-hidden py-16 md:py-20 lg:py-24 mobile-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 animate-on-scroll from-bottom animate-in" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="/lovable-uploads/b245de89-8336-4e08-9842-eca33945c44e.png" 
              alt="Meta Tech Partner" 
              className="h-8 transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        <div className="text-center animate-on-scroll from-bottom animate-in" style={{ animationDelay: "0.3s" }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
            <span className="text-primary">Transforme</span> Seu Whatsapp:
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Venda no automático com <span className="text-primary">inteligência Artificial</span>
          </h2>

          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trabalhe de forma mais inteligente sem perder performance<br className="hidden md:inline" />
            aumente seus resultados e eleve o atendimento do seu negócio a outro nível.
          </p>

          <div className="mt-10 flex justify-center">
            <Button 
              onClick={handleButtonClick}
              variant="trial"
              className="text-lg py-6 flex items-center gap-6 h-auto"
            >
              TESTE GRÁTIS 7 DIAS
              <span className="bg-[#2D2D4A] text-white p-3 rounded-full">
                <ArrowRight size={16} />
              </span>
            </Button>
          </div>
        </div>

        <div className="mt-16 animate-on-scroll from-bottom animate-in" style={{ animationDelay: "0.5s" }}>
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
