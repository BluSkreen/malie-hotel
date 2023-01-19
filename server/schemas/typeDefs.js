const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    address: String
    Credit_card_number: String
    Credit_card_expiration: Int
    Credit_card_cvv: Int
    isAdmin: Boolean
  }

  type Room {
    _id: ID!
    roomNumber: Int!
    title: String
    price: Int
    desc: String
    hotelId: Hotel
    reservations: [Reservation]
  }

  type Hotel {
    _id: ID!
    name: String!
    address: String
    title: String
    desc: String
    rooms: [Room]
    photos: [String]
  }

  type Reservation {
    roomNumbers: [Int]
    startDate: [Int]!
    endDate: [Int]!
    cost: Int
    accomodations: [String]
    email: String
  }

  type roomTypes {
    choiceKing: Boolean!
    choiceQueen: Boolean!
    deluxKing: Boolean!
    deluxQueen: Boolean!
    exclusiveKing: Boolean!
    exclusiveQueen: Boolean!
  }
  type Order {
    _id: ID
    purchaseDate: String
    reservation: Reservation
  }
  type Auth {
    token: ID!
    user: User
  }
  type Checkout {
    session: ID
  }
  type Query {
    users: [User]
    user(username: String): User
    hotel(_id: ID): Hotel
    room(_id: ID): Room
    filterRooms(
      startDate: [Int]!
      endDate: [Int]!
      roomNum: Int
      hotelId: ID
      title: String
      price: Int
    ): roomTypes
    allReservations(roomNumber: Int): [Reservation]
    singleReservation(_id: ID, email: String): Reservation
    checkout(reservation: [ID]!): Checkout
    order(_id: ID!): Order
  }

  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
      address: String
      Credit_card_number: String
      Credit_card_expiration: Int
      Credit_card_cvv: Int
    ): Auth
    login(email: String!, password: String!): Auth
    addOrder(reservation: [ID]): Order
  }
`;

module.exports = typeDefs;
