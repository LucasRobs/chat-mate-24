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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary">
            Integrações disponíveis
          </h2>
          <p className="mt-4 text-gray-600">
            A followop se integra com as principais plataformas de cursos e produtos digitais
          </p>
        </div>

        <div className="mt-10 relative max-w-4xl mx-auto overflow-hidden">
          <Carousel
            opts={{ loop: true, align: "start", slidesToScroll: 1 }}
            plugins={[autoplayPlugin.current]}
            className="w-full"
          >
            <CarouselContent className="flex animate-marquee">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="flex-shrink-0 mx-4 md:mx-8">
                  <Card className="border-none shadow-none">
                    <CardContent className="flex items-center justify-center p-6">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="h-16 md:h-20 w-auto grayscale hover:grayscale-0 transition-all"
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
