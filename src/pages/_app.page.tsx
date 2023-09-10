import type { AppProps } from 'next/app';
import { QueryClientProvider, Hydrate } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '@/styles/globals.css';
import queryClient from '@/lib/reactQuery';

const MyApp = (props: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <Hydrate state={props.pageProps.dehydratedState}>
      <props.Component {...props.pageProps} />
    </Hydrate>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
export default MyApp;
