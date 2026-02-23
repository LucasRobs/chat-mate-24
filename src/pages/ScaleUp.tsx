
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Check, HeadphonesIcon, MessageCircle, BrainCircuit, Target, Plug, Rocket, Building2, Zap, ShieldCheck } from "lucide-react";
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
        <div className="bg-zinc-900 p-5 sm:p-8 rounded-2xl shadow-xl border border-zinc-800">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1 sm:mb-2">Falar com Especialista</h3>
            <p className="text-sm sm:text-base text-zinc-400 mb-5 sm:mb-6 font-light">Receba uma proposta personalizada para sua operação.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name" className="text-zinc-300">Nome Completo</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Insira seu nome" className="bg-zinc-800 text-white border-zinc-700 placeholder:text-zinc-500" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-zinc-300">E-mail Corporativo</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="Insira seu melhor e-mail" className="bg-zinc-800 text-white border-zinc-700 placeholder:text-zinc-500" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone" className="text-zinc-300">Telefone / WhatsApp</Label>
                    <div className="flex gap-2">
                        <select
                            name="ddi"
                            id="ddi"
                            value={formData.ddi}
                            onChange={handleChange}
                            className="flex h-10 w-[110px] shrink-0 items-center justify-between rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                            <option value="+55">Brasil (+55)</option>
                            <option value="+1">EUA (+1)</option>
                            <option value="+351">Portugal (+351)</option>
                            <option value="+34">Espanha (+34)</option>
                        </select>
                        <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="(00) 00000-0000" className="bg-zinc-800 text-white border-zinc-700 flex-1 placeholder:text-zinc-500" />
                    </div>
                </div>
                <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-base font-bold mt-2 uppercase shadow-md shadow-primary/20 hover:shadow-lg transition-all hover:-translate-y-0.5">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "CONTINUAR"}
                </Button>
            </form>
        </div>
    );
};

const EnterpriseFeatures = () => {
    const features = [
        { icon: MessageCircle, title: "Follow-up Automatizado", desc: "Pare de perder vendas por esquecer de responder um lead. O sistema mantém o contato ativo na hora exata." },
        { icon: BrainCircuit, title: "CRM com IA Integrada", desc: "Sua operação atendida por uma IA treinada que qualifica contatos, tirar dúvidas e agenda reuniões no piloto automático." },
        { icon: Target, title: "Consultoria Estratégica", desc: "Esqueça software de gaveta. Entramos junto com você para desenhar ou otimizar toda a esteira de conversão de ponta a ponta." },
        { icon: Plug, title: "Integrações Descomplicadas", desc: "Seu ecossistema conectado. Integramos nossas soluções às ferramentas que você já utiliza, como Kiwify e Hotmart." },
        { icon: HeadphonesIcon, title: "Suporte Prioritário", desc: "Nada de abrir chamado pra esperar 48 horas. Atendimento VIP humanizado com linha direta para evitar que você fique parado." },
        { icon: Rocket, title: "Setup e Implantação Ágil", desc: "Nós fazemos o trabalho sujo. Entregamos os fluxos prontos e treinamos sua equipe para que comecem a vender de imediato." }
    ];

    return (
        <section className="animate-in py-16 sm:py-24 bg-zinc-950 relative border-y border-zinc-900">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-10 sm:mb-16 animate-fade-in-up">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 inline-block border border-primary/20">
                        Vantagens Exclusivas
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white mb-4 sm:mb-6 tracking-tight">
                        Por que Scale Up?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Infraestrutura robusta e serviços premium desenhados para operações de alto volume que não podem parar.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feat, i) => (
                        <div key={i} className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 shadow-sm hover:shadow-xl hover:border-zinc-700 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${(i + 1) * 100}ms` }}>
                            <div className="w-14 h-14 bg-zinc-800/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-zinc-800">
                                <feat.icon className="text-zinc-300 w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{feat.title}</h3>
                            <p className="text-zinc-400 font-light leading-relaxed">{feat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const EnterpriseCTA = () => {
    return (
        <section className="animate-in py-16 sm:py-24 bg-zinc-900 relative overflow-hidden border-t border-zinc-800">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 invert"></div>

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10 animate-fade-in-up">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-white mb-4 sm:mb-6 tracking-tight">Sua operação já é gigante.</h2>
                <p className="text-base sm:text-xl text-zinc-400 font-light mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                    Não deixe gargalos tecnológicos limitarem seu crescimento. Fale com nossos especialistas e escale com segurança.
                </p>
                <Button
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setTimeout(() => document.getElementById('name')?.focus(), 800);
                    }}
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white h-14 px-10 text-base sm:text-lg rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1"
                >
                    Solicitar Proposta Agora
                </Button>
            </div>
        </section>
    );
};

const ScaleUp = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col font-['Outfit'] bg-zinc-950 text-white">
            <Navbar />

            <main className="flex-grow pt-20 sm:pt-32">
                {/* Hero Section */}
                <section className="animate-in relative overflow-hidden px-4 sm:px-6 lg:px-8 pb-12 sm:pb-24">

                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">

                            {/* Content */}
                            <div className="text-left animate-fade-in-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                                    <Building2 size={16} />
                                    <span>Scale Up</span>
                                </div>

                                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-semibold text-white leading-[1.1] mb-4 sm:mb-6">
                                    Escala Global <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-400">Sem Limites</span>
                                </h1>

                                <p className="text-base sm:text-lg lg:text-xl text-zinc-400 font-light leading-relaxed mb-6 sm:mb-8 max-w-xl">
                                    Infraestrutura dedicada para grandes volumes.
                                    API oficial da Meta e suporte prioritário para sua operação não parar nunca.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
                                    <div className="flex gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                                            <Zap className="text-zinc-300" size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">Alta Performance</h4>
                                            <p className="text-sm text-zinc-500">Múltiplas instâncias sem delay.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                                            <ShieldCheck className="text-zinc-300" size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">Segurança Enterprise</h4>
                                            <p className="text-sm text-zinc-500">Conformidade LGPD e criptografia.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                                            <HeadphonesIcon className="text-zinc-300" size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">Suporte Dedicado</h4>
                                            <p className="text-sm text-zinc-500">Gerente de conta exclusivo.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                                            <Check className="text-zinc-300" size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">API Ilimitada</h4>
                                            <p className="text-sm text-zinc-500">Integração total com seu CRM.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Form */}
                            <div className="animate-fade-in-up delay-200">
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
                            <h2 className="text-[12vw] sm:text-[150px] lg:text-[220px] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-800 to-zinc-950 select-none animate-fade-in-up leading-none">
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
