import { NextRouter } from "next/router";

export default function getCurrentURL(router: NextRouter) {
  return `${process.env.BASE_URL}${router.basePath}${
    router.pathname === "/" ? "" : router.pathname
  }`;
}
