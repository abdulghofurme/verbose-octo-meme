import { format, formatDistanceToNow } from "date-fns";
import idLocale from "date-fns/locale/id";

import { ArticleItemProps } from "@component/molecule/articleItem/articleItem";
import { HeadlineItemProps } from "@component/atoms/headlineItem";
import {
  ArticleCategory,
  ArticleInterface,
  ArticlePemulaInterface,
} from "@entity/articleInterface";
import { ArticleItemVerticalProps } from "@component/molecule/articleItem/articleItemVertical";

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
    return `/${this.mainCategory?.slug}/${publishedDate.getFullYear()}/${
      publishedDate.getMonth() + 1
    }/${publishedDate.getDate()}/${this.article.slug}`;
  }

  get published(): string {
    const dateArray = new Date(this.article.publishedAt)
      .toISOString()
      .split("T");
    const fullDate = dateArray[0];
    const fullTime = dateArray[1];
    const fullDateArray = (fullDate || "").split("-");
    const fullTimeArray = (fullTime || "").replace(/z/gi, "").split(":");
    const [year, month, date] = fullDateArray;
    const [hour, minute, second] = fullTimeArray;
    const publishedAtDate = new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(date),
      parseInt(hour) + 7,
      parseInt(minute),
      parseInt(second)
    );
    // publishedAtDate.setHours(publishedAtDate.getHours() + 7);
    const validPublishedAtDate =
      publishedAtDate.getTime() === publishedAtDate.getTime();

    const timeDistance = !validPublishedAtDate
      ? "1 menit yang lalu"
      : formatDistanceToNow(publishedAtDate, {
          locale: idLocale,
          addSuffix: true,
        });
    const timeDistanceInt = parseInt(timeDistance);
    let distanceToShow = timeDistance;

    distanceToShow = distanceToShow.substr(timeDistance.search(/[0-9]/gi));

    if ((timeDistance || "").includes("hari")) {
      if (timeDistanceInt > 7) {
        distanceToShow = format(publishedAtDate, "dd MMM", {
          locale: idLocale,
        });
      }
    }

    if (
      new Date().getFullYear() !== publishedAtDate.getFullYear() &&
      validPublishedAtDate
    ) {
      distanceToShow = format(publishedAtDate, "dd MMM yyyy", {
        locale: idLocale,
      });
    }

    return distanceToShow;
  }

  get headline(): HeadlineItemProps {
    return {
      url: this.url,
      background: this.article.thumbnailUrl,
      title: this.article.title,
    };
  }

  get articleItem(): ArticleItemProps {
    return {
      url: this.url,
      title: this.article.title,
      thumbnail: this.article.thumbnailUrl,
      category: this.mainCategory?.name || "Kategori",
      categoryURL: this.mainCategory?.slug ? `/${this.mainCategory.slug}` : "",
      published: this.published,
    };
  }
}

export class ArticlePemula {
  private article: ArticlePemulaInterface;

  constructor(article: ArticlePemulaInterface) {
    this.article = article;
  }

  get mainCategory(): ArticleCategory | undefined {
    return this.article.categories.find(({ main }) => main);
  }

  get url(): string {
    const publishedDate = new Date(this.article.publishedAt);
    return `/${this.mainCategory?.slug}/${publishedDate.getFullYear()}/${
      publishedDate.getMonth() + 1
    }/${publishedDate.getDate()}/${this.article.slug}`;
  }

  get articleItemVertical(): ArticleItemVerticalProps {
    return {
      url: this.url,
      title: this.article.title,
      thumbnail: this.article.thumbnailUrl,
      badge: this.article.wajib_baca ? "Wajib baca" : "",
      category: this.article.wajib_baca
        ? "Wajib baca"
        : this.mainCategory?.name || "Kategori",
    };
  }
}

export default Article;
