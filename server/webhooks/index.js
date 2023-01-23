const { User, Room, Reservation } = require("../models");

module.exports = {
    //    /api/users

    // get all users
    async makeReservation(req, res) {
        try {
            const users = await User.find();
            if (users) {
                return res.status(200).json(users);
            } else {
                return res.status(404);
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    },
}
