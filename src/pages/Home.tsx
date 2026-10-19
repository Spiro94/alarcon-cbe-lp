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
      title="Psicólogo y Bienestar Emocional en Piedecuesta | Alarcón CBE"
      description="Centro de bienestar emocional en Piedecuesta, Santander: terapia de pareja y familiar, terapia individual y educación especial e inclusiva. Agenda tu cita."
      path="/"
      jsonLd={[businessJsonLd]}
    />
    <Hero />
    <Services />
    <Benefits />
    <Testimonials />
    <ContactSection />
  </>
);

export default Home;
