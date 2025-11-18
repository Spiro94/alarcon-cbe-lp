import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "bienestar emocional";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-blue-50 z-0"></div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-teal-200/20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-blue-200/20 blur-3xl animate-pulse delay-700"></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 rounded-full bg-purple-200/20 blur-3xl animate-pulse delay-1000"></div>

        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-multiply">
          <img src="/bg_img.jpg" className="w-full h-full object-cover" alt="Background pattern" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 pt-20">
        {/* Logo with float animation */}
        <div className="mb-12 flex justify-center animate-in fade-in zoom-in duration-1000">
          <div className="relative">
            <div className="absolute inset-0 bg-teal-400/20 blur-xl rounded-full transform scale-110"></div>
            <img
              src="/main_logo.png"
              alt="Alarcón CBE - Centro de Bienestar Emocional"
              className="h-32 md:h-48 object-contain relative z-10 drop-shadow-xl"
            />
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-8 tracking-tight">
          <span className="block mb-6 animate-in slide-in-from-bottom-5 duration-700">Acompañando vidas</span>
          <span className="block mb-6 animate-in slide-in-from-bottom-5 duration-700 delay-200">desde el amor y el</span>
          <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent h-20 block min-h-[1.2em]">
            {text}<span className="animate-pulse">|</span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          En Alarcón CBE brindamos un refugio terapéutico para
          <span className="font-semibold text-teal-700"> niños, adolescentes, adultos y familias</span>.
          Un espacio seguro para sanar, crecer y florecer.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
          <Button
            onClick={scrollToContact}
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-teal-500/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            Agenda tu consulta hoy
          </Button>
          <Button
            variant="outline"
            onClick={scrollToServices}
            className="border-2 border-teal-600 text-teal-700 hover:bg-teal-50 px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            Conoce nuestros servicios
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce delay-1000">
          <ArrowDown
            className="w-8 h-8 text-teal-600 mx-auto cursor-pointer hover:text-teal-700 transition-colors"
            onClick={scrollToServices}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;