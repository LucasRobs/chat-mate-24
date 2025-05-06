
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
    { name: "Emergency Talks", logo: "/lovable-uploads/e48ef412-b1e7-4c54-9104-d48ddcb141f8.png", useDarkBlueFilter: true },
    { name: "Simplo", logo: "/lovable-uploads/c18c4f4d-8b72-46fc-a666-04ffae274fad.png" },
  ];

  return (
    <section id="partners" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div 
          className={`text-center mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <h2 className="text-2xl font-bold text-secondary">
            Empresas Parceiras
          </h2>
          <p className="mt-2 text-gray-500">
            Confiam e impulsionam nossa tecnologia
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 hover:opacity-100 transition-opacity"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className={`h-12 w-auto transition-all ${
                  partner.useDarkBlueFilter 
                  ? "brightness-[0.7] hue-rotate-[210deg] saturate-[1.2]" 
                  : ""
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
