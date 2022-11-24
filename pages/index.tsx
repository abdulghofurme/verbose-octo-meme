import { NextPage } from "next";
import PageSEO from "../src/component/atoms/pageSEO";
import getCurrentURL from "../src/utils/getURL";
import HomeTemplate from "../src/component/template/home";
import { useRouter } from "next/router";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import article from "../src/api/article";
import { useHeadlines } from "../src/hooks/api/article";

const Home: NextPage = () => {
  const image = `${process.env.BASE_IMAGE_URL}/logo/1.0.0/default-image-news.jpg`;
  const router = useRouter();
  const url = getCurrentURL(router);

  const { data: headlinesData } = useHeadlines();

  return (
    <>
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

      <HomeTemplate
        title="Berita dan Analisis Investasi"
        headline={{
          url: "/terpopuler",
          title: "TERPOPULER MINGGU INI",
          articles: headlinesData || [],
        }}
      />
    </>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.fetchQuery(["headlines"], article.getHeadlines);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
