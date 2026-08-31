import { Hero } from "@/components/ui/animated-hero";

const stats = [
  { number: "6+", label: "סוגי עסקים" },
  { number: "ימים", label: "זמן אספקה ממוצע" },
  { number: "100%", label: "מותאם לנייד" },
];

const HeroSection = () => (
  <section className="relative bg-background pt-10" dir="rtl">
    <Hero />

    <div className="max-w-2xl mx-auto px-6 pb-20 grid grid-cols-3 gap-8 border-t border-border pt-8">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <div className="font-heading text-3xl font-bold text-foreground">{s.number}</div>
          <div className="text-xs text-muted-foreground mt-1 font-body">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default HeroSection;
