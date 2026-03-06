import React from "react";
import { Users, Bot, Send, Map, BarChart4 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Send,
      title: "Acorde a sua base de clientes.",
      description: "Mande sua oferta para milhares de contatos em 1 clique e veja vendas acontecendo no piloto automático.",
      className: "md:col-span-2 bg-[#FAFAFA]"
    },
    {
      icon: Users,
      title: "Sua equipe inteira em um número.",
      description: "Sistemas de roteamento inteligente que entregam o cliente certo para o vendedor certo.",
      className: "md:col-span-1 bg-[#FAFAFA]"
    },
    {
      icon: Bot,
      title: "Seu melhor vendedor de madrugada.",
      description: "Uma inteligência focada no seu negócio que qualifica leads e agenda reuniões enquanto você dorme.",
      className: "md:col-span-1 bg-white border-2 border-[#16B763]/10"
    },
    {
      icon: Map,
      title: "O mapa completo do seu funil.",
      description: "Saiba exatamente onde seu dinheiro está. Visão total dos contatos, do primeiro 'oi' até a venda.",
      className: "md:col-span-2 bg-[#FAFAFA]"
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

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`blur-reveal shrink-0 snap-center w-[85%] sm:w-auto rounded-[2rem] p-8 sm:p-10 border border-gray-100 bg-white hover:bg-gray-50/50 shadow-sm transition-all duration-500 transform hover:-translate-y-1 group relative overflow-hidden ${feature.className}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500 border-gray-100">
                  <feature.icon className="w-6 h-6 text-[#16B763]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 tracking-tight">
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
