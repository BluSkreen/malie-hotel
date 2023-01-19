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
    photos: {
      type: [String],
    },
    hotelId: {
      type: Schema.Types.ObjectId,
      ref: "Hotel",
    },
    reservations: [
      {
        type: Schema.Types.ObjectId,
        ref: "Reservations",
      },
    ],
  },
  { timestamps: true }
);

const Room = model("Room", RoomSchema);

module.exports = Room;
