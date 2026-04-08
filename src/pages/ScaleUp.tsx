
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle, BrainCircuit, Target, Plug, Rocket, Building2, Zap, ShieldCheck } from "lucide-react";
import { ContactModal } from "@/components/ui-custom/ContactModal"; // Reusing the modal/form logic or I can rebuild the form here.
// Actually, I'll build a dedicated section with the form embedded for the LP feel.
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

// Inline Form Component for the Landing Page
const ScaleUpForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        ddi: "+55",
        phone: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const onlyDigits = (s: string) => (s || "").replace(/\D+/g, "");
        const phoneFull = onlyDigits(formData.ddi + formData.phone);
        const phoneNumberOnly = onlyDigits(formData.phone);

        if (!formData.name.trim() || !formData.email.trim() || phoneNumberOnly.length < 10) {
            toast({
                title: "Erro",
                description: "Preencha todos os campos corretamente.",
                variant: "destructive"
            });
            return;
        }

        setIsLoading(true);

        const rawQuery = window.location.search ? window.location.search.slice(1) : "";
        let redirectUrl = "";
        const extraParams = `&name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&phone=${encodeURIComponent(phoneFull)}&phonenumber=${encodeURIComponent(phoneFull)}`;
        redirectUrl += extraParams;

        if (rawQuery) {
            redirectUrl = redirectUrl + (redirectUrl.includes("?") ? "&" : "?") + rawQuery;
        }

        const payload = {
            event: "invoice_open",
            flowId: "",
            formId: "form_1771877199309",
            redirect_url: redirectUrl,
            raw_query_string: rawQuery,
            phone: phoneFull,
            name: formData.name,
            email: formData.email,
            phone_display: `${formData.ddi} ${formData.phone}`,
            popup_opening_text: `Olá, ${formData.name}!\n\nAgradecemos pelo seu interesse no Plano Scale Up. Suas informações foram recebidas com sucesso!\n\nNosso time comercial já foi notificado e um consultor dedicado entrará em contato em até 24h para dar continuidade ao processo.\n\nPara agilizar o atendimento, você pode também responder a esta mensagem com o melhor horário para conversarmos.\n\nMe conta, qual o maior desafio do seu operacional hoje?`,
            popup_opening_time: "3",
            form_id: "form_1771877199309"
        };

        try {
            await fetch("https://n8n.comea.com.br/webhook/webhook_aw5d6kaa", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            toast({
                title: "Solicitação recebida!",
                description: "Em instantes, entraremos em contato com você.",
            });
            setFormData({ name: "", email: "", ddi: "+55", phone: "" });

            window.location.href = "?" + redirectUrl.replace(/^&/, "");
        } catch (err) {
            console.error(err);
            toast({
                title: "Sucesso!",
                description: "Recebemos seus dados! Em breve entraremos em contato."
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-zinc-900/40 backdrop-blur-xl p-6 sm:p-10 rounded-[2.5rem] shadow-2xl border border-white/5 relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#A2DE5D]/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#A2DE5D]/20 transition-colors duration-500"></div>
            
            <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2 tracking-tight">Falar com Especialista</h3>
                <p className="text-sm sm:text-base text-zinc-400 mb-8 font-light leading-relaxed">
                    Receba uma proposta personalizada para sua operação.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                        <Label htmlFor="name" className="text-zinc-400 text-[10px] uppercase tracking-widest font-semibold ml-1">Nome Completo</Label>
                        <Input 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                            placeholder="Insira seu nome" 
                            className="bg-white/5 text-white border-white/10 placeholder:text-zinc-600 h-12 focus:ring-[#A2DE5D]/40 focus:border-[#A2DE5D]/40 transition-all rounded-xl" 
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-zinc-400 text-[10px] uppercase tracking-widest font-semibold ml-1">E-mail Corporativo</Label>
                        <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                            placeholder="Insira seu melhor e-mail" 
                            className="bg-white/5 text-white border-white/10 placeholder:text-zinc-600 h-12 focus:ring-[#A2DE5D]/40 focus:border-[#A2DE5D]/40 transition-all rounded-xl" 
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone" className="text-zinc-400 text-[10px] uppercase tracking-widest font-semibold ml-1">Telefone / WhatsApp</Label>
                        <div className="flex gap-2">
                            <div className="relative w-[130px] shrink-0">
                                <select
                                    name="ddi"
                                    id="ddi"
                                    value={formData.ddi}
                                    onChange={handleChange}
                                    className="flex h-12 w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#A2DE5D]/40 focus:border-[#A2DE5D]/40 appearance-none"
                                >
                                    <option value="+55" className="bg-zinc-900">Brasil (+55)</option>
                                    <option value="+1" className="bg-zinc-900">EUA (+1)</option>
                                    <option value="+351" className="bg-zinc-900">Portugal (+351)</option>
                                    <option value="+34" className="bg-zinc-900">Espanha (+34)</option>
                                </select>
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <Input 
                                id="phone" 
                                name="phone" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                required 
                                placeholder="(00) 00000-0000" 
                                className="bg-white/5 text-white border-white/10 flex-1 placeholder:text-zinc-600 h-12 focus:ring-[#A2DE5D]/40 focus:border-[#A2DE5D]/40 transition-all rounded-xl" 
                            />
                        </div>
                    </div>
                    <Button 
                        type="submit" 
                        disabled={isLoading} 
                        className="w-full bg-[#A2DE5D] hover:bg-[#b5f073] text-[#2D2D4A] h-14 text-base font-semibold mt-4 uppercase tracking-wider shadow-lg shadow-[#A2DE5D]/10 hover:shadow-[#A2DE5D]/20 transition-all active:scale-[0.98] rounded-xl"
                    >
                        {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : "CONTINUAR"}
                    </Button>
                </form>
            </div>
        </div>
    );
};

const EnterpriseFeatures = () => {
    const features = [
        { icon: MessageCircle, title: "Follow-up Automatizado", desc: "Pare de perder vendas por esquecer de responder um lead. O sistema mantém o contato ativo na hora exata." },
        { icon: BrainCircuit, title: "CRM com IA Integrada", desc: "Sua operação atendida por uma IA treinada que qualifica contatos, tirar dúvidas e agenda reuniões no piloto automático." },
        { icon: Target, title: "Consultoria Estratégica", desc: "Esqueça software de gaveta. Entramos junto com você para desenhar ou otimizar toda a esteira de conversão de ponta a ponta." },
        { icon: Plug, title: "Integrações Descomplicadas", desc: "Seu ecossistema conectado. Integramos nossas soluções às ferramentas que você já utiliza, como Kiwify e Hotmart." },
        { icon: Rocket, title: "Setup e Implantação Ágil", desc: "Nós fazemos o trabalho sujo. Entregamos os fluxos prontos e treinamos sua equipe para que comecem a vender de imediato." }
    ];

    return (
        <section className="animate-in py-24 sm:py-32 bg-zinc-950 relative border-y border-zinc-900/50">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#A2DE5D]/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 sm:mb-24 animate-fade-in-up">
                    <span className="bg-[#2D2D4A]/50 backdrop-blur-sm text-[#A2DE5D] px-5 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 inline-block border border-[#A2DE5D]/20 shadow-sm uppercase tracking-[0.2em]">
                        Vantagens Exclusivas
                    </span>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
                        Por que escolher <br className="hidden sm:block" /> o Plano Scale Up?
                    </h2>
                    <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Infraestrutura robusta e serviços premium desenhados para operações de <span className="text-white italic">alto volume</span> que exigem zero downtime.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
                    {features.map((feat, i) => (
                        <div key={i} className="bg-[#2D2D4A]/10 backdrop-blur-sm rounded-[2rem] p-10 border border-white/5 shadow-sm hover:shadow-2xl hover:border-[#16B763]/30 transition-all duration-500 animate-fade-in-up group overflow-hidden relative" style={{ animationDelay: `${(i + 1) * 100}ms` }}>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#A2DE5D]/5 rounded-full blur-[40px] -mr-16 -mt-16 group-hover:bg-[#A2DE5D]/10 transition-colors"></div>
                            
                            <div className="w-16 h-16 bg-[#2D2D4A]/30 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-white/5 relative z-10">
                                <feat.icon className="text-[#A2DE5D] w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4 relative z-10">{feat.title}</h3>
                            <p className="text-zinc-400 font-light leading-relaxed text-base relative z-10">{feat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const EnterpriseCTA = () => {
    return (
        <section className="animate-in py-24 sm:py-40 bg-[#0A0A0A] relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#16B763]/10 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10 animate-fade-in-up">
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-white mb-8 tracking-tighter leading-[1.1]">
                    Sua operação <br /> já é gigante.
                </h2>
                <p className="text-lg sm:text-2xl text-zinc-400 font-light mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed">
                    Não deixe gargalos tecnológicos limitarem seu crescimento. Escalone com a infraestrutura que as maiores operações do Brasil usam.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            setTimeout(() => document.getElementById('name')?.focus(), 800);
                        }}
                        className="w-full sm:w-auto bg-[#A2DE5D] hover:bg-[#b5f073] text-[#2D2D4A] h-16 px-12 text-lg font-semibold rounded-2xl shadow-xl shadow-[#A2DE5D]/10 hover:shadow-[#A2DE5D]/20 transition-all hover:-translate-y-1 active:scale-95"
                    >
                        Solicitar Proposta
                    </Button>
                    <p className="text-zinc-500 text-sm sm:text-base italic ml-2">
                        Respostas em até <span className="text-white font-medium">15 minutos</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

const ScaleUp = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col font-sans bg-zinc-950 text-white">
            <Navbar />

            <main className="flex-grow pt-20 sm:pt-32">
                {/* Hero Section */}
                <section className="animate-in relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-20 sm:pb-32">
                    {/* Abstract background elements */}
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#16B763]/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#A2DE5D]/5 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                            {/* Content */}
                            <div className="lg:col-span-7 text-left animate-fade-in-left">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2D2D4A]/50 backdrop-blur-md text-[#A2DE5D] border border-[#A2DE5D]/20 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-sm">
                                    <Building2 size={16} className="animate-pulse" />
                                    <span className="tracking-wide uppercase text-[10px] sm:text-xs">Solução Enterprise</span>
                                </div>

                                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-semibold text-white leading-[1.05] mb-6 sm:mb-10 tracking-tight">
                                    Escala Global <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A2DE5D] via-[#16B763] to-[#A2DE5D]">Sem Limites</span>
                                </h1>

                                <p className="text-lg sm:text-xl lg:text-2xl text-zinc-400 font-light leading-relaxed mb-10 sm:mb-14 max-w-2xl border-l-2 border-[#A2DE5D]/30 pl-6">
                                    Infraestrutura dedicada para grandes volumes e
                                    API oficial da Meta para que sua operação não pare nunca.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
                                    <div className="flex gap-4 group">
                                        <div className="w-12 h-12 rounded-2xl bg-[#2D2D4A]/30 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#16B763]/20 group-hover:border-[#16B763]/30 transition-all duration-300">
                                            <Zap className="text-[#A2DE5D] group-hover:scale-110 transition-transform" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white text-lg mb-1">Alta Performance</h4>
                                            <p className="text-sm text-zinc-500 leading-relaxed">Múltiplas instâncias sem delay.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 group">
                                        <div className="w-12 h-12 rounded-2xl bg-[#2D2D4A]/30 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#16B763]/20 group-hover:border-[#16B763]/30 transition-all duration-300">
                                            <ShieldCheck className="text-[#A2DE5D] group-hover:scale-110 transition-transform" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white text-lg mb-1">Segurança Enterprise</h4>
                                            <p className="text-sm text-zinc-500 leading-relaxed">Conformidade LGPD e criptografia.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 group">
                                        <div className="w-12 h-12 rounded-2xl bg-[#2D2D4A]/30 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#16B763]/20 group-hover:border-[#16B763]/30 transition-all duration-300">
                                            <Check className="text-[#A2DE5D] group-hover:scale-110 transition-transform" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white text-lg mb-1">API Ilimitada</h4>
                                            <p className="text-sm text-zinc-500 leading-relaxed">Integração total com seu CRM.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Form */}
                            <div className="lg:col-span-5 animate-fade-in-up delay-200 lg:mt-0 mt-8 sticky top-24">
                                <ScaleUpForm />
                            </div>

                        </div>
                    </div>
                </section>

                <EnterpriseFeatures />
                <EnterpriseCTA />

                {/* Big Text Footer Branding */}
                <section className="animate-in py-24 sm:py-32 relative overflow-hidden bg-zinc-950">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
                    <div className="max-w-7xl mx-auto px-4 relative z-10">
                        <div className="flex justify-center items-center">
                            <h2 className="text-[12vw] sm:text-[150px] lg:text-[220px] font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#A2DE5D]/20 to-[#2D2D4A]/10 select-none animate-fade-in-up leading-none">
                                followop
                            </h2>
                        </div>
                    </div>
                </section>
            </main>

            {/* Minimal ScaleUp Footer */}
            <footer className="bg-zinc-950 py-12 border-t border-zinc-900 mt-auto w-full">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-zinc-500 text-sm">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 opacity-80">
                            <img
                                src="/lovable-uploads/followop.png"
                                alt="Logo"
                                className="w-full h-full object-contain p-0.5"
                            />
                        </div>
                        <span className="font-semibold text-zinc-300">followop Scale Up</span>
                    </div>
                    <p>© {new Date().getFullYear()} followop. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default ScaleUp;
