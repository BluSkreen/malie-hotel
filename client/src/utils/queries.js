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
export const QUERY_CHECKOUT = gql`
  query getCheckout($roomNumber: Int, $startDate: [Int], $endDate: [Int], $description: String, $cost: Int) {
    checkout(roomNumber: $roomNumber, startDate: $startDate, endDate: $endDate, description: $description, cost: $cost) {
      session
    }
  }
`;
export const QUERY_ROOMS = gql`
query filterRooms($startDate: [Int], $endDate: [Int]) {
  filterRooms(startDate: $startDate, endDate: $endDate) {
    choiceKing
    choiceQueen
    deluxKing
    deluxQueen
    executiveKing
    executiveQueen
    availableRooms {
      _id
      desc
      price
      roomNumber
      title
    }
  }
}`;


