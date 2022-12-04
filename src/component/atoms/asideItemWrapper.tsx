import { FC, PropsWithChildren } from "react";
import styles from "@styles/atoms/asideItemWrapper.module.scss";

interface AsideItemWrapperProps extends PropsWithChildren {
  title: string;
  className?: string;
}

const AsideItemWrapper: FC<AsideItemWrapperProps> = ({
  title,
  children,
  className = "",
}) => (
  <section className={`${styles.section} ${className}`}>
    <h6 className="b-typography__h6 b-color-text__onsurface--high-emphasis">
      {title}
    </h6>
    {children}
  </section>
);

export default AsideItemWrapper;
