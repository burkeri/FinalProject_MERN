// dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/finalProj";
const User = require("./models/User");
const Goal = require("./models/Goal");

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
mongoose
  .connect(
    MONGO_URI,
    { useCreateIndex: true, useNewUrlParser: true }
  )
  .then(() => {
    console.log("db connected...");
    // create a test user and save to DB
      const testUser = new User({
        name: "test",
        username: "tester",
        email: "test@email.com",
        password: "test",
        dob: "01/01/1111",
        premium: "true"
      });
      testUser.save(err => err ? console.log(err) : console.log(`testUser saved.`));
    // create a test goal and save to the DB
      const testGoal = new Goal({
        userID: "tester",
        category: "mind",
        icon: "iconURL",
        name: "test",
        frequency: 3,
        description: "Test goal... Not real.",
        progress: 50,
        totalWeeks: 2,
        streak: 2
      });
      testGoal.save(err => err ? console.log(err) : console.log(`testGoal saved.`));

  })
  .catch(err => console.log(err));

// start server
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
