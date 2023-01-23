const {  Room, Reservation } = require("../models");

module.exports = {

    async makeReservation(metadata) {
        try {
            //const users = await User.find();
          console.log("webhook reservation");
          let startDate = JSON.parse(metadata.startDate);
          let endDate = JSON.parse(metadata.endDate);
          const { _id } = await Reservation.create({...metadata, ["startDate"]:startDate, ["endDate"]:endDate});
          const room = await Room.findOneAndUpdate(
              { roomNumber: roomNumber },
              {
                  $addToSet: {
                      reservations: _id,
                  },
              },
          );
        } catch (err) {
            console.log(err);
        }
    },
}
