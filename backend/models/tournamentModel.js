const mongoose = require("mongoose");
const tournamentSchema = mongoose.Schema({
    mode: {
        type: String,
        required: true
    },
    start_time: {
        type: Date,
        required: true
    },
    scoring : {
        type : String,
        required: true
    },
    prize: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    teams: {
        type: Number,
        required: true
    },
    length: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});
const Tournament = mongoose.model("Tournament", tournamentSchema);

module.exports = Tournament;