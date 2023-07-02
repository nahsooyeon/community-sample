import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';
import queryClient from '@/lib/reactQuery';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};
export default MyApp;
