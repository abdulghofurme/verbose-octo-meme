import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "../../../styles/atoms/headlineItem.module.scss";

interface HeadlineItemProps {
  background: string;
  title: string;
  url: string;
  priority?: boolean;
}

const HeadlineItem: FC<HeadlineItemProps> = ({
  url,
  title,
  background,
  priority,
}) => {
  return (
    <>
      {priority && (
        <Head>
          <link rel="preload" as="image" href={background} />
        </Head>
      )}

      <article className={styles.headline_item}>
        <Link href={url}>
          <img
            alt={`${title} cover`}
            src={background}
            height={165}
            loading={priority ? "eager" : "lazy"}
          />
          <div />

          <h4 className="b-typography__subtitle-2 b-typography__subtitle-2--medium b-color-text__onprimary--high-emphasis">
            {title}
          </h4>
        </Link>
      </article>
    </>
  );
};

export default HeadlineItem;
