
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Clara Lisle",
    role: "Terapeuta e Criadora do Método AZ30",
    image: "/lovable-uploads/d0b3b40d-b7c8-49cd-a80d-68f0fe56e7d5.png",
    content:
      "Encontrar a followop foi a melhor coisa para meu negócio! Respostas rápidas e atendimento humanizado transformaram minha comunicação com clientes.",
    rating: 5,
  },
  {
    id: 2,
    name: "Dr. Daniel Aguiar",
    role: "Cardiologista",
    image: "/lovable-uploads/danieldoto.png",
    content:
      "A IA da Followop transformou minha rotina médica. Atendimento em tempo real, reduzindo perda de leads e aumentando conversão significativamente.",
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
    <section id="testimonials" className="py-16 sm:py-20 bg-gray-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative">
        <div
          className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
            Depoimentos
          </span>
          <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-secondary">
            O que nossos clientes dizem
          </h2>
          <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Empresas que transformaram seu atendimento com a followop
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100,
                }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100",
                  activeIndex !== index && "hidden"
                )}
              >
                <div className="flex mb-4 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-4 h-4 sm:w-5 sm:h-5",
                        i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                      )}
                    />
                  ))}
                </div>
                
                <p className="text-sm sm:text-base md:text-lg text-gray-700 italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="mt-6 sm:mt-8 flex items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-4 border-primary/10">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h4 className="font-bold text-base sm:text-lg text-secondary">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="flex justify-center mt-6 sm:mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-1.5 sm:p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors transform hover:scale-105"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </button>
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors",
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
                className="p-1.5 sm:p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors transform hover:scale-105"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
