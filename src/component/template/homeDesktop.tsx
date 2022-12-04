import { FC } from "react";
import HeaderDesktop from "@component/atoms/headerDesktop";
import CategoryAside, {
  CategoryAsideProps,
} from "@component/molecule/categoryAside";
import Footer from "@component/molecule/footer";
import Headline from "@component/molecule/headline";
import PemulaAside, { PemulaAsideProps } from "@component/organism/pemulaAside";
import { HomeGeneralTemplateProps } from "./home";
import ArticleItem from "@component/molecule/articleItem/articleItem";
import SearchInput from "@component/atoms/searchInput";
import BookmarkAside from "@component/molecule/bookmarkAside";
import SocialMediaAside from "@component/molecule/socialMediaAside";

import styles from "@styles/template/homeDesktop.module.scss";
import BareksaCommunityAside from "@component/molecule/bareksaCommunityAside";

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
          <BareksaCommunityAside />
        </aside>
      </main>

      <Footer />
    </>
  );
};

export default HomeDesktopTemplate;
