import { useEffect, useRef, useState } from "react";
import FeatureCard from "../ui-custom/FeatureCard";
import { 
  Clock, Users, FileText, MessageSquare, Headphones, 
  Image, FileAudio, QrCode, BarChart3, RefreshCw, Bell, Calendar
} from "lucide-react";

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleFeatures, setVisibleFeatures] = useState(6);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const features = [
    { icon: Clock, title: "Disponibilidade Total", description: "Sua empresa disponível para atender clientes a qualquer hora do dia ou da noite." },
    { icon: Users, title: "Transição para humano", description: "A IA reconhece quando um atendente entra no chat e abre espaço para interação humana." },
    { icon: FileText, title: "Envio de arquivos", description: "Resolva dúvidas mais rápido: Compartilhe facilmente fotos, vídeos e PDFs direto no chat." },
    { icon: MessageSquare, title: "Compreensão contextual", description: "A IA entende mensagens enviadas em partes, garantindo um atendimento fluido e natural." },
    { icon: FileAudio, title: "Interpretação de áudios", description: "Capaz de compreender mensagens de áudio para uma interação mais completa e humana." },
    { icon: Image, title: "Reconhecimento de imagens", description: "Responda mais rápido: A IA pode interpretar imagens enviadas pelos clientes." },
    { icon: Headphones, title: "Atendimento personalizado", description: "Encante clientes: Nossa IA aprende sobre seu negócio para oferecer um atendimento único e personalizado." },
    { icon: QrCode, title: "Integração via QR Code", description: "Comece em minutos: Com um simples escaneamento, a IA é integrada ao seu WhatsApp em menos de 5 minutos." },
    { icon: BarChart3, title: "Monitoramento em tempo real", description: "Controle total: Monitore conversas ao vivo e assuma o controle sempre que precisar, direto no painel." },
    { icon: RefreshCw, title: "Follow-up pós-checkout", description: "Venda mais no pós-venda: Automatize o follow-up pós-checkout e aumente a retenção de clientes." },
    { icon: Bell, title: "Recuperação de conversas", description: "Recupere conversas paradas: A IA entra em contato automaticamente para reengajar leads e garantir a satisfação." },
    { icon: Calendar, title: "Mensagens agendadas", description: "Aumente conversões: Programe mensagens para serem enviadas no momento ideal para seus clientes." }
  ];

  return (
    <section id="features" ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-primary/5 relative">
      <div className="absolute inset-0 pointer-events-none backdrop-blur-[2px]">
        <div className="absolute inset-0 opacity-10 followop-pattern"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-on-scroll from-bottom">
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">Funcionalidades</span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-secondary">
            Tudo o que você precisa para <span className="text-primary">vender mais</span> <span>no WhatsApp</span>
          </h2>
          <p className="mt-6 text-xl text-gray-600">
            Nossas funcionalidades foram desenvolvidas para maximizar suas vendas e proporcionar a melhor experiência para seus clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.slice(0, visibleFeatures).map((feature, index) => (
            <div 
              key={index} 
              className={`animate-on-scroll opacity-0 transform translate-y-10 transition-opacity duration-700 ease-in-out delay-${index * 100}ms flex flex-col items-center justify-center text-center p-6 bg-white shadow-lg rounded-lg h-full`}
              style={{ opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out' }}
            >
              <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
            </div>
          ))}
        </div>
        
        {visibleFeatures < features.length && (
          <div className="text-center mt-16">
            <button 
              onClick={() => setVisibleFeatures(features.length)} 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 animate-on-scroll from-bottom backdrop-blur-sm transition-all duration-500"
            >
              Explorar todas as funcionalidades
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;
