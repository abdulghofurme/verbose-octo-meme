import { CategoryHeaderProps } from "../component/atoms/categoryHeader";
import { CategoryAsideListInterface } from "../component/molecule/categoryAside";
import { CategoryInterface } from "./categoryInterface";

class CategoryEntity {
  category: CategoryInterface;

  constructor(category: CategoryInterface) {
    this.category = category;
  }

  get categoryURL(): string {
    return `/${this.category.slug}`;
  }

  get categoryHeader(): CategoryHeaderProps {
    return {
      title: this.category.name,
      totalArticle: this.category.count,
      subCategories:
        this.category.sub_categories?.length || 0 > 0
          ? [
              { label: "Semua", url: this.categoryURL, slug: "" },
              ...(this.category.sub_categories?.map((subCategory) => ({
                label: subCategory.name,
                url: `${this.categoryURL}?sub=${subCategory.slug}`,
                slug: subCategory.slug,
              })) || []),
            ]
          : [],
    };
  }

  get categoryAsideItem(): CategoryAsideListInterface {
    return {
      title: `${this.category.name} (${this.category.count})`,
      url: this.categoryURL,
      subCategories:
        this.category.sub_categories?.length || 0 > 0
          ? [
              {
                title: `Semua (${this.category.count})`,
                url: this.categoryURL,
              },
              ...(this.category.sub_categories?.map((subCategory) => ({
                title: `${subCategory.name} (${subCategory.count})`,
                url: `${this.categoryURL}?sub=${subCategory.slug}`,
              })) || []),
            ]
          : [],
    };
  }
}

export default CategoryEntity;
