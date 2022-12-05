import { FC } from "react"
import MaterialIcon from "@component/atoms/material-ui/materialIcon"
import styles from "@styles/atoms/bareksaCommunityDialog/bareksaCommunityInput.module.scss"
import MaterialInput, { MaterialInputProps } from "../material-ui/materialInput"
import Button from "../button"

interface BareksaCommunityInputProps {
  onBack: () => void
  onClose: () => void
  onNext: () => void
  input: MaterialInputProps
}

const BareksaCommunityInput: FC<BareksaCommunityInputProps> = ({
  onBack,
  onClose,
  onNext,
  input,
}) => (
  <div className={styles.container}>
    <div className="header">
      <MaterialIcon
        icon="arrow_back"
        className="b-color-text__onsurface--high-emphasis"
        onClick={onBack}
      />
      <MaterialIcon
        icon="close"
        className="b-color-text__onsurface--high-emphasis"
        onClick={onClose}
      />
    </div>
    <div className="content">
      <p className="b-typography__subtitle-1--medium b-color-text__onsurface--medium-emphasis">
        Daftar Bareksa Community di <br /> telegram sekarang!
      </p>
      <MaterialInput {...input} />
      <div className="info-container b-color-bg__black-warm--050">
        <MaterialIcon
          icon="info"
          className="b-color-text__onsurface--high-emphasis"
        />
        <p className="b-typography__caption b-color-text__onsurface--medium-emphasis">
          Pastikan nomor handphone kamu sudah terdaftar di Aplikasi Telegram
        </p>
      </div>
      <Button
        variant={"contained"}
        color={"primary"}
        onClick={onNext}
        fullWidth
      >
        Daftar Community
      </Button>
    </div>
  </div>
)

export default BareksaCommunityInput
