import { motion } from "framer-motion";
import { Zap, Layers, Coffee } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "מהירות",
    desc: "עיצוב מקצועי והשקה בזמן שיא.",
  },
  {
    icon: Layers,
    title: "פשטות",
    desc: "ממשקים ידידותיים עבורך ועבור הלקוחות שלך.",
  },
  {
    icon: Coffee,
    title: "נוחות",
    desc: "תהליך חלק שמטפל בטכנולוגיה בזמן שאתה מתמקד בעסק שלך.",
  },
];

const PillarsSection = () => (
  <section id="pillars" className="py-32 px-6" dir="rtl">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
      {pillars.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          className="text-center"
        >
          <p.icon className="mx-auto mb-6 text-foreground" size={28} strokeWidth={1.5} />
          <h3 className="font-heading text-2xl font-bold text-foreground">
            {p.title}
          </h3>
          <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-xs mx-auto mt-4">
            {p.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default PillarsSection;
