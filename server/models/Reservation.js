const { Schema, model } = require("mongoose");
const ReservationSchema = new Schema(
    {
        roomNumbers: {
            type: [Number],
            required: true,
            unique: true,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
        cost: {
            type: Number,
            required: true,
        },
        accomodations:{
            type: [String],
        },
        email: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Reservation = model("Reservation", ReservationSchema);

module.exports = Reservation;
