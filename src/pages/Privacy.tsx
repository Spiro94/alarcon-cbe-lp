import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { SITE } from "@/lib/site";

const Privacy = () => (
  <>
    <Seo
      title="Política de Privacidad | Alarcón CBE"
      description="Cómo Alarcón CBE recolecta, usa y protege tus datos personales, conforme a la Ley 1581 de 2012 de Colombia."
      path="/politica-de-privacidad"
    />
    <article className="container mx-auto max-w-3xl px-4 pb-20 pt-28">
      <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">Política de privacidad</h1>
      <p className="mb-8 text-sm text-muted-foreground">Última actualización: 19 de octubre de 2026</p>

      <div className="space-y-8 leading-relaxed text-muted-foreground">
        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">Responsable del tratamiento</h2>
          <p>{SITE.legalName}, ubicado en {SITE.city}, {SITE.region}, {SITE.country}. Correo: <a className="text-primary underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>. Teléfono/WhatsApp: {SITE.phoneDisplay}.</p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">Datos que recolectamos</h2>
          <p>Nombre, mensaje y, de forma opcional, correo electrónico y teléfono. Estos datos los escribes en el formulario del sitio o en la conversación de WhatsApp que se abre al enviarlo. El formulario no almacena datos en nuestros servidores: el mensaje se envía a través de WhatsApp.</p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">Finalidad</h2>
          <p>Responder tu consulta, agendar citas y darte información sobre nuestros servicios. No vendemos ni compartimos tus datos con terceros con fines comerciales.</p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">Tus derechos</h2>
          <p>Conforme a la Ley 1581 de 2012 y sus decretos reglamentarios (Habeas Data), puedes conocer, actualizar, rectificar y solicitar la supresión de tus datos, y revocar tu autorización. Escríbenos a {SITE.email} indicando tu solicitud.</p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">Información de menores</h2>
          <p>Los datos de niños, niñas y adolescentes solo se tratan con autorización de sus padres o representantes legales y en atención a su interés superior.</p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">Conservación</h2>
          <p>Conservamos tus datos el tiempo necesario para atender tu consulta y cumplir obligaciones legales; luego se eliminan.</p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-bold text-foreground">Servicios de terceros</h2>
          <p>Al continuar por WhatsApp, tu conversación se rige también por las políticas de WhatsApp. Este sitio usa Google Fonts para cargar la tipografía.</p>
        </section>
      </div>

      <p className="mt-12"><Link to="/" className="font-medium text-primary underline-offset-4 hover:underline">← Volver al inicio</Link></p>
    </article>
  </>
);

export default Privacy;
