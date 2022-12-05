import { FC } from "react"
import styles from "@styles/atoms/material-ui/materialIcon.module.scss"

interface MaterialIconProps {
  icon: string
  className?: string
  onClick?: () => void
}

const MaterialIcon: FC<MaterialIconProps> = ({
  icon,
  className = "",
  onClick,
}) => (
  <>
    <span
      {...(onClick === undefined
        ? {}
        : {
            tabIndex: 0,
            role: "button",
            onClick,
            onKeyUp: (e) => {
              if (e.key === "Enter") onClick
            },
          })}
      className={`material-icon material-symbols-outlined ${styles.icon} ${
        /color/gi.test(className) ? "" : styles["color--default"]
      } ${className}`}
    >
      {icon}
    </span>
  </>
)

export default MaterialIcon
