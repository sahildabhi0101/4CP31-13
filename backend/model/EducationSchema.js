const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
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
    field_of_study: {
      type: String,
      trim: true,
    },
    graduation_year: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Education", educationSchema);
