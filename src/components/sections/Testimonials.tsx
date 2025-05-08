
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Clara Lisle",
    role: "Terapeuta e Criadora do Método AZ30",
    image: "/lovable-uploads/d0b3b40d-b7c8-49cd-a80d-68f0fe56e7d5.png",
    content:
      "Encontrar a followop foi a melhor coisa que me aconteceu! Tinha problemas com atendimento no WhatsApp, mesmo com treinamento a equipe não entregava. Com a followop, tudo mudou: respostas rápidas e atendimento humanizado.",
    rating: 5,
  },
  {
    id: 2,
    name: "Dr. Daniel Aguiar",
    role: "Cardiologista",
    image: "/lovable-uploads/danieldoto.png",
    content:
      "A IA da Followop transformou minha rotina médica. Atende em tempo real, 24h por dia, reduzindo a perda de leads e aumentando a conversão. Minha secretária agora foca no que importa: cuidar dos pacientes já fidelizados.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const target = document.getElementById("testimonials");
    if (target) observer.observe(target);
    return () => target && observer.unobserve(target);
  }, []);

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 followop-pattern opacity-5"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
            Depoimentos
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-secondary">
            Empresas que transformaram seu atendimento
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Clientes que confiam na followop para impulsionar seus negócios
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "transition-all duration-500 transform",
                  activeIndex === index
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-100 absolute inset-0"
                )}
              >
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-5 h-5",
                          i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                        )}
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 text-base md:text-lg italic leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="mt-8 flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-primary/10">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-lg md:text-xl text-secondary">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors transform hover:scale-105"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-colors",
                      activeIndex === index
                        ? "bg-primary"
                        : "bg-gray-300 hover:bg-gray-400"
                    )}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors transform hover:scale-105"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
