import { Mail, MapPin, Phone, Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="currentColor"
              fillOpacity="0.3"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <img
              src="/main_logo.png"
              alt="Alarcón CBE - Centro de Bienestar Emocional"
              className="h-20 md:h-28 object-contain mb-6 transition-transform duration-300 hover:scale-105"
            />
            <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
              Centro Especializado en acompañamiento terapéutico para niños, adolescentes,
              adultos, parejas y familias, con un enfoque cálido, personalizado e inclusivo
              en Piedecuesta, Santander.
            </p>
            <div className="flex items-center gap-2 text-teal-400">
              <Heart className="w-5 h-5 animate-pulse" />
              <span className="text-sm font-semibold">Transformando vidas con empatía</span>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-teal-400">Servicios</h4>
            <ul className="space-y-3">
              {['Educación Especial e Inclusiva', 'Terapia de Pareja y Familiar', 'Acompañamiento Individual'].map((service, idx) => (
                <li
                  key={idx}
                  className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer flex items-center gap-2 group"
                  onClick={() => scrollToSection('services')}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 group-hover:w-2 group-hover:h-2 transition-all duration-300"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-teal-400">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group cursor-pointer">
                <MapPin className="w-5 h-5 text-teal-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Piedecuesta, Santander
                </p>
              </div>
              <a
                href="tel:+573166211524"
                className="flex items-start gap-3 group cursor-pointer"
              >
                <Phone className="w-5 h-5 text-teal-400 mt-1 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  +57 (316) 621-1524
                </p>
              </a>
              <a
                href="mailto:alarconcbe@gmail.com"
                className="flex items-start gap-3 group cursor-pointer"
              >
                <Mail className="w-5 h-5 text-teal-400 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  alarconcbe@gmail.com
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} <span className="font-semibold text-teal-400">Alarcón CBE</span> - Centro de Bienestar Emocional. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-400 hover:text-teal-400 cursor-pointer transition-colors duration-300 text-sm"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="text-gray-400 hover:text-teal-400 cursor-pointer transition-colors duration-300 text-sm"
              >
                Beneficios
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-400 hover:text-teal-400 cursor-pointer transition-colors duration-300 text-sm"
              >
                Contacto
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient overlay at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400"></div>
    </footer>
  );
};

export default Footer;
