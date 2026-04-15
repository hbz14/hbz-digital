import { motion } from "framer-motion";

const PricingSection = () => (
  <section id="pricing" className="py-32 px-6" dir="rtl">
    <div className="max-w-3xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8"
      >
        והמחיר?
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border border-border bg-background text-foreground p-16 inline-block"
      >
        <p className="font-heading text-5xl md:text-7xl font-bold text-foreground">
          999 ש״ח
        </p>
        <p className="text-sm font-body mt-2 opacity-50">לכל החיים!</p>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
