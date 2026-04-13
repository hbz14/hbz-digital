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
        className="border border-border bg-background text-foreground p-16 inline-block relative"
      >
        {/* Old price with strikethrough */}
        <p className="font-heading text-5xl md:text-7xl font-bold text-muted-foreground/50 line-through decoration-destructive decoration-[3px]">
          999 ש״ח
        </p>
        <p className="text-sm font-body mt-2 opacity-50">לכל החיים!</p>

        {/* Animated bubble with new price */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 }}
          className="mt-8 relative inline-block"
        >
          {/* Pointer arrow */}
          <div
            className="absolute -top-3 right-1/2 translate-x-1/2 w-0 h-0"
            style={{
              borderLeft: "12px solid transparent",
              borderRight: "12px solid transparent",
              borderBottom: "12px solid #8B7D3C",
            }}
          />
          {/* Bubble */}
          <div className="bg-[#8B7D3C] text-white rounded-2xl px-10 py-8 shadow-lg shadow-[#8B7D3C]/30">
            <p className="font-heading text-5xl md:text-7xl font-bold">499 ש״ח</p>
            <p className="text-sm font-body mt-2 opacity-90">עכשיו מחיר מיוחד!</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
