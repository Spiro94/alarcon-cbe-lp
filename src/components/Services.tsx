import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      title: "Terapia para Autismo",
      description: "Intervenciones especializadas para niños y adultos autistas",
      features: [
        "Evaluación integral del desarrollo",
        "Terapia conductual aplicada (ABA)",
        "Desarrollo de habilidades sociales",
        "Programas de comunicación aumentativa"
      ]
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: "Programas de Bienestar Individual",
      description: "Planes personalizados para el desarrollo integral",
      features: [
        "Terapia ocupacional especializada",
        "Desarrollo de habilidades de vida diaria",
        "Programas de regulación sensorial",
        "Apoyo en transiciones de vida"
      ]
    },
    {
      icon: <Check className="w-8 h-8 text-purple-600" />,
      title: "Apoyo Familiar",
      description: "Acompañamiento integral para toda la familia",
      features: [
        "Orientación y consejería familiar",
        "Talleres para padres y cuidadores",
        "Estrategias de manejo en el hogar",
        "Grupos de apoyo comunitario"
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
            Ofrecemos un enfoque integral y personalizado para apoyar el desarrollo 
            y bienestar de personas autistas y sus familias.
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