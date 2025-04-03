
import { useState, useEffect } from "react";
import { Check, X } from "lucide-react";

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

    const section = document.getElementById("comparison");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const compareItems = [
    {
      feature: "Disponibilidade",
      sdr: "Horário Comercial",
      impulso: "24/7",
      highlight: true
    },
    {
      feature: "Custo Mensal",
      sdr: "R$ 5.000+",
      impulso: "R$ 297",
      highlight: true
    },
    {
      feature: "Tempo de Resposta",
      sdr: "Minutos",
      impulso: "Instantâneo",
      highlight: true
    },
    {
      feature: "Escalabilidade",
      sdr: "Limitada",
      impulso: "Ilimitada",
      highlight: true
    },
    {
      feature: "Atendimentos Simultâneos",
      sdr: "1 por pessoa",
      impulso: "Centenas",
      highlight: true
    },
    {
      feature: "Follow-up Automático",
      sdr: <X className="text-red-500 mx-auto w-5 h-5" />,
      impulso: <Check className="text-green-500 mx-auto w-5 h-5" />,
      highlight: false
    },
    {
      feature: "Integração com CRM",
      sdr: <Check className="text-green-500 mx-auto w-5 h-5" />,
      impulso: <Check className="text-green-500 mx-auto w-5 h-5" />,
      highlight: false
    },
    {
      feature: "Férias e Folgas",
      sdr: <Check className="text-red-500 mx-auto w-5 h-5" />,
      impulso: <X className="text-green-500 mx-auto w-5 h-5" />,
      highlight: false
    }
  ];

  return (
    <section id="comparison" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className={`text-center mb-16 ${isVisible ? 'reveal active' : 'reveal'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            SDR Humano vs. Impulso IA
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Compare e veja por que a IA é o caminho para escalar seu atendimento
          </p>
        </div>
        
        <div className={`overflow-hidden rounded-xl border border-gray-200 ${isVisible ? 'reveal active' : 'reveal'}`}>
          <div className="overflow-x-auto">
            <table className="w-full comparison-table">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-1/3 py-4 px-6 text-left font-semibold text-gray-900">Característica</th>
                  <th className="w-1/3 py-4 px-6 text-center font-semibold text-gray-900">SDR Humano</th>
                  <th className="w-1/3 py-4 px-6 text-center font-semibold text-primary">Impulso IA</th>
                </tr>
              </thead>
              <tbody>
                {compareItems.map((item, index) => (
                  <tr key={index} className="border-t border-gray-100">
                    <td className="py-4 px-6 text-gray-800 font-medium">{item.feature}</td>
                    <td className="py-4 px-6 text-center text-gray-600">
                      {typeof item.sdr === 'string' ? item.sdr : item.sdr}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof item.impulso === 'string' ? (
                        item.highlight ? (
                          <span className="font-semibold text-primary">{item.impulso}</span>
                        ) : (
                          <span className="text-gray-800">{item.impulso}</span>
                        )
                      ) : (
                        item.impulso
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
