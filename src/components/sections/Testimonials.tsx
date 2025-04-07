import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Clara Lisle",
    role: "Terapeuta e Criadora do Método AZ30",
    image: "/lovable-uploads/d0b3b40d-b7c8-49cd-a80d-68f0fe56e7d5.png",
    content: "Encontrar a followop foi a melhor coisa que me aconteceu! [...]",
    rating: 5,
  },
  {
    id: 2,
    name: "Dr. Daniel Aguiar",
    role: "Cardiologista",
    image: "/daniel.png",
    content: `Clareza, agilidade e precisão, 24 horas por dia [...]`,
    rating: 5,
  },
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const el = document.getElementById("testimonials");
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 followop-pattern opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}>
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
            Depoimentos
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-secondary">
            Empresas que transformaram seu atendimento
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Clientes que confiam na followop para impulsionar seu negócios.
          </p>
        </div>

        <div className={`relative transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`} style={{ transitionDelay: "200ms" }}>
          <div className="absolute -top-10 -left-10 opacity-5">
            <Quote size={120} className="text-primary" />
          </div>

          <div className="relative h-[440px] md:h-[360px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[current].id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="absolute w-full"
              >
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                    <div className="md:col-span-1 flex justify-center">
                      <div className="relative">
                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20">
                          <img
                            src={testimonials[current].image}
                            alt={testimonials[current].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-2">
                          <Quote size={20} />
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonials[current].rating)].map((_, i) => (
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

                      <p className="text-gray-700 text-lg italic leading-relaxed whitespace-pre-line">
                        "{testimonials[current].content}"
                      </p>

                      <div className="mt-6">
                        <h4 className="font-bold text-xl text-secondary">{testimonials[current].name}</h4>
                        <p className="text-gray-600">{testimonials[current].role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
