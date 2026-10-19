import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/#services", label: "Servicios" },
  { href: "/#benefits", label: "Resultados" },
  { href: "/#testimonials", label: "Testimonios" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => mq.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  const linkClass =
    "rounded-md px-1 py-2 font-medium text-foreground/80 transition-colors hover:text-primary";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled || open
          ? "bg-background/90 py-3 shadow-md backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <nav aria-label="Principal" className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="rounded-md text-xl font-bold text-primary" onClick={() => setOpen(false)}>
          Alarcón CBE
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </a>
          ))}
          <ThemeToggle />
          <Button asChild className="rounded-full px-6">
            <a href="/#contact">Agendar cita</a>
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Button
            ref={toggleRef}
            variant="ghost"
            size="icon"
            className="size-11"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X aria-hidden /> : <Menu aria-hidden />}
          </Button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="absolute left-0 right-0 top-full flex animate-in flex-col gap-2 border-t bg-background p-4 shadow-lg slide-in-from-top-5 md:hidden"
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`${linkClass} py-3`} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <Button asChild className="h-12 w-full rounded-full">
            <a href="/#contact" onClick={() => setOpen(false)}>
              Agendar cita
            </a>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
