import { GraduationCap, Handshake, Heart, ShieldCheck, Briefcase } from "lucide-react";
import { TEAM } from "@/lib/site";

const values = [
  { Icon: Heart, title: "Empatía", text: "Escuchamos sin juzgar y respetamos el ritmo de cada persona y familia." },
  { Icon: Handshake, title: "Trabajo en conjunto", text: "Construimos los objetivos contigo, con tu pareja o con tu familia." },
  { Icon: ShieldCheck, title: "Confidencialidad", text: "Cuidamos tu información y tu confianza en cada conversación." },
];

const About = () => (
  <section id="about" aria-labelledby="about-title" className="bg-background py-20">
    <div className="container mx-auto max-w-5xl px-4">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 id="about-title" className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          Quiénes somos
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Alarcón CBE es un centro de bienestar emocional en Piedecuesta, Santander, liderado por una trabajadora social especialista en educación especial.
        </p>
      </div>

      <div className="grid items-start gap-10 lg:grid-cols-5">
        <div className="rounded-2xl bg-surface p-6 shadow-sm lg:col-span-3 md:p-8">
          <div className="mb-6 flex items-center gap-4">
            {TEAM.photo ? (
              <img src={TEAM.photo} alt={TEAM.name} width={96} height={96} loading="lazy" className="size-24 rounded-full object-cover" />
            ) : (
              <div aria-hidden className="flex size-20 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                {TEAM.name.split(" ").filter((_, i) => i === 0 || i === 2).map((w) => w[0]).join("")}
              </div>
            )}
            <div>
              <h3 className="text-xl font-bold text-foreground">{TEAM.name}</h3>
              <p className="text-muted-foreground">{TEAM.role}</p>
            </div>
          </div>
          <p className="mb-6 leading-relaxed text-muted-foreground">{TEAM.bio}</p>

          <h4 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
            <GraduationCap aria-hidden className="size-5 text-primary" /> Formación
          </h4>
          <ul className="mb-6 space-y-2 text-muted-foreground">
            {TEAM.education.map((e) => (
              <li key={e.title}>
                <span className="font-medium text-foreground">{e.title}</span> · {e.place} ({e.years})
              </li>
            ))}
          </ul>

          <h4 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
            <Briefcase aria-hidden className="size-5 text-primary" /> Trayectoria
          </h4>
          <ul className="mb-6 list-disc space-y-2 pl-5 text-muted-foreground marker:text-primary">
            {TEAM.experience.map((x) => <li key={x}>{x}</li>)}
          </ul>

          <ul className="flex flex-wrap gap-2" aria-label="Áreas de trabajo">
            {TEAM.focus.map((f) => (
              <li key={f} className="rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">{f}</li>
            ))}
          </ul>
        </div>

        <ul className="space-y-4 lg:col-span-2">
          {values.map(({ Icon, title, text }) => (
            <li key={title} className="flex items-start gap-4 rounded-xl bg-surface p-5 shadow-sm">
              <div className="rounded-lg bg-primary p-3 text-primary-foreground">
                <Icon aria-hidden className="size-6" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-foreground">{title}</h3>
                <p className="text-muted-foreground">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default About;
