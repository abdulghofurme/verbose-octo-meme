import { useQuery } from "@tanstack/react-query";
import category, { GetCategoriesInterface } from "../../api/category";
import { PropsWithUserAgent } from "../../interface/props";

export const KEYS_CATEGORY = {
  category: "category",
  categories: "categories",
};

export const useCategory = (param: GetCategoriesInterface) =>
  useQuery([KEYS_CATEGORY.category, param?.categorySlug], () =>
    category.getCategory(param)
  );

export const useCategories = (params: PropsWithUserAgent) => {
  const { isUserMobile } = params.userAgent;
  return useQuery(
    isUserMobile
      ? {
          queryKey: [''],
          queryFn() {},
        }
      : {
          queryKey: [KEYS_CATEGORY.categories],
          queryFn: () => category.getCategories(),
        }
  );
};
