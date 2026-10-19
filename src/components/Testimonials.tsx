import { Card, CardContent } from "@/components/ui/card";

// Testimonials are shown anonymized; publish them only with the written consent of each person.
const testimonials = [
  {
    name: "M. G.",
    role: "Madre de un niño de 8 años",
    content: "Alarcón CBE ha sido un apoyo invaluable para mi hijo. En solo tres meses, hemos visto cómo su confianza ha crecido y puede comunicar mejor lo que siente. Su paciencia y dedicación realmente marcan la diferencia.",
      },
  {
    name: "C. M.",
    role: "Padre de familia",
    content: "Como familia estábamos pasando por un momento difícil. Alarcón CBE nos ayudó a entender mejor las necesidades de nuestra hija y nos dio herramientas prácticas que usamos todos los días. Realmente se nota su vocación.",
      },
  {
    name: "A. S. R.",
    role: "Consultante adulta",
    content: "Trabajar con Laura me ayudó a desarrollar estrategias para manejar el estrés. Su enfoque es cálido y profesional, siempre respetando mi ritmo. Me siento mucho más segura enfrentando el día a día.",
      },
];

const Testimonials = () => (
  <section id="testimonials" aria-labelledby="testimonials-title" className="bg-background py-20">
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h2 id="testimonials-title" className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          Historias de transformación
        </h2>
        <p className="mb-3 text-lg text-muted-foreground">
          Familias y personas que han confiado en nosotros para acompañar su proceso de bienestar emocional.
        </p>
        <p className="text-lg text-muted-foreground">Estas son algunas de sus experiencias con nuestro servicio personalizado.</p>
      </div>

      <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <li key={t.name} className="flex">
            <Card className="w-full border-0 bg-gradient-to-br from-card to-surface shadow-md">
              <CardContent className="p-6">
                <figure>
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

    </div>
  </section>
);

export default Testimonials;
