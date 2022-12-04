import { FC, PropsWithChildren, ReactElement, useCallback, useRef } from "react"

export interface InfiniteScrollProps extends PropsWithChildren {
  hasMore: boolean
  isLoading: boolean
  loadFunction: () => void
  LoadingComponent?: ReactElement
}

const InfiniteScroll: FC<InfiniteScrollProps> = ({
  children,
  isLoading,
  hasMore,
  loadFunction,
  LoadingComponent,
}) => {
  const observer = useRef<IntersectionObserver | null>(null)
  const ref = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading || !hasMore) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadFunction()
        }
      })
      if (node) observer.current?.observe(node)
    },
    [hasMore, isLoading]
  )

  return (
    <>
      {children}
      {isLoading && LoadingComponent}
      <div ref={ref} />
    </>
  )
}

export default InfiniteScroll
