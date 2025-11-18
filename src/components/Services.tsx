import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Heart, Leaf, User, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Leaf className="w-8 h-8 text-teal-600" />,
      title: "Educación Especial e Inclusiva",
      description: "Caminamos contigo hacia la inclusión",
      bgGradient: "from-teal-100 to-emerald-100",
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
      bgGradient: "from-blue-100 to-indigo-100",
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
      bgGradient: "from-purple-100 to-pink-100",
      features: [
        "Sesiones personalizadas para trabajar emociones, ansiedad o autoestima",
        "Estrategias de afrontamiento para momentos difíciles",
        "Acompañamiento respetuoso desde la infancia hasta la adultez",
        "Espacios de confianza para conectar contigo mismo"
      ]
    }
  ];

  return (
    <section id="services" className="relative py-20 bg-gradient-to-br from-white via-teal-50/30 to-blue-50/50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 right-20 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-10 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed"></div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-teal-600 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Nuestros Servicios Especializados
            </h2>
            <Sparkles className="w-8 h-8 text-teal-600 animate-pulse" />
          </div>
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
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-xl bg-white overflow-hidden relative"
            >
              {/* Decorative top bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.bgGradient}`}></div>

              {/* Background pattern on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardHeader className="text-center pb-4 relative z-10">
                <div className={`mx-auto mb-4 p-4 rounded-2xl bg-gradient-to-br ${service.bgGradient} w-fit group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 font-medium">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3 group/item">
                      <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                      <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Optional: Add a subtle call-to-action */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-xl mx-auto">
            ¿Listo para dar el primer paso? <a href="#contact" className="text-teal-600 font-semibold hover:text-teal-700 underline decoration-2 underline-offset-4 transition-colors">Contáctanos hoy</a> y descubre cómo podemos ayudarte.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 3s;
        }
      `}</style>
    </section>
  );
};

export default Services;