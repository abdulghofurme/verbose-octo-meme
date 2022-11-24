import { FC } from "react";
import ArticleItem, { ArticleItemProps } from "../atoms/articleItem";
import styles from "../../../styles/molecule/articleList.module.scss";

interface ArticleListProps {
  articles: ArticleItemProps[];
}

const ArticleList: FC<ArticleListProps> = ({ articles }) => {
  return (
    <div className={styles.article_list}>
      {articles.map((articleItem) => (
        <ArticleItem key={articleItem.url} {...articleItem} />
      ))}
    </div>
  );
};

export default ArticleList;
