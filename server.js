// dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");

// start express app
const app = express();

// DB connection
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/finalProj";
mongoose.connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("db connected..."))
  .catch(err => console.log(err));


// middleware ------
// serve static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// bodyparser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// server port
const PORT = process.env.PORT || 3001;

//routes
app.use(routes);

// start server
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
