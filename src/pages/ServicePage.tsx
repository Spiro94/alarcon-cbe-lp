import { ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import ServiceIcon from "@/components/ServiceIcon";
import { SERVICES, SITE, businessJsonLd, getService, whatsappUrl } from "@/lib/site";

const ServicePage = ({ slug }: { slug: string }) => {
  const service = getService(slug)!;
  const path = `/${service.slug}`;
  const others = SERVICES.filter((s) => s.slug !== slug);

  const jsonLd = [
    businessJsonLd,
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.metaDescription,
      url: `${SITE.url}${path}`,
      provider: { "@id": `${SITE.url}/#organization` },
      areaServed: SITE.areaServed.map((name) => ({ "@type": "City", name })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE.url}/` },
        { "@type": "ListItem", position: 2, name: service.title, item: `${SITE.url}${path}` },
      ],
    },
  ];

  return (
    <>
      <Seo title={service.metaTitle} description={service.metaDescription} path={path} jsonLd={jsonLd} />
      <article className="bg-gradient-to-br from-background via-teal-50/40 to-blue-50/50 pb-20 pt-28 dark:via-teal-950/20 dark:to-blue-950/20">
        <div className="container mx-auto max-w-4xl px-4">
          <nav aria-label="Migas de pan" className="mb-8 text-sm">
            <Link to="/" className="inline-flex items-center gap-1 rounded-sm font-medium text-primary hover:underline">
              <ArrowLeft aria-hidden className="size-4" /> Inicio
            </Link>
            <span aria-hidden className="mx-2 text-muted-foreground">/</span>
            <span aria-current="page" className="text-muted-foreground">{service.title}</span>
          </nav>

          <header className="mb-12">
            <div className={`mb-6 w-fit rounded-2xl bg-gradient-to-br p-4 shadow-md ${service.gradient}`}>
              <ServiceIcon icon={service.icon} />
            </div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">{service.h1}</h1>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">{service.intro}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full px-8 text-base font-semibold">
                <a href={whatsappUrl(`Hola, quisiera información sobre: ${service.title}.`)} target="_blank" rel="noopener noreferrer">
                  Agendar por WhatsApp<span className="sr-only"> (se abre en una pestaña nueva)</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-full border-2 border-primary px-8 text-base font-semibold text-primary">
                <a href="/#contact">Enviar un mensaje</a>
              </Button>
            </div>
          </header>

          <section aria-labelledby="what" className="mb-12">
            <h2 id="what" className="mb-4 text-2xl font-bold text-foreground">Qué incluye</h2>
            <ul className="space-y-3">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-muted-foreground">
                  <Check aria-hidden className="mt-1 size-5 shrink-0 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="who" className="mb-12">
            <h2 id="who" className="mb-4 text-2xl font-bold text-foreground">¿Para quién es?</h2>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
              {service.audience.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </section>

          <section aria-labelledby="how" className="mb-12">
            <h2 id="how" className="mb-4 text-2xl font-bold text-foreground">Cómo trabajamos</h2>
            <ol className="list-decimal space-y-2 pl-6 text-muted-foreground marker:font-semibold marker:text-primary">
              {service.process.map((p) => <li key={p}>{p}</li>)}
            </ol>
          </section>

          <section aria-labelledby="faq" className="mb-12">
            <h2 id="faq" className="mb-4 text-2xl font-bold text-foreground">Preguntas frecuentes</h2>
            <dl className="space-y-6">
              {service.faqs.map((f) => (
                <div key={f.q}>
                  <dt className="mb-1 font-semibold text-foreground">{f.q}</dt>
                  <dd className="text-muted-foreground">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="more" className="border-t pt-10">
            <h2 id="more" className="mb-4 text-xl font-bold text-foreground">Otros servicios en {SITE.city}</h2>
            <ul className="flex flex-col gap-2">
              {others.map((s) => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}`} className="font-medium text-primary underline-offset-4 hover:underline">{s.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </>
  );
};

export default ServicePage;
