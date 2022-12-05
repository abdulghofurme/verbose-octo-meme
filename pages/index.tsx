import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"
import { dehydrate } from "@tanstack/react-query"

import article, { GetRecentNewsResultInterface } from "@api/article"
import {
  KEYS_ARTICLE,
  useHeadlines,
  usePemulaNews,
  useRecentNews,
} from "@hooks/api/article"
import category from "@api/category"
import { KEYS_CATEGORY, useCategories } from "@hooks/api/category"
import getCurrentURL from "@lib/getURL"
import uaParser from "@lib/userAgent"
import { ServerQueryClient } from "@lib/queryClient"

import { PropsWithUserAgent } from "@interface/props"

import PageSEO from "@component/atoms/head/pageSEO"
import { ArticleItemBigProps } from "@component/molecule/articleItem/articleItemBig"

const HomeTemplate = dynamic(import("@component/template/home"))
const HomeDesktopTemplate = dynamic(import("@component/template/homeDesktop"))

const Home: NextPage<PropsWithUserAgent> = ({ userAgent }) => {
  const image = `${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/logo/1.0.0/default-image-news.jpg`
  const router = useRouter()
  const url = getCurrentURL(router)

  const { data: headlinesData } = useHeadlines()
  const { data: pemulaNews } = usePemulaNews({
    limit: 7,
  })
  const {
    data: recentNewsData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useRecentNews({})
  const recentArticles = recentNewsData?.pages?.reduce<ArticleItemBigProps[]>(
    (r, v) => [...r, ...(v?.news || [])],
    []
  )
  const { data: categories } = useCategories({ userAgent })

  const homeTitle = "Berita dan Analisis Investasi"
  const homeHeadline = {
    url: "/terpopuler",
    title: "BERITA TERPOPULER MINGGU INI",
    articles: headlinesData || [],
    userAgent,
  }
  const articles = recentArticles || []
  const homePemula = {
    url: "/belajar-investasi",
    title: "BELAJAR INVESTASI",
    articles: pemulaNews || [],
  }
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
        <HomeTemplate
          userAgent={userAgent}
          title={homeTitle}
          headline={homeHeadline}
          horizontalSection={homePemula}
          articles={articles}
          infiniteScroll={{
            hasMore: Boolean(hasNextPage),
            isLoading: isFetchingNextPage,
            loadFunction: fetchNextPage,
          }}
        />
      ) : (
        <HomeDesktopTemplate
          userAgent={userAgent}
          title={homeTitle}
          headline={homeHeadline}
          articles={articles}
          infiniteScroll={{
            hasMore: Boolean(hasNextPage),
            isLoading: isFetchingNextPage,
            loadFunction: fetchNextPage,
          }}
          categoryAside={{
            categories: categories || [],
          }}
          pemulaAside={{
            articles: pemulaNews || [],
          }}
        />
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const userAgent = uaParser(ctx.req.headers["user-agent"])
  await ServerQueryClient.prefetchQuery(
    [KEYS_ARTICLE.headlines],
    article.getHeadlines
  )
  await ServerQueryClient.prefetchQuery([KEYS_ARTICLE.pemulaNews], () =>
    article.getPemula({ limit: 7 })
  )
  await ServerQueryClient.prefetchInfiniteQuery([KEYS_ARTICLE.recentNews], () =>
    article.getRecent({})
  )
  if (!userAgent.isUserMobile) {
    await ServerQueryClient.prefetchQuery([KEYS_CATEGORY.categories], () =>
      category.getCategories()
    )
  }
  ServerQueryClient.setQueriesData<{
    pages?: GetRecentNewsResultInterface[]
    pageParams?: string[]
  }>([KEYS_ARTICLE.recentNews], (data) => ({
    pages: data?.pages || [],
    pageParams: data?.pageParams?.map((pageParam) =>
      pageParam === undefined ? "" : pageParam
    ),
  }))

  return {
    props: {
      dehydratedState: dehydrate(ServerQueryClient),
      userAgent,
    },
  }
}

export default Home
