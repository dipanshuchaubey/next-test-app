import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ErrorBoundaries from "../utils/ErrorBoundaries";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundaries>
        <Component {...pageProps} />
      </ErrorBoundaries>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
