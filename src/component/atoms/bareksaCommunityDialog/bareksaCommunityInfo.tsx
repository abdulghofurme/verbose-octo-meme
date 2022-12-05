import { FC } from "react"
import MaterialIcon from "@component/atoms/material-ui/materialIcon"
import styles from "@styles/atoms/bareksaCommunityDialog/bareksaCommunityInfo.module.scss"

interface BareksaCommunityInfoProps {
  onBack: () => void
  onClose: () => void
}

const BareksaCommunityInfo: FC<BareksaCommunityInfoProps> = ({
  onBack,
  onClose,
}) => (
  <div className={styles.container}>
    <div className="header">
      <MaterialIcon
        icon="arrow_back"
        className="b-color-text__onsurface--high-emphasis"
        onClick={onBack}
      />
      <h6 className="b-typography__h6 b-color-text__onsurface--high-emphasis">
        Info Bareksa Community
      </h6>
      <MaterialIcon
        icon="close"
        className="b-color-text__onsurface--high-emphasis"
        onClick={onClose}
      />
    </div>
    <div className="content">
      {[
        "Komunitas ini adalah transformasi dari Bareksa Fund Academy, yaitu kelas pembelajaran tentang investasi secara online.",
        "Di Komunitas ini, kalian bisa mendapatkan konten materi investasi mingguan untuk menambah pengetahuan dalam berinvestasi.",
        "Kalian juga bisa bertanya dan saling berbagi pengalaman investasi di dalam komunitas ini.",
      ].map((infoItem) => (
        <p
          key={infoItem}
          className="b-typography__body-1--medium b-color-text__onsurface--medium-emphasis"
        >
          {infoItem}
        </p>
      ))}
    </div>
  </div>
)
export default BareksaCommunityInfo
