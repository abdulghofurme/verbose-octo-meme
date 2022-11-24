import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from '../../../styles/atoms/articleItemVertical.module.scss'

export interface ArticleItemVerticalProps {
  title: string;
  thumbnail: string;
  url: string;
  badge?: string;
}

const ArticleItemVertical: FC<ArticleItemVerticalProps> = ({
  url,
  title,
  thumbnail,
  badge,
}) => (
  <article className={styles.article}>
    <Link href={url}>
      <Image
        src={thumbnail}
        alt={`${title} thumbnail`}
        height={120}
        width={120}
      />
			{badge && <span className="b-typography__caption b-typography__caption--small b-color-text__onprimary--high-emphasis">{badge}</span>}
      <h4 className="b-typography__caption b-color-text__onsurface--high-emphasis">
        {title}
      </h4>
    </Link>
  </article>
);

export default ArticleItemVertical
