import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    id: 1,
    name: "Clara Lisle",
    role: "Terapeuta e Criadora do Método AZ30",
    image: "/lovable-uploads/d0b3b40d-b7c8-49cd-a80d-68f0fe56e7d5.png",
    content:
      "Encontrar a followop foi a melhor coisa que me aconteceu! Um dos maiores problemas que eu tinha na minha empresa era no WhatsApp, contratava pessoas, Call Center e apesar de passar o roteiro para a equipe e treiná-los, sempre saía bem diferente do treinamento, eles demoravam muito nas respostas e isso me trouxe muitas perdas financeiras e de clientes. Quando comecei com a followop isso acabou! Respostas super rápidas, o robô seguindo totalmente o treinamento e foi a primeira IA que eu vi no mercado que humaniza tanto as respostas de acordo com o banco que ela tem, outras que já testei eram extremamente robóticas e absurdas de caras. Fora que eles são sempre MUITO abertos a dar suporte e estão sempre atualizando a plataforma para melhor, o que para mim enquanto empresária é mais que essencial! Indico de olhos fechados❤",
    rating: 5,
  },
  {
    id: 2,
    name: "Dr. Daniel Aguiar",
    role: "Cardiologista",
    image: "/lovable-uploads/testimonial-daniel.png",
    content:
      "Clareza, agilidade e precisão, 24 horas por dia, sete dias por semana. A IA conversa com vários pacientes ao mesmo tempo — algo que, humanamente, seria impossível. O tempo de resposta caiu, a perda de leads praticamente desapareceu e, o mais surpreendente: ela vende. E vende bem, de forma natural, sem soar robótica.\n\nEnquanto isso, minha secretária pode se dedicar ao que realmente importa: oferecer atenção e suporte de qualidade aos pacientes que já confiam no nosso trabalho. A IA não veio para substituir — veio para potencializar o atendimento.\n\nSe você é médico e ainda não está utilizando uma tecnologia como essa, é sinal de que está na hora de evoluir.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 10000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

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

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 followop-pattern opacity-5"></div>
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
            Empresas que transformaram seu atendimento
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Clientes que confiam na followop para impulsionar seus negócios.
          </p>
        </div>

        <Carousel
          opts={{ loop: true, align: "center", slidesToScroll: 1 }}
          plugins={[autoplayPlugin.current]}
          className="w-full"
        >
          <CarouselContent className="flex">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="flex-shrink-0 px-4 md:px-8 w-full md:w-1/2 lg:w-1/2"
              >
                <Card className="bg-white rounded-2xl shadow-xl p-6 md:p-10 relative border border-gray-100 h-full transition-transform duration-300 hover:scale-[1.01]">
                  <CardContent className="h-full flex flex-col justify-between gap-6">
                    <div className="absolute -top-4 -left-4 bg-primary text-white rounded-full p-3 z-10 shadow-md">
                      <Quote size={32} />
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-primary/20 mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
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
                      <p className="text-gray-700 text-md italic leading-relaxed max-w-xl">
                        "{testimonial.content}"
                      </p>
                    </div>

                    <div className="text-center mt-6">
                      <h4 className="font-bold text-xl text-secondary">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
