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
        smoking: Boolean
        maxPeople: Int
        numberOfBeds: Int
        desc: String
        photos: String
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
        startDate: String!
        endDate: String!
        cost: Int
        accomodations: [String]
        email: String
    }

    type Auth {
        token: ID!
        user: User
    }

    input UserInput {
        _id: ID!
        username: String!
        email: String!
        address: String
        Credit_card_number: String
        Credit_card_expiration: Int
        Credit_card_cvv: Int
        password: String!
        isAdmin: Boolean
    }
    input HotelInput {
        _id: ID!
        name: String!
        address: String
        title: String
        desc: String
    }

    input RoomInput {
        _id: ID!
        roomNumber: Int!
        title: String
        price: Int
        smoking: Boolean
        maxPeople: Int
        desc: String
        numberOfBeds: Int
        photos: String
    }

    type Query {
        users: [User]
        user(username: String): User
        hotel(_id: ID): Hotel
        room(_id: ID): Room
        filterRooms(startDate: String!, endDate: String!, hotelId: ID, title: String, price: Int, smoking: Boolean, maxPeople: Int, numberOfBeds: Int): [Room]
        allReservations(roomNumber: Int): [Reservation]
        singleReservation(_id: ID, email: String): Reservation
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
  }
`;

module.exports = typeDefs;
