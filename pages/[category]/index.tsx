import { NextPage, GetServerSideProps } from "next"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"
import { dehydrate } from "@tanstack/react-query"

import category from "@api/category"
import { KEYS_CATEGORY, useCategory } from "@hooks/api/category"
import article, { GetRecentNewsByCategoryResultInterface } from "@api/article"
import { KEYS_ARTICLE, useRecentNewsByCategory } from "@hooks/api/article"
import getCurrentURL from "@lib/getURL"
import { ServerQueryClient } from "@lib/queryClient"

import InfiniteScroll from "@component/atoms/infiniteScroll"
import { ArticleItemProps } from "@component/molecule/articleItem/articleItem"
import PageSEO from "@component/atoms/head/pageSEO"
import seoConfig from "@config/seo.json"
import CategoryTemplate from "@component/template/category"
const CircularLoader = dynamic(() => import("@component/atoms/circularLoader"))

const Category: NextPage<{
  params: {
    categorySlug: string
    subCategorySlug: string
  }
}> = ({ params: { categorySlug, subCategorySlug } }) => {
  const image = `${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/logo/1.0.0/default-image-news.jpg`

  const router = useRouter()
  const url = getCurrentURL(router)

  const { data: category } = useCategory({ categorySlug })
  const {
    data: recentNewsData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useRecentNewsByCategory({ categorySlug, subCategorySlug })

  const recentArticles = recentNewsData?.pages?.reduce<ArticleItemProps[]>(
    (r, v) => [...r, ...(v?.news || [])],
    []
  )

  const categorySEO: {
    [index: string]: { title?: string; description?: string }
  } = seoConfig.category
  const { title: titleDefault = "", description: descriptionDefault = "" } =
    categorySEO.default
  const { title, description } = categorySEO[categorySlug]

  return (
    <>
      <PageSEO
        url={url}
        title={title || titleDefault}
        description={description || descriptionDefault}
        image={image}
        keywords={(category?.subCategories || []).map(({ label }) => label)}
      />

      <InfiniteScroll
        hasMore={Boolean(hasNextPage)}
        isLoading={isFetchingNextPage}
        loadFunction={fetchNextPage}
        LoadingComponent={<CircularLoader marginTop={8} marginBottom={44} />}
      >
        <CategoryTemplate
          categoryHeader={{ ...category, currentSubCategory: subCategorySlug }}
          articles={recentArticles}
        />
      </InfiniteScroll>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { category: categorySlug, sub: subCategorySlug = "" },
}) => {
  await ServerQueryClient.prefetchQuery(
    [KEYS_CATEGORY.category, categorySlug],
    () => category.getCategory({ categorySlug: categorySlug as string })
  )
  await ServerQueryClient.prefetchInfiniteQuery(
    [KEYS_ARTICLE.recentNews, categorySlug, subCategorySlug],
    () =>
      article.getRecentNewsByCategory({
        categorySlug: categorySlug as string,
        subCategorySlug: subCategorySlug as string,
      })
  )
  ServerQueryClient.setQueriesData<{
    pages?: GetRecentNewsByCategoryResultInterface[]
    pageParams?: string[]
  }>([KEYS_ARTICLE.recentNews, categorySlug, subCategorySlug], (data) => ({
    pages: data?.pages || [],
    pageParams: data?.pageParams?.map((pageParam) =>
      pageParam === undefined ? "" : pageParam
    ),
  }))

  return {
    props: {
      params: {
        categorySlug,
        subCategorySlug,
      },
      dehydratedState: dehydrate(ServerQueryClient),
    },
  }
}

export default Category
