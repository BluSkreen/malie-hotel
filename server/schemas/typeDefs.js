const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
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

    type Room {
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
    type Hotel {
        _id: ID!
        name: String!
        address: String
        title: String
        desc: String
        rooms: [Room]
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
        user(username: String): User
        users: [User]
        hotel(_id: ID): Hotel
        room(_id: ID): Room
    }
`;

module.exports = typeDefs;
