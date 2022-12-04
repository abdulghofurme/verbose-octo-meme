import { FC } from "react"
import CategoryHeader, {
  CategoryHeaderProps,
} from "@component/atoms/categoryHeader"
import Header from "@component/molecule/header"
import styles from "@styles/template/category.module.scss"
import ArticleItem, {
  ArticleItemProps,
} from "@component/molecule/articleItem/articleItem"

interface CategoryTemplateProps {
  categoryHeader?: CategoryHeaderProps
  articles?: ArticleItemProps[]
}

const CategoryTemplate: FC<CategoryTemplateProps> = ({
  categoryHeader = {},
  articles = [],
}) => {
  articles[0].noBorder = true
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
  )
}

export default CategoryTemplate
