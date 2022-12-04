import { FC } from "react"
import styles from "@styles/atoms/circularLoader.module.scss"

interface CircularLoaderProps {
  marginTop?: number
  marginBottom?: number
}

const CircularLoader: FC<CircularLoaderProps> = ({
  marginTop,
  marginBottom,
}) => (
  <section
    className={styles.section}
    style={{
      ...(marginTop ? { marginTop: `${marginTop}px` } : {}),
      ...(marginBottom ? { marginBottom: `${marginBottom}px` } : {}),
    }}
  >
    <div>
      <div />
      <div />
      <div />
      <div />
    </div>
  </section>
)

export default CircularLoader
