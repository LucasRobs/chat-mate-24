import { motion } from "framer-motion";
import { Target, TrendingUp, Zap, FileText } from "lucide-react";

const PlanBenefits = () => {
  const benefits = [
    {
      icon: Target,
      title: "Onde seu ecommerce tá perdendo dinheiro",
      description: "Base parada, CAC alto, recompra baixa - tudo mapeado.",
    },
    {
      icon: TrendingUp,
      title: "Quanto você pode recuperar nos próximos 90 dias",
      description: "Número real baseado na sua operação.",
    },
    {
      icon: Zap,
      title: "Estratégias prontas pra aplicar",
      description: "Não é teoria. É ação. Pronto pra implementar.",
    },
    {
      icon: FileText,
      title: "Plano completo de 2026 personalizado",
      description: "Baseado na SUA realidade, não genérico.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Seu plano personalizado vai mostrar:
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#16B763]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#16B763]/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-[#16B763]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PlanBenefits;
