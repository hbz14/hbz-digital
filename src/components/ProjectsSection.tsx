import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import weinsImg from "@/assets/weins.png";
import lavitaImg from "@/assets/lavita.png";
import ninaMahrImg from "@/assets/nina-mahr.png";
import barberIsraelImg from "@/assets/barber-israel.png";
import hetzisheniImg from "@/assets/hetzisheni.png";

const projects = [
  { title: "Weins Barbershop", image: weinsImg, link: "https://weins-barbershop.lovable.app" },
  { title: "LaVita Cosmetics", image: lavitaImg, link: "https://lavita-beauty-glow.lovable.app" },
  { title: "Nina Mahr Beauty", image: ninaMahrImg, link: "https://nina-mahr-beauty.lovable.app" },
  { title: "Barber Shop Israel", image: barberIsraelImg, link: "https://barber-shop-israel.lovable.app" },
  { title: "Hetzi Sheni", image: hetzisheniImg, link: "https://hetzisheni.lovable.app/" },
];

const ProjectsSection = () => (
  <section id="projects" className="py-32 px-6 bg-background" dir="rtl">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-20 text-center"
      >
        הפרויקטים שלנו
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative bg-card border border-border overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
          >
            {/* Image */}
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
              <span className="text-background font-heading text-lg font-bold">צפייה באתר</span>
              <span className="inline-flex items-center gap-2 border border-background/40 text-background px-5 py-2 text-sm font-body transition-colors hover:bg-background/10">
                למעבר לאתר <ExternalLink size={14} />
              </span>
            </div>

            {/* Title bar */}
            <div className="p-5 border-t border-border">
              <h3 className="font-heading font-bold text-base text-foreground">{p.title}</h3>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center text-muted-foreground font-body text-sm mt-16"
      >
        גם האתר הזה עוצב ונבנה על ידינו!!
      </motion.p>
    </div>
  </section>
);

export default ProjectsSection;
