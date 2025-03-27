import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import Partners from "@/components/sections/Partners";
import Testimonials from "@/components/sections/Testimonials";
import ScheduledMessages from "@/components/sections/ScheduledMessages";
import HowItWorks from "@/components/sections/HowItWorks";
import ChatDemo from "@/components/sections/ChatDemo";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <Hero />

        {/* Stats Section */}
        <section className="py-10 sm:py-12 bg-gradient-to-r from-primary to-primary/90 relative overflow-hidden">
          {/* Background pattern with FollowOP logo */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 opacity-10 followop-pattern"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
              <div className="reveal">
                <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">20+</h3>
                <p className="text-white/80 mt-2 text-sm sm:text-base">Empresas atendidas</p>
              </div>
              <div className="reveal">
                <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">24/7</h3>
                <p className="text-white/80 mt-2 text-sm sm:text-base">Disponibilidade</p>
              </div>
              <div className="reveal">
                <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">97%</h3>
                <p className="text-white/80 mt-2 text-sm sm:text-base">Taxa de satisfação</p>
              </div>
              <div className="reveal">
                <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">5min</h3>
                <p className="text-white/80 mt-2 text-sm sm:text-base">Tempo de setup</p>
              </div>
            </div>
          </div>
        </section>

        <Features />
        
        <HowItWorks />
        
        <ScheduledMessages />
        
        <ChatDemo />
        
        <Testimonials />
        
        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
          {/* Background pattern with FollowOP logo */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 opacity-5 followop-pattern"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="bg-gradient-to-r from-secondary to-secondary/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-xl reveal acrylic">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                  Revolucione seu <span className="dark-to-light-green-gradient">atendimento</span> hoje mesmo
                </h2>
                <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-white/80">
                  Comece com 7 dias grátis. Sem compromisso. Cancele quando quiser.
                </p>
                
                <div className="mt-6 sm:mt-10 flex flex-col md:flex-row gap-4 justify-center">
                  <Button 
                    size={isMobile ? "default" : "lg"} 
                    className="bg-primary hover:bg-primary/90 btn-hover text-base sm:text-lg backdrop-blur-sm w-full md:w-auto"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Comece seu teste grátis
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
                      Fale com nosso time
                    </Button>
                  </a>
                </div>
                
                <p className="mt-4 sm:mt-6 text-sm text-white/60">
                  Entre em contato para um plano personalizado para empresas de grande porte
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <Pricing />
        
        <Partners />
        
        {/* Final CTA */}
        <section className="py-12 sm:py-16 bg-white border-t border-gray-200 relative overflow-hidden">
          {/* Background pattern with FollowOP logo */}
          <div className="absolute inset-0 pointer-events-none backdrop-blur-[1px]">
            <div className="absolute inset-0 opacity-5 followop-pattern"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary reveal">
              Pronto para transformar seu <span className="dark-to-light-green-gradient">atendimento</span>?
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 reveal">
              Junte-se às empresas que estão revolucionando seu atendimento com FollowOP
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
    </div>
  );
};

export default Index;
