import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import article, {
  GetPemulaInterface,
  GetRecentNewsInterface,
  GetRecentNewsByCategoryInterface,
} from "../../api/article";

export const KEYS_ARTICLE = {
  headlines: "headlines",
  recentNews: "recentNews",
  pemulaNews: "pemulaNews",
};

export const useHeadlines = () =>
  useQuery([KEYS_ARTICLE.headlines], article.getHeadlines);

export const useRecentNews = (param: GetRecentNewsInterface) =>
  useInfiniteQuery(
    [KEYS_ARTICLE.recentNews],
    ({ pageParam }) => {
      return article.getRecent({ ...param, scrollId: pageParam || "" });
    },
    {
      getNextPageParam: (lastPage, pages) => {
        const currentDataCount = pages.reduce(
          (r, v) => (r += (v?.news || []).length),
          0
        );
        const { total = 0 } = lastPage;
        if (currentDataCount >= total) return undefined;
        return lastPage.scrollId;
      },
    }
  );

export const useRecentNewsByCategory = (
  param: GetRecentNewsByCategoryInterface
) =>
  useInfiniteQuery(
    [KEYS_ARTICLE.recentNews, param?.categorySlug, param?.subCategorySlug],
    ({ pageParam }) => {
      return article.getRecentNewsByCategory({
        ...param,
        scrollId: pageParam || "",
      });
    },
    {
      getNextPageParam: (lastPage, pages) => {
        const currentDataCount = pages.reduce(
          (r, v) => (r += (v?.news || []).length),
          0
        );
        const { total = 0 } = lastPage;
        if (currentDataCount >= total) return undefined;
        return lastPage.scrollId;
      },
    }
  );

export const usePemulaNews = (param: GetPemulaInterface) =>
  useQuery([KEYS_ARTICLE.pemulaNews], () => article.getPemula(param));
