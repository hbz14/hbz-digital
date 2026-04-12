import { motion } from "framer-motion";
import { Zap, Layers, Coffee } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "מהירות",
    subtitle: "Speed",
    desc: "Professional design and deployment in record time.",
  },
  {
    icon: Layers,
    title: "פשטות",
    subtitle: "Simplicity",
    desc: "User-friendly interfaces for you and your clients.",
  },
  {
    icon: Coffee,
    title: "נוחות",
    subtitle: "Comfort",
    desc: "A seamless process that handles the tech while you focus on your business.",
  },
];

const PillarsSection = () => (
  <section id="pillars" className="py-32 px-6">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
      {pillars.map((p, i) => (
        <motion.div
          key={p.subtitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          className="text-center"
        >
          <p.icon className="mx-auto mb-6 text-foreground" size={28} strokeWidth={1.5} />
          <h3 className="font-heading text-2xl font-bold text-foreground" dir="rtl">
            {p.title}
          </h3>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1 mb-4">
            {p.subtitle}
          </p>
          <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-xs mx-auto">
            {p.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default PillarsSection;
