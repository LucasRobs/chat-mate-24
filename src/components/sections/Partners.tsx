
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
    { name: "Sebrae", logo: "https://via.placeholder.com/180x60?text=Sebrae" },
    { name: "Corredores Digitais", logo: "https://via.placeholder.com/180x60?text=Corredores+Digitais" },
    { name: "Firebase", logo: "https://via.placeholder.com/180x60?text=Firebase" },
    { name: "SebrateLab", logo: "https://via.placeholder.com/180x60?text=SebrateLab" },
    { name: "PayPal", logo: "https://via.placeholder.com/180x60?text=PayPal" },
    { name: "Stripe", logo: "https://via.placeholder.com/180x60?text=Stripe" },
    { name: "Meta", logo: "https://via.placeholder.com/180x60?text=Meta" },
    { name: "Google", logo: "https://via.placeholder.com/180x60?text=Google" },
  ];

  return (
    <section id="partners" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div 
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
            Empresas Parceiras
          </span>
          <h2 className="mt-6 text-2xl md:text-3xl font-bold text-secondary">
            Confiam e impulsionam nossa tecnologia
          </h2>
        </div>

        <div className="w-full overflow-hidden">
          <div className="marquee relative">
            <div className="marquee-content">
              {partners.map((partner, index) => (
                <div 
                  key={index} 
                  className="inline-block mx-6 md:mx-10 opacity-60 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-10 md:h-12 w-auto grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </div>
            <div className="marquee-content">
              {partners.map((partner, index) => (
                <div 
                  key={index} 
                  className="inline-block mx-6 md:mx-10 opacity-60 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-10 md:h-12 w-auto grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div 
          id="integrations"
          className={`mt-20 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
            Integrações
          </span>
          <h2 className="mt-6 text-2xl md:text-3xl font-bold text-secondary">
            Integre com seus provedores de pagamento favoritos
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            {["Stripe", "PayPal", "Mercado Pago", "PagSeguro"].map((provider, index) => (
              <div 
                key={index}
                className="h-24 flex items-center justify-center bg-white rounded-lg shadow-sm p-4 animate-pulse"
              >
                <div className="w-full">
                  <div className="h-4 bg-gray-200 rounded mb-2 mx-auto w-2/3"></div>
                  <div className="h-8 bg-gray-300 rounded mx-auto w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="mt-8 text-gray-600">
            E muitos outros através de nossa API de webhook
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
