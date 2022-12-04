import Head from "next/head";
import { FC } from "react";

interface PageSEOProps {
  title: string;
  description: string;
  image: string;
  url: string;
  keywords?: string[];
}

const PageSEO: FC<PageSEOProps> = ({
  title,
  description,
  image,
  url,
  keywords,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="keywords" content={keywords?.join(", ")} />

      {/* OG PAGE SPECIFIC  */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* TWITTER PAGE SPECIFIC */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default PageSEO;
