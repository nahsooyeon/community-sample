import { QueryClientProvider, Hydrate } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@/styles/globals.css";
import queryClient from "@/lib/reactQuery";
import Head from "next/head";
import { AppPropsWithLayout } from "@/types/pageLayoutType";
import { ReactElement } from "react";

export default function MyApp(props: AppPropsWithLayout) {
  const getLayout = props.Component.getLayout || ((page: ReactElement) => page);
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>매일 일기쓰기 클럽</title>
        <meta property="og:title" content="매일 일기쓰기 클럽" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hydrate state={props.pageProps.dehydratedState}>{getLayout(<props.Component {...props.pageProps} />)}</Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
