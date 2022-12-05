import {
  FC,
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import styles from "@styles/atoms/headlineSlider.module.scss"

const HeadlineSlider: FC<PropsWithChildren> = ({ children }) => {
  const [slides, setSlides] = useState<HTMLDivElement[]>()
  const [activeSlide, setActiveSlide] = useState<number>(0)
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const childrenLength = useMemo(
    () => (children as Array<Node>).length || 0,
    []
  )

  useEffect(() => {
    if (typeof window !== undefined) {
      const slides = Array.from<HTMLDivElement>(
        document.querySelectorAll(".headlineItem")
      )
      setSlides(slides)
      onNavigate(0, slides)

      // autoplay
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          const newSlides = Array.from<HTMLDivElement>(
            document.querySelectorAll(".headlineItem")
          )
          const activeSlide = newSlides?.findIndex((slide) =>
            slide.classList.contains("active")
          )
          setActiveSlide(activeSlide)

          onNavigate(
            activeSlide < childrenLength - 1 ? activeSlide + 1 : 0,
            newSlides
          )
        }, 5000)
      }
    }
  }, [])

  const onNavigate = (activeIdx: number, newSlides?: HTMLDivElement[]) => {
    ;(newSlides || slides)?.forEach((slide, slideIdx) => {
      if (activeIdx === slideIdx) {
        slide.classList.add("active")
        slide.style.transform = `translateX(0%)`
      } else {
        slide.classList.remove("active")

        slide.style.transform = `translateX(${
          slideIdx > activeIdx
            ? `calc(${(slideIdx - activeIdx) * 100}% + ${
                16 * (slideIdx - activeIdx)
              }px)`
            : `calc(-${(activeIdx - slideIdx) * 100}% - ${
                16 * (activeIdx - slideIdx)
              }px)`
        })`
      }
    })
  }

  return (
    <>
      <section className={styles.headline_slider}>{children}</section>

      <div className={styles.navigator}>
        {Array.from(Array(childrenLength).keys()).map((idx) => (
          <button
            key={idx}
            onClick={() => onNavigate(idx)}
            className={activeSlide === idx ? "active" : ""}
            aria-label={`Show headline ${idx + 1}`}
          />
        ))}
      </div>
    </>
  )
}

export default HeadlineSlider
