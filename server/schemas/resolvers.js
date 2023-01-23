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
      //console.log(startDate);
      console.log(queryStartDate);
      console.log("----");
      queryStartDate = queryStartDate.valueOf();
      let queryEndDate = new Date(endDate);
      //console.log(endDate);
      console.log(queryEndDate);
      console.log("----");
      queryEndDate = queryEndDate.valueOf();
      //console.log(queryStartDate);
      //console.log(queryEndDate);

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
        executiveKing: false,
        executiveQueen: false,
        availableRooms: [],
      };

      //if(startDate.length == 0 || endDate.length == 0){
      //    console.log("why");
      //    return roomTypes;
      //}

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
          // console.log("'-----");
          // console.log(resStart);
          resStart = resStart.valueOf();
          let resEnd = reservation.endDate;
          resEnd = new Date(resEnd);
          // console.log(resEnd);
          // console.log("----");
          resEnd = resEnd.valueOf();
          // console.log(resStart, resEnd);
          // console.log(reservation);

          // The reservation must be before or after the query date
          if (resStart < queryStartDate && resEnd <= queryStartDate) {
            // console.log("good");
            // console.log(reservation)
          } else if (resStart >= queryEndDate) {
            // console.log("good");
            // console.log(reservation)
          } else {
            // console.log(room)
            // console.log("bad");
            // console.log(reservation)
            available = false;
          }
        }
        let roomType = room.title;
        // console.log(room);
        if (available === true && roomTypes[roomType] !== true) {
          roomList.push(room);
          roomTypes[`${roomType}`] = true;
          roomTypes.availableRooms.push(room);
          // && roomTypes[roomType] !== true
        }
      } // for loop
      // console.log(roomTypes);

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


    checkout: async (parent, { roomNumber, startDate, endDate, description, cost }, context) => {
      // console.log("Hi Sid: " + room, cost, description);
      console.log(context.headers.referer);
      // const header = "https://localhost:3001";
    
          const paymentId = Math.random().toString(36).substring(2,7);
      const url = new URL(context.headers.referer).origin;
      // console.log(context.headers.referer);
      // const url = new URL(header).origin;
      // const order = new Order({ reservation: args.reservation });
      const line_items = [];
      // console.log("helpME: " + order);

      // const { reservation } = await order.populate("reservation");
      // const updateReservation = await Reservation.create(args.reservation);
      // console.log("updateReservation: " + updateReservation);
      // console.log("sod");
      // const resData = {
      //   roomNumbers: [202],
      //   startDate: [2023, 4, 24],
      //   endDate: [2023, 4, 25],
      //   cost: 100,
      //   accomodations: ["TV", "hotub"],
      //   email: "jason@gg.gg",
      // };
      // const updateReservation = await Reservation.create({ resData });
      // console.log(updateReservation);

      // for (let i = 0; i < reservation.length; i++) {
      const reservations = await stripe.products.create({
        // name: reservation.name,
        name: "reservation" + " : " + roomNumber,
        // default_price_data: cost,
        description: description,
        // price: reservation.cost,

        // images: [`${url}/images/${reservations[i].image}`],
      });
      console.log("hi resrvations");
      // Find user based off the the context
      // write the credit info into model
      // console.log("sid", args.reservation._id);
      console.log(reservations);
      const price = await stripe.prices.create({
        // product: reservations.id,
        product: reservations.id,
          // TODO USE THE COST -------------!!!!!!!!!!!!!!!
        unit_amount: 100 * 100,
        // cost: reservation.cost,
        // unit_amount: reservations.price * 100,
        currency: "usd",
      });

      console.log("hello");
      // console.log(price);

      line_items.push({
        price: price.id,
        quantity: 1,
        tax_rates: ["txr_1MSro2Czq6l4n83ndLKLmb8o"],
      });
      // }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        metadata: { 
            "roomNumbers": [roomNumber],
            "startDate": startDate,
            "endDate": endDate,
            "cost": cost,
            "email": context.user.email,
            "prodId": paymentId,
        }

        // automatic_tax: {
        //   enabled: true,
        // },
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });
      // .then(() => {
      //   console.log("dd43");
      // const sessionId = stripe.checkout.sessions.retrieve(
      //   "cs_test_a1u8xJmEkIHXJFuK3OhyttKPKs9pc81ZEcIM777TUV9gtHPHPgq4wFVqOC"
      // );
      console.log("sessionId");
      console.log(session);
          //console.log(context)
      // console.log(sessionId);
      //try { 
          //const reservationObj = {
          //    "roomNumbers": [roomNumber],
          //    "startDate": startDate,
          //    "endDate": endDate,
          //    "cost": cost,
          //    "email": context.user.email,
          //    "prodId": paymentId,
          //    "payment": "pending",
          //}
          //const { _id } = await Reservation.create({ ...reservationObj });
          //const room = await Room.findOneAndUpdate(
          //    { roomNumber: roomNumber },
          //    {
          //        $addToSet: {
          //            reservations: _id,
          //        },
          //    },
          //);
      //} catch (err) {
      //    console.log(err);
      //}


      // });
      // console.log("fdfd");
      // if (session.success_url.length > 0) {
      //   console.log("dd43");
      //   const sessionId = await stripe.checkout.sessions.retrieve(session.id);
      //   console.log("sessionId");
      //   console.log(sessionId);
      // }
      //if (session) {
      //await Reservation.create({
      //  roomNumbers: room,

      //  startDate: [2021, 11, 23],
      //  endDate: [2021, 11, 24],
      //  cost: cost,
      //  accomodations: ["Tv"],
      //  email: context.user.email,
      //});
      console.log("/////////////////////////////");
      console.log(session);
      console.log("/////////////////////////////");
      //}

      return { session: session.id };
    },

    // wehook: async (parent, args, context) => {
    //   const event = args;
    //   switch(event.type){}
    // }
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
      let token;
      if (user.isAdmin) {
        // signAdmin
        token = signAdmin(user);
      } else {
        token = signToken(user);
      }
      return { token, user };
    },

    //admin: async (parent, { email, password }) => {

    //}
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
