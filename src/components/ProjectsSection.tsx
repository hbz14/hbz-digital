import { ExternalLink } from "lucide-react";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";
import weinsImg from "@/assets/weins.png";
import lavitaImg from "@/assets/lavita.png";
import ninaMahrImg from "@/assets/nina-mahr.png";
import barberIsraelImg from "@/assets/barber-israel.png";
import hetzisheniImg from "@/assets/hetzisheni.png";
import ndBarberImg from "@/assets/nd-barber.png";
import aviadAmarImg from "@/assets/aviad-amar.png";
import eretzHatzviImg from "@/assets/eretz-hatzvi.png";
import someoneHairImg from "@/assets/someone-hair.png";
import ginaCafeImg from "@/assets/gina-cafe.png";
import refalShmuelImg from "@/assets/refal-shmuel.png";
import cafeBarakaiImg from "@/assets/cafe-barakai.png";


const projects = [
  { title: "Weins Barbershop", image: weinsImg, link: "https://weins-barbershop.lovable.app" },
  { title: "LaVita Cosmetics", image: lavitaImg, link: "https://lavita-beauty-glow.lovable.app" },
  { title: "Nina Mahr Beauty", image: ninaMahrImg, link: "https://nina-mahr-beauty.lovable.app" },
  { title: "Barber Shop Israel", image: barberIsraelImg, link: "https://barber-shop-israel.lovable.app" },
  { title: "Hetzi Sheni", image: hetzisheniImg, link: "https://hetzisheni.lovable.app/" },
  { title: "N.D Barbershop - מספרה בצפון", image: ndBarberImg, link: "https://ndbarber.lovable.app" },
  { title: "אביעד עמר - מספרה בשדרות", image: aviadAmarImg, link: "https://aviadamar-babershop.lovable.app" },
  { title: "מאפיית ארץ הצבי - מאפייה בצפון", image: eretzHatzviImg, link: "https://eretzhatzvibakery.lovable.app" },
  { title: "מספרה של איש אחד - מבשרת ציון", image: someoneHairImg, link: "https://somone-hair-salon.lovable.app" },
  { title: "קפה גינה - בית קפה ברמת גן", image: ginaCafeImg, link: "https://gina-cofee-shop.lovable.app" },
  { title: "רפאל שמואל — יזם ומנטור עסקי", image: refalShmuelImg, link: "https://refalshmuel.lovable.app/" },
  { title: "קפה ברקאי — בית קפה בים המלח", image: cafeBarakaiImg, link: "https://dessertbarakai.lovable.app/" },

];

const getAnimClass = (i: number) => {
  const col = i % 3;
  if (col === 0) return "scroll-animate-left";
  if (col === 1) return "scroll-animate";
  return "scroll-animate-right";
};

const ProjectsSection = () => {
  const ref = useScrollAnimate();

  return (
    <section id="projects" className="py-32 px-6 bg-black/[0.96] relative" dir="rtl" ref={ref}>
      <div className="absolute inset-0 animate-shimmer opacity-50" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 scroll-animate-blur">
          <p className="text-xs font-heading font-semibold tracking-[0.3em] text-violet-400 uppercase mb-4">
            תיק עבודות
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400">
            הפרויקטים שלנו
          </h2>
          <p className="mt-4 text-zinc-500 font-body max-w-lg mx-auto">
            12 אתרים ללקוחות מכל רחבי הארץ — מספרות, בתי קפה, מאפיות, קוסמטיקה ועוד.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${getAnimClass(i)} stagger-${(i % 6) + 1} group relative bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden cursor-pointer transition-all duration-500 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10 hover:scale-[1.03] hover:-translate-y-2`}
            >
              <div className="aspect-[16/10] overflow-hidden bg-zinc-800 flex items-center justify-center">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="bg-gradient-to-br from-violet-900/30 to-violet-600/10 w-full h-full flex items-center justify-center">
                    <span className="font-heading font-bold text-violet-400 text-lg">{p.title.split("—")[0].trim()}</span>
                  </div>
                )}
              </div>

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4 rounded-lg backdrop-blur-sm">
                <span className="text-white font-heading text-lg font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">צפייה באתר</span>
                <span className="inline-flex items-center gap-2 border border-violet-400/40 text-violet-300 px-5 py-2 text-sm font-body rounded-lg transition-all hover:bg-violet-500/20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  למעבר לאתר <ExternalLink size={14} />
                </span>
              </div>

              <div className="p-4 border-t border-zinc-800">
                <h3 className="font-heading font-bold text-sm text-zinc-300">{p.title}</h3>
              </div>
            </a>
          ))}
        </div>

        <p className="text-center text-zinc-600 font-body text-sm mt-16 scroll-animate">
          גם האתר הזה עוצב ונבנה על ידינו!
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
