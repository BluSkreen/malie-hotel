const { Schema, model } = require("mongoose");
const ReservationSchema = new Schema(
    {
        roomNumbers: {
            type: [Number],
            required: true,
            unique: true,
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
    },
    { timestamps: true }
);

const Reservation = model("Reservation", ReservationSchema);

module.exports = Reservation;
