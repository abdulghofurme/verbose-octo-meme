import { FC } from "react";
import ArticleItemVertical, {
  ArticleItemVerticalProps,
} from "../atoms/articleItemVertical";
import styles from "../../../styles/molecule/sectionHorizontal.module.scss";
import Link from "next/link";
import MaterialIcon from "../atoms/materialIcon";

interface SectionHorizontalProps {
  title: string;
  url: string;
  articles: ArticleItemVerticalProps[];
}

const SectionHorizontal: FC<SectionHorizontalProps> = ({
  url,
  title,
  articles,
}) => {
  return (
    <section className={`${styles.section} b-color-bg__surface--dark`}>
      <div>
        <h2 className="b-typography__overline b-color-text__onsurface--medium-emphasis">
          <Link href={url}>{title}</Link>
        </h2>

        <Link href={url}>
          <MaterialIcon icon="arrow_forward" />
        </Link>
      </div>

      <div className={styles.horizontal}>
        {articles.map((articleItem) => (
          <ArticleItemVertical key={articleItem.url} {...articleItem} />
        ))}
      </div>
    </section>
  );
};

export default SectionHorizontal;
