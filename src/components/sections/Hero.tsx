import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight, Bell, BarChart2, Users, MessageSquare, Workflow, Clock3, Play, ListTodo, Bot, Smartphone, CheckCircle2, QrCode, Sparkles, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

// Meta Tech Partner Badge Component
const MetaTechPartnerBadge = () => (
  <div className="flex items-center gap-2 bg-transparent border-none px-0 py-0 text-xs font-medium text-gray-700 max-w-fit mx-auto animate-fade-in-down">
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
);

// System Features Component
const SystemFeatures = () => (
  <div className="grid grid-cols-2 gap-3 max-w-2xl mt-4 mx-auto animate-fade-in px-1 sm:grid-cols-4" style={{ animationDelay: "400ms" }}>
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100 text-center transform transition-transform hover:-translate-y-1">
      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#F0FBF4] rounded-full flex items-center justify-center mx-auto mb-2">
        <Bell className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
      </div>
      <p className="text-[10px] sm:text-xs font-medium text-gray-800">Automação de Fluxos</p>
    </div>

    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100 text-center transform transition-transform hover:-translate-y-1">
      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#F0FBF4] rounded-full flex items-center justify-center mx-auto mb-2">
        <BarChart2 className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
      </div>
      <p className="text-[10px] sm:text-xs font-medium text-gray-800">Métricas Avançadas</p>
    </div>

    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100 text-center transform transition-transform hover:-translate-y-1">
      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#F0FBF4] rounded-full flex items-center justify-center mx-auto mb-2">
        <Workflow className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
      </div>
      <p className="text-[10px] sm:text-xs font-medium text-gray-800">CRM Integrado</p>
    </div>

    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100 text-center transform transition-transform hover:-translate-y-1">
      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#F0FBF4] rounded-full flex items-center justify-center mx-auto mb-2">
        <Clock3 className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
      </div>
      <p className="text-[10px] sm:text-xs font-medium text-gray-800">Resposta 24/7</p>
    </div>
  </div>
);

const DisparoTab = () => (
  <div className="space-y-3 sm:space-y-6">
    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 sm:gap-4">
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-gray-800">Nova Campanha</h3>
        <p className="text-xs sm:text-sm text-gray-500">Configure um disparo em massa para seus leads</p>
      </div>
      <Button className="hidden sm:flex bg-[#16B763] hover:bg-[#16B763]/90 text-white text-sm h-9 shadow-sm">
        Iniciar Disparo
      </Button>
    </div>

    <div className="grid grid-cols-1 gap-4">
      <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
        <label className="text-sm font-medium text-gray-700 block mb-2">Mensagem Principal</label>
        <div className="bg-white border border-gray-200 rounded-lg p-3 text-xs sm:text-sm text-gray-600">
          Olá {'{nome}'}, vimos que você se interessou pelo nosso produto. Gostaria de tirar alguma dúvida com um de nossos especialistas?
        </div>
        <div className="hidden sm:flex flex-wrap gap-2 mt-3 text-xs text-gray-500 items-center">
          <span className="bg-gray-100 px-2 py-1 rounded">Váriaveis:</span>
          <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded font-mono">nome</span>
          <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded font-mono">telefone</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4 flex items-center justify-between shadow-sm cursor-pointer hover:border-gray-300 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-50 rounded-lg flex items-center justify-center shrink-0">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" />
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-gray-500 font-medium">Público Alvo</p>
              <p className="text-xs sm:text-sm font-semibold text-gray-800">Leads Frios (1.204)</p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
        </div>
        <div className="hidden sm:flex bg-white border border-gray-200 rounded-xl p-4 items-center justify-between shadow-sm cursor-pointer hover:border-gray-300 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center shrink-0">
              <Smartphone className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Instâncias</p>
              <p className="text-sm font-semibold text-gray-800">3 números ativos</p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
        </div>
      </div>
    </div>
  </div>
);

