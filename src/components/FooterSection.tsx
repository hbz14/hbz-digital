import { Instagram, ArrowUp } from "lucide-react";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";

const FooterSection = () => {
  const ref = useScrollAnimate();

  return (
    <footer id="contact" className="bg-secondary border-t border-border py-16 px-6 relative" dir="rtl" ref={ref}>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-right scroll-animate-right">
            <a href="#" className="flex items-center gap-0.5 justify-center md:justify-start mb-4">
              <span className="font-heading text-2xl font-light tracking-tight text-muted-foreground">digital</span>
              <span className="font-heading text-2xl font-black tracking-tight text-primary">.</span>
              <span className="font-heading text-2xl font-black tracking-tight text-foreground">Hbz</span>
            </a>
            <p className="text-muted-foreground font-body text-sm max-w-md">
              בניית אתרים מקצועית לעסקים קטנים. מהיר, יפה, ובמחיר הוגן.
            </p>
          </div>

          <div className="flex items-center gap-4 scroll-animate-left">
            <a
              href="https://www.instagram.com/hbz.digital/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold text-sm tracking-widest hover:opacity-90 transition-all hover:scale-105"
            >
              <Instagram size={20} />
              עקבו אחרינו באינסטגרם
            </a>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-3 border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-all"
              aria-label="חזרה למעלה"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground font-body text-xs">
            &copy; {new Date().getFullYear()} Hbz.digital. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
