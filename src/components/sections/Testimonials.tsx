
import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Dr. Daniel Aguiar",
    role: "Cardiologista",
    image: "/lovable-uploads/983bcc88-4e6a-416d-8abb-315429e7ce28.png",
    content: "Clareza, agilidade e precisão, 24 horas por dia, sete dias por semana. A IA conversa com vários pacientes ao mesmo tempo — algo que, humanamente, seria impossível. O tempo de resposta caiu, a perda de leads praticamente desapareceu e, o mais surpreendente: ela vende. E vende bem, de forma natural, sem soar robótica. Enquanto isso, minha secretária pode se dedicar ao que realmente importa: oferecer atenção e suporte de qualidade aos pacientes que já confiam no nosso trabalho. A IA não veio para substituir — veio para potencializar o atendimento. Se você é médico e ainda não está utilizando uma tecnologia como essa, é sinal de que está na hora de evoluir.",
    rating: 5
  },
  {
    id: 2,
    name: "Sofia Mendes",
    role: "Clínica Estética",
    image: "/lovable-uploads/43874e99-23e9-4038-8a31-e3d17f0a7390.png",
    content: "A followop revolucionou nosso atendimento. Nossa clínica agora consegue qualificar e converter leads 24 horas por dia, mesmo quando a equipe não está disponível. O retorno sobre o investimento foi imediato, e a experiência dos clientes melhorou significativamente com respostas instantâneas e personalizadas. Recomendo para qualquer negócio que valorize eficiência e excelência no atendimento ao cliente.",
    rating: 5
  }
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background pattern with followop logo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 followop-pattern opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-primary/5 to-transparent"></div>
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div 
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
            Depoimentos
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-secondary">
            Profissionais que transformaram seu atendimento
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Clientes que confiam na followop para impulsionar seus negócios
          </p>
        </div>

        <div 
          className={`relative transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-full lg:basis-full">
                  <div className="testimonial-card p-6 md:p-10 relative overflow-hidden backdrop-blur-sm bg-white/80 hover:bg-white/90 transition-all duration-300">
                    {/* Quote Icon Background */}
                    <div className="absolute -top-10 -left-10 opacity-5">
                      <Quote size={120} className="text-primary" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                      {/* Customer Image */}
                      <div className="md:col-span-1 flex justify-center">
                        <div className="relative animate-fade-in">
                          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <img 
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-2 shadow-md">
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
                        
                        <p className="text-gray-700 text-lg leading-relaxed">
                          "{testimonial.content}"
                        </p>
                        
                        <div className="mt-6">
                          <h4 className="font-bold text-xl text-secondary">{testimonial.name}</h4>
                          <p className="text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static transform-none mx-1 bg-white hover:bg-primary hover:text-white transition-colors duration-300" />
              <CarouselNext className="static transform-none mx-1 bg-white hover:bg-primary hover:text-white transition-colors duration-300" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
