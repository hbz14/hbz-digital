import { motion } from "framer-motion";

const projects = [
  { title: "Nina Mahr", desc: "Aesthetics & Cosmetics — A premium digital presence." },
  { title: "Abraham's Bar", desc: "Nightlife & Hospitality — Modern operational platform." },
  { title: "Boutique Fitness Studio", desc: "Optimized conversion-focused landing page." },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-32 px-6 bg-secondary">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-16 text-center"
      >
        Digital Solutions Provided
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-background border border-border group"
          >
            <div className="aspect-[4/3] bg-muted flex items-center justify-center">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Preview
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-heading font-bold text-lg text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 font-body leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground mt-16 max-w-lg mx-auto font-body leading-relaxed">
        Every project is a result of precise communication and strategic planning with business owners nationwide.
      </p>
    </div>
  </section>
);

export default PortfolioSection;
