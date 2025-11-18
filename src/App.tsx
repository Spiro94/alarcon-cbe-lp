import Benefits from "./components/Benefits";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import { Toaster } from "./components/ui/sonner";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Navbar from "./components/Navbar";

function App() {


  return (
    <div className="min-h-svh">
      <Navbar />
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
