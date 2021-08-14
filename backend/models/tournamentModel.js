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
        required: false
    },
    teams: {
        type: Number,
        required: false
    },
    length: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const Tournament = mongoose.model("Tournament", tournamentSchema);

module.exports = Tournament;