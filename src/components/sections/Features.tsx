import React from "react";
import { Bot, Send, Map, Zap, Target, MessageSquare } from "lucide-react";

// Small presentational wrapper to keep icons consistent and visually light
const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#F0FBF4] flex items-center justify-center mb-2 sm:mb-3">
    {children}
  </div>
);

const Features = () => {
  const features = [
    {
      icon: Send,
      title: "O Caçador (The Hunter)",
      description: "A IA escaneia sua base 24h por dia, identificando gatilhos e iniciando conversas com leads esquecidos. Prospecção reativa e ativa sem esforço humano.",
      className: "col-span-2 md:col-span-2 bg-[#FAFAFA] min-h-[180px]"
    },
    {
      icon: Target,
      title: "Precisão Cirúrgica",
      description: "Chega de disparos aleatórios. Abordagens baseadas em contexto real.",
      className: "col-span-2 md:col-span-1 bg-[#FAFAFA]"
    },
    {
      icon: MessageSquare,
      title: "O Fechador (The Closer)",
      description: "Mais que um bot. Uma IA que entende objeções, negocia condições e envia o link de pagamento no momento exato da conversão.",
      className: "col-span-2 md:col-span-1 bg-white border-2 border-[#16B763]/10"
    },
    {
      icon: Map,
      title: "O Analista (The Analyst)",
      description: "Gestão invisível do seu funil. Tenha a visão exata do ROI gerado por cada agente e onde sua máquina de vendas está escalando mais rápido.",
      className: "col-span-2 md:col-span-2 bg-[#FAFAFA] min-h-[180px]"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden animated-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 blur-reveal" style={{ transitionDelay: "100ms" }}>
          <span className="bg-[#16B763]/10 text-[#16B763] px-3 py-1 rounded-full text-xs font-medium tracking-wide border border-[#16B763]/20">
            Inteligência de Elite
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
            Sua nova equipe de vendas <br className="hidden sm:block" />
            <span className="text-[#16B763]">dirigida por inteligência artificial.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Esqueça as configurações complexas. Ative seus agentes e deixe que a <br className="hidden sm:block" /> tecnologia cuide de todo o processo, do "oi" ao fechamento.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`blur-reveal rounded-[1.5rem] p-5 sm:p-6 md:p-8 border border-gray-100 bg-white hover:bg-gray-50/50 shadow-sm transition-all duration-500 transform hover:-translate-y-1 group relative overflow-hidden flex flex-col justify-center ${feature.className}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <span className="absolute right-4 top-4 rounded-full border border-gray-100 bg-white/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-gray-400">
                Agente 0{index + 1}
              </span>
              <div className="relative z-10">
                <IconWrapper>
                  <feature.icon className="w-5 h-5 text-primary" aria-hidden />
                </IconWrapper>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-500 font-light leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
