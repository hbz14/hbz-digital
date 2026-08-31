import { MagnetizeButton } from "@/components/ui/magnetize-button";

const stats = [
  { number: "6+", label: "סוגי עסקים" },
  { number: "ימים", label: "זמן אספקה ממוצע" },
  { number: "100%", label: "מותאם לנייד" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center bg-white" dir="rtl">
    <div className="relative z-10 max-w-4xl mx-auto w-full px-6 text-center md:text-right pt-24 pb-16">
      <p className="text-sm font-heading font-semibold tracking-[0.2em] text-violet-600 mb-6 animate-fade-in">
        בניית אתרים לעסקים קטנים
      </p>

      <h1 className="font-heading text-4xl md:text-6xl font-bold text-zinc-900 leading-tight animate-fade-in-up stagger-1">
        אתר שעובד בשבילך.
      </h1>

      <p className="mt-6 text-base md:text-lg text-zinc-600 font-body max-w-xl mx-auto md:mx-0 leading-relaxed animate-fade-in-up stagger-2">
        מספרות, בתי קפה, קוסמטיקה ועסקים קטנים — אנחנו בונים אתרים מהירים,
        יפים ומותאמים לנייד. במחיר שכל עסק יכול להרשות לעצמו.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-fade-in-up stagger-3">
        <a href="https://wa.me/972556884471?text=%D7%94%D7%99%D7%99%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%93%D7%95%D7%92%D7%9E%D7%94%20%D7%9C%D7%90%D7%AA%D7%A8%20%D7%9C%D7%A2%D7%A1%D7%A7%20%D7%A9%D7%9C%D7%99.%20%D7%A9%D7%9D%20%D7%94%D7%A2%D7%A1%D7%A7%3A%20" target="_blank" rel="noopener noreferrer">
          <MagnetizeButton className="bg-violet-600 text-white hover:bg-violet-500">
            שלחו שם עסק — ותקבלו דוגמה
          </MagnetizeButton>
        </a>
        <a href="#projects">
          <MagnetizeButton className="border border-zinc-300 text-zinc-700 hover:border-violet-500 hover:text-violet-600">
            תיק עבודות
          </MagnetizeButton>
        </a>
      </div>

      <div className="mt-16 grid grid-cols-3 gap-8 border-t border-zinc-200 pt-8 max-w-md mx-auto md:mx-0">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-right">
            <div className="font-heading text-3xl font-bold text-zinc-900">{s.number}</div>
            <div className="text-xs text-zinc-500 mt-1 font-body">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
