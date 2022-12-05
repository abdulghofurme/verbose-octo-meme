import Link from "next/link"
import { FC } from "react"
import styles from "@styles/atoms/categoryAsideItem.module.scss"
import MaterialIcon from "@component/atoms/material-ui/materialIcon"

export interface CategoryAsideItemProps {
  title: string
  url?: string
}

const CategoryAsideItem: FC<CategoryAsideItemProps> = ({ title, url }) => {
  const className = `b-typography__button b-color-text__primary--800 ${styles.item}`

  return url ? (
    <Link href={url} className={className}>
      {title}
    </Link>
  ) : (
    <summary className={className}>
      {title}
      <MaterialIcon icon="expand_more" className="b-color-text__primary--800" />
    </summary>
  )
}

export default CategoryAsideItem
