import { ExternalLink } from "lucide-react";
import { useScrollAnimate } from "@/hooks/useScrollAnimate";
import { CircularGallery, type GalleryItem } from "@/components/ui/circular-gallery";

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

const galleryItems: GalleryItem[] = projects.map((p) => ({
  common: p.title,
  photo: { url: p.image, text: p.title },
  link: p.link,
}));

const ProjectsSection = () => {
  const ref = useScrollAnimate();

  return (
    <section id="projects" className="py-24 bg-background" dir="rtl" ref={ref}>
      <div className="text-center px-6 mb-10 scroll-animate">
        <p className="text-xs font-heading font-semibold tracking-[0.3em] text-primary uppercase mb-4">
          תיק עבודות
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
          הפרויקטים שלנו
        </h2>
        <p className="mt-4 text-muted-foreground font-body max-w-lg mx-auto">
          12 אתרים ללקוחות מכל רחבי הארץ — מספרות, בתי קפה, מאפיות, קוסמטיקה ועוד.
        </p>
      </div>

      <CircularGallery
        items={galleryItems}
        radius={620}
        autoRotateSpeed={0.03}
        className="h-[420px] md:h-[560px]"
      />


      <div className="max-w-6xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:border-primary/50 hover:bg-secondary"
            >
              <span className="font-heading text-sm font-semibold text-foreground">
                {p.title}
              </span>
              <ExternalLink
                size={15}
                className="shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
              />
            </a>
          ))}
        </div>

        <p className="text-center text-muted-foreground font-body text-sm mt-12">
          גם האתר הזה עוצב ונבנה על ידינו!
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
