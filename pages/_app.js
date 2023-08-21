import "../styles/globals.css";
import Head from "next/head";
// import { ApolloProvider } from "@apollo/client/react";
// import { client } from "../client";

// console.log(client);

function MyApp({ Component, pageProps }) {
  console.log("pageProps: ", pageProps);
  return (
    //  <ApolloProvider client={client}>
    <div className="font-body">
      <Head>
        <title>{pageProps.seo.title}</title>
        <meta name="description" content={pageProps.seo.metaDesc} />
      </Head>
      <Component {...pageProps} />
    </div>
    //  </ApolloProvider>
  );
}

export default MyApp;
