const db = require("../config/connection");
const { User, Hotel, Room, Reservation, Order } = require("../models");

const roomData = require("./room.json");
const hotelData = require("./hotel.json");
const userData = require("./user.json");
const reservationData = require("./reservation.json");
// git commit -m "added apollo in package"
//Delete all existing data upon start
db.once("open", async () => {
  // clean database
  await User.deleteMany({});
  await Room.deleteMany({});
  await Hotel.deleteMany({});
  await Reservation.deleteMany({});

  // bulk create each model
  await User.create(userData);
  await Hotel.create(hotelData);
  //await Room.create(roomData);

  // create rooms and add them to a hotel
  for (let i = 0; i < roomData.length; i++) {
    const { _id } = await Room.create(roomData[i]);
    const user = await Hotel.findOneAndUpdate(
      { name: "Maui something forgot name" },
      {
        $addToSet: {
          rooms: _id,
        },
      }
    );
  }

  // create reservations and add them to a room
  for (let i = 0; i < reservationData.length; i++) {
    const { _id, roomNumbers } = await Reservation.create(reservationData[i]);
    const room = await Room.findOneAndUpdate(
      { roomNumber: roomNumbers[0] },
      {
        $addToSet: {
          reservations: _id,
        },
      }
    );
  }
});
