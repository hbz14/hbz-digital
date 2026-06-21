import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import hachatziImg from "@/assets/hachatzi.png";

const ShowcaseSection = () => (
  <section className="bg-black/[0.96] overflow-hidden" dir="rtl">
    <ContainerScroll
      titleComponent={
        <>
          <p className="text-xs font-heading font-semibold tracking-[0.3em] text-violet-400 uppercase mb-4">
            חוויה דיגיטלית
          </p>
          <h2 className="font-heading text-4xl md:text-[5rem] font-bold leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-400">
            אתרים שמדברים
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-600">
              בשביל העסק שלכם
            </span>
          </h2>
        </>
      }
    >
      <img
        src={hachatziImg}
        alt="showcase"
        className="mx-auto rounded-2xl object-cover h-full w-full object-top"
        draggable={false}
      />
    </ContainerScroll>
  </section>
);

export default ShowcaseSection;
