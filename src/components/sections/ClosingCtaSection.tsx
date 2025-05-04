
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MetaTechPartnerBadge = () => (
  <div className="flex items-center gap-2 bg-white shadow-md border border-gray-200 rounded-lg px-3 py-2 text-xs font-medium text-gray-700 hover:shadow-lg transition-shadow">
    <div className="w-5 h-5 flex items-center justify-center">
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M36 18C36 8.059 27.941 0 18 0C8.059 0 0 8.059 0 18C0 26.99 6.584 34.431 15.188 35.77V23.196H10.617V18H15.188V14.039C15.188 9.527 17.88 7.031 21.985 7.031C23.96 7.031 26.02 7.383 26.02 7.383V11.813H23.743C21.496 11.813 20.811 13.203 20.811 14.625V18H25.805L25.015 23.196H20.811V35.77C29.416 34.431 36 26.99 36 18Z" fill="#1877F2" />
        <path d="M25.015 23.196L25.805 18H20.812V14.625C20.812 13.203 21.496 11.813 23.743 11.813H26.02V7.383C26.02 7.383 23.96 7.031 21.985 7.031C17.879 7.031 15.188 9.527 15.188 14.039V18H10.617V23.196H15.188V35.77C16.104 35.924 17.044 36.001 18 36C18.956 36.001 19.896 35.924 20.812 35.77V23.196H25.015Z" fill="white" />
      </svg>
    </div>
    <span className="text-[#1877F2] font-semibold">Meta</span>
    <span className="text-gray-700">Tech Partner</span>
  </div>
);

const ClosingCtaSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-secondary">
          Menos trabalho manual, <span className="text-primary">mais vendas</span>!
        </h2>

        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600">
          Comece agora e aumente suas vendas no WhatsApp!
        </p>

        <div className="mt-4 sm:mt-6">
          <Button
            asChild
            variant="trial"
            className="inline-flex items-center justify-center gap-3 text-sm py-2.5 h-auto transform transition-all duration-300 hover:scale-105"
          >
            <a
              href="https://www.followop.com.br/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              TESTE GRÁTIS 7 DIAS
              <span className="bg-[#2D2D4A] text-white p-1.5 rounded-full">
                <ArrowRight size={12} />
              </span>
            </a>
          </Button>
        </div>

        <div className="mt-6 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <MetaTechPartnerBadge />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCtaSection;
