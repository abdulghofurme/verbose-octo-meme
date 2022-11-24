import { FC } from "react";
import styles from "../../../styles/molecule/headline.module.scss";
import HeadlineItem from "../atoms/headlineItem";
import Link from "next/link";
import HeadlineSlider from "../atoms/headlineSlider";

interface HeadlineProps {}

const Headline: FC<HeadlineProps> = () => {
  return (
    <section className={styles.headline}>
      <h2 className="b-typography__overline b-color-text__onsurface--medium-emphasis">
        <Link href="/">TERPOPULER MINGGU INI</Link>
      </h2>
      <HeadlineSlider>
        <HeadlineItem
          title="Ekonomi Global Dorong Pasar SBN, Manulife Obligasi Negara Indonesia II Ikut Cuan"
          url="https://www.bareksa.com/berita/reksa-dana/2022-11-16/ekonomi-global-dorong-pasar-sbn-manulife-obligasi-negara-indonesia-ii-ikut-cuan"
          background="https://storage.googleapis.com/palma/mandau/y2nzlIQxQ1NSwRn4Kird.jpeg"
        />
        <HeadlineItem
          title="Ekonomi Global Dorong Pasar SBN, Manulife Obligasi Negara Indonesia II Ikut Cuan"
          url="https://www.bareksa.com/berita/reksa-dana/2022-11-16/ekonomi-global-dorong-pasar-sbn-manulife-obligasi-negara-indonesia-ii-ikut-cuan"
          background="https://storage.googleapis.com/palma/mandau/y2nzlIQxQ1NSwRn4Kird.jpeg"
        />
      </HeadlineSlider>
    </section>
  );
};

export default Headline;
