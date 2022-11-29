import Image from "next/image";
import { FC } from "react";
import socialMedia from "../../config/social_media";
import styles from "../../../styles/atoms/socialMedia.module.scss";
import Link from "next/link";

interface SocialMediaProps {
  size: number;
}

const SocialMedia: FC<SocialMediaProps> = ({ size }) => (
  <div className={styles.container}>
    {socialMedia.map(({ key, url, imageURL }) => (
      <Link key={key} href={url} target="_blank">
        <Image
          alt={key}
          src={imageURL}
          width={size}
          height={size}
        />
      </Link>
    ))}
  </div>
);

export default SocialMedia;
