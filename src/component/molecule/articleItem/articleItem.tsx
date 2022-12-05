import { FC } from "react"
import styles from "@styles/molecule/articleItem/articleItem.module.scss"
import Link from "next/link"
import ArticleThumbnail from "@component/atoms/articleItem/articleThumbnail"
import { ArticleItemSmallProps } from "@component/molecule/articleItem/articleItemSmall"
import CategorySection from "@component/atoms/articleItem/categorySection"

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
}) =>
  !url ? null : (
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

        <CategorySection
          category={category}
          published={published}
          categoryURL={categoryURL}
        />
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

export default ArticleItem
