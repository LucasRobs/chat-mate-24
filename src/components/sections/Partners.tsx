
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
    { name: "Emergency Talks", logo: "/lovable-uploads/e48ef412-b1e7-4c54-9104-d48ddcb141f8.png", darkFilter: true },
    { name: "Simplo", logo: "/lovable-uploads/c18c4f4d-8b72-46fc-a666-04ffae274fad.png" },
  ];

  return (
    <section id="partners" className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden animated-section">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div 
          className={`text-center mb-6 sm:mb-8 fade-in-up ${
            isVisible ? "in-view" : ""
          }`}
        >
          <span className="bg-primary/10 text-primary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
            Parceiros
          </span>
          <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl font-light text-black">
            Empresas Parceiras
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-500 max-w-2xl mx-auto font-light">
            Confiam e impulsionam nossa tecnologia
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 stagger-container">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className={`flex-shrink-0 hover:opacity-100 transition-all duration-500 transform hover:scale-105 stagger-item`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className={`h-8 sm:h-10 md:h-12 w-auto transition-all filter grayscale opacity-60 hover:opacity-80 ${
                  partner.darkFilter ? "brightness-75" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
