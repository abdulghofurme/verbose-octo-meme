import { useState } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import { AppQueryClient } from "@lib/queryClient";
import "@styles/globals.scss";

const FAVICON_URL = `${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/logo/1.0.0/favicon.ico`;

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => AppQueryClient);

  return (
    <>
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
      </Head>

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
