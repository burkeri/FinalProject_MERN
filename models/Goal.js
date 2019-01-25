const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the schema
const goalSchema = new Schema({
    userID: {type: String, required: true},
    category: {type: String, required: true},
    icon: {type: String, required: true},
    name: {type: String, required: true},
    frequency: {type: Number, required: true},
    description: String,
    progress: {type: Number, default: 0},
    totalWeeks: {type: Number, default: 0},
    streak: {type: Number, default: 0},
    createdAt: {type: Date, default: Date.now},
    lastUpdated: {type: Date, default: Date.now}
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;