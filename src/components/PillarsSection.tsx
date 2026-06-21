import { Zap, Clock, HeartHandshake, Smartphone } from "lucide-react";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";

const pillars = [
  {
    icon: Zap,
    title: "מחיר נגיש",
    desc: "אנחנו מאמינים שכל עסק קטן מגיע לנוכחות דיגיטלית איכותית — בלי לשבור את הקופה. אין עלויות נסתרות, אין הפתעות.",
    tag: "ללא תשלום נסתר",
  },
  {
    icon: Clock,
    title: "אספקה מהירה",
    desc: "האתר שלכם יהיה מוכן תוך ימים בודדים. אנחנו עובדים מהר, בלי לפשר על איכות — כי זמן הוא כסף בשבילכם.",
    tag: "ימים ספורים בלבד",
  },
  {
    icon: Smartphone,
    title: "מותאם לנייד",
    desc: "מעל 80% מהגולשים מגיעים מהסמארטפון. כל אתר שאנחנו בונים נראה מושלם על כל מסך — מובייל, טאבלט ומחשב.",
    tag: "100% רספונסיבי",
  },
  {
    icon: HeartHandshake,
    title: "שירות אישי",
    desc: "אתם לא עוד לקוח אנונימי. אנחנו צמודים אליכם לאורך כל הדרך — מהרעיון הראשון ועד שהאתר עולה לאוויר ומעבר לכך.",
    tag: "ליווי מלא",
  },
];

const animClasses = [
  "scroll-animate-left",
  "scroll-animate-right",
  "scroll-animate-left",
  "scroll-animate-right",
];

const PillarsSection = () => {
  const ref = useScrollAnimate();

  return (
    <section id="pillars" className="py-32 px-6 bg-white" dir="rtl" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 scroll-animate-blur">
          <p className="text-xs font-heading font-semibold tracking-[0.3em] text-violet-600 uppercase mb-4">
            למה Hbz.digital
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-zinc-900">
            הסיבות שבחרו בנו
          </h2>
          <p className="mt-4 text-zinc-500 font-body max-w-xl mx-auto">
            10+ עסקים כבר בחרו בנו. הנה מה שהופך אותנו לאחרים.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`${animClasses[i]} stagger-${i + 1} bg-zinc-50 border border-zinc-200 p-8 rounded-lg group hover:border-violet-400 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 hover-tilt`}
            >
              <div className="flex items-start gap-5">
                <div className="bg-violet-100 p-3 rounded-lg group-hover:bg-violet-600 group-hover:scale-110 transition-all duration-300">
                  <p.icon size={22} strokeWidth={1.5} className="text-violet-600 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading text-xl font-bold text-zinc-900">{p.title}</h3>
                    <span className="text-xs font-heading font-semibold text-violet-600 bg-violet-100 px-2 py-1 rounded">{p.tag}</span>
                  </div>
                  <p className="text-sm text-zinc-500 font-body leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
