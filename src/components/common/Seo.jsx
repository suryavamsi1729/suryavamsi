import { Helmet } from "react-helmet";

export default function SEO({
  title,
  description,
  keywords = "Surya Vamsi Doddi, Frontend Developer, React Developer, Tailwind CSS, GSAP, AWS Cloud, Portfolio, Web Developer",
  image = "https://suryavamsi.vercel.app/images/optimized/suryavamsi.avif",
  url = "https://suryavamsi.vercel.app/",
}) {
  return (
    <Helmet>
      {/* Primary Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Surya Vamsi Doddi" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Surya Vamsi Portfolio" />

      {/* Twitter */}
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@your_twitter_handle" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} /> */}

      {/* Favicon & Theme */}
      <link rel="icon" href="/images/slogo.avif" type="image/avif" />
      <meta name="theme-color" content="#0ea5e9" />
    </Helmet>
  );
}
