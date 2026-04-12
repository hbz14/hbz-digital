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
        <p className="font-heading text-6xl md:text-8xl font-bold">999 ש״ח</p>
        <p className="text-sm font-body mt-4 opacity-70">לכל החיים!</p>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
