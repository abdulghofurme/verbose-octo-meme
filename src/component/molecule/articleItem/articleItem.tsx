import { FC } from "react"
import styles from "@styles/molecule/articleItem/articleItem.module.scss"
import Link from "next/link"
import ArticleThumbnail from "@component/atoms/articleThumbnail"
import { ArticleItemSmallProps } from "@component/molecule/articleItem/articleItemSmall"

export interface ArticleItemProps extends ArticleItemSmallProps {
  categoryURL?: string
  published: string
  noBorder?: boolean
}

const ArticleItem: FC<ArticleItemProps> = ({
  url,
  title,
  category,
  thumbnail,
  published,
  categoryURL = "",
  noBorder = false,
}) => {
  if (!url) return null
  const categoryClassName = "b-typography__button b-color-text__primary--800"

  return (
    <article
      className={`${styles.article_item} ${noBorder ? styles.no_border : ""}`}
    >
      <div>
        <Link href={url} data-testid="articleItem__link">
          <h4
            data-testid="articleItem__title"
            className="b-typography__subtitle-2--medium b-color-text__onsurface--high-emphasis"
          >
            {title}
          </h4>
        </Link>

        <div className={`${styles.subtitle}`}>
          {categoryURL ? (
            <Link
              data-testid="articleItem__category"
              href={categoryURL}
              className={categoryClassName}
            >
              {category}
            </Link>
          ) : (
            <span className={categoryClassName}>{category}</span>
          )}
          <span className="b-color-text__onsurface--medium-emphasis">•</span>
          <span
            data-testid="articleItem__published"
            className="b-typography__caption b-color-text__onsurface--medium-emphasis"
          >
            {published}
          </span>
        </div>
      </div>

      <Link href={url} data-testid="articleItem__link">
        <ArticleThumbnail
          data-testid="articleItem__thumbnail"
          src={thumbnail}
          alt={`${title} thumbnail`}
          size={64}
        />
      </Link>
    </article>
  )
}

export default ArticleItem
