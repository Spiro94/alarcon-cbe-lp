import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";


const ContactSection = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto URL with form data
    const subject = encodeURIComponent("Consulta desde sitio web");
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\n` +
      `Teléfono: ${formData.phone}\n\n` +
      `Mensaje:\n${formData.message}`
    );
    const mailtoURL = `mailto:alarconcbe@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoURL;

    toast.success("Abriendo cliente de correo", {
      description: "Se abrirá tu aplicación de correo con el mensaje pre-lleno.",
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleWhatsAppContact = () => {
    const phoneNumber = "573166211524"; // WhatsApp format without + or spaces
    const message = encodeURIComponent("Hola, me gustaría agendar una consulta inicial. ¿Podrían ayudarme con información sobre sus servicios?");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Comienza tu Camino hacia el Bienestar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para acompañarte. Agenda tu consulta inicial
            y descubre cómo podemos apoyar a tu familia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-teal-600 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6" />
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                  <div className="p-3 bg-teal-100 rounded-lg group-hover:bg-teal-200 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Dirección</h4>
                    <p className="text-gray-600">Piedecuesta, Santander, Colombia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">WhatsApp</h4>
                    <a href="tel:+573166211524" className="text-gray-600 hover:text-teal-600 transition-colors">
                      +57 (316) 621-1524
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                  <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <a href="mailto:alarconcbe@gmail.com" className="text-gray-600 hover:text-teal-600 transition-colors">
                      alarconcbe@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                  <div className="p-3 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors duration-300">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Horarios de Atención</h4>
                    <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-teal-500 to-teal-600 text-white overflow-hidden relative group hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <h3 className="text-2xl font-bold mb-4">¿Listo para dar el primer paso?</h3>
                <p className="mb-6 opacity-90 text-lg">
                  Programa tu consulta inicial y descubre cómo podemos
                  ayudarte a alcanzar tus objetivos de bienestar.
                </p>
                <Button
                  className="bg-white text-teal-600 p-8 rounded-xl hover:bg-gray-100 font-semibold cursor-pointer text-lg w-full group/btn hover:scale-105 transition-all duration-300 shadow-lg"
                  onClick={handleWhatsAppContact}
                >
                  <img
                    src="/logo_wtp_green.svg"
                    className="h-9 group-hover/btn:scale-110 transition-transform duration-300"
                    alt="WhatsApp"
                  />
                  Contactar por WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 flex items-center gap-2">
                <Send className="w-6 h-6 text-teal-600" />
                Envíanos un mensaje
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="group">
                  <Label htmlFor="name" className="text-gray-700 font-semibold">Nombre completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-2 border-2 border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 h-12"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div className="group">
                  <Label htmlFor="email" className="text-gray-700 font-semibold">Correo electrónico *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-2 border-2 border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 h-12"
                    placeholder="tu@email.com"
                  />
                </div>
                <div className="group">
                  <Label htmlFor="phone" className="text-gray-700 font-semibold">Teléfono</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-2 border-2 border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 h-12"
                    placeholder="+57 (316) 621-1524"
                  />
                </div>
                <div className="group">
                  <Label htmlFor="message" className="text-gray-700 font-semibold">Mensaje *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="mt-2 border-2 border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 resize-none"
                    placeholder="Cuéntanos sobre tu situación y cómo podemos ayudarte..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-6 cursor-pointer text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
