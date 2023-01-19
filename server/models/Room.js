const { Schema, model } = require("mongoose");
const RoomSchema = new Schema(
    {
        roomNumber: {
            type: Number,
            required: true,
            unique: true,
        },
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
        },
        desc: {
            type: String,
        },
        hotelId: {
            type: Schema.Types.ObjectId,
            ref: "Hotel",
        },
        reservations:[{
            type: Schema.Types.ObjectId,
            ref: "Reservation",
        }]
    },
    { timestamps: true }
);

const Room = model("Room", RoomSchema);

module.exports = Room;
