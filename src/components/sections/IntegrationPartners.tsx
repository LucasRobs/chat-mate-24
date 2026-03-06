
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
    <section className="bg-white relative overflow-hidden animated-section">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-10 sm:mb-16 blur-reveal">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium tracking-wide animate-pulse">
            Integrações
          </span>
          <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
            Integrações <span className="text-[#16B763]">disponíveis</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-500 font-light max-w-2xl mx-auto">
            A followop se conecta de maneira fluida às principais plataformas de cursos e produtos digitais.
          </p>
        </div>

        <div className="mt-6 sm:mt-10 relative max-w-xs sm:max-w-sm mx-auto overflow-hidden scale-in">
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

        <div className="mt-12 sm:mt-16 text-center blur-reveal" style={{ transitionDelay: "400ms" }}>
          <div className="inline-flex flex-col items-center p-6 sm:p-8 bg-[#FAFAFA] border border-gray-100 rounded-[2rem] max-w-2xl mx-auto shadow-sm">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              Não usa nenhuma dessas plataformas? Não tem problema.
            </h3>
            <p className="text-gray-500 font-light text-sm sm:text-base mb-6">
              A followop possui uma API aberta e recebe webhooks de qualquer sistema. Se o seu sistema envia dados, nós conectamos.
            </p>
            <a 
              href="https://www.followop.com.br/register" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 rounded-full text-sm font-medium transition-colors shadow-sm"
            >
              Começar a integrar agora
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationPartners;
