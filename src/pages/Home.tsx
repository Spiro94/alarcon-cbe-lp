import About from "@/components/About";
import Benefits from "@/components/Benefits";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import Seo from "@/components/Seo";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { businessJsonLd } from "@/lib/site";

const Home = () => (
  <>
    <Seo
      title="Terapia de Pareja y Asesorías en Piedecuesta | Alarcón CBE"
      description="Centro de bienestar emocional en Piedecuesta, Santander: terapia de pareja, asesoría familiar e individual y educación inclusiva con trabajo social. Agenda tu cita."
      path="/"
      jsonLd={[businessJsonLd]}
    />
    <Hero />
    <Services />
    <About />
    <Benefits />
    <Testimonials />
    <ContactSection />
  </>
);

export default Home;
