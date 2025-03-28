
import { useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

const partners = [
  {
    name: "WhatsApp",
    logo: "/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png",
  },
  {
    name: "Zendesk",
    logo: "https://cdn.worldvectorlogo.com/logos/zendesk-1.svg",
  },
  {
    name: "HubSpot",
    logo: "https://cdn.worldvectorlogo.com/logos/hubspot-2.svg",
  },
  {
    name: "Salesforce",
    logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg",
  },
  {
    name: "Shopify",
    logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
  },
  {
    name: "WooCommerce",
    logo: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg",
  },
  {
    name: "Magento",
    logo: "https://cdn.worldvectorlogo.com/logos/magento-2.svg",
  },
  {
    name: "Zoho",
    logo: "https://cdn.worldvectorlogo.com/logos/zoho-1.svg",
  },
  {
    name: "RD Station",
    logo: "https://cdn.worldvectorlogo.com/logos/rd-station-2.svg",
  },
];

const IntegrationPartners = () => {
  const isMobile = useIsMobile();
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Auto-scroll the carousel
    if (carouselRef.current) {
      intervalRef.current = setInterval(() => {
        if (carouselRef.current && carouselRef.current.scrollBy) {
          carouselRef.current.scrollBy({
            left: isMobile ? 100 : 200,
            behavior: "smooth",
          });
        }
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isMobile]);

  const slideSize = isMobile ? 33.33 : 20; // Show 3 slides on mobile, 5 on desktop

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary">
            Integrações disponíveis
          </h2>
          <p className="mt-4 text-gray-600">
            A FollowOP se integra com as principais ferramentas do mercado
          </p>
        </div>

        <div className="mt-10 relative">
          <Carousel
            opts={{
              loop: true,
              align: "start",
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent ref={carouselRef}>
              {partners.map((partner, index) => (
                <CarouselItem key={index} className={`pl-4 basis-1/${Math.round(100/slideSize)}`} style={{ flex: `0 0 ${slideSize}%` }}>
                  <Card className="border-none shadow-none">
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
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
              <CarouselNext className="right-0" />
            </div>
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
              <CarouselPrevious className="left-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default IntegrationPartners;
