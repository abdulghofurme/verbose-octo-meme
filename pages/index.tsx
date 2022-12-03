import { GetServerSideProps, NextPage } from "next";
import PageSEO from "../src/component/atoms/pageSEO";
import getCurrentURL from "../src/lib/getURL";
import HomeTemplate, {
  HomeTemplateProps,
} from "../src/component/template/home";
import { useRouter } from "next/router";
import { dehydrate } from "@tanstack/react-query";
import article, { GetRecentNewsResultInterface } from "../src/api/article";
import {
  KEYS_ARTICLE,
  useHeadlines,
  usePemulaNews,
  useRecentNews,
} from "../src/hooks/api/article";
import uaParser from "../src/lib/userAgent";
import { ArticleItemProps } from "../src/component/atoms/articleItem";
import dynamic from "next/dynamic";
import InfiniteScroll from "../src/component/atoms/infiniteScroll";
import { PropsWithUserAgent } from "../src/interface/props";
import { ServerQueryClient } from "../src/lib/queryClient";
import { KEYS_CATEGORY, useCategories } from "../src/hooks/api/category";
import category from "../src/api/category";

const CircularLoader = dynamic(
  () => import("../src/component/atoms/circularLoader"),
  {
    ssr: false,
  }
);

const Home: NextPage<PropsWithUserAgent> = ({ userAgent }) => {
  const image = `${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/logo/1.0.0/default-image-news.jpg`;
  const router = useRouter();
  const url = getCurrentURL(router);

  const { data: headlinesData } = useHeadlines();
  const { data: pemulaNews } = usePemulaNews({
    limit: 7,
  });
  const {
    data: recentNewsData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useRecentNews({});
  const recentArticles = recentNewsData?.pages?.reduce<ArticleItemProps[]>(
    (r, v) => [...r, ...(v?.news || [])],
    []
  );
  const { data: categories } = useCategories();

  const homeProps: HomeTemplateProps = {
    userAgent,
    title: "Berita dan Analisis Investasi",
    headline: {
      url: "/terpopuler",
      title: "BERITA TERPOPULER MINGGU INI",
      articles: headlinesData || [],
      userAgent,
    },
    articles: recentArticles || [],
    horizontalSection: {
      url: "/belajar-investasi",
      title: "BELAJAR INVESTASI",
      articles: pemulaNews || [],
    },
    categoryAside: {
      categories: categories || [],
    },
  };

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

      {userAgent.isUserMobile ? (
        <InfiniteScroll
          hasMore={Boolean(hasNextPage)}
          isLoading={isFetchingNextPage}
          loadFunction={fetchNextPage}
          LoadingComponent={<CircularLoader marginTop={8} marginBottom={44} />}
        >
          <HomeTemplate {...homeProps} />
        </InfiniteScroll>
      ) : (
        <HomeTemplate {...homeProps} />
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const userAgent = uaParser(ctx.req.headers["user-agent"]);
  await ServerQueryClient.prefetchQuery(
    [KEYS_ARTICLE.headlines],
    article.getHeadlines
  );
  await ServerQueryClient.prefetchQuery([KEYS_ARTICLE.pemulaNews], () =>
    article.getPemula({ limit: 7 })
  );
  await ServerQueryClient.prefetchInfiniteQuery([KEYS_ARTICLE.recentNews], () =>
    article.getRecent({})
  );
  await ServerQueryClient.prefetchQuery([KEYS_CATEGORY.categories], () =>
    category.getCategories()
  );
  ServerQueryClient.setQueriesData<{
    pages?: GetRecentNewsResultInterface[];
    pageParams?: string[];
  }>([KEYS_ARTICLE.recentNews], (data) => ({
    pages: data?.pages || [],
    pageParams: data?.pageParams?.map((pageParam) =>
      pageParam === undefined ? "" : pageParam
    ),
  }));

  return {
    props: {
      dehydratedState: dehydrate(ServerQueryClient),
      userAgent,
    },
  };
};

export default Home;
