import { HeadlineItemProps } from "../component/atoms/headlineItem";
import { ArticleCategory, ArticleInterface } from "./articleInterface";

class Article {
  private article!: ArticleInterface;

  constructor(article: ArticleInterface) {
    this.article = article;
  }

  get mainCategory(): ArticleCategory | undefined {
    return this.article.categories.find(({ main }) => main);
  }

  get url(): string {
    const publishedDate = new Date(this.article.publishedAt);
    return `/${this.mainCategory?.slug}/${publishedDate.getFullYear()}/${publishedDate.getMonth() + 1}/${publishedDate.getDate()}/${this.article.slug}`;
  }

  get headline(): HeadlineItemProps {
    return {
      background: this.article.thumbnailUrl,
      url: this.url,
			title: this.article.title
    };
  }
}

export default Article