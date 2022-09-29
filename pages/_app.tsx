import "../styles/globals.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/client"
import client from "../constants/apollo-client";
import Guard from "../components/Guard";
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <ApolloProvider client={client}>
        <Guard>
          <Component {...pageProps} />
        </Guard>

      </ApolloProvider>
    </NextUIProvider>


  );
}

export default MyApp
