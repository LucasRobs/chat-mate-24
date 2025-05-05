
import React from "react";
import { Users, MessageSquare, BarChart2, ArrowRight, Bell, Calendar, CheckCircle } from "lucide-react";
import DashboardCard from "@/components/ui-custom/DashboardCard";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { ResponsiveContainer, AreaChart, Area, Tooltip, XAxis, YAxis } from "recharts";

interface ClosingCtaSectionProps {
  activityData: Array<{ name: string; value: number }>;
}

const ClosingCtaSection = ({ activityData }: ClosingCtaSectionProps) => {
  const isMobile = useIsMobile();
  const simplifiedData = isMobile ? activityData.filter((_, idx) => idx % 2 === 0) : activityData;

  const handleViewMore = () => {
    window.open("https://www.followop.com.br/register", "_blank");
  };

  return (
    <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow border border-gray-100 transition-all duration-500 bg-white">
      <div className="p-4 flex-1 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png" alt="followop Logo" className="h-4 sm:h-5" />
            <span className="font-medium text-xs text-gray-800">Visão Geral</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-xs text-primary/80 bg-primary/10 px-2 py-0.5 rounded-full">Premium</div>
            <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-xs font-medium text-primary">AU</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <DashboardCard title="Atendimentos" value={329} icon={Users} trend={+12} />
          <DashboardCard title="Mensagens" value={2559} icon={MessageSquare} trend={+28} />
          <DashboardCard title="Conversões" value={43} icon={BarChart2} trend={+8} />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white rounded-lg p-2 shadow-sm border flex items-center">
            <div className="w-6 h-6 bg-blue-50 rounded-lg flex items-center justify-center mr-2">
              <Bell className="w-4 h-4 text-blue-500" />
            </div>
            <div>
              <p className="text-[11px] text-gray-500">Notificações</p>
              <p className="text-xs font-medium">12 novas</p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-2 shadow-sm border flex items-center">
            <div className="w-6 h-6 bg-green-50 rounded-lg flex items-center justify-center mr-2">
              <Calendar className="w-4 h-4 text-green-500" />
            </div>
            <div>
              <p className="text-[11px] text-gray-500">Agendamentos</p>
              <p className="text-xs font-medium">5 hoje</p>
            </div>
          </div>
        </div>

        <div className="w-full h-[120px] sm:h-[160px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={simplifiedData}>
              <defs>
                <linearGradient id="colorPrimary" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="10%" stopColor="#00af6b" stopOpacity={0.4} />
                  <stop offset="90%" stopColor="#00af6b" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Tooltip
                contentStyle={{ backgroundColor: "white", border: "1px solid #e2e8f0", fontSize: "12px" }}
                labelStyle={{ color: "#333" }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#00af6b"
                fill="url(#colorPrimary)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-end">
          <Button
            onClick={handleViewMore}
            variant="minimal"
            size="sm"
            className="text-xs font-medium flex items-center gap-1"
          >
            Ver Mais
            <ArrowRight size={10} />
          </Button>
        </div>
      </div>

      <div className="bg-[#f5f7f9] p-5 sm:p-8 border-t border-gray-100">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img
                src="/lovable-uploads/c5206104-ee78-44ed-b432-e4d2a4bb0863.png"
                alt="Meta logo"
                className="h-6"
              />
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">
                Certificada pela Meta
              </span>
            </div>
            
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">
              Parceira Oficial da Meta (WhatsApp Business API)
            </h2>
            
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                <span><strong>Baixo risco</strong> de banimento</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                <span>Conexão <strong>estável e autorizada</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                <span>Suporte direto da <strong>infraestrutura oficial</strong></span>
              </li>
            </ul>
            
            <div className="mt-5">
              <Button
                onClick={handleViewMore}
                className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-full flex items-center gap-2"
              >
                TESTE GRÁTIS 7 DIAS
                <ArrowRight size={14} />
              </Button>
            </div>
          </div>
          
          <div className="hidden md:flex justify-end">
            <img
              src="/lovable-uploads/c5206104-ee78-44ed-b432-e4d2a4bb0863.png"
              alt="Meta"
              className="h-32 sm:h-40 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClosingCtaSection;
