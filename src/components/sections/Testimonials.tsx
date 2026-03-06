
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
  {
    id: 3,
    name: "Emergency Talks",
    role: "Educação Médica em Emergência",
    image: "/lovable-uploads/emergency_talks_logo.png",
    content:
      "A Followop nos permitiu ampliar o alcance e o engajamento em nossos programas de educação médica em emergência, facilitando a interação com profissionais da saúde.",
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
    <section id="testimonials" className="bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative">
        <div
          className={`text-center mb-12 sm:mb-16 blur-reveal`}
          style={{ transitionDelay: "100ms" }}
        >
          {/* Decorative smoke effect behind the title */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/20 blur-[50px] rounded-full pointer-events-none"></div>

          <span className="relative bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium tracking-wide animate-pulse">
            Depoimentos
          </span>
          <h2 className="relative mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
            O que <span className="text-[#16B763]">nossos clientes</span> dizem
          </h2>
          <p className="relative mt-4 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Empresas que transformaram seu atendimento com a followop.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 100, filter: "blur(10px)" }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100,
                  filter: activeIndex === index ? "blur(0px)" : "blur(10px)"
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={cn(
                  "bg-white/70 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-500 border border-gray-100",
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
                className="p-1.5 sm:p-2 rounded-full bg-white border border-gray-100 shadow-sm hover:bg-gray-50 transition-colors transform hover:scale-105"
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
                className="p-1.5 sm:p-2 rounded-full bg-white border border-gray-100 shadow-sm hover:bg-gray-50 transition-colors transform hover:scale-105"
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
