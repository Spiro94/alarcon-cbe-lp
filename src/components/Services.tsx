import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ServiceIcon from "@/components/ServiceIcon";
import { SERVICES } from "@/lib/site";

const Services = () => (
  <section
    id="services"
    aria-labelledby="services-title"
    className="relative overflow-hidden bg-gradient-to-br from-background via-teal-50/40 to-blue-50/50 py-20 dark:via-teal-950/20 dark:to-blue-950/20"
  >
    <div aria-hidden className="absolute right-20 top-10 size-64 animate-float rounded-full bg-teal-200/30 blur-3xl dark:bg-teal-500/10" />
    <div aria-hidden className="absolute bottom-10 left-20 size-64 animate-float rounded-full bg-blue-200/30 blur-3xl [animation-delay:3s] dark:bg-blue-500/10" />

    <div className="container relative mx-auto px-4">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h2 id="services-title" className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          Educación inclusiva, asesorías y bienestar emocional para niños en Piedecuesta
        </h2>
        <p className="mb-3 text-lg text-muted-foreground">
          Ofrecemos espacios seguros, amorosos y profesionales donde las emociones pueden ser expresadas, comprendidas y transformadas.
        </p>
        <p className="text-lg text-muted-foreground">
          Nuestro equipo interdisciplinario trabaja con niños, adolescentes, adultos, familias y parejas, adaptando cada intervención a sus necesidades.
        </p>
      </div>

      <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <li key={service.slug} className="flex">
            <Card className="relative w-full overflow-hidden border-0 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.gradient}`} aria-hidden />
              <CardHeader className="pb-4 text-center">
                <div className={`mx-auto mb-4 w-fit rounded-2xl bg-gradient-to-br p-4 shadow-md ${service.gradient}`}>
                  <ServiceIcon icon={service.icon} />
                </div>
                <h3 className="mb-2 text-xl font-bold leading-snug text-foreground">{service.title}</h3>
                <p className="font-medium text-muted-foreground">{service.tagline}</p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <ul className="mb-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check aria-hidden className="mt-0.5 size-5 shrink-0 text-primary" />
                      <span className="text-sm leading-relaxed text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/${service.slug}`}
                  className="mt-auto inline-flex items-center gap-2 rounded-md font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Conocer más<span className="sr-only"> sobre {service.title}</span>
                  <ArrowRight aria-hidden className="size-4" />
                </Link>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-16 max-w-xl text-center text-muted-foreground">
        ¿Listo para dar el primer paso?{" "}
        <a href="#contact" className="font-semibold text-primary underline decoration-2 underline-offset-4 hover:opacity-80">
          Contáctanos hoy
        </a>{" "}
        y descubre cómo podemos ayudarte.
      </p>
    </div>
  </section>
);

export default Services;
