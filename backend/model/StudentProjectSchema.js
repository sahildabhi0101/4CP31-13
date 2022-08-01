const mongoose = require("mongoose");

const StudentProjectSchema = new mongoose.Schema(
  {
    project_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref: "Project",
    },
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref: "Student",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("StudentProject", StudentProjectSchema);
