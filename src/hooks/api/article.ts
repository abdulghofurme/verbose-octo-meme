import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import article, {
  getPemulaInterface,
  getRecentInterface,
} from "../../api/article";

export const KEYS = {
  headlines: "headlines",
  recentNews: "recentNews",
  pemulaNews: "pemulaNews",
};

export const useHeadlines = () =>
  useQuery([KEYS.headlines], article.getHeadlines);

export const useRecentNews = (param: getRecentInterface) =>
  useInfiniteQuery(
    [KEYS.recentNews],
    ({ pageParam }) => {
      return article.getRecent({ ...param, scrollId: pageParam || "" });
    },
    {
      getNextPageParam: (lastPage, pages) => {
        const currentDataCount = pages.reduce((r, v) => r += (v?.news || []).length, 0)
        const {total = 0} = lastPage
        if (currentDataCount >= total) return undefined
        return lastPage.scrollId;
      },
    }
  );

export const usePemulaNews = (param: getPemulaInterface) =>
  useQuery([KEYS.pemulaNews], () => article.getPemula(param));
