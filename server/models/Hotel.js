const { Schema, model } = require("mongoose");
const HotelSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    address: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },

    rooms: [
        {
            type: Schema.Types.ObjectId,
            ref: "Room",
        },
    ],

    //We can maybe store all the image paths in it
    photos: {
        type: [String],
    },
});
const Hotel = model("Hotel", HotelSchema);

module.exports = Hotel;
