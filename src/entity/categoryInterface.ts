export interface CategoryInterface {
	name:           string;
	slug:           string;
	count:          number;
	sub_categories: CategoryInterface[] | null;
}