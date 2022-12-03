import { FC, LinkHTMLAttributes } from "react";

const PreloadLink: FC<LinkHTMLAttributes<HTMLLinkElement>> = (props) => (
  <>
    {/* preconnect & load css asynchronously to eliminate render blocker css
      references:
      https://developer.chrome.com/docs/lighthouse/performance/critical-request-chains/?utm_source=lighthouse&utm_medium=devtools
      https://www.holisticseo.digital/pagespeed/async-css/
     */}
    <style
      dangerouslySetInnerHTML={{
        __html: `</style><link rel="preload" as="${props.as}" href="${props.href}" onload="this.rel='${props.rel}';"/><style>`,
      }}
    ></style>
    <style
      dangerouslySetInnerHTML={{
        __html: `</style><link rel="${props.rel}" href="${props.href}" media="print" onload="this.media='all';"/><style>`,
      }}
    ></style>
    {/* <link
      rel="preload"
      as={props.as}
      href={props.href}
      onLoad={function (this: HTMLLinkElement) {
        this.rel = props.rel || '';
      }}
    /> */}
    {/* <link
      rel={props.rel}
      href={props.href}
      media="print"
      onLoad={function (this:HTMLLinkElement) {
        this.media = "all";
      }}
    /> */}
  </>
);

export default PreloadLink;
