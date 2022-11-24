import { FC } from "react";
import { articleItems } from "../../../__mocks__/articleItems";
import ArticleItem, { ArticleItemProps } from "../atoms/articleItem";
import Header from "../molecule/header";
import styles from "../../../styles/template/home.module.scss";
import Headline, { HeadlineProps } from "../molecule/headline";
import SectionHorizontal, {
  SectionHorizontalProps,
} from "../molecule/sectionHorizontal";
import CircularLoader from "../atoms/circularLoader";

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
    ...restArticle
  ] = articles;
  const topSectionArticles =
    [firstArticle, secondArticle, thirdArticle, forthArticle, fifthArticle] ||
    [];
  const bottomSectionArticles = restArticle || [];
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

        <CircularLoader marginTop={8} marginBottom={44} />
      </main>
    </>
  );
};

export default HomeTemplate;
