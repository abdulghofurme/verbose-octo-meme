import { FC } from "react"
import styles from "@styles/atoms/bareksaCommunityDialog/bareksaCommunityHome.module.scss"
import { BASE_IMAGE_URL } from "@config/env"
import Image from "next/image"
import MaterialIcon from "@component/atoms/material-ui/materialIcon"
import Button from "@component/atoms/button"

interface BareksaCommunityHomeProps {
  onInfo: () => void
  onClose: () => void
  onNext: () => void
}

const BareksaCommunityHome: FC<BareksaCommunityHomeProps> = ({
  onInfo,
  onClose,
  onNext,
}) => (
  <div className={styles.container}>
    <div className="header">
      <MaterialIcon icon="info" onClick={onInfo} />
      <h6 className="b-typography__h6 b-color-text__onsurface--high-emphasis">
        Bareksa Community
      </h6>
      <MaterialIcon icon="close" onClick={onClose} />
    </div>
    <Image
      src={`${BASE_IMAGE_URL}/bareksa/img/illustrations/bareksa-community.svg`}
      alt="Bareksa community illustration"
      width={410}
      height={240}
    />
    <div className="content">
      <p className="b-typography__caption b-color-text__onsurface--medium-emphasis">
        Gabung komunitas investor eksklusif.
        <br />
        Ikuti kelas pembelajaran tentang investasi secara online gratis via
        Aplikasi Telegram
      </p>
      {[
        "Akses gratis",
        "Konten edukasi tiap minggu",
        "Diskusi dengan investor lain",
        "Update promo & event terbaru",
      ].map((feature) => (
        <div key={feature}>
          <MaterialIcon icon="check" className="b-color-text__primary--800" />
          <span className="b-typography__subtitle-2--medium b-color-text__onsurface--medium-emphasis">
            {feature}
          </span>
        </div>
      ))}
    </div>
    <div className="button-container">
      <Button
        variant={"contained"}
        color={"primary"}
        fullWidth
        onClick={onNext}
      >
        Gabung Sekarang!
      </Button>
    </div>
  </div>
)

export default BareksaCommunityHome
