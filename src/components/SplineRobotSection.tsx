import { Component, ReactNode, Suspense, lazy } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";

const Spline = lazy(() => import("@splinetool/react-spline"));

class SplineErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

const SplineRobotSection = () => {
  const ref = useScrollAnimate();

  return (
    <section className="relative w-full py-0 bg-black/[0.96] overflow-hidden" dir="rtl" ref={ref}>
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#8b5cf6" />
      <div className="absolute inset-0 animate-shimmer" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center min-h-0 md:min-h-[500px] relative z-10">
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center text-right scroll-animate-right">
          <p className="text-xs font-heading font-semibold tracking-[0.3em] text-violet-400 uppercase mb-4">
            טכנולוגיה מתקדמת
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
            אנחנו בונים את העתיד
          </h2>
          <p className="text-neutral-300 font-body leading-relaxed max-w-md">
            באמצעות כלים חדשניים ובינה מלאכותית, אנחנו יוצרים אתרים שלא רק נראים
            מדהים — אלא גם עובדים חכם. כל אתר מותאם אישית לעסק שלכם, עם ביצועים
            מהירים וחוויית משתמש ברמה הגבוהה ביותר. מהתאמה מלאה לכל גודל מסך,
            דרך אופטימיזציה למנועי חיפוש, ועד אינטגרציות עם וואטסאפ ורשתות
            חברתיות — אנחנו דואגים שהאתר שלכם יעבוד בשבילכם 24/7 ויביא לקוחות חדשים.
          </p>

          <a
            href="https://wa.me/972556884471?text=%D7%94%D7%99%D7%99%2C%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%90%D7%AA%D7%A8%20%D7%9C%D7%A2%D7%A1%D7%A7%20%D7%A9%D7%9C%D7%99!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-violet-600 text-white px-8 py-3 text-sm font-heading font-semibold tracking-widest rounded-lg hover:bg-violet-500 transition-all animate-pulse-glow w-fit scroll-animate stagger-5"
          >
            רוצים לשמוע עוד?
          </a>
        </div>

        <div className="hidden md:block flex-1 h-[350px] md:h-[500px] w-full relative scroll-animate-scale stagger-2">
          <SplineErrorBoundary
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <p className="text-neutral-400 font-body text-sm">אנימציה תלת-מימדית</p>
                </div>
              </div>
            }
          >
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
                </div>
              }
            >
              <Spline
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </Suspense>
          </SplineErrorBoundary>
        </div>
      </div>
    </section>
  );
};

export default SplineRobotSection;
