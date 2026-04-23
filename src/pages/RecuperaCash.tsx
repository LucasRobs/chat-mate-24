import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, TrendingUp, DollarSign, AlertTriangle, Clock, Shield, Zap, CheckCircle2, Calendar, X } from "lucide-react";
import { testimonials } from "@/components/sections/Testimonials";

const RecuperaCash = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_display: '',
    ddi: '+55'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const { name, email, phone_display, ddi } = formData;
    const phone = phone_display.replace(/\D/g, '');

    // Validation
    let isValid = true;
    if (!name.trim()) isValid = false;
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) isValid = false;
    if (!phone || phone.length < 10) isValid = false;

    if (!isValid) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }

    setIsSubmitting(true);

    const rawQuery = window.location.search ? window.location.search.slice(1) : '';
    const redirectUrl = `?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&phonenumber=${encodeURIComponent(phone)}`;
    const finalUrl = rawQuery ? redirectUrl + '&' + rawQuery : redirectUrl;

    const payload = {
      event: 'text',
      flowId: '',
      formId: 'form_1776877862813',
      redirect_url: finalUrl,
      raw_query_string: rawQuery,
      phone: phone,
      name: name,
      email: email,
      phone_display: phone_display
    };

    try {
      const resp = await fetch('https://n8n.comea.com.br/webhook/webhook_us8hnnfd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      console.log('✅ Resposta do servidor:', await resp.text());
      window.location.href = finalUrl;
    } catch (err) {
      console.error('❌ Erro ao enviar:', err);
      window.location.href = finalUrl;
    } finally {
      setIsSubmitting(false);
    }
  };

  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Inicializa comportamento do formulário estático inserido como HTML
  useEffect(() => {
    const RAW_QUERY = window.location.search ? window.location.search.slice(1) : ""; // sem "?"
    const form = document.getElementById("meuForm") as HTMLFormElement | null;
    if (!form) return;

    const btn = document.getElementById("btn-continuar") as HTMLInputElement | null;
    const selDdi = document.getElementById("ddi-2") as HTMLSelectElement | null;
    const inpTel = document.getElementById("tel-2") as HTMLInputElement | null;
    const inpName = document.getElementById("name-2") as HTMLInputElement | null;
    const inpEmail = document.getElementById("email-2") as HTMLInputElement | null;
    const redirectInput = form.querySelector('input[name="redirect_url"]') as HTMLInputElement | null;
    const formInput = form.querySelector('input[name="formId"]') as HTMLInputElement | null;
    const rawQueryInput = form.querySelector('input[name="raw_query_string"]') as HTMLInputElement | null;
    const phoneHidden = form.querySelector('input[name="phone"]') as HTMLInputElement | null;

    if (selDdi) {
      selDdi.innerHTML = `
        <option value="+55" selected>Brasil (+55)</option>
        <option value="+1">EUA (+1)</option>
        <option value="+351">Portugal (+351)</option>
        <option value="+34">Espanha (+34)</option>
      `;
    }

    if (rawQueryInput) rawQueryInput.value = RAW_QUERY;

    const onlyDigits = (s: string) => (s || "").replace(/\D+/g, "");

    let sending = false;

    const onClick = async () => {
      if (sending) return;

      const name = inpName?.value.trim() || "";
      const email = inpEmail?.value.trim() || "";
      const phone = onlyDigits(inpTel?.value || "");

      // Reset previous error states
      [inpName, inpEmail, inpTel].forEach(field => {
        if (field) (field.style as any).borderColor = '';
      });

      let isValid = true;
      if (!name) {
        if (inpName) { (inpName.style as any).borderColor = 'red'; inpName.placeholder = 'Por favor, insira seu nome'; }
        isValid = false;
      }
      if (!email) {
        if (inpEmail) { (inpEmail.style as any).borderColor = 'red'; inpEmail.placeholder = 'Por favor, insira seu e-mail'; }
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (inpEmail) { (inpEmail.style as any).borderColor = 'red'; inpEmail.value = ''; inpEmail.placeholder = 'E-mail inválido'; }
        isValid = false;
      }
      if (!phone) {
        if (inpTel) { (inpTel.style as any).borderColor = 'red'; inpTel.placeholder = 'Por favor, insira seu telefone'; }
        isValid = false;
      } else if (phone.length < 10) {
        if (inpTel) { (inpTel.style as any).borderColor = 'red'; inpTel.value = ''; inpTel.placeholder = 'Telefone inválido'; }
        isValid = false;
      }

      if (!isValid) return;

      sending = true;
      if (btn) btn.disabled = true;

      const phoneFull = onlyDigits(inpTel?.value || "");
      if (phoneHidden) phoneHidden.value = phoneFull;

      let url = redirectInput?.value || "";
      const extraParams = `&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phoneFull)}&phonenumber=${encodeURIComponent(phoneFull)}`;
      url += extraParams;
      if (RAW_QUERY) {
        url = url + (url.includes("?") ? "&" : "?") + RAW_QUERY;
      }

      const formDataObj = Object.fromEntries(new FormData(form).entries()) as Record<string,string>;

      const payload = {
        ...formDataObj,
        redirect_url: url,
        form_id: formInput?.value
      };

      try {
        const resp = await fetch("https://n8n.comea.com.br/webhook/webhook_us8hnnfd", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        const text = await resp.text();
        console.log("✅ Resposta do servidor:", text);
        // Em vez de redirecionar imediatamente, abrir modal de confirmação
        setModalOpen(true);
      } catch (err) {
        console.error("❌ Erro ao enviar:", err);
        // Mesmo em caso de erro, mostrar modal para oferecer agendamento
        setModalOpen(true);
      } finally {
        sending = false;
        if (btn) btn.disabled = false;
      }
    };

    btn?.addEventListener('click', onClick);
    return () => {
      btn?.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />

      {/* Sticky CTA for Mobile */}
      {showStickyCTA && (
        <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
          <Button 
            className="w-full bg-[#16B763] hover:bg-[#14A357] text-white text-base px-6 py-4 rounded-2xl shadow-xl"
            onClick={() => window.open('https://www.followop.com.br/register', '_blank')}
          >
            Quero Recuperar Meu Cash
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      )}
      
      <main>
        {/* Hero Section with Form */}
        <section className="relative overflow-hidden py-8 md:py-12 lg:py-16 px-4">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            {/* Meta Business Partner Badge - Top Centered */}
            <div className="flex justify-center mb-6 mt-4">
              <div className="flex items-center gap-2 bg-transparent border-none px-0 py-0 text-xs font-medium text-gray-700 max-w-fit mx-auto">
                <div className="w-5 h-5 flex items-center justify-center">
                  <img
                    src="/lovable-uploads/c5206104-ee78-44ed-b432-e4d2a4bb0863.png"
                    alt="Meta Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-x-1 text-xs sm:text-sm text-gray-700">
                  <span className="text-[#0668E1] font-semibold">Meta</span>
                  <span>Business Partner</span>
                  <span className="text-gray-400 hidden sm:inline">|</span>
                  <span className="text-[10px] sm:text-xs text-gray-500 whitespace-nowrap">
                    Powered by WhatsApp Business API
                  </span>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              {/* Left Column - Headline and Proofs */}
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-4">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700">E-book Gratuito</span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
                  Descubra o script exato para transformar carrinhos abandonados em vendas automáticas
                </h1>
                
                <p className="text-base md:text-lg text-gray-600 mb-4 max-w-xl">
                  Não deixe seus leads esfriarem na "janela de ouro". Preencha os dados abaixo e receba gratuitamente nosso E-book com o script e o passo a passo para configurar a recuperação de compras do seu negócio.
                </p>

                {/* Micro Proofs */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Script testado</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span>Passo a passo completo</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span>100% gratuito</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Form Card */}
              <div className="order-1 md:order-2">
                <div className="bg-white rounded-2xl p-5 md:p-6 border border-gray-200 shadow-lg">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Receba seu Script</h3>
                    <p className="text-sm text-gray-600">Preencha o formulário para liberar o seu script gratuitamente.</p>
                  </div>
                  {/* Substituído pelo formulário provido pelo cliente (HTML + JS adaptado) */}
                  <div>
                    <form id="meuForm" accept-charset="UTF-8">
                      <meta charSet="UTF-8" />
                      <input type="hidden" name="event" value="approved" />
                      <input type="hidden" name="flowId" value="" />
                      <input type="hidden" name="formId" value="form_1776965521256" />
                      <input type="hidden" name="redirect_url" value="?" />
                      <input type="hidden" name="raw_query_string" value="" />
                      <input type="hidden" name="phone" value="" />

                      <div className="container_html">
                        <div className="mb-1">
                          <input type="text" id="name-2" name="name" placeholder="Insira seu nome" className="input" />
                        </div>

                        <div className="mb-1">
                          <input type="email" id="email-2" name="email" placeholder="Insira seu melhor e-mail" required className="input" />
                        </div>

                        <div className="form-group-2">
                          <select id="ddi-2" className="select"></select>
                          <input data-phone-with-ddi type="tel" id="tel-2" name="phone_display" maxLength={15} placeholder="(00) 00000-0000" required className="tel" />
                        </div>

                        <textarea name="popup_opening_text" className="hidden">Você deu o primeiro passo para recuperar vendas perdidas. 
Este ebook reúne estratégias comprovadas que podem transformar seus resultados: https://firebasestorage.googleapis.com/v0/b/followop.firebasestorage.app/o/training-files%2Fe0e572b3-8816-43ca-8b9b-603123703f25%2FBlueprint_Funil_Blindado.pdf?alt=media&token=5575d47e-a236-4347-a288-ba435d8a7b01</textarea>
                        <input type="hidden" name="popup_opening_time" value="3" />

                        <input type="button" id="btn-continuar" value="CONTINUAR" className="btn" />
                      </div>

                      <style>{`
                        .container_html { width: 100%; transition: width .5s; }
                        .mb-1 { margin-bottom: 1rem; }
                        .input, .select, .tel {
                          width: 100%; padding: .375rem .75rem; font-size: 1rem; line-height: 1.5;
                          color: #212529; background: #fff; border: 1px solid #ced4da; border-radius: .25rem; box-sizing: border-box;
                        }
                        .form-group-2 { display: flex; align-items: center; width: 100%; margin-bottom: 1rem; }
                        .select { max-width: 25%; border-right: none; border-radius: .25rem 0 0 .25rem; height: calc(2.25rem + 2px); }
                        .tel { flex: 1; border-radius: 0 .25rem .25rem 0; height: calc(2.25rem + 2px); }
                        .btn {
                          display: block; width: 100%; margin-top: 20px; padding: 13px; line-height: 1.5; text-align: center;
                          cursor: pointer; font-size: 1rem; font-weight: 700; text-transform: uppercase;
                          text-shadow: 0 0 2px rgb(0 0 0 / 80%); color: #fff; background: #16B763; border-radius: 15px;
                          box-shadow: 0 -1px 24px 0 BUTTOM_COLOR; border: 1px solid transparent;
                        }
                        .hidden { display:none; }
                      `}</style>
                    </form>
                    {/* Script adapted para execução dentro do componente React */}
                    {/* Modal de confirmação exibido após envio do formulário */}
                    {modalOpen && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center" aria-modal="true" role="dialog">
                        <div className="absolute inset-0 bg-black opacity-40 backdrop-blur-sm" onClick={() => setModalOpen(false)} />
                        <div className="relative bg-white rounded-2xl p-6 max-w-md mx-4 shadow-2xl animate-modalEntrance" role="document" aria-labelledby="modal-title">
                          <button aria-label="Fechar" className="absolute top-3 right-3 text-gray-400 hover:text-gray-600" onClick={() => setModalOpen(false)}>
                            <X className="w-5 h-5" />
                          </button>

                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center justify-center w-12 h-12 bg-green-50 rounded-full">
                              <CheckCircle2 className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                              <h4 id="modal-title" className="text-lg font-bold">Solicitação recebida</h4>
                              <p className="text-sm text-gray-600">Obrigado! Em instantes você receberá o material por e-mail.</p>
                            </div>
                          </div>

                          <p className="text-sm text-gray-700 mb-4">Enquanto isso, se quiser falar com um especialista, agende uma reunião rápida. Temos disponibilidade para analisar seu caso e sugerir ações imediatas.</p>

                          <div className="flex flex-col sm:flex-row gap-3">
                            <a
                              href="https://calendar.app.google/NXHv8QdFM9Bb48q3A"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Agendar reunião com especialista"
                              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#16B763] hover:bg-[#14A357] text-white font-semibold text-sm py-2.5 px-4 rounded-xl shadow-sm"
                              style={{ minWidth: 220 }}
                            >
                              <Calendar className="w-5 h-5" />
                              <span>Agendar reunião com especialista</span>
                            </a>
                            <button
                              className="w-full sm:w-auto inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium text-sm py-2.5 px-4 rounded-xl"
                              onClick={() => setModalOpen(false)}
                              aria-label="Fechar modal"
                              style={{ minWidth: 120 }}
                            >
                              Fechar
                            </button>
                          </div>

                          <style>{`
                            @keyframes modalIn { from { opacity: 0; transform: translateY(12px) scale(.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
                            .animate-modalEntrance { animation: modalIn 260ms cubic-bezier(.2,.9,.2,1); }
                          `}</style>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-10 md:py-16 lg:py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                Por que você está perdendo dinheiro
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Entenda os 3 erros que estão drenando sua receita
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 border-2 border-red-100 rounded-2xl p-6 shadow-md">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">O Tráfego Explodiu (Seu CAC nas alturas)</h3>
                <p className="text-gray-600">Anunciar nunca esteve tão caro.
Cada lead que chega no checkout e some é dinheiro indo embora.
Se você não recupera esse carrinho, está literalmente pagando para perder vendas.</p>
              </div>

              <div className="bg-orange-50 border-2 border-orange-100 rounded-2xl p-6 shadow-md">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">A Ilusão do "Depois eu pago"</h3>
                <p className="text-gray-600">Quem abandona o carrinho quase nunca volta sozinho.
Na “janela de ouro”, qualquer dúvida ou distração rouba a venda.
Sem um contato rápido e a mensagem certa, esse lead esfria e compra do concorrente.</p>
              </div>

              <div className="bg-green-50 border-2 border-green-100 rounded-2xl p-6 shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">O V.F.V. (Vazamento no Funil de Vendas)</h3>
                <p className="text-gray-600">Os maiores players já sacaram: não basta trazer curiosos.
Eles tapam os furos do funil e voltam em quem já mostrou interesse.
Hoje, o dinheiro mais barato está nesses leads que ficaram pelo caminho.

</p>
              </div>
            </div>
          </div>
        </section>

        {/* Urgency CTA Section */}
        <section className="py-10 md:py-16 lg:py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                  O seu funil não vai parar de vazar sozinho
                </h2>
                <p className="text-lg text-gray-600 mb-3">
                  Quem abandona o carrinho quase nunca volta sozinho.
Na “janela de ouro”, qualquer dúvida ou distração rouba a venda.
Sem um contato rápido e a mensagem certa, esse lead esfria e compra do concorrente.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  A conta é simples: se o seu Custo de Aquisição (CAC) não fecha agora, imagina nos próximos meses. Infoprodutor que não otimiza a base de leads, quebra. Simples assim.
                </p>
                <Button 
                  className="bg-[#16B763] hover:bg-[#14A357] text-white text-lg px-8 py-6 rounded-2xl shadow-lg"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Quero o meu script agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full h-auto max-w-md">
                  <img
                    src="/lovable-uploads/photo-1601342630314-8427c38bf5e6.png"
                    alt="Seu funil não vai parar de vazar sozinho"
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sprint Section - What the Script Delivers */}
        <section className="py-10 md:py-16 lg:py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                O que o seu Script de Recuperação vai te entregar hoje
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                4 pilares essenciais para transformar carrinhos abandonados em vendas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-white border-2 border-[#16B763]/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-[#16B763]/10 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-7 h-7 text-[#16B763]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">A Tática da "Janela de Ouro"</h3>
                <p className="text-gray-600">
                  O timing exato. Aprenda a identificar o momento perfeito para abordar o lead que abandonou a compra, antes que ele esfrie ou compre de outro.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-[#16B763]/10 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-[#16B763]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">O Script Exato (A.I.P.)</h3>
                <p className="text-gray-600">
                  O modelo de Atendimento Imediato Personalizado. Copie e cole a mensagem exata que quebra objeções e faz o cliente se sentir ajudado, não pressionado.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-[#16B763]/10 rounded-xl flex items-center justify-center mb-4">
                  <AlertTriangle className="w-7 h-7 text-[#16B763]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Fim do V.F.V. (Vazamento no Funil de Vendas)</h3>
                <p className="text-gray-600">
                  Onde você está perdendo dinheiro. Entenda como fechar os buracos da sua operação que estão jogando o seu investimento em tráfego no lixo.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-[#16B763]/10 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-7 h-7 text-[#16B763]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Escalar sem gastar mais em tráfego</h3>
                <p className="text-gray-600">
                  O funil de Atendimento Imediato que paga o seu tráfego. Como dobrar sua conversão aproveitando os leads engajados que você já pagou para ter na base.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button 
                className="bg-[#16B763] hover:bg-[#14A357] text-white text-lg px-8 py-6 rounded-2xl shadow-lg"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Quero o meu script agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-10 md:py-16 lg:py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                Quem Já Recuperou Receita
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                +150 infoprodutores já recuperaram receita com a Followop
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-100">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                      <p className="text-xs text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Objection Section */}
        <section className="py-10 md:py-16 lg:py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white border border-gray-100 rounded-2xl md:rounded-[2rem] p-5 md:p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center border border-green-200">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Não sabe tecnologia? Não tem problema</h3>
                  <p className="text-gray-600 mb-4">Implantação assistida por nossos engenheiros com suporte direto. Treinamos a IA uma única vez.</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Sem precisar configurar API</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Sem precisar mexer em código</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>Suporte direto com engenheiros</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-5 mb-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Implantação Assistida</h4>
                  <p className="text-sm text-gray-600">Configuramos tudo para você</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Garantia de 7 Dias</h4>
                  <p className="text-sm text-gray-600">Risco zero para testar</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Suporte Direto</h4>
                  <p className="text-sm text-gray-600">Canal exclusivo com engenheiros</p>
                </div>
              </div>

              <div className="text-center">
                <Button
                  className="bg-[#16B763] hover:bg-[#14A357] text-white text-base px-8 py-3 rounded-xl"
                  onClick={() => window.open('https://calendar.app.google/NXHv8QdFM9Bb48q3A', '_blank')}
                >
                  Falar com consultor
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default RecuperaCash;
