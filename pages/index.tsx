import { GetServerSideProps, NextPage } from "next";
import PageSEO from "../src/component/atoms/pageSEO";
import getCurrentURL from "../src/utils/getURL";
import HomeTemplate from "../src/component/template/home";
import { useRouter } from "next/router";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import article, { getRecentResultInterface } from "../src/api/article";
import {
  KEYS,
  useHeadlines,
  usePemulaNews,
  useRecentNews,
} from "../src/hooks/api/article";
import uaParser, { UserAgentInterface } from "../src/utils/userAgent";
import { ArticleItemProps } from "../src/component/atoms/articleItem";
import dynamic from "next/dynamic";
import InfiniteScroll from "../src/component/atoms/infiniteScroll";
// const InfiniteScroll = dynamic(
//   () => import("../src/component/atoms/infiniteScroll"),
//   { ssr: false }
// );
const CircularLoader = dynamic(
  () => import("../src/component/atoms/circularLoader"),
  {
    ssr: false,
  }
);

interface HomeProps {
  userAgent: UserAgentInterface;
}

const Home: NextPage<HomeProps> = ({ userAgent, ...t }) => {
  const image = `${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/logo/1.0.0/default-image-news.jpg`;
  const router = useRouter();
  const url = getCurrentURL(router);

  const { data: headlinesData, isFetching: headlineFetching } = useHeadlines();
  const { data: pemulaNews, isFetching: pemulaFetching } = usePemulaNews({
    limit: 7,
  });
  const {
    isFetching,
    data: recentNewsData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useRecentNews({});
  const recentArticles = recentNewsData?.pages?.reduce<ArticleItemProps[]>(
    (r, v) => [...r, ...(v?.news || [])],
    []
  );

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

      <InfiniteScroll
        hasMore={Boolean(hasNextPage)}
        isLoading={isFetchingNextPage}
        loadFunction={fetchNextPage}
        LoadingComponent={<CircularLoader marginTop={8} marginBottom={44} />}
      >
        <HomeTemplate
          title="Berita dan Analisis Investasi"
          headline={{
            url: "/terpopuler",
            title: "TERPOPULER MINGGU INI",
            articles: headlinesData || [],
            userAgent,
          }}
          articles={recentArticles || []}
          horizontalSection={{
            url: "/belajar-investasi",
            title: "BELAJAR INVESTASI",
            articles: pemulaNews || [],
          }}
        />
      </InfiniteScroll>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const userAgent = uaParser(ctx.req.headers["user-agent"]);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([KEYS.headlines], article.getHeadlines);
  await queryClient.prefetchQuery([KEYS.pemulaNews], () =>
    article.getPemula({ limit: 7 })
  );
  await queryClient.prefetchInfiniteQuery([KEYS.recentNews], () =>
    article.getRecent({})
  );
  queryClient.setQueriesData<{
    pages?: getRecentResultInterface[];
    pageParams?: string[];
  }>([KEYS.recentNews], (data) => ({
    pages: data?.pages || [],
    pageParams: data?.pageParams?.map((pageParam) =>
      pageParam === undefined ? "" : pageParam
    ),
  }));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      userAgent,
    },
  };
};

export default Home;
