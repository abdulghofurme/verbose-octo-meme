import ArticleThumbnail from "@component/atoms/articleItem/articleThumbnail"
import { FC } from "react"
import { ArticleItemProps } from "@component/molecule/articleItem/articleItem"
import Link from "next/link"
import CategorySection from "@component/atoms/articleItem/categorySection"
import styles from "@styles/molecule/articleItem/articleItemBig.module.scss"

export interface ArticleItemBigProps extends ArticleItemProps {
  subtitle: string
}

const ArticleItemBig: FC<ArticleItemBigProps> = ({
  url,
  title,
  subtitle,
  category,
  categoryURL,
  thumbnail,
  published,
}) =>
  !url ? null : (
    <article className={styles.article_item}>
      <div>
        <CategorySection
          category={category}
          published={published}
          categoryURL={categoryURL}
        />
        <Link href={url}>
          <h4 className="title b-typography__h6 b-text-color__onsurface--high-emphasis">
            {title}
          </h4>
          <p className="b-typography__body-2--reguler b-color-text__onsurface--medium-emphasis">
            {subtitle}
          </p>
        </Link>
      </div>
      <Link href={url}>
        <ArticleThumbnail
          src={thumbnail}
          alt={`${title} thumbnail`}
          size={100}
        />
      </Link>
    </article>
  )

export default ArticleItemBig
