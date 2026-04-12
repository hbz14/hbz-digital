import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Landing Page",
    price: "---",
    features: ["SEO Ready", "Mobile Optimized", "WhatsApp Integration"],
  },
  {
    name: "Business Site",
    price: "---",
    features: ["SEO Ready", "Mobile Optimized", "WhatsApp Integration", "Multi-page Structure", "Contact Forms"],
    featured: true,
  },
  {
    name: "Premium Custom",
    price: "---",
    features: ["SEO Ready", "Mobile Optimized", "WhatsApp Integration", "Custom Functionality", "Priority Support", "Analytics Dashboard"],
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-16 text-center"
      >
        Service Packages
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`border p-8 flex flex-col ${
              t.featured
                ? "border-foreground bg-primary text-primary-foreground"
                : "border-border bg-background text-foreground"
            }`}
          >
            <h3 className="font-heading font-bold text-lg">{t.name}</h3>
            <p className="font-heading text-3xl font-bold mt-4 mb-8">{t.price}</p>
            <ul className="space-y-3 flex-1">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm font-body">
                  <Check size={16} strokeWidth={2} />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
