import { FC } from "react";
import ArticleItem from "../atoms/articleItem";
import Header from "../molecule/header";

interface HomeTemplateProps {}

const HomeTemplate: FC<HomeTemplateProps> = () => {
  return (
    <>
      <Header />

      <main>
        <h1 className="b-typography__h4 b-color-text__onsurface--high-emphasis">
          Berita dan Analisis Investasi
        </h1>
				<ArticleItem />
				<ArticleItem noBorder />
      </main>
    </>
  );
};

export default HomeTemplate;
