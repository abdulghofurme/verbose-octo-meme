import { Html, Head, Main, NextScript } from "next/document";
import { FC } from "react";
import PreloadLink from "../src/component/atoms/preloadLink";

const Document: FC = () => {
  return (
    <Html lang="id">
      <Head>
        {/* COLOR VARIABLE */}
        <PreloadLink
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/abdulghofurme/b-color@v1.1.4/dist/variables.min.css"
        />
        {/* TYPOGRAPHY */}
        <PreloadLink
          rel="stylesheet"
          as='style'
          href="https://cdn.jsdelivr.net/gh/abdulghofurme/b-typography@v1.0.2/dist/typography.min.css"
        />
        {/* COLOR TEXT */}
        <PreloadLink
          rel="stylesheet"
          as='style'
          href="https://cdn.jsdelivr.net/gh/abdulghofurme/b-color@v1.1.4/dist/text.min.css"
        />
        {/* MATERIAL ICON */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"/> */}
        <PreloadLink
          rel="stylesheet"
          as="font"
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
