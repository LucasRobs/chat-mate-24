
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, SendHorizontal, Check, Bot } from "lucide-react";

const ChatDemo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (document.getElementById("chat-demo")) {
      observer.observe(document.getElementById("chat-demo")!);
    }

    return () => {
      if (document.getElementById("chat-demo")) {
        observer.unobserve(document.getElementById("chat-demo")!);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!showConfirmation) {
        setActiveTab((prev) => (prev === 2 ? 0 : prev + 1));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [showConfirmation]);
  
  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length >= 8) {
      setIsSubmitting(true);
      // Simulate API request
      setTimeout(() => {
        setIsSubmitting(false);
        setShowConfirmation(true);
        setCurrentStep(1);
      }, 1500);
    }
  };
  
  const formatPhoneNumber = (value) => {
    // Basic phone number formatting
    let formatted = value.replace(/\D/g, '');
    return formatted;
  };

  const chatExamples = [
    {
      title: "Atendimento Automático",
      messages: [
        { sender: "user", text: "Olá, gostaria de saber mais sobre o produto X" },
        { sender: "bot", text: "Olá! Tudo bem? Sou o assistente virtual da empresa. O produto X é nosso bestseller com ótimas avaliações. Ele possui as seguintes características:" },
        { sender: "bot", text: "✓ Característica 1\n✓ Característica 2\n✓ Característica 3" },
        { sender: "user", text: "Qual o preço?" },
        { sender: "bot", text: "O produto X custa R$ 199,90. Temos condições especiais para pagamento à vista e parcelamento em até 12x. Gostaria de ver imagens do produto?" },
      ],
    },
    {
      title: "Transferência para Humano",
      messages: [
        { sender: "user", text: "Preciso resolver um problema no meu pedido" },
        { sender: "bot", text: "Lamento pelo inconveniente. Poderia me informar o número do seu pedido para que eu possa ajudar?" },
        { sender: "user", text: "Pedido #12345" },
        { sender: "bot", text: "Obrigado. Estou verificando seu pedido #12345. Parece que temos uma situação específica. Vou transferir você para um de nossos atendentes." },
        { sender: "bot", text: "Amanda entrou no chat e continuará seu atendimento." },
        { sender: "human", text: "Olá, sou a Amanda! Estou verificando seu pedido e vou te ajudar a resolver isso agora mesmo." },
      ],
    },
    {
      title: "Follow-up Inteligente",
      messages: [
        { sender: "bot", text: "Olá João! Notei que você visitou nossa loja online mas não finalizou sua compra. Posso ajudar com alguma dúvida sobre os produtos no seu carrinho?" },
        { sender: "user", text: "Ah sim, eu estava na dúvida sobre o prazo de entrega" },
        { sender: "bot", text: "Entendi! Para sua região, o prazo de entrega é de 3 a 5 dias úteis após a confirmação do pagamento. Oferecemos também a opção de entrega expressa em 24h por um valor adicional." },
        { sender: "user", text: "Perfeito, obrigado!" },
        { sender: "bot", text: "Que bom! Vou enviar aqui um link direto para você finalizar sua compra com 5% de desconto exclusivo: [link]" },
        { sender: "user", text: "Compra finalizada! Muito obrigado pela ajuda." },
      ],
    },
  ];
  
  const interactiveChat = [
    { sender: "bot", text: "Olá! Sou o assistente virtual da followop. Gostaria de receber uma demonstração no seu WhatsApp?" },
    { sender: "user", text: "Sim, gostaria de ver como funciona" },
    { sender: "bot", text: "Ótimo! Para enviar a demonstração, precisamos do seu número de WhatsApp:" },
    { sender: "input", type: "phone" },
    { sender: "bot", text: `Perfeito! Acabamos de enviar uma mensagem para o número ${phoneNumber}. Por favor, verifique seu WhatsApp.` },
    { sender: "bot", text: "Você receberá exemplos práticos de como a followop pode automatizar seu atendimento. Fique à vontade para testar todas as funcionalidades!" },
  ];

  return (
    <section id="chat-demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
            Demonstração
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary leading-tight">
            Veja como funciona na prática
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Nossa IA é treinada para entender o contexto da conversa e fornecer respostas precisas e personalizadas.
          </p>
        </div>
        
        <div 
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        >
          <div className="max-w-2xl mx-auto">
            {/* Chat Tabs - show only if not in interactive mode */}
            {!showConfirmation && (
              <div className="flex mb-6 border-b border-gray-200">
                {chatExamples.map((example, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 font-medium text-sm ${
                      activeTab === index
                        ? "text-primary border-b-2 border-primary"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    {example.title}
                  </button>
                ))}
              </div>
            )}
            
            {/* Chat Window */}
            <div className="bg-gray-100 rounded-xl p-4 shadow-inner h-[500px] flex flex-col">
              <div className="bg-white rounded-t-lg p-3 border-b border-gray-200 flex items-center">
                <Bot size={20} className="text-primary mr-2" />
                <span className="font-medium">followop AI</span>
                <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Online</span>
              </div>
              
              <div className="flex-1 overflow-y-auto p-3 space-y-3">
                {!showConfirmation ? (
                  // Show regular examples
                  chatExamples[activeTab].messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        message.sender === "user" ? "justify-end" : "justify-start"
                      } animate-fade-in`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                          message.sender === "user"
                            ? "bg-primary text-white rounded-tr-none"
                            : message.sender === "human"
                            ? "bg-secondary text-white rounded-tl-none"
                            : "bg-white border border-gray-200 rounded-tl-none"
                        }`}
                      >
                        {message.text.split("\n").map((text, i) => (
                          <p key={i}>{text}</p>
                        ))}
                        <div className="text-right mt-1">
                          <span className={`text-[10px] ${
                            message.sender === "user" || message.sender === "human"
                              ? "text-white/70"
                              : "text-gray-400"
                          }`}>
                            {index === chatExamples[activeTab].messages.length - 1 ? 'Agora' : `${Math.floor(Math.random() * 10) + 1}m atrás`}
                          </span>
                          {(message.sender !== "user" && index === chatExamples[activeTab].messages.length - 1) && (
                            <Check size={12} className="inline ml-1 text-blue-400" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  // Show interactive chat
                  interactiveChat.slice(0, currentStep + 1).map((message, index) => {
                    if (message.sender === 'input') {
                      return (
                        <form key={index} className="w-full" onSubmit={handlePhoneSubmit}>
                          <div className="flex gap-2">
                            <input
                              ref={inputRef}
                              type="tel"
                              placeholder="Ex: (11) 9xxxx-xxxx"
                              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(formatPhoneNumber(e.target.value))}
                              disabled={isSubmitting}
                            />
                            <Button 
                              type="submit" 
                              className="bg-primary text-white" 
                              disabled={isSubmitting || phoneNumber.length < 8}
                            >
                              {isSubmitting ? "Enviando..." : "Enviar"}
                            </Button>
                          </div>
                        </form>
                      );
                    }
                    
                    return (
                      <div
                        key={index}
                        className={`flex ${
                          message.sender === "user" ? "justify-end" : "justify-start"
                        } animate-fade-in`}
                        style={{ animationDelay: `${index * 0.3}s` }}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                            message.sender === "user"
                              ? "bg-primary text-white rounded-tr-none"
                              : "bg-white border border-gray-200 rounded-tl-none"
                          }`}
                        >
                          {message.text.split("\n").map((text, i) => (
                            <p key={i}>{text}</p>
                          ))}
                          <div className="text-right mt-1">
                            <span className={`text-[10px] ${
                              message.sender === "user" ? "text-white/70" : "text-gray-400"
                            }`}>
                              {index === currentStep ? 'Agora' : `${Math.floor((currentStep - index) * 0.5) + 1}m atrás`}
                            </span>
                            {message.sender !== "user" && (
                              <Check size={12} className="inline ml-1 text-blue-400" />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}

                {showConfirmation && currentStep < interactiveChat.length - 1 && (
                  <div className="flex justify-start">
                    <div className="flex gap-1">
                      <span className="bg-gray-100 w-2 h-2 rounded-full animate-bounce"></span>
                      <span className="bg-gray-200 w-2 h-2 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                      <span className="bg-gray-300 w-2 h-2 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="bg-white rounded-b-lg p-3 border-t border-gray-200 flex">
                <input
                  type="text"
                  placeholder="Digite sua mensagem..."
                  className="flex-1 bg-gray-100 rounded-l-full px-4 py-2 focus:outline-none"
                  disabled
                />
                <button className="bg-primary text-white rounded-r-full px-4 py-2">
                  <SendHorizontal size={18} />
                </button>
              </div>
            </div>
            
            {!showConfirmation && (
              <div className="mt-8 flex justify-center">
                <Button 
                  className="bg-primary hover:bg-primary/90 btn-hover flex items-center gap-2"
                  onClick={() => {
                    setShowConfirmation(true);
                    setCurrentStep(0);
                    
                    // Auto-advance the interactive demo
                    const advanceDemo = () => {
                      setCurrentStep(prev => {
                        // Stop at the input step
                        if (prev === 2) return prev;
                        return prev + 1;
                      });
                    };
                    
                    const intervals = [1000, 2000, 2000];
                    intervals.forEach((delay, i) => {
                      setTimeout(advanceDemo, delay);
                    });
                  }}
                >
                  Testar no meu WhatsApp <ArrowRight size={16} />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;
