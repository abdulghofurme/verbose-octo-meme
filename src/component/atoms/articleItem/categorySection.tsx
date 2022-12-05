import Link from "next/link"
import { FC } from "react"
import styles from "@styles/atoms/articleItem/categorySection.module.scss"

export interface CategorySectionProps {
  category: string
  published: string
  categoryURL?: string
}

const categoryClassName =
  "category b-typography__button b-color-text__primary--800"
const CategorySection: FC<CategorySectionProps> = ({
  category,
  categoryURL,
  published,
}) => (
  <div className={`${styles.div}`}>
    {categoryURL ? (
      <Link
        data-testid="articleItem__category"
        href={categoryURL}
        className={categoryClassName}
      >
        {category}
      </Link>
    ) : (
      <span className={categoryClassName}>{category}</span>
    )}
    <span className="b-color-text__onsurface--medium-emphasis">•</span>
    <span
      data-testid="articleItem__published"
      className="b-typography__caption b-color-text__onsurface--medium-emphasis"
    >
      {published}
    </span>
  </div>
)

export default CategorySection
