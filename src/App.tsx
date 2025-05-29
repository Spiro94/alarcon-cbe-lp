import Benefits from "./components/Benefits";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WhatsAppFloat from "./components/WhatsAppFloat";
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
      <WhatsAppFloat />
      <Toaster
        toastOptions={{
          style: {
            background: '#0f766e',
            color: '#ffffff',
            border: '1px solid #14b8a6'
          }
        }}
      />
    </div>
  )
}

export default App
