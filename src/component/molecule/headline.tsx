import { FC } from "react";
import styles from "../../../styles/molecule/headline.module.scss";
import HeadlineItem, { HeadlineItemProps } from "../atoms/headlineItem";
import Link from "next/link";
import HeadlineSlider from "../atoms/headlineSlider";
import { UserAgentInterface } from "../../lib/userAgent";

export interface HeadlineProps {
  url: string;
  title: string;
  articles?: HeadlineItemProps[];
  userAgent?: UserAgentInterface
}

const Headline: FC<HeadlineProps> = ({ title, url, articles, userAgent }) => {
  if (!articles || articles?.length === 0) return null

  return (
    <section className={styles.headline}>
      <h2 className="b-typography__overline b-color-text__onsurface--medium-emphasis">
        <Link href={url}>{title}</Link>
      </h2>
      <HeadlineSlider>
        {articles.map((articleItem) => (
          <HeadlineItem key={articleItem?.url} {...articleItem} userAgent={userAgent} />
        ))}
      </HeadlineSlider>
    </section>
  );
};

export default Headline;
