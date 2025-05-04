
import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import Autoplay from "embla-carousel-autoplay";

const partners = [
  { name: "Hotmart", logo: "/lovable-uploads/d2eb300a-216a-4188-86fe-e79f877db05c.png" },
  { name: "Eduzz", logo: "/lovable-uploads/74050f6a-3a71-4162-b5e1-547d7624bf8c.png" },
  { name: "Kiwify", logo: "/lovable-uploads/71fbeaff-0928-4752-9ae7-7f042a270e23.png" },
  { name: "Hotmart", logo: "/lovable-uploads/d2eb300a-216a-4188-86fe-e79f877db05c.png" },
  { name: "Eduzz", logo: "/lovable-uploads/74050f6a-3a71-4162-b5e1-547d7624bf8c.png" },
  { name: "Kiwify", logo: "/lovable-uploads/71fbeaff-0928-4752-9ae7-7f042a270e23.png" },
];

const IntegrationPartners = () => {
  const isMobile = useIsMobile();
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 impulso-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary">
            Integrações <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">disponíveis</span>
          </h2>
          <p className="mt-4 text-gray-600">
            A followop se integra com as principais plataformas de cursos e produtos digitais
          </p>
        </div>

        <div className="mt-10 relative max-w-4xl mx-auto overflow-hidden">
          <div className="absolute -top-10 -left-10 w-16 h-16 rounded-full border-4 border-primary/20 opacity-50 animate-float"></div>
          <div className="absolute -bottom-10 -right-10 w-16 h-16 rounded-full border-4 border-primary/20 opacity-50 animate-float" style={{ animationDelay: "1.5s" }}></div>
          
          <Carousel
            opts={{ loop: true, align: "start", slidesToScroll: 1 }}
            plugins={[autoplayPlugin.current]}
            className="w-full"
          >
            <CarouselContent className="flex animate-marquee">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="flex-shrink-0 mx-4 md:mx-8">
                  <Card className="border-none shadow-none hover:bg-gray-50/50 transition-all duration-300 rounded-xl">
                    <CardContent className="flex items-center justify-center p-6">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="h-16 md:h-20 w-auto transition-all hover:scale-105"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default IntegrationPartners;
