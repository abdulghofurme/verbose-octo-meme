import { FC } from "react";
import { articleItems } from "../../../__mocks__/articleItems";
import ArticleItem from "../atoms/articleItem";
import Header from "../molecule/header";
import styles from "../../../styles/template/home.module.scss";
import Headline from "../molecule/headline";

interface HomeTemplateProps {}

const HomeTemplate: FC<HomeTemplateProps> = () => {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <h1 className="b-typography__h4 b-color-text__onsurface--high-emphasis">
          Berita dan Analisis Investasi
        </h1>

        <Headline />

        {articleItems.map((articleItem) => (
          <ArticleItem key={articleItem.url} {...articleItem} />
        ))}
      </main>
    </>
  );
};

export default HomeTemplate;
