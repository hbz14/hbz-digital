import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import cafeBarakaiImg from "@/assets/cafe-barakai.png";

const ShowcaseSection = () => (
  <section className="bg-background overflow-hidden" dir="rtl">
    <ContainerScroll
      titleComponent={
        <>
          <p className="text-xs font-heading font-semibold tracking-[0.3em] text-primary uppercase mb-4">
            חוויה דיגיטלית
          </p>
          <h2 className="font-heading text-4xl md:text-[5rem] font-bold leading-none text-foreground">
            אתרים שמדברים
            <br />
            <span className="text-primary">בשביל העסק שלכם</span>
          </h2>
        </>
      }
    >
      <img
        src={cafeBarakaiImg}
        alt="קפה ברקאי - בית קפה בים המלח"
        className="mx-auto rounded-2xl object-cover h-full w-full object-top"
        draggable={false}
      />
    </ContainerScroll>
  </section>
);

export default ShowcaseSection;
