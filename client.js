import { ApolloClient, InMemoryCache } from "@apollo/client";
console.log(process.env.WP_GRAPHQL_URL);

export const client = new ApolloClient({
  uri: process.env.WP_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

// import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

// const httpLink = createHttpLink({
//   uri: "http://localhost:10004/graphql",
// });

// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache(),
// });

// export default client;
