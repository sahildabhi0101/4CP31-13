const mongoose = require("mongoose");

const AgencyProblemSchema = new mongoose.Schema(
  {
    problem_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref: "Problem",
    },
    agencies_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref: "Agency",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AgencyProblem", AgencyProblemSchema);
