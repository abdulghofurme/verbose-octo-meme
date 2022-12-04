import Link from "next/link";
import { FC } from "react";
import AsideItemWrapper from "@component/atoms/asideItemWrapper";
import ArticleItemSmall, {
  ArticleItemSmallProps,
} from "@component/molecule/articleItem/articleItemSmall";
import styles from "@styles/organism/pemulaAside.module.scss";

export interface PemulaAsideProps {
  articles: ArticleItemSmallProps[];
}

const PemulaAside: FC<PemulaAsideProps> = ({ articles = [] }) => {
  return (
    <AsideItemWrapper className={styles.section} title="Belajar Investasi">
      {articles.map((articleItem) => (
        <ArticleItemSmall
          key={articleItem.url}
          url={articleItem.url}
          title={articleItem.title}
          category={articleItem.category}
          thumbnail={articleItem.thumbnail}
        />
      ))}
      <Link
        href="/belajar-investasi"
        className="b-typography__button b-color-text__primary--800 top-link"
      >
        Lihat Semua
      </Link>
    </AsideItemWrapper>
  );
};

export default PemulaAside;
