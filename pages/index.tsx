import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../src/component/atoms/header";
import PageSEO from "../src/component/atoms/pageSEO";
import getCurrentURL from "../src/utils/getURL";

const Home: NextPage = () => {
  const image = `${process.env.BASE_IMAGE_URL}/logo/1.0.0/default-image-news.jpg`;
  const router = useRouter();
  const url = getCurrentURL(router)
  return (
    <>
      <Head>
        <PageSEO
          url={url}
          title="Berita Terkini Investasi, Ekonomi, dan Pasar Modal | Bareksa"
          description="Dapatkan informasi terkini dan terpercaya tentang pasar modal, reksadana, obligasi, emas, serta perkembangan ekonomi. Berita terupdate terkait investasi di Indonesia."
          image={image}
          keywords={[
            "info pasar modal",
            "informasi bursa",
            "berita ekonomi",
            "investasi di indonesia",
          ]}
        />
      </Head>

      <main>
        <Header/>
        <h1 className="b-typography__h4 b-color-text__teal--800">Index Page</h1>
      </main>
    </>
  );
};

export default Home;
