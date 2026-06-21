import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/972556884471?text=%D7%94%D7%99%D7%99%2C%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%90%D7%AA%D7%A8%20%D7%9C%D7%A2%D7%A1%D7%A7%20%D7%A9%D7%9C%D7%99!"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 left-6 z-50 bg-violet-600 text-white p-4 rounded-full shadow-xl shadow-violet-500/30 hover:bg-violet-500 hover:scale-110 transition-all flex items-center gap-2 group animate-fade-in animate-pulse-glow"
    style={{ animationDelay: "1.5s", animationFillMode: "backwards" }}
    aria-label="WhatsApp"
  >
    <MessageCircle size={22} strokeWidth={2} />
    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-sm font-heading font-semibold">
      דברו איתנו
    </span>
  </a>
);

export default WhatsAppButton;
