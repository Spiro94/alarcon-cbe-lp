import Benefits from "./components/Benefits";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import { Toaster } from "./components/ui/sonner";

function App() {


  return (
    <div className="min-h-svh">
      <Hero />
      <Services />
      <Benefits />
      <Testimonials />
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  )
}

export default App
