import { NextRouter } from "next/router";

export default function getCurrentURL(router: NextRouter) {
  return `${process.env.NEXT_PUBLIC_BASE_URL}${router.basePath}${
    router.pathname === "/" ? "" : router.pathname
  }`;
}
