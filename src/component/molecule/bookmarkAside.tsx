import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import styles from "@styles/molecule/bookmarkAside.module.scss"
import { BASE_IMAGE_URL, BASE_URL } from "@config/env"
import ArticleItemSmall, {
  ArticleItemSmallProps,
} from "@component/molecule/articleItem/articleItemSmall"
import AsideItemWrapper from "@component/atoms/asideItemWrapper"

interface BookmarkAsideProps {
  articles?: ArticleItemSmallProps[]
  isLogin?: boolean
}

const BookmarkAside: FC<BookmarkAsideProps> = ({
  articles = [],
  isLogin = false,
}) => {
  let title = "Tidak Ada Artikel Disimpan"
  const articlesLength = articles.length

  if (articlesLength > 0) {
    title = `${articlesLength} Artikel Disimpan`
  }

  return (
    <AsideItemWrapper
      title={title}
      className={`${styles.bookmark} b-color-bg__black-cool--050`}
    >
      {articlesLength ? (
        <>
          {[...articles].splice(0, 3).map((articleItem) => (
            <ArticleItemSmall
              key={articleItem.url}
              url={articleItem.url}
              title={articleItem.title}
              category={articleItem.category}
              thumbnail={articleItem.thumbnail}
            />
          ))}

          {articlesLength > 3 && (
            <Link
              href={`/bookmark`}
              className={`b-typography__button b-color-text__primary--800 top-link`}
            >
              Lihat Semua
            </Link>
          )}
        </>
      ) : (
        <div>
          <div>
            {isLogin ? (
              <p className="b-typography__subtitle-2--reguler b-color-text__onsurface--medium-emphasis">
                Klik “Simpan” pada artikel yang kamu suka dan kami akan
                membantumu mengingatnya.
              </p>
            ) : (
              <>
                <p className="b-typography__subtitle-2--reguler b-color-text__onsurface--medium-emphasis">
                  Untuk menyimpan artikel favoritmu, silakan
                </p>

                <Link
                  href={`${BASE_URL}/id/member/login?q=news`}
                  className={`b-typography__button b-color-text__primary--800 top-link`}
                >
                  Login Bareksa
                </Link>
              </>
            )}
          </div>
          <Image
            src={`${BASE_IMAGE_URL}/illustrations/1/news-bookmark.svg`}
            alt="Bookmark Illustration"
            width={80}
            height={80}
          />
        </div>
      )}
    </AsideItemWrapper>
  )
}

export default BookmarkAside
