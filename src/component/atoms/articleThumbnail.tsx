import { FC } from "react";
import Image, { ImageProps } from "next/image";
import styles from "@styles/atoms/articleThumbnail.module.scss";

interface ArticleThumbnailProps extends ImageProps {
  src: string;
  alt: string;
  size: number;
  height?: number;
  width?: number;
}

const ArticleThumbnail: FC<ArticleThumbnailProps> = ({
  src,
  alt,
  size,
  ...props
}) => (
  <Image
    className={styles.img}
    src={src}
    alt={alt}
    width={size}
    height={size}
    {...props}
  />
);

export default ArticleThumbnail;
