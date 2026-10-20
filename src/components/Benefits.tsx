import { Brain, Heart, Home, MessageSquare, User, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  { Icon: MessageSquare, title: "Comunicación Asertiva y Emocional", description: "Fortalecemos la expresión verbal y no verbal de emociones, ideas y necesidades.", color: "bg-teal-700 dark:bg-teal-600" },
  { Icon: User, title: "Autonomía Personal", description: "Promovemos habilidades de vida diaria: higiene, organización y rutinas.", color: "bg-blue-700 dark:bg-blue-600" },
  { Icon: Users, title: "Integración Social y Participación", description: "Favorecemos la interacción positiva con pares, maestros y cuidadores.", color: "bg-purple-700 dark:bg-purple-600" },
  { Icon: Home, title: "Bienestar Familiar", description: "Buscamos menos conflictos en casa y más momentos de conexión y juego en familia.", color: "bg-pink-700 dark:bg-pink-600" },
  { Icon: Heart, title: "Calidad de Vida y Regulación Emocional", description: "Brindamos estrategias para reconocer y manejar emociones como la rabia, el miedo o la frustración.", color: "bg-orange-700 dark:bg-orange-600" },
  { Icon: Brain, title: "Desarrollo Cognitivo y Aprendizaje", description: "Estimulamos habilidades como la atención, la memoria y la planificación.", color: "bg-green-700 dark:bg-green-600" },
];

const Benefits = () => (
  <section id="benefits" aria-labelledby="benefits-title" className="bg-gradient-to-br from-surface to-surface-2 py-20">
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h2 id="benefits-title" className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          Lo que trabajamos en cada proceso
        </h2>
        <p className="mb-3 text-lg text-muted-foreground">
          En <strong className="font-bold text-foreground">Alarcón CBE</strong> cada plan de acompañamiento se construye con la familia y se enfoca en áreas clave del desarrollo y el bienestar.
        </p>
        <p className="text-lg text-muted-foreground">
          Estos son los objetivos que trabajamos con niños, adolescentes y adultos, según las necesidades de cada persona.
        </p>
      </div>

      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map(({ Icon, title, description, color }) => (
          <li key={title} className="flex">
            <Card className="w-full border-0 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardContent className="p-6">
                <div className={`mb-4 flex size-12 items-center justify-center rounded-lg text-white ${color}`}>
                  <Icon aria-hidden className="size-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">{title}</h3>
                <p className="leading-relaxed text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Benefits;
