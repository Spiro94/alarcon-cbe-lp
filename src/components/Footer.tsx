import { Heart, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES, SITE } from "@/lib/site";

const linkClass = "rounded-sm text-gray-300 transition-colors hover:text-white";

const Footer = () => (
  <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white">
    <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400" />

    <div className="container relative mx-auto px-4 py-16">
      <div className="mb-12 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-6 inline-block rounded-2xl bg-white/95 p-3">
            <img
              src="/main_logo.webp"
              alt="Alarcón CBE - Centro de Bienestar Emocional"
              width={640}
              height={225}
              loading="lazy"
              className="h-16 w-auto object-contain md:h-20"
            />
          </div>
          <p className="mb-6 leading-relaxed text-gray-300">
            Centro especializado en acompañamiento terapéutico para niños, adolescentes, adultos, parejas y familias, con un enfoque cálido, personalizado e inclusivo en {SITE.city}, {SITE.region}.
          </p>
          <p className="flex items-center gap-2 text-sm font-semibold text-teal-300">
            <Heart aria-hidden className="size-5" />
            Transformando vidas con empatía
          </p>
        </div>

        <nav aria-label="Servicios">
          <h2 className="mb-6 text-xl font-bold text-teal-300">Servicios</h2>
          <ul className="space-y-3">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to={`/${s.slug}`} className={linkClass}>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-6 text-xl font-bold text-teal-300">Contacto</h2>
          <address className="space-y-4 not-italic">
            <p className="flex items-start gap-3 text-gray-300">
              <MapPin aria-hidden className="mt-1 size-5 shrink-0 text-teal-300" />
              {SITE.city}, {SITE.region}
            </p>
            <a href={`tel:${SITE.phone}`} className={`flex items-start gap-3 ${linkClass}`}>
              <Phone aria-hidden className="mt-1 size-5 shrink-0 text-teal-300" />
              {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className={`flex items-start gap-3 break-all ${linkClass}`}>
              <Mail aria-hidden className="mt-1 size-5 shrink-0 text-teal-300" />
              {SITE.email}
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-gray-700/60 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-gray-300 md:text-left">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-teal-300">Alarcón CBE</span> - Centro de Bienestar Emocional. Todos los derechos reservados.
          </p>
          <ul className="flex gap-6 text-sm">
            {[["/#services", "Servicios"], ["/#about", "Nosotros"], ["/#benefits", "Resultados"], ["/#contact", "Contacto"], ["/politica-de-privacidad", "Privacidad"]].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="inline-block py-2 text-gray-300 transition-colors hover:text-teal-300">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
