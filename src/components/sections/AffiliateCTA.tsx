
import { Link } from "react-router-dom";
import { Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AffiliateCTA() {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-10 rounded-3xl bg-gray-50/50 border border-gray-100 hover:border-[#A2DE5D]/30 transition-all duration-300 group">
          <div className="flex items-start md:items-center gap-5">
            <div className="w-12 h-12 bg-[#A2DE5D]/10 rounded-2xl flex items-center justify-center shrink-0 border border-[#A2DE5D]/20 group-hover:scale-110 transition-transform">
              <Users className="text-[#16B763]" size={24} />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-tight">
                Quer monetizar suas indicações? <span className="text-[#16B763]">Conheça o Clube de Afiliados Followop</span>
              </h3>
              <p className="text-gray-500 text-sm md:text-base max-w-lg font-light">
                Ganhe 15% de comissão recorrente por cada cliente ativo indicado por você.
              </p>
            </div>
          </div>
          
          <div className="shrink-0 w-full md:w-auto">
            <Button
              asChild
              variant="apple"
              className="inline-flex items-center justify-center gap-2 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 h-auto animated-button font-medium w-full sm:w-auto hover:scale-105 active:scale-95 shadow-lg shadow-[#A2DE5D]/20 transition-all cursor-pointer"
            >
              <a href="/afiliados">
                QUERO CONHECER O CLUBE
                <span className="bg-[#33334F] text-white p-1 rounded-full flex items-center justify-center w-5 h-5 ml-1">
                  <ArrowRight size={12} />
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
