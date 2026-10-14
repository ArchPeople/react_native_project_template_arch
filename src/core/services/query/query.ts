import { QueryClient } from '@tanstack/react-query';

export const query = {
  client: new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
      },
    },
  }),
};
