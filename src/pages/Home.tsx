import About from "@/components/About";
import Benefits from "@/components/Benefits";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import Seo from "@/components/Seo";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { businessJsonLd, personJsonLd } from "@/lib/site";

const Home = () => (
  <>
    <Seo
      title="Educación Inclusiva y Asesorías para Niños en Piedecuesta | Alarcón CBE"
      description="Centro de bienestar emocional en Piedecuesta, Santander: educación especial e inclusiva para niños, asesorías a familias y acompañamiento emocional con trabajo social. Agenda tu cita."
      path="/"
      jsonLd={[businessJsonLd, personJsonLd]}
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
