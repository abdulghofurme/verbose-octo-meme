import { FC } from "react";
import ArticleItem, { ArticleItemProps } from "../atoms/articleItem";
import Header from "../molecule/header";
import styles from "../../../styles/template/home.module.scss";
import Headline, { HeadlineProps } from "../molecule/headline";
import SectionHorizontal, {
  SectionHorizontalProps,
} from "../molecule/sectionHorizontal";

interface HomeTemplateProps {
  title: string;
  headline: HeadlineProps;
  articles: ArticleItemProps[];
  horizontalSection: SectionHorizontalProps;
}

const HomeTemplate: FC<HomeTemplateProps> = ({
  title,
  headline,
  articles = [],
  horizontalSection,
}) => {
  const [
    firstArticle,
    secondArticle,
    thirdArticle,
    forthArticle,
    fifthArticle,
    sixthArticle,
    ...restArticle
  ] = articles;
  const topSectionArticles =
    [firstArticle, secondArticle, thirdArticle, forthArticle, fifthArticle] ||
    [];
  const bottomSectionArticles =
    [
      ...(sixthArticle ? [{ ...sixthArticle, noBorder: true }] : []),
      ...restArticle,
    ] || [];
  return (
    <>
      <Header />

      <main className={styles.main}>
        <h1 className="b-typography__h4 b-color-text__onsurface--high-emphasis">
          {title}
        </h1>

        <Headline {...headline} />

        {topSectionArticles.map((articleItem) => (
          <ArticleItem key={articleItem?.url} {...articleItem} />
        ))}

        <SectionHorizontal {...horizontalSection} />

        {bottomSectionArticles.map((articleItem) => (
          <ArticleItem key={articleItem?.url} {...articleItem} />
        ))}
      </main>
    </>
  );
};

export default HomeTemplate;
