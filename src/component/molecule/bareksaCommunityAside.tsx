import Image from "next/image";
import { FC } from "react";
import styles from "@styles/molecule/bareksaCommunityAside.module.scss";
import { BASE_IMAGE_URL } from "@config/env";
import Button from "@component/atoms/button";

const BareksaCommunityAside: FC = () => {
  return (
    <section className={`${styles.section} b-color-bg__brown--050`}>
      <div>
        <p className="b-typography__body-2--reguler b-color-text__onsurface--medium-emphasis">
          Mau berbagi ilmu investasi menarik bersama investor lainnya di Bareksa
          Community?
        </p>
        <Image
          src={`${BASE_IMAGE_URL}/icons/icon_community.png`}
          width={40}
          height={40}
          alt="Bareksa community illustration"
        />
      </div>
      <Button variant={"outlined"} color={"primary"} fullWidth={true}>
        Gabung Telegram Bareksa
      </Button>
    </section>
  );
};

export default BareksaCommunityAside;
