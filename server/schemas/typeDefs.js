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
    orders: [Order]
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
    prodId: String
    payment: String
  }

  type roomTypes {
    choiceKing: Boolean!
    choiceQueen: Boolean!
    deluxKing: Boolean!
    deluxQueen: Boolean!
    executiveKing: Boolean!
    executiveQueen: Boolean!
    availableRooms: [Room]
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
      startDate: [Int]
      endDate: [Int]
      roomNum: Int
      hotelId: ID
      title: String
      price: Int
    ): roomTypes
    allReservations(roomNumber: Int): [Reservation]
    singleReservation(_id: ID, email: String): Reservation
    checkout(roomNumber: Int, startDate: [Int], endDate: [Int], description: String, cost: Int): Checkout
    order(_id: ID!): Order
    checkoutCard(
      Credit_card_number: Int!
      Credit_card_month: Int!
      Credit_card_year: Int!
      Credit_card_cvv: Int!
    ): User
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
    addOrder(reservation: ID): Order
  }
`;

module.exports = typeDefs;
