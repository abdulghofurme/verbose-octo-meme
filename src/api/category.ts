/* eslint-disable import/no-anonymous-default-export */
import { CategoryHeaderProps } from "../component/atoms/categoryHeader";
import CategoryEntity from "../entity/category";
import { BASE_API, GENERAL_HEADERS } from "./config";

export interface GetCategoriesInterface {
  categorySlug?: string;
}

export default {
  getCategory: async ({ categorySlug }: GetCategoriesInterface) => {
    let result: CategoryHeaderProps;
    try {
      const response = await fetch(
        `${BASE_API}/news/v1/list-categories` +
          `?${new URLSearchParams({ slug: categorySlug || "" })}`,
        { headers: GENERAL_HEADERS }
      ).then((res) => {
        return res.json();
      });
      const { status: responseStatus, data: responseData } = response;
      if (responseStatus === 200)
        result = new CategoryEntity((responseData?.categories || [])[0])
          .categoryHeader;
      else result = {};
    } catch (error) {
      result = {};
    }

    return result;
  },
  getCategories: async () => {
    let result = {};
    try {
      const response = await fetch(`${BASE_API}/news/v1/list-categories`, {
        headers: GENERAL_HEADERS,
      }).then((res) => {
        return res.json();
      });

      console.log({ response });
    } catch (error) {
      console.log({ error });
    }

    return result;
  },
};
