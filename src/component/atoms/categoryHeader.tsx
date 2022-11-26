import Link from "next/link";
import { FC } from "react";
import styles from "../../../styles/atoms/categoryHeader.module.scss";

export interface CategoryHeaderProps {
  title?: string;
  totalArticle?: number;
  subCategories?: { url: string; label: string; slug: string }[];
  currentSubCategory?: string;
}

const CategoryHeader: FC<CategoryHeaderProps> = ({
  title = "Kategori",
  totalArticle = 0,
  subCategories = [],
  currentSubCategory = "",
}) => {
  return (
    <section className={`${styles.section} b-color-bg__surface--dark`}>
      <div className="b-typography__overline b-color-text__onsurface--medium-emphasis">
        <Link href="/" className="b-color-text__primary--900">
          BERITA
        </Link>
        <span>/</span>
        {title.toUpperCase()}
      </div>
      <h1 className="b-typography__h4 b-color-text__onsurface--high-emphasis">
        {title}
      </h1>
      <span className="b-typography__caption b-color-text__onsurface--medium-emphasis">
        {totalArticle.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} artikel
      </span>

      {subCategories.length > 1 && (
        <div className={styles.sub_categories}>
          <div>
            {subCategories.map(({ url, label, slug }) => (
              <Link
                key={url}
                href={url || ""}
                className={`b-typography__body-2 b-typography__body-2--medium ${
                  currentSubCategory === slug
                    ? "b-color-text__primary--800 " +
                      styles["sub_category--active"]
                    : "b-color-text__onsurface--disabled"
                } `}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default CategoryHeader;
