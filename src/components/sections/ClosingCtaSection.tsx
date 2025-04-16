import { useIsMobile } from "@/hooks/use-mobile";

const ClosingCtaSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 sm:py-16 bg-white border-t border-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none backdrop-blur-[1px]">
        <div className="absolute inset-0 opacity-5 impulso-pattern"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 reveal">
          Menos trabalho manual, <span className="text-primary">mais vendas</span>!
        </h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 reveal">
          Comece agora e aumente suas vendas no WhatsApp!
        </p>
        <div className="mt-6 sm:mt-8 reveal">
          <a
            href="https://calendar.app.google/u1BC1ghvHA7LXS2CA"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-primary hover:bg-primary/90 btn-hover text-white font-medium text-base sm:text-lg rounded backdrop-blur-sm ${
              isMobile ? "h-10 px-4 py-2" : "h-11 px-8 py-6"
            }`}
          >
            Agende uma reunião estratégica
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClosingCtaSection;
