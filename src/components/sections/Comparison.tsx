
import { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const Comparison = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const data = [
    { label: "Disponibilidade", atendente: "Horário Comercial", followop: "24 horas por dia" },
    { label: "Custo Mensal", atendente: "R$ 5.000+", followop: "A partir de R$ 297" },
    { label: "Tempo de Resposta", atendente: "Minutos ou horas", followop: "Instantâneo" },
    { label: "Escalabilidade", atendente: "Limitada", followop: "Ilimitada" },
    { label: "Custo por Hora", atendente: "R$ 14,55", followop: "R$ 0,44" },
    { label: "Follow-up", atendente: "Manual", followop: "Automático e Inteligente" }
  ];

  return (
    <section ref={sectionRef} id="comparison" className="py-12 sm:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 followop-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-16 animate-fade-in-down">
          <span className="bg-primary/10 text-primary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
            Comparativo
          </span>
          <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-4xl font-light text-black">
            Atendente vs. followop
          </h2>
          <p className="mt-2 sm:mt-4 text-sm sm:text-lg text-gray-500 max-w-2xl mx-auto font-light">
            Veja como nossa solução de IA supera o atendimento tradicional em todos os aspectos importantes
          </p>
        </div>

        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          {/* Mobile (cards) */}
          <div className="block sm:hidden space-y-3">
            {data.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-3 hover-card"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-black font-light text-sm mb-2">{item.label}</h3>
                <div className="text-xs text-gray-500 font-light">
                  <p><span className="font-normal">Atendente:</span> {item.atendente}</p>
                  <p className="mt-1">
                    <span className="font-normal text-primary">followop:</span>{" "}
                    <span className="text-primary">{item.followop}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop (tabela) */}
          <div className="hidden sm:block max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-100 transform transition-all hover:shadow-xl">
              <table className="w-full bg-white comparison-table text-sm sm:text-base">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="w-1/3 p-4 text-left font-normal text-gray-500">Característica</th>
                    <th className="w-1/3 p-4 text-center font-normal text-gray-500">Atendente</th>
                    <th className="w-1/3 p-4 text-center font-normal bg-primary/5 text-primary">followop</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, idx) => (
                    <tr key={idx} className={cn("transition-all", isVisible ? "animate-fade-in-down" : "")} style={{ animationDelay: `${idx * 100 + 400}ms` }}>
                      <td className="p-4 border-t border-gray-100 font-light text-black">{item.label}</td>
                      <td className="p-4 border-t border-gray-100 text-center font-light text-gray-700">{item.atendente}</td>
                      <td className="p-4 border-t border-gray-100 text-center bg-primary/5 font-normal text-primary">{item.followop}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 bg-white rounded-xl p-3 sm:p-6 border border-gray-100 shadow-sm transform transition-all hover:shadow-md hover:translate-y-[-2px]">
          <div className="flex items-start sm:items-center">
            <div className="mr-2 sm:mr-4 flex-shrink-0 bg-primary/10 rounded-full p-1.5 sm:p-2">
              <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            </div>
            <p className="text-gray-600 text-xs sm:text-base font-light">
              <span className="font-normal text-black">Economia real:</span> Com followop, você economiza mais de 90% nos custos de atendimento ao cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
