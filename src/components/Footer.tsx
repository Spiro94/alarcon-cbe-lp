const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img
              src="/main_logo.png"
              alt="Alarcón CBE - Centro de Bienestar Emocional"
              className="h-16 md:h-24 object-contain mb-4"
            />
            <p className="text-gray-300 leading-relaxed">
              Centro Especializado en acompañamiento terapéutico para niños, adolescentes,
              adultos, parejas y familias, con un enfoque cálido, personalizado e inclusivo
              en Piedecuesta, Santander.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Educación Especial e Inclusiva</li>
              <li>Terapia de Pareja y Familiar</li>
              <li>Acompañamiento Individual</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-300">
              <p>Piedecuesta, Santander</p>
              <p>+57 (316) 621-1524</p>
              <p>alarconcbe@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Alarcón CBE - Centro de Bienestar Emocional. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
