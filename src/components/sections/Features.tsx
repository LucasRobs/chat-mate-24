
import { useEffect, useRef, useState } from "react";
import FeatureCard from "../ui-custom/FeatureCard";
import {
  Clock, Users, FileText, MessageSquare, Headphones,
  Image, FileAudio, QrCode, BarChart3, RefreshCw, Bell, Calendar
} from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add("animate-in");
          }
        });
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

  const features = [
    { icon: Clock, title: "Disponibilidade Total", description: "Sua empresa disponível para atender clientes a qualquer hora do dia ou da noite." },
    { icon: Users, title: "Transição para humano", description: "A IA reconhece quando um atendente entra no chat e abre espaço para interação humana." },
    { icon: FileText, title: "Envio de arquivos", description: "Resolva dúvidas mais rápido: Compartilhe facilmente fotos, vídeos e PDFs direto no chat." },
    { icon: MessageSquare, title: "Compreensão contextual", description: "A IA entende mensagens enviadas em partes, garantindo um atendimento fluido e natural." },
    { icon: FileAudio, title: "Interpretação de áudios", description: "Capaz de compreender mensagens de áudio para uma interação mais completa e humana." },
    { icon: Image, title: "Reconhecimento de imagens", description: "Responda mais rápido: A IA pode interpretar imagens enviadas pelos clientes." },
    { icon: Headphones, title: "Atendimento personalizado", description: "Encante clientes: Nossa IA aprende sobre seu negócio para oferecer um atendimento único." },
    { icon: QrCode, title: "Integração via QR Code", description: "Comece em minutos: Com um escaneamento, a IA é integrada ao seu WhatsApp rapidamente." },
    { icon: BarChart3, title: "Monitoramento em tempo real", description: "Controle total: Monitore conversas ao vivo e assuma o controle sempre que precisar." },
    { icon: RefreshCw, title: "Follow-up pós-checkout", description: "Venda mais no pós-venda: Automatize o follow-up pós-checkout e aumente a retenção." },
    { icon: Bell, title: "Recuperação de conversas", description: "Recupere conversas paradas: A IA entra em contato automaticamente para reengajar leads." },
    { icon: Calendar, title: "Mensagens agendadas", description: "Aumente conversões: Programe mensagens para serem enviadas no momento ideal para seus clientes." }
  ];

  return (
    <section id="features" ref={sectionRef} className="py-16 bg-gradient-to-b from-white to-primary/5 relative overflow-hidden">
      {/* Background patterns for branding */}
      <div className="absolute inset-0 followop-pattern opacity-5"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center relative z-10">
        <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium animate-fade-in-down">Funcionalidades</span>
        <h2 className="mt-6 text-3xl md:text-4xl font-light text-black animate-fade-in-down" style={{ animationDelay: "100ms" }}>
          Tudo o que você precisa para <span className="text-black font-normal">vender mais</span> no WhatsApp
        </h2>
        <p className="mt-4 text-lg text-gray-500 font-light max-w-3xl mx-auto animate-fade-in-down" style={{ animationDelay: "200ms" }}>
          Nossas funcionalidades foram desenvolvidas para maximizar suas vendas e proporcionar a melhor experiência para seus clientes.
        </p>

        <div className="mt-12 px-4 md:px-10 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: "300ms" }}>
          <Carousel
            opts={{ loop: true, align: "center" }}
            plugins={[autoplayPlugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {features.map((feature, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <FeatureCard 
                    icon={feature.icon} 
                    title={feature.title} 
                    description={feature.description} 
                    className={`h-full ${isVisible ? "feature-appear" : ""}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Features;
