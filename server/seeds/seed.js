const db = require("../config/connection");
const { User, Hotel, Room } = require("../models");

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
    await User.create(userData);
    await Hotel.create(hotelData);
    //await Room.create(roomData);

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
});
