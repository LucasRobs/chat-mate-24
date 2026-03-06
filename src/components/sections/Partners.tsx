
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

  const partners: Array<{ name: string; logo: string; customClass?: string; invertLogo?: boolean; darkFilter?: boolean }> = [
    { name: "Sebrae", logo: "/lovable-uploads/2192a165-35d0-46af-ace8-64e6e8f4c8d4.png" },
    { name: "Meta", logo: "/lovable-uploads/Meta_Logo.png", customClass: "h-6 sm:h-8 md:h-10" },
    { name: "2P Treinamentos", logo: "/lovable-uploads/2p_treinamentos.png", invertLogo: true, customClass: "h-14 sm:h-16 md:h-20" },
    { name: "SebrateLab", logo: "/lovable-uploads/c241bc16-7cad-45e8-b380-8f698a4eaa41.png" },
    { name: "Corredores Digitais", logo: "/lovable-uploads/c9324512-b0e3-4543-bbef-c18d92b285d6.png", customClass: "h-14 sm:h-16 md:h-20" },
    { name: "Firebase", logo: "/lovable-uploads/6443dfd4-5a5c-403f-aa89-1b43aa9f7f99.png" },
    { name: "Emergency Talks", logo: "/lovable-uploads/e48ef412-b1e7-4c54-9104-d48ddcb141f8.png", invertLogo: true },
  ];

  return (
    <section id="partners" className="bg-white relative overflow-hidden animated-section">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div
          className={`text-center mb-6 sm:mb-8 blur-reveal ${isVisible ? "in-view" : ""
            }`}
          style={{ transitionDelay: "100ms" }}
        >
          <span className="bg-primary/10 text-primary px-3 py-1 mt-4 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium animate-pulse">
            Parceiros
          </span>
          <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
            Empresas Parceiras
          </h2>
          <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-500 max-w-2xl mx-auto font-light">
            Confiam e impulsionam nossa tecnologia
          </p>
        </div>

        <div className="relative w-full overflow-hidden mt-8 max-w-5xl mx-auto">
          <div className="flex w-max animate-marquee">
            {/* First set of logos */}
            <div className="flex items-center space-x-12 sm:space-x-24 mx-6 sm:mx-12">
              {partners.map((partner, index) => (
                <div key={`set1-${index}`} className="flex-shrink-0 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className={`${partner.customClass || "h-8 sm:h-10 md:h-12"} w-auto transition-all filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 ${partner.darkFilter ? "brightness-75 hover:brightness-100" : ""} ${partner.invertLogo ? "invert hover:grayscale" : ""}`}
                  />
                </div>
              ))}
            </div>
            {/* Cloned set of logos for infinite loop */}
            <div className="flex items-center space-x-12 sm:space-x-24 mx-6 sm:mx-12">
              {partners.map((partner, index) => (
                <div key={`set2-${index}`} className="flex-shrink-0 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className={`${partner.customClass || "h-8 sm:h-10 md:h-12"} w-auto transition-all filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 ${partner.invertLogo ? "invert hover:grayscale" : ""}`}
                  />
                </div>
              ))}
            </div>
            {/* Cloned 3rd set of logos specifically for large screens loop consistency */}
            <div className="flex items-center space-x-12 sm:space-x-24 mx-6 sm:mx-12">
              {partners.map((partner, index) => (
                <div key={`set3-${index}`} className="flex-shrink-0 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className={`${partner.customClass || "h-8 sm:h-10 md:h-12"} w-auto transition-all filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 "brightness-75 hover:brightness-100" : ""} ${partner.invertLogo ? "invert hover:grayscale" : ""}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Fading gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 sm:w-1/3 bg-gradient-to-r from-white to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 sm:w-1/3 bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
