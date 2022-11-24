/* eslint-disable import/no-anonymous-default-export */
import { HeadlineItemProps } from "../component/atoms/headlineItem";
import Article from "../entity/article";

export default {
  getHeadlines: async () => {
    let response: HeadlineItemProps[];

    try {
      const url = `${process.env.BASE_API}/news/v1/list-news`;
      const headers = {
        Authorization: "X-BAREKSA-WEB",
      };
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
};
