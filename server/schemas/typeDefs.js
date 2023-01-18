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
    isAdmin: Boolean!
  }

  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    user(username: String): User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
