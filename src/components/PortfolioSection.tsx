import { useScrollAnimate } from "@/hooks/useScrollAnimate";
import ninaImg from "@/assets/nina.png";
import valeriaImg from "@/assets/valeria.png";
import hachatziImg from "@/assets/hachatzi.png";

const projects = [
  { title: "נינה קוסמטיקאית", desc: "אתר תדמית ונוכחות דיגיטלית יוקרתית.", image: ninaImg },
  { title: "ולריה קוסמטיקאית", desc: "פלטפורמת תדמית ונוכחות דיגיטלית מקצועית.", image: valeriaImg },
  { title: "החצי השני - בית קפה", desc: "אתר לחנות ולפרסום בית הקפה.", image: hachatziImg },
];

const animClasses = ["scroll-animate-rotate", "scroll-animate-scale", "scroll-animate-rotate"];

const PortfolioSection = () => {
  const ref = useScrollAnimate();

  return (
    <section id="portfolio" className="py-32 px-6 bg-white" dir="rtl" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-zinc-900 mb-4 text-center scroll-animate-blur">
          פתרונות דיגיטליים
        </h2>
        <p className="text-center text-zinc-500 font-body mb-16 scroll-animate stagger-1">
          דוגמאות לאתרי תדמית שבנינו ללקוחות
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`${animClasses[i]} stagger-${i + 1} bg-zinc-50 border border-zinc-200 rounded-lg group overflow-hidden hover:shadow-xl hover:shadow-violet-500/10 hover:border-violet-300 transition-all duration-500 hover-tilt`}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-zinc-900 group-hover:text-violet-600 transition-colors">{p.title}</h3>
                <p className="text-sm text-zinc-500 mt-2 font-body leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-zinc-400 mt-16 max-w-lg mx-auto font-body leading-relaxed scroll-animate">
          כל פרויקט הוא תוצאה של תקשורת מדויקת ותכנון אסטרטגי עם בעלי עסקים ברחבי הארץ.
        </p>
      </div>
    </section>
  );
};

export default PortfolioSection;
