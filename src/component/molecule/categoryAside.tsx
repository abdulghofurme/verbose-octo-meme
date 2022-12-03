import { FC } from "react";
import styles from "../../../styles/molecule/categoryAside.module.scss";
import CategoryAsideItem, {
  CategoryAsideItemProps,
} from "../atoms/categoryAsideItem";

export interface CategoryAsideListInterface extends CategoryAsideItemProps {
  subCategories?: CategoryAsideItemProps[];
}

export interface CategoryAsideProps {
  categories: CategoryAsideListInterface[];
}

const CategoryAside: FC<CategoryAsideProps> = ({categories}) => {
  return (
    <section className={styles.section}>
      <h6 className="b-typography__h6 b-color-text__onsurface--high-emphasis">
        Kategori Artikel
      </h6>

      {[...categories].splice(0, 8).map((category) =>
        category.subCategories?.length || 0 > 0 ? (
          <details key={category.url}>
            <CategoryAsideItem title={category.title} />
            {category.subCategories?.map((subCategory) => (
              <CategoryAsideItem
                title={subCategory.title}
                url={subCategory.url}
                key={`subCategory-${subCategory.url}`}
              />
            ))}
          </details>
        ) : (
          <CategoryAsideItem
            key={category.url}
            title={category.title}
            url={category.url}
          />
        )
      )}
    </section>
  );
};

export default CategoryAside;
