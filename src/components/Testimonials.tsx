import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Madre de Santiago, 8 años",
      content: "Desde que Santiago comenzó su terapia en Alarcón CBE, hemos visto cambios increíbles. Su comunicación ha mejorado notablemente y ahora puede expresar sus necesidades con mayor claridad. El equipo es excepcional.",
      rating: 5
    },
    {
      name: "Carlos Mendoza",
      role: "Padre de familia",
      content: "El apoyo que hemos recibido como familia ha sido fundamental. Los talleres nos dieron herramientas valiosas para entender mejor a nuestro hijo y crear un ambiente más armonioso en casa.",
      rating: 5
    },
    {
      name: "Ana Sofía Ruiz",
      role: "Adulta autista, 25 años",
      content: "Gracias a los programas de Alarcón CBE he desarrollado habilidades que me han permitido ser más independiente. El enfoque personalizado y respetuoso hace toda la diferencia.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i} 
        className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Historias de Transformación
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Las experiencias de nuestras familias y participantes reflejan 
            el impacto positivo de nuestros servicios especializados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-gradient-to-br from-white to-gray-50"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <blockquote className="text-gray-600 mb-4 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-50 to-blue-50 px-6 py-3 rounded-full">
            <span className="text-2xl">⭐</span>
            <span className="font-semibold text-gray-800">4.9/5</span>
            <span className="text-gray-600">• Más de 200 familias atendidas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;