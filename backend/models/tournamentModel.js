import mongoose from "mongoose";

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
        type: Integer,
        required: true
    }
}, {
    timestamps: true
});