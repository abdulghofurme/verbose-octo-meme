import { FC, LinkHTMLAttributes } from "react";

const PreloadLink: FC<LinkHTMLAttributes<HTMLLinkElement>> = (props) => (
	<>
  <link rel="style" href={props.href}  />
	<link {...props} />
	</>
)

export default PreloadLink