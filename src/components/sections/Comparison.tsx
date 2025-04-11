import { useState, useEffect } from "react";
import { Check } from "lucide-react";

const Comparison = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("comparison");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
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
    <section id="comparison" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
            Comparativo
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Atendente vs. followop
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Veja como nossa solução de IA supera o atendimento tradicional em todos os aspectos importantes
          </p>
        </div>

        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          {/* Mobile (cards) */}
          <div className="block sm:hidden space-y-4">
            {data.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-4"
              >
                <h3 className="text-gray-900 font-medium mb-2">{item.label}</h3>
                <div className="text-sm text-gray-600">
                  <p><span className="font-semibold">Atendente:</span> {item.atendente}</p>
                  <p className="mt-1">
                    <span className="font-semibold text-primary">followop:</span>{" "}
                    <span className="text-primary">{item.followop}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop (tabela) */}
          <div className="hidden sm:block max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-xl shadow-lg border border-gray-100">
              <table className="w-full bg-white comparison-table text-sm sm:text-base">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="w-1/3 p-4 text-left font-medium text-gray-500">Característica</th>
                    <th className="w-1/3 p-4 text-center font-medium text-gray-500">Atendente</th>
                    <th className="w-1/3 p-4 text-center font-medium bg-primary/5 text-primary">followop</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, idx) => (
                    <tr key={idx}>
                      <td className="p-4 border-t border-gray-100 font-medium">{item.label}</td>
                      <td className="p-4 border-t border-gray-100 text-center">{item.atendente}</td>
                      <td className="p-4 border-t border-gray-100 text-center bg-primary/5 font-medium text-primary">{item.followop}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 bg-white rounded-xl p-4 sm:p-6 border border-gray-100 shadow-sm">
          <div className="flex items-start sm:items-center">
            <div className="mr-3 sm:mr-4 flex-shrink-0 bg-primary/10 rounded-full p-2">
              <Check className="h-5 w-5 text-primary" />
            </div>
            <p className="text-gray-600 text-sm sm:text-base">
              <span className="font-medium text-gray-900">Economia real:</span> Com followop, você economiza mais de 90% nos custos de atendimento ao cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
