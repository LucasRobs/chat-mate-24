
import React, { useRef } from "react";
import { CheckCircle, MessageSquare, BarChart, Clock, Heart, Smartphone } from "lucide-react";
import FeatureCard from "../ui-custom/FeatureCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useIsMobile } from "@/hooks/use-mobile";

const Features = () => {
  const isMobile = useIsMobile();
  
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

  const autoplayPlugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );
  
  return (
    <section id="features" className="py-10 md:py-16 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6 sm:mb-8 animate-fade-in-down">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
            Funcionalidades
          </span>
          <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl font-light text-secondary">
            Recursos <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">poderosos</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
            Transforme a experiência do atendimento ao cliente com a followop
          </p>
        </div>

        {/* Carousel for all devices, optimized for mobile */}
        <div className="mx-auto max-w-4xl">
          <Carousel
            opts={{ 
              loop: true,
              align: "center",
              dragFree: isMobile,
            }}
            plugins={[autoplayPlugin.current]}
            className="w-full"
          >
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index} className="basis-[85%] sm:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="h-full pb-1">
                    <FeatureCard
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                      className="h-full"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative static translate-y-0 mr-2 h-8 w-8" />
              <CarouselNext className="relative static translate-y-0 h-8 w-8" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Features;
