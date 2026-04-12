import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-foreground"
    >
      HBZ digital
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mt-6 text-lg md:text-xl text-muted-foreground font-body max-w-xl"
      dir="rtl"
    >
      אתר שעובד בשביל הלקוח, במחיר שעובד בשבילך.
    </motion.p>

    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mt-10 inline-block border border-foreground bg-primary text-primary-foreground px-8 py-3 text-sm font-heading font-semibold uppercase tracking-widest hover:bg-background hover:text-foreground transition-colors"
    >
      Let's Talk
    </motion.a>
  </section>
);

export default HeroSection;
