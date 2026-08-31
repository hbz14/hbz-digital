import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveLeft, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP =
  "https://wa.me/972556884471?text=%D7%94%D7%99%D7%99%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%93%D7%95%D7%92%D7%9E%D7%94%20%D7%9C%D7%90%D7%AA%D7%A8%20%D7%9C%D7%A2%D7%A1%D7%A7%20%D7%A9%D7%9C%D7%99.%20%D7%A9%D7%9D%20%D7%94%D7%A2%D7%A1%D7%A7%3A%20";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["מרשים", "מהיר", "פשוט", "יפה", "שמוכר"], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber(titleNumber === titles.length - 1 ? 0 : titleNumber + 1);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full bg-background" dir="rtl">
      <div className="container mx-auto">
        <div className="flex gap-8 py-24 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-2" asChild>
              <a href="#projects">
                תיק העבודות שלנו <MoveLeft className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-heading font-bold">
              <span className="text-foreground">אתר לעסק שלך</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold text-primary"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > index ? 150 : -150, opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              מספרות, בתי קפה, קוסמטיקה ועסקים קטנים — אנחנו בונים אתרים מהירים,
              יפים ומותאמים לנייד, במחיר שכל עסק יכול להרשות לעצמו.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="gap-3" variant="outline" asChild>
              <a href="tel:+972556884471">
                דברו איתנו <PhoneCall className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" className="gap-3" asChild>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                שלחו שם עסק וקבלו דוגמה <MoveLeft className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
