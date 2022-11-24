import { useQuery } from "@tanstack/react-query"
import article from "../../api/article"

export const useHeadlines = () => {
	return useQuery(['headlines'], article.getHeadlines)
}