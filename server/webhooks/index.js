const { User, Room, Reservation } = require("../models");

module.exports = {

    async makeReservation(stripeBody) {
        try {
            const users = await User.find();
            if (users) {
                return ;
            } else {
                return res.status(404);
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    },
}