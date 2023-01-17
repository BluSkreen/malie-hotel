const { User, Hotel, Room, Reservation } = require("../models");

const resolvers = {
    Query: {
        user: async (parent, { username }) => {
            return User.findOne({ username: username });
        },
        users: async () => {
            return User.find();
        },
        hotel: async () => {
            return Hotel.find({});
        },
        room: async () => {
            return Room.find({});
        },
        filterRooms: async () => {
            // ToDo: turnary or switch that adds filter options to query

            return Room.find({});
        },
        singleReservation: async (parent, { _id, email }) => {
            try {
                // either id or email will work
                return _id ? await Reservation.find({_id: _id })
                    : await Reservation.find({email: email });
            } catch (err) {
                return JSON.stringify(err);
            }
        },
        allReservations: async () => {
            return Reservation.find({});
        },
    },
};

module.exports = resolvers;
