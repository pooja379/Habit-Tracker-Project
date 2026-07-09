const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    userEmail: {
      type: String,
      required: true
    },
    done: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Habit", habitSchema);

