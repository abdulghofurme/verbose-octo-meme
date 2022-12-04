import { FC, LinkHTMLAttributes } from "react"

const PreloadLink: FC<LinkHTMLAttributes<HTMLLinkElement>> = (props) => (
  <>
    <link rel="preload" as={props.as} href={props.href} />
    <link rel={props.rel} href={props.href} />
  </>
)

export default PreloadLink
