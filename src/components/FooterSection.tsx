import { MessageCircle, ArrowUp } from "lucide-react";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";

const FooterSection = () => {
  const ref = useScrollAnimate();

  return (
    <footer id="contact" className="bg-black border-t border-zinc-800 py-16 px-6 relative" dir="rtl" ref={ref}>
      <div className="absolute inset-0 animate-shimmer opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-right scroll-animate-right">
            <a href="#" className="flex items-center gap-0.5 justify-center md:justify-start mb-4">
              <span className="font-heading text-2xl font-light tracking-tight text-zinc-400">digital</span>
              <span className="font-heading text-2xl font-black tracking-tight text-violet-500">.</span>
              <span className="font-heading text-2xl font-black tracking-tight text-white">Hbz</span>
            </a>
            <p className="text-zinc-500 font-body text-sm max-w-md">
              בניית אתרים מקצועית לעסקים קטנים. מהיר, יפה, ובמחיר הוגן.
            </p>
          </div>

          <div className="flex items-center gap-4 scroll-animate-left">
            <a
              href="https://wa.me/972556884471?text=%D7%94%D7%99%D7%99%2C%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%90%D7%AA%D7%A8%20%D7%9C%D7%A2%D7%A1%D7%A7%20%D7%A9%D7%9C%D7%99!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-violet-600 text-white px-8 py-4 rounded-lg font-heading font-semibold text-sm tracking-widest hover:bg-violet-500 transition-all animate-pulse-glow hover:scale-105"
            >
              <MessageCircle size={20} />
              דברו איתנו בוואטסאפ
            </a>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-3 border border-zinc-700 rounded-lg text-zinc-400 hover:text-violet-400 hover:border-violet-500 transition-all"
              aria-label="חזרה למעלה"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800/50 text-center">
          <p className="text-zinc-600 font-body text-xs">
            &copy; {new Date().getFullYear()} Hbz.digital. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
