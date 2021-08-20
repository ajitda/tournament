import { useMemo } from "react";
import { ApolloClient, HttpLink, InMemoryCache, gql } from
    "@apollo/client";

let client;

function createApolloClient() {
  return new ApolloClient({
    // ssrMode: typeof window === "undefined", // set to true for SSR
    link: new HttpLink({
      uri: "http://localhost:8000/",
    }),
    cache: new InMemoryCache(),
  });
}

client = createApolloClient();

// function query(qry) {
//   return client.query({
//     query: gql`
//       query Query {
//         ${qry}
//       }
//     `
//   });
// }

function query(qry) {
  return client.query({
    query: qry
  });
}

export default client;

export {
  client,
  query
}