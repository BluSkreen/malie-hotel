const { User, Hotel, Room, Reservation, Order } = require("../models");

const { signToken } = require("../utils/auth");
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
    // checkoutCard: async (parent, { cardInfo }, context) => {
    //   if (context.user) {
    //     return User.findOneAndUpdate(context.user._id, {
    //       $push: {
    //         Credit_card_number: Credit_card_number,
    //         Credit_card_month: Credit_card_month,
    //         Credit_card_year: Credit_card_year,
    //         Credit_card_cvv: Credit_card_cvv,
    //       },
    //     });
    //     // return userData;
    //   }
    // },

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
    // order: async (parent, { _id }, context) => {
    //   if (context.user) {
    //     const user = await User.findById(context.user._id).populate({
    //       path: "orders.reservation",
    //       // populate: "category",
    //     });

    //     return user.orders.id(_id);
    //   }

    //   throw new AuthenticationError("Not logged in");
    // },
    checkout: async (parent, args, context) => {
      // console.log(context.headers.referer);
      const header = "https://localhost:3001";
      // const url = new URL(context.headers.referer).origin;
      const url = new URL(header).origin;
      const order = new Order({ reservation: args.reservation });
      const line_items = [];

      const { reservation } = await order.populate("reservation");
      console.log("sod");

      // for (let i = 0; i < reservation.length; i++) {
      const reservations = await stripe.products.create({
        // name: reservation.name,
        name: "reservation",
        // price: reservation.cost,

        // images: [`${url}/images/${reservations[i].image}`],
      });
      // Find user based off the the context
      // write the credit info into model
      // console.log("sid", args.reservation._id);
      console.log(reservations);
      const price = await stripe.prices.create({
        // product: reservations.id,
        product: reservations.id,
        unit_amount: 100,
        // cost: reservation.cost,
        // unit_amount: reservations.price * 100,
        currency: "usd",
      });
      console.log("hello");
      console.log(price);

      line_items.push({
        price: price.id,
        quantity: 1,
      });
      // }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
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
      console.log("Hi + " + email, password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    // addOrder: async (parent, { user }, context) => {
    //   console.log(args);
    //   // if (context.user) {
    //   const order = new Order(args.reservation);
    //   const userID = "63c702f4bd5534f73956af44";
    //   await User.findByIdAndUpdate(context.userID, {
    //     $push: { orders: order },
    //   });
    //   console.log(order);
    //   return order;
    //   // }

    //   // throw new AuthenticationError("Not logged in");
    // },
  },
};

module.exports = resolvers;
