import { Head } from "vite-react-ssg";
import { SITE } from "@/lib/site";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  jsonLd?: object[];
}

const Seo = ({ title, description, path = "/", jsonLd = [] }: SeoProps) => {
  const url = `${SITE.url}${path === "/" ? "/" : path}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content="es_CO" />
      <meta property="og:image" content={SITE.ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={SITE.ogImage} />
      {jsonLd.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Head>
  );
};

export default Seo;
