import { FC } from "react"
import Link from "next/link"
import styles from "@styles/molecule/articleItem/articleItemVertical.module.scss"
import ArticleThumbnail from "@component/atoms/articleItem/articleThumbnail"
import { ArticleItemSmallProps } from "@component/molecule/articleItem/articleItemSmall"

export interface ArticleItemVerticalProps extends ArticleItemSmallProps {
  badge?: string
}

const ArticleItemVertical: FC<ArticleItemVerticalProps> = ({
  url,
  title,
  thumbnail,
  badge,
}) => (
  <article className={styles.article}>
    <Link href={url}>
      <ArticleThumbnail src={thumbnail} alt={`${title} thumbnail`} size={120} />
      {badge && (
        <span className="b-typography__caption b-typography__caption--small b-color-text__onprimary--high-emphasis">
          {badge}
        </span>
      )}
      <h4 className="b-typography__caption b-color-text__onsurface--high-emphasis">
        {title}
      </h4>
    </Link>
  </article>
)

export default ArticleItemVertical
