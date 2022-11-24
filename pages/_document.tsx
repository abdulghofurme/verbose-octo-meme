import { Html, Head, Main, NextScript } from "next/document";
import { FC } from "react";
import PreloadLink from "../src/component/atoms/preloadLink";

const FAVICON_URL = `${process.env.BASE_IMAGE_URL}/logo/1.0.0/favicon.ico`;

const Document: FC = () => {
  return (
    <Html lang="id">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="author" content="Bareksa Portal Investasi" />
        <meta name="theme-color" content="#689c34" />

        {/* FAVICON */}
        <link rel="shortcut icon" href={FAVICON_URL} />
        <link rel="apple-touch-icon" href={FAVICON_URL} />

        {/* OG GENERAL */}
        <meta property="og:site_name" content="Bareksa.com" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:type" content="article" />

        {/* FACEBOOK */}
        <meta property="fb:pages" content="105765639586044" />
        <meta property="fb:app_id" content="189277321128119" />
        <meta property="fb:admins" content="100000149676767" />

        {/* TWITTER GENERAL */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bareksacom" />
        <meta name="twitter:creator" content="@bareksacom" />
        <meta name="twitter:domain" content="www.bareksa.com" />

        {/* BOTS */}
        <meta name="robots" content="index, follow" />
        <meta name="robots" content="max-image-preview:large" />
        <meta name="robots" content="noodp,noydir" />
        <meta name="googlebot" content="index, follow" />
        <meta name="msnbot" content="index, follow" />

        {/* COLOR VARIABLE */}
        <PreloadLink
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/abdulghofurme/b-color@v1.1.4/dist/variables.min.css"
        />
        {/* TYPOGRAPHY */}
        <PreloadLink
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/abdulghofurme/b-typography@v1.0.2/dist/typography.min.css"
        />
        {/* COLOR TEXT */}
        <PreloadLink
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/abdulghofurme/b-color@v1.1.4/dist/text.min.css"
        />
        {/* MATERIAL ICON */}
        <PreloadLink
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"
        />
        {/* BACKGROUND */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/abdulghofurme/b-color@v1.1.4/dist/background.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
