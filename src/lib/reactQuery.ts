import { QueryClient, QueryCache } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
  queryCache: new QueryCache({
    onError: () => {
      checkRefreshIssued();
    },
  }),
});

const checkRefreshIssued = async () => {
  /* JWT 갱신 에러 처리 */
};

export default queryClient;
