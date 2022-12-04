import { FC } from "react"
import Link from "next/link"
import ArticleThumbnail from "@component/atoms/articleThumbnail"
import styles from "@styles/molecule/articleItem/articleItemSmall.module.scss"

export interface ArticleItemSmallProps {
  url: string
  title: string
  category: string
  thumbnail: string
}

const ArticleItemSmall: FC<ArticleItemSmallProps> = ({
  url,
  title,
  category,
  thumbnail,
}) => (
  <article className={styles.article_item}>
    <Link href={url}>
      <div>
        <h4 className="b-typography__subtitle-2--medium b-color-text__onsurface--high-emphasis">
          {title}
        </h4>
        <span className="b-typography__caption b-color-text__onsurface--medium-emphasis">
          {category}
        </span>
      </div>

      <ArticleThumbnail src={thumbnail} size={48} alt={`${title} thumbnail`} />
    </Link>
  </article>
)

export default ArticleItemSmall
