import { useQuery } from "@tanstack/react-query";
import category, { GetCategoriesInterface } from "../../api/category";

export const KEYS_CATEGORY = {
  category: "category",
  categories: "categories",
};

export const useCategory = (param: GetCategoriesInterface) =>
  useQuery([KEYS_CATEGORY.category, param?.categorySlug], () =>
    category.getCategory(param)
  );
