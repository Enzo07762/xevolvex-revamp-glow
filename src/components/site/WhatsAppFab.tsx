import { MessageCircle } from "lucide-react";
import { site } from "@/content/site";

export function WhatsAppFab() {
  const href = `https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hola XEVOLVEX, quiero información sobre sus servicios de telemática.",
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 border border-border bg-card/95 px-4 py-3 font-display text-xs font-semibold uppercase tracking-[0.16em] text-foreground shadow-panel backdrop-blur transition-transform hover:-translate-y-0.5"
      aria-label="Escribir por WhatsApp"
    >
      <MessageCircle className="h-4 w-4 text-ok" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
