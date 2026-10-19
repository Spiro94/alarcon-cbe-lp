import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SITE, whatsappUrl } from "@/lib/site";

type Fields = "name" | "email" | "phone" | "message";
type Errors = Partial<Record<Fields, string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (v: Record<Fields, string>): Errors => {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Escribe tu nombre.";
  if (v.email.trim() && !emailRe.test(v.email.trim())) e.email = "Revisa el formato del correo (ej. nombre@correo.com).";
  if (!v.message.trim()) e.message = "Cuéntanos brevemente cómo podemos ayudarte.";
  return e;
};

const infoRows = [
  { Icon: MapPin, label: "Dirección", chip: "bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-200", content: <p className="text-muted-foreground">{SITE.city}, {SITE.region}, {SITE.country}</p> },
  { Icon: Phone, label: "Teléfono y WhatsApp", chip: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200", content: <a href={`tel:${SITE.phone}`} className="text-muted-foreground underline-offset-4 hover:text-primary hover:underline">{SITE.phoneDisplay}</a> },
  { Icon: Mail, label: "Correo", chip: "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200", content: <a href={`mailto:${SITE.email}`} className="break-all text-muted-foreground underline-offset-4 hover:text-primary hover:underline">{SITE.email}</a> },
  { Icon: Clock, label: "Horarios de atención", chip: "bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200", content: <p className="text-muted-foreground">{SITE.hours}</p> },
];

const inputClass = "mt-2 h-12 border-2 border-input bg-background";

const ContactSection = () => {
  const [values, setValues] = useState<Record<Fields, string>>({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as Fields]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      e.currentTarget.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
      return;
    }

    const text =
      `Hola, quisiera agendar una consulta.\n\nNombre: ${values.name}\n` +
      (values.email ? `Correo: ${values.email}\n` : "") +
      (values.phone ? `Teléfono: ${values.phone}\n` : "") +
      `\nMensaje:\n${values.message}`;
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");

    toast.success("Abriendo WhatsApp", {
      description: "Revisa el mensaje y presiona enviar para escribirnos.",
    });
  };

  const field = (name: Fields) => ({
    id: name,
    name,
    value: values[name],
    onChange: handleChange,
    "aria-invalid": errors[name] ? (true as const) : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  const error = (name: Fields) =>
    errors[name] ? (
      <p id={`${name}-error`} role="alert" className="mt-1.5 text-sm font-medium text-destructive">
        {errors[name]}
      </p>
    ) : null;

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 py-20 dark:from-teal-950/30 dark:via-background dark:to-purple-950/20"
    >
      <div aria-hidden className="absolute left-10 top-20 size-72 animate-blob rounded-full bg-teal-200/40 blur-3xl dark:bg-teal-500/10" />
      <div aria-hidden className="absolute right-10 top-40 size-72 animate-blob rounded-full bg-purple-200/40 blur-3xl [animation-delay:2s] dark:bg-purple-500/10" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 id="contact-title" className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Agenda tu cita en Piedecuesta
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos aquí para acompañarte. Agenda tu consulta inicial y descubre cómo podemos apoyar a tu familia.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <Card className="border-0 bg-card/90 shadow-xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-primary">
                  <MessageCircle aria-hidden className="size-6" />
                  <h3>Información de contacto</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-6">
                  {infoRows.map(({ Icon, label, chip, content }) => (
                    <li key={label} className="flex items-start gap-4">
                      <div className={`rounded-lg p-3 ${chip}`}>
                        <Icon aria-hidden className="size-6" />
                      </div>
                      <div>
                        <h4 className="mb-1 font-semibold text-foreground">{label}</h4>
                        {content}
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-teal-700 to-teal-800 text-white shadow-xl dark:from-teal-800 dark:to-teal-950">
              <div aria-hidden className="absolute -right-20 -top-20 size-40 rounded-full bg-white/10" />
              <CardContent className="relative p-8">
                <h3 className="mb-4 text-2xl font-bold">¿Listo para dar el primer paso?</h3>
                <p className="mb-6 text-lg text-white/90">
                  Programa tu consulta inicial y descubre cómo podemos ayudarte a alcanzar tus objetivos de bienestar.
                </p>
                <Button asChild className="h-16 w-full rounded-xl bg-white text-lg font-semibold text-teal-900 shadow-lg hover:bg-teal-50">
                  <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                    <img src="/logo_wtp_green.svg" alt="" width={36} height={36} className="h-9 w-auto" />
                    Contactar por WhatsApp
                    <span className="sr-only"> (se abre en una pestaña nueva)</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 bg-card/90 shadow-xl backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl text-foreground">
                <Send aria-hidden className="size-6 text-primary" />
                <h3>Escríbenos por WhatsApp</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <p className="text-sm text-muted-foreground">Los campos con <span aria-hidden>*</span><span className="sr-only">asterisco</span> son obligatorios. Al enviar, continuarás la conversación por WhatsApp.</p>
                <div>
                  <Label htmlFor="name" className="font-semibold">Nombre completo *</Label>
                  <Input {...field("name")} required autoComplete="name" className={inputClass} placeholder="Tu nombre completo" />
                  {error("name")}
                </div>
                <div>
                  <Label htmlFor="email" className="font-semibold">Correo electrónico (opcional)</Label>
                  <Input {...field("email")} type="email" autoComplete="email" className={inputClass} placeholder="tu@correo.com" />
                  {error("email")}
                </div>
                <div>
                  <Label htmlFor="phone" className="font-semibold">Teléfono (opcional)</Label>
                  <Input {...field("phone")} type="tel" inputMode="tel" autoComplete="tel" className={inputClass} placeholder="Ej. 300 123 4567" />
                </div>
                <div>
                  <Label htmlFor="message" className="font-semibold">Mensaje *</Label>
                  <Textarea {...field("message")} required rows={5} className="mt-2 resize-none border-2 border-input bg-background" placeholder="Cuéntanos sobre tu situación y cómo podemos ayudarte..." />
                  {error("message")}
                </div>
                <Button type="submit" className="h-14 w-full rounded-lg text-lg font-semibold shadow-lg">
                  <Send aria-hidden className="size-5" />
                  Continuar por WhatsApp
                </Button>
                <p className="text-xs text-muted-foreground">
                  Tus datos se usan únicamente para responder tu consulta. Consulta nuestra <Link to="/politica-de-privacidad" className="underline underline-offset-4 hover:text-primary">política de privacidad</Link>.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
