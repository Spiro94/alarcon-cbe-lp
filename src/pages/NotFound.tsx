import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <section className="container mx-auto flex min-h-svh flex-col items-center justify-center px-4 text-center">
    <Head>
      <title>Página no encontrada | Alarcón CBE</title>
      <meta name="robots" content="noindex" />
    </Head>
    <h1 className="mb-4 text-4xl font-bold text-foreground">Página no encontrada</h1>
    <p className="mb-8 text-muted-foreground">La página que buscas no existe o fue movida.</p>
    <Button asChild size="lg" className="rounded-full">
      <Link to="/">Volver al inicio</Link>
    </Button>
  </section>
);

export default NotFound;
