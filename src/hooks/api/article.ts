import { useQuery } from "@tanstack/react-query";
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
  useQuery([KEYS.recentNews], () => article.getRecent(param));

export const usePemulaNews = (param: getPemulaInterface) =>
  useQuery([KEYS.pemulaNews], () => article.getPemula(param));
