import { Button } from "@/components/ui/button"

function App() {

 const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      const targetElement = document.getElementById(targetId.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-svh">
      {/* Header Section */}
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed top-0 left-0 right-0 z-50">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
            <img src="/main_logo.png" alt="Alarcon CBE Logo" className="w-40" />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#service" className="text-sm font-medium hover:text-primary transition-colors" onClick={handleSmoothScroll}>
              Servicios
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors" onClick={handleSmoothScroll}>
              Quienes somos
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors" onClick={handleSmoothScroll}>
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: "url('/bg_img.jpg')"}}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-8 md:px-16 text-center text-white">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
            Equilibrio y Bienestar Emocional
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-xl md:max-w-3xl">
            Acompañamiento profesional virtual para el desarrollo de habilidades sociales, comunicación asertiva y educación inclusiva. Mejoramos tu calidad de vida con estrategias personalizadas.
          </p>

          {/* Call to Action */}
          <Button
           
            className="bg-[#25D366] hover:bg-[#128C7E] text-base sm:text-lg px-6 py-3 h-16 sm:px-8 sm:py-4 cursor-pointer rounded-full flex items-center space-x-2 shadow-[0_0_16px_0_rgba(255,255,255,0.3)] hover:shadow-[0_0_16px_0_rgba(255,255,255,0.4)] transition-all duration-300"
            onClick={() => window.open('https://api.whatsapp.com/send?phone=573166211524&text=Hola%20quiero%20una%20cita', '_blank')}
          >
            <img src="/wtp_logo.svg" alt="WhatsApp" className="w-6  sm:w-8 sm:h-8" />
            <span>Reserva tu cita ahora</span>
          </Button>
        </div>
      </main>

      {/* Services Section */}
      <section id="service" className="py-16 md:py-24 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ofrecemos una variedad de servicios diseñados para fomentar tu bienestar emocional y desarrollo personal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Service Item 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-purple-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v15H6.5A2.5 2.5 0 0 1 4 14.5V4A2.5 2.5 0 0 1 6.5 2z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-3">
                Educación Especial e Inclusiva
              </h3>
              <p className="text-slate-500">
                Estrategias diseñadas para satisfacer necesidades educativas especiales, facilitando la inclusión.
              </p>
            </div>
           

            {/* Service Item 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-green-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-3">
                Terapia de Pareja y Familiar
              </h3>
              <p className="text-slate-500">
                Fortalecemos la comunicación y resolvemos conflictos para mejorar las relaciones interpersonales.
              </p>
            </div>

            {/* Service Item 3 */}
             <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Icon Placeholder - Replace with actual icon e.g., from Lucide React */}
              
              <div className="text-blue-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><path d="M12 20h.01"/><path d="M10 4H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2"/><path d="M14 4h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-3">
                Acompañamiento Individual
              </h3>
              <p className="text-slate-500">
                Sesiones personalizadas para abordar tus necesidades emocionales y desarrollar estrategias de afrontamiento.
              </p>
            </div>
            
            {/* Add more service items as needed */}
          </div>
        </div>
      </section>
      {/* ... other sections like "Quienes Somos", "Contacto" will go here ... */}
    </div>
  )
}

export default App
