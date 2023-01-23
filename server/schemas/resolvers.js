const { User, Hotel, Room, Reservation, Order } = require("../models");

const { signToken, signAdmin } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");
const stripe = require("stripe")(
  "sk_test_51MS6bZCzq6l4n83nFjK2P29D5fUKZj5wh4SWqYeoW1EV8ihcN8hlLmtZSmtHKcOVATT527RtTqawBVsFy8juFQp100wKgBAuNz"
);
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
      //console.log(startDate);

      queryStartDate = queryStartDate.valueOf();
      let queryEndDate = new Date(endDate);

      queryEndDate = queryEndDate.valueOf();

      let roomFilter = {};

      roomFilter = await Room.find(roomFilter).populate("reservations");

      let roomTypes = {
        choiceKing: false,
        choiceQueen: false,
        deluxKing: false,
        deluxQueen: false,
        executiveKing: false,
        executiveQueen: false,
        availableRooms: [],
      };

      // TODO: use room list for multi room search
      let roomList = [];

      for await (let room of roomFilter) {
        if (
          roomTypes.choiceKing === true &&
          roomTypes.choiceQueen === true &&
          roomTypes.deluxKing === true &&
          roomTypes.deluxQueen === true &&
          roomTypes.executiveKing === true &&
          roomTypes.executiveQueen === true
        ) {
          // break;
        }
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
          if (resStart < queryStartDate && resEnd <= queryStartDate) {
          } else if (resStart >= queryEndDate) {
          } else {
            available = false;
          }
        }
        let roomType = room.title;

        if (available === true && roomTypes[roomType] !== true) {
          roomList.push(room);
          roomTypes[`${roomType}`] = true;
          roomTypes.availableRooms.push(room);
        }
      }

      return roomTypes;
    },

    checkout: async (
      parent,
      { roomNumber, startDate, endDate, description, cost },
      context
    ) => {
      console.log(context.headers.referer);
      // const header = "https://localhost:3001";

      const paymentId = Math.random().toString(36).substring(2, 7);
      const url = new URL(context.headers.referer).origin;

      const line_items = [];

      const reservations = await stripe.products.create({
        name: "reservation" + " : " + roomNumber,

        description: description,
      });

      const price = await stripe.prices.create({
        product: reservations.id,

        unit_amount: cost * 100,

        currency: "usd",
      });

      line_items.push({
        price: price.id,
        quantity: 1,
        tax_rates: ["txr_1MSro2Czq6l4n83ndLKLmb8o"],
      });

      console.log(context.user);
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        payment_intent_data: {
          metadata: {
            roomNumbers: roomNumber,
            startYear: startDate[0],
            startMonth: startDate[1],
            startDay: startDate[2],
            endYear: endDate[0],
            endMonth: endDate[1],
            endDay: endDate[2],
            cost: cost,
            email: context.user.email,
            prodId: paymentId,
          },
        },

        // automatic_tax: {
        //   enabled: true,
        // },
        success_url: `${url}/`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
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
      let token = signToken(user);
      //if (user.isAdmin) {
        // signAdmin
        //token = signAdmin(user);
      //} else {
        //token = signToken(user);
      //}
      return { token, user };
    },
  },
};

module.exports = resolvers;
