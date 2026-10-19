import { useEffect, useState } from "react";
import { whatsappUrl } from "@/lib/site";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById("contact");
      const pastHero = window.scrollY > window.innerHeight * 0.6;
      const contactTop = contact ? contact.getBoundingClientRect().top + window.scrollY : Infinity;
      setIsVisible(pastHero && window.scrollY + window.innerHeight / 2 < contactTop);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp (se abre en una pestaña nueva)"
      className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-[max(1.5rem,env(safe-area-inset-right))] z-50 flex size-14 items-center justify-center rounded-full bg-green-700 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-800 animate-in fade-in zoom-in"
    >
      <img src="/wtp_logo.svg" alt="" width={32} height={32} className="size-8" />
    </a>
  );
};

export default WhatsAppFloat;
