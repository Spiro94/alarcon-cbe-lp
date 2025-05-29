import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Heart, Leaf, User } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Leaf className="w-8 h-8 text-teal-600" />,
      title: "Educación Especial e Inclusiva",
      description: "Caminamos contigo hacia la inclusión",
      features: [
        "Estrategias personalizadas para niños, niñas y adolescentes con necesidades educativas especiales",
        "Apoyo a colegios y familias para crear entornos inclusivos",
        "Acompañamiento emocional en procesos de adaptación escolar",
        "Actividades que promueven el desarrollo integral desde el respeto y la empatía",
      ]
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Terapia de Pareja y Familiar",
      description: "Donde la comunicación sana fortalece los lazos",
      features: [
        "Espacios seguros para dialogar, comprenderse y sanar",
        "Herramientas para mejorar la comunicación en pareja y en familia",
        "Apoyo en momentos de crisis, duelos o cambios importantes",
        "Intervención desde el respeto y la empatía"
      ]
    },
    {
      icon: <User className="w-8 h-8 text-purple-600" />,
      title: "Acompañamiento Individual",
      description: "Te escuchamos, te cuidamos, te acompañamos",
      features: [
        "Sesiones personalizadas para trabajar emociones, ansiedad o autoestima",
        "Estrategias de afrontamiento para momentos difíciles",
        "Acompañamiento respetuoso desde la infancia hasta la adultez",
        "Espacios de confianza para conectar contigo mismo"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nuestros Servicios Especializados
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos espacios seguros, amorosos y profesionales donde las emociones pueden ser expresadas, comprendidas y transformadas. 
            <br />
            Nuestro equipo interdisciplinario se especializa en el trabajo con niños, adolescentes, adultos, familias y parejas, adaptando cada intervención a sus necesidades particulares.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-gradient-to-br from-white to-gray-50"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-br from-teal-50 to-blue-50 w-fit">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;