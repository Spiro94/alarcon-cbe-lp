import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute">
        <img src="/bg_img.jpg"
        className="opacity-50"
         />
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-teal-200/30 to-blue-200/30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-purple-200/30 to-pink-200/30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo */}
        <div className="mb-16 flex justify-center">
          <img 
            src="/main_logo.png" 
            alt="Alarcón CBE - Centro de Bienestar Emocional" 
            className="h-32 md:h-40 object-contain"
          />
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
          Transformando vidas a través del
          <span className="block bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            bienestar emocional
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          En Alarcón CBE ofrecemos terapias especializadas para niños y adultos autistas, 
          junto con programas personalizados de bienestar que fortalecen habilidades, 
          mejoran la comunicación y elevan la calidad de vida de toda la familia.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
          <Button 
            onClick={scrollToContact}
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Agenda tu consulta
          </Button>
          <Button 
            variant="outline" 
            onClick={scrollToServices}
            className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer"
          >
            Conoce nuestros servicios
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown 
            className="w-6 h-6 text-teal-600 mx-auto cursor-pointer hover:text-teal-700 transition-colors"
            onClick={scrollToServices}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;