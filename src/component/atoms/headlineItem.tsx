import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "../../../styles/atoms/headlineItem.module.scss";
import { UserAgentInterface } from "../../utils/userAgent";

export interface HeadlineItemProps {
  background: string;
  title: string;
  url: string;
  priority?: boolean;
  userAgent?: UserAgentInterface;
}

const HeadlineItem: FC<HeadlineItemProps> = ({
  url,
  title,
  background,
  priority,
  userAgent,
}) => {
  let imageWidth: number;
  // mobile & tablet using
  // max viewport width of
  // https://mediag.com/blog/popular-screen-resolutions-designing-for-all/
  switch (userAgent?.device?.type) {
    case "mobile":
      imageWidth = 480;
      break;
    case "tablet":
      imageWidth = 1024;
      break;
    default:
      imageWidth = 340;
      break;
  }
  return (
    <>
      {priority && (
        <Head>
          <link rel="preload" as="image" href={background} />
        </Head>
      )}

      <article className={styles.article}>
        <Link href={url}>
          <Image
            alt={`${title} cover`}
            src={background}
            height={165}
            width={imageWidth}
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
