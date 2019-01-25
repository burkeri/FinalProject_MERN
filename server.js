// dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/finalProj";

// server port
const PORT = process.env.PORT || 3001;

// start express app
const app = express();

// middleware ------
// serve static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// bodyparser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use(routes);

// DB connection
mongoose.connect(MONGO_URI, {useCreateIndex: true, useNewUrlParser: true})
  .then(() => console.log("db connected..."))
  .catch(err => console.log(err));

// start server
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
