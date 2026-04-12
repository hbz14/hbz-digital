import { MessageCircle } from "lucide-react";

const FooterSection = () => (
  <footer id="contact" className="bg-primary text-primary-foreground py-24 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
        Ready to elevate your brand?
      </h2>

      <p className="text-sm opacity-70 font-body mb-10 max-w-md mx-auto leading-relaxed">
        Serving businesses nationwide across Israel. We come to you, wherever you are.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="http://wa.me/972556884471"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-primary-foreground bg-primary-foreground text-primary px-8 py-3 text-sm font-heading font-semibold uppercase tracking-widest hover:bg-transparent hover:text-primary-foreground transition-colors"
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>

        <a
          href="https://www.instagram.com/hbz.digital/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-primary-foreground px-8 py-3 text-sm font-heading font-semibold uppercase tracking-widest hover:bg-primary-foreground hover:text-primary transition-colors"
        >
          Instagram
        </a>
      </div>

      <p className="mt-16 text-xs opacity-50 font-body">
        © 2026 HBZ digital
      </p>
    </div>
  </footer>
);

export default FooterSection;
