import { FC } from "react"
import styles from "@styles/molecule/categoryAside.module.scss"
import AsideItemWrapper from "@component/atoms/asideItemWrapper"
import CategoryAsideItem, {
  CategoryAsideItemProps,
} from "@component/atoms/categoryAsideItem"

export interface CategoryAsideListInterface extends CategoryAsideItemProps {
  subCategories?: CategoryAsideItemProps[]
}

export interface CategoryAsideProps {
  categories: CategoryAsideListInterface[]
}

const CategoryAside: FC<CategoryAsideProps> = ({ categories }) => {
  return (
    <AsideItemWrapper title="Kategori Artikel" className={styles.section}>
      {[...categories].splice(0, 8).map((category) =>
        category.subCategories?.length || 0 > 0 ? (
          <details key={category.url}>
            <CategoryAsideItem title={category.title} />
            {category.subCategories?.map((subCategory) => (
              <CategoryAsideItem
                title={subCategory.title}
                url={subCategory.url}
                key={`subCategory-${subCategory.url}`}
              />
            ))}
          </details>
        ) : (
          <CategoryAsideItem
            key={category.url}
            title={category.title}
            url={category.url}
          />
        )
      )}
    </AsideItemWrapper>
  )
}

export default CategoryAside
