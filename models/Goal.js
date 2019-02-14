const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a schema for the notes that will go into each goal
const noteSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    } 
});

// Create the schema for goals
const goalSchema = new Schema({
    userID: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        default: ""
    },
    name: {
        type: String,
        required: true
    },
    frequency: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        default: "Description Here..."
    },
    notes: {
        type: [noteSchema]
    },
    progress: {
        type: Number,
        default: 0
    },
    totalWeeks: {
        type: Number,
        default: 0
    },
    streak: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
});

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
