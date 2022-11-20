import { FC } from "react";
import styles from "../../../styles/atoms/articleItem.module.scss";
import Image from "next/image";

interface ArticleItemProps {
  title?: string;
  thumbnail?: string;
  noBorder?: boolean;
}

const ArticleItem: FC<ArticleItemProps> = ({
  title = "Berita Hari Ini: Harga Emas Naik, Lelang 6 Seri SBSN Target Rp7 Triliun, Lelang 6 Seri SBSN Target Rp7 Triliun",
  thumbnail = "https://storage.googleapis.com/palma/mandau/LodTNA43fLOWvF1-qxcb.jpeg",
  noBorder = false,
}) => {
  return (
    <article
      className={`${styles.article_item} ${noBorder ? styles.no_border : ""}`}
    >
      <a>
        <h4 className="b-typography__subtitle-2 b-typography__subtitle-2--medium b-color-text__onsurface--high-emphasis">
          {title}
        </h4>

        <Image
          src={thumbnail}
          alt={`${title} Thumbnail`}
          width={64}
          height={64}
        />
      </a>
      <div className={styles.subtitle}>
        <a className="b-typography__button b-color-text__primary--800">Emas</a>
        <span className="b-color-text__onsurface--medium-emphasis">•</span>
        <span className="b-typography__caption b-color-text__onsurface--medium-emphasis">
          12 Mei
        </span>
      </div>
    </article>
  );
};

export default ArticleItem;
