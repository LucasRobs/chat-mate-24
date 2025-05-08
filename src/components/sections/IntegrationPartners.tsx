
import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
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
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <section className="py-12 sm:py-16 bg-white relative overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-8 sm:mb-10 animate-fade-in-down">
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
            Integrações
          </span>
          <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl font-light text-secondary">
            Integrações <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">disponíveis</span>
          </h2>
          <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            A followop se integra com as principais plataformas de cursos e produtos digitais
          </p>
        </div>

        <div className="mt-6 sm:mt-10 relative max-w-xs sm:max-w-sm mx-auto overflow-hidden">
          <div className="absolute -top-10 -left-10 w-16 h-16 rounded-full border-4 border-primary/20 opacity-50 animate-float"></div>
          <div className="absolute -bottom-10 -right-10 w-16 h-16 rounded-full border-4 border-primary/20 opacity-50 animate-float" style={{ animationDelay: "1.5s" }}></div>
          
          <Carousel
            opts={{ loop: true, align: "center", slidesToScroll: 1 }}
            plugins={[autoplayPlugin.current]}
            className="w-full"
          >
            <CarouselContent>
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="basis-full pl-4">
                  <Card className="border-none shadow-none hover:bg-gray-50/50 transition-all duration-300 rounded-xl">
                    <CardContent className="flex items-center justify-center p-6">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="h-14 md:h-20 w-auto transition-all hover:scale-105"
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
