import { FC } from "react";
import ArticleItem, { ArticleItemProps } from "../atoms/articleItem";
import styles from "../../../styles/template/home.module.scss";
import Headline, { HeadlineProps } from "../molecule/headline";
import { PropsWithUserAgent } from "../../interface/props";
import { SectionHorizontalProps } from "../molecule/sectionHorizontal";
import dynamic from "next/dynamic";
import SearchInput from "../atoms/searchInput";
import Footer from "../molecule/footer";
import BookmarkAside from "../molecule/bookmarkAside";
import CategoryAside, { CategoryAsideProps } from "../molecule/categoryAside";
import PemulaAside, { PemulaAsideProps } from "../molecule/PemulaAside";
import SocialMediaAside from "../molecule/socialMediaAside";
const HeaderDesktop = dynamic(() => import("../atoms/headerDesktop"));
const Header = dynamic(() => import("../molecule/header"));
const SectionHorizontal = dynamic(
  () => import("../molecule/sectionHorizontal")
);

export interface HomeTemplateProps extends PropsWithUserAgent {
  title: string;
  headline: HeadlineProps;
  articles: ArticleItemProps[];
  horizontalSection: SectionHorizontalProps;
  categoryAside?: CategoryAsideProps;
  pemulaAside?: PemulaAsideProps;
}

const HomeTemplate: FC<HomeTemplateProps> = ({
  title,
  headline,
  articles = [],
  horizontalSection,
  userAgent,
  categoryAside = { categories: [] },
  pemulaAside = { articles: [] },
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
      {userAgent.isUserMobile ? <Header /> : <HeaderDesktop />}

      <main
        className={`${
          userAgent.isUserMobile ? styles.main : styles["main--desktop"]
        }`}
      >
        <section>
          <h1
            className={`${styles.title} b-typography__h4 b-color-text__onsurface--high-emphasis`}
          >
            {title}
          </h1>

          <Headline {...headline} />

          {topSectionArticles.map((articleItem) => (
            <ArticleItem key={articleItem?.url} {...articleItem} />
          ))}

          {userAgent.isUserMobile && (
            <SectionHorizontal {...horizontalSection} />
          )}

          {bottomSectionArticles.map((articleItem) => (
            <ArticleItem key={articleItem?.url} {...articleItem} />
          ))}
        </section>

        {!userAgent.isUserMobile && (
          <aside>
            <SearchInput />
            <BookmarkAside articles={restArticle} />
            <CategoryAside {...categoryAside} />
            <PemulaAside {...pemulaAside} />
            <SocialMediaAside />
          </aside>
        )}
      </main>

      {!userAgent.isUserMobile && <Footer />}
    </>
  );
};

export default HomeTemplate;
