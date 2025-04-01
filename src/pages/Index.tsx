
import { useEffect, useState, useRef } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import Partners from "@/components/sections/Partners";
import Testimonials from "@/components/sections/Testimonials";
import HowItWorks from "@/components/sections/HowItWorks";
import IntegrationPartners from "@/components/sections/IntegrationPartners";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  const isMobile = useIsMobile();
  const [companyCount, setCompanyCount] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);
  const [setupTime, setSetupTime] = useState(0);
  const statsRef = useRef(null);
  const animationTriggeredRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            
            if (entry.target.classList.contains("stats-section") && !animationTriggeredRef.current) {
              animationTriggeredRef.current = true;
              animateCounters();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const animateCounters = () => {
    animateValue(0, 20, 2000, setCompanyCount);
    animateValue(0, 97, 2000, setSatisfactionRate);
    animateValue(0, 5, 2000, setSetupTime);
  };

  const animateValue = (start, end, duration, setter) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setter(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const playerScript = document.createElement('script');
    playerScript.src = 'https://fast.wistia.com/player.js';
    playerScript.async = true;
    
    const embedScript = document.createElement('script');
    embedScript.src = 'https://fast.wistia.com/embed/k3jvq760qi.js';
    embedScript.async = true;
    embedScript.type = 'module';
    
    document.head.appendChild(playerScript);
    document.head.appendChild(embedScript);
    
    const style = document.createElement('style');
    style.innerHTML = `
      wistia-player[media-id='k3jvq760qi']:not(:defined) { 
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/k3jvq760qi/swatch'); 
        display: block; 
        filter: blur(5px); 
        padding-top:56.25%; 
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(playerScript);
      document.head.removeChild(embedScript);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <TooltipProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          <Hero />

          <section ref={statsRef} className="py-10 sm:py-12 bg-gradient-to-r from-primary to-primary/90 relative overflow-hidden stats-section reveal">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 opacity-10 followop-pattern"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 text-center">
                <div className="reveal">
                  <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                    {companyCount}+
                  </h3>
                  <p className="text-white/80 mt-2 text-sm sm:text-base">Empresas utilizando com sucesso</p>
                </div>
                <div className="reveal">
                  <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                    {satisfactionRate}%
                  </h3>
                  <p className="text-white/80 mt-2 text-sm sm:text-base">Taxa de satisfação dos clientes</p>
                </div>
                <div className="reveal">
                  <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                    {setupTime}min
                  </h3>
                  <p className="text-white/80 mt-2 text-sm sm:text-base">Para configuração completa</p>
                </div>
              </div>
            </div>
          </section>

          <Features />
          
          <HowItWorks />
          
          <IntegrationPartners />
          
          <Testimonials />
                  
          <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 opacity-5 followop-pattern"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
              <div className="bg-gradient-to-r from-secondary to-secondary/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-xl reveal acrylic">
                <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                    Pronto para um <span className="text-primary">Atendimento WhatsApp</span> que Vende Sozinho?
                  </h2>
                  <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-white/80">
                    Comece agora. Sem compromisso. Cancele quando quiser.
                  </p>
                  
                  <div className="mt-6 sm:mt-10 flex flex-col md:flex-row gap-4 justify-center">
                    <Button 
                      size={isMobile ? "default" : "lg"} 
                      className="bg-primary hover:bg-primary/90 btn-hover text-base sm:text-lg backdrop-blur-sm w-full md:w-auto"
                    >
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Comece agora
                    </Button>
                    <a 
                      href="https://wa.me/5500000000000" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full md:w-auto"
                    >
                      <Button 
                        size={isMobile ? "default" : "lg"} 
                        variant="outline" 
                        className="border-white text-primary bg-white/90 backdrop-blur-sm hover:bg-white/90 hover:text-primary/90 btn-hover text-base sm:text-lg w-full transition-all duration-300"
                      >
                        <Phone className="mr-2 h-5 w-5" />
                        Agendar Consultoria Gratuita
                      </Button>
                    </a>
                  </div>
                  
                  <p className="mt-4 sm:mt-6 text-sm text-white/70">
                    Entre em contato para um plano personalizado para empresas de grande porte
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <Pricing />
          
          <Partners />
          
          <section className="py-12 sm:py-16 bg-white border-t border-gray-200 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none backdrop-blur-[1px]">
              <div className="absolute inset-0 opacity-5 followop-pattern"></div>
            </div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary reveal">
                Menos trabalho manual, <span className="text-primary">mais vendas</span>!
              </h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 reveal">
                Junte-se às empresas que estão revolucionando seu atendimento com followop
              </p>
              <div className="mt-6 sm:mt-8 reveal">
                <Button 
                  size={isMobile ? "default" : "lg"} 
                  className="bg-primary hover:bg-primary/90 btn-hover text-base sm:text-lg backdrop-blur-sm w-full sm:w-auto"
                >
                  Começar agora <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <Toaster />
      </div>
    </TooltipProvider>
  );
};

export default Index;