const FollowUpTab = () => (
  <div className="space-y-3 sm:space-y-6">
    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 sm:gap-4">
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-gray-800">Sequências de Follow-up</h3>
        <p className="text-xs sm:text-sm text-gray-500">Cadências automáticas para não perder nenhum retorno</p>
      </div>
      <Button variant="outline" className="hidden sm:flex text-sm h-9 border-gray-200 shadow-sm">
        Novo Follow-up
      </Button>
    </div>

    <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent pt-4 pb-4">
      {/* Item 1 */}
      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-green-100 text-green-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <span className="text-sm font-bold">1</span>
        </div>
        <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-3rem)] bg-white p-3 sm:p-4 rounded-xl border border-gray-100 shadow-sm ml-2 md:mx-0 transition-transform hover:-translate-y-1">
          <div className="flex flex-col xl:flex-row xl:items-start justify-between mb-2 gap-1.5 sm:gap-2">
            <h4 className="text-sm font-bold text-gray-800">Mensagem Inicial</h4>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-50 text-green-600 font-medium whitespace-nowrap self-start">Imediato</span>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">Olá, vi que se cadastrou. Como posso ajudar com a sua operação de vendas hoje?</p>
        </div>
      </div>

      {/* Item 2 */}
      <div className="hidden sm:flex relative items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mt-6">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <span className="text-sm font-bold">2</span>
        </div>
        <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-3rem)] bg-white p-3 sm:p-4 rounded-xl border border-gray-100 shadow-sm ml-2 md:mx-0 transition-transform hover:-translate-y-1">
          <div className="flex flex-col xl:flex-row xl:items-start justify-between mb-2 gap-1.5 sm:gap-2">
            <h4 className="text-sm font-bold text-gray-800">Lembrete de Benefícios</h4>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-medium whitespace-nowrap self-start">Após 2 horas</span>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">Sabia que nossos clientes economizam 12h semanais automatizando as respostas?</p>
        </div>
      </div>

      {/* Item 3 */}
      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mt-6">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-amber-100 text-amber-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <span className="text-sm font-bold">3</span>
        </div>
        <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-3rem)] bg-white p-3 sm:p-4 rounded-xl border border-gray-100 shadow-sm ml-2 md:mx-0 transition-transform hover:-translate-y-1">
          <div className="flex flex-col xl:flex-row xl:items-start justify-between mb-2 gap-1.5 sm:gap-2">
            <h4 className="text-sm font-bold text-gray-800">Quebra de Objeção</h4>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 font-medium whitespace-nowrap self-start">Dia seguinte</span>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">Sei que o tempo está corrido. Posso enviar um áudio rápido de 30s explicando?</p>
        </div>
      </div>
    </div>
  </div>
);

