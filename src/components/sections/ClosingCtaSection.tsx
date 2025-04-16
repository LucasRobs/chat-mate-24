import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight } from "lucide-react";

const ClosingCtaSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 sm:py-16 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none backdrop-blur-[1px]">
        <div className="absolute inset-0 opacity-5 bg-gray-100"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
          Menos trabalho manual, <span className="text-primary">mais vendas</span>!
        </h2>

        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
          Comece agora e aumente suas vendas no WhatsApp!
        </p>

        <div className="mt-6 sm:mt-8">
          <a
            href="https://calendar.app.google/u/1BC1ghvHA7LXS2CA"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium text-base sm:text-lg rounded-full transition ${
              isMobile ? "h-10 px-4 py-2" : "h-11 px-8 py-6"
            }`}
          >
            Quero agendar uma reunião estratégica
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClosingCtaSection;
