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
    filterRooms: async (parent, { startDate, endDate, hotelId, title, price }) => {
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
        // rooms have reservations --> Room.reservations[]
        // find all rooms where reservation.startDate < startDate && reservation.endDate < endDate
        // OR
        // reservation.startDate > queryStartDate

        // could stringify an object to relay room type
        let roomTypes = {
            "choiceKing": false,
            "choiceQueen": false,
            "deluxKing": false,
            "deluxQueen": false,
            "exclusiveKing": false,
            "exclusiveQueen": false
        }    
        
        console.log(roomTypes);
        // the front end needs the TYPE of rooms available for a time frame
        await roomFilter.forEach((room, roomIndex) => {
            for(resIndex = 0; resIndex < roomFilter[roomIndex].reservations.length - 1; resIndex++) {
                // date are stored as stringified array --> "[yyyy,mm,dd]"
                let resStart = room.reservations[resIndex].startDate;
                resStart = new Date(resStart);
                resStart = resStart.valueOf();
                let resEnd = room.reservations[resIndex].endDate;
                resEnd = new Date(resEnd);
                resEnd = resEnd.valueOf();

                // The reservation must be before or after the query date
                if(resStart < queryStartDate && !(resEnd <= queryEndDate)) {
                    break;
                } else if(!(resStart > queryEndDate)) {
                    break;
                } else if(resIndex == roomFilter[roomIndex].reservations.length - 1) {
                    // If the last reservations is reached without conflict
                    // Then make the roomType true
                    // returnRooms.push(roomFilter[roomIndex]);
                    roomTypes[roomFilter[roomIndex].title] = true;
                }
            }
        });
        for(let roomIndex = 0; roomIndex < roomFilter.length - 1; roomIndex++) {
            for(resIndex = 0; resIndex < roomFilter[roomIndex].reservations.length - 1; resIndex++) {
                // date are stored as stringified array --> "[yyyy,mm,dd]"
                let resStart = roomFilter[roomIndex].reservations[resIndex].startDate;
                resStart = new Date(resStart);
                resStart = resStart.valueOf();
                let resEnd = roomFilter[roomIndex].reservations[resIndex].endDate;
                resEnd = new Date(resEnd);
                resEnd = resEnd.valueOf();

                // The reservation must be before or after the query date
                if(resStart < queryStartDate && !(resEnd <= queryEndDate)) {
                    break;
                } else if(!(resStart > queryEndDate)) {
                    break;
                } else if(resIndex == roomFilter[roomIndex].reservations.length - 1) {
                    // If the last reservations is reached without conflict
                    // Then make the roomType true
                    // returnRooms.push(roomFilter[roomIndex]);
                    roomTypes[roomFilter[roomIndex].title] = true;
                }
            }
        }
        console.log(roomTypes);

        return { ...roomTypes };

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
      console.log("Hi + " + email, password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
