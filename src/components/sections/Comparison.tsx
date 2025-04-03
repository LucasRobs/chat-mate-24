
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

    if (document.getElementById("comparison")) {
      observer.observe(document.getElementById("comparison")!);
    }

    return () => {
      if (document.getElementById("comparison")) {
        observer.unobserve(document.getElementById("comparison")!);
      }
    };
  }, []);

  return (
    <section id="comparison" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
            Comparativo
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-gray-900">
            SDR Humano vs. followop
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Veja como nossa solução de IA supera o atendimento tradicional em todos os aspectos importantes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`relative overflow-hidden rounded-xl shadow-lg border border-gray-100 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}>
            <table className="w-full bg-white comparison-table">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-1/3 p-4 text-left font-medium text-gray-500">Característica</th>
                  <th className="w-1/3 p-4 text-center font-medium text-gray-500">SDR Humano</th>
                  <th className="w-1/3 p-4 text-center font-medium bg-primary/5 text-primary">followop</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-t border-gray-100 font-medium">Disponibilidade</td>
                  <td className="p-4 border-t border-gray-100 text-center">Horário Comercial</td>
                  <td className="p-4 border-t border-gray-100 text-center bg-primary/5 font-medium text-primary">24 horas por dia</td>
                </tr>
                <tr>
                  <td className="p-4 border-t border-gray-100 font-medium">Custo Mensal</td>
                  <td className="p-4 border-t border-gray-100 text-center">R$ 5.000+</td>
                  <td className="p-4 border-t border-gray-100 text-center bg-primary/5 font-medium text-primary">A partir de R$ 297</td>
                </tr>
                <tr>
                  <td className="p-4 border-t border-gray-100 font-medium">Tempo de Resposta</td>
                  <td className="p-4 border-t border-gray-100 text-center">Minutos ou horas</td>
                  <td className="p-4 border-t border-gray-100 text-center bg-primary/5 font-medium text-primary">Instantâneo</td>
                </tr>
                <tr>
                  <td className="p-4 border-t border-gray-100 font-medium">Escalabilidade</td>
                  <td className="p-4 border-t border-gray-100 text-center">Limitada</td>
                  <td className="p-4 border-t border-gray-100 text-center bg-primary/5 font-medium text-primary">Ilimitada</td>
                </tr>
                <tr>
                  <td className="p-4 border-t border-gray-100 font-medium">Custo por Hora</td>
                  <td className="p-4 border-t border-gray-100 text-center">R$ 14,55</td>
                  <td className="p-4 border-t border-gray-100 text-center bg-primary/5 font-medium text-primary">R$ 0,44</td>
                </tr>
                <tr>
                  <td className="p-4 border-t border-gray-100 font-medium">Follow-up</td>
                  <td className="p-4 border-t border-gray-100 text-center">Manual</td>
                  <td className="p-4 border-t border-gray-100 text-center bg-primary/5 font-medium text-primary">Automático e Inteligente</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center">
              <div className="mr-4 flex-shrink-0 bg-primary/10 rounded-full p-2">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <p className="text-gray-600"><span className="font-medium text-gray-900">Economia real:</span> Com followop, você economiza mais de 90% nos custos de atendimento ao cliente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
