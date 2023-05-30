import type { AxiosError } from 'axios';
import type { UseQueryOptions, UseMutationOptions } from 'react-query';
import { QueryClient, QueryCache } from 'react-query';

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
    onError: (error) => {
      checkRefreshIssued(error as OnErrorType<null>);
    },
  }),
});

const checkRefreshIssued = async (error: OnErrorType<null>) => {
  /* JWT 갱신 에러 처리 */
};

export type OnErrorType<T> = {
  response: {
    data: {
      [key: string]: T;
    };
    status: number;
    errors: ErrorType[];
    headers: {
      map: {
        [key: string]: string;
      };
    };
  };
};

export default queryClient;

type ErrorType = {
  message: string;
};
export type MutationConfig<MutationFnType extends (...args: any) => any> = UseMutationOptions<
  ExtractFnReturnType<MutationFnType>,
  AxiosError,
  Parameters<MutationFnType>[0]
>;

export type ExtractFnReturnType<FnType extends (...args: any) => any> = ReturnType<FnType>;

export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
  UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
  'queryKey' | 'queryFn'
>;
