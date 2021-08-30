import { ApolloClient, createHttpLink, InMemoryCache } from
    "@apollo/client";

import { setContext } from '@apollo/client/link/context';

const httpLink = new createHttpLink({
  uri: "http://localhost:8000/",
});

const authLink = setContext((_, { headers }) => {
  if (typeof localStorage === "undefined" || localStorage === null) {
    return {}
 }
  // get the authentication token from local storage if it exists
  const token = localStorage?.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

function createApolloClient() {
  return new ApolloClient({
    // ssrMode: typeof window === "undefined", // set to true for SSR
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    onError: ({ networkError, graphQLErrors }) => {
      console.log('graphQLErrors', graphQLErrors)
      console.log('networkError', networkError)
      console.log('statusCode', networkError.statusCode)
      console.log('networkError', JSON.stringify(networkError, null, 2))
    }
  });
}

const client = createApolloClient();

export default client;

export {
  client,
}