
import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = () => {
    if (typeof window !== "undefined") {
      window.open("https://www.followop.com.br/register", "_blank");
    }
  };

  return (
    <section className="relative bg-white overflow-hidden py-16 md:py-20 lg:py-24">
      {/* Brand dot pattern elements */}
      <div className="absolute top-20 left-10 w-12 h-12 rounded-full border-[3px] border-primary opacity-70"></div>
      <div className="absolute top-40 right-20 w-16 h-16">
        <div className="w-full h-full rounded-full border-[3px] border-primary opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-[3px] border-primary opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-[3px] border-primary opacity-70"></div>
      </div>
      <div className="absolute bottom-20 left-1/4 w-14 h-14 rounded-full bg-primary opacity-20"></div>
      <div className="absolute bottom-40 right-1/3 w-10 h-10 rounded-full border-[3px] border-primary opacity-70"></div>

      {/* Half circle pattern */}
      <div className="absolute top-60 left-20 w-14 h-14 opacity-20">
        <div className="w-full h-full rounded-full bg-primary overflow-hidden">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-white"></div>
        </div>
      </div>

      {/* Padrão de pontos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 impulso-pattern opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="/lovable-uploads/5e5ea857-e83d-43fd-a62d-96b99190ecbb.png" 
              alt="Meta Tech Partner" 
              className="h-8 transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-down">
            <span className="text-primary">Transforme</span> Seu Whatsapp:
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Venda no automático com <span className="text-primary">inteligência Artificial</span>
          </h2>

          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trabalhe de forma mais inteligente sem perder performance<br />
            aumente seus resultados e eleve o atendimento do seu negócio a outro nível.
          </p>

          <div className="mt-10 flex justify-center">
            <a 
              href="#" 
              onClick={handleButtonClick}
              className="bg-[#A2DE5D] hover:bg-[#A2DE5D]/90 text-gray-800 font-medium px-8 py-4 rounded-full flex items-center gap-2 group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              TESTE GRÁTIS 7 DIAS
              <span className="bg-[#173824] text-white p-2 rounded-full group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} />
              </span>
            </a>
          </div>
        </div>

        <div className="mt-16">
          {isLoading ? (
            <div className="relative aspect-[16/9] w-full bg-gray-100 rounded-xl overflow-hidden max-w-5xl mx-auto">
              <div className="absolute inset-0 animate-pulse bg-gray-200"></div>
            </div>
          ) : (
            <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg border-[6px] border-primary/50 hover:border-primary transition-all duration-300 relative">
              {/* Pseudo Dashboard */}
              <div className="bg-[#173824]/5 p-4">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between bg-white rounded-lg p-3 mb-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    <img 
                      src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png" 
                      alt="followop Logo" 
                      className="h-8"
                    />
                    <span className="font-semibold text-gray-800">followop Dashboard</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-medium text-primary">AU</span>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  {/* Stats Card 1 - Full circle */}
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <div className="h-5 w-5 rounded-full bg-primary"></div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Atendimentos</p>
                        <p className="text-xl font-bold">128</p>
                      </div>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{width: '80%'}}></div>
                    </div>
                  </div>

                  {/* Stats Card 2 - Concentric circles */}
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center relative group-hover:bg-primary/20 transition-colors duration-300">
                        <div className="h-7 w-7 rounded-full border-2 border-primary"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full border-2 border-primary"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Conversões</p>
                        <p className="text-xl font-bold">43</p>
                      </div>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{width: '65%'}}></div>
                    </div>
                  </div>

                  {/* Stats Card 3 - Half circle */}
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center relative group-hover:bg-primary/20 transition-colors duration-300">
                        <div className="h-6 w-6 rounded-full bg-primary overflow-hidden">
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-3 bg-white ml-[3px]"></div>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Receita</p>
                        <p className="text-xl font-bold">R$ 12.480</p>
                      </div>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>

                {/* Chat Simulation */}
                <div className="bg-white rounded-lg shadow-sm p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">Conversas ativas</h3>
                    <span className="text-xs bg-primary/15 text-primary py-1 px-2 rounded-full">3 online</span>
                  </div>
                  
                  {/* Chat messages */}
                  <div className="space-y-3 mb-4">
                    <div className="flex gap-3">
                      <div className="h-8 w-8 rounded-full bg-gray-100 flex-shrink-0"></div>
                      <div className="bg-gray-100 rounded-lg p-3 max-w-[70%]">
                        <p className="text-sm">Olá, gostaria de saber mais sobre como a IA pode ajudar no atendimento.</p>
                        <span className="text-xs text-gray-500">09:42</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 justify-end">
                      <div className="bg-primary/10 rounded-lg p-3 max-w-[70%]">
                        <p className="text-sm">Claro! Nossa IA é capaz de atender, qualificar e converter seus leads automaticamente, 24h por dia.</p>
                        <span className="text-xs text-gray-500">09:43 ✓✓</span>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center">
                        <span className="text-xs font-medium text-primary">AI</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="h-8 w-8 rounded-full bg-gray-100 flex-shrink-0"></div>
                      <div className="bg-gray-100 rounded-lg p-3 max-w-[70%]">
                        <p className="text-sm">Isso é exatamente o que estou procurando! E quanto custa?</p>
                        <span className="text-xs text-gray-500">09:44</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Input */}
                  <div className="flex gap-2 items-center">
                    <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-400">
                      Digite sua mensagem...
                    </div>
                    <button className="bg-primary rounded-full p-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Floating logo footer */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <div className="flex items-center gap-2">
                  <img 
                    src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png" 
                    alt="followop Logo" 
                    className="h-6"
                  />
                  <span className="font-medium text-gray-800">followop</span>
                </div>
              </div>

              {/* Decorative brand dots on the dashboard */}
              <div className="absolute top-2 right-2 w-4 h-4 rounded-full border-2 border-primary/40"></div>
              <div className="absolute bottom-12 left-4 w-6 h-6">
                <div className="w-full h-full rounded-full border-2 border-primary/40"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-primary/40"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full border-2 border-primary/40"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
