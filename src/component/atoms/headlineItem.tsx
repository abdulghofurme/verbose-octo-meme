import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import styles from "@styles/atoms/headlineItem.module.scss"
import { UserAgentInterface } from "@lib/userAgent"

export interface HeadlineItemProps {
  background: string
  title: string
  url: string
  priority?: boolean
  userAgent?: UserAgentInterface
  bigHeadline?: boolean
}

const HeadlineItem: FC<HeadlineItemProps> = ({
  url,
  title,
  background,
  priority,
  userAgent,
  bigHeadline = false,
}) => {
  let imageWidth: number
  // mobile & tablet using
  // max viewport width of
  // https://mediag.com/blog/popular-screen-resolutions-designing-for-all/
  switch (userAgent?.device?.type) {
    case "mobile":
      imageWidth = 480
      break
    case "tablet":
      imageWidth = 1024
      break
    default:
      imageWidth = bigHeadline ? 340 : 160
      break
  }
  return (
    <article
      className={`headlineItem ${styles.article} ${
        userAgent?.isUserMobile
          ? styles["article--mobile"]
          : styles["article--desktop"]
      } ${bigHeadline ? styles.article_big : ""}`}
    >
      <Link href={url}>
        <Image
          alt={`${title} cover`}
          src={background}
          height={userAgent?.isUserMobile ? 165 : 160}
          width={imageWidth}
          priority={priority}
        />
        <div />

        <h3 className="title b-typography__subtitle-2--medium b-color-text__onprimary--high-emphasis">
          {title}
        </h3>
      </Link>
    </article>
  )
}

export default HeadlineItem
