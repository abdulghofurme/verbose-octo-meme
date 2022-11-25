/* eslint-disable import/no-anonymous-default-export */
import { ArticleItemProps } from "../component/atoms/articleItem";
import { ArticleItemVerticalProps } from "../component/atoms/articleItemVertical";
import { HeadlineItemProps } from "../component/atoms/headlineItem";
import Article, { ArticlePemula } from "../entity/article";
import { ArticleInterface } from "../entity/articleInterface";

const BASE_API = process.env.NEXT_PUBLIC_BASE_API;

const headers = {
  Authorization: "X-BAREKSA-WEB",
};

export interface getRecentInterface {
  limit?: number;
  scrollId?: string;
}

export interface getPemulaInterface {
  limit?: number;
  page?: number;
}

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
          headers,
        }
      ).then((res) => res.json());

      const bigHeadlineResponse = await fetch(
        url +
          `?${new URLSearchParams({
            isHeader: "2",
            limit: "3",
          })}`,
        { headers }
      ).then((res) => res.json());

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
  getRecent: async ({ limit = 15, scrollId = "" }: getRecentInterface) => {
    let result: ArticleItemProps[];
    try {
      const response = await fetch(
        `${BASE_API}/news/v1/list-news` +
          `?${new URLSearchParams({
            limit: limit.toString(),
            scrollId,
          })}`,
        { headers }
      ).then((res) => res.json());
      const { status: responseStatus, data: responseData } = response;
      if (responseStatus === 200) {
        result = responseData?.news?.map(
          // (article: ArticleInterface, idx: number) => ({
          //   ...new Article(article).articleItem,
          //   noBorder: idx === 5,
          // })
          (article: ArticleInterface, idx: number) =>
            new Article(article).articleItem
        );
      } else {
        result = [];
      }
    } catch (error) {
      result = [];
    }

    return result;
  },
  getPemula: async ({ limit = 15, page = 1 }: getPemulaInterface) => {
    let result: ArticleItemVerticalProps[] = [];
    try {
      const response = await fetch(
        `${BASE_API}/news/v1/home/news/belajar-investasi` +
          `?${new URLSearchParams({
            limit: limit.toString(),
            page: page.toString(),
          })}`,
        { headers }
      ).then((res) => res.json());
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
