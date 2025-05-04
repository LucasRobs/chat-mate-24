
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight, Users, MessageSquare, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

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

  // Dados do gráfico de atividade simulados
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
    <section className="relative bg-white overflow-hidden py-16 md:py-20 lg:py-24">
      {/* Branding dot pattern elements */}
      <div className="absolute top-20 left-10 w-12 h-12 rounded-full border-[3px] border-primary/40 opacity-70 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 animate-float" style={{ animationDelay: "1s" }}>
        <div className="w-full h-full rounded-full border-[3px] border-primary/40 opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-[3px] border-primary/40 opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-[3px] border-primary/40 opacity-70"></div>
      </div>

      {/* Padrão de pontos de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 impulso-pattern opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 reveal active animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="/lovable-uploads/5e5ea857-e83d-43fd-a62d-96b99190ecbb.png" 
              alt="Meta Tech Partner" 
              className="h-8 transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        <div className="text-center reveal active animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 animate-fade-in-down">
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
            <Button 
              onClick={handleButtonClick}
              className="bg-[#00af6b] hover:bg-[#009459] text-white font-medium px-8 py-6 rounded-full flex items-center gap-2 group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-auto"
            >
              TESTE GRÁTIS 7 DIAS
              <span className="bg-secondary text-white p-2 rounded-full group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} />
              </span>
            </Button>
          </div>
        </div>

        <div className="mt-16 reveal active animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {isLoading ? (
            <div className="relative aspect-[16/9] w-full bg-gray-100 rounded-xl overflow-hidden max-w-5xl mx-auto">
              <div className="absolute inset-0 animate-pulse bg-gray-200"></div>
            </div>
          ) : (
            <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg border-[6px] border-primary/10 hover:border-primary/20 transition-all duration-500 relative">
              {/* Dashboard inspirado na imagem de referência */}
              <div className="bg-[#fafafa] p-4">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between bg-white rounded-lg p-3 mb-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    <img 
                      src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png" 
                      alt="followop Logo" 
                      className="h-8"
                    />
                    <span className="font-semibold text-gray-800">Visão Geral</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-medium text-primary">AU</span>
                    </div>
                  </div>
                </div>

                {/* Dashboard Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  {/* Card de Atendimentos */}
                  <div className="dashboard-card p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="dashboard-stat-label">Atendimentos</p>
                        <p className="dashboard-stat text-secondary">329</p>
                      </div>
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Card de Mensagens */}
                  <div className="dashboard-card p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="dashboard-stat-label">Mensagens</p>
                        <p className="dashboard-stat text-secondary">2559</p>
                      </div>
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Card de Conversões */}
                  <div className="dashboard-card p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="dashboard-stat-label">Conversões</p>
                        <p className="dashboard-stat text-primary">43</p>
                      </div>
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <BarChart2 className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gráfico de atividade recente */}
                <div className="dashboard-card p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-secondary">Atividade Recente</h3>
                    <span className="text-xs bg-gray-100 text-gray-600 py-1 px-3 rounded-full font-medium">Últimos 30 dias</span>
                  </div>
                  
                  {/* Gráfico com Recharts */}
                  <div className="h-[300px] w-full animate-slide-left">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={activityData} margin={{ top: 5, right: 20, bottom: 20, left: 0 }}>
                        <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" />
                        <XAxis dataKey="name" stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                        <Line 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#00af6b" 
                          strokeWidth={2}
                          dot={{ r: 3, strokeWidth: 2, fill: "#fff", stroke: "#00af6b" }}
                          activeDot={{ r: 5, strokeWidth: 0, fill: "#00af6b" }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
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

              {/* Branding dots no dashboard */}
              <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-primary/30 opacity-50 branding-dot"></div>
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
