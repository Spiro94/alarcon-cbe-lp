import { Handshake, Heart, ShieldCheck } from "lucide-react";
import { TEAM } from "@/lib/site";

const values = [
  { Icon: Heart, title: "Empatía", text: "Escuchamos sin juzgar y respetamos el ritmo de cada persona y familia." },
  { Icon: Handshake, title: "Trabajo en conjunto", text: "Construimos los objetivos contigo, con tu pareja o con tu familia." },
  { Icon: ShieldCheck, title: "Confidencialidad", text: "Cuidamos tu información y tu confianza en cada conversación." },
];

const About = () => (
  <section id="about" aria-labelledby="about-title" className="bg-background py-20">
    <div className="container mx-auto grid max-w-5xl items-center gap-12 px-4 lg:grid-cols-2">
      <div>
        <h2 id="about-title" className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          Quiénes somos
        </h2>
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          Alarcón CBE es un centro de bienestar emocional en Piedecuesta, Santander, liderado por {TEAM.name}, {TEAM.role.toLowerCase()}.
        </p>
        <p className="leading-relaxed text-muted-foreground">{TEAM.bio}</p>
      </div>
      <ul className="space-y-4">
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
  </section>
);

export default About;
