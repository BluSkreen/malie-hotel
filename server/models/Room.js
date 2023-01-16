const { Schema, model } = require("mongoose");
const RoomSchema = new Schema(
    {
        roomNumber: {
            type: Number,
            required: true,
            //unique: true,
        },
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        smoking: {
            type: Boolean,
            required: true,
        },
        maxPeople: {
            type: Number,
            required: true,
        },
        numberOfBeds: {
            type: Number,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Room = model("Room", RoomSchema);

module.exports = Room;
