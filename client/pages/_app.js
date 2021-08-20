import 'tailwindcss/tailwind.css'
import client, { query } from "../libs/graphQL/client";
// import { ALL_USERS } from "../libs/graphQL/queries/user";
import React from "react";
import {ApolloProvider} from "@apollo/client";

export default function MyApp({ Component, props }) {
  function getStaticProps() {
    return {
      props: {
        // launches: []
      }
    }
  }

  // const { data } = apolloClient.query({
  //   query: gql`
  //     query Query {
  //       userMany {
  //         email
  //       }
  //     }
  //   `
  // });

  // const { data, err, loading } = query(ALL_USERS)

  // console.log(data, err, loading);


  return (
    <ApolloProvider client={client}>
      <Component {...props} />
    </ApolloProvider>
    )
}
