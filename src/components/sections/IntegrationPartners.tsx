
import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import Autoplay from "embla-carousel-autoplay";

const partners = [
  {
    name: "Hotmart",
    logo: "/lovable-uploads/43874e99-23e9-4038-8a31-e3d17f0a7390.png",
  },
  {
    name: "Eduzz",
    logo: "/lovable-uploads/5bdc83df-80d5-459b-bc76-a36ab8feadcb.png",
  },
  {
    name: "Udemy",
    logo: "https://cdn.worldvectorlogo.com/logos/udemy-2.svg",
  },
  {
    name: "Monetizze",
    logo: "/lovable-uploads/2f45d978-9671-406e-98a0-1b6544611c7a.png",
  },
  {
    name: "Kiwify",
    logo: "/lovable-uploads/334d07b0-6cc1-4f22-9c43-aac5ba0b381f.png",
  },
  {
    name: "StationPay",
    logo: "/lovable-uploads/9650769b-d267-4627-bd75-83a24a1ab8f9.png",
  },
];

const IntegrationPartners = () => {
  const isMobile = useIsMobile();
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

  // Determine slides per view based on screen size
  const slidesPerView = isMobile ? 2 : 4;

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

        <div className="mt-10 relative max-w-4xl mx-auto">
          <Carousel
            opts={{
              loop: true,
              align: "center",
              slidesToScroll: 1,
              containScroll: "trimSnaps",
            }}
            plugins={[autoplayPlugin.current]}
            className="w-full"
          >
            <CarouselContent>
              {partners.map((partner, index) => (
                <CarouselItem key={index} className={`md:basis-1/${slidesPerView}`}>
                  <Card className="border-none shadow-none hover:shadow-md transition-shadow duration-300">
                    <CardContent className="flex items-center justify-center p-6">
                      <div className="w-24 h-24 flex items-center justify-center">
                        <img 
                          src={partner.logo} 
                          alt={partner.name} 
                          className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -right-4 sm:-right-8 top-1/2 transform -translate-y-1/2">
              <CarouselNext className="right-0" />
            </div>
            <div className="absolute -left-4 sm:-left-8 top-1/2 transform -translate-y-1/2">
              <CarouselPrevious className="left-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default IntegrationPartners;
