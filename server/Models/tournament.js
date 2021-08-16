const mongoose = require("mongoose");

const tournament = new mongoose.Schema(
  {
    mode: { type: String, enum: ["solo", "duo", "trio"], require: true },
    startTime: { type: Date, require: true },
    scoring: { type: String, require: true },
    prize: { type: Number, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tournament", tournament);
