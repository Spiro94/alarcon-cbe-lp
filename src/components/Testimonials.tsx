import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Madre de Santiago, 8 años",
      content: "Laura ha sido un apoyo invaluable para Santiago. En solo tres meses, hemos visto cómo su confianza ha crecido y puede comunicar mejor lo que siente. Su paciencia y dedicación realmente marcan la diferencia.",
      rating: 5
    },
    {
      name: "Carlos Mendoza",
      role: "Padre de Valeria",
      content: "Como familia estábamos pasando por un momento difícil. Laura nos ayudó a entender mejor las necesidades de Valeria y nos dio herramientas prácticas que usamos todos los días. Realmente se nota su vocación.",
      rating: 5
    },
    {
      name: "Ana Sofía Ruiz",
      role: "Adulta, terapia individual",
      content: "Trabajar con Laura me ayudó a desarrollar estrategias para manejar mi ansiedad. Su enfoque es cálido y profesional, siempre respetando mi ritmo. Me siento mucho más segura enfrentando el día a día.",
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
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Historias de Transformación
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Más de 20 familias han confiado en Laura para acompañarlos en su proceso de bienestar emocional.
            <br />
            Estas son algunas de sus experiencias con nuestro servicio personalizado.
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
            <span className="text-gray-600">• Más de 20 familias atendidas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;