const mongoose = require("mongoose");

const InvestorProjectSchema = new mongoose.Schema(
  {
    project_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref: "Project",
    },
    investor_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref: "Investor",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("InvestorProject", InvestorProjectSchema);
