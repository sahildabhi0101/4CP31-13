const mongoose = require("mongoose");

const solutionSchema = new mongoose.Schema(
  {
    student_id: {
      type: String,
      ref: "Student",
      required: true,
    },
    solution_desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Solution", solutionSchema);
