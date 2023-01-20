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

    // TODO: Add numberOfRooms paramater
    filterRooms: async (
      parent,
      { startDate, endDate, roomNum, hotelId, title, price }
    ) => {
      // date format is a stringified array --> "[yyyy,mm,dd]"
      let queryStartDate = new Date(startDate);
      queryStartDate = queryStartDate.valueOf();
      let queryEndDate = new Date(endDate);
      queryEndDate = queryEndDate.valueOf();

      let roomFilter = {};
      // if (hotelId != null) { roomFilter["hotelId"] = hotelId };
      // if (title != null) { roomFilter["title"] = title };
      // if (price != null) { roomFilter["price"] = price };
      roomFilter = await Room.find(roomFilter).populate("reservations");

      let roomTypes = {
        choiceKing: false,
        choiceQueen: false,
        deluxKing: false,
        deluxQueen: false,
        exclusiveKing: false,
        exclusiveQueen: false,
      };

      // TODO: use room list for multi room search
      let roomList = [];

      for await (let room of roomFilter) {
        let available = true;
        for await (let reservation of room.reservations) {
          // use the epoch to check difference in time
          let resStart = reservation.startDate;
          resStart = new Date(resStart);
          resStart = resStart.valueOf();
          let resEnd = reservation.endDate;
          resEnd = new Date(resEnd);
          resEnd = resEnd.valueOf();

          // The reservation must be before or after the query date
          if (resStart < queryStartDate && !(resEnd <= queryEndDate)) {
            available = false;
            console.log("bad");
            break;
          } else if (!resStart > queryEndDate) {
            available = false;
            console.log("bad");
            break;
          }
        }
        if (available === true) {
          let roomType = room.title;
          roomList.push(room);
          roomTypes[roomType] = true;
        }
      } // for loop

      return roomTypes;
    },
    singleReservation: async (parent, { _id, email }) => {
      try {
        // either id or email will work
        return _id
          ? await Reservation.find({ _id: _id })
          : await Reservation.find({ email: email });
      } catch (err) {
        return JSON.stringify(err);
      }
    },
    allReservations: async () => {
      return Reservation.find({});
    },
    hotel: async () => {
      return Hotel.find({});
    },
    room: async () => {
      return Room.find({});
    },
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
      // console.log("Hi + " + email, password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
