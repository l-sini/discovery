'use client';

import { ReactNode } from 'react';

import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
      gcTime: 300000,
      retry: 2,
    },
  },
  queryCache: new QueryCache({
    onError: (err: Error) => {
      console.error('API 요청 중 에러>>>', err);
      throw err;
    },
  }),
  mutationCache: new MutationCache({
    onError: (err: Error) => {
      console.error('API 요청 중 에러>>>', err);
      throw err;
    },
  }),
});

interface QueryProviderProps {
  children: ReactNode;
}

export function QueryProvider({ children }: QueryProviderProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
