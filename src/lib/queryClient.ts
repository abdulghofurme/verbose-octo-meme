import { QueryClient, QueryClientConfig } from "@tanstack/react-query";

const CONFIG: QueryClientConfig = {
  defaultOptions: {
    queries: {
      // staleTime: 1000 * 60 * 15,
      staleTime: 0,
      cacheTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
    },
  },
};

export const ServerQueryClient = new QueryClient(CONFIG);

export const AppQueryClient = new QueryClient(CONFIG);
