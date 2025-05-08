
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
    { name: "Emergency Talks", logo: "/lovable-uploads/e48ef412-b1e7-4c54-9104-d48ddcb141f8.png" },
    { name: "Simplo", logo: "/lovable-uploads/c18c4f4d-8b72-46fc-a666-04ffae274fad.png" },
  ];

  return (
    <section id="partners" className="py-8 sm:py-10 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div 
          className={`text-center mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-medium">
            Parceiros
          </span>
          <h2 className="mt-2 text-lg sm:text-xl md:text-2xl font-light text-black">
            Empresas Parceiras
          </h2>
          <p className="mt-1 text-[10px] sm:text-xs text-gray-500 max-w-2xl mx-auto font-light">
            Confiam e impulsionam nossa tecnologia
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className={`flex-shrink-0 hover:opacity-100 transition-all duration-500 transform hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-6 sm:h-7 md:h-8 w-auto transition-all filter grayscale opacity-60 hover:opacity-80"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
