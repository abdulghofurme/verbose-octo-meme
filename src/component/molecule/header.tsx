import { FC, useCallback } from "react"
import Router, { useRouter } from "next/router"
import MaterialIcon from "@component/atoms/material-ui/materialIcon"
import styles from "@styles/molecule/header.module.scss"

interface HeaderProps {
  className?: string
  onBack?: () => void
  title?: string
}

const Header: FC<HeaderProps> = ({
  onBack = Router.back,
  title,
  className = "b-color-bg__surface--light",
}) => {
  const router = useRouter()
  const iconColorClassName = "b-color-text__secondary--900"
  const headerRef = useCallback((node: HTMLElement) => {
    if (!/\/\[category\]/.test(router.pathname)) {
      window.addEventListener("scroll", () => {
        if (node) {
          if (window.scrollY >= 56) node?.classList.add(styles.section__border)
          else node?.classList.remove(styles.section__border)
        }
      })
    }
  }, [])
  return (
    <header
      ref={headerRef}
      id="header--mobile"
      className={`${styles.header} ${className}`}
    >
      <MaterialIcon icon="arrow_back" className={iconColorClassName} />
      {title && <h6 className="title b-typography__h6">{title}</h6>}
      <div>
        <MaterialIcon icon="bookmarks" className={iconColorClassName} />
        <MaterialIcon icon="search" className={iconColorClassName} />
        <MaterialIcon icon="menu" className={iconColorClassName} />
      </div>
    </header>
  )
}

export default Header
