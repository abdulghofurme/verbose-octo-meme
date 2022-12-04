import { render } from "@testing-library/react"
// import { screen } from "@testing-library/jest-dom";
import ArticleItem from "../../src/component/molecule/articleItem/articleItem"
import { articleItems } from "../../__mocks__/articleItems"

describe("Article Item", () => {
  test("Content should be rendered correctly", () => {
    const article = articleItems[0]
    const { getByTestId } = render(<ArticleItem {...article} />)
    expect(getByTestId("articleItem__link").getAttribute("href")).toBe(
      article.url
    )
    expect(getByTestId("articleItem__title").innerHTML).toBe(article.title)
    const thumbnailImg = getByTestId("articleItem__thumbnail")
    expect(thumbnailImg.getAttribute("alt")).toBe(`${article.title} thumbnail`)
    const categoryElement = getByTestId("articleItem__category")
    expect(categoryElement.getAttribute("href")).toBe(article.categoryURL)
    expect(categoryElement.innerHTML).toBe(article.category)
    expect(getByTestId("articleItem__published").innerHTML).toBe(
      article.published
    )
  })
})
