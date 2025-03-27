
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import Partners from "@/components/sections/Partners";
import ChatDemo from "@/components/sections/ChatDemo";
import Testimonials from "@/components/sections/Testimonials";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone, ArrowRight } from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Scroll animation observer
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
        <section className="py-12 bg-primary">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="reveal">
                <h3 className="text-white text-3xl md:text-4xl font-bold">1000+</h3>
                <p className="text-white/80 mt-2">Empresas atendidas</p>
              </div>
              <div className="reveal">
                <h3 className="text-white text-3xl md:text-4xl font-bold">24/7</h3>
                <p className="text-white/80 mt-2">Disponibilidade</p>
              </div>
              <div className="reveal">
                <h3 className="text-white text-3xl md:text-4xl font-bold">97%</h3>
                <p className="text-white/80 mt-2">Taxa de satisfação</p>
              </div>
              <div className="reveal">
                <h3 className="text-white text-3xl md:text-4xl font-bold">5min</h3>
                <p className="text-white/80 mt-2">Tempo de setup</p>
              </div>
            </div>
          </div>
        </section>

        <Features />
        
        <ChatDemo />
        
        <Testimonials />
        
        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="bg-gradient-to-r from-secondary to-secondary/90 rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl reveal">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Revolucione seu atendimento hoje mesmo
                </h2>
                <p className="mt-6 text-xl text-white/80">
                  Comece com 7 dias grátis. Sem compromisso. Cancele quando quiser.
                </p>
                
                <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 btn-hover text-lg"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Comece seu teste grátis
                  </Button>
                  <a 
                    href="https://wa.me/5500000000000" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white/10 btn-hover text-lg w-full md:w-auto"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Fale com nosso time
                    </Button>
                  </a>
                </div>
                
                <p className="mt-6 text-sm text-white/60">
                  Entre em contato para um plano personalizado para empresas de grande porte
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <Pricing />
        
        <Partners />
        
        {/* Final CTA */}
        <section className="py-16 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary reveal">
              Pronto para transformar seu atendimento?
            </h2>
            <p className="mt-4 text-lg text-gray-600 reveal">
              Junte-se às empresas que estão revolucionando seu atendimento com FollowOP
            </p>
            <div className="mt-8 reveal">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 btn-hover text-lg"
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
