import { gql } from "@apollo/client";

// TEMP: Fetch all users
const ALL_USERS = gql`
  query Query {
    userMany {
      email
    }
  }
`

// Login to and fetch JWT token for the user
const LOGIN = gql`
  query Query($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      name
      email
    }
  }
`

export {
  ALL_USERS,
  LOGIN,
}