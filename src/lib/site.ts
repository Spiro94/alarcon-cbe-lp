export const SITE = {
  name: "Alarcón CBE",
  legalName: "Alarcón CBE - Centro de Bienestar Emocional",
  url: "https://alarconcbe.com",
  phone: "+573166211524",
  phoneDisplay: "+57 (316) 621-1524",
  email: "alarconcbe@gmail.com",
  city: "Piedecuesta",
  region: "Santander",
  country: "Colombia",
  hours: "Lunes a Viernes: 8:00 AM - 6:00 PM",
  ogImage: "https://alarconcbe.com/og-image.png",
  areaServed: ["Piedecuesta", "Floridablanca", "Bucaramanga", "Girón"],
} as const;

export const WHATSAPP_MESSAGE =
  "Hola, me gustaría agendar una consulta inicial. ¿Podrían ayudarme con información sobre sus servicios?";

export const whatsappUrl = (message: string = WHATSAPP_MESSAGE) =>
  `https://wa.me/${SITE.phone.replace("+", "")}?text=${encodeURIComponent(message)}`;

export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  icon: "leaf" | "heart" | "user";
  title: string;
  tagline: string;
  gradient: string;
  features: string[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  audience: string[];
  process: string[];
  faqs: Faq[];
}

export const SERVICES: Service[] = [
  {
    slug: "educacion-especial-inclusiva",
    icon: "leaf",
    title: "Educación Especial e Inclusiva",
    tagline: "Caminamos contigo hacia la inclusión",
    gradient: "from-teal-200 to-emerald-200 dark:from-teal-900 dark:to-emerald-900",
    features: [
      "Estrategias personalizadas para niños, niñas y adolescentes con necesidades educativas especiales",
      "Apoyo a colegios y familias para crear entornos inclusivos",
      "Acompañamiento emocional en procesos de adaptación escolar",
      "Actividades que promueven el desarrollo integral desde el respeto y la empatía",
    ],
    metaTitle: "Educación Especial e Inclusiva en Piedecuesta | Alarcón CBE",
    metaDescription:
      "Apoyo en educación especial e inclusiva para niños y adolescentes en Piedecuesta, Santander. Estrategias personalizadas para familias y colegios. Agenda tu cita.",
    h1: "Educación especial e inclusiva en Piedecuesta, Santander",
    intro:
      "En Alarcón CBE acompañamos a niños, niñas y adolescentes con necesidades educativas especiales, y a sus familias y colegios, para que cada estudiante aprenda y participe desde sus fortalezas. Trabajamos con planes individualizados, respeto por el ritmo de cada persona y un enfoque cálido.",
    audience: [
      "Niños, niñas y adolescentes con dificultades de aprendizaje, TDAH, autismo (TEA) u otras condiciones del desarrollo.",
      "Familias que buscan herramientas prácticas para apoyar a sus hijos en casa.",
      "Colegios y docentes que necesitan orientación para construir aulas inclusivas.",
    ],
    process: [
      "Primera conversación con la familia para conocer el contexto y las metas.",
      "Valoración de fortalezas, necesidades y apoyos requeridos.",
      "Plan de trabajo personalizado con estrategias para casa y colegio.",
      "Seguimiento periódico y ajustes según los avances.",
    ],
    faqs: [
      {
        q: "¿Para qué edades es este servicio?",
        a: "Acompañamos a niños, niñas y adolescentes. Adaptamos las estrategias a la edad, el nivel de desarrollo y las necesidades de cada persona.",
      },
      {
        q: "¿Trabajan también con el colegio?",
        a: "Sí. Orientamos a docentes y directivos para crear entornos inclusivos y coordinar apoyos entre la familia y la institución.",
      },
      {
        q: "¿Cómo agendo una primera cita?",
        a: "Escríbenos por WhatsApp o usa el formulario de contacto. Te responderemos en horario de atención, de lunes a viernes.",
      },
    ],
  },
  {
    slug: "terapia-pareja-familiar",
    icon: "heart",
    title: "Terapia de Pareja y Familiar",
    tagline: "Donde la comunicación sana fortalece los lazos",
    gradient: "from-blue-200 to-indigo-200 dark:from-blue-900 dark:to-indigo-900",
    features: [
      "Espacios seguros para dialogar, comprenderse y sanar",
      "Herramientas para mejorar la comunicación en pareja y en familia",
      "Apoyo en momentos de crisis, duelos o cambios importantes",
      "Intervención desde el respeto y la empatía",
    ],
    metaTitle: "Terapia de Pareja y Familiar en Piedecuesta | Alarcón CBE",
    metaDescription:
      "Terapia de pareja y terapia familiar en Piedecuesta, Santander. Mejora la comunicación, supera crisis y duelos en un espacio seguro y respetuoso. Agenda tu cita.",
    h1: "Terapia de pareja y terapia familiar en Piedecuesta, Santander",
    intro:
      "La terapia de pareja y familiar de Alarcón CBE ofrece un espacio neutral y seguro para hablar de lo que cuesta, escucharse de nuevo y construir acuerdos. Te acompañamos en conflictos, cambios de etapa, duelos y crisis, desde el respeto y la empatía.",
    audience: [
      "Parejas con conflictos de comunicación, desconfianza o cambios importantes en su relación.",
      "Familias que atraviesan crisis, separaciones, duelos o dificultades de convivencia.",
      "Padres y madres que quieren mejorar el vínculo con sus hijos adolescentes o niños.",
    ],
    process: [
      "Sesión inicial para entender qué está pasando y qué esperan lograr.",
      "Acuerdos de trabajo y objetivos compartidos.",
      "Sesiones con herramientas prácticas de comunicación y resolución de conflictos.",
      "Cierre y plan para sostener los avances.",
    ],
    faqs: [
      {
        q: "¿Es necesario que vayan todos los miembros de la familia?",
        a: "No siempre. Definimos juntos quién participa en cada sesión según los objetivos del proceso.",
      },
      {
        q: "¿Cuánto dura un proceso de terapia de pareja?",
        a: "Depende de cada caso. En la primera sesión hablamos de objetivos y proponemos un plan con revisiones periódicas.",
      },
      {
        q: "¿Atienden a personas de Bucaramanga o Floridablanca?",
        a: "Sí, recibimos consultantes de Piedecuesta y del área metropolitana de Bucaramanga.",
      },
    ],
  },
  {
    slug: "terapia-individual",
    icon: "user",
    title: "Acompañamiento Individual",
    tagline: "Te escuchamos, te cuidamos, te acompañamos",
    gradient: "from-purple-200 to-pink-200 dark:from-purple-900 dark:to-pink-900",
    features: [
      "Sesiones personalizadas para trabajar emociones, ansiedad o autoestima",
      "Estrategias de afrontamiento para momentos difíciles",
      "Acompañamiento respetuoso desde la infancia hasta la adultez",
      "Espacios de confianza para conectar contigo mismo",
    ],
    metaTitle: "Psicólogo y Terapia Individual en Piedecuesta | Alarcón CBE",
    metaDescription:
      "Terapia psicológica individual para niños, adolescentes y adultos en Piedecuesta, Santander. Ansiedad, autoestima y manejo emocional. Agenda tu primera sesión.",
    h1: "Psicólogo y terapia individual en Piedecuesta, Santander",
    intro:
      "El acompañamiento individual en Alarcón CBE es un espacio confidencial para trabajar tus emociones a tu ritmo. Atendemos a niños, adolescentes y adultos que necesitan manejar la ansiedad, fortalecer la autoestima o encontrar estrategias para momentos difíciles.",
    audience: [
      "Adultos con ansiedad, estrés, tristeza persistente o baja autoestima.",
      "Adolescentes que atraviesan cambios emocionales, escolares o sociales.",
      "Niños con dificultades para expresar o regular sus emociones.",
    ],
    process: [
      "Primera sesión para escucharte y definir qué quieres trabajar.",
      "Plan de acompañamiento con objetivos claros y realistas.",
      "Sesiones periódicas con estrategias de afrontamiento y regulación emocional.",
      "Seguimiento de avances y cierre acordado contigo.",
    ],
    faqs: [
      {
        q: "¿La información de las sesiones es confidencial?",
        a: "Sí. Lo que se conversa en sesión es confidencial, dentro de los límites éticos y legales de la práctica profesional.",
      },
      {
        q: "¿Cómo sé si necesito terapia?",
        a: "Si una emoción o situación te está afectando en el día a día, hablar con un profesional puede ayudarte. La primera conversación es para orientarte, sin compromiso.",
      },
      {
        q: "¿Atienden niños?",
        a: "Sí, acompañamos desde la infancia hasta la adultez con enfoques adaptados a cada edad.",
      },
    ],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  "@id": `${SITE.url}/#organization`,
  name: SITE.legalName,
  alternateName: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/main_logo.webp`,
  image: SITE.ogImage,
  description:
    "Centro de bienestar emocional en Piedecuesta, Santander: educación especial e inclusiva, terapia de pareja y familiar, y acompañamiento psicológico individual.",
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    addressCountry: "CO",
  },
  areaServed: SITE.areaServed.map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  makesOffer: SERVICES.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title, url: `${SITE.url}/${s.slug}` },
  })),
};
