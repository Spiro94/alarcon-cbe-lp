import { Card, CardContent } from "@/components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      title: "Comunicación Mejorada",
      description: "Desarrollo de habilidades de comunicación verbal y no verbal adaptadas a cada persona.",
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Autonomía Personal",
      description: "Fortalecimiento de habilidades de vida diaria para mayor independencia.",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Integración Social",
      description: "Desarrollo de competencias sociales para una mejor integración comunitaria.",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Bienestar Familiar",
      description: "Apoyo integral que fortalece la dinámica familiar y reduce el estrés.",
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Calidad de Vida",
      description: "Mejora significativa en el bienestar general y la satisfacción personal.",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Desarrollo Cognitivo",
      description: "Estimulación y fortalecimiento de procesos cognitivos fundamentales.",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Resultados que Transforman Vidas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestros programas especializados han demostrado resultados significativos 
            en el desarrollo y bienestar de nuestros participantes y sus familias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${benefit.color} mb-4 flex items-center justify-center`}>
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;