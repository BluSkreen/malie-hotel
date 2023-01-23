const {  Room, Reservation } = require("../models");

module.exports = {

    async makeReservation(metadata) {
        try {
            //const users = await User.find();
          const { _id } = await Reservation.create(metadata);
          const room = await Room.findOneAndUpdate(
              { roomNumber: roomNumber },
              {
                  $addToSet: {
                      reservations: _id,
                  },
              },
          );
        } catch (err) {
            return res.status(500).json(err);
        }
    },
}
