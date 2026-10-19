import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "María González",
    role: "Madre de Santiago, 8 años",
    content: "Laura ha sido un apoyo invaluable para Santiago. En solo tres meses, hemos visto cómo su confianza ha crecido y puede comunicar mejor lo que siente. Su paciencia y dedicación realmente marcan la diferencia.",
    rating: 5,
  },
  {
    name: "Carlos Mendoza",
    role: "Padre de Valeria",
    content: "Como familia estábamos pasando por un momento difícil. Laura nos ayudó a entender mejor las necesidades de Valeria y nos dio herramientas prácticas que usamos todos los días. Realmente se nota su vocación.",
    rating: 5,
  },
  {
    name: "Ana Sofía Ruiz",
    role: "Adulta, terapia individual",
    content: "Trabajar con Laura me ayudó a desarrollar estrategias para manejar mi ansiedad. Su enfoque es cálido y profesional, siempre respetando mi ritmo. Me siento mucho más segura enfrentando el día a día.",
    rating: 5,
  },
];

const Stars = ({ rating }: { rating: number }) => (
  <div role="img" aria-label={`${rating} de 5 estrellas`} className="mb-4 text-lg">
    {Array.from({ length: 5 }, (_, i) => (
      <span key={i} aria-hidden className={i < rating ? "text-amber-500" : "text-muted-foreground/40"}>
        ★
      </span>
    ))}
  </div>
);

const Testimonials = () => (
  <section id="testimonials" aria-labelledby="testimonials-title" className="bg-background py-20">
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h2 id="testimonials-title" className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          Historias de transformación
        </h2>
        <p className="mb-3 text-lg text-muted-foreground">
          Más de 20 familias han confiado en Laura para acompañarlos en su proceso de bienestar emocional.
        </p>
        <p className="text-lg text-muted-foreground">Estas son algunas de sus experiencias con nuestro servicio personalizado.</p>
      </div>

      <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <li key={t.name} className="flex">
            <Card className="w-full border-0 bg-gradient-to-br from-card to-surface shadow-md">
              <CardContent className="p-6">
                <figure>
                  <Stars rating={t.rating} />
                  <blockquote className="mb-4 italic leading-relaxed text-muted-foreground">“{t.content}”</blockquote>
                  <figcaption className="border-t pt-4">
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </figcaption>
                </figure>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>

      <div className="mt-12 text-center">
        <p className="inline-flex flex-wrap items-center justify-center gap-x-2 rounded-full bg-gradient-to-r from-teal-50 to-blue-50 px-6 py-3 dark:from-teal-950/50 dark:to-blue-950/50">
          <span aria-hidden className="text-amber-500">★</span>
          <span className="font-semibold text-foreground">4.9/5</span>
          <span className="text-muted-foreground">• Más de 20 familias atendidas</span>
        </p>
      </div>
    </div>
  </section>
);

export default Testimonials;
