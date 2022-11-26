import { FC } from "react";
import CategoryHeader, { CategoryHeaderProps } from "../atoms/categoryHeader";
import Header from "../molecule/header";
import styles from "../../../styles/template/category.module.scss";
import ArticleItem, { ArticleItemProps } from "../atoms/articleItem";

interface CategoryTemplateProps {
  categoryHeader?: CategoryHeaderProps;
  articles?: ArticleItemProps[];
}

const CategoryTemplate: FC<CategoryTemplateProps> = ({
  categoryHeader = {},
  articles = [],
}) => {
  return (
    <>
      <Header className="b-color-bg__surface--dark" />

      <CategoryHeader {...categoryHeader} />
      <main className={styles.main}>
        {articles.map((articleItem) => (
          <ArticleItem key={articleItem?.url} {...articleItem} />
        ))}
      </main>
    </>
  );
};

export default CategoryTemplate;
