
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Caroline Silva",
    role: "Empresária",
    image: "/lovable-uploads/b2eab6da-a7a1-484a-aa28-151437e291fc.png",
    content: "Encontrar a FollowOP foi a melhor coisa que me aconteceu! Um dos maiores problemas que eu tinha na minha empresa era no WhatsApp, contratava pessoas, Call Center e apesar de passar o roteiro para a equipe e treiná-los, sempre saía bem diferente do treinamento, eles demoravam muito nas respostas e isso me trouxe muitas perdas financeiras e de clientes. Quando comecei com a follow-up isso acabou! Respostas super rápidas, o robô seguindo totalmente o treinamento e foi a primeira IA que eu vi no mercado que humaniza tanto as respostas de acordo com o banco que ela tem, outras que já testei eram extremamente robóticas e absurdas de caras. Fora que eles são sempre MUITO abertos a dar suporte e estão sempre atualizando a plataforma para melhor, o que para mim enquanto empresária é mais que essencial! Indico de olhos fechados❤",
    rating: 5
  }
];

const Testimonials = () => {
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

    if (document.getElementById("testimonials")) {
      observer.observe(document.getElementById("testimonials")!);
    }

    return () => {
      if (document.getElementById("testimonials")) {
        observer.unobserve(document.getElementById("testimonials")!);
      }
    };
  }, []);

  const testimonial = testimonials[0];

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background pattern with more spread out dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-repeat opacity-5" style={{ 
          backgroundImage: "url('/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png')", 
          backgroundSize: "80px"
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div 
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
            Resultados Reais
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-secondary">
            Clientes Apaixonados pela FollowOP
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Veja o que nossos clientes estão dizendo sobre como a FollowOP transformou seus negócios.
          </p>
        </div>

        <div 
          className={`relative transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {/* Quote Icon Background */}
          <div className="absolute -top-10 -left-10 opacity-5">
            <Quote size={120} className="text-primary" />
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 relative overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
              {/* Customer Image */}
              <div className="md:col-span-1 flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-2">
                    <Quote size={20} />
                  </div>
                </div>
              </div>
              
              {/* Testimonial Content */}
              <div className="md:col-span-2">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className="w-5 h-5 text-yellow-500" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-700 text-lg italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="mt-6">
                  <h4 className="font-bold text-xl text-secondary">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
