import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "תיק עבודות", href: "#projects" },
  { label: "למה אנחנו?", href: "#pillars" },
  { label: "צור קשר", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-zinc-800/50"
          : "bg-transparent"
      }`}
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-0.5">
          <span className="font-heading text-xl font-light tracking-tight text-zinc-300">digital</span>
          <span className="font-heading text-xl font-black tracking-tight text-violet-500">.</span>
          <span className="font-heading text-xl font-black tracking-tight text-white">Hbz</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-heading font-medium text-zinc-400 hover:text-violet-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-zinc-300 hover:text-violet-400 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="תפריט"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-zinc-800/50 px-6 py-4 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-base font-heading text-zinc-300 hover:text-violet-400 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
