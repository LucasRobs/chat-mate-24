
import { useState, useEffect } from "react";
import { MessageCircle, Check, Send, ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeConversation, setActiveConversation] = useState("vendas");
  const [userMessage, setUserMessage] = useState("");
  const [showPhoneDialog, setShowPhoneDialog] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const isMobile = useIsMobile();
  const { toast } = useToast();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("how-it-works");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      setShowPhoneDialog(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSubmitPhone = (e) => {
    e.preventDefault();
    console.log("Phone number submitted:", phoneNumber);
    setShowPhoneDialog(false);
    setUserMessage("");
    
    toast({
      title: "Obrigado!",
      description: "Entraremos em contato em breve.",
      variant: "default",
    });
  };

  const closeModal = () => {
    setShowPhoneDialog(false);
  };

  const conversationOptions = [
    {
      id: "vendas",
      title: "Atendimento de Vendas",
      icon: <MessageCircle size={20} className="text-white" />,
      bgColor: "bg-primary",
      messages: 6,
      conversation: [
        { 
          sender: "user", 
          text: "Oi, queria saber sobre o plano Growth!" 
        },
        { 
          sender: "bot", 
          text: "Olá! Claro! O plano Growth é perfeito para empresas em expansão. Por R$590/mês, você recebe 3 funcionários de IA, 1.500 atendimentos e 20.000 mensagens mensais." 
        },
        { 
          sender: "user", 
          text: "E quantos atendimentos simultâneos posso ter?" 
        },
        { 
          sender: "bot", 
          text: "Com o plano Growth, você pode ter até 50 atendimentos simultâneos! Seus clientes nunca ficarão esperando." 
        },
        { 
          sender: "user", 
          text: "Perfeito! Como faço para testar?" 
        },
      ]
    },
    {
      id: "suporte",
      title: "Suporte Técnico",
      icon: <MessageCircle size={20} className="text-primary" />,
      bgColor: "bg-primary/10",
      messages: 6,
      conversation: [
        { 
          sender: "user", 
          text: "Estou com problemas para configurar a integração" 
        },
        { 
          sender: "bot", 
          text: "Olá! Lamento pelo inconveniente. Vamos resolver isso juntos. Você já seguiu os passos do nosso guia de configuração?" 
        },
        { 
          sender: "user", 
          text: "Sim, mas quando tento conectar com meu WhatsApp Business aparece um erro" 
        },
        { 
          sender: "bot", 
          text: "Entendi. Pode me informar qual mensagem de erro aparece? Isso vai me ajudar a identificar o problema específico." 
        },
        { 
          sender: "user", 
          text: "Erro de autenticação #W1234" 
        },
      ]
    },
    {
      id: "duvidas",
      title: "Esclarecimento de Dúvidas",
      icon: <MessageCircle size={20} className="text-primary" />,
      bgColor: "bg-primary/10",
      messages: 6,
      conversation: [
        { 
          sender: "user", 
          text: "A IA consegue entender linguagem informal?" 
        },
        { 
          sender: "bot", 
          text: "Com certeza! Nossa IA é treinada para entender gírias, abreviações e o jeito que as pessoas realmente falam no dia a dia. Ela se adapta ao estilo de comunicação dos seus clientes." 
        },
        { 
          sender: "user", 
          text: "E se ela não souber responder algo?" 
        },
        { 
          sender: "bot", 
          text: "Quando nossa IA encontra uma pergunta que não consegue responder com segurança, ela pode transferir a conversa para um atendente humano ou coletar informações para que você possa responder mais tarde." 
        },
        { 
          sender: "user", 
          text: "Entendi, isso é muito útil!" 
        },
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-5 followop-pattern"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className={`text-center mb-12 ${isVisible ? 'reveal active' : 'reveal'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            Como a FollowOP funciona
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Veja exemplos reais de nossa IA em conversas no WhatsApp
          </p>
        </div>
        
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${isVisible ? 'reveal active' : 'reveal'}`}>
          <div className={`${isMobile ? 'order-2' : 'order-1'} bg-white rounded-xl shadow-md overflow-hidden`}>
            <div className="p-4 border-b border-gray-100">
              <h3 className="font-medium text-secondary">Exemplos de conversas</h3>
            </div>
            <div className="divide-y divide-gray-100">
              {conversationOptions.map((option) => (
                <button
                  key={option.id}
                  className={cn(
                    "w-full text-left p-4 hover:bg-gray-50 transition-colors flex items-center gap-3",
                    activeConversation === option.id && "bg-gray-50"
                  )}
                  onClick={() => setActiveConversation(option.id)}
                >
                  <div className={`w-10 h-10 rounded-full ${option.bgColor} flex items-center justify-center flex-shrink-0`}>
                    {option.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{option.title}</h4>
                    <p className="text-sm text-gray-500">{option.messages} mensagens</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className={`${isMobile ? 'order-1' : 'order-2'} lg:col-span-2`}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-primary p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/20">
                  <img 
                    src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png"
                    alt="FollowOP Logo" 
                    className="w-6 h-6"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-white">FollowOP Assistant</p>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                    <p className="text-xs text-white/70">Online 24/7</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-white/20 rounded-full text-xs text-white">
                  Demo
                </div>
              </div>
              
              <div className="bg-[#f0f2f5] p-4 h-96 overflow-y-auto flex flex-col gap-4">
                {conversationOptions.find(c => c.id === activeConversation)?.conversation.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={cn(
                        "max-w-[80%] rounded-lg px-4 py-2",
                        message.sender === "user" 
                          ? "bg-primary text-white rounded-tr-none" 
                          : "bg-white rounded-tl-none"
                      )}
                    >
                      <p>{message.text}</p>
                      <div className="text-right mt-1">
                        <span className={`text-[10px] ${message.sender === "user" ? "text-white/70" : "text-gray-500"}`}>
                          {index === 0 ? "Agora" : `${(conversationOptions.find(c => c.id === activeConversation)?.conversation.length || 0) - index}m atrás`}
                        </span>
                        {message.sender === "bot" && (
                          <Check size={12} className="inline ml-1 text-green-500" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-3 border-t border-gray-200 flex gap-2">
                <Textarea
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none min-h-0 h-10 resize-none"
                />
                <button 
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center"
                  onClick={handleSendMessage}
                >
                  <Send size={18} className="text-white" />
                </button>
              </div>
              
              <div className="py-2 px-4 bg-gray-50 border-t border-gray-100">
                <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-1">
                  <Check size={12} className="text-gray-400" />
                  Mensagens criptografadas de ponta a ponta
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom Modal Dialog */}
      {showPhoneDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/80" onClick={closeModal}></div>
          
          <div className="bg-white relative z-50 rounded-lg p-6 w-full max-w-md mx-4">
            <button 
              onClick={closeModal} 
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
            >
              <X size={20} />
            </button>
            
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-bold text-center text-secondary mb-4">
                Experimente agora mesmo!
              </h2>
              
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              
              <div className="text-center space-y-2 mb-6">
                <div className="text-base text-gray-700">
                  Deixe seu WhatsApp para testar a FollowOP <span className="font-bold text-secondary">gratuitamente por 7 dias</span>!
                </div>
                <div className="text-sm text-gray-500">
                  Nossa IA vai entrar em contato para demonstrar o poder da automatização.
                </div>
              </div>
              
              <form onSubmit={handleSubmitPhone} className="w-full">
                <div className="relative mb-4">
                  <Input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent pl-14"
                    placeholder="(00) 00000-0000"
                    required
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center">
                    <span className="text-gray-500 flex items-center gap-1">
                      <img 
                        src="/lovable-uploads/cf2bafae-8be6-4f2a-aca4-aea026d30b6e.png" 
                        alt="BR flag" 
                        className="w-6 h-4 object-cover rounded"
                      />
                      +55
                    </span>
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Quero testar agora <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <div className="mt-4 text-center text-xs text-gray-500">
                  Ao continuar, você concorda com nossos Termos de Serviço e Política de Privacidade.
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HowItWorks;
