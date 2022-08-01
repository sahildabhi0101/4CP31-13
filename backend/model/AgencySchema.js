const mongoose = require("mongoose");
const crypto = require("crypto");

const AgencySchema = new mongoose.Schema(
  {
    agencies_name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    mobile_no: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

AgencySchema.virtual("password")
  .set(function (password) {
    //create a temporarity variable called password
    this._password = password;
    //gererate salt
    this.salt = this.makeSalt();
    //encryptPassword
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

AgencySchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },

  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + "";
  },
};

module.exports = mongoose.model("Agency", AgencySchema);
