const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    optionOne: {
      type: String,
      required: true,
    },
    optionTwo: {
      type: String,
      required: true,
    },
    optionThree: {
      type: String,
    },
    optionFour: {
      type: String,
    },
    priority: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "questions",
    writeConcern: {
      w: "majority",
      wtimeout: 15000,
    },
    read: "nearest",
  }
);

const question = mongoose.model("questions", QuestionSchema);
module.exports = question;
