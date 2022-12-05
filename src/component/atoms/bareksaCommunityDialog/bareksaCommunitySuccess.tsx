import { FC } from "react"
import styles from "@styles/atoms/bareksaCommunityDialog/bareksaCommunitySuccess.module.scss"
import Image from "next/image"
import { BASE_IMAGE_URL } from "@config/env"
import Button from "@component/atoms/button"

interface BareksaCommunitySuccessProps {
  onClose: () => void
}

const BareksaCommunitySuccess: FC<BareksaCommunitySuccessProps> = ({
  onClose,
}) => (
  <div className={styles.container}>
    <Image
      src={`${BASE_IMAGE_URL}/illustrations/1/success.svg`}
      alt="Bareksa community register illustration"
      width={410}
      height={270}
    />
    <div className="content">
      <p className="b-typography__subtitle-1--medium b-color-text__onsurface--high-emphasis">
        Yay, sukses!
      </p>
      <p className="b-typography__caption b-color-text__onsurface--medium-emphasis">
        No. HP yang didaftarkan akan digunakan untuk mengundang kamu ke Bareksa
        Community Telegram. Kami akan proses pendaftaran kamu 1-2 hari kerja
      </p>
      <Button variant={"contained"} color={"primary"} onClick={onClose}>
        Tutup
      </Button>
    </div>
  </div>
)

export default BareksaCommunitySuccess
