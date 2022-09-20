const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema(
  {
    problem_title: {
      type: String,
      required: true,
      trim: true,
    },
    problem_desc: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    image: [{
      public_id: {
        type: String,
        trim: true,
        default: ''
      },
      url: {
        type: String,
        trim: true,
        default: ''
      }
    }],
    solution_id: [
      {
        type: String,
        ref: "Solution",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Problem", problemSchema);
