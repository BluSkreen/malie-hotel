import { gql } from "@apollo/client";

export const GET_USER = gql`
  query Query($username: String) {
    user(username: $username) {
      _id
      username
      email
      password
      address
      Credit_card_number
      Credit_card_expiration
      Credit_card_cvv
      isAdmin
    }
  }
`;

export const GET_USERS = gql`
  query Query {
    users {
      _id
      username
      email
      password
      address
      Credit_card_number
      Credit_card_expiration
      Credit_card_cvv
      isAdmin
    }
  }
`;

export const QUERY_ROOMS = gql`
query filterRooms($startDate: [Int]!, $endDate: [Int]!) {
    filterRooms(startDate: $startDate, endDate: $endDate) {
        choiceKing
        choiceQueen
        deluxKing
        deluxQueen
        exclusiveKing
        exclusiveQueen
    }
}
`;
