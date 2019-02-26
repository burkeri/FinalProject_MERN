// dependencies
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");
require("./config/passport")(passport);
const routes = require("./routes");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/finalProj";

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

// session
app.use(
  session({
    secret: "secretstring",
    saveUninitialized: true,
    resave: true,
    cookie: {
      maxAge: 365*24*60*60*1000
    },
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    })
  })
);

// passport
app.use(passport.initialize());
app.use(passport.session());

// ------

//routes
app.use(routes);

// DB connection
mongoose
  .connect(MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true })
  .then(() => {
    console.log("db connected...");
  })
  .catch(err => console.log(err));

// start server
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
