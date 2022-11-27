/* eslint-disable import/no-anonymous-default-export */
import { ArticleItemProps } from "../component/atoms/articleItem";
import { ArticleItemVerticalProps } from "../component/atoms/articleItemVertical";
import { HeadlineItemProps } from "../component/atoms/headlineItem";
import Article, { ArticlePemula } from "../entity/article";
import { ArticleInterface } from "../entity/articleInterface";
import { GENERAL_HEADERS, BASE_API } from "./config";

export interface GetPemulaInterface {
  limit?: number;
  page?: number;
}

export interface GetRecentNewsInterface {
  limit?: number;
  scrollId?: string;
}
export interface GetRecentNewsResultInterface {
  news: ArticleItemProps[];
  scrollId: string;
  total: number;
}
export interface GetRecentNewsByCategoryInterface
  extends GetRecentNewsInterface {
  categorySlug: string;
  subCategorySlug?: string;
}
export interface GetRecentNewsByCategoryResultInterface
  extends GetRecentNewsResultInterface {}

export default {
  getHeadlines: async () => {
    let response: HeadlineItemProps[];

    try {
      const url = `${BASE_API}/news/v1/list-news`;
      const smallHeadlineResponse = await fetch(
        url +
          `?${new URLSearchParams({
            isHeader: "1",
            limit: "2",
          })}`,
        {
          headers: GENERAL_HEADERS,
        }
      ).then((res) => {
        return res.json();
      });

      const bigHeadlineResponse = await fetch(
        url +
          `?${new URLSearchParams({
            isHeader: "2",
            limit: "3",
          })}`,
        { headers: GENERAL_HEADERS }
      ).then((res) => {
        return res.json();
      });

      const {
        status: smallHeadlineResponseStatus,
        data: smallHeadlineResponseData,
      } = smallHeadlineResponse;
      const {
        status: bigHeadlineResponseStatus,
        data: bigHeadlineResponseData,
      } = bigHeadlineResponse;

      if (
        smallHeadlineResponseStatus === 200 ||
        bigHeadlineResponseStatus === 200
      ) {
        const [firstBigHeadline, secondBigHeadline, lastBigHeadline] =
          bigHeadlineResponseData?.news || [];
        const smallHeadlines = smallHeadlineResponseData?.news || [];
        const headlinesOrder = [
          firstBigHeadline,
          secondBigHeadline,
          ...smallHeadlines,
          lastBigHeadline,
        ];
        response = headlinesOrder.map((article, idx) => ({
          ...new Article(article).headline,
          priority: idx === 0,
        }));
      } else response = [];
    } catch (error) {
      response = [];
    }

    return response;
  },
  getRecent: async ({ limit = 15, scrollId = "" }: GetRecentNewsInterface) => {
    const result: GetRecentNewsResultInterface = {
      scrollId: "",
      news: [],
      total: 0,
    };
    try {
      const response = await fetch(
        `${BASE_API}/news/v1/list-news` +
          `?${new URLSearchParams({
            limit: limit.toString(),
            scrollId,
          })}`,
        { headers: GENERAL_HEADERS }
      ).then((res) => {
        return res.json();
      });
      const { status: responseStatus, data: responseData } = response;
      if (responseStatus === 200) {
        result.news = responseData?.news?.map(
          (article: ArticleInterface) => new Article(article).articleItem
        );
        result.scrollId = responseData?.scrollId;
        result.total = responseData?.total;
      } else {
        result.news = [];
      }
    } catch (error) {
      result.news = [];
    }

    return result;
  },
  getRecentNewsByCategory: async ({
    scrollId = "",
    limit = 15,
    subCategorySlug = "",
    categorySlug,
  }: GetRecentNewsByCategoryInterface) => {
    let result: GetRecentNewsByCategoryResultInterface = {
      scrollId: "",
      news: [],
      total: 0,
    };
    try {
      const response = await fetch(
        `${BASE_API}/news/v1/home/category/${categorySlug}` +
          `?${new URLSearchParams({
            limit: limit.toString(),
            scrollId,
            subCategory: subCategorySlug,
          })}`,
        { headers: GENERAL_HEADERS }
      ).then((res) => {
        return res.json();
      });
      const { status: responseStatus, data: responseData } = response;
      if (responseStatus === 200) {
        result.news = responseData?.news?.map(
          (article: ArticleInterface) => new Article(article).articleItem
        );
        result.scrollId = responseData?.scrollId;
        result.total = responseData?.total;
      } else {
        result.news = [];
      }
    } catch (error) {
      result.news = [];
    }
    return result;
  },
  getPemula: async ({ limit = 15, page = 1 }: GetPemulaInterface) => {
    let result: ArticleItemVerticalProps[] = [];
    try {
      const response = await fetch(
        `${BASE_API}/news/v1/home/news/belajar-investasi` +
          `?${new URLSearchParams({
            limit: limit.toString(),
            page: page.toString(),
          })}`,
        { headers: GENERAL_HEADERS }
      ).then((res) => {
        return res.json();
      });
      const { status: responseStatus, data: responseData } = response;

      if (responseStatus === 200) {
        for (const article of responseData?.news) {
          if (article.wajib_baca)
            result.unshift(new ArticlePemula(article).articleItemVertical);
          else result.push(new ArticlePemula(article).articleItemVertical);
        }

        result = result.splice(0, 5);
      }
    } catch (error) {
      result = [];
    }

    return result;
  },
};
