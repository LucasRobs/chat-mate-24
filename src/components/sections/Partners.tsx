
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
                  className="inline-block mx-6 md:mx-10 opacity-70 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-12 md:h-16 w-auto grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </div>
            <div className="marquee-content">
              {partners.map((partner, index) => (
                <div 
                  key={index} 
                  className="inline-block mx-6 md:mx-10 opacity-70 hover:opacity-100 transition-opacity"
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

        {/* Testimonial Section */}
        <div 
          className={`mt-24 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="text-center mb-12">
            <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
              Depoimentos
            </span>
            <h2 className="mt-6 text-2xl md:text-3xl font-bold text-secondary">
              O que nossos clientes dizem
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <img
                  src="/lovable-uploads/b2eab6da-a7a1-484a-aa28-151437e291fc.png"
                  alt="Cliente FollowOP"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-secondary">Caroline Silva</h4>
                  <p className="text-gray-600 text-sm">Empresária</p>
                </div>
              </div>
              
              <div className="relative">
                <svg className="absolute -top-6 -left-6 w-12 h-12 text-primary/20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 leading-relaxed italic">
                  "Encontrar a FollowOP foi a melhor coisa que me aconteceu! Um dos maiores problemas que eu tinha na minha empresa era no WhatsApp, contratava pessoas, Call Center e apesar de passar o roteiro para a equipe e treiná-los, sempre saía bem diferente do treinamento, eles demoravam muito nas respostas e isso me trouxe muitas perdas financeiras e de clientes. Quando comecei com a follow-up isso acabou! Respostas super rápidas, o robô seguindo totalmente o treinamento e foi a primeira IA que eu vi no mercado que humaniza tanto as respostas de acordo com o banco que ela tem, outras que já testei eram extremamente robóticas e absurdas de caras. Fora que eles são sempre MUITO abertos a dar suporte e estão sempre atualizando a plataforma para melhor, o que para mim enquanto empresária é mais que essencial! Indico de olhos fechados❤"
                </p>
              </div>
              
              <div className="flex mt-6">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/b2eab6da-a7a1-484a-aa28-151437e291fc.png"
                alt="Cliente FollowOP"
                className="rounded-xl shadow-xl max-w-md w-full transform rotate-3 animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
