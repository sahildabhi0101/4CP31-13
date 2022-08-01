const mongoose = require("mongoose");

const successSchema = new mongoose.Schema(
  {
    success_title: {
      type: String,
      required: true,
    },
    success_desc: {
      type: String,
      required: true,
    },
    project_id: {
      type: String, 
      ref: "Project"
    },
    institute_id: {
      type: String,
      ref: "Institute"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("SuccessStory", successSchema);
