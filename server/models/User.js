const { Schema, model } = require("mongoose");
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    Credit_card_number: {
      type: Number,
      required: true,
    },
    Credit_card_expiration: {
      type: Number,
      required: true,
    },
    Credit_card_cvv: {
      type: Number,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
// userSchema.pre("save", async function (next) {
//   // creating a account/ password is changed
//   if (this.isNew || this.isModified("password")) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }
// });
const User = model("User", userSchema);

module.exports = User;
