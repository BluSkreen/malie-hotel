const { User, Hotel, Room, Reservation } = require("../models");

const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.findOne({ username: username });
    },
    users: async () => {
      return User.find();
    },
    // hotel: async () => {
    //   return Hotel.find({});
    // },
    // room: async () => {
    //   return Room.find({});
    // },
    // filterRooms: async () => {
    //   // ToDo: turnary or switch that adds filter options to query

    //   return Room.find({});
    // },
    // singleReservation: async (parent, { _id, email }) => {
    //   try {
    //     // either id or email will work
    //     return _id
    //       ? await Reservation.find({ _id: _id })
    //       : await Reservation.find({ email: email });
    //   } catch (err) {
    //     return JSON.stringify(err);
    //   }
    // },
    // allReservations: async () => {
    //   return Reservation.find({});
    // },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
