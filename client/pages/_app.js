import React from "react";
import {ApolloProvider} from "@apollo/client";

import 'tailwindcss/tailwind.css'
import client from "../libs/graphQL/client";

export default function MyApp({ Component, props }) {
  function getStaticProps() {
    return {
      props: {}
    }
  }

  return (
    <ApolloProvider client={client} data-theme="cupcake">
      <Component {...props} />
    </ApolloProvider>
    )
}
