// dependencies
require("dotenv").config();
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");
require("./config/passport")(passport);
const routes = require("./routes");
const multer = require("multer");
const cloudinary = require("cloudinary");
const fileUploadMiddleware = require("./file-upload-middleware");

// MongoDB setup
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/finalProj";

// Node server port
const PORT = process.env.PORT || 3001;

// start express app
const app = express();

// Cloudinary and multer setup
cloudinary.config({
  cloud_name: "winterfreshness",
  api_key: "966246874184822",
  api_secret: "gkjsFLkyUfebwq7AVIu8yFKA104"
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Middleware ------------------
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
    secret: "keyboard cat",
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      test: "test"
    }),
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);

// passport
app.use(passport.initialize());
app.use(passport.session());
// -----------------------------

// set express to use routes
app.use(routes);
app.post("/files", upload.single("file"), fileUploadMiddleware);

app.post("/api/changeProfilePicture", (req, res) => {
  console.log("/api/changeProfilePicture");
  console.log(req.body);
  // you can do whatever you want with this data
  // change profile pic, save to DB, or send it to another API
  res.end();
});

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
