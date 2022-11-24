import { FC } from "react";
import { articleItems } from "../../../__mocks__/articleItems";
import ArticleItem from "../atoms/articleItem";
import Header from "../molecule/header";
import styles from "../../../styles/template/home.module.scss";
import Headline from "../molecule/headline";
import SectionHorizontal from "../molecule/sectionHorizontal";

interface HomeTemplateProps {}

const HomeTemplate: FC<HomeTemplateProps> = () => {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <h1 className="b-typography__h4 b-color-text__onsurface--high-emphasis">
          Berita dan Analisis Investasi
        </h1>

        <Headline
          url="/terpopuler"
          title="TERPOPULER MINGGU INI"
          articles={[
            {
              url: "/reksa-dana/2022-11-16/ekonomi-global-dorong-pasar-sbn-manulife-obligasi-negara-indonesia-ii-ikut-cuan",
              title:
                "Ekonomi Global Dorong Pasar SBN, Manulife Obligasi Negara Indonesia II Ikut Cuan",
              background:
                "https://storage.googleapis.com/palma/mandau/y2nzlIQxQ1NSwRn4Kird.jpeg",
            },
            {
              url: "/reksa-dana/2022-11-16/ekonomi-global-dorong-pasar-sbn-manulife-obligasi-negara-indonesia-ii-ikut-cuan",
              title:
                "Ekonomi Global Dorong Pasar SBN, Manulife Obligasi Negara Indonesia II Ikut Cuan",
              background:
                "https://storage.googleapis.com/palma/mandau/y2nzlIQxQ1NSwRn4Kird.jpeg",
            },
          ]}
        />

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
      </main>
    </>
  );
};

export default HomeTemplate;
