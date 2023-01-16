const { User, Room, Hotel } = require("../models");

const resolvers = {
    Query: {
        user: async (parent, { username }) => {
            return User.findOne({ username: username });
        },
        users: async () => {
            return User.find();
        },
        room: async () => {
            return Room.find({});
        },
        hotel: async () => {
            return Hotel.find({});
        },
    },
};

module.exports = resolvers;
