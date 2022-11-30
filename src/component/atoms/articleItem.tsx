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
  published?: string;
  noBorder?: boolean;
  variant?: "" | "aside";
}

const ArticleItem: FC<ArticleItemProps> = ({
  url,
  title,
  category = "Kategori",
  categoryURL = "",
  thumbnail,
  published,
  noBorder = false,
  variant = "",
}) => {
  if (!url) return null;
  let size: number;
  let categoryClassName: string;

  switch (variant) {
    case "aside":
      size = 48;
      categoryClassName =
        "b-typography__caption b-color-text__onsurface--medium-emphasis";
      break;
    default:
      size = 64;
      categoryClassName = "b-typography__button b-color-text__primary--800";
      break;
  }

  return (
    <article
      className={`${styles.article_item} ${noBorder ? styles.no_border : ""} ${
        variant ? styles[`article_item--${variant}`] : ""
      }`}
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

        {published ? (
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
        ) : (
          <span className={categoryClassName}>{category}</span>
        )}
      </div>

      <Link href={url} data-testid="articleItem__link">
        <Image
          data-testid="articleItem__thumbnail"
          src={thumbnail}
          alt={`${title} thumbnail`}
          width={size}
          height={size}
        />
      </Link>
    </article>
  );
};

export default ArticleItem;
