const db = require("../config/connection");
const { Hotel, Room, User } = require("../models");

const roomData = require("./room.json");
const hotelData = require("./hotel.json");
const userData = require("./user.json");
// git commit -m "added apollo in package"
//Delete all existing data upon start
db.once("open", async () => {
  // clean database
  await User.deleteMany({});
  await Room.deleteMany({});
  await Hotel.deleteMany({});

  // bulk create each model
  const User = await User.create(userData);
  const Room = await Hotel.insertMany(hotelData);
  const Hotel = await Room.insertMany(roomData);

  console.log("all done!");
  process.exit(0);
});
