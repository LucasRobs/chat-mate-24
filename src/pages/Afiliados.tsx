import { MessageSquare, Users, Zap, ShieldCheck, Headphones, Code, User, Repeat, TrendingUp, Eye, UserPlus, Share2, Wallet, MessageCircle, Briefcase, ChevronDown, ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { toast } from "sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";

const Afiliados = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_display: '',
    phone: '',
    ddi: '+55'
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone_display: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    document.title = "Programa de Afiliados | Followop";
    window.scrollTo(0, 0);
  }, []);

  const onlyDigits = (s: string) => (s || "").replace(/\D+/g, "");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const formatPhoneNumber = (value: string) => {
    const digits = onlyDigits(value);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone_display') {
      const formatted = formatPhoneNumber(value);
      setFormData(prev => ({
        ...prev,
        [name]: formatted,
        phone: onlyDigits(formatted)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error for this field
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone_display: ''
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, insira seu nome';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, insira seu e-mail';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'E-mail inválido';
      isValid = false;
    }

    const phoneDigits = onlyDigits(formData.phone_display);
    if (!phoneDigits) {
      newErrors.phone_display = 'Por favor, insira seu telefone';
      isValid = false;
    } else if (phoneDigits.length < 10) {
      newErrors.phone_display = 'Telefone inválido';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm() || isSubmitting) return;
    
    setIsSubmitting(true);

    try {
      const rawQuery = window.location.search ? window.location.search.slice(1) : "";
      const redirectUrl = "?";
      
      const extraParams = `&name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&phone=${encodeURIComponent(formData.phone)}&phonenumber=${encodeURIComponent(formData.phone)}`;
      const finalRedirectUrl = redirectUrl + extraParams + (rawQuery ? (redirectUrl.includes("?") ? "&" : "?") + rawQuery : "");

      const payload = {
        event: "approved",
        flowId: "",
        formId: "form_1774884027994",
        redirect_url: finalRedirectUrl,
        raw_query_string: rawQuery,
        phone: formData.phone,
        name: formData.name,
        email: formData.email,
        popup_opening_text: "Oi, {name}!\nRecebemos seu cadastro no Programa de Afiliados da Followop ✅\n\nEm até 1 dia útil você vai receber, no seu WhatsApp informado, seu link de afiliado e materiais de divulgação.\n\nEnquanto isso, qualquer dúvida é só responder por aqui ou chamar a gente no suporte.\n\nObrigado por confiar na Followop e querer crescer com a gente! 🚀",
        popup_opening_time: "3"
      };

      const response = await fetch("https://n8n.comea.com.br/webhook/webhook_kige8sdp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const text = await response.text();
      console.log("✅ Resposta do servidor:", text);
      
      // Show success toast
      toast.success("Cadastro enviado com sucesso! Em até 1 dia útil você receberá seu link de afiliado.", {
        duration: 5000,
        position: "top-right"
      });
      
      // Delay redirect to show toast
      setTimeout(() => {
        window.location.href = finalRedirectUrl;
      }, 2000);
    } catch (err) {
      console.error("❌ Erro ao enviar:", err);
      
      // Show error toast
      toast.error("Ocorreu um erro ao enviar seu cadastro. Tente novamente.", {
        duration: 5000,
        position: "top-right"
      });
      
      // Still redirect on error as per original logic after showing toast
      setTimeout(() => {
        window.location.href = "?";
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const textBlurVariants: Variants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="afiliados-page bg-white min-h-screen text-gray-900 font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#F0FBF4] to-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center gap-12 lg:gap-16">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="flex flex-col items-center text-center max-w-5xl"
              >
                <motion.div variants={textBlurVariants} className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-primary bg-primary/10 ring-1 ring-inset ring-primary/20 mb-6">
                  <Users className="w-4 h-4 mr-2" /> Programa de Afiliados Followop
                </motion.div>
                
                <motion.h1 variants={textBlurVariants} className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-6 leading-[1.05]">
                  Entre para o Clube de <br />
                  <span className="text-[#16B763]">Afiliados Followop</span>
                </motion.h1>
                
                <motion.h2 variants={textBlurVariants} className="text-2xl lg:text-3xl font-medium text-gray-600 mb-8 max-w-3xl">
                  Indique uma solução que resolve de verdade e receba <span className="text-[#16B763] font-bold">comissão recorrente</span> todos os meses.
                </motion.h2>
                
                <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mb-10 max-w-4xl">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm transition-all hover:shadow-md">
                    <div className="w-12 h-12 bg-[#16B763]/10 rounded-xl flex items-center justify-center shrink-0">
                      <Zap className="w-6 h-6 text-[#16B763]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">15% de Comissão Recorrente</h3>
                      <p className="text-sm text-gray-500">Você recebe em cada mensalidade paga dos clientes indicados.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm transition-all hover:shadow-md">
                    <div className="w-12 h-12 bg-[#16B763]/10 rounded-xl flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-6 h-6 text-[#16B763]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Suporte VIP para vender mais</h3>
                      <p className="text-sm text-gray-500">Material pronto, acompanhamento e apoio estratégico do nosso time.</p>
                    </div>
                  </div>
                </motion.div>

              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.3 }}
                className="relative max-w-2xl mx-auto w-full"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-[#A2DE5D]/30 to-[#16B763]/30 rounded-[2.5rem] blur-2xl opacity-40"></div>
                <div className="relative bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
                  <div className="aspect-square w-full rounded-3xl border border-dashed border-gray-300 bg-gray-50/70 flex items-center justify-center mb-8">
                    <div className="flex flex-col items-center justify-center text-center px-6">
                      <MessageCircle className="w-12 h-12 text-[#16B763]" />
                    </div>
                  </div>

                  <Button asChild variant="apple" className="group w-full h-14 flex items-center justify-center gap-3 text-lg shadow-xl shadow-[#A2DE5D]/20">
                    <a href="#cadastro">
                      Quero fazer parte
                      <span className="bg-[#33334F] text-white p-1 rounded-full flex items-center justify-center w-6 h-6 ml-1 transition-transform group-hover:translate-x-1.5">
                        <ArrowRight size={14} />
                      </span>
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefícios com entrada sequencial */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">O que você ganha como afiliado</h2>
              <p className="text-gray-500 text-xl font-light">Estrutura completa para indicar com confiança e transformar indicações em receita recorrente.</p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { icon: Repeat, title: "Comissão Recorrente", desc: "Cada cliente ativo indicado por você gera comissão mensal. Escale sua renda sem teto de indicações." },
                { icon: TrendingUp, title: "Métricas em Tempo Real", desc: "Acompanhe cliques, cadastros e faturamento em um painel simples para otimizar sua divulgação." },
                { icon: Users, title: "Materiais Prontos para Conversão", desc: "Use roteiros, mensagens e criativos validados para acelerar resultados desde os primeiros contatos." },
                { icon: Eye, title: "Atribuição Inteligente", desc: "Cookie de 60 dias: se a venda acontecer depois, a comissão continua sendo sua." },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-gray-50/50 border border-gray-100 rounded-[2rem] p-10 transition-all hover:bg-white hover:shadow-2xl hover:border-primary/20 group"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform group-hover:shadow-[#16B763]/20 border border-gray-100">
                    <item.icon className="text-[#16B763] w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Como Funciona com Efeito de Escada */}
        <section className="py-32 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-24 tracking-tight"
            >
              Simples como deve ser.
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-20 relative">
              <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              
              {[
                { icon: UserPlus, title: "1. Faça seu cadastro", desc: "Cadastre-se em menos de 1 minuto e gere seu link exclusivo de indicação." },
                { icon: Share2, title: "2. Compartilhe seu link", desc: "Divulgue nas suas redes, grupos e conversas com clientes de forma simples e natural." },
                { icon: Wallet, title: "3. Receba suas comissões", desc: "A cada cliente ativo indicado, você recebe via PIX direto na sua conta no dia 10." },
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 bg-white border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.05)] rounded-3xl flex items-center justify-center mb-8 z-10 group-hover:rotate-6 transition-transform group-hover:border-primary">
                    <step.icon className="text-[#16B763] w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-500 text-lg max-w-xs font-light leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ com entrada suave */}
        <section className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Perguntas frequentes</h2>
              <p className="text-gray-500 text-lg font-light">Sem letrinhas miúdas: veja como funciona sua parceria com a Followop.</p>
            </motion.div>
            
            <div className="space-y-6">
              {[
                { q: "Quanto eu ganho por indicação?", a: "Você recebe 15% fixos sobre o valor líquido da mensalidade, enquanto o cliente indicado permanecer ativo." },
                { q: "Quando e como recebo minhas comissões?", a: "O fechamento acontece no último dia do mês e o pagamento é realizado via PIX até o dia 10 do mês seguinte." },
                { q: "Existe limite de indicações?", a: "Não. Você pode indicar quantos clientes quiser e aumentar sua receita recorrente mês após mês." },
                { q: "Vou receber materiais para divulgar?", a: "Sim. Você terá acesso a materiais de apoio, roteiros de abordagem e conteúdos validados para facilitar suas vendas." },
              ].map((faq, i) => (
                <motion.details 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-gray-50/50 border border-gray-100 rounded-[2rem] overflow-hidden cursor-pointer transition-all hover:bg-white hover:shadow-lg"
                >
                  <summary className="flex justify-between items-center font-bold p-8 text-gray-900 text-lg outline-none select-none">
                    {faq.q}
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-open:rotate-180 transition-transform">
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </div>
                  </summary>
                  <div className="px-8 pb-8 text-gray-500 text-lg leading-relaxed font-light">
                    {faq.a}
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        <section id="cadastro" className="py-24 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-[#A2DE5D]/25 to-[#16B763]/25 rounded-[2.5rem] blur-2xl opacity-40"></div>
              <div className="relative bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Cadastre-se e comece hoje</h2>
                <p className="text-gray-500 mb-8">Preencha seus dados para receber seu link de indicação exclusivo em poucos segundos.</p>

                <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Nome Completo</label>
                      <input 
                        type="text" 
                        id="name-2"
                        name="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={errors.name || "Insira seu nome"}
                        className={`w-full bg-gray-50 border rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#A2DE5D]/50 focus:bg-white transition-all shadow-inner ${
                          errors.name ? 'border-red-500 placeholder:text-red-500' : 'border-gray-100'
                        }`}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">E-mail de Trabalho</label>
                      <input 
                        type="email" 
                        id="email-2"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={errors.email || "Insira seu melhor e-mail"}
                        className={`w-full bg-gray-50 border rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#A2DE5D]/50 focus:bg-white transition-all shadow-inner ${
                          errors.email ? 'border-red-500 placeholder:text-red-500' : 'border-gray-100'
                        }`}
                        required 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">WhatsApp de Contato</label>
                    <div className="flex gap-0">
                      <select 
                        id="ddi-2"
                        name="ddi"
                        value={formData.ddi}
                        onChange={handleInputChange}
                        className="bg-gray-100 border border-gray-100 rounded-l-2xl px-4 flex items-center text-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-[#A2DE5D]/50"
                      >
                        <option value="+55">Brasil (+55)</option>
                        <option value="+1">EUA (+1)</option>
                        <option value="+351">Portugal (+351)</option>
                        <option value="+34">Espanha (+34)</option>
                      </select>
                      <input 
                        type="tel" 
                        id="tel-2"
                        name="phone_display"
                        value={formData.phone_display}
                        onChange={handleInputChange}
                        placeholder={errors.phone_display || "(00) 00000-0000"}
                        maxLength={15}
                        className={`flex-1 bg-gray-50 border rounded-r-2xl px-5 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#A2DE5D]/50 focus:bg-white transition-all shadow-inner ${
                          errors.phone_display ? 'border-red-500 placeholder:text-red-500' : 'border-gray-100'
                        }`}
                        required 
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    variant="apple" 
                    className="group w-full h-14 flex items-center justify-center gap-3 text-lg mt-6 shadow-xl shadow-[#A2DE5D]/20"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'QUERO MEU LINK DE AFILIADO'}
                    <span className="bg-[#33334F] text-white p-1 rounded-full flex items-center justify-center w-6 h-6 ml-1 transition-transform group-hover:translate-x-1.5">
                      <ArrowRight size={14} />
                    </span>
                  </Button>
                  <div className="flex items-center justify-center gap-2 mt-6">
                    <ShieldCheck size={14} className="text-gray-400" />
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black">Ambiente seguro • Programa oficial Followop</p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Afiliados;
