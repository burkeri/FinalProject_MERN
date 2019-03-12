const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the schema
const postSchema = new Schema({
  userID: {
    type: String,
    required: true
  },
  goalID: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  picture: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
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
