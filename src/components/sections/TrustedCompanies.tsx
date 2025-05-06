
import { useEffect, useState } from "react";

const TrustedCompanies = () => {
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

    if (document.getElementById("trusted-companies")) {
      observer.observe(document.getElementById("trusted-companies")!);
    }

    return () => {
      if (document.getElementById("trusted-companies")) {
        observer.unobserve(document.getElementById("trusted-companies")!);
      }
    };
  }, []);

  const trustedCompanies = [
    { 
      name: "Emergency Talks", 
      logo: "/lovable-uploads/e48ef412-b1e7-4c54-9104-d48ddcb141f8.png" 
    },
    { 
      name: "Simplo", 
      logo: "/lovable-uploads/c18c4f4d-8b72-46fc-a666-04ffae274fad.png" 
    },
    // Add more companies as needed
  ];

  return (
    <section id="trusted-companies" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div 
          className={`text-center mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <h2 className="text-2xl font-bold text-secondary">
            Empresas que Confiam na Followop
          </h2>
          <p className="mt-2 text-gray-500">
            Algumas das empresas que já utilizam nossa solução
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-16">
          {trustedCompanies.map((company, index) => (
            <div 
              key={index} 
              className={`flex-shrink-0 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
