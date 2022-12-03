import { FC } from "react";
import HeaderDesktop from "../atoms/headerDesktop";
import CategoryAside, { CategoryAsideProps } from "../molecule/categoryAside";
import Footer from "../molecule/footer";
import Headline from "../molecule/headline";
import PemulaAside, { PemulaAsideProps } from "../molecule/pemulaAside";
import { HomeGeneralTemplateProps } from "./home";
import ArticleItem from "../atoms/articleItem";
import SearchInput from "../atoms/searchInput";
import BookmarkAside from "../molecule/bookmarkAside";
import SocialMediaAside from "../molecule/socialMediaAside";

import styles from "../../../styles/template/homeDesktop.module.scss";

export interface HomeDesktopTemplateProps extends HomeGeneralTemplateProps {
  categoryAside: CategoryAsideProps;
  pemulaAside: PemulaAsideProps;
}

const HomeDesktopTemplate: FC<HomeDesktopTemplateProps> = ({
  title,
  headline,
  articles,
  categoryAside,
  pemulaAside,
}) => {
  return (
    <>
      <HeaderDesktop />

      <main className={styles["main--desktop"]}>
        <section>
          <h1 className="b-typography__h4 b-color-text__onsurface--high-emphasis page-title">
            {title}
          </h1>

          <Headline {...headline} />

          {articles.map((articleItem) => (
            <ArticleItem key={articleItem?.url} {...articleItem} />
          ))}
        </section>

        <aside>
          <SearchInput />
          <BookmarkAside articles={articles} />
          <CategoryAside {...categoryAside} />
          <PemulaAside {...pemulaAside} />
          <SocialMediaAside />
        </aside>
      </main>

      <Footer />
    </>
  );
};

export default HomeDesktopTemplate;
