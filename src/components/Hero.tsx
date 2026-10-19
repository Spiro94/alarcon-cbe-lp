import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const fullText = "bienestar emocional";

const Hero = () => {
  const [text, setText] = useState(fullText);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let index = 0;
    setText("");
    const interval = setInterval(() => {
      index++;
      setText(fullText.slice(0, index));
      if (index >= fullText.length) clearInterval(interval);
    }, 90);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-svh items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-background to-blue-50 dark:from-teal-950/60 dark:via-background dark:to-blue-950/50" aria-hidden />

      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -right-40 -top-40 size-96 rounded-full bg-teal-200/30 blur-3xl dark:bg-teal-500/10" />
        <div className="absolute -left-20 top-1/3 size-72 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-500/10" />
        <div className="absolute -bottom-40 right-1/3 size-80 rounded-full bg-purple-200/30 blur-3xl dark:bg-purple-500/10" />
        <img
          src="/bg_img.webp"
          alt=""
          width={1280}
          height={960}
          decoding="async"
          className="absolute inset-0 size-full object-cover opacity-10 mix-blend-multiply dark:opacity-5 dark:mix-blend-screen"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 pb-10 pt-28 text-center">
        <div className="mb-10 flex justify-center animate-in fade-in zoom-in duration-1000">
          <div className="rounded-3xl p-3 dark:bg-white/95">
            <img
              src="/main_logo.webp"
              alt="Alarcón CBE - Centro de Bienestar Emocional"
              width={640}
              height={225}
              fetchPriority="high"
              className="h-24 w-auto object-contain md:h-40"
            />
          </div>
        </div>

        <h1 id="hero-title" className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          <span className="block">Acompañamiento psicológico</span>
          <span className="block">desde el amor y el</span>
          <span className="block min-h-[1.2em] bg-gradient-to-r from-teal-700 via-blue-700 to-purple-700 bg-clip-text pb-2 text-transparent dark:from-teal-300 dark:via-blue-300 dark:to-purple-300">
            <span className="sr-only">{fullText}</span>
            <span aria-hidden>
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </span>
        </h1>

        <p className="mx-auto mb-4 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          En Alarcón CBE, en Piedecuesta, Santander, ofrecemos un refugio terapéutico para{" "}
          <strong className="font-semibold text-primary">niños, adolescentes, adultos, parejas y familias</strong>.
          Un espacio seguro para sanar, crecer y florecer.
        </p>
        <p className="mb-10 text-sm text-muted-foreground">Atención de lunes a viernes, 8:00 AM - 6:00 PM</p>

        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="h-14 rounded-full px-8 text-lg font-semibold shadow-lg">
            <a href="#contact">Agenda tu consulta hoy</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-14 rounded-full border-2 border-primary px-8 text-lg font-semibold text-primary">
            <a href="#services">Conoce nuestros servicios</a>
          </Button>
        </div>

        <a href="#services" aria-label="Ir a servicios" className="inline-flex rounded-full p-2 text-primary motion-safe:animate-bounce">
          <ArrowDown className="size-8" aria-hidden />
        </a>
      </div>
    </section>
  );
};

export default Hero;
