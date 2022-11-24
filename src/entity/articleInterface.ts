export interface ArticleInterface {
	title:           string;
	subtitle:        string;
	titleSuggestion: ArticleTitleSuggestion;
	content:         string;
	slug:            string;
	newsId:          number;
	thumbnailUrl:    string;
	author:          ArticleAuthor;
	tags:            null;
	categories:      ArticleCategory[];
	cover:           ArticleCover;
	isHeader:        number;
	createdAt:       Date;
	publishedAt:     Date;
	views:           number;
	isBookmark:      boolean;
	wajib_baca:      number;
}

export interface ArticleAuthor {
	userId:   string;
	name:     string;
	username: string;
}

export interface ArticleCategory {
	name:           string;
	slug:           string;
	main:           boolean;
	parentCategory: string;
}

export interface ArticleCover {
	image:   string;
	caption: string;
}

export interface ArticleTitleSuggestion {
	input: null;
}
