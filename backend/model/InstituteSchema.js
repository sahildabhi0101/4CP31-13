const mongoose = require("mongoose");
const crypto = require("crypto");

const instituteSchema = new mongoose.Schema(
  {
    institute_name: {
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
    registration_no: {
      type: String,
      // required: true,
      trim: true,
    },
    success_story_id: [
      {
        type: String,
        ref: "Success_Story",
      },
    ],
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

instituteSchema
  .virtual("password")
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

instituteSchema.methods = {
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

module.exports = mongoose.model("Institute", instituteSchema);
