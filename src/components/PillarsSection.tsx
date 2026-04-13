import { motion } from "framer-motion";
import { Zap, Layers, Coffee } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "מהירות",
    desc: "אנחנו מבינים שזמן הוא כסף. האתרים שלנו נטענים בשבריר שנייה ומספקים חווית גלישה חלקה ללקוח.",
  },
  {
    icon: Layers,
    title: "פשטות",
    desc: "ניהול האתר מעולם לא היה קל יותר. אנחנו יוצרים ממשק נקי וברור שמאפשר לכם להתמקד במה שחשוב - העסק שלכם.",
  },
  {
    icon: Coffee,
    title: "נוחות",
    desc: "הכל במקום אחד. התאמה מלאה לנייד, קישור ישיר לוואטסאפ ומערכת תיאום תורים קלה לשימוש.",
  },
];

const PillarsSection = () => (
  <section id="pillars" className="py-32 px-6" dir="rtl">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-heading text-4xl md:text-5xl font-bold text-foreground text-center mb-20"
      >
        למה לבחור ב-HBZ Digital?
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mb-20">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="text-center"
          >
            <p.icon
              className="mx-auto mb-6"
              size={28}
              strokeWidth={1.5}
              style={{ color: "#8B7D3C" }}
            />
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              {p.title}
            </h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-xs mx-auto">
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto text-base"
      >
        אנחנו לא רק בונים אתרים, אנחנו בונים פתרונות. ב-HBZ Digital אנחנו
        מתאימים את עצמנו לצרכים הייחודיים של כל עסק, ומציעים אתר יעיל, נגיש
        וממיר שהופך גולשים ללקוחות.
      </motion.p>
    </div>
  </section>
);

export default PillarsSection;
