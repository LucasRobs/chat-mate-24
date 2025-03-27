
import { useEffect, useRef } from "react";
import FeatureCard from "../ui-custom/FeatureCard";
import { 
  Clock, Users, FileText, MessageSquare, Headphones, 
  Image, FileAudio, QrCode, BarChart3, RefreshCw, Bell
} from "lucide-react";

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
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
    {
      icon: Clock,
      title: "Atendimento 24/7",
      description: "Sua empresa disponível para atender clientes a qualquer hora do dia ou da noite."
    },
    {
      icon: Users,
      title: "Transição para humano",
      description: "A IA reconhece quando um atendente entra no chat e abre espaço para interação humana."
    },
    {
      icon: FileText,
      title: "Envio de arquivos",
      description: "Envie fotos, vídeos, PDFs e arquivos com facilidade durante o atendimento."
    },
    {
      icon: MessageSquare,
      title: "Compreensão contextual",
      description: "A IA entende mensagens enviadas em partes, garantindo um atendimento fluido."
    },
    {
      icon: FileAudio,
      title: "Interpretação de áudios",
      description: "Capaz de compreender mensagens de áudio para uma interação mais natural."
    },
    {
      icon: Image,
      title: "Reconhecimento de imagens",
      description: "A IA pode interpretar imagens, trazendo ainda mais possibilidades."
    },
    {
      icon: Headphones,
      title: "Atendimento personalizado",
      description: "Oferece atendimento de alta qualidade, treinado especificamente para o seu negócio."
    },
    {
      icon: QrCode,
      title: "Integração via QR Code",
      description: "Com um simples escaneamento, a IA é integrada ao WhatsApp em menos de cinco minutos."
    },
    {
      icon: BarChart3,
      title: "Monitoramento em tempo real",
      description: "Acompanhe as conversas e intervenha quando necessário com nosso painel."
    },
    {
      icon: RefreshCw,
      title: "Follow-up pós-checkout",
      description: "Inicie novos chats após o checkout, facilitando o follow-up através de automações."
    },
    {
      icon: Bell,
      title: "Lembrete de retorno",
      description: "A IA lembra o lead de voltar após a conversa encerrar, verificando se tudo foi resolvido."
    }
  ];

  return (
    <section id="features" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-5 followop-pattern"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll from-bottom">
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
            Funcionalidades
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-secondary">
            Tudo o que você precisa para um atendimento excepcional
          </h2>
          <p className="mt-6 text-xl text-gray-600">
            Nossas funcionalidades foram desenvolvidas para maximizar a eficiência do seu atendimento e proporcionar a melhor experiência para seus clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`animate-on-scroll ${index % 2 === 0 ? 'from-left' : 'from-right'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
