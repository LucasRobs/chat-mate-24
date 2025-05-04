
import { useEffect, useState } from "react";

const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (document.getElementById("partners")) {
      observer.observe(document.getElementById("partners")!);
    }

    return () => {
      if (document.getElementById("partners")) {
        observer.unobserve(document.getElementById("partners")!);
      }
    };
  }, []);

  const partners = [
    { name: "Sebrae", logo: "/lovable-uploads/2192a165-35d0-46af-ace8-64e6e8f4c8d4.png" },
    { name: "SebrateLab", logo: "/lovable-uploads/c241bc16-7cad-45e8-b380-8f698a4eaa41.png" },
    { name: "Corredores Digitais", logo: "/lovable-uploads/c9324512-b0e3-4543-bbef-c18d92b285d6.png" },
    { name: "Firebase", logo: "/lovable-uploads/6443dfd4-5a5c-403f-aa89-1b43aa9f7f99.png" },
  ];

  return (
    <section id="partners" className="py-16 bg-gradient-to-b from-gray-50 to-white brand-decorations">
      {/* Subtle brand patterns */}
      <div className="absolute top-14 left-[15%] w-7 h-7 solid-circle-pattern opacity-15"></div>
      <div className="absolute bottom-10 right-[10%] w-6 h-6 half-circle-pattern opacity-20"></div>
      <div className="absolute top-[30%] right-[5%] w-9 h-9 outline-circle-pattern opacity-15"></div>
      <div className="absolute bottom-[40%] left-[20%] w-5 h-5 impulso-pattern opacity-25"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div 
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
            Empresa
          </span>
          <h2 className="mt-6 text-2xl md:text-3xl font-bold text-secondary">
            Confiam e impulsionam nossa tecnologia
          </h2>
        </div>

        <div className="w-full overflow-hidden rounded-xl p-8 bg-white shadow-sm border border-gray-100 card-with-patterns">
          <div className="marquee relative flex items-center">
            <div className="marquee-content flex items-center justify-around w-full">
              {partners.map((partner, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 mx-4 md:mx-8 opacity-70 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
              {partners.map((partner, index) => (
                <div 
                  key={`repeat-${index}`} 
                  className="flex-shrink-0 mx-4 md:mx-8 opacity-70 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Brand pattern elements */}
        <div className="relative mt-10 py-4">
          <div className="absolute -top-10 -right-10 w-8 h-8 opacity-10">
            <div className="impulso-pattern absolute inset-0"></div>
          </div>
          <div className="absolute -bottom-5 -left-5 w-6 h-6 opacity-10">
            <div className="impulso-pattern absolute inset-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
