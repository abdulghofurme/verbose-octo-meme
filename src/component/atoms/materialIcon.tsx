import { FC } from "react";
import styles from "../../../styles/atoms/materialIcon.module.scss";

interface MaterialIconProps {
  icon: string;
  className?: string;
}

const MaterialIcon: FC<MaterialIconProps> = ({ icon, className = "" }) => (
  <>
    <span
      className={`material-icon material-symbols-rounded ${
        /color/gi.test(className) ? "" : styles["color--default"]
      } ${className}`}
    >
      {icon}
    </span>
  </>
);

export default MaterialIcon;
