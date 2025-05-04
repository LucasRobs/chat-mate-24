
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
      {/* Novos elementos de padrão de marca */}
      <div className="absolute top-20 left-10 w-6 h-6 half-circle-pattern"></div>
      <div className="absolute top-40 right-20 w-10 h-10" style={{ animationDelay: "1s" }}>
        <div className="w-full h-full impulso-pattern"></div>
      </div>
      <div className="absolute bottom-60 left-8 w-8 h-8 solid-circle-pattern"></div>
      <div className="absolute bottom-20 right-10 w-5 h-5 outline-circle-pattern"></div>

      {/* Padrão de background sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 impulso-pattern opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 animate-on-scroll from-bottom animate-in" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="/lovable-uploads/5e5ea857-e83d-43fd-a62d-96b99190ecbb.png" 
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
              className="bg-[#00af6b] hover:bg-[#009459] text-white font-medium px-8 py-6 rounded-full flex items-center gap-2 group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-auto btn-hover"
            >
              TESTE GRÁTIS 7 DIAS
              <span className="bg-secondary text-white p-2 rounded-full group-hover:translate-x-1 transition-transform">
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
