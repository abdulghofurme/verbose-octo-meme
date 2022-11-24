import { FC } from "react";
import { articleItems } from "../../../__mocks__/articleItems";
import ArticleItem from "../atoms/articleItem";
import Header from "../molecule/header";
import styles from "../../../styles/template/home.module.scss";
import Headline, { HeadlineProps } from "../molecule/headline";
import SectionHorizontal from "../molecule/sectionHorizontal";
import CircularLoader from "../atoms/circularLoader";

interface HomeTemplateProps {
  title: string;
  headline: HeadlineProps;
}

const HomeTemplate: FC<HomeTemplateProps> = ({ title, headline }) => {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <h1 className="b-typography__h4 b-color-text__onsurface--high-emphasis">
          {title}
        </h1>

        <Headline {...headline} />

        {articleItems.map((articleItem) => (
          <ArticleItem key={articleItem.url} {...articleItem} />
        ))}

        <SectionHorizontal
          url="/belajar-investasi"
          title="BELAJAR INVESTASI"
          articles={[
            { ...articleItems[0], badge: "Wajib baca" },
            ...articleItems,
            ...articleItems,
          ]}
        />

        {[{ ...articleItems[0], noBorder: true }, ...articleItems].map(
          (articleItem) => (
            <ArticleItem key={articleItem.url} {...articleItem} />
          )
        )}

        <CircularLoader marginTop={8} marginBottom={44} />
      </main>
    </>
  );
};

export default HomeTemplate;
