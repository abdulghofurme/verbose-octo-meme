/* eslint-disable import/no-anonymous-default-export */
import { CategoryHeaderProps } from "../component/atoms/categoryHeader";
import CategoryEntity from "../entity/category";
import { GENERAL_HEADERS } from "../config/api";
import { BASE_API } from "../config/env";
import { CategoryAsideListInterface } from "../component/molecule/categoryAside";
import { CategoryInterface } from "../entity/categoryInterface";

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
    let result: CategoryAsideListInterface[];
    try {
      const response = await fetch(`${BASE_API}/news/v1/list-categories`, {
        headers: GENERAL_HEADERS,
      }).then((res) => {
        return res.json();
      });
      const { status: responseStatus, data: responseData } = response;
      if (responseStatus === 200) {
        result = responseData.categories.map(
          (category: CategoryInterface) =>
            new CategoryEntity(category).categoryAsideItem
        );
      } else {
        result = [];
      }
    } catch (error) {
      result = [];
    }

    return result;
  },
};
