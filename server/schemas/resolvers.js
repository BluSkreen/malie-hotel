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
        filterRooms: async (parent, { startDate, endDate, hotelId, title, price, smoking, maxPeople, numberOfBeds }) => {
            // ToDo: turnary or switch that adds filter options to Query
            let roomFilter = {};
            if (hotelId != null) { roomFilter["hotelId"] = hotelId };
            if (title != null) { roomFilter["title"] = title };
            if (price != null) { roomFilter["price"] = price };
            if (smoking != null) { roomFilter["smoking"] = smoking };
            if (maxPeople != null) { roomFilter["maxPeople"] = maxPeople};
            if (numberOfBeds != null) { roomFilter["numberOfBeds"] = numberOfBeds };

            // rooms have reservations --> Room.reservations[]
            // find all rooms where reservation.startDate < startDate && reservation.endDate < endDate
            // OR
            // reservation.startDate > startDate 
            return rooms = Room.find(roomFilter).populate("reservations");

            // let availableRooms = [];
            // for each room, check if 
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
