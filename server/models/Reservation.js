const { Schema, model } = require("mongoose");
const ReservationSchema = new Schema(
    {
        roomNumbers: {
            type: [Number],
            required: true,
            unique: false,
        },
        startDate: {
            type: [Number],
            required: true,
        },
        endDate: {
            type: [Number],
            required: true,
        },
        cost: {
            type: Number,
        },
        accomodations:{
            type: [String],
        },
        email: {
            type: String,
        },
        prodId: {
            type: String,
        },
        payment: {
            type: String,
        }
    },
    { timestamps: true }
);

const Reservation = model("Reservation", ReservationSchema);

module.exports = Reservation;
