import { useEffect, useRef } from "react";

const SCROLL_CLASSES = [
  "scroll-animate",
  "scroll-animate-left",
  "scroll-animate-right",
  "scroll-animate-scale",
  "scroll-animate-rotate",
  "scroll-animate-blur",
];

const SELECTOR = SCROLL_CLASSES.map((c) => `.${c}`).join(",");

export function useScrollAnimate() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    el.querySelectorAll(SELECTOR).forEach((child) => observer.observe(child));
    for (const cls of SCROLL_CLASSES) {
      if (el.classList.contains(cls)) {
        observer.observe(el);
        break;
      }
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
