import { FC } from "react";
import dynamic from "next/dynamic";
import styles from "@styles/molecule/headline.module.scss";
import HeadlineItem, { HeadlineItemProps } from "@component/atoms/headlineItem";
import Link from "next/link";
import { UserAgentInterface } from "@lib/userAgent";
const HeadlineSlider = dynamic(() => import("@component/atoms/headlineSlider"));

export interface HeadlineProps {
  url: string;
  title: string;
  articles?: HeadlineItemProps[];
  userAgent?: UserAgentInterface;
}

const Headline: FC<HeadlineProps> = ({ title, url, articles, userAgent }) => {
  if (!articles || articles?.length === 0) return null;

  const renderHeadlines = () => {
    return articles.map((articleItem, idx) => (
      <HeadlineItem
        key={articleItem?.url}
        {...articleItem}
        userAgent={userAgent}
        bigHeadline={[0, 1, 4].includes(idx)}
      />
    ));
  };

  return (
    <section
      className={
        userAgent?.isUserMobile ? styles.headline : styles["headline--desktop"]
      }
    >
      <h2
        className={`b-typography__overline ${
          userAgent?.isUserMobile
            ? "b-color-text__onsurface--medium-emphasis"
            : "b-color-text__secondary--900"
        }`}
      >
        <Link href={url}>{title}</Link>
      </h2>
      {userAgent?.isUserMobile ? (
        <HeadlineSlider>{renderHeadlines()}</HeadlineSlider>
      ) : (
        <div>{renderHeadlines()}</div>
      )}
    </section>
  );
};

export default Headline;
