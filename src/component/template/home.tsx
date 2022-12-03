import { FC } from "react";
import ArticleItem, { ArticleItemProps } from "../atoms/articleItem";
import styles from "../../../styles/template/home.module.scss";
import Headline, { HeadlineProps } from "../molecule/headline";
import { PropsWithUserAgent } from "../../interface/props";
import SectionHorizontal, {
  SectionHorizontalProps,
} from "../molecule/sectionHorizontal";
import Header from "../molecule/header";
import InfiniteScroll, { InfiniteScrollProps } from "../atoms/infiniteScroll";
import dynamic from "next/dynamic";
const CircularLoader = dynamic(import("../atoms/circularLoader"), {
  ssr: false,
});

export interface HomeGeneralTemplateProps extends PropsWithUserAgent {
  title: string;
  headline: HeadlineProps;
  articles: ArticleItemProps[];
}
export interface HomeTemplateProps extends HomeGeneralTemplateProps {
  horizontalSection: SectionHorizontalProps;
  infiniteScroll: InfiniteScrollProps;
}

const HomeTemplate: FC<HomeTemplateProps> = ({
  title,
  headline,
  articles = [],
  horizontalSection,
  userAgent,
  infiniteScroll,
}) => {
  // to avoid the original changes
  const articlesCopy = [...articles];
  const topSectionArticles = articlesCopy.splice(0, 5);
  const bottomSectionArticles = articlesCopy;
  bottomSectionArticles[0].noBorder = true;
  return (
    <InfiniteScroll
      {...infiniteScroll}
      LoadingComponent={<CircularLoader marginTop={8} marginBottom={44} />}
    >
      <Header />

      <main className={styles.main}>
        <h1 className="page-title b-typography__h4 b-color-text__onsurface--high-emphasis">
          {title}
        </h1>

        <Headline {...headline} />

        {topSectionArticles.map((articleItem) => (
          <ArticleItem key={articleItem?.url} {...articleItem} />
        ))}

        {userAgent.isUserMobile && <SectionHorizontal {...horizontalSection} />}

        {bottomSectionArticles.map((articleItem) => (
          <ArticleItem key={articleItem?.url} {...articleItem} />
        ))}
      </main>
    </InfiniteScroll>
  );
};

export default HomeTemplate;
