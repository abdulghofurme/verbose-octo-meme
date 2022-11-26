import { FC } from "react";
import Router from "next/router";
import MaterialIcon from "../atoms/materialIcon";
import styles from "../../../styles/molecule/header.module.scss";

interface HeaderProps {
  className?: string;
  onBack?: () => void;
  title?: string;
}

const Header: FC<HeaderProps> = ({
  onBack = Router.back,
  title,
  className = "b-color-bg__surface--light",
}) => {
  const iconColorClassName = "b-color-text__secondary--900";
  return (
    <header className={`${styles.header} ${className}`}>
      <MaterialIcon icon="arrow_back" className={iconColorClassName} />
      {title && <h6 className="title b-typography__h6">{title}</h6>}
      <div>
        <MaterialIcon icon="bookmarks" className={iconColorClassName} />
        <MaterialIcon icon="search" className={iconColorClassName} />
        <MaterialIcon icon="menu" className={iconColorClassName} />
      </div>
    </header>
  );
};

export default Header;
