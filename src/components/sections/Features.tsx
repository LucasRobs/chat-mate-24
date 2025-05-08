
import React, { useRef } from "react";
import { CheckCircle, MessageSquare, BarChart, Clock, Heart, Smartphone } from "lucide-react";
import FeatureCard from "../ui-custom/FeatureCard";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import Autoplay from "embla-carousel-autoplay";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Respostas personalizadas",
      description: "Mensagens personalizadas que fazem o cliente se sentir único e especial",
    },
    {
      icon: CheckCircle,
      title: "Mais conversões",
      description: "Aumente suas taxas de conversão com atendimento rápido e eficiente",
    },
    {
      icon: BarChart,
      title: "Insights poderosos",
      description: "Análise detalhada de todas as interações para otimizar seu negócio",
    },
    {
      icon: Clock,
      title: "Atendimento 24/7",
      description: "Nunca perca uma oportunidade com atendimento automatizado 24h por dia",
    },
    {
      icon: Heart,
      title: "Clientes satisfeitos",
      description: "Melhore a satisfação do cliente com respostas rápidas e precisas",
    },
    {
      icon: Smartphone,
      title: "Integração com WhatsApp",
      description: "Conecte-se com seus clientes no canal que eles já utilizam diariamente",
    }
  ];

  const isMobile = useIsMobile();
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );
  
  return (
    <section id="features" className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 animate-fade-in-down">
          <span className="bg-primary/10 text-primary px-3 py-0.5 rounded-full text-xs font-medium">
            Funcionalidades
          </span>
          <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl font-light text-secondary">
            Recursos <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">poderosos</span>
          </h2>
          <p className="mt-2 text-sm text-gray-600 max-w-2xl mx-auto">
            Transforme a experiência do atendimento ao cliente com a followop
          </p>
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="reveal from-bottom"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  className={`h-full ${index % 3 === 1 ? 'translate-y-3' : ''}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View: Carousel */}
        <div className="md:hidden">
          <Carousel
            opts={{ 
              loop: true,
              align: "center",
              slidesToScroll: 1
            }}
            plugins={[autoplayPlugin.current]}
            className="w-full"
          >
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index} className="basis-full pl-4">
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    className="h-full"
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