const CRMTab = () => (
  <div className="space-y-2 sm:space-y-4 flex flex-col h-full">
    <div className="flex justify-between items-center shrink-0 mb-1 sm:mb-2">
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-gray-800">CRM com IA Ativa</h3>
        <p className="text-xs sm:text-sm text-gray-500">Leads sendo qualificados em tempo real</p>
      </div>
    </div>

    {/* The Kanban Board */}
    <div className="flex gap-4 overflow-x-auto pb-4 h-full snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

      {/* Col 1 */}
      <div className="w-[85vw] max-w-[280px] sm:max-w-none sm:w-64 shrink-0 snap-center bg-gray-50/80 rounded-xl p-3 flex flex-col border border-gray-100 h-full">
        <div className="flex justify-between items-center mb-3 px-1">
          <span className="text-sm font-semibold text-gray-700">Novos Leads</span>
          <span className="bg-white border border-gray-200 text-gray-600 text-[10px] px-2 py-0.5 rounded-full font-medium shadow-sm">12</span>
        </div>
        <div className="space-y-3 flex-1">
          <div className="hidden sm:block bg-white p-3 rounded-lg border border-gray-200 shadow-sm transition-transform hover:-translate-y-0.5 cursor-pointer">
            <div className="flex justify-between items-start">
              <span className="text-sm font-medium text-gray-800">João Silva</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shadow-[0_0_4px_rgba(16,185,129,0.5)]"></span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Origem: Meta Ads</p>
            <div className="mt-3 flex gap-1">
              <span className="text-[10px] bg-red-50 text-red-600 px-1.5 py-0.5 rounded font-medium">Frio</span>
              <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-medium">Aguardando</span>
            </div>
          </div>

          {/* Animated moving card */}
          <motion.div
            initial={{ opacity: 0, x: -10, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-3 rounded-lg border border-indigo-200 shadow-[0_4px_12px_rgba(99,102,241,0.12)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
            <div className="flex justify-between items-start pl-2">
              <span className="text-sm font-medium text-gray-800">Maria Oliveira</span>
              <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-pulse" />
            </div>
            <p className="text-xs text-gray-500 mt-1 pl-2">Interesse em automação</p>
            <div className="mt-3 bg-indigo-50/50 rounded p-1.5 flex items-start gap-1.5 ml-1 border border-indigo-100">
              <Bot className="w-3.5 h-3.5 text-indigo-600 mt-0.5 shrink-0" />
              <span className="text-[10px] text-indigo-700 font-medium leading-tight">IA Respondeu: "Qual o seu nicho de atuação principal?"</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Col 2 */}
      <div className="w-[85vw] max-w-[280px] sm:max-w-none sm:w-64 shrink-0 snap-center bg-gray-50/80 rounded-xl p-3 flex flex-col border border-gray-100 h-full">
        <div className="flex justify-between items-center mb-3 px-1">
          <span className="text-sm font-semibold text-gray-700">Em Atendimento</span>
          <span className="bg-white border border-gray-200 text-gray-600 text-[10px] px-2 py-0.5 rounded-full font-medium shadow-sm">5</span>
        </div>
        <div className="space-y-3 flex-1">
          <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm transition-transform hover:-translate-y-0.5 cursor-pointer">
            <div className="flex justify-between items-start">
              <span className="text-sm font-medium text-gray-800">Carlos Santos</span>
              <span className="text-[10px] font-medium text-amber-600 bg-amber-50 border border-amber-100 px-1.5 rounded">Andamento</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Negociando planos</p>
            <div className="mt-3 text-[10px] text-gray-500 flex items-center gap-1.5 border-t border-gray-50 pt-2">
              <MessageSquare className="w-3 h-3 text-gray-400" /> 8 mensagens trocadas
            </div>
          </div>
        </div>
      </div>

      {/* Col 3 */}
      <div className="w-11/12 sm:w-64 shrink-0 snap-center bg-gray-50/80 rounded-xl p-3 flex flex-col border border-gray-100 opacity-60 h-full">
        <div className="flex justify-between items-center mb-3 px-1">
          <span className="text-sm font-semibold text-gray-700">Pagamento</span>
          <span className="bg-white border border-gray-200 text-gray-600 text-[10px] px-2 py-0.5 rounded-full font-medium shadow-sm">2</span>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-lg bg-gray-50/50 min-h-[120px]">
          <p className="text-xs font-medium text-gray-400">Solte os cards aqui</p>
        </div>
      </div>

    </div>
  </div>
);

const InstanciasTab = () => (
  <div className="space-y-4 sm:space-y-6">
    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 sm:gap-4">
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-gray-800">Instâncias WhatsApps</h3>
        <p className="text-xs sm:text-sm text-gray-500">Múltiplos números rodando em paralelo sem restrições</p>
      </div>
      <Button className="hidden sm:flex bg-[#2D2D4A] hover:bg-[#2D2D4A]/90 text-white text-sm h-9 items-center gap-2 shadow-sm">
        <QrCode className="w-4 h-4" /> Nova Conexão
      </Button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Card 1 */}
      <div className="bg-white border border-green-200/60 rounded-xl p-3 sm:p-4 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
        <div className="absolute top-0 right-0 w-1.5 h-full bg-green-500"></div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-3 sm:mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-50 rounded-full flex items-center justify-center border border-green-100">
              <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Suporte Central</h4>
              <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">+55 11 99999-9999</p>
            </div>
          </div>
          <span className="flex items-center gap-1 text-[10px] font-medium text-green-600 bg-green-50 border border-green-100 px-2 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
            <CheckCircle2 className="w-3 h-3" /> Conectado
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-center mt-2 border-t border-gray-50 pt-2 sm:pt-3">
          <div>
            <p className="text-[9px] sm:text-[10px] text-gray-500 font-medium uppercase tracking-wider">Envios (Hoje)</p>
            <p className="text-base sm:text-lg font-bold text-gray-800 mt-0.5">1.204</p>
          </div>
          <div>
            <p className="text-[9px] sm:text-[10px] text-gray-500 font-medium uppercase tracking-wider">Status</p>
            <p className="text-xs sm:text-sm font-medium text-green-600 mt-1 sm:mt-1.5">Estável</p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="hidden sm:block bg-white border border-green-200/60 rounded-xl p-4 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
        <div className="absolute top-0 right-0 w-1.5 h-full bg-green-500"></div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center border border-green-100">
              <Smartphone className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Vendas (SDR 1)</h4>
              <p className="text-xs text-gray-500 mt-0.5">+55 11 98888-8888</p>
            </div>
          </div>
          <span className="flex items-center gap-1 text-[10px] font-medium text-green-600 bg-green-50 border border-green-100 px-2 py-1 rounded-full whitespace-nowrap">
            <CheckCircle2 className="w-3 h-3" /> Conectado
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-center mt-2 border-t border-gray-50 pt-3">
          <div>
            <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Envios (Hoje)</p>
            <p className="text-lg font-bold text-gray-800 mt-0.5">845</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Status</p>
            <p className="text-sm font-medium text-green-600 mt-1.5">Estável</p>
          </div>
        </div>
      </div>

      {/* Add new card */}
      <div className="hidden sm:flex bg-gray-50/50 border-2 border-dashed border-gray-200 rounded-xl p-4 flex-col items-center justify-center min-h-[140px] text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer w-full md:col-span-2">
        <QrCode className="w-7 h-7 mb-2 opacity-50" />
        <span className="text-sm font-medium">Conectar novo número</span>
      </div>
    </div>
  </div>
);

const InteractiveDashboard = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("disparo");
  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [userInteracting, setUserInteracting] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setCursorVisible(false);
      return;
    }

    let active = true;
    let timer: NodeJS.Timeout;

    const cycle = async () => {
      const tabsCycle = ["disparo", "followup", "crm", "instancias"];
      let curr = 0;

      // Initially, position cursor off-screen relative to container
      if (containerRef.current) {
        setCursorPos({ x: containerRef.current.offsetWidth / 2, y: containerRef.current.offsetHeight + 100 });
        await new Promise(r => { timer = setTimeout(r, 1000) });
      }

      while (active) {
        if (userInteracting) break;

        curr = (curr + 1) % tabsCycle.length;
        const nextId = tabsCycle[curr];
        const btn = tabRefs.current[nextId];

        if (btn && containerRef.current && !userInteracting) {
          setCursorVisible(true);
          const btnR = btn.getBoundingClientRect();
          const contR = containerRef.current.getBoundingClientRect();

          // Move cursor to button center
          setCursorPos({
            x: btnR.left - contR.left + (btnR.width / 2),
            y: btnR.top - contR.top + (btnR.height / 2)
          });

          await new Promise(r => { timer = setTimeout(r, 800) }); // Wait for cursor move
          if (!active) break;
          if (userInteracting) { setCursorVisible(false); break; }

          // Simulate click
          setIsClicking(true);
          await new Promise(r => { timer = setTimeout(r, 150) });
          if (!active) break;
          if (userInteracting) { setCursorVisible(false); break; }

          setActiveTab(nextId);
          setIsClicking(false);

          // Wait on the new tab
          await new Promise(r => { timer = setTimeout(r, 4500) });
        } else {
          await new Promise(r => { timer = setTimeout(r, 1000) });
        }
      }
    };

    if (!userInteracting) {
      cycle();
    } else {
      setCursorVisible(false);
    }

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [userInteracting]);

  const tabs = [
    { id: "disparo", label: "Disparo em Massa", icon: <Play className="w-4 h-4" /> },
    { id: "followup", label: "Follow-up automáticos", icon: <ListTodo className="w-4 h-4" /> },
    { id: "crm", label: "CRM com IA", icon: <Bot className="w-4 h-4" /> },
    { id: "instancias", label: "Instâncias WhatsApps", icon: <Smartphone className="w-4 h-4" /> },
  ];

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setUserInteracting(true)}
      onMouseLeave={() => setUserInteracting(false)}
      onTouchStart={() => setUserInteracting(true)}
      className="relative rounded-xl overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-200/60 bg-white w-full mx-auto"
    >
      {/* Fake Cursor Animation */}
      <AnimatePresence>
        {cursorVisible && !userInteracting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              x: cursorPos.x,
              y: cursorPos.y,
              scale: isClicking ? 0.8 : 1
            }}
            exit={{ opacity: 0 }}
            transition={{
              x: { type: "tween", duration: 0.8, ease: "easeInOut" },
              y: { type: "tween", duration: 0.8, ease: "easeInOut" },
              scale: { duration: 0.15 },
              opacity: { duration: 0.2 }
            }}
            className="absolute z-60 pointer-events-none"
            style={{
              marginLeft: "-4px", // adjust tip position
              marginTop: "-4px", // adjust tip position 
              zIndex: 100
            }}
          >
            <MousePointer2
              className="w-7 h-7 text-black fill-white"
              style={{ filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.3))" }}
              strokeWidth={1.5}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chrome window header like */}
      <div className="bg-[#FAFAFA] border-b border-gray-100 px-4 py-3 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-amber-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full overflow-hidden shrink-0">
            <img src="/lovable-uploads/followop.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-xs font-semibold text-gray-600">followop.com.br</span>
        </div>
        <div className="w-8"></div>
      </div>

      <div className="flex flex-col md:flex-row h-[480px] sm:h-[500px] md:h-[520px]">
        {/* Sidebar for desktop, Top tabs for mobile */}
        <div className="md:w-64 bg-gray-50/40 border-b md:border-b-0 md:border-r border-gray-100 p-2 sm:p-4 grid grid-cols-2 md:flex md:flex-col gap-2 sm:gap-3 shrink-0 pb-3 md:pb-4">
          {tabs.map(tab => (
            <button
              key={tab.id}
              ref={el => tabRefs.current[tab.id] = el}
              onClick={() => setActiveTab(tab.id)}
              className={`group flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-1.5 lg:gap-3 px-2 py-2 sm:px-4 sm:py-3.5 rounded-xl text-[11px] lg:text-sm font-medium transition-all duration-200 whitespace-normal text-center lg:text-left border ${activeTab === tab.id
                ? "bg-white text-[#16B763] border-[#16B763]/25 shadow-sm shadow-[#16B763]/5"
                : "text-gray-500 border-transparent hover:bg-gray-100/80 hover:text-gray-800 hover:border-gray-200/50"
                }`}
            >
              <div className={`${activeTab === tab.id ? "text-[#16B763]" : "text-gray-400 group-hover:text-gray-600"} shrink-0 transition-colors`}>
                {tab.icon}
              </div>
              <span className="leading-tight">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 p-3 sm:p-6 lg:p-8 overflow-hidden md:overflow-y-auto bg-white relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {activeTab === "disparo" && <DisparoTab />}
              {activeTab === "followup" && <FollowUpTab />}
              {activeTab === "crm" && <CRMTab />}
              {activeTab === "instancias" && <InstanciasTab />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = [
    "Follow-up",
    "Tempo da Equipe",
    "Organização",
    "Gestão de Leads",
    "Resposta Rápida",
    "Nutrição de Contatos",
    "Análise Repetitiva",
  ];

  const isMobile = useIsMobile();

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animElements = document.querySelectorAll(".animate-on-scroll");
    animElements.forEach((el) => observer.observe(el));

    return () => {
      animElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const i = currentWordIndex % words.length;
      const fullText = words[i];

      setDisplayedText(
        isDeleting
          ? fullText.substring(0, displayedText.length - 1)
          : fullText.substring(0, displayedText.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && displayedText === fullText) {
        setTypingSpeed(1500); // Pause at end of word
        setIsDeleting(true);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => prev + 1);
        setTypingSpeed(200); // Pause before typing new word
      }
    };

    const typingInterval = setInterval(handleTyping, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [displayedText, isDeleting, typingSpeed, currentWordIndex, words]);

  return (
    <section className="relative bg-white overflow-hidden flex flex-col justify-center pt-24 pb-14 sm:pb-20 mobile-container">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Meta badge centralized */}
        <div className={`flex justify-center ${isMobile ? "mb-6 mt-4" : "mb-8 mt-8"}`}>
          <MetaTechPartnerBadge />
        </div>

        {/* Top to Bottom Layout */}
        <div className="mx-auto flex flex-col items-center text-center gap-10">

          <div className="max-w-3xl flex flex-col items-center">
            <h1 className="blur-reveal text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 leading-[1.02]" style={{ transitionDelay: "100ms" }}>
              Transforme leads perdidos <br className="hidden md:block" />
              <span className="text-[#16B763] transition duration-1000">em receita previsível.</span>
            </h1>

            <div className="mt-5 min-h-16 sm:min-h-20 md:min-h-24 blur-reveal" style={{ transitionDelay: "300ms", minHeight: "80px" }}>
              <h2 className="max-w-xl mx-auto text-lg sm:text-2xl md:text-3xl font-light text-gray-600 animate-fade-in-down" style={{ animationDelay: "300ms" }}>
                Nunca mais perca vendas por falta de <span className="font-medium text-[#16B763] typing-animation border-b-2 border-[#16B763]/30 pb-1">{displayedText}</span>
              </h2>
            </div>

            <p className="blur-reveal mt-2 text-sm sm:text-lg text-gray-500 leading-relaxed font-light" style={{ transitionDelay: "500ms" }}>
              Um ecossistema inteligente que acaba com o trabalho braçal, resgata orçamentos esquecidos e assume as tarefas repetitivas. Escale seu atendimento e fature com previsibilidade.
            </p>

            <div className="mt-8 flex flex-col gap-4 blur-reveal sm:flex-row sm:items-center justify-center w-full" style={{ transitionDelay: "700ms" }}>
              <Button
                asChild
                variant="apple"
                size={isMobile ? "default" : "lg"}
                className="inline-flex items-center justify-center gap-2 text-sm sm:text-base px-6 sm:px-10 py-3 sm:py-4 h-auto animated-button font-medium w-full sm:w-auto"
              >
                <a
                  href="https://www.followop.com.br/register"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Assinar a followop
                  <span className="bg-[#2D2D4A] text-white p-1 rounded-full flex items-center justify-center w-5 h-5 ml-1">
                    <ArrowRight size={12} />
                  </span>
                </a>
              </Button>


            </div>

            <div className="mt-8 w-full blur-reveal" style={{ transitionDelay: "800ms" }}>
              <SystemFeatures />
            </div>
          </div>

          <div className="w-full max-w-5xl mt-12 sm:mt-16 blur-reveal" style={{ transitionDelay: "900ms" }}>
            <InteractiveDashboard />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
