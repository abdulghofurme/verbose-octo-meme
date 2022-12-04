import { FC } from "react";
import AsideItemWrapper from "@component/atoms/asideItemWrapper";
import SocialMedia from "@component/atoms/socialMedia";
import styles from "@styles/molecule/socialMediaAside.module.scss";

const SocialMediaAside: FC = () => (
  <AsideItemWrapper title="Ikuti Kami" className={styles.section}>
    <SocialMedia size={48} />
  </AsideItemWrapper>
);

export default SocialMediaAside;
