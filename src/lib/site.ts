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
  instagram: "https://www.instagram.com/alarconcbe/",
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
      "Educación especial e inclusiva en Piedecuesta, Santander, con una Magíster en Educación Especial. Estrategias para niños, familias y colegios. Agenda tu cita.",
    h1: "Educación especial e inclusiva en Piedecuesta, Santander",
    intro:
      "En Alarcón CBE, de la mano de una trabajadora social Magíster en Educación Especial, acompañamos a niños, niñas y adolescentes con necesidades educativas especiales, y a sus familias y colegios, para que cada estudiante aprenda y participe desde sus fortalezas. Trabajamos con planes individualizados, respeto por el ritmo de cada persona y un enfoque cálido.",
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
    slug: "asesoria-pareja-familiar",
    icon: "heart",
    title: "Asesoría de Pareja y Familiar",
    tagline: "Donde la comunicación sana fortalece los lazos",
    gradient: "from-blue-200 to-indigo-200 dark:from-blue-900 dark:to-indigo-900",
    features: [
      "Espacios seguros para dialogar, comprenderse y sanar",
      "Herramientas para mejorar la comunicación en pareja y en familia",
      "Apoyo en momentos de crisis, duelos o cambios importantes",
      "Intervención desde el respeto y la empatía",
    ],
    metaTitle: "Asesoría de Pareja y Familiar en Piedecuesta | Alarcón CBE",
    metaDescription:
      "Asesoría de pareja y orientación familiar con trabajo social en Piedecuesta, Santander. Mejora la comunicación, supera crisis y duelos en un espacio seguro y respetuoso. Agenda tu cita.",
    h1: "Asesoría de pareja y orientación familiar en Piedecuesta, Santander",
    intro:
      "La asesoría de pareja y familiar de Alarcón CBE, guiada por trabajo social, ofrece un espacio neutral y seguro para hablar de lo que cuesta, escucharse de nuevo y construir acuerdos. Te acompañamos en conflictos, cambios de etapa, duelos y crisis, desde el respeto y la empatía.",
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
        q: "¿Cuánto dura un proceso de asesoría de pareja?",
        a: "Depende de cada caso. En la primera sesión hablamos de objetivos y proponemos un plan con revisiones periódicas.",
      },
      {
        q: "¿Atienden a personas de Bucaramanga o Floridablanca?",
        a: "Sí, recibimos consultantes de Piedecuesta y del área metropolitana de Bucaramanga.",
      },
    ],
  },
  {
    slug: "asesorias-individuales",
    icon: "user",
    title: "Asesorías y Acompañamiento Individual",
    tagline: "Te escuchamos, te orientamos, te acompañamos",
    gradient: "from-purple-200 to-pink-200 dark:from-purple-900 dark:to-pink-900",
    features: [
      "Asesorías personalizadas para trabajar emociones, estrés y autoestima",
      "Orientación y estrategias para afrontar momentos difíciles",
      "Acompañamiento respetuoso desde la infancia hasta la adultez",
      "Espacios de confianza para conectar contigo mismo",
    ],
    metaTitle: "Asesorías y Acompañamiento Emocional en Piedecuesta | Alarcón CBE",
    metaDescription:
      "Asesorías individuales y acompañamiento emocional con trabajo social en Piedecuesta, Santander. Orientación para niños, adolescentes y adultos. Agenda tu cita.",
    h1: "Asesorías y acompañamiento emocional en Piedecuesta, Santander",
    intro:
      "Las asesorías individuales de Alarcón CBE son un espacio confidencial, guiado por trabajo social, para entender lo que estás viviendo y encontrar caminos a tu ritmo. Orientamos a niños, adolescentes y adultos que quieren manejar el estrés, fortalecer la autoestima o tomar decisiones en momentos difíciles.",
    audience: [
      "Adultos que atraviesan estrés, cambios o momentos de incertidumbre y buscan orientación.",
      "Adolescentes con cambios emocionales, escolares o sociales.",
      "Niños y familias que necesitan apoyo para expresar y regular emociones.",
    ],
    process: [
      "Primera conversación para escucharte y definir qué quieres trabajar.",
      "Plan de asesoría con objetivos claros y realistas.",
      "Sesiones periódicas con estrategias de afrontamiento y orientación.",
      "Seguimiento de avances y, si hace falta, remisión a otros profesionales.",
    ],
    faqs: [
      {
        q: "¿La información de las sesiones es confidencial?",
        a: "Sí. Lo que se conversa en sesión es confidencial, dentro de los límites éticos y legales de la práctica profesional.",
      },
      {
        q: "¿Cómo sé si necesito una asesoría?",
        a: "Si una situación te está afectando en el día a día, conversar con una profesional puede ayudarte. La primera conversación es para orientarte, sin compromiso.",
      },
      {
        q: "¿Qué pasa si necesito otro tipo de atención?",
        a: "Si tu caso requiere atención médica o de otra especialidad, te orientamos y te remitimos a los profesionales adecuados.",
      },
    ],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${SITE.url}/#organization`,
  name: SITE.legalName,
  alternateName: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/main_logo.webp`,
  image: SITE.ogImage,
  description:
    "Centro de bienestar emocional en Piedecuesta, Santander: educación especial e inclusiva para niños, asesorías a familias e individuales, y acompañamiento con trabajo social.",
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    addressCountry: "CO",
  },
  areaServed: SITE.areaServed.map((name) => ({ "@type": "City", name })),
  sameAs: [SITE.instagram],
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

// Content sourced from Laura's CV (public-safe details only). Add `photo` (e.g. "/laura.webp") when available.
export const TEAM = {
  name: "Laura Carolina Alarcón Blanco",
  role: "Trabajadora Social · Magíster en Educación Especial",
  photo: undefined as string | undefined,
  bio: "Trabajadora Social y Magíster en Educación Especial, comprometida con el trabajo comunitario y educativo. Acompaña a niños, adolescentes, adultos, parejas y familias con un enfoque humanista, promoviendo la inclusión, la atención a personas con discapacidad y la resolución de conflictos para mejorar la calidad de vida y el bienestar emocional.",
  education: [
    { title: "Magíster en Educación Especial", place: "Universidad Europea de Madrid", years: "2023 - 2024" },
    { title: "Trabajadora Social", place: "Universidad Industrial de Santander", years: "2011 - 2017" },
  ],
  experience: [
    "Coordinación metodológica del programa Generaciones con Bienestar (ICBF) en Santander",
    "Trabajo social en la Alcaldía de Bucaramanga y en el Centro Vida La Paz, con adultos mayores y sus familias",
    "Promotora social en GOAL Colombia, fortaleciendo organizaciones comunitarias",
    "Evaluación de primera infancia en Carmen de Bolívar, La Guajira y Cartagena",
  ],
  focus: ["Inclusión", "Discapacidad", "Intervención comunitaria", "Enfoque de género", "Resolución de conflictos"],
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: TEAM.name,
  jobTitle: "Trabajadora Social",
  worksFor: { "@id": `${SITE.url}/#organization` },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Universidad Europea de Madrid" },
    { "@type": "CollegeOrUniversity", name: "Universidad Industrial de Santander" },
  ],
  knowsAbout: TEAM.focus,
};
