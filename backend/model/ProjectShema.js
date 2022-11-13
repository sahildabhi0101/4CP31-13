const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    project_title: {
      type: String,
      required: true,
      trim: true,
    },
    project_desc: {
      type: String,
      required: true,
      trim: true,
    },
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
    status:{
      type: String,
      trim: true,
      default:'active'
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    success_Story_id: [
      {
        type: String,
        ref: "SuccessStory",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
