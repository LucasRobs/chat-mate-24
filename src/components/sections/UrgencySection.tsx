import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown } from "lucide-react";

const UrgencySection = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <span className="text-sm font-semibold text-red-700">2026 não vai esperar você agir</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            A conta não fecha agora, imagina em junho.
          </h2>

          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed mb-8">
            Ecommerce que não se adapta, quebra. Simples assim.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center shrink-0">
                <TrendingDown className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  O custo por lead explodiu
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Quem não automatiza, perde. Sua margem está sendo corroída dia após dia enquanto seus concorrentes já estão usando IA para vender mais com menos tráfego.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UrgencySection;
