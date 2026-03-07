import React from "react";
import { Users, Bot, Send, Map } from "lucide-react";

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
      title: "Acorde a sua base de clientes.",
      description: "Mande sua oferta para milhares de contatos em 1 clique e veja vendas acontecendo no piloto automático.",
      className: "col-span-2 md:col-span-2 bg-[#FAFAFA]"
    },
    {
      icon: Users,
      title: "Sua equipe inteira em um número.",
      description: "Sistemas de roteamento inteligente que entregam o cliente certo para o vendedor certo.",
      className: "col-span-1 md:col-span-1 bg-[#FAFAFA]"
    },
    {
      icon: Bot,
      title: "Seu melhor vendedor de madrugada.",
      description: "Uma inteligência focada no seu negócio que qualifica leads e agenda reuniões enquanto você dorme.",
      className: "col-span-1 md:col-span-1 bg-white border-2 border-[#16B763]/10"
    },
    {
      icon: Map,
      title: "O mapa completo do seu funil.",
      description: "Saiba exatamente onde seu dinheiro está. Visão total dos contatos, do primeiro 'oi' até a venda.",
      className: "col-span-2 md:col-span-2 bg-[#FAFAFA]"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden animated-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 blur-reveal" style={{ transitionDelay: "100ms" }}>
          <span className="bg-[#16B763]/10 text-[#16B763] px-3 py-1 rounded-full text-xs font-medium tracking-wide border border-[#16B763]/20 animate-pulse">
            O Cérebro da Operação
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
            O cérebro por trás da <br className="hidden sm:block" />
            <span className="text-[#16B763]">sua nova máquina de vendas.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Gestão invisível, resgate ativo e operação centralizada.<br className="hidden sm:block" /> Trabalhando nos bastidores para lotar sua agenda.
          </p>
        </div>

        <div className="grid auto-rows-fr grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`blur-reveal rounded-[1.25rem] p-3 sm:p-4 md:p-5 border border-gray-100 bg-white hover:bg-gray-50/50 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 group relative overflow-hidden ${feature.className}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <span className="absolute right-3 top-3 rounded-full border border-gray-200 bg-white/90 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-gray-400">
                0{index + 1}
              </span>
              <div className="relative z-10">
                <IconWrapper>
                  {/* use solid green color for all icons to keep visual language consistent */}
                  <feature.icon className="w-4 h-4 text-primary" aria-hidden />
                </IconWrapper>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-1 tracking-tight text-balance leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-500 font-light leading-snug text-xs sm:text-sm md:text-sm">
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
