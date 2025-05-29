import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";


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
    <section id="contact" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container mx-auto px-4">
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
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-teal-600">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Dirección</h4>
                  <p className="text-gray-600">Piedecuesta, Santander, Colombia</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">WhatsApp</h4>
                  <p className="text-gray-600">+57 (316) 621-1524</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">alarconcbe@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Horarios de Atención</h4>
                  <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-500 to-teal-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">¿Listo para dar el primer paso?</h3>
                <p className="mb-6 opacity-90">
                  Programa tu consulta inicial y descubre cómo podemos
                  ayudarte a alcanzar tus objetivos de bienestar.
                </p>
                <Button
                  className="bg-white text-teal-600 p-8 rounded-xl hover:bg-gray-100 font-semibold cursor-pointer text-lg"
                  onClick={handleWhatsAppContact}
                >
                  <img
                    src="/logo_wtp_green.svg" className="h-9" />
                  Contactar por WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">Envíanos un mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nombre completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Correo electrónico *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="mt-1"
                    placeholder="Cuéntanos sobre tu situación y cómo podemos ayudarte..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 cursor-pointer"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
