const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the schema
const postSchema = new Schema({
    postID: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    goalID: {
        type: String
    }
    category: {
        type: String,
        required: true
    },
    picture: {
        type: String
    },
    text: {
        type: String
    },
    tags: {
        type: String
    },
    likes: {
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
    },
    comments: {
        type: Map,
        of: String
    }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
