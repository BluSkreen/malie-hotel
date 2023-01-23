const {  Room, Reservation } = require("../models");

module.exports = {

    async makeReservation(metadata) {
        try {
            //const users = await User.find();
          console.log("webhook reservation");
            //console.log(data);
            console.log(metadata);
            let newReservation = {
                roomNumbers: [parseInt(metadata.roomNumbers)],
                startDate: [
                    parseInt(metadata.startYear),
                    parseInt(metadata.startMonth),
                    parseInt(metadata.startDay),
                ],
                endDate: [
                    parseInt(metadata.endYear),
                    parseInt(metadata.endMonth),
                    parseInt(metadata.endDay),
                ],
                cost: parseInt(metadata.cost),
                email: metadata.email,
                prodId: metadata.prodId,

            };
          const { _id, roomNumbers } = await Reservation.create(newReservation);
          const room = await Room.findOneAndUpdate(
              { roomNumber: roomNumbers[0] },
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
