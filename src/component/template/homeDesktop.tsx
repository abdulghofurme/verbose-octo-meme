import { FC } from "react"
import HeaderDesktop from "@component/atoms/headerDesktop"
import CategoryAside, {
  CategoryAsideProps,
} from "@component/molecule/categoryAside"
import Footer from "@component/molecule/footer"
import Headline from "@component/molecule/headline"
import PemulaAside, { PemulaAsideProps } from "@component/organism/pemulaAside"
import { HomeGeneralTemplateProps } from "./home"
import SearchInput from "@component/atoms/searchInput"
import BookmarkAside from "@component/molecule/bookmarkAside"
import SocialMediaAside from "@component/molecule/socialMediaAside"

import styles from "@styles/template/homeDesktop.module.scss"
import BareksaCommunityAside from "@component/molecule/bareksaCommunityAside"
import ArticleItemBig, {
  ArticleItemBigProps,
} from "@component/molecule/articleItem/articleItemBig"
import Button from "@component/atoms/button"
import Link from "next/link"
import dynamic from "next/dynamic"
const CircularLoader = dynamic(import("@component/atoms/circularLoader"), {
  ssr: false,
})

export interface HomeDesktopTemplateProps extends HomeGeneralTemplateProps {
  articles: ArticleItemBigProps[]
  categoryAside: CategoryAsideProps
  pemulaAside: PemulaAsideProps
}

const HomeDesktopTemplate: FC<HomeDesktopTemplateProps> = ({
  title,
  headline,
  articles,
  categoryAside,
  pemulaAside,
  infiniteScroll,
}) => {
  return (
    <>
      <HeaderDesktop />

      <main className={styles["main--desktop"]}>
        <section>
          <h1 className="b-typography__h4 b-color-text__onsurface--high-emphasis page-title">
            {title}
          </h1>

          <Headline {...headline} />

          <h2 className="b-typography__overline b-color-text__secondary--900">
            <Link href="/terbaru">ARTIKEL PASAR UANG TERBARU</Link>
          </h2>

          {articles.map((articleItem) => (
            <ArticleItemBig key={articleItem?.url} {...articleItem} />
          ))}

          {infiniteScroll.hasMore && (
            <>
              {infiniteScroll.isLoading ? (
                <CircularLoader />
              ) : (
                <Button
                  variant={"outlined"}
                  color={"primary"}
                  onClick={infiniteScroll.loadFunction}
                >
                  Selanjutnya
                </Button>
              )}
            </>
          )}
        </section>

        <aside>
          <SearchInput />
          <BookmarkAside articles={articles} />
          <CategoryAside {...categoryAside} />
          <PemulaAside {...pemulaAside} />
          <SocialMediaAside />
          <BareksaCommunityAside />
        </aside>
      </main>

      <Footer />
    </>
  )
}

export default HomeDesktopTemplate
