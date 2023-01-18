import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation Mutation(
    $username: String!
    $email: String!
    $password: String!
    $address: String
    $creditCardNumber: String
    $creditCardExpiration: Int
    $creditCardCvv: Int
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
      address: $address
      Credit_card_number: $creditCardNumber
      Credit_card_expiration: $creditCardExpiration
      Credit_card_cvv: $creditCardCvv
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        Credit_card_cvv
        Credit_card_expiration
        Credit_card_number
        _id
        address
        email
        username
        isAdmin
        password
      }
    }
  }
`;
