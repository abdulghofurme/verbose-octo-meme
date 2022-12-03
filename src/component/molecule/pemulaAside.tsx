import Link from "next/link";
import { FC } from "react";
import ArticleItem, { ArticleItemProps } from "../atoms/articleItem";
import AsideItemWrapper from "../atoms/asideItemWrapper";

export interface PemulaAsideProps {
  articles: ArticleItemProps[];
}

const PemulaAside: FC<PemulaAsideProps> = ({ articles = [] }) => {
  return (
    <AsideItemWrapper title="Belajar Investasi">
      {articles.map((articleItem) => (
        <ArticleItem key={articleItem.url} {...articleItem} variant="aside" />
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
