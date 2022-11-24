import { FC } from "react";
import styles from "../../../styles/atoms/articleItem.module.scss";
import Image from "next/image";
import Link from "next/link";

export interface ArticleItemProps {
  url: string;
  title: string;
  category?: string;
  categoryURL?: string;
  thumbnail: string;
  published: string;
  noBorder?: boolean;
}

const ArticleItem: FC<ArticleItemProps> = ({
  url,
  title,
  category = "Kategori",
  categoryURL = "",
  thumbnail,
  published,
  noBorder = false,
}) => {
  if (!url) return null

  return (
    <article
      className={`${styles.article_item} ${noBorder ? styles.no_border : ""}`}
    >
      <Link href={url} data-testid="articleItem__link">
        <h4
          data-testid="articleItem__title"
          className="b-typography__subtitle-2 b-typography__subtitle-2--medium b-color-text__onsurface--high-emphasis"
        >
          {title}
        </h4>

        <Image
          data-testid="articleItem__thumbnail"
          src={thumbnail}
          alt={`${title} thumbnail`}
          width={64}
          height={64}
        />
      </Link>
      <div className={styles.subtitle}>
        {categoryURL ? (
          <Link
            data-testid="articleItem__category"
            href={categoryURL}
            className="b-typography__button b-color-text__primary--800"
          >
            {category}
          </Link>
        ) : (
          <span className="b-typography__button b-color-text__primary--800">
            {category}
          </span>
        )}
        <span className="b-color-text__onsurface--medium-emphasis">•</span>
        <span
          data-testid="articleItem__published"
          className="b-typography__caption b-color-text__onsurface--medium-emphasis"
        >
          {published}
        </span>
      </div>
    </article>
  );
};

export default ArticleItem;
