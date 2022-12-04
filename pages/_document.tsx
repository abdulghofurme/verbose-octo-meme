import { FC } from "react";
import { Html, Head, Main, NextScript } from "next/document";
import PreloadLink from "@component/atoms/head/preloadLink";
import PreloadLinkAsync from "@component/atoms/head/preloadLinkAsync";

const Document: FC = () => {
  return (
    <Html lang="id">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* TYPOGRAPHY */}
        <PreloadLink
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/abdulghofurme/b-typography@v1.0.3/dist/typography.min.css"
        />
        {/* MATERIAL ICON */}
        {/* <PreloadLink
          rel="stylesheet"
          as="font"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        /> */}
        {/* COLOR VARIABLE */}
        <PreloadLinkAsync
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/abdulghofurme/b-color@v1.1.4/dist/variables.min.css"
        />
        {/* COLOR TEXT */}
        <PreloadLinkAsync
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/abdulghofurme/b-color@v1.1.4/dist/text.min.css"
        />
        {/* BACKGROUND */}
        <PreloadLinkAsync
          as="style"
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/abdulghofurme/b-color@v1.1.4/dist/background.min.css"
        />
        {/* TYPOGRAPHY VARS */}
        <PreloadLinkAsync
          as="style"
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/abdulghofurme/b-typography@v1.0.3/dist/variable.min.css"
        />
      </Head>
      <body className="b-color-bg__surface--light">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
