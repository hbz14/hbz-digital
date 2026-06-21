import { Suspense, lazy } from "react";
import { MagnetizeButton } from "@/components/ui/magnetize-button";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { ShaderAnimation } from "@/components/ui/shader-animation";

const Spline = lazy(() => import("@splinetool/react-spline"));

const stats = [
  { number: "10+", label: "אתרים שנבנו" },
  { number: "ימים", label: "זמן אספקה ממוצע" },
  { number: "100%", label: "שביעות רצון" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-black" dir="rtl">
    {/* Shader background - hidden on mobile for performance */}
    <div className="absolute inset-0 opacity-30 hidden md:block">
      <ShaderAnimation />
    </div>

    <Spotlight className="-top-40 right-0 md:right-60 md:-top-20" fill="#8b5cf6" />
    <BackgroundPaths />

    <div className="relative z-10 max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row items-center gap-8">
      {/* Text side */}
      <div className="flex-1 text-center md:text-right">
        <p className="text-sm font-heading font-semibold tracking-[0.2em] text-violet-400 mb-6 animate-fade-in">
          בניית אתרים לעסקים קטנים
        </p>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400 animate-fade-in-up stagger-1">
          אתר שעובד
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-600 glow-text">בשבילך.</span>
        </h1>

        <p className="mt-8 text-base md:text-lg text-zinc-400 font-body max-w-xl mx-auto md:mx-0 leading-relaxed animate-fade-in-up stagger-3">
          מספרות, בתי קפה, קוסמטיקה ועסקים קטנים — אנחנו בונים אתרים מהירים,
          יפים ומותאמים לנייד. במחיר שכל עסק יכול להרשות לעצמו.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-fade-in-up stagger-4">
          <a href="https://wa.me/972556884471?text=%D7%94%D7%99%D7%99%2C%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%90%D7%AA%D7%A8%20%D7%9C%D7%A2%D7%A1%D7%A7%20%D7%A9%D7%9C%D7%99!" target="_blank" rel="noopener noreferrer">
            <MagnetizeButton className="bg-violet-600 text-white hover:bg-violet-500 animate-pulse-glow">
              בואו נדבר
            </MagnetizeButton>
          </a>
          <a href="#projects">
            <MagnetizeButton className="border border-zinc-700 text-zinc-300 hover:border-violet-500 hover:text-violet-400">
              תיק עבודות
            </MagnetizeButton>
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-zinc-800 pt-8 max-w-md mx-auto md:mx-0">
          {stats.map((s, i) => (
            <div key={s.label} className={`text-center md:text-right animate-count-up stagger-${i + 5}`}>
              <div className="font-heading text-3xl font-bold text-white">{s.number}</div>
              <div className="text-xs text-zinc-500 mt-1 font-body">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Spline side - hidden on mobile */}
      <div className="hidden md:block flex-1 h-[500px] lg:h-[600px] relative animate-fade-in-up stagger-2">
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-10 h-10 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
            </div>
          }
        >
          <Spline
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </Suspense>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in stagger-8">
      <span className="text-xs text-zinc-500 font-body">גלול למטה</span>
      <div className="w-5 h-8 border-2 border-zinc-600 rounded-full flex justify-center pt-1">
        <div className="w-1.5 h-1.5 bg-violet-500 rounded-full animate-float" />
      </div>
    </div>
  </section>
);

export default HeroSection;
