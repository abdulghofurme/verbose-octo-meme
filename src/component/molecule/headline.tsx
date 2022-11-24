import { FC } from "react";
import styles from "../../../styles/molecule/headline.module.scss";
import HeadlineItem, { HeadlineItemProps } from "../atoms/headlineItem";
import Link from "next/link";
import HeadlineSlider from "../atoms/headlineSlider";

interface HeadlineProps {
  url: string;
  title: string;
  articles: HeadlineItemProps[];
}

const Headline: FC<HeadlineProps> = ({ title, url, articles }) => {
  return (
    <section className={styles.headline}>
      <h2 className="b-typography__overline b-color-text__onsurface--medium-emphasis">
        <Link href={url}>{title}</Link>
      </h2>
      <HeadlineSlider>
        {articles.map((articleItem) => (
          <HeadlineItem key={articleItem?.url} {...articleItem} />
        ))}
      </HeadlineSlider>
    </section>
  );
};

export default Headline;
