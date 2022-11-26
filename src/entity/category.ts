import { CategoryHeaderProps } from "../component/atoms/categoryHeader";
import { CategoryInterface } from "./categoryInterface";

class CategoryEntity {
  category: CategoryInterface;

  constructor(category: CategoryInterface) {
    this.category = category;
  }

  get categoryHeader(): CategoryHeaderProps {
    const categoryURL = `/${this.category.slug}`;
    return {
      title: this.category.name,
      totalArticle: this.category.count,
      subCategories: [
        { label: "Semua", url: categoryURL, slug: "" },
        ...(this.category.sub_categories?.map((subCategory) => ({
          label: subCategory.name,
          url: `${categoryURL}?sub=${subCategory.slug}`,
          slug: subCategory.slug,
        })) || []),
      ],
    };
  }
}

export default CategoryEntity;
